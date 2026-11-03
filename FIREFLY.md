# Firefly sayfaları: 98 istek, 743 görsel

Bu dosyadaki her istek **tek bir resimde birden çok görsel** üretir; ben sayfayı keserim ve her parçaya doğru kodu veririm.
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

## Özet

| Tür | İstek | Görsel |
|---|---|---|
| Çevirme sayfaları (önden · yandan · arkadan) | 31 | 279 |
| Aile sayfaları | 26 | 144 |
| Eşya sayfaları | 31 | 254 |
| Aksesuar sayfaları | 9 | 57 |
| Oda düğmeleri | 1 | 9 |
| **Toplam** | **98** | **743** |


## Çevirme sayfaları (önden · yandan · arkadan) (31 istek)

### `set_ff_cevir_01` — Gardırop · Şifonyer · Kitaplık

Kodlar sırayla: dolap, dolap_yan, dolap_arka, sifonyer, sifonyer_yan, sifonyer_arka, kitaplik, kitaplik_yan, kitaplik_arka

```
set_ff_cevir_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a tall pastel pink wardrobe with two doors and round knobs; Row 2: a cream chest of drawers with three drawers and gold handles; Row 3: a bookshelf with colorful books, a small plant and a toy. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_02` — Komodin · Oyuncak sandığı · Retro buzdolabı

Kodlar sırayla: komodin, komodin_yan, komodin_arka, oyuncaksandigi, oyuncaksandigi_yan, oyuncaksandigi_arka, retrobuzdolabi, retrobuzdolabi_yan, retrobuzdolabi_arka

```
set_ff_cevir_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a small bedside table with a mushroom lamp on top; Row 2: an open toy chest with a ball, a teddy and blocks peeking out; Row 3: a retro rounded fridge in peach color with a silver handle and cute magnets. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_03` — Buzdolabı · Mutfak tezgâhı · Ocak

Kodlar sırayla: buzdolabi, buzdolabi_yan, buzdolabi_arka, tezgah, tezgah_yan, tezgah_arka, ocak, ocak_yan, ocak_arka

```
set_ff_cevir_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a mint green two-door fridge with sticky notes and magnets; Row 2: a kitchen counter with a sink, a stove top and an oven, cream cabinets with round knobs; Row 3: a small cooking stove with an oven and a pink pot on top. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_04` — Fırın · Tabak dolabı · Gardırop 1

Kodlar sırayla: firin, firin_yan, firin_arka, tabakdolabi, tabakdolabi_yan, tabakdolabi_arka, v_dolap_01, v_dolap_01_yan, v_dolap_01_arka

```
set_ff_cevir_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a built-in oven with a glass door and a tray of cookies inside; Row 2: a glass-door kitchen cabinet with stacked plates and cups; Row 3: a simple white two-door wardrobe. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_05` — Gardırop 2 · Gardırop 3 (kilitli) · Gardırop 4 (kilitli)

Kodlar sırayla: v_dolap_02, v_dolap_02_yan, v_dolap_02_arka, v_dolap_03, v_dolap_03_yan, v_dolap_03_arka, v_dolap_04, v_dolap_04_yan, v_dolap_04_arka

```
set_ff_cevir_05 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a light wooden wardrobe with round knobs; Row 2: a mint wardrobe with heart shaped door handles; Row 3: a lilac wardrobe with a mirror door. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_06` — Gardırop 5 (kilitli) · Gardırop 6 (kilitli) · Buzdolabı 1

Kodlar sırayla: v_dolap_05, v_dolap_05_yan, v_dolap_05_arka, v_dolap_06, v_dolap_06_yan, v_dolap_06_arka, buzdolabi_01, buzdolabi_01_yan, buzdolabi_01_arka

```
set_ff_cevir_06 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a pink wardrobe with a scalloped top and flower decorations; Row 2: a golden princess wardrobe with crystal knobs; Row 3: a simple white two-door fridge. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_07` — Buzdolabı 2 · Buzdolabı 3 (kilitli) · Buzdolabı 4 (kilitli)

Kodlar sırayla: buzdolabi_02, buzdolabi_02_yan, buzdolabi_02_arka, buzdolabi_03, buzdolabi_03_yan, buzdolabi_03_arka, buzdolabi_04, buzdolabi_04_yan, buzdolabi_04_arka

```
set_ff_cevir_07 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a light grey fridge with a freezer on top; Row 2: a mint green retro rounded fridge with a silver handle; Row 3: a pastel pink retro fridge with cute magnets. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_08` — Buzdolabı 5 (kilitli) · Buzdolabı 6 (kilitli) · Buzdolabı 7 (kilitli)

Kodlar sırayla: buzdolabi_05, buzdolabi_05_yan, buzdolabi_05_arka, buzdolabi_06, buzdolabi_06_yan, buzdolabi_06_arka, buzdolabi_07, buzdolabi_07_yan, buzdolabi_07_arka

```
set_ff_cevir_08 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a lilac fridge with a calendar and sticky notes on it; Row 2: a butter yellow double-door fridge with a water dispenser; Row 3: a sparkly holographic fridge with glitter. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_09` — Buzdolabı 8 (kilitli) · Ocak ve fırın 1 · Ocak ve fırın 2

Kodlar sırayla: buzdolabi_08, buzdolabi_08_yan, buzdolabi_08_arka, v_ocak_01, v_ocak_01_yan, v_ocak_01_arka, v_ocak_02, v_ocak_02_yan, v_ocak_02_arka

```
set_ff_cevir_09 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a big double-door fridge with a smart screen and an ice maker; Row 2: a simple white stove with an oven; Row 3: a cream stove with a pink pot on top. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_10` — Ocak ve fırın 3 (kilitli) · Ocak ve fırın 4 (kilitli) · Ocak ve fırın 5 (kilitli)

Kodlar sırayla: v_ocak_03, v_ocak_03_yan, v_ocak_03_arka, v_ocak_04, v_ocak_04_yan, v_ocak_04_arka, v_ocak_05, v_ocak_05_yan, v_ocak_05_arka

```
set_ff_cevir_10 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a mint retro stove with knobs; Row 2: a lilac stove with a frying pan and pancakes; Row 3: a big red restaurant oven with six burners. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_11` — Ocak ve fırın 6 (kilitli) · Mutfak dolabı 1 · Mutfak dolabı 2

Kodlar sırayla: v_ocak_06, v_ocak_06_yan, v_ocak_06_arka, v_tezgah_01, v_tezgah_01_yan, v_tezgah_01_arka, v_tezgah_02, v_tezgah_02_yan, v_tezgah_02_arka

```
set_ff_cevir_11 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a pizza oven made of bricks; Row 2: a simple white kitchen counter with a sink; Row 3: a wooden kitchen counter with drawers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_12` — Mutfak dolabı 3 (kilitli) · Mutfak dolabı 4 (kilitli) · Mutfak dolabı 5 (kilitli)

Kodlar sırayla: v_tezgah_03, v_tezgah_03_yan, v_tezgah_03_arka, v_tezgah_04, v_tezgah_04_yan, v_tezgah_04_arka, v_tezgah_05, v_tezgah_05_yan, v_tezgah_05_arka

```
set_ff_cevir_12 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a mint kitchen counter with a sink and plants; Row 2: a pink kitchen counter with hanging utensils; Row 3: a lilac kitchen island with bar stools. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_13` — Mutfak dolabı 6 (kilitli) · Koltuk 6 (kilitli) · Televizyon 1

Kodlar sırayla: v_tezgah_06, v_tezgah_06_yan, v_tezgah_06_arka, v_koltuk_06, v_koltuk_06_yan, v_koltuk_06_arka, v_tv_01, v_tv_01_yan, v_tv_01_arka

