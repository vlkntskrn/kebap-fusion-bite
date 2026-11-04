class_name UI
## Ortak arayüz parçaları: yuvarlak beyaz düğmeler, resimli simgeler.


## Beyaz, yuvarlak köşeli, gölgeli düğme. Resmi (ui_*) yoksa yazı/emoji gösterilir.
static func round_button(code: String, fallback: String, size: float) -> Button:
	var b := Button.new()
	b.custom_minimum_size = Vector2(size, size)
	b.size = Vector2(size, size)
	b.focus_mode = Control.FOCUS_NONE
	var t := Data.tex(code)
	if t:
		b.icon = t
		b.expand_icon = true
		b.icon_alignment = HORIZONTAL_ALIGNMENT_CENTER
		b.vertical_icon_alignment = VERTICAL_ALIGNMENT_CENTER
	else:
		b.text = fallback
		b.add_theme_font_size_override("font_size", int(size * 0.45))
	b.add_theme_constant_override("icon_max_width", int(size * 0.7))
	for st in ["normal", "hover", "pressed", "focus", "disabled"]:
		var sb := StyleBoxFlat.new()
		sb.bg_color = Color.WHITE if st != "pressed" else Color("#fff1d6")
		sb.set_corner_radius_all(int(size * 0.32))
		sb.shadow_color = Color(0.24, 0.21, 0.33, 0.18)
		sb.shadow_size = 6
		sb.shadow_offset = Vector2(0, 4)
		sb.content_margin_left = size * 0.14
		sb.content_margin_right = size * 0.14
		sb.content_margin_top = size * 0.14
		sb.content_margin_bottom = size * 0.14
		b.add_theme_stylebox_override(st, sb)
	b.add_theme_color_override("font_color", Color("#3d3553"))
	return b


## Basınca hafifçe küçülüp büyüyen tepki.
static func pop(node: CanvasItem) -> void:
	var tw := node.create_tween()
	var s0: Vector2 = node.scale
	tw.tween_property(node, "scale", s0 * 1.08, 0.08)
	tw.tween_property(node, "scale", s0, 0.12)
