class_name MapScreen
extends Control
## Evin kesiti: çatı, üç katta 12 oda, yanda bahçe (havuz ve oyun parkı). Odaya dokununca oda açılır.

signal room_chosen(id: String)

const CARD_AR := 1.75

var _cards: Array = []  # [Control, room_id, garden?]
var _roof: TextureRect
var _sign: Label
var _tree: TextureRect


func _ready() -> void:
	mouse_filter = Control.MOUSE_FILTER_PASS
	_tree = _img("harita_agac")
	var roof_t := Data.tex("harita_cati")
	_roof = _img("harita_cati") if roof_t else null
	_sign = Label.new()
	_sign.text = Store.player_name + "'nin Evi"
	_sign.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	_sign.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	_sign.add_theme_color_override("font_color", Color("#3d3553"))
	var sb := StyleBoxFlat.new()
	sb.bg_color = Color("#fff6d8")
	sb.set_corner_radius_all(14)
	sb.border_color = Color("#e9b872")
	sb.set_border_width_all(4)
	_sign.add_theme_stylebox_override("normal", sb)
	add_child(_sign)
	for row in Data.map_rows:
		for id in row:
			_cards.append([_card(id, false), id, false])
	for id in Data.outdoor:
		_cards.append([_card(id, true), id, true])
	resized.connect(_layout)
	_layout()


func _img(code: String) -> TextureRect:
	var r := TextureRect.new()
	r.texture = Data.tex(code)
	r.expand_mode = TextureRect.EXPAND_IGNORE_SIZE
	r.stretch_mode = TextureRect.STRETCH_KEEP_ASPECT_CENTERED
	r.mouse_filter = Control.MOUSE_FILTER_IGNORE
	add_child(r)
	return r


func _card(id: String, garden: bool) -> Control:
	var c := Panel.new()
	c.clip_contents = true
	var sb := StyleBoxFlat.new()
	sb.bg_color = Color.WHITE
	sb.set_corner_radius_all(18 if garden else 10)
	sb.border_color = Color.WHITE
	sb.set_border_width_all(6 if garden else 0)
	c.add_theme_stylebox_override("panel", sb)
	var w := RoomWorld.new()
	w.setup(id)
	c.add_child(w)
	var icon := TextureRect.new()
	icon.texture = Data.tex("ui_oda_" + id)
	icon.expand_mode = TextureRect.EXPAND_IGNORE_SIZE
	icon.stretch_mode = TextureRect.STRETCH_KEEP_ASPECT_CENTERED
	icon.mouse_filter = Control.MOUSE_FILTER_IGNORE
	var bubble := Panel.new()
	var bs := StyleBoxFlat.new()
	bs.bg_color = Color(1, 1, 1, 0.9)
	bs.set_corner_radius_all(100)
	bubble.add_theme_stylebox_override("panel", bs)
	bubble.mouse_filter = Control.MOUSE_FILTER_IGNORE
	bubble.add_child(icon)
	c.add_child(bubble)
	c.set_meta("world", w)
	c.set_meta("bubble", bubble)
	c.set_meta("icon", icon)
	c.gui_input.connect(func(e: InputEvent):
		if (e is InputEventScreenTouch and not e.pressed) or (e is InputEventMouseButton and e.button_index == MOUSE_BUTTON_LEFT and not e.pressed):
			_open(c, id))
	add_child(c)
	return c


func _open(c: Control, id: String) -> void:
	# Odaya yakınlaşma.
	c.pivot_offset = c.size / 2
	c.z_index = 10
	var tw := create_tween().set_ease(Tween.EASE_IN).set_trans(Tween.TRANS_QUAD)
	tw.tween_property(c, "scale", Vector2(1.25, 1.25), 0.16)
	tw.tween_callback(func(): room_chosen.emit(id))


