extends Node
## Gerçek giriş yolu testi: fare olayları Input.parse_input_event ile verilir (masaüstündeki gibi),
## eşya sürüklenir, seçilir, araç çubuğu çıkar ve aynalama/çevirme/büyütme/çöp/geri al çalışır.
## Çalıştırma:  godot --path godot tests/mouse.tscn -- <çıktı-klasörü>

var out := "user://"
var fails: Array = []


func _ready() -> void:
	var args := OS.get_cmdline_user_args()
	if args.size() > 0:
		out = args[0]
	Store.reset()
	var main: Control = load("res://scenes/main.tscn").instantiate()
	get_tree().root.add_child.call_deferred(main)
	await _frames(15)
	_check_layout()
	main.show_room("yatak")
	await _frames(15)
	var room: RoomScreen = main.screen
	await _shot("G-layout-yatak.png")
	var inst := _find("yatak", "dolap")
	var p := _screen_of(room, inst)
	var x0: float = inst.x
	# Sürükle.
	_mouse_button(p, true)
	for k in range(1, 9):
		_mouse_move(p + Vector2(25 * k, 0))
		await _frames(1)
	_mouse_button(p + Vector2(200, 0), false)
	await _frames(5)
	_check(inst.x > x0 + 5, "fareyle sürüklenen dolap taşındı (%.1f -> %.1f)" % [x0, inst.x])
	# Dokun -> seçilir, araçlar çıkar.
	p = _screen_of(room, inst)
	_mouse_button(p, true)
	await _frames(1)
	_mouse_button(p, false)
	await _frames(5)
	_check(room.selected_u() == int(inst.u), "dokununca dolap seçildi")
	_check(room.tools_visible(), "araç çubuğu göründü")
	await _shot("G-tools.png")
	for t in ["flip", "turn", "big"]:
		_press_tool(room, t)
		await _frames(3)
	_check(inst.get("fl", false), "aynalandı (fl)")
	_check(inst.get("v", "") == "yan", "yandan görünüme döndü (v=yan)")
	_check(float(inst.get("sc", 1.0)) > 1.0, "büyüdü (sc=%s)" % inst.get("sc", 1.0))
	await _shot("G-tools2.png")
	var n0 := Store.room("yatak").size()
	_press_tool(room, "trash")
	await _frames(3)
	_check(Store.room("yatak").size() == n0 - 1, "çöpe atıldı")
	_check(not room.tools_visible(), "araç çubuğu kapandı")
	room.undo()
	await _frames(3)
	_check(Store.room("yatak").size() == n0, "geri alındı")
	# Boş yere dokununca seçim kalkar.
	inst = _find("yatak", "dolap")
	p = _screen_of(room, inst)
	_mouse_button(p, true)
	_mouse_button(p, false)
	await _frames(2)
	var empty := Vector2(room.size.x * 0.5, room.size.y * 0.97)
	_mouse_button(empty, true)
	_mouse_button(empty, false)
	await _frames(3)
	_check(not room.tools_visible(), "boş yere dokununca seçim kalktı")
	# Dolabı aç, içinden bir eşya al.
	inst = _find("yatak", "dolap")
	p = _screen_of(room, inst)
	_mouse_button(p, true)
	_mouse_button(p, false)
	await _frames(2)
	_press_tool(room, "open")
	await _frames(4)
	_check(room.panel_open(), "dolap açıldı")
	await _shot("G-dolap.png")
	var n1 := Store.room("yatak").size()
	var first: Button = room._overlay.find_children("*", "Button", true, false).filter(func(b): return b.name.begins_with("giysi_"))[0]
	var fc := first.get_global_rect().get_center()
	_mouse_button(fc, true)
	_mouse_button(fc, false)
	await _frames(4)
	_check(Store.room("yatak").size() == n1 + 1 and not room.panel_open(), "dolaptan eşya alındı")
	# Kapıdan mutfağa geç.
	var door := {}
	for i in Store.room("yatak"):
		if Data.item(i.id).get("door", false):
			door = i
	p = _screen_of(room, door)
	_mouse_button(p, true)
	_mouse_button(p, false)
	await _frames(2)
	_press_tool(room, "open")
	await _frames(4)
	await _shot("G-kapi.png")
	var btn: Button = room._overlay.find_child("oda_mutfak", true, false)
	var bc := btn.get_global_rect().get_center()
	_mouse_button(bc, true)
	_mouse_button(bc, false)
	await _frames(10)
	_check(main.screen is RoomScreen and main.screen.room_id == "mutfak", "kapıdan mutfağa geçildi")
	room = main.screen
	await _shot("G-layout-mutfak.png")
	# Geri düğmesi gerçek tıklamayla çalışır.
	var back: Button = room.get_node("Back")
	var bp := back.get_global_rect().get_center()
	_mouse_button(bp, true)
	_mouse_button(bp, false)
	await _frames(10)
	_check(main.screen is MapScreen, "geri düğmesi haritaya döndü")
	print("SONUÇ: ", "TAMAM" if fails.is_empty() else "HATA " + str(fails))
	get_tree().quit(0 if fails.is_empty() else 1)