```
set_ff_cevir_13 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a cream kitchen counter with a tiled backsplash and spice jars; Row 2: a lilac swing chair; Row 3: a small TV on a stand. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_14` — Sallanan at · Oyuncak dolabı · Sallanan beşik

Kodlar sırayla: sallanan_at, sallanan_at_yan, sallanan_at_arka, oyuncak_dolabi, oyuncak_dolabi_yan, oyuncak_dolabi_arka, sallanan_besik, sallanan_besik_yan, sallanan_besik_arka

```
set_ff_cevir_14 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a wooden rocking horse with a yarn mane and a red saddle; Row 2: a low white toy storage shelf with colorful fabric bins and toys peeking out; Row 3: a white rocking cradle with soft lilac bedding and a little canopy. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_15` — Alt değiştirme masası · Sallanan koltuk · Bebek arabası

Kodlar sırayla: alt_degistirme, alt_degistirme_yan, alt_degistirme_arka, emzirme_koltugu, emzirme_koltugu_yan, emzirme_koltugu_arka, bebek_arabasi, bebek_arabasi_yan, bebek_arabasi_arka

```
set_ff_cevir_15 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a white baby changing table with drawers, a soft mat on top and a basket of diapers; Row 2: a cozy white rocking armchair with a mint cushion and a small blanket; Row 3: a pastel pink baby stroller with a hood. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_16` — Bebek dolabı · Açık gardırop · Kapitone puf

Kodlar sırayla: bebek_dolabi, bebek_dolabi_yan, bebek_dolabi_arka, acik_gardirop, acik_gardirop_yan, acik_gardirop_arka, kapitone_puf, kapitone_puf_yan, kapitone_puf_arka

```
set_ff_cevir_16 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a small white baby wardrobe with star shaped knobs; Row 2: an open walk-in closet rail with colorful dresses on hangers and shoe shelves below; Row 3: a round tufted pink velvet ottoman. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_17` — Ada dolap · Sanat dolabı · Kuyruklu piyano

Kodlar sırayla: ada_dolap, ada_dolap_yan, ada_dolap_arka, sanat_dolabi, sanat_dolabi_yan, sanat_dolabi_arka, kuyruklu_piyano, kuyruklu_piyano_yan, kuyruklu_piyano_arka

```
set_ff_cevir_17 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a white dressing room island with drawers and a glass top showing jewelry; Row 2: an open art supplies cabinet with crayons, paint jars, glitter and paper; Row 3: a white grand piano with the lid open. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_18` — Büyük kitaplık · Okuma koltuğu · Kaydıraklı ranza

Kodlar sırayla: buyuk_kitaplik, buyuk_kitaplik_yan, buyuk_kitaplik_arka, okuma_koltugu, okuma_koltugu_yan, okuma_koltugu_arka, kaydirakli_yatak, kaydirakli_yatak_yan, kaydirakli_yatak_arka

```
set_ff_cevir_18 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a tall wooden bookcase full of colorful books and a few toys; Row 2: a cozy wingback reading armchair with a knitted blanket; Row 3: a low kids loft bed with a pastel slide and a little ladder. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_19` — Nota dolabı · Hikâye sandalyesi · Veteriner dolabı

Kodlar sırayla: nota_dolabi, nota_dolabi_yan, nota_dolabi_arka, hikaye_sandalyesi, hikaye_sandalyesi_yan, hikaye_sandalyesi_arka, veteriner_dolabi, veteriner_dolabi_yan, veteriner_dolabi_arka

```
set_ff_cevir_19 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a cabinet with music books and small instruments; Row 2: a big storyteller chair painted with stars; Row 3: a white cabinet with glass doors, pet food bags and cute medicine bottles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_20` — Bekleme sandalyesi · Kuaför koltuğu · Bekleme koltuğu

Kodlar sırayla: bekleme_sandalyesi, bekleme_sandalyesi_yan, bekleme_sandalyesi_arka, kuafor_koltugu, kuafor_koltugu_yan, kuafor_koltugu_arka, bekleme_koltugu_salon, bekleme_koltugu_salon_yan, bekleme_koltugu_salon_arka

```
set_ff_cevir_20 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a row of two cute waiting room chairs; Row 2: a pink salon chair with a footrest; Row 3: a velvet pink waiting armchair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_21` — Işıklı vitrin · Bebek karyolası 1 · Bebek karyolası 2

Kodlar sırayla: isikli_dolap, isikli_dolap_yan, isikli_dolap_arka, v_besik_01, v_besik_01_yan, v_besik_01_arka, v_besik_02, v_besik_02_yan, v_besik_02_arka

```
set_ff_cevir_21 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a lighted glass wardrobe showing dresses; Row 2: a simple white baby crib; Row 3: a wooden baby crib. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_22` — Bebek karyolası 3 (kilitli) · Bebek karyolası 4 (kilitli) · Bebek karyolası 5 (kilitli)

Kodlar sırayla: v_besik_03, v_besik_03_yan, v_besik_03_arka, v_besik_04, v_besik_04_yan, v_besik_04_arka, v_besik_05, v_besik_05_yan, v_besik_05_arka

```
set_ff_cevir_22 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a round white baby crib with a canopy; Row 2: a pink baby crib with hearts; Row 3: a cloud shaped baby crib. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_23` — Bebek karyolası 6 (kilitli) · Bebek arabası 1 · Bebek arabası 2

Kodlar sırayla: v_besik_06, v_besik_06_yan, v_besik_06_arka, v_bebek_arabasi_01, v_bebek_arabasi_01_yan, v_bebek_arabasi_01_arka, v_bebek_arabasi_02, v_bebek_arabasi_02_yan, v_bebek_arabasi_02_arka

```
set_ff_cevir_23 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a golden royal baby crib; Row 2: a simple grey stroller; Row 3: a mint stroller. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_24` — Bebek arabası 3 (kilitli) · Bebek arabası 4 (kilitli) · Bebek arabası 5 (kilitli)

Kodlar sırayla: v_bebek_arabasi_03, v_bebek_arabasi_03_yan, v_bebek_arabasi_03_arka, v_bebek_arabasi_04, v_bebek_arabasi_04_yan, v_bebek_arabasi_04_arka, v_bebek_arabasi_05, v_bebek_arabasi_05_yan, v_bebek_arabasi_05_arka

```
set_ff_cevir_24 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a vintage cream pram with big wheels; Row 2: a lilac stroller with stars; Row 3: a golden princess pram. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_25` — Kitaplık 1 · Kitaplık 2 · Kitaplık 3 (kilitli)

Kodlar sırayla: v_kitaplik_01, v_kitaplik_01_yan, v_kitaplik_01_arka, v_kitaplik_02, v_kitaplik_02_yan, v_kitaplik_02_arka, v_kitaplik_03, v_kitaplik_03_yan, v_kitaplik_03_arka

```
set_ff_cevir_25 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a simple white bookshelf with books; Row 2: a low wooden book display shelf; Row 3: a house shaped bookshelf. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_26` — Kitaplık 4 (kilitli) · Kitaplık 5 (kilitli) · Kitaplık 6 (kilitli)

Kodlar sırayla: v_kitaplik_04, v_kitaplik_04_yan, v_kitaplik_04_arka, v_kitaplik_05, v_kitaplik_05_yan, v_kitaplik_05_arka, v_kitaplik_06, v_kitaplik_06_yan, v_kitaplik_06_arka

