extends Control
## Ekranlar arası geçiş: ev haritası <-> oda.

var screen: Control


func _ready() -> void:
	set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	show_map()


func _swap(next: Control) -> void:
	if screen:
		screen.queue_free()
	screen = next
	add_child(next)
	next.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	next.modulate.a = 0.0
	next.create_tween().tween_property(next, "modulate:a", 1.0, 0.18)


func show_map() -> void:
	var m := MapScreen.new()
	m.room_chosen.connect(show_room)
	_swap(m)


func show_room(id: String) -> void:
	var r := RoomScreen.new()
	r.room_id = id
	r.back.connect(show_map)
	r.go_room.connect(show_room)
	_swap(r)


func _notification(what: int) -> void:
	# Android geri tuşu: odadaysa haritaya döner, haritadaysa uygulamadan çıkar.
	if what == NOTIFICATION_WM_GO_BACK_REQUEST:
		if screen is RoomScreen:
			Store.save()
			show_map()
		else:
			get_tree().quit()
	elif what == NOTIFICATION_APPLICATION_PAUSED or what == NOTIFICATION_WM_CLOSE_REQUEST:
		Store.save()