func _layout() -> void:
	var W := size.x
	var H := size.y
	var roof_h := H * 0.2
	var body_h := H - roof_h - H * 0.05
	var gap := H * 0.018
	var ch := (body_h - gap * 4) / 3.0
	var cw := ch * CARD_AR
	var house_w := cw * 4 + gap * 5
	var garden_w := ch * 1.08
	var max_w := W * 0.97 - garden_w - gap * 3
	if house_w > max_w:
		var k := max_w / house_w
		cw *= k
		ch *= k
		house_w = max_w
		garden_w = ch * 1.08
	var x0 := (W - house_w - garden_w - gap * 3) / 2.0
	var top := roof_h
	var i := 0
	for entry in _cards:
		var c: Control = entry[0]
		var garden: bool = entry[2]
		var cs: Vector2
		var pos: Vector2
		if garden:
			var gi: int = Data.outdoor.find(entry[1])
			cs = Vector2(garden_w, garden_w)
			pos = Vector2(x0 + house_w + gap * 3, top + gap + gi * (garden_w + gap * 2))
		else:
			var r := i / 4
			var col := i % 4
			cs = Vector2(cw, ch)
			pos = Vector2(x0 + gap + col * (cw + gap), top + gap + r * (ch + gap))
			i += 1
		c.position = pos
		c.size = cs
		var w: RoomWorld = c.get_meta("world")
		var k := cs.y / Data.ROOM_H
		w.scale = Vector2(k, k)
		w.position = Vector2(cs.x / 2.0 - Data.WORLD_W / 2.0 * k, 0)
		var bubble: Control = c.get_meta("bubble")
		var bsz := cs.y * 0.34
		bubble.position = Vector2(cs.y * 0.05, cs.y * 0.05)
		bubble.size = Vector2(bsz, bsz)
		var icon: Control = c.get_meta("icon")
		icon.position = Vector2(bsz * 0.1, bsz * 0.1)
		icon.size = Vector2(bsz * 0.8, bsz * 0.8)
	if _roof:
		_roof.position = Vector2(x0 - house_w * 0.06, H * 0.02)
		_roof.size = Vector2(house_w * 1.12, roof_h)
		_roof.stretch_mode = TextureRect.STRETCH_SCALE
	_sign.add_theme_font_size_override("font_size", int(roof_h * 0.2))
	_sign.size = Vector2(house_w * 0.3, roof_h * 0.36)
	_sign.position = Vector2(x0 + house_w / 2.0 - _sign.size.x / 2.0, roof_h * 0.48)
	if _tree:
		# Bahçe kartlarının altındaki boşlukta.
		var gb := top + gap + Data.outdoor.size() * (garden_w + gap * 2)
		var ts := clampf(H - gb, 0.0, H * 0.36)
		_tree.size = Vector2(ts, ts)
		_tree.position = Vector2(x0 + house_w + gap * 3 + garden_w / 2.0 - ts / 2.0, H - ts)
	queue_redraw()


func _draw() -> void:
	# Gökyüzü ve çimen (web'deki harita arka planı gibi).
	var H := size.y
	var a := Color("#a9dcff")
	var b := Color("#dff3ff")
	draw_polygon(PackedVector2Array([Vector2(0, 0), Vector2(size.x, 0), Vector2(size.x, H * 0.62), Vector2(0, H * 0.62)]), PackedColorArray([a, a, b, b]))
	draw_rect(Rect2(0, H * 0.62, size.x, H * 0.38), Color("#9fd88a"))
	# Evin gövdesi (odaların arkasındaki krem duvar).
	if _cards.size() > 0:
		var first: Control = _cards[0][0]
		var last: Control = _cards[11][0]
		var g := 10.0
		var r := Rect2(first.position - Vector2(g, g), last.position + last.size - first.position + Vector2(g, g) * 2)
		var sb := StyleBoxFlat.new()
		sb.bg_color = Color("#fff3e3")
		sb.set_corner_radius_all(8)
		draw_style_box(sb, r)
