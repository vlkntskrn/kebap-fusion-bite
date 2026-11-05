class_name Layout
## Odaların ilk açılıştaki düzenli yerleşimi: büyük eşyalar arka duvar boyunca yan yana (üst üste binmeden),
## kapı duvarın dibinde solda, duvar süsleri pencere aralarında, halı ortada, küçük eşyalar masa/tezgâh üstünde,
## karakterler önde. Birimler: x 0..300 (eşya genişliği w aynı birimde), y odanın yüksekliğine göre %.

## Kapının alt kenarı: duvarın zeminle birleştiği çizgi.
const DOOR_Y := 67.0
const BACK_Y := 75.0
const FRONT_Y := 90.0
const CHAR_Y := 97.0
const GAP := 5.0
const RIGHT := 290.0

## Her odada başlangıçta bulunan karakterler ve hayvanlar.
const PEOPLE := {
	"yatak": ["kiz1"], "bebekodasi": ["anne"], "giyinme": ["kiz6"], "banyo": ["kiz5"],
	"oyun": ["oglan1", "kiz2"], "atolye": ["kiz3"], "muzik": ["oglan3", "kiz7"], "kutuphane": ["ogretmen"],
	"salon": ["baba", "dede"], "mutfak": ["nine"], "makyaj": ["kiz4"], "petrevir": ["oglan2"],
	"oyunparki": ["oglan1", "kiz2"], "havuz": ["kiz7"],
}


static func w_of(id: String) -> float:
	return float(Data.item(id).get("w", 10.0))


static func h_of(id: String) -> float:
	return float(Data.item(id).get("h", 10.0))


static func is_char(id: String) -> bool:
	var it := Data.item(id)
	return it.get("person", false) or it.get("pet", false) or it.get("char", false)