## Her odada: kapı duvar dibinde, karakter var, aynı sıradaki eşyalar üst üste binmiyor.
func _check_layout() -> void:
	var bad: Array = []
	for r in Data.rooms:
		var list := Store.room(r.id)
		var chars := list.filter(func(i): return Layout.is_char(i.id))
		if chars.is_empty():
			bad.append(r.id + ": karakter yok")
		for i in list:
			if Data.item(i.id).get("door", false) and absf(float(i.y) - Layout.DOOR_Y) > 0.01:
				bad.append(r.id + ": kapı duvarda değil")
		if r.id in Data.outdoor:
			continue
		for y in [Layout.BACK_Y, Layout.FRONT_Y, Layout.CHAR_Y]:
			var row := list.filter(func(i): return absf(float(i.y) - y) < 0.01)
			for a in row.size():
				for b in range(a + 1, row.size()):
					var ia: Dictionary = row[a]
					var ib: Dictionary = row[b]
					if absf(float(ia.x) - float(ib.x)) < (Layout.w_of(ia.id) + Layout.w_of(ib.id)) / 2.0 - 0.5:
						bad.append("%s: %s ile %s üst üste" % [r.id, ia.id, ib.id])
	_check(bad.is_empty(), "düzenli yerleşim " + str(bad))


func _find(room_id: String, id: String) -> Dictionary:
	for i in Store.room(room_id):
		if i.id == id:
			return i
	return {}


func _screen_of(room: RoomScreen, inst: Dictionary) -> Vector2:
	var s: Sprite2D = room.world.sprites[int(inst.u)]
	return s.get_global_transform() * s.get_rect().get_center()


func _press_tool(room: RoomScreen, t: String) -> void:
	var b: Button = room.tool_button(t)
	if b == null or not b.visible:
		_check(false, "araç düğmesi görünür: " + t)
		return
	var c := b.get_global_rect().get_center()
	_mouse_button(c, true)
	_mouse_button(c, false)


func _check(ok: bool, what: String) -> void:
	print(("✓ " if ok else "✗ ") + what)
	if not ok:
		fails.append(what)


func _mouse_button(p: Vector2, pressed: bool) -> void:
	var e := InputEventMouseButton.new()
	e.button_index = MOUSE_BUTTON_LEFT
	e.pressed = pressed
	e.position = p
	e.global_position = p
	if pressed:
		e.button_mask = MOUSE_BUTTON_MASK_LEFT
	Input.parse_input_event(e)
	Input.flush_buffered_events()


func _mouse_move(p: Vector2) -> void:
	var e := InputEventMouseMotion.new()
	e.position = p
	e.global_position = p
	e.button_mask = MOUSE_BUTTON_MASK_LEFT
	Input.parse_input_event(e)
	Input.flush_buffered_events()


func _frames(n: int) -> void:
	for i in n:
		await get_tree().process_frame


func _shot(name: String) -> void:
	await RenderingServer.frame_post_draw
	get_viewport().get_texture().get_image().save_png(out.path_join(name))