```
set_ff_cevir_26 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a rainbow bookshelf; Row 2: a round bookshelf with a reading seat; Row 3: a castle shaped bookshelf. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_27` — Okuma koltuğu 1 · Okuma koltuğu 2 · Okuma koltuğu 3 (kilitli)

Kodlar sırayla: v_okuma_koltugu_01, v_okuma_koltugu_01_yan, v_okuma_koltugu_01_arka, v_okuma_koltugu_02, v_okuma_koltugu_02_yan, v_okuma_koltugu_02_arka, v_okuma_koltugu_03, v_okuma_koltugu_03_yan, v_okuma_koltugu_03_arka

```
set_ff_cevir_27 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a simple grey reading chair; Row 2: a yellow bean bag chair; Row 3: a hanging egg chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_28` — Okuma koltuğu 4 (kilitli) · Okuma koltuğu 5 (kilitli) · Pet evi 1

Kodlar sırayla: v_okuma_koltugu_04, v_okuma_koltugu_04_yan, v_okuma_koltugu_04_arka, v_okuma_koltugu_05, v_okuma_koltugu_05_yan, v_okuma_koltugu_05_arka, v_pet_kafesi_01, v_pet_kafesi_01_yan, v_pet_kafesi_01_arka

```
set_ff_cevir_28 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a cloud shaped armchair; Row 2: a velvet throne reading chair; Row 3: a white pet crate. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_29` — Pet evi 2 · Pet evi 3 (kilitli) · Pet evi 4 (kilitli)

Kodlar sırayla: v_pet_kafesi_02, v_pet_kafesi_02_yan, v_pet_kafesi_02_arka, v_pet_kafesi_03, v_pet_kafesi_03_yan, v_pet_kafesi_03_arka, v_pet_kafesi_04, v_pet_kafesi_04_yan, v_pet_kafesi_04_arka

```
set_ff_cevir_29 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a wooden pet house; Row 2: a pet house shaped like a castle; Row 3: a pet tent. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_30` — Pet evi 5 (kilitli) · Kuaför koltuğu 1 · Kuaför koltuğu 2

Kodlar sırayla: v_pet_kafesi_05, v_pet_kafesi_05_yan, v_pet_kafesi_05_arka, v_kuafor_koltugu_01, v_kuafor_koltugu_01_yan, v_kuafor_koltugu_01_arka, v_kuafor_koltugu_02, v_kuafor_koltugu_02_yan, v_kuafor_koltugu_02_arka

```
set_ff_cevir_30 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a bird house on a stand; Row 2: a white salon chair; Row 3: a mint salon chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_cevir_31` — Kuaför koltuğu 3 (kilitli) · Kuaför koltuğu 4 (kilitli) · Kuaför koltuğu 5 (kilitli)

Kodlar sırayla: v_kuafor_koltugu_03, v_kuafor_koltugu_03_yan, v_kuafor_koltugu_03_arka, v_kuafor_koltugu_04, v_kuafor_koltugu_04_yan, v_kuafor_koltugu_04_arka, v_kuafor_koltugu_05, v_kuafor_koltugu_05_yan, v_kuafor_koltugu_05_arka

