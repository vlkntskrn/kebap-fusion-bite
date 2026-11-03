"""
Firefly'da elle üretmek için sayfa planı (FIREFLY.md). asset_catalog.py çağırır.

Aynı eşyanın farklı açıları ve aynı ailenin çeşitleri sapmasın diye AYNI resimde istenir:
  ff_cevir_*  : her satır bir eşya -> önden, yandan, arkadan (3 eşya = 3x3)
  ff_aile_*   : bir çeşit ailesinin bütün çeşitleri tek resimde
  ff_esya_*   : kalan tekil eşyalar, 9'lu
  ff_aks_*    : giydirme aksesuarları, her yuva (taç, gözlük…) bir sayfa
  ff_simge_*  : oda düğmeleri
prepare_assets.py bu sayfaları keser ve kodlara göre adlandırır (sets.json).
"""
import re

TURN_NEW = re.compile(
    r"^(emzirme_koltugu|okuma_koltugu|kuafor_koltugu|bekleme_koltugu_salon|kapitone_puf|sallanan_besik|kaydirakli_yatak|acik_gardirop|"
    r"bebek_dolabi|ada_dolap|sanat_dolabi|veteriner_dolabi|buyuk_kitaplik|oyuncak_dolabi|alt_degistirme|hikaye_sandalyesi|bekleme_sandalyesi|"
    r"sallanan_at|nota_dolabi|isikli_dolap|kuyruklu_piyano|bebek_arabasi|v_besik_\d+|v_okuma_koltugu_\d+|v_kuafor_koltugu_\d+|v_kitaplik_\d+|"
    r"v_pet_kafesi_\d+|v_bebek_arabasi_\d+)$")

ITEM_STYLE = ("Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly "
              "shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter "
              "yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no "
              "people, plain solid pure white background (#FFFFFF).")

TURN_LEAD = ("2D flat vector cartoon sticker sheet, NOT a photo: {n} completely separate drawings in a neat {rows} by 3 grid with wide empty "
             "white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: "
             "exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view "
             "facing right, RIGHT = back view. ")
FAMILY_LEAD = ("2D flat vector cartoon sticker sheet, NOT a photo: {n} completely separate items in a neat {grid} grid with wide empty white "
               "space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of "
               "object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same "
               "outline thickness and the same style; only the design and colors change. The items in order, left to right and top to "
               "bottom: ")
ITEM_LEAD = ("2D flat vector cartoon sticker sheet, NOT a photo: {n} completely separate items in a neat {grid} grid with wide empty white "
             "space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, "
             "straight-on front view. The items in order, left to right and top to bottom: ")


def _grid(n, cols):
    rows = (n + cols - 1) // cols
    return f"{rows} by {cols}" if rows > 1 else f"1 by {n}"


