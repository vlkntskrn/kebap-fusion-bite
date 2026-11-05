class_name RoomScreen
extends Control
## Tam ekran oda.
## - Eşyaya dokun: seçilir, üstünde araç çubuğu çıkar (aynala, çevir, eğ, büyüt/küçült, düzelt, çöp).
## - Eşyayı sürükle: taşınır. Boş yeri sürükle: oda sağa sola kayar. Boş yere dokun: seçim kalkar.
## - İki parmak ya da +/- düğmeleri: yakınlaştırma. ↶: geri al.
## Tek parmak/fare fare olaylarıyla (telefonda dokunma fareye çevrilir), iki parmak dokunma olaylarıyla izlenir.

signal back

var room_id := ""
var world: RoomWorld
var zoom := 0.85

var _selected := {}  # seçili eşyanın kaydı
var _press := {}  # basılan eşya (sürükleme adayı)
var _dragging := false
var _grab := Vector2.ZERO  # dokunulan nokta ile eşyanın alt-orta noktası farkı (oda pikseli)
var _press_pos := Vector2.ZERO
var _last_pos := Vector2.ZERO
var _moved := false
var _down := false
var _pan_x := NAN
var _touches: Dictionary = {}
var _pinching := false
var _pinch_d := 0.0
var _pinch_zoom := 1.0
var _undo: Array = []  # odanın önceki hâlleri (JSON)

var _tools: PanelContainer
var _tool_buttons: Dictionary = {}
var _undo_btn: Button

const ZOOM_MIN := 0.6
const ZOOM_MAX := 2.2
const BTN := 96.0
const UI_Z := 4000
const TOOL := 74.0
const TOOLS := ["flip", "turn", "left", "right", "big", "small", "reset", "trash"]


func _ready() -> void:
	mouse_filter = Control.MOUSE_FILTER_STOP
	clip_contents = true
	world = RoomWorld.new()
	world.setup(room_id)
	add_child(world)
	_buttons()
	_make_tools()
	# Arayüz her zaman eşyaların önünde (eşyaların sırası 1..3000 arası).
	for c in get_children():
		if c != world:
			c.z_index = UI_Z
	resized.connect(_apply_view)
	_apply_view()


# ------------------------------------------------------------------ düğmeler

func _buttons() -> void:
	var b := UI.round_button("ui_geri", "<", BTN)
	b.name = "Back"
	b.position = Vector2(20, 18)
	b.pressed.connect(func():
		Store.save()
		back.emit())
	add_child(b)
	var icon := UI.round_button("ui_oda_" + room_id, "", BTN)
	icon.position = Vector2(20 + BTN + 16, 18)
	icon.mouse_filter = Control.MOUSE_FILTER_IGNORE
	add_child(icon)
	_undo_btn = UI.round_button("tool_undo", "<", BTN)
	_undo_btn.name = "Undo"
	_undo_btn.position = Vector2(20, 18 + BTN + 16)
	_undo_btn.pressed.connect(undo)
	add_child(_undo_btn)
	_update_undo()
	var plus := UI.round_button("", "+", BTN)
	plus.name = "Plus"
	plus.pressed.connect(func(): _zoom_by(1.2, size / 2))
	add_child(plus)
	var minus := UI.round_button("", "−", BTN)
	minus.name = "Minus"
	minus.pressed.connect(func(): _zoom_by(1 / 1.2, size / 2))
	add_child(minus)


func _make_tools() -> void:
	_tools = PanelContainer.new()
	var sb := StyleBoxFlat.new()
	sb.bg_color = Color(1, 1, 1, 0.96)
	sb.set_corner_radius_all(26)
	sb.shadow_color = Color(0.24, 0.21, 0.33, 0.22)
	sb.shadow_size = 10
	sb.set_content_margin_all(8)
	_tools.add_theme_stylebox_override("panel", sb)
	var row := HBoxContainer.new()
	row.add_theme_constant_override("separation", 6)
	_tools.add_child(row)
	for t in TOOLS:
		var b := UI.round_button("tool_" + t, t, TOOL)
		b.name = t
		b.pressed.connect(_on_tool.bind(t))
		row.add_child(b)
		_tool_buttons[t] = b
	_tools.visible = false
	add_child(_tools)