```
set_ff_cevir_31 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate drawings in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every drawing fully visible. Each ROW shows ONE object three times: exactly the same object with identical shape, colors, details and size in all three; LEFT = front view, MIDDLE = side view facing right, RIGHT = back view. Row 1: a lilac velvet salon chair; Row 2: a golden salon chair; Row 3: a salon chair shaped like a shell. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Aile sayfaları (26 istek)

### `set_ff_aile_cadir` — Oyun çadırı ailesi (5)

Kodlar sırayla: v_cadir_01, v_cadir_02, v_cadir_03, v_cadir_04, v_cadir_05

```
set_ff_aile_cadir — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a simple white play tent; 2) a mint play tent with pom poms; 3) a castle shaped play tent with towers; 4) a rocket shaped play tent; 5) a rainbow striped play tent. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_pelus` — Peluş oyuncak ailesi (6)

Kodlar sırayla: v_pelus_01, v_pelus_02, v_pelus_03, v_pelus_04, v_pelus_05, v_pelus_06

```
set_ff_aile_pelus — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a plush bunny; 2) a plush elephant; 3) a plush unicorn; 4) a plush dinosaur; 5) a plush penguin; 6) a plush fox. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_manken` — Manken ailesi (5)

Kodlar sırayla: v_manken_01, v_manken_02, v_manken_03, v_manken_04, v_manken_05

```
set_ff_aile_manken — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a mannequin with a simple white dress; 2) a mannequin with a blue ball gown; 3) a mannequin with a rainbow tutu; 4) a mannequin with a sparkly pop star outfit; 5) a mannequin with a golden princess gown. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_elbise` — Elbise ailesi (6)

Kodlar sırayla: v_elbise_01, v_elbise_02, v_elbise_03, v_elbise_04, v_elbise_05, v_elbise_06

```
set_ff_aile_elbise — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a simple yellow summer dress; 2) a blue denim dress; 3) a lilac princess gown; 4) a mint dress with flowers; 5) a sparkly silver party dress; 6) a red velvet dress with a bow. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_sovale` — Şövale ailesi (5)

Kodlar sırayla: v_sovale_01, v_sovale_02, v_sovale_03, v_sovale_04, v_sovale_05

```
set_ff_aile_sovale — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) an easel with a blank canvas; 2) an easel with a cat painting; 3) an easel with a sea painting; 4) an easel with a flower painting; 5) an easel with a space painting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_cocuk_resmi` — Çocuk resmi ailesi (6)

Kodlar sırayla: v_cocuk_resmi_01, v_cocuk_resmi_02, v_cocuk_resmi_03, v_cocuk_resmi_04, v_cocuk_resmi_05, v_cocuk_resmi_06

```
set_ff_aile_cocuk_resmi — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a framed kids drawing of a house and sun; 2) a framed kids drawing of a family; 3) a framed kids drawing of a cat; 4) a framed kids drawing of a rainbow; 5) a framed kids drawing of a flower garden; 6) a framed kids drawing of a rocket. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_gitar` — Gitar ailesi (6)

Kodlar sırayla: v_gitar_01, v_gitar_02, v_gitar_03, v_gitar_04, v_gitar_05, v_gitar_06

```
set_ff_aile_gitar — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a wooden acoustic guitar; 2) a pink electric guitar; 3) a blue electric guitar with lightning; 4) a ukulele; 5) a star shaped guitar; 6) a golden guitar. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_top_havuzu` — Top havuzu ailesi (5)

Kodlar sırayla: v_top_havuzu_01, v_top_havuzu_02, v_top_havuzu_03, v_top_havuzu_04, v_top_havuzu_05

```
set_ff_aile_top_havuzu — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a square ball pit with pastel balls; 2) a round mint ball pit; 3) a castle ball pit with towers; 4) a rainbow ball pit; 5) a cloud shaped ball pit. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_donence` — Dönence ailesi (5)

Kodlar sırayla: v_donence_01, v_donence_02, v_donence_03, v_donence_04, v_donence_05

```
set_ff_aile_donence — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a crib mobile with clouds; 2) a crib mobile with little elephants; 3) a crib mobile with hot air balloons; 4) a crib mobile with butterflies; 5) a crib mobile with planets. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_ayakkabi` — Ayakkabı ailesi (5)

Kodlar sırayla: v_ayakkabi_01, v_ayakkabi_02, v_ayakkabi_03, v_ayakkabi_04, v_ayakkabi_05

```
set_ff_aile_ayakkabi — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a pair of white sneakers; 2) a pair of pink ballet flats; 3) a pair of glittery party shoes; 4) a pair of rainbow sneakers; 5) a pair of glass princess slippers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_boya_masasi` — Sanat masası ailesi (5)

Kodlar sırayla: v_boya_masasi_01, v_boya_masasi_02, v_boya_masasi_03, v_boya_masasi_04, v_boya_masasi_05

```
set_ff_aile_boya_masasi — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a simple white craft table; 2) a round art table with stools; 3) a rainbow art table; 4) an art table shaped like a palette; 5) a big wooden workshop table. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_davul` — Davul ailesi (5)

Kodlar sırayla: v_davul_01, v_davul_02, v_davul_03, v_davul_04, v_davul_05

```
set_ff_aile_davul — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a small toy drum; 2) a pink drum set; 3) a blue drum with stars; 4) a big bass drum; 5) a set of bongo drums. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_kitap_kosesi` — Okuma köşesi ailesi (5)

Kodlar sırayla: v_kitap_kosesi_01, v_kitap_kosesi_02, v_kitap_kosesi_03, v_kitap_kosesi_04, v_kitap_kosesi_05

```
set_ff_aile_kitap_kosesi — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a reading nook with pillows; 2) a reading tent with fairy lights; 3) a reading treehouse corner; 4) a reading castle corner; 5) a reading cloud corner. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_pet_yatagi` — Pet yatağı ailesi (6)

Kodlar sırayla: v_pet_yatagi_01, v_pet_yatagi_02, v_pet_yatagi_03, v_pet_yatagi_04, v_pet_yatagi_05, v_pet_yatagi_06

```
set_ff_aile_pet_yatagi — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a round grey pet bed; 2) a pink pet bed with a crown; 3) a pet bed shaped like a donut; 4) a pet bed shaped like a slipper; 5) a pet bed shaped like a cloud; 6) a royal pet bed with a canopy. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_oje` — Oje ailesi (6)

Kodlar sırayla: v_oje_01, v_oje_02, v_oje_03, v_oje_04, v_oje_05, v_oje_06

```
set_ff_aile_oje — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a red nail polish bottle; 2) a pink nail polish bottle; 3) a glitter nail polish bottle; 4) a mint nail polish bottle; 5) a purple nail polish bottle; 6) a rainbow nail polish bottle. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_salincak` — Salıncak ailesi (5)

Kodlar sırayla: v_salincak_01, v_salincak_02, v_salincak_03, v_salincak_04, v_salincak_05

```
set_ff_aile_salincak — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a single swing; 2) a baby bucket swing; 3) a tire swing; 4) a nest swing; 5) a swing shaped like a horse. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_kaydirak` — Kaydırak ailesi (5)

Kodlar sırayla: v_kaydirak_01, v_kaydirak_02, v_kaydirak_03, v_kaydirak_04, v_kaydirak_05

```
set_ff_aile_kaydirak — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a small plastic slide; 2) a wavy slide; 3) a double slide; 4) a slide shaped like an elephant; 5) a spiral slide. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_sisme` — Şişme oyuncak ailesi (6)

Kodlar sırayla: v_sisme_01, v_sisme_02, v_sisme_03, v_sisme_04, v_sisme_05, v_sisme_06

```
set_ff_aile_sisme — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) an inflatable crocodile float; 2) an inflatable pizza float; 3) an inflatable rainbow float; 4) an inflatable whale float; 5) an inflatable boat; 6) an inflatable star float. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_avize` — Avize ailesi (6)

Kodlar sırayla: v_avize_01, v_avize_02, v_avize_03, v_avize_04, v_avize_05, v_avize_06

```
set_ff_aile_avize — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a simple white pendant lamp; 2) a crystal chandelier; 3) a flower shaped chandelier; 4) a hot air balloon lamp; 5) a moon and stars chandelier; 6) a candy colored chandelier. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_aplik` — Duvar lambası ailesi (5)

Kodlar sırayla: v_aplik_01, v_aplik_02, v_aplik_03, v_aplik_04, v_aplik_05

```
set_ff_aile_aplik — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a star wall lamp; 2) a moon wall lamp; 3) a flower wall lamp; 4) a heart wall lamp; 5) a rainbow wall lamp. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_yastik` — Yastık ailesi (6)

Kodlar sırayla: v_yastik_01, v_yastik_02, v_yastik_03, v_yastik_04, v_yastik_05, v_yastik_06

```
set_ff_aile_yastik — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a heart cushion; 2) a star cushion; 3) a cat cushion; 4) a rainbow cushion; 5) a donut cushion; 6) a strawberry cushion. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_vazo` — Vazo ailesi (6)

Kodlar sırayla: v_vazo_01, v_vazo_02, v_vazo_03, v_vazo_04, v_vazo_05, v_vazo_06

```
set_ff_aile_vazo — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a white vase with tulips; 2) a pink vase with roses; 3) a blue vase with daisies; 4) a glass vase with sunflowers; 5) a round vase with lavender; 6) a golden vase with peonies. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_cerceve` — Çerçeve ailesi (6)

Kodlar sırayla: v_cerceve_01, v_cerceve_02, v_cerceve_03, v_cerceve_04, v_cerceve_05, v_cerceve_06

```
set_ff_aile_cerceve — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a framed family photo drawing; 2) a framed pet photo drawing; 3) a framed beach photo drawing; 4) a framed baby photo drawing; 5) a heart shaped photo frame; 6) a star shaped photo frame. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_parti_pastasi` — Parti pastası ailesi (6)

Kodlar sırayla: v_parti_pastasi_01, v_parti_pastasi_02, v_parti_pastasi_03, v_parti_pastasi_04, v_parti_pastasi_05, v_parti_pastasi_06

```
set_ff_aile_parti_pastasi — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a chocolate birthday cake; 2) a unicorn cake; 3) a rainbow cake; 4) a princess castle cake; 5) a strawberry cake; 6) a three tier party cake. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_hediye` — Hediye kutusu ailesi (6)

Kodlar sırayla: v_hediye_01, v_hediye_02, v_hediye_03, v_hediye_04, v_hediye_05, v_hediye_06

```
set_ff_aile_hediye — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a pink gift box with a bow; 2) a blue gift box with stars; 3) a striped gift box; 4) a round gift box; 5) a heart shaped gift box; 6) a big golden gift box. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aile_balon` — Balon ailesi (6)

Kodlar sırayla: v_balon_01, v_balon_02, v_balon_03, v_balon_04, v_balon_05, v_balon_06

```
set_ff_aile_balon — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are variations of the SAME kind of object, one product family: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a pink heart balloon; 2) a blue round balloon; 3) a rainbow balloon; 4) a unicorn balloon; 5) a cat balloon; 6) a number free star balloon. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Eşya sayfaları (31 istek)

### `set_ff_esya_oyun_01` — Oyun odası: Oyun çadırı, Top havuzu, Oyuncak mutfak, Tren rayı, Yapı masası, Yapboz minder, Büyük bebek evi, Tırmanma üçgeni, Kukla tiyatrosu

Kodlar sırayla: oyun_cadiri, top_havuzu, oyuncak_mutfak, tren_rayi, lego_masasi, puzzle_minder, buyuk_bebek_evi, tirmanma_ucgeni, kukla_tiyatrosu

```
set_ff_esya_oyun_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a pastel pink and white striped play tent (teepee) with a little pennant garland and a fluffy cushion inside; 2) a round soft ball pit full of colorful plastic balls; 3) a wooden toy kitchen with a tiny stove, sink and little pots; 4) a wooden toy train track set laid out in a loop with a little red train, seen from above; 5) a low kids table covered with colorful building blocks and a small block tower; 6) a colorful foam puzzle floor mat made of interlocking squares, seen from above; 7) a big open wooden dollhouse with three rooms and tiny furniture; 8) a wooden climbing triangle with rungs and a small slide board; 9) a little puppet theater booth with red curtains and two hand puppets on the stage. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_oyun_02` — Oyun odası: Akülü araba, Dev ayıcık, Balon demeti, Oyuncak kutusu, Oyuncak market, Salıncak, Araba pisti, Bowling seti, Kostüm sandığı

