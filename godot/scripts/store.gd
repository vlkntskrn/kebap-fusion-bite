extends Node
## Evin durumu: odalardaki eşyalar ve odaların duvar/zemin seçimleri. user://ev.json'da saklanır.
##
## Eşya kaydı (web sürümüyle aynı alanlar):
##   u: benzersiz numara, id: eşya kodu, x: 0..300 (oda genişliği), y: alt kenar, odanın yüksekliğine göre %
##   sc: boyut çarpanı, fl: aynalı, r: dönme açısı, v: "yan"/"arka" görünüm, s/p: üstünde oturduğu eşya ve duruş

const PATH := "user://ev.json"
const VERSION := 1

var player_name := "Defne"
var house: Dictionary = {}
var room_style: Dictionary = {}
var night := false


func _ready() -> void:
	load_state()


func load_state() -> void:
	if FileAccess.file_exists(PATH):
		var f := FileAccess.open(PATH, FileAccess.READ)
		var d = JSON.parse_string(f.get_as_text())
		if d is Dictionary and d.get("v", 0) == VERSION:
			house = d.get("house", {})
			room_style = d.get("roomStyle", {})
			night = d.get("night", false)
			player_name = d.get("name", player_name)
	# Eksik odalar web'deki ilk yerleşimle başlar; resmi olmayan eşyalar çıkarılır.
	for r in Data.rooms:
		if not house.has(r.id):
			house[r.id] = Data.start_house.get(r.id, []).duplicate(true)
		house[r.id] = house[r.id].filter(func(i): return Data.has_image(i.id))


func save() -> void:
	var f := FileAccess.open(PATH, FileAccess.WRITE)
	f.store_string(JSON.stringify({"v": VERSION, "house": house, "roomStyle": room_style, "night": night, "name": player_name}))


func room(id: String) -> Array:
	return house.get(id, [])


func style(id: String) -> Dictionary:
	if not room_style.has(id):
		room_style[id] = Data.room_by_id[id].style.duplicate()
	return room_style[id]


func reset() -> void:
	house = {}
	room_style = {}
	if FileAccess.file_exists(PATH):
		DirAccess.remove_absolute(PATH)
	load_state()