func tool_button(t: String) -> Button:
	return _tool_buttons.get(t)


func tools_visible() -> bool:
	return _tools.visible


func selected_u() -> int:
	return int(_selected.u) if not _selected.is_empty() else -1


# ------------------------------------------------------------------ görünüm

func _k() -> float:
	return size.y * zoom / Data.ROOM_H


## Odayı ekrana yerleştirir: dikeyde ortalı, yatayda kaydırma sınırları içinde.
func _apply_view() -> void:
	var k := _k()
	var ww := Data.WORLD_W * k
	if is_nan(_pan_x):
		_pan_x = size.x / 2.0 - ww / 2.0
	if ww <= size.x:
		_pan_x = (size.x - ww) / 2.0
	else:
		_pan_x = clampf(_pan_x, size.x - ww, 0.0)
	world.scale = Vector2(k, k)
	var top := (size.y - Data.ROOM_H * k) / 2.0 + size.y * 0.03
	world.position = Vector2(_pan_x, top)
	var plus := get_node_or_null("Plus")
	if plus:
		plus.position = Vector2(size.x - 2 * BTN - 36, 18)
		get_node("Minus").position = Vector2(size.x - BTN - 20, 18)
	_place_tools()


func _zoom_by(f: float, at: Vector2) -> void:
	var k0 := _k()
	var wp := (at - world.position) / k0
	zoom = clampf(zoom * f, ZOOM_MIN, ZOOM_MAX)
	_pan_x = at.x - wp.x * _k()
	_apply_view()


func to_world(p: Vector2) -> Vector2:
	return (p - world.position) / _k()


## Eşyanın ekrandaki dikdörtgeni.
func _screen_rect(inst: Dictionary) -> Rect2:
	var s: Sprite2D = world.sprites.get(int(inst.u))
	if s == null or s.texture == null:
		return Rect2()
	var r := s.get_rect()
	var xf := get_global_transform().affine_inverse() * s.get_global_transform()
	var pts := [xf * r.position, xf * (r.position + Vector2(r.size.x, 0)), xf * (r.position + Vector2(0, r.size.y)), xf * r.end]
	var out := Rect2(pts[0], Vector2.ZERO)
	for p in pts:
		out = out.expand(p)
	return out


# ------------------------------------------------------------------ giriş

func _gui_input(e: InputEvent) -> void:
	# İki parmak: yakınlaştırma (dokunma olayları).
	if e is InputEventScreenTouch:
		if e.pressed:
			_touches[e.index] = e.position
		else:
			_touches.erase(e.index)
		if _touches.size() >= 2:
			_begin_pinch()
		elif _touches.is_empty():
			_pinching = false
		return
	if e is InputEventScreenDrag:
		_touches[e.index] = e.position
		if _pinching and _touches.size() >= 2:
			var ps: Array = _touches.values()
			var d: float = ps[0].distance_to(ps[1])
			if _pinch_d > 0:
				_zoom_by(_pinch_zoom * d / _pinch_d / zoom, (ps[0] + ps[1]) / 2.0)
		return
	# Tek parmak / fare.
	if e is InputEventMouseButton:
		if e.button_index == MOUSE_BUTTON_WHEEL_UP and e.pressed:
			_zoom_by(1.1, e.position)
		elif e.button_index == MOUSE_BUTTON_WHEEL_DOWN and e.pressed:
			_zoom_by(1 / 1.1, e.position)
		elif e.button_index == MOUSE_BUTTON_LEFT:
			if e.pressed:
				_on_down(e.position)
			else:
				_on_up(e.position)
		accept_event()
	elif e is InputEventMouseMotion and _down:
		_on_move(e.position)
		accept_event()