Kodlar sırayla: akulu_araba, dev_ayi, balon_demeti, oyuncak_kutusu, oyuncak_market, ic_salincak, yarisa_araba_pisti, bowling_seti, kostum_sandigi

```
set_ff_esya_oyun_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a pastel blue ride-on toy car for kids with a steering wheel; 2) a giant fluffy cream teddy bear sitting with a pink bow; 3) a bunch of five pastel balloons with curly strings; 4) an open cardboard toy box full of toys: a ball, a doll, blocks and a car; 5) a wooden toy market stand with tiny fruits, a scale and a cash register; 6) an indoor wooden swing with soft ropes and a cushion; 7) a colorful toy car race track play mat with little cars, seen from above; 8) a kids bowling set with colorful pins and a ball; 9) an open dress-up trunk with a cape, a crown and a fairy wand peeking out. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_oyun_03` — Oyun odası: Robot oyuncak, Oyuncak roket, Oyuncak bebek arabası, Top sepeti, Hula hop, Oyuncak piyano, Kale yapbozu

Kodlar sırayla: robot_oyuncak, uzay_roketi, oyuncak_bebek_arabasi, top_sepeti, hula_hop, oyuncak_piyano, kale_cadiri

```
set_ff_esya_oyun_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 7 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a cute friendly toy robot with antenna; 2) a big cardboard play rocket with round windows; 3) a small toy doll stroller with a doll inside; 4) a basket full of colorful balls; 5) a striped hula hoop; 6) a small pink toy piano; 7) a big foam castle building blocks set. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_bebekodasi_01` — Bebek odası: Dönence, Oyun parkı, Bebek küveti, Biberon, Emzik, Çıngırak, Bez yığını, Ayıcık rafı, Bulut halı

Kodlar sırayla: donence, oyun_parki, bebek_kuveti, biberon, emzik, cingirak, bez_yigini, ayicik_rafi, bulut_hali

```
set_ff_esya_bebekodasi_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a baby crib mobile hanging from above with little stars, moons and clouds; 2) a square baby playpen with mesh sides and a few soft toys inside; 3) a small baby bath tub on a stand with bubbles and a rubber duck; 4) a baby bottle with milk and a pastel cap; 5) a pastel pink baby pacifier; 6) a colorful baby rattle toy; 7) a neat stack of folded baby diapers; 8) a wall shelf shaped like a cloud with small plush toys on it; 9) a fluffy white rug shaped like a cloud, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_bebekodasi_02` — Bebek odası: Ay gece lambası, Cibinlik, Bebek oyun halısı, Bebek çantası, Bebek terazisi, Müzik kutusu, Bez kitap, Emekleme tüneli, Ana kucağı

Kodlar sırayla: ay_gece_lambasi, bebek_yatagi_tavan, oyun_halisi_bebek, puset_cantasi, bebek_terazisi, muzik_kutusu, bebek_kitabi, emekleme_tuneli, bebek_salincagi

```
set_ff_esya_bebekodasi_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a glowing crescent moon night light; 2) a soft white canopy net hanging from above with a little crown on top; 3) a soft baby play mat with an arch of hanging toys, seen from above; 4) a cute diaper bag with bunny ears; 5) a pastel baby scale with a tray; 6) a music box with a tiny spinning carousel horse; 7) a soft fabric baby book with animals; 8) a colorful soft play tunnel for babies; 9) a baby bouncer seat with a toy bar. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_bebekodasi_03` — Bebek odası: Bebek aynası, Peluş seti, Patik, Sallanan tavşan, Bebek kitaplığı

Kodlar sırayla: bebek_aynasi, bebek_pelus_seti, bebek_ayakkabisi, bebek_sallanir_tavsan, bebek_kitapligi

```
set_ff_esya_bebekodasi_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a soft baby floor mirror with a rainbow frame; 2) three tiny plush toys: a bunny, a bear and a duck; 3) a pair of knitted baby booties; 4) a soft rocking bunny toy; 5) a low baby bookshelf with soft books. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_giyinme_01` — Giyinme odası: Ayakkabı rafı, Çanta rafı, Işıklı boy aynası, Takı kutusu, Şapka standı, Manken, Parfüm seti, Deneme kabini, Saç kurutma

Kodlar sırayla: ayakkabi_rafi, canta_rafi, isikli_boy_aynasi, taki_kutusu, sapka_standi, manken, parfum_seti, deneme_kabini, sac_kurutma

```
set_ff_esya_giyinme_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a white shoe shelf full of colorful kids shoes and boots; 2) a wall shelf with cute handbags and backpacks; 3) a tall full-length mirror with round light bulbs around the frame; 4) an open pink jewelry box with necklaces and rings; 5) a wooden hat stand with a straw hat, a beret and a cap; 6) a dress form mannequin wearing a pastel princess dress; 7) three cute perfume bottles on a small tray; 8) a small fitting room booth with a pink curtain; 9) a pastel hair dryer. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_giyinme_02` — Giyinme odası: Taç vitrini, Elbise, Tişört, Kot pantolon, Mont, Pijama, Ayakkabı, Bot, Çanta

Kodlar sırayla: tac_vitrini, giysi_elbise, giysi_tisort, giysi_kot, giysi_mont, giysi_pijama, giysi_ayakkabi, giysi_bot, giysi_canta

```
set_ff_esya_giyinme_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a glass display case with a sparkly tiara on a velvet pillow; 2) a pink kids party dress with a tulle skirt; 3) a yellow kids t-shirt with a star print; 4) a pair of light blue kids jeans; 5) a puffy lilac kids winter jacket; 6) a cute kids pajama set with clouds; 7) a pair of shiny red kids shoes with straps; 8) a pair of pink rain boots; 9) a small heart shaped kids handbag. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_giyinme_03` — Giyinme odası: Atkı, Taç, Kolye, Gözlük standı, Toka kutusu, Ütü masası, Kıyafet sepeti, Terlik, Yağmurluk

Kodlar sırayla: giysi_atki, giysi_tac, giysi_kolye, gozluk_standi, toka_kutusu, utu_masasi, kiyafet_sepeti, terlik, giysi_yagmurluk

```
set_ff_esya_giyinme_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a striped knitted scarf; 2) a small golden princess tiara with pink gems; 3) a pearl necklace with a heart pendant; 4) a small stand with colorful heart and star sunglasses; 5) an open box of hair bows, clips and scrunchies; 6) a pastel ironing board with an iron; 7) a woven laundry basket with folded clothes; 8) a pair of fluffy bunny slippers; 9) a yellow kids raincoat with a hood. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_giyinme_04` — Giyinme odası: Mayo, Şort, Aksesuar kutusu, Taç standı, Çanta koleksiyonu, Ayakkabı kutusu

Kodlar sırayla: giysi_mayo, giysi_sort, aksesuar_kutusu, tac_standi, canta_koleksiyonu, ayakkabi_kutusu

```
set_ff_esya_giyinme_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a cute kids swimsuit with watermelon print; 2) a pair of kids denim shorts; 3) an open box with sunglasses, watches and hair clips; 4) a stand with three tiaras; 5) a shelf with five cute bags; 6) an open shoe box with sparkly shoes. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_atolye_01` — Sanat atölyesi: Şövale, Boya masası, Boya paleti, Fırça kupası, Boya tüpleri, Çömlek çarkı, Heykel, Kâğıt rulosu, Resim ipi