## Odanın ilk yerleşimi (web'deki başlangıç eşyaları + karakterler, düzenlenmiş).
static func arrange(room_id: String, start: Array) -> Array:
	var out: Array = []
	var u := 1
	var items: Array = []
	for i in start:
		if Data.has_image(i.id):
			items.append(i.id)
	for c in PEOPLE.get(room_id, []):
		if Data.has_image(c) and not items.has(c):
			items.append(c)
	# Dış mekânlar (havuz, oyun parkı) web'deki gibi kalır; yalnızca karakterler önde yan yana eklenir.
	if room_id in Data.outdoor:
		for i in start:
			if Data.has_image(i.id):
				out.append({"u": u, "id": i.id, "x": i.x, "y": i.y})
				u += 1
		var chars: Array = PEOPLE.get(room_id, []).filter(func(c): return Data.has_image(c))
		_spread(out, chars, 120.0, 180.0, 99.0 if room_id == "oyunparki" else 70.0, u)
		return out

	var placed: Array = []
	# Lambda yerel değişkenin kopyasını alır; sayaç bu yüzden sözlükte.
	var ctr := {"u": u}
	var add := func(id: String, x: float, y: float) -> Dictionary:
		var d := {"u": ctr.u, "id": id, "x": snappedf(x, 0.1), "y": snappedf(y, 0.1)}
		ctr.u += 1
		placed.append(d)
		return d

	# Pencereler: duvarda üç eşit aralıkla.
	var win := ""
	var door := ""
	for id in items:
		if id.begins_with("pencere"):
			win = id
		elif Data.item(id).get("door", false):
			door = id
	if win != "":
		for x in [75.0, 150.0, 225.0]:
			add.call(win, x, 46.0)
	# Kapı: solda, duvarın dibinde.
	var left := 4.0
	if door != "":
		add.call(door, left + w_of(door) / 2.0, DOOR_Y)
		left += w_of(door) + GAP
	# Duvar süsleri ve tavandakiler: pencerelerin arasındaki boşluklarda.
	var wall_slots := [112.5, 187.5, 262.5]
	var ceil_slots := [112.5, 187.5, 262.5]
	var floor_items: Array = []
	var surface_items: Array = []
	var rugs: Array = []
	var chars: Array = []
	for id in items:
		if id == win or id == door:
			continue
		var place: String = Data.item(id).get("place", "floor")
		if is_char(id):
			chars.append(id)
		elif place == "wall" and not wall_slots.is_empty():
			add.call(id, wall_slots.pop_front(), clampf(32.0 + h_of(id) / 2.0, 20.0, 60.0))
		elif place == "ceiling" and not ceil_slots.is_empty():
			add.call(id, ceil_slots.pop_front(), clampf(8.0 + h_of(id), 14.0, 40.0))
		elif Data.item(id).get("flat", false):
			rugs.append(id)
		elif place == "surface":
			surface_items.append(id)
		else:
			floor_items.append(id)
	# Halılar: en büyüğü ortada, diğerleri yanlarda.
	rugs.sort_custom(func(a, b): return w_of(a) > w_of(b))
	for k in rugs.size():
		var x: float = [150.0, 80.0, 220.0][k % 3]
		add.call(rugs[k], x, 94.0 if k == 0 else 97.0)
	# Arka sıra: büyük eşyalar duvar boyunca yan yana; sığmayanlar ön sıraya.
	floor_items.sort_custom(func(a, b): return h_of(a) > h_of(b))
	var back: Array = []
	var front: Array = []
	var used := 0.0
	for id in floor_items:
		if used + w_of(id) + GAP <= RIGHT - left:
			back.append(id)
			used += w_of(id) + GAP
		else:
			front.append(id)
	var backs := _row(back, left, RIGHT, BACK_Y, add)
	# Küçük eşyalar: üstüne konabilen eşyaların (masa, tezgâh, komodin) üstüne; yoksa ön sıraya.
	var hosts: Array = backs.filter(func(d): return Data.item(d.id).has("top"))
	for id in surface_items:
		if hosts.is_empty():
			front.append(id)
			continue
		var h: Dictionary = hosts.pop_front()
		var top: float = Data.item(h.id).top
		add.call(id, h.x, float(h.y) - h_of(h.id) * (1.0 - top))
	# Ön sıra: arka sıradaki eşyaların arasındaki boşluklara denk gelecek şekilde, yan yana.
	_row(front, left + 20.0, RIGHT - 20.0, FRONT_Y, add)
	# Karakterler en önde: arkadaki eşyaları en az kapatan, birbirine binmeyen, ortaya yakın yerlere.
	var spans: Array = []
	for d in backs:
		spans.append(Vector2(float(d.x) - w_of(d.id) / 2.0, float(d.x) + w_of(d.id) / 2.0))
	var taken: Array = []
	for c in chars:
		var cw := w_of(c)
		var best_x := 150.0
		var best_cost := INF
		var x := left + cw / 2.0
		while x <= RIGHT - cw / 2.0:
			var cost := absf(x - 150.0) * 0.08
			for sp in spans:
				cost += maxf(0.0, minf(sp.y, x + cw / 2.0) - maxf(sp.x, x - cw / 2.0))
			for t in taken:
				if absf(t.x - x) < (t.y + cw) / 2.0 + GAP:
					cost += 1000.0
			if cost < best_cost:
				best_cost = cost
				best_x = x
			x += 1.0
		taken.append(Vector2(best_x, cw))
		add.call(c, best_x, CHAR_Y)
	return placed


## Eşyaları verilen aralığa yan yana, eşit boşluklarla dizer.
static func _row(ids: Array, a: float, b: float, y: float, add: Callable) -> Array:
	var out: Array = []
	if ids.is_empty():
		return out
	var total := 0.0
	for id in ids:
		total += w_of(id)
	var gap := maxf(GAP, (b - a - total) / float(ids.size() + 1))
	gap = minf(gap, 30.0)
	var x := a + maxf(0.0, (b - a - total - gap * (ids.size() - 1)) / 2.0)
	for id in ids:
		out.append(add.call(id, x + w_of(id) / 2.0, y))
		x += w_of(id) + gap
	return out


static func _spread(out: Array, ids: Array, a: float, b: float, y: float, u: int) -> void:
	for k in ids.size():
		var x := a + (b - a) * (k + 0.5) / float(ids.size())
		out.append({"u": u + k, "id": ids[k], "x": x, "y": y})