def plan(C):
    """C: asset_catalog modülü. -> (sets [(kod, [kodlar], istek, başlık)], md metni)"""
    R2 = C.R2
    have = lambda c: any((C.ROOT / "src" / "assets" / "items").glob(f"{c}.*"))  # noqa: E731
    desc = {c: en for c, _r, _w, _f, _tr, en, _l in C.ITEMS_ALL}
    tr = {c: t for c, _r, _w, _f, t, _en, _l in C.ITEMS_ALL}
    sets = []

    # 1) Çevirme sayfaları: önden/yandan/arkadan. Var olanların eksik görünümleri + yeni odaların oturulan/açılan eşyaları.
    turn = []
    for c, _r, _w, _f, _t, _en, _l in C.ITEMS_ALL:
        old = C.VIEW_BASE.match(c) and not (have(f"{c}_yan") and have(f"{c}_arka"))
        if old or TURN_NEW.match(c):
            turn.append(c)
    for i in range(0, len(turn), 3):
        chunk = turn[i:i + 3]
        code = f"set_ff_cevir_{i // 3 + 1:02d}"
        rows = "; ".join(f"Row {k + 1}: {desc[c]}" for k, c in enumerate(chunk))
        text = f"{code} — " + TURN_LEAD.format(n=3 * len(chunk), rows=len(chunk)) + rows + ". " + ITEM_STYLE
        sets.append((code, [x for c in chunk for x in (c, f"{c}_yan", f"{c}_arka")], text, " · ".join(tr[c] for c in chunk)))
    in_turn = set(turn)

    # 2) Aile sayfaları: çevirme sayfasına girmeyen yeni ailelerin bütün çeşitleri tek resimde.
    for fam, _room, ftr, _sz, lst in R2.NEW_VARIANTS:
        codes = [f"{fam}_{i + 1:02d}" for i in range(len(lst))]
        codes = [c for c in codes if c not in in_turn and not have(c)]
        if not codes:
            continue
        cols = 3 if len(codes) > 4 else len(codes)
        code = f"set_ff_aile_{fam.removeprefix('v_')}"
        items = "; ".join(f"{k + 1}) {desc[c]}" for k, c in enumerate(codes))
        text = f"{code} — " + FAMILY_LEAD.format(n=len(codes), grid=_grid(len(codes), cols)) + items + ". " + ITEM_STYLE
        sets.append((code, codes, text, f"{ftr} ailesi ({len(codes)})"))

    # 3) Kalan tekil eşyalar: oda oda 9'lu.
    for room in C.GROUP_IDS:
        codes = [c for c, r, _w, _f, _t, _en, _l in C.NEW_ROWS if r == room and c not in in_turn and not have(c)]
        name = R2.NEW_ROOMS[room][0] if room in R2.NEW_ROOMS else R2.EXTRA_GROUPS[room]
        for i in range(0, len(codes), 9):
            chunk = codes[i:i + 9]
            code = f"set_ff_esya_{room}_{i // 9 + 1:02d}"
            items = "; ".join(f"{k + 1}) {desc[c]}" for k, c in enumerate(chunk))
            text = f"{code} — " + ITEM_LEAD.format(n=len(chunk), grid=_grid(len(chunk), 3)) + items + ". " + ITEM_STYLE
            sets.append((code, chunk, text, f"{name}: " + ", ".join(tr[c] for c in chunk)))

    # 4) Giydirme aksesuarları: her yuva bir sayfa.
    slots = {}
    for c, _t, en in R2.DRESS_ITEMS:
        slots.setdefault(c.split("_")[1], []).append((c, en))
    for slot, rows in slots.items():
        rows = [(c, en) for c, en in rows if not have(c)]
        if not rows:
            continue
        cols = 5 if len(rows) > 6 else 3
        code = f"set_ff_aks_{slot}"
        items = "; ".join(f"{k + 1}) {en}" for k, (_c, en) in enumerate(rows))
        text = f"{code} — " + FAMILY_LEAD.format(n=len(rows), grid=_grid(len(rows), cols)).replace(
            "variations of the SAME kind of object, one product family", "small accessories of the same kind for a cartoon character") + items + ". " + ITEM_STYLE
        sets.append((code, [c for c, _ in rows], text, f"Aksesuar: {slot} ({len(rows)})"))

    # 5) Oda simgeleri
    icons = [(c, en) for c, _t, en in C.ROOM_ICONS2 if not have(c)]
    if icons:
        code = "set_ff_simge_01"
        items = "; ".join(f"{k + 1}) {en}" for k, (_c, en) in enumerate(icons))
        text = f"{code} — " + ITEM_LEAD.format(n=len(icons), grid=_grid(len(icons), 3)) + items + ". " + C.STYLE_UI
        sets.append((code, [c for c, _ in icons], text, f"Oda düğmeleri ({len(icons)})"))

    total = sum(len(s[1]) for s in sets)
    md = [f"# Firefly sayfaları: {len(sets)} istek, {total} görsel\n",
          """Bu dosyadaki her istek **tek bir resimde birden çok görsel** üretir; ben sayfayı keserim ve her parçaya doğru kodu veririm.
Aynı eşyanın açıları ve aynı ailenin çeşitleri aynı resimde istendiği için birbirinden sapmaz.

## Firefly ayarları (hepsi için)

| Ayar | Değer |
|---|---|
| Model | Firefly Image (en yeni) |
| Aspect ratio | **Square (1:1)** |
| Content type | **Art** |
| Style reference | `firefly-stil-referansi.png`, güç yüksek |
| İndirme | PNG, en büyük boyut |

## Dosya adı ve yükleme

- İsteğin başındaki **kod** (`set_ff_…`) indirilen dosyanın adında kalsın; Firefly zaten isteğin ilk kelimelerini koyar.
- Birkaç sayfayı zip yapıp yükleyin. Sayıyı tutturamayan sayfaları elle adlandırırım; beğenmediğinizi aynı kodla yeniden üretin.

## Sayfa türleri

- **Çevirme sayfaları** (`set_ff_cevir_…`): 3×3. Her **satır tek eşya**: solda önden, ortada yandan (sağa bakan), sağda arkadan.
  Firefly bazen sırayı karıştırır: bir satırdaki üç çizim aynı eşya değilse ya da açılar karışıksa yeniden üretin.
  Var olan eşyaların önden resmi de bu sayfadakiyle değişir; böylece üç açı birbirine uyar.
- **Aile sayfaları** (`set_ff_aile_…`): bir ailenin bütün çeşitleri (ör. 6 pet yatağı) aynı resimde, aynı ölçekte.
- **Eşya sayfaları** (`set_ff_esya_…`): kalan eşyalar, 9'lu.
- **Aksesuar sayfaları** (`set_ff_aks_…`): taç, gözlük, kolye… her tür bir sayfa. Ayakkabılar tek tek, önden.
"""]
    groups = [("Çevirme sayfaları (önden · yandan · arkadan)", "set_ff_cevir_"), ("Aile sayfaları", "set_ff_aile_"),
              ("Eşya sayfaları", "set_ff_esya_"), ("Aksesuar sayfaları", "set_ff_aks_"), ("Oda düğmeleri", "set_ff_simge_")]
    md.append("## Özet\n\n| Tür | İstek | Görsel |\n|---|---|---|\n" + "\n".join(
        f"| {t} | {sum(1 for s in sets if s[0].startswith(p))} | {sum(len(s[1]) for s in sets if s[0].startswith(p))} |" for t, p in groups)
        + f"\n| **Toplam** | **{len(sets)}** | **{total}** |\n")
    for t, p in groups:
        part = [s for s in sets if s[0].startswith(p)]
        if not part:
            continue
        md.append(f"\n## {t} ({len(part)} istek)\n")
        for code, codes, text, title in part:
            md.append(f"### `{code}` — {title}\n")
            md.append(f"Kodlar sırayla: {', '.join(codes)}\n")
            md.append("```\n" + text + "\n```\n")
    return [(c, cs, t) for c, cs, t, _ in sets], "\n".join(md)