Kodlar sırayla: sovale, boya_masasi, boya_paleti, firca_kupasi, boya_tupleri, comlek_carki, heykel_kaidesi, kagit_rulosu, resim_ipi

```
set_ff_esya_atolye_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a wooden easel with a colorful painting of a rainbow and a sun; 2) a kids craft table with paint pots, brushes and paper on top; 3) a wooden paint palette with colorful paint blobs; 4) a jar full of paint brushes; 5) a set of colorful paint tubes; 6) a small pottery wheel with a clay vase on it; 7) a funny clay sculpture of a cat on a white pedestal; 8) a standing drawing paper roll holder with a long sheet of paper; 9) a string with clothespins holding colorful kids drawings. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_atolye_02` — Sanat atölyesi: Pastel boya kutusu, Makas ve yapıştırıcı, Boya kovası, Önlük askısı, Sanat taburesi, Işıklı çizim masası, Simli kavanozlar, Dikiş makinesi, Yün sepeti

Kodlar sırayla: pastel_kutusu, makas_yapistirici, boya_kovasi, onluk_askisi, sanat_taburesi, isik_masasi, simli_kavanozlar, dikis_makinesi, yun_sepeti

```
set_ff_esya_atolye_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) an open box of colorful crayons; 2) kids safety scissors and a glue stick; 3) a small bucket of pink paint with drips; 4) wall hooks with colorful painting aprons; 5) a paint splattered wooden stool; 6) a glowing light table for tracing drawings; 7) a row of jars with colorful glitter; 8) a cute pastel sewing machine with a spool of thread; 9) a basket of colorful yarn balls with knitting needles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_atolye_03` — Sanat atölyesi: Oyun hamuru, Boncuk kutusu, Çizim tableti, Boya kurutma rafı, Çocuk sergisi, Boya rafı, Kolaj masası, Önlük, Kil hayvanlar

Kodlar sırayla: oyun_hamuru, boncuk_kutusu, cizim_tableti, sanat_ruloyu_kurutucu, cocuk_sergisi, boya_rafi, kolaj_masasi, sanat_onlugu, heykel_seti

```
set_ff_esya_atolye_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) colorful play dough tubs and shapes; 2) a box of colorful beads with a half-made bracelet; 3) a kids drawing tablet with a stylus; 4) a wooden drying rack with wet paintings; 5) an easel board with kids art pinned on it; 6) a wall shelf with paint jars in rainbow order; 7) a table with paper cutouts and stickers; 8) a painting apron with paint splashes; 9) three small clay animal figures. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_muzik_01` — Müzik odası: Küçük sahne, Mikrofon, Davul seti, Elektro gitar, Keman, Hoparlör, Nota sehpası, Pikap, Kulaklık

Kodlar sırayla: kucuk_sahne, mikrofon, davul_seti, elektro_gitar, keman, hoparlor, nota_sehpasi, plak_calar, kulaklik

```
set_ff_esya_muzik_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a low wooden stage platform with a small purple curtain behind it and star lights; 2) a sparkly pink handheld microphone; 3) a colorful drum set with cymbals; 4) a lilac electric guitar with a star sticker; 5) a wooden violin with a bow; 6) a big black speaker with a glowing ring; 7) a music stand with a sheet of music notes; 8) a cute retro record player with a pink record; 9) a pair of pastel headphones with cat ears. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_muzik_02` — Müzik odası: Sahne ışığı, Tef, Trompet, Flüt, Karaoke makinesi, Nota tablosu, Ksilofon, Marakas, Çello

Kodlar sırayla: sahne_isigi, tef, trompet, flut, karaoke_makinesi, nota_posteri, ksilofon_buyuk, marakas, cello

```
set_ff_esya_muzik_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a stage spotlight on a tall stand with a warm beam; 2) a tambourine with ribbons; 3) a shiny golden trumpet; 4) a silver flute; 5) a karaoke machine with a screen, lights and a microphone; 6) a framed picture of colorful music notes; 7) a big rainbow xylophone on a stand; 8) a pair of colorful maracas; 9) a wooden cello standing on its end pin. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_muzik_03` — Müzik odası: DJ masası, Akordeon, Bağlama, Darbuka, Mikrofon standı, Gitar standı, Nota kitabı, Sahne merdiveni, Plak rafı

Kodlar sırayla: dj_masasi, akordeon, baglama, darbuka, mikrofon_standi, gitar_standi, notalar, isikli_kurs, plak_rafi

```
set_ff_esya_muzik_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a kids DJ table with turntables and glowing buttons; 2) a red accordion; 3) a wooden Turkish baglama (saz) with a long neck; 4) a decorated goblet drum (darbuka); 5) a microphone on a tall stand; 6) a stand holding two guitars; 7) an open music book with colorful notes; 8) small lighted stage steps; 9) a shelf with colorful vinyl records. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_kutuphane_01` — Kütüphane: Kitap yığını, Açık kitap, Okuma minderi, Dünya küresi, Masa lambası, Yazı masası, Kitaplık merdiveni, Ağaç kitaplık, Okuma çadırı

Kodlar sırayla: kitap_yigini, acik_kitap, okuma_minderi, kure, masa_lambasi, yazi_masasi, kitaplik_merdiveni, agac_kitaplik, okuma_cadiri

```
set_ff_esya_kutuphane_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a stack of five colorful books; 2) an open storybook with colorful pictures; 3) a big round floor cushion with tassels; 4) a world globe on a wooden stand; 5) a green banker desk lamp; 6) a wooden writing desk with a drawer and a pencil cup; 7) a wooden library ladder; 8) a bookshelf shaped like a tree with books on the branches; 9) a cozy reading nook tent with fairy lights and pillows. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_kutuphane_02` — Kütüphane: Kitap sepeti, Teleskop, Dünya haritası, Kum saati, Baykuş lamba, Kitap arabası, Ayraçlar, Okuma lambası, Dinozor kitaplık

Kodlar sırayla: kitap_sepeti, teleskop, dunya_haritasi, kum_saati, baykus_lamba, kitap_arabasi, kitap_ayraci_seti, okuma_lambasi, dinozor_kitaplik

```
set_ff_esya_kutuphane_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a woven basket full of picture books; 2) a kids telescope on a tripod; 3) a colorful world map poster with cute animals, no text; 4) a wooden hourglass with pink sand; 5) a cute owl shaped table lamp; 6) a rolling library book cart full of books; 7) a set of cute animal bookmarks; 8) a tall floor reading lamp with a curved neck; 9) a bookshelf shaped like a friendly dinosaur. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_kutuphane_03` — Kütüphane: Defter ve kalemler, Sus işareti, Kitap desteği, Minder köşesi, Gezegen lamba, Bloklar, Okuyan ayıcık, Kitap iade kutusu

Kodlar sırayla: mektup_kutusu, sessiz_tabelasi, fil_kitap_destegi, kitap_kosesi_minder, bilgi_kuresi_lamba, harf_bloklari, kitap_okuyan_ayi, posta_kutusu_kitap

```
set_ff_esya_kutuphane_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 8 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a notebook with colorful pencils; 2) a cute wall sign with a finger on lips owl, no text; 3) a pair of elephant shaped bookends holding books; 4) a corner with big floor pillows and a soft rug; 5) a glowing planet shaped lamp; 6) a stack of colorful wooden blocks with pictures, no letters; 7) a teddy bear reading a book; 8) a cute red book return box. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_petrevir_01` — Pet revir: Muayene masası, Hasta kafesi, Pet tartısı, Pet yatağı, Mama kabı, Su kabı, İlk yardım çantası, Stetoskop, Taşıma çantası

