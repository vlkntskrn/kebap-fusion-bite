class_name RoomScreen
extends Control
## Tam ekran oda: eşyaları sürükleyerek taşıma, boş yeri sürükleyerek sağa sola kaydırma,
## iki parmakla ya da +/- düğmeleriyle yakınlaştırma.

signal back

var room_id := ""
var world: RoomWorld
var zoom := 0.85

var _touches: Dictionary = {}  # parmak -> konum
var _drag: Dictionary = {}  # sürüklenen eşya kaydı
var _grab := Vector2.ZERO  # dokunulan nokta ile eşyanın alt-orta noktası farkı (oda pikseli)
var _press_pos := Vector2.ZERO
var _moved := false
var _pan_x := 0.0
var _pinch_d := 0.0
var _pinch_zoom := 1.0

const ZOOM_MIN := 0.6
const ZOOM_MAX := 2.2


func _ready() -> void:
	mouse_filter = Control.MOUSE_FILTER_STOP
	clip_contents = true
	world = RoomWorld.new()
	world.setup(room_id)
	add_child(world)
	_pan_x = NAN
	_buttons()
	resized.connect(_apply_view)
	_apply_view()


func _buttons() -> void:
	var s := 96.0
	var b := UI.round_button("ui_geri", "⬅", s)
	b.position = Vector2(20, 18)
	b.pressed.connect(func():
		Store.save()
		back.emit())
	add_child(b)
	var icon := UI.round_button("ui_oda_" + room_id, Data.room_by_id[room_id].icon, s)
	icon.position = Vector2(20 + s + 16, 18)
	icon.disabled = true
	add_child(icon)
	var plus := UI.round_button("", "+", s)
	plus.name = "Plus"
	plus.pressed.connect(func(): _zoom_by(1.2, size / 2))
	add_child(plus)
	var minus := UI.round_button("", "−", s)
	minus.name = "Minus"
	minus.pressed.connect(func(): _zoom_by(1 / 1.2, size / 2))
	add_child(minus)


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
	var s := 96.0
	var plus := get_node_or_null("Plus")
	if plus:
		plus.position = Vector2(size.x - 2 * s - 36, 18)
		get_node("Minus").position = Vector2(size.x - s - 20, 18)


func _zoom_by(f: float, at: Vector2) -> void:
	var k0 := _k()
	var wp := (at - world.position) / k0
	zoom = clampf(zoom * f, ZOOM_MIN, ZOOM_MAX)
	var k1 := _k()
	_pan_x = at.x - wp.x * k1
	_apply_view()


func to_world(p: Vector2) -> Vector2:
	return (p - world.position) / _k()


func _gui_input(e: InputEvent) -> void:
	if e is InputEventScreenTouch:
		if e.pressed:
			_touches[e.index] = e.position
			if _touches.size() == 1:
				_start(e.position)
			elif _touches.size() == 2:
				_end_drag(false)
				var ps: Array = _touches.values()
				_pinch_d = ps[0].distance_to(ps[1])
				_pinch_zoom = zoom
		else:
			_touches.erase(e.index)
			if _touches.is_empty():
				_end_drag(not _moved)
		accept_event()
	elif e is InputEventScreenDrag:
		var prev: Vector2 = _touches.get(e.index, e.position)
		_touches[e.index] = e.position
		if _touches.size() >= 2:
			var ps: Array = _touches.values()
			var d: float = ps[0].distance_to(ps[1])
			if _pinch_d > 0:
				var mid: Vector2 = (ps[0] + ps[1]) / 2.0
				_zoom_by(_pinch_zoom * d / _pinch_d / zoom, mid)
			return
		if e.position.distance_to(_press_pos) > 12:
			_moved = true
		if _drag.is_empty():
			_pan_x += e.position.x - prev.x
			_apply_view()
		else:
			_move_drag(e.position)
		accept_event()


func _start(p: Vector2) -> void:
	_press_pos = p
	_moved = false
	var wp := to_world(p)
	var inst := world.pick(wp)
	if inst.is_empty():
		_drag = {}
		return
	_drag = inst
	_grab = wp - RoomWorld.anchor_px(inst)
	var s: Sprite2D = world.sprites.get(int(inst.u))
	if s:
		s.z_index = 3000


func _move_drag(p: Vector2) -> void:
	var inst := _drag
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


func _end_drag(tap: bool) -> void:
	if _drag.is_empty():
		return
	var inst := _drag
	_drag = {}
	world.refresh(inst)
	if tap:
		var s: Sprite2D = world.sprites.get(int(inst.u))
		if s:
			var tw := create_tween()
			var p0 := s.position
			tw.tween_property(s, "position", p0 + Vector2(0, -18), 0.1)
			tw.tween_property(s, "position", p0, 0.14)
	else:
		Store.save()
