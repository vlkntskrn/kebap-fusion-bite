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

TURN_LEAD = ("2D flat vector cartoon sticker sheet, NOT a photo: EXACTLY {n} completely separate drawings, no more, in a neat grid of {rows} rows and EXACTLY 3 columns with wide empty "
             "white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: "
             "exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view "
             "facing right, RIGHT = back view. ")
FAMILY_LEAD = ("2D flat vector cartoon sticker sheet, NOT a photo: EXACTLY {n} completely separate items, no extra or repeated items, in a neat {grid} grid with wide empty white "
               "space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of "
               "object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same "
               "outline thickness and the same style; only the design and colors change. The items in order, left to right and top to "
               "bottom: ")
ITEM_LEAD = ("2D flat vector cartoon sticker sheet, NOT a photo: EXACTLY {n} completely separate items, no extra or repeated items, in a neat {grid} grid with wide empty white "
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

    # Gerçek boylar (scripts/sizes.py): oyun görselleri bu boylara göre kendisi ölçekler.
    import importlib.util
    spec_ = importlib.util.spec_from_file_location("sizes", C.ROOT / "scripts" / "sizes.py")
    SZ = importlib.util.module_from_spec(spec_)
    spec_.loader.exec_module(SZ)

    def real(c):
        sp = SZ.spec(c)
        if not sp:
            return None
        return f"{'boy' if sp[0] == 'h' else 'en'} {sp[1]} cm"

    # Yeniden üretilecekler (scripts/redo.json): ayrı sayfalar, en üstte gösterilir.
    import json as _json
    redo = _json.loads((C.ROOT / "scripts" / "redo.json").read_text()) if (C.ROOT / "scripts" / "redo.json").exists() else {}
    redo_sets = []
    turn_r = list(redo.get("cevir", {}))
    for i in range(0, len(turn_r), 3):
        chunk = turn_r[i:i + 3]
        code = f"set_ff_tekrar_cevir_{i // 3 + 1:02d}"
        rows = "; ".join(f"Row {k + 1}: {desc[c]}" for k, c in enumerate(chunk))
        text = f"{code} — " + TURN_LEAD.format(n=3 * len(chunk), rows=len(chunk)) + rows + ". " + ITEM_STYLE
        why = " · ".join(f"{tr[c]}: {redo['cevir'][c]}" for c in chunk)
        redo_sets.append((code, [x for c in chunk for x in (c, f"{c}_yan", f"{c}_arka")], text, why))
    es = list(redo.get("esya", {}))
    if es:
        code = "set_ff_tekrar_esya_01"
        items = "; ".join(f"{k + 1}) {desc[c]}" for k, c in enumerate(es))
        text = f"{code} — " + ITEM_LEAD.format(n=len(es), grid=_grid(len(es), 3)) + items + ". " + ITEM_STYLE + " Absolutely no text, no letters and no numbers anywhere."
        redo_sets.append((code, es, text, " · ".join(f"{tr[c]}: {redo['esya'][c]}" for c in es)))

    # İlk teslim tamamlandı: sayfa kodları ilk plandaki gibi sabit kalır (scripts/ff_sets_ilk.json), md'de yalnızca tekrarlar listelenir.
    # Giydirme v2: aksesuarlar karakter referansıyla, giyildiği açıda (redo.json: "aks_v2": true)
    if redo.get("aks_v2"):
        ok_slots = set(redo.get("aks_v2_ok", []))
        for slot, title, how, items in R2.DRESS_V2:
            if slot in ok_slots:
                continue
            codes = [f"aks_{slot}_{i + 1:02d}" for i in range(len(items))]
            cols = 5 if len(items) > 6 else 3
            code = f"set_ff_aks2_{slot}"
            lst = "; ".join(f"{k + 1}) {en}" for k, en in enumerate(items))
            lead = ("Do not use any reference picture. " if slot == "boyun" else
                    "Use the attached character picture ONLY as a size and angle reference; do NOT draw the character. ")
            text = (f"{code} — " + lead +
                    f"Draw a 2D flat vector cartoon sticker sheet, NOT a photo: EXACTLY {len(items)} completely separate items, no extra or repeated items, "
                    f"in a neat {_grid(len(items), cols)} grid with wide empty white space between them, none touching. {how}. "
                    f"The items in order, left to right and top to bottom: {lst}. "
                    "Same drawing style as the character: flat vector, thick dark navy outline (#3D3553), soft pastel colors, soft gentle shading, "
                    "no people, no text, no letters, plain pure white background (#FFFFFF). "
                    "VERY IMPORTANT: draw ONLY the accessory objects themselves. NO skin, NO hands, NO fingers, NO arms, NO wrists, NO legs, NO feet, NO ankles, NO neck, NO shoulders, "
                    "NO hair, NO head, NO face. Where a body part would be inside or behind the accessory, leave it EMPTY WHITE background. "
                    "No white sticker outline around the items.")
            ref_note = "**referans YÜKLEMEYİN** (yüklenince boynu da çiziyor)" if slot == "boyun" else "referans: `referans/kiz1.png` (yükleyin)"
            redo_sets.append((code, codes, text, f"{title} — {ref_note}"))

    frozen = C.ROOT / "scripts" / "ff_sets_ilk.json"
    if frozen.exists():
        ilk = _json.loads(frozen.read_text())
        md = [] if redo_sets else ["# ✅ Bütün görseller tamam\n\nİlk teslimdeki 98 sayfa ve yeniden üretilen sayfalar oyunda. Şu an üretilecek görsel yok.\n"] if not redo_sets else []
        if redo_sets:
            md.append(f"# 🔁 YENİDEN ÜRETİLECEKLER ({len(redo_sets)} istek, {sum(len(x[1]) for x in redo_sets)} görsel)\n")
            if redo.get("aks_v2") and set(redo.get("aks_v2_ok", [])) >= {"goz", "kulak", "yuz", "canta", "ayak", "bas", "bilek", "el"}:
                md.append("Giydirme aksesuarlarından 8 sayfa tamam; yalnızca kolyeler kaldı. Bu sayfada karakter referansı **yüklemeyin**.\n")
            elif redo.get("aks_v2"):
                md.append("**Giydirme aksesuarları — karaktere göre yeniden.** Her istekte Gemini'ye `referans/kiz1.png` resmini de yükleyin "
                          "(referans.zip içinde; mor örgülü kız). Gemini aksesuarları bu karakterin üstünde duracağı açıda ve ölçüde çizer; "
                          "karakteri çizmez. Oyun her karaktere boyuna göre oturtur. Ayakkabılar **çift**, önden; küpeler **çift**; "
                          "sırt çantasından yalnızca önden görünen iki askı.\n")
            md.append("Ayarlar aynı (kare 1:1, 2K).\n")
            for code, codes, text, why in redo_sets:
                md.append(f"### `{code}`\n")
                md.append(f"**Neden:** {why}\n")
                md.append(f"**Ebat:** Square 1:1, 2K · **Kodlar sırayla:** {', '.join(codes)}\n")
                md.append("```\n" + text + "\n```\n")
            md.append("\n---\n")
        return [(k, v, "") for k, v in ilk.items()] + [(c, cs, t) for c, cs, t, _ in redo_sets], "\n".join(md)

    total = sum(len(s[1]) for s in sets)
    md = []
    if redo_sets:
        md.append(f"# 🔁 YENİDEN ÜRETİLECEKLER ({len(redo_sets)} istek, {sum(len(x[1]) for x in redo_sets)} görsel)\n")
        md.append("İlk teslimde kullanılamayan görseller. Ayarlar aynı (kare 1:1, 2K). Çevirme sayfalarında satırın üçü birden "
                  "yeniden üretilir, böylece önden, yandan ve arkadan resim birbirine uyar.\n")
        for code, codes, text, why in redo_sets:
            md.append(f"### `{code}`\n")
            md.append(f"**Neden:** {why}\n")
            md.append(f"**Ebat:** Square 1:1, 2K · **Kodlar sırayla:** {', '.join(codes)}\n")
            md.append("```\n" + text + "\n```\n")
        md.append("\n---\n")
    md += [f"# Firefly sayfaları: {len(sets)} istek, {total} görsel\n",
          """Bu dosyadaki her istek **tek bir resimde birden çok görsel** üretir; ben sayfayı keserim ve her parçaya doğru kodu veririm.
Aynı eşyanın açıları ve aynı ailenin çeşitleri aynı resimde istendiği için birbirinden sapmaz.

## Firefly ayarları (hepsi için)

| Ayar | Değer |
|---|---|
| Model | Firefly Image (en yeni) |
| Aspect ratio | **Square (1:1)** — her sayfa kare |
| Boyut | İndirirken **en büyük** (2048×2048 px). Daha küçük olursa kesilen parçalar bulanık olur |
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
            sizes_ = []
            for c in codes:
                r = real(c)
                if r and not c.endswith(("_yan", "_arka")):
                    sizes_.append(f"{c}: {r}")
            md.append(f"**Ebat:** Square 1:1, en büyük boyut (2048×2048) · **Kodlar sırayla:** {', '.join(codes)}\n")
            if sizes_:
                md.append(f"<sub>Gerçek boylar (oyun kendisi ölçekler, istekte yazmanıza gerek yok): {' · '.join(sizes_)}</sub>\n")
            md.append("```\n" + text + "\n```\n")
    return [(c, cs, t) for c, cs, t, _ in sets + redo_sets], "\n".join(md)