Kodlar sırayla: muayene_masasi, pet_kafesi, pet_tartisi, pet_yatagi_yuvarlak, mama_kabi, su_kabi, ilk_yardim_cantasi, stetoskop, pet_tasima_cantasi

```
set_ff_esya_petrevir_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a white pet examination table with a soft mint pad and a paw print; 2) a cozy pet recovery cage with a blanket and a little bone toy; 3) a flat pet weighing scale with a paw print; 4) a round fluffy pet bed with a pillow; 5) a pet food bowl full of kibble; 6) a blue pet water bowl; 7) a cute first aid bag with a heart and bandages; 8) a toy stethoscope; 9) a pastel pet carrier bag with a window. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_petrevir_02` — Pet revir: Pet küveti, Pet oyuncakları, Ödül kavanozu, Tırmalama tahtası, Tasma askısı, Pati tablosu, Bandaj

Kodlar sırayla: pet_kuveti, pet_oyuncaklari, pet_odul_kavanozu, kedi_tirmalama, tasma_askisi, pati_posteri, bandaj_rulosu

```
set_ff_esya_petrevir_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 7 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a small pet bath tub with bubbles and a rubber bone; 2) a basket of pet toys: a ball, a mouse toy and a rope; 3) a jar of bone shaped pet treats; 4) a cat scratching post with a dangling ball; 5) wall hooks with colorful pet leashes and collars; 6) a framed picture of cute paw prints and hearts; 7) a roll of colorful bandage. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_makyaj_01` — Makyaj odası: Kurutma kaskı, Ayna istasyonu, Oje rafı, Manikür masası, Makyaj çantası, Ruj seti, Far paleti, Fön makinesi, Tarak ve fırça

Kodlar sırayla: kurutma_kaski, ayna_istasyonu, oje_rafi, manikur_masasi, makyaj_cantasi, ruj_seti, far_paleti, fon_makinesi, tarak_firca

```
set_ff_esya_makyaj_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a retro standing hair dryer hood; 2) a salon mirror station with light bulbs and a counter with brushes; 3) a wall shelf full of colorful nail polish bottles; 4) a small white manicure table with a lamp and nail polish; 5) an open pink makeup bag with brushes; 6) three lipsticks in different colors; 7) an eyeshadow palette with pastel colors; 8) a lilac hair dryer; 9) a hairbrush and a comb. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_makyaj_02` — Makyaj odası: Ayak spası, Havlu rafı, Yüz maskesi, Saç bandı, Parfüm vitrini, Oje kurutucu, Saç yıkama koltuğu

Kodlar sırayla: spa_ayak_kuveti, havlu_rafi_salon, yuz_maskesi_seti, sac_bandi, parfum_vitrini, oje_kurutucu, sac_yikama_lavabosu

```
set_ff_esya_makyaj_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 7 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a foot spa basin with bubbles and flower petals; 2) a rack with rolled pastel towels; 3) a jar of face mask with cucumber slices; 4) a fluffy spa headband with bunny ears; 5) a glass display cabinet with perfume bottles; 6) a small nail dryer machine; 7) a salon hair washing chair with a basin. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_oyunparki_01` — Oyun parkı: Büyük kaydırak, Salıncak seti, Tahterevalli, Kum havuzu, Tırmanma duvarı, Atlıkarınca, Park bankı, Su çeşmesi, Ağaç ev

Kodlar sırayla: kaydirak_buyuk, salincak_seti, tahterevalli, kum_havuzu, tirmanma_duvari, atlikarinca, park_banki, su_cesmesi, agac_ev

```
set_ff_esya_oyunparki_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a big colorful playground slide with stairs; 2) a playground swing set with two swings; 3) a colorful seesaw; 4) a wooden sandbox with sand, a bucket and a shovel; 5) a kids climbing wall with colorful holds; 6) a small playground merry-go-round with a pastel canopy; 7) a green wooden park bench; 8) a small drinking water fountain for kids; 9) a cute treehouse with a ladder and a little flag. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_oyunparki_02` — Oyun parkı: Tünel kaydırak, Yaylı at, Basket potası, Seksek, Uçurtma, Dondurma arabası, Park çöp kutusu

Kodlar sırayla: tunel_kaydirak, yayli_at, basket_potasi, seksek, ucurtma, dondurma_arabasi, park_cop_kutusu

```
set_ff_esya_oyunparki_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 7 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a tube slide on a small tower; 2) a spring rider horse toy for the playground; 3) a kids basketball hoop with a ball; 4) a hopscotch game drawn with chalk on the ground, seen from above, no numbers; 5) a colorful kite with a ribbon tail; 6) a cute ice cream cart with an umbrella; 7) a green park trash bin with a smiling face. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_hepsi_01` — Işık, süs ve ev aksesuarları (her oda): Yıldız tavan lambası, Duvar apliği, Neon kalp, Neon gökkuşağı, Bulut lamba, Mantar lamba, Fener, Mumlar, Yastıklar

Kodlar sırayla: tavan_lambasi_yildiz, duvar_apligi, neon_kalp, neon_gokkusagi, bulut_lamba, mantar_lamba, fener_lamba, mum_seti, yastik_seti

```
set_ff_esya_hepsi_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a star shaped ceiling lamp; 2) a cute brass wall sconce lamp with a pastel shade; 3) a glowing pink neon heart wall sign; 4) a glowing rainbow neon wall sign; 5) a glowing cloud shaped wall lamp; 6) a red mushroom shaped table lamp; 7) a little lantern with a candle light; 8) three glowing candles of different sizes; 9) a pile of three cute cushions: a heart, a star and a cloud. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_hepsi_02` — Işık, süs ve ev aksesuarları (her oda): Örgü battaniye, Kedi saat, Teraryum, Fotoğraf çerçeveleri, Örgü sepet, Seramik kuş, Boncuk perde, Rüya kapanı, Duvar yıldızları

Kodlar sırayla: orgu_battaniye, kedi_saat, terrarium, cerceve_seti, dekor_sepet, seramik_kus, boncuk_perde, ruya_kapani, duvar_yildizlari

```
set_ff_esya_hepsi_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a folded chunky knit blanket; 2) a cat shaped wall clock with a swinging tail; 3) a glass terrarium with tiny plants; 4) three small standing photo frames with family drawings; 5) a woven basket with a folded blanket; 6) a cute ceramic bird figurine; 7) a pastel bead curtain with hearts; 8) a dreamcatcher with feathers; 9) a group of glow in the dark stars for the wall. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_parti_01` — Parti malzemeleri ve süsler: Balon kemeri, Flama, Parti masası, Doğum günü pastası, Hediye yığını, Konfeti, Parti şapkası, Pinyata, Kek kulesi

Kodlar sırayla: balon_kemeri, flama, parti_masasi, dogum_gunu_pastasi, hediye_yigini, konfeti_patlatici, parti_sapkasi, pinata, kapkek_kulesi

```
set_ff_esya_parti_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a pastel balloon arch; 2) a pastel triangle bunting garland; 3) a party table with a festive tablecloth, plates and cups; 4) a tall birthday cake with candles and sprinkles; 5) a pile of wrapped presents with bows; 6) a party popper with confetti; 7) a striped cone party hat with a pom pom; 8) a colorful donkey pinata hanging from a string; 9) a cupcake tower with colorful cupcakes. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_parti_02` — Parti malzemeleri ve süsler: Limonata sürahisi, Kâğıt fenerler, Balon köpek, Parti düdüğü, Yıldız balon, Disko ışığı, Dondurmalı pasta

