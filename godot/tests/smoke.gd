extends Node
## Duman testi: haritayı ve bir odayı açar, bir eşyayı sürükler, kaydın değiştiğini denetler, ekran görüntüleri alır.
## Çalıştırma:  godot --path godot tests/smoke.tscn -- <çıktı-klasörü>

var out := "user://"
var fails: Array = []


func _ready() -> void:
	var args := OS.get_cmdline_user_args()
	if args.size() > 0:
		out = args[0]
	Store.reset()
	var main: Control = load("res://scenes/main.tscn").instantiate()
	get_tree().root.add_child.call_deferred(main)
	await _frames(20)
	await _shot("G-map.png")
	main.show_room("yatak")
	await _frames(20)
	await _shot("G-room.png")
	var room: RoomScreen = main.screen
	# Dolabı (dolap) ekrandaki yerinden 300 piksel sağa sürükle.
	var inst := {}
	for i in Store.room("yatak"):
		if i.id == "dolap":
			inst = i
	_check(not inst.is_empty(), "yatak odasında dolap var")
	var x0: float = inst.x
	var s: Sprite2D = room.world.sprites[int(inst.u)]
	var r := s.get_rect()
	var center := s.get_global_transform() * r.get_center()
	var screen_p: Vector2 = room.get_global_transform_with_canvas().affine_inverse() * center
	_touch(room, screen_p, true)
	for k in range(1, 11):
		_drag(room, screen_p + Vector2(30 * k, 0), Vector2(30, 0))
		await _frames(1)
	_touch(room, screen_p + Vector2(300, 0), false)
	await _frames(5)
	_check(inst.x > x0 + 5, "dolap sağa taşındı (%.1f -> %.1f)" % [x0, inst.x])
	# Kayıt dosyasında yeni yer.
	Store.load_state()
	var saved := {}
	for i in Store.room("yatak"):
		if int(i.u) == int(inst.u):
			saved = i
	_check(absf(float(saved.get("x", -1)) - float(inst.x)) < 0.01, "kayıt güncellendi")
	# Boş yeri sürükleyince oda kayar.
	var wx0 := room.world.position.x
	var empty_p := Vector2(room.size.x * 0.5, room.size.y * 0.12)
	_touch(room, empty_p, true)
	for k in range(1, 6):
		_drag(room, empty_p + Vector2(-40 * k, 0), Vector2(-40, 0))
	_touch(room, empty_p + Vector2(-200, 0), false)
	await _frames(3)
	_check(room.world.position.x < wx0, "oda kaydırıldı")
	await _shot("G-room2.png")
	for id in ["havuz", "oyunparki", "mutfak"]:
		main.show_room(id)
		await _frames(15)
		await _shot("G-%s.png" % id)
	print("SONUÇ: ", "TAMAM" if fails.is_empty() else "HATA " + str(fails))
	get_tree().quit(0 if fails.is_empty() else 1)


func _check(ok: bool, what: String) -> void:
	print(("✓ " if ok else "✗ ") + what)
	if not ok:
		fails.append(what)


func _touch(target: Control, p: Vector2, pressed: bool) -> void:
	var e := InputEventMouseButton.new()
	e.button_index = MOUSE_BUTTON_LEFT
	e.position = p
	e.pressed = pressed
	target._gui_input(e)


func _drag(target: Control, p: Vector2, rel: Vector2) -> void:
	var e := InputEventMouseMotion.new()
	e.position = p
	e.relative = rel
	e.button_mask = MOUSE_BUTTON_MASK_LEFT
	target._gui_input(e)


func _frames(n: int) -> void:
	for i in n:
		await get_tree().process_frame


func _shot(name: String) -> void:
	await RenderingServer.frame_post_draw
	var img := get_viewport().get_texture().get_image()
	img.save_png(out.path_join(name))