func _begin_pinch() -> void:
	if _pinching:
		return
	_pinching = true
	if _dragging:
		_finish_drag()
	_down = false
	_press = {}
	var ps: Array = _touches.values()
	_pinch_d = ps[0].distance_to(ps[1])
	_pinch_zoom = zoom


func _on_down(p: Vector2) -> void:
	if _pinching:
		return
	_down = true
	_press_pos = p
	_last_pos = p
	_moved = false
	_dragging = false
	var wp := to_world(p)
	_press = world.pick(wp)
	if not _press.is_empty():
		_grab = wp - RoomWorld.anchor_px(_press)


func _on_move(p: Vector2) -> void:
	if _pinching:
		return
	if not _moved and p.distance_to(_press_pos) > 12:
		_moved = true
		if not _press.is_empty():
			_snapshot()
			_dragging = true
			_tools.visible = false
	if _dragging:
		_move_drag(p)
	elif _moved:
		_pan_x += p.x - _last_pos.x
		_apply_view()
	_last_pos = p


func _on_up(_p: Vector2) -> void:
	if not _down:
		return
	_down = false
	if _dragging:
		_finish_drag()
		_select(_press)
	elif not _moved:
		if _press.is_empty():
			_deselect()
		else:
			_select(_press)
			_bounce(_press)
	_press = {}


func _move_drag(p: Vector2) -> void:
	var inst := _press
	# Oturan/yatan karakter kalkar.
	inst.erase("s")
	inst.erase("p")
	var a := to_world(p) - _grab
	var yr: Array = Data.item(inst.id).get("y", [70, 100])
	inst.x = clampf(a.x / Data.WORLD_W * 300.0, 0.0, 300.0)
	inst.y = clampf(a.y / Data.ROOM_H * 100.0, float(yr[0]), float(yr[1]))
	world.refresh(inst)
	var s: Sprite2D = world.sprites.get(int(inst.u))
	if s:
		s.z_index = 3000
	# Kenara gelince oda kayar.
	var edge := size.x * 0.08
	if p.x < edge:
		_pan_x += 12
		_apply_view()
	elif p.x > size.x - edge:
		_pan_x -= 12
		_apply_view()


func _finish_drag() -> void:
	_dragging = false
	if not _press.is_empty():
		world.refresh(_press)
	Store.save()


func _bounce(inst: Dictionary) -> void:
	var s: Sprite2D = world.sprites.get(int(inst.u))
	if s == null:
		return
	var p0 := s.position
	var tw := create_tween()
	tw.tween_property(s, "position", p0 + Vector2(0, -18), 0.1)
	tw.tween_property(s, "position", p0, 0.14)


# ------------------------------------------------------------------ seçim ve araçlar

func _select(inst: Dictionary) -> void:
	_selected = inst
	var it := Data.item(inst.id)
	var small: bool = it.get("hold", false) or it.get("food", false) or it.get("place", "") in ["surface", "wall"]
	var host := _host_of(inst)
	var views: Array = Data.item((host if not host.is_empty() else inst).id).get("views", [])
	_tool_buttons["turn"].visible = views.size() > 0
	_tool_buttons["left"].visible = small or inst.has("r")
	_tool_buttons["right"].visible = small or inst.has("r")
	_tool_buttons["reset"].visible = inst.has("r") or inst.has("v") or inst.has("fl") or inst.has("sc")
	_tools.visible = true
	_tools.reset_size()
	_place_tools()


func _deselect() -> void:
	_selected = {}
	_tools.visible = false


func _place_tools() -> void:
	if _tools == null or not _tools.visible or _selected.is_empty():
		return
	var r := _screen_rect(_selected)
	var ts := _tools.get_combined_minimum_size()
	_tools.size = ts
	var x := clampf(r.get_center().x - ts.x / 2.0, 8.0, size.x - ts.x - 8.0)
	var y := r.position.y - ts.y - 10.0
	if y < BTN + 30:
		y = minf(r.end.y + 10.0, size.y - ts.y - 8.0)
	_tools.position = Vector2(x, y)


