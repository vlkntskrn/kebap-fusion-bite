extends Node
## Oyunun sabit verileri (data/house.json) ve görseller.
## house.json web oyununun kodundan üretilir: node scripts/godot_export.cjs

## Odanın yüksekliği (piksel). Web'deki oda 1200x440 birimdi; 1 birim = 2 piksel.
const ROOM_H := 880.0
## Odanın genişliği: üç ekran (web'de x 0..300).
const WORLD_W := 2400.0
## Bir eşya genişlik biriminin (w) piksel karşılığı: eski oda genişliği 100 birim = 800 piksel.
const W_UNIT := 8.0

var rooms: Array = []
var room_by_id: Dictionary = {}
var map_rows: Array = []
var outdoor: Array = []
var cats: Array = []
var items: Dictionary = {}
var start_house: Dictionary = {}
var files: Dictionary = {}

var _tex: Dictionary = {}
var _alpha: Dictionary = {}


func _ready() -> void:
	var f := FileAccess.open("res://data/house.json", FileAccess.READ)
	var d: Dictionary = JSON.parse_string(f.get_as_text())
	rooms = d.rooms
	for r in rooms:
		room_by_id[r.id] = r
	map_rows = d.map
	outdoor = d.outdoor
	cats = d.cats
	items = d.items
	start_house = d.house
	files = d.files


func has_image(code: String) -> bool:
	return files.has(code)


## Görselin dokusu (yoksa null). Bir kez yüklenir.
func tex(code: String) -> Texture2D:
	if _tex.has(code):
		return _tex[code]
	var t: Texture2D = null
	if files.has(code):
		t = load("res://art/items/" + files[code])
	_tex[code] = t
	return t


func item(id: String) -> Dictionary:
	return items.get(id, {})


## Resmin o noktası dolu mu (saydam kısma dokunulunca arkadaki eşya seçilsin). u, v: 0..1
func opaque_at(code: String, u: float, v: float) -> bool:
	if u < 0.0 or u > 1.0 or v < 0.0 or v > 1.0:
		return false
	var img: Image = _alpha.get(code)
	if img == null:
		var t := tex(code)
		if t == null:
			return false
		img = t.get_image()
		if img == null:
			return true
		if img.is_compressed():
			img.decompress()
		# Küçük bir kopya yeter.
		var w := mini(64, img.get_width())
		img.resize(w, maxi(1, int(round(float(img.get_height()) * w / img.get_width()))), Image.INTERPOLATE_BILINEAR)
		_alpha[code] = img
	var x := clampi(int(u * img.get_width()), 0, img.get_width() - 1)
	var y := clampi(int(v * img.get_height()), 0, img.get_height() - 1)
	return img.get_pixel(x, y).a > 0.25
