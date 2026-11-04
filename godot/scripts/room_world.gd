class_name RoomWorld
extends Node2D
## Bir odanın tamamı: arka plan (duvar, zemin ya da bahçe) ve eşyalar.
## Koordinatlar piksel: oda Data.WORLD_W x Data.ROOM_H. Eşyanın alt-orta noktası (x*8, y% * ROOM_H).
## Hem haritadaki küçük önizlemede hem tam ekran odada kullanılır.

var room_id := ""
var sprites: Dictionary = {}  # u -> Sprite2D
var _items: Node2D


func setup(id: String) -> void:
	room_id = id
	texture_repeat = CanvasItem.TEXTURE_REPEAT_ENABLED
	_items = Node2D.new()
	_items.name = "Items"
	add_child(_items)
	rebuild()


func rebuild() -> void:
	for c in _items.get_children():
		c.queue_free()
	sprites.clear()
	for inst in Store.room(room_id):
		_add_sprite(inst)
	queue_redraw()


func _add_sprite(inst: Dictionary) -> Sprite2D:
	var s := Sprite2D.new()
	s.centered = false
	_items.add_child(s)
	sprites[int(inst.u)] = s
	refresh(inst)
	return s


## Eşyanın resmini, boyunu, yerini ve sırasını kayda göre günceller.
func refresh(inst: Dictionary) -> void:
	var s: Sprite2D = sprites.get(int(inst.u))
	if s == null:
		return
	var code := image_code(inst)
	var t := Data.tex(code)
	s.texture = t
	if t == null:
		s.visible = false
		return
	s.visible = true
	var w_px := item_width_px(inst)
	var k := w_px / t.get_width()
	s.scale = Vector2(k, k)
	s.offset = Vector2(-t.get_width() / 2.0, -t.get_height())
	s.flip_h = inst.get("fl", false)
	s.rotation_degrees = inst.get("r", 0.0)
	s.position = anchor_px(inst)
	s.z_index = z_of(inst)


static func image_code(inst: Dictionary) -> String:
	var id: String = inst.id
	var v: String = inst.get("v", "")
	if v != "" and Data.has_image(id + "_" + v):
		return id + "_" + v
	var p: String = inst.get("p", "")
	if (p == "otur" or p == "yat") and Data.has_image(id + "_" + p):
		return id + "_" + p
	return id


static func item_width_px(inst: Dictionary) -> float:
	var it := Data.item(inst.id)
	var w: float = it.get("w", 10.0) * Data.W_UNIT * inst.get("sc", 1.0)
	# Yatan karakterin resmi yatay: boyu ayaktaki boyu kadar olsun.
	if inst.get("p", "") == "yat" and Data.has_image(inst.id + "_yat"):
		var t := Data.tex(inst.id + "_yat")
		if t:
			w = w * it.get("ar", 1.0) * float(t.get_width()) / t.get_height() * 0.9
	return w


static func anchor_px(inst: Dictionary) -> Vector2:
	return Vector2(float(inst.x) / 300.0 * Data.WORLD_W, float(inst.y) / 100.0 * Data.ROOM_H)


static func z_of(inst: Dictionary) -> int:
	if inst.get("hd", false):
		return 2600
	if Data.item(inst.id).get("flat", false):
		return 1
	if inst.has("s"):
		return 1100 + int(round(float(inst.y) * 10.0))
	return 10 + int(round(float(inst.y) * 10.0))


## Dokunulan noktadaki en öndeki eşya (resmin saydam kısımları sayılmaz).
func pick(p: Vector2) -> Dictionary:
	var best := {}
	var best_z := -100000
	for inst in Store.room(room_id):
		var s: Sprite2D = sprites.get(int(inst.u))
		if s == null or not s.visible or s.texture == null:
			continue
		# p odanın kendi koordinatında; eşyalar katmanı odanın başlangıcında durur.
		var local := s.transform.affine_inverse() * p
		var t := s.texture
		var u := (local.x - s.offset.x) / t.get_width()
		var v := (local.y - s.offset.y) / t.get_height()
		if s.flip_h:
			u = 1.0 - u
		if u < 0.0 or u > 1.0 or v < 0.0 or v > 1.0:
			continue
		if s.z_index > best_z and Data.opaque_at(image_code(inst), u, v):
			best = inst
			best_z = s.z_index
	return best


func _draw() -> void:
	var st := Store.style(room_id)
	var W := Data.WORLD_W
	var H := Data.ROOM_H
	match room_id:
		"oyunparki":
			_sky(512.0)
			draw_rect(Rect2(0, 500, W, H - 500), Color(st.floorColor))
			_tile(st.floor, Rect2(0, 500, W, H - 500), 240.0)
			draw_rect(Rect2(0, 500, W, 16), Color(0, 0, 0, 0.05))
		"havuz":
			_sky(512.0)
			draw_rect(Rect2(0, 500, W, 120), Color(st.floorColor))
			_tile(st.floor, Rect2(0, 500, W, 120), 240.0)
			draw_rect(Rect2(0, 612, W, 268), Color.WHITE)
			var water := Rect2(20, 628, W - 40, 252)
			draw_rect(water, Color("#5fd3f3"))
			_tile("havuz_su", water, 320.0)
		_:
			draw_rect(Rect2(0, 0, W, 600), Color(st.wallColor))
			_tile(st.wall, Rect2(0, 0, W, 600), 300.0)
			draw_rect(Rect2(0, 580, W, 300), Color(st.floorColor))
			_tile(st.floor, Rect2(0, 580, W, 300), 240.0)
			draw_rect(Rect2(0, 560, W, 28), Color(1, 1, 1, 0.9))
			draw_rect(Rect2(0, 584, W, 12), Color(0, 0, 0, 0.06))


## Dokuyu verilen kare boyda tekrarlayarak alanı doldurur.
func _tile(code: String, area: Rect2, size: float) -> void:
	var t := Data.tex(code)
	if t == null:
		return
	var k := size / t.get_width()
	draw_set_transform(area.position, 0.0, Vector2(k, k))
	draw_texture_rect(t, Rect2(Vector2.ZERO, area.size / k), true)
	draw_set_transform(Vector2.ZERO, 0.0, Vector2.ONE)


func _sky(h: float) -> void:
	var t := Data.tex("bahce_manzara")
	if t == null:
		draw_rect(Rect2(0, 0, Data.WORLD_W, h), Color("#9fd8ff"))
		return
	var k := h / t.get_height()
	draw_set_transform(Vector2.ZERO, 0.0, Vector2(k, k))
	draw_texture_rect(t, Rect2(0, 0, Data.WORLD_W / k, t.get_height()), true)
	draw_set_transform(Vector2.ZERO, 0.0, Vector2.ONE)