func _host_of(inst: Dictionary) -> Dictionary:
	if not inst.has("s"):
		return {}
	for h in Store.room(room_id):
		if int(h.u) == int(inst.s):
			return h
	return {}


## Eşyanın üstündekiler (oturan karakter, masadaki eşya…), iç içe.
func _riders(host: Dictionary) -> Array:
	var out: Array = []
	var queue: Array = [host]
	while not queue.is_empty():
		var h: Dictionary = queue.pop_front()
		for r in Store.room(room_id):
			if r.has("s") and int(r.s) == int(h.u) and not out.has(r):
				out.append(r)
				queue.append(r)
	return out


func _on_tool(t: String) -> void:
	if _selected.is_empty():
		return
	_snapshot()
	var picked := _selected
	var host := _host_of(picked)
	# Oturan karakter çevrilince oturduğu eşya da çevrilir.
	var inst := host if (not host.is_empty() and t in ["flip", "turn"]) else picked
	var riders := _riders(inst)
	match t:
		"flip":
			if inst.get("fl", false):
				inst.erase("fl")
			else:
				inst.fl = true
			for r in riders:
				r.x = float(inst.x) - (float(r.x) - float(inst.x))
				if r.get("fl", false):
					r.erase("fl")
				else:
					r.fl = true
		"turn":
			var vs: Array = [""] + Data.item(inst.id).get("views", [])
			var cur: String = inst.get("v", "")
			var nxt: String = vs[(vs.find(cur) + 1) % vs.size()]
			if nxt == "":
				inst.erase("v")
			else:
				inst.v = nxt
			# Üstünde oturan karakter de aynı yöne döner (o görünümün resmi varsa).
			for r in riders:
				if not r.has("p"):
					continue
				if nxt != "" and Data.has_image(r.id + "_" + nxt):
					r.v = nxt
				else:
					r.erase("v")
		"big", "small":
			var sc := snappedf(clampf(float(picked.get("sc", 1.0)) * (1.15 if t == "big" else 1.0 / 1.15), 0.4, 2.5), 0.01)
			if is_equal_approx(sc, 1.0):
				picked.erase("sc")
			else:
				picked.sc = sc
		"left", "right":
			var r := fmod(float(inst.get("r", 0.0)) + (-15.0 if t == "left" else 15.0), 360.0)
			if is_zero_approx(r):
				inst.erase("r")
			else:
				inst.r = r
		"reset":
			inst.erase("r")
			inst.erase("v")
			inst.erase("fl")
			picked.erase("sc")
			for r in riders:
				r.erase("v")
		"trash":
			_trash(picked)
			return
	for i in [inst] + riders + [picked]:
		world.refresh(i)
	Store.save()
	_squash(picked)
	_select(picked)


func _trash(inst: Dictionary) -> void:
	var gone := [inst] + _riders(inst)
	var list := Store.room(room_id)
	for g in gone:
		list.erase(g)
	world.rebuild()
	_deselect()
	Store.save()


func _squash(inst: Dictionary) -> void:
	var s: Sprite2D = world.sprites.get(int(inst.u))
	if s == null:
		return
	var s0 := s.scale
	s.scale = Vector2(s0.x * 0.85, s0.y)
	create_tween().tween_property(s, "scale", s0, 0.2).set_ease(Tween.EASE_OUT)


# ------------------------------------------------------------------ geri al

func _snapshot() -> void:
	_undo.append(JSON.stringify(Store.room(room_id)))
	if _undo.size() > 40:
		_undo.pop_front()
	_update_undo()


func undo() -> void:
	if _undo.is_empty():
		return
	var list: Array = JSON.parse_string(_undo.pop_back())
	Store.house[room_id] = list
	world.rebuild()
	_deselect()
	Store.save()
	_update_undo()


func _update_undo() -> void:
	if _undo_btn:
		_undo_btn.disabled = _undo.is_empty()
		_undo_btn.modulate.a = 0.45 if _undo.is_empty() else 1.0