Kodlar sırayla: limonata_surahisi, kagit_fener, balon_hayvan, parti_duduk, yildiz_balon, dans_isigi, sac_kulahi_pasta

```
set_ff_esya_parti_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 7 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a jug of pink lemonade with lemon slices; 2) three hanging paper lanterns in pastel colors; 3) a balloon animal dog; 4) a party blower horn; 5) a golden star foil balloon; 6) a small party disco light projecting colorful dots; 7) an ice cream cake with a cherry. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_bahce_01` — Havuz ve bahçe (ek): Havuz merdiveni, Şişme yatak, Şemsiyeli masa, Havuz duşu, Havuz barı, Hamak, Çardak, Bahçe feneri, Su tabancası

Kodlar sırayla: havuz_merdiveni, sisme_yatak, semsiyeli_masa, havuz_dusu, havuz_bari, hamak, cardak, havuz_lambasi, su_tabancasi

```
set_ff_esya_bahce_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a shiny pool ladder; 2) a striped inflatable pool mattress; 3) a round garden table with a big striped umbrella; 4) an outdoor pool shower; 5) a little tiki juice bar with straw roof; 6) a striped hammock between two posts; 7) a white garden gazebo with flowers; 8) a garden lantern lamp on a post; 9) a colorful water squirt gun. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_esya_bahce_02` — Havuz ve bahçe (ek): Deniz gözlüğü, Havlulu şezlong

Kodlar sırayla: deniz_gozlugu, havlu_sezlong

```
set_ff_esya_bahce_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 2 completely separate items in a neat 1 by 2 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) kids swimming goggles; 2) a lounge chair with a beach towel. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Aksesuar sayfaları (9 istek)

### `set_ff_aks_bas` — Aksesuar: bas (10)

Kodlar sırayla: aks_bas_01, aks_bas_02, aks_bas_03, aks_bas_04, aks_bas_05, aks_bas_06, aks_bas_07, aks_bas_08, aks_bas_09, aks_bas_10

```
set_ff_aks_bas — 2D flat vector cartoon sticker sheet, NOT a photo: 10 completely separate items in a neat 2 by 5 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are small accessories of the same kind for a cartoon character: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a small golden crown with pink gems; 2) a big red hair bow; 3) a straw sun hat with a ribbon; 4) a pastel baseball cap; 5) a pink flower hair clip; 6) a yellow star hair clip; 7) a unicorn horn headband; 8) a cat ears headband; 9) a daisy flower hairband; 10) a sparkly gem tiara. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aks_goz` — Aksesuar: goz (6)

Kodlar sırayla: aks_goz_01, aks_goz_02, aks_goz_03, aks_goz_04, aks_goz_05, aks_goz_06

```
set_ff_aks_goz — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are small accessories of the same kind for a cartoon character: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a pair of black sunglasses; 2) a pair of round glasses; 3) a pair of swim goggles; 4) a pair of heart shaped glasses; 5) a pair of star shaped glasses; 6) a pair of rainbow glasses. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aks_kulak` — Aksesuar: kulak (6)

Kodlar sırayla: aks_kulak_01, aks_kulak_02, aks_kulak_03, aks_kulak_04, aks_kulak_05, aks_kulak_06

```
set_ff_aks_kulak — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are small accessories of the same kind for a cartoon character: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a pair of pastel headphones; 2) a single small gem earring; 3) a single star earring; 4) a single moon earring; 5) a single cherry earring; 6) a single heart earring. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aks_boyun` — Aksesuar: boyun (6)

Kodlar sırayla: aks_boyun_01, aks_boyun_02, aks_boyun_03, aks_boyun_04, aks_boyun_05, aks_boyun_06

```
set_ff_aks_boyun — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are small accessories of the same kind for a cartoon character: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a pearl necklace; 2) a necklace with a heart pendant; 3) a necklace with a star pendant; 4) a flower garland necklace; 5) a gold medal on a ribbon; 6) a striped knitted scarf. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aks_bilek` — Aksesuar: bilek (5)

Kodlar sırayla: aks_bilek_01, aks_bilek_02, aks_bilek_03, aks_bilek_04, aks_bilek_05

```
set_ff_aks_bilek — 2D flat vector cartoon sticker sheet, NOT a photo: 5 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are small accessories of the same kind for a cartoon character: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a kids wrist watch; 2) a sparkly ring; 3) a rainbow bead bracelet; 4) a gem bracelet; 5) a bracelet with a bow. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aks_el` — Aksesuar: el (6)

Kodlar sırayla: aks_el_01, aks_el_02, aks_el_03, aks_el_04, aks_el_05, aks_el_06

```
set_ff_aks_el — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are small accessories of the same kind for a cartoon character: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a smartphone with a pink case; 2) a sparkly microphone; 3) a swirl lollipop; 4) a closed umbrella; 5) a magic wand with a star; 6) a red balloon on a string. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aks_canta` — Aksesuar: canta (6)

Kodlar sırayla: aks_canta_01, aks_canta_02, aks_canta_03, aks_canta_04, aks_canta_05, aks_canta_06

```
set_ff_aks_canta — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are small accessories of the same kind for a cartoon character: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a small handbag; 2) a little purse; 3) a kids backpack; 4) a mini suitcase; 5) a picnic basket; 6) a shopping bag. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aks_ayak` — Aksesuar: ayak (6)

Kodlar sırayla: aks_ayak_01, aks_ayak_02, aks_ayak_03, aks_ayak_04, aks_ayak_05, aks_ayak_06

```
set_ff_aks_ayak — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are small accessories of the same kind for a cartoon character: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a single white sneaker seen from the front; 2) a single red party shoe seen from the front; 3) a single pink ballet flat seen from the front; 4) a single rain boot seen from the front; 5) a single ballet slipper seen from the front; 6) a single flip flop seen from the front. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_ff_aks_yuz` — Aksesuar: yuz (6)

Kodlar sırayla: aks_yuz_01, aks_yuz_02, aks_yuz_03, aks_yuz_04, aks_yuz_05, aks_yuz_06

```
set_ff_aks_yuz — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items in a neat 2 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible. All items are small accessories of the same kind for a cartoon character: drawn at exactly the same scale, the same straight-on front view at eye level, the same outline thickness and the same style; only the design and colors change. The items in order, left to right and top to bottom: 1) a tiny pink heart face sticker; 2) a tiny gold star face sticker; 3) a tiny butterfly face sticker; 4) a tiny rainbow face sticker; 5) a tiny flower face sticker; 6) a tiny sparkle face sticker. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Oda düğmeleri (1 istek)

### `set_ff_simge_01` — Oda düğmeleri (9)

Kodlar sırayla: ui_oda_oyun, ui_oda_bebekodasi, ui_oda_giyinme, ui_oda_atolye, ui_oda_muzik, ui_oda_kutuphane, ui_oda_petrevir, ui_oda_makyaj, ui_oda_oyunparki

```
set_ff_simge_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items in a neat 3 by 3 grid with wide empty white space between them, none touching or overlapping, every item fully visible, all drawn in the same consistent style, straight-on front view. The items in order, left to right and top to bottom: 1) a small cute play tent with a pennant flag; 2) a small cute baby crib with a star mobile; 3) a small cute pink dress on a hanger; 4) a small cute painter's easel with a rainbow painting; 5) a small cute electric guitar with music notes; 6) a small cute stack of colorful books with an open book on top; 7) a small cute veterinary cross with a paw print and a heart; 8) a small cute lipstick and a round mirror with sparkles; 9) a small cute playground slide with a sun. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```
