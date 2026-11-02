# Firefly görsel listesi

Toplam **363 eşya** (232 tanesi çeşit ailelerinden, ilk 2 çeşit bedava, gerisi okuma sorusuyla açılır), **17 karakter**, **12 evcil hayvan**, **38 buton/simge**, **101 kelime resmi**, **30 çıkartma**, **4 arka plan** ve uygulama ikonu. Her isteği olduğu gibi kopyalayıp Firefly'a yapıştırın. Stil, arka plan, açı ve boyut bilgisi isteğin içinde.

## Firefly'da her görsel için aynı ayarlar

| Ayar | Değer |
|---|---|
| Model | **Firefly Image** (Adobe'un kendi modeli, en yeni sürüm; ortak/partner modelleri seçmeyin) |
| Aspect ratio | **Square (1:1)** |
| Content type | **Art** (Sanat). **Photo seçili olmamalı**, yoksa gerçek fotoğraf çıkar |
| **Style reference** | `firefly-stil-referansi.png` dosyasını yükleyin, **Strength: yüksek** (en önemli ayar) |
| Visual intensity | düşük |
| Effects | varsa **Flat design** ya da **Vector look**, yoksa boş |
| Exclude from image (varsa) | `photo, photograph, photorealistic, realistic, 3D render, room, interior, window, wall, floor, perspective, shadow, background scenery, text, letters, logo, watermark, frame, border` |
| İndirme | **PNG** ya da JPG, en büyük boyut |

## Gerçek fotoğraf çıkıyorsa

1. **Content type: Art** seçili mi bakın (Photo değil).
2. **Style reference** kutusuna `firefly-stil-referansi.png` yükleyin ve gücünü (Strength) en yükseğe alın.
   Bu dosya oyundaki çizim tarzını gösterir; Firefly yeni görseli bu tarzda çizer.
3. Model olarak Adobe'un **Firefly Image** modelini seçin.

## Dosya adları

- Her isteğin başında görselin **kodu** var (ör. `yatak — …`). Dosya adı bu kod olmalı: `yatak.png`.
- Firefly indirdiğiniz dosyaya genelde isteğin ilk kelimelerini koyar (ör. `Firefly yatak  a single bed … 12345.jpg`).
  Dosya adında kod geçtiği sürece adını değiştirmeniz **gerekmez**, kodu dosya adından otomatik bulurum.
- Bulamazsam yüklerken "1. resim yatak" gibi yazmanız yeterli.
- Bir eşyayı beğenmezseniz aynı kodla yeniden üretip yükleyin, eskisinin yerine geçer.
- Arka planı ben siliyorum; beyaz arka planla üretmeniz doğru.

## Görseller oyuna nasıl girer

1. Görselleri sohbete yükleyin (bir seferde 10–20 tane rahat olur).
2. Ben arka planı silip kırpar, `src/assets/items/<kod>.png` olarak eklerim.
3. Eşya kendi odasının çekmecesinde, karakter ve hayvanlar her odada hemen görünür.
   Benim çizdiğim aynı adlı eşya varsa, Firefly görseli onun yerine geçer.


## 🆕 Açılan eşyaların içi (7 istek)

Buzdolabı, gardırop, fırın gibi eşyalara dokununca kapakları açılır ve içi görünür; içindekiler raflara dizilir.
Bu resimler o iç görünümün arka planıdır (raflar boş olmalı, oyun eşyaları kendisi koyar). Yoksa oyun düz renkli bir iç çizer.
- **Aspect ratio: Landscape (4:3)**, Art, Style reference yüklü. Arka planını silmiyorum; resim kenardan kenara dolu olmalı.

### `ic_buzdolabi` — Buzdolabının içi

```
ic_buzdolabi — 2D flat vector cartoon background illustration, NOT a photo: the inside of an open fridge seen straight from the front: bright white inner walls, a soft warm light at the top, three empty clear glass shelves at even heights, two empty vegetable drawers at the bottom. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `ic_dolap` — Gardırobun içi

```
ic_dolap — 2D flat vector cartoon background illustration, NOT a photo: the inside of an open pastel wardrobe seen straight from the front: light wooden back wall, an empty wooden hanging rail near the top, two empty wooden shelves below. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `ic_firin` — Fırının içi

```
ic_firin — 2D flat vector cartoon background illustration, NOT a photo: the inside of an open oven seen straight from the front: dark warm brown inner walls, a soft orange glow at the bottom, two empty metal racks. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `ic_sandik` — Oyuncak sandığının içi

```
ic_sandik — 2D flat vector cartoon background illustration, NOT a photo: the inside of an open wooden toy chest seen straight from the front: warm yellow painted inner walls with little stars, empty. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `ic_raf` — Mutfak dolabının içi

```
ic_raf — 2D flat vector cartoon background illustration, NOT a photo: the inside of an open cream kitchen cupboard seen straight from the front: light inner walls, three empty wooden shelves. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `ic_banyo` — Banyo dolabının içi

```
ic_banyo — 2D flat vector cartoon background illustration, NOT a photo: the inside of an open white bathroom cabinet seen straight from the front: pale aqua inner walls, three empty glass shelves. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `ic_cekmece` — Çekmecenin içi

```
ic_cekmece — 2D flat vector cartoon background illustration, NOT a photo: the inside of an open wooden drawer seen from the front and slightly above: light wood, empty. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```


## 🆕 Karakter pozları: oturan ve uyuyan hâller (34 istek)

Oyunda karakter sandalyeye bırakılınca oturur, yatağa bırakılınca uyur. Bu resimler yoksa oyun ayakta duran resmi
keserek ya da yatırarak gösterir; resimler gelince gerçek oturma ve uyuma pozları kullanılır.
- Ayarlar: **Square (1:1)**, Art, Style reference yüklü. En iyi sonuç için Firefly'da **Structure/Style reference** olarak
  aynı karakterin ayakta duran resmini (ör. `kiz1`) yükleyin; böylece yüz ve kıyafet aynı kalır.
- `_yat` resimlerinde karakter **yatay**, başı **solda** olmalı. Toplu istekler aşağıda `set_poz_…` sayfalarında (4'lü).

### `kiz1_otur` — Mor örgülü kız (oturuyor)

```
kiz1_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with a long lavender braid, light skin, wearing a pink hoodie, light blue jeans and white sneakers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz1_yat` — Mor örgülü kız (uyuyor)

```
kiz1_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with a long lavender braid, light skin, wearing a pink hoodie, light blue jeans and white sneakers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz2_otur` — Kıvırcık saçlı kız (oturuyor)

```
kiz2_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with big curly black hair in a puff with a yellow bow, dark brown skin, wearing a yellow dress and pink sandals, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz2_yat` — Kıvırcık saçlı kız (uyuyor)

```
kiz2_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with big curly black hair in a puff with a yellow bow, dark brown skin, wearing a yellow dress and pink sandals, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz3_otur` — Pembe saçlı kız (oturuyor)

```
kiz3_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with a short pink bob haircut, fair skin, wearing a star print t-shirt, a lilac skirt and white boots, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz3_yat` — Pembe saçlı kız (uyuyor)

```
kiz3_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with a short pink bob haircut, fair skin, wearing a star print t-shirt, a lilac skirt and white boots, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz4_otur` — Topuzlu kız (oturuyor)

```
kiz4_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with two blonde space buns, light skin, wearing mint overalls with a white shirt and yellow shoes, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz4_yat` — Topuzlu kız (uyuyor)

```
kiz4_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with two blonde space buns, light skin, wearing mint overalls with a white shirt and yellow shoes, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz5_otur` — Kızıl saçlı kız (oturuyor)

```
kiz5_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with long wavy red hair and freckles, wearing a green dress with a white collar and red shoes, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz5_yat` — Kızıl saçlı kız (uyuyor)

```
kiz5_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with long wavy red hair and freckles, wearing a green dress with a white collar and red shoes, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz6_otur` — Prenses kız (oturuyor)

```
kiz6_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl princess with long brown hair and a small golden tiara, medium tan skin, wearing a puffy lilac ball gown, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz6_yat` — Prenses kız (uyuyor)

```
kiz6_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl princess with long brown hair and a small golden tiara, medium tan skin, wearing a puffy lilac ball gown, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz7_otur` — Pop yıldızı kız (oturuyor)

```
kiz7_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl pop star with a high purple ponytail, light skin, wearing a sparkly silver jacket, a pink skirt and holding nothing, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz7_yat` — Pop yıldızı kız (uyuyor)

```
kiz7_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl pop star with a high purple ponytail, light skin, wearing a sparkly silver jacket, a pink skirt and holding nothing, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `oglan1_otur` — Kahverengi saçlı oğlan (oturuyor)

```
oglan1_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little boy with short brown hair, light skin, wearing a blue sweater, khaki shorts and sneakers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `oglan1_yat` — Kahverengi saçlı oğlan (uyuyor)

```
oglan1_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little boy with short brown hair, light skin, wearing a blue sweater, khaki shorts and sneakers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `oglan2_otur` — Kıvırcık saçlı oğlan (oturuyor)

```
oglan2_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little boy with short black curly hair, dark brown skin, wearing a green t-shirt with a dinosaur, jeans and orange sneakers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `oglan2_yat` — Kıvırcık saçlı oğlan (uyuyor)

```
oglan2_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little boy with short black curly hair, dark brown skin, wearing a green t-shirt with a dinosaur, jeans and orange sneakers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `oglan3_otur` — Şapkalı oğlan (oturuyor)

```
oglan3_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little boy with straight black hair and a backwards yellow cap, light tan skin, wearing a striped shirt and shorts, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `oglan3_yat` — Şapkalı oğlan (uyuyor)

```
oglan3_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little boy with straight black hair and a backwards yellow cap, light tan skin, wearing a striped shirt and shorts, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `bebek1_otur` — Bebek (oturuyor)

```
bebek1_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute cute baby with a tiny curl of hair, wearing a pastel yellow onesie, sitting, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `bebek1_yat` — Bebek (uyuyor)

```
bebek1_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute cute baby with a tiny curl of hair, wearing a pastel yellow onesie, sitting, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `bebek2_otur` — Bebek (pembe) (oturuyor)

```
bebek2_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute cute baby girl with a pink headband, wearing a pink onesie, sitting, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `bebek2_yat` — Bebek (pembe) (uyuyor)

```
bebek2_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute cute baby girl with a pink headband, wearing a pink onesie, sitting, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `anne_otur` — Anne (oturuyor)

```
anne_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute young mother with long brown hair, light skin, wearing a green dress and white sneakers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `anne_yat` — Anne (uyuyor)

```
anne_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute young mother with long brown hair, light skin, wearing a green dress and white sneakers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `baba_otur` — Baba (oturuyor)

```
baba_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute young father with short black hair and a short beard, light tan skin, wearing a blue striped shirt and jeans, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `baba_yat` — Baba (uyuyor)

```
baba_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute young father with short black hair and a short beard, light tan skin, wearing a blue striped shirt and jeans, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `nine_otur` — Nine (oturuyor)

```
nine_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute kind grandmother with grey hair in a bun and round glasses, wearing a lilac cardigan and a long skirt, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `nine_yat` — Nine (uyuyor)

```
nine_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute kind grandmother with grey hair in a bun and round glasses, wearing a lilac cardigan and a long skirt, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `dede_otur` — Dede (oturuyor)

```
dede_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute kind grandfather with white hair, a white mustache and glasses, wearing a brown vest and trousers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `dede_yat` — Dede (uyuyor)

```
dede_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute kind grandfather with white hair, a white mustache and glasses, wearing a brown vest and trousers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ogretmen_otur` — Öğretmen (oturuyor)

```
ogretmen_otur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute friendly young teacher with a brown ponytail, wearing a yellow sweater and blue skirt, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ogretmen_yat` — Öğretmen (uyuyor)

```
ogretmen_yat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute friendly young teacher with a brown ponytail, wearing a yellow sweater and blue skirt, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```


## 🆕 Ev haritası (5 istek)

Ev haritası (odaların seçildiği ekran) bu parçalardan kurulur: arkada manzara, odaların üstünde çatı, çatıda isim
tabelası (yazıyı oyun kendisi yazar), önde çalı şeridi ve yanda ağaç. Odaların içi oyundan canlı gösterilir; o yüzden
evin gövdesi istenmiyor. Her isteğin altında hangi **Aspect ratio**'nun seçileceği yazıyor.
`arka_harita` olduğu gibi kullanılır; diğerlerinin beyaz arka planını ben silerim.

### `arka_harita` — Harita arka planı (16:9) · **Widescreen (16:9)**

```
arka_harita — 2D flat vector cartoon background illustration, NOT a photo: a sunny pastel landscape seen from the front: soft blue sky with a few fluffy clouds and a small sun in the top right corner, far away gentle green rolling hills with tiny round trees, a wide flat light green lawn filling the bottom third, a narrow light stone garden path along the very bottom edge, the middle of the picture is open empty lawn and sky with no house and no buildings so a house can be placed there. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `harita_cati` — Evin çatısı · **Widescreen (16:9)**

```
harita_cati — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wide cute pastel pink tiled dollhouse roof seen straight from the front, a symmetrical triangle gable that is about three times wider than it is tall, scalloped roof tiles, a small round attic window in the center top, a little brick chimney on the right side with a tiny puff of white smoke, white trim along the bottom edge, nothing below the roof. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `harita_tabela` — İsim tabelası (boş) · **Square (1:1)**

```
harita_tabela — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute blank wooden name sign board with rounded corners hanging from two short ropes, cream painted face with a thin pink border, two small flowers on the top corners, the board face is completely empty with no writing. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `harita_cali` — Önde çalı ve çiçek şeridi · **Widescreen (16:9)**

```
harita_cali — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a long low horizontal row of round green bushes with small pink, yellow and white flowers between them, like a garden border strip, the row fills the full width from left edge to right edge, very low and flat, nothing above it. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `harita_agac` — Bahçe ağacı · **Square (1:1)**

```
harita_agac — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a single cute round fluffy green tree with a short brown trunk and a few pink blossoms in the crown. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## 🆕 Oda yüzeyleri: duvar kâğıtları, zeminler, bahçe ve havuz (24 istek)

Bunlar odanın **boş** zemini ve duvarıdır; içinde eşya olmamalı. Oyun bunları fayans gibi yan yana döşer.

- Ayarlar: **Square (1:1)**, **Art**, Style reference yüklü (bahçe manzarası hariç hepsi kare).
- `bahce_manzara` için **Widescreen (16:9)** seçin.
- Bunların arka planını silmiyorum; görsel kenardan kenara dolu olmalı (beyaz kenar, çerçeve olmasın).
- Firefly'da varsa **"Seamless pattern / Tileable"** efektini açın; yoksa istek zaten bunu söylüyor.
- Oyunda: Oda içinde sol menüdeki **Tasarla** düğmesinde duvar ve zemin seçeneği olarak çıkar. `zemin_10` (çim) ve `havuz_su`, `bahce_manzara` havuz bahçesinde kullanılır.

### `duvar_01` — Pembe puantiyeli duvar kâğıdı

```
duvar_01 — 2D flat vector cartoon seamless pattern, NOT a photo: soft blush pink wallpaper with small white polka dots. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_02` — Lila çizgili duvar kâğıdı

```
duvar_02 — 2D flat vector cartoon seamless pattern, NOT a photo: lilac and cream vertical stripes wallpaper. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_03` — Nane yeşili yonca desenli

```
duvar_03 — 2D flat vector cartoon seamless pattern, NOT a photo: mint green wallpaper with tiny white four-leaf clovers. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_04` — Gökyüzü ve bulutlar

```
duvar_04 — 2D flat vector cartoon seamless pattern, NOT a photo: pale sky blue wallpaper with small fluffy white clouds. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_05` — Yıldızlı gece mavisi

```
duvar_05 — 2D flat vector cartoon seamless pattern, NOT a photo: dusty navy blue wallpaper with tiny golden stars and little moons. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_06` — Küçük kalpler

```
duvar_06 — 2D flat vector cartoon seamless pattern, NOT a photo: cream wallpaper with small pink and red hearts in a regular pattern. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_07` — Çiçekli bahar

```
duvar_07 — 2D flat vector cartoon seamless pattern, NOT a photo: butter yellow wallpaper with small pastel flowers and leaves. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_08` — Gökkuşağı yaylar

```
duvar_08 — 2D flat vector cartoon seamless pattern, NOT a photo: white wallpaper with small pastel rainbow arches in a regular pattern. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_09` — Pembe ahşap lambri

```
duvar_09 — 2D flat vector cartoon seamless pattern, NOT a photo: light pink painted wooden wall panels, vertical planks. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_10` — Beyaz tuğla

```
duvar_10 — 2D flat vector cartoon seamless pattern, NOT a photo: soft white painted brick wall with gentle cream mortar. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_11` — Mutfak fayansı

```
duvar_11 — 2D flat vector cartoon seamless pattern, NOT a photo: mint and white small square kitchen wall tiles in a checker pattern. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `duvar_12` — Banyo balık pulu fayans

```
duvar_12 — 2D flat vector cartoon seamless pattern, NOT a photo: pale aqua fish scale bathroom wall tiles. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_01` — Açık meşe parke

```
zemin_01 — 2D flat vector cartoon seamless pattern, NOT a photo: light honey oak wooden floor planks in a straight pattern, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_02` — Balıksırtı parke

```
zemin_02 — 2D flat vector cartoon seamless pattern, NOT a photo: warm light wooden herringbone parquet floor, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_03` — Beyaz ahşap

```
zemin_03 — 2D flat vector cartoon seamless pattern, NOT a photo: whitewashed pale wooden floor planks, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_04` — Siyah beyaz dama

```
zemin_04 — 2D flat vector cartoon seamless pattern, NOT a photo: soft charcoal and cream checkerboard floor tiles, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_05` — Pembe beyaz dama

```
zemin_05 — 2D flat vector cartoon seamless pattern, NOT a photo: blush pink and white checkerboard floor tiles, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_06` — Banyo fayansı

```
zemin_06 — 2D flat vector cartoon seamless pattern, NOT a photo: small white hexagon bathroom floor tiles with light grey grout, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_07` — Mutfak karosu

```
zemin_07 — 2D flat vector cartoon seamless pattern, NOT a photo: terracotta and cream patterned kitchen floor tiles, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_08` — Yumuşak halıfleks

```
zemin_08 — 2D flat vector cartoon seamless pattern, NOT a photo: soft lilac fluffy carpet floor texture, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_09` — Mermer

```
zemin_09 — 2D flat vector cartoon seamless pattern, NOT a photo: white marble floor with very soft pink veins, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `zemin_10` — Çim

```
zemin_10 — 2D flat vector cartoon seamless pattern, NOT a photo: soft green lawn grass with a few tiny daisies, top-down view, for the garden. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `havuz_su` — Havuz suyu (kare, kenarsız döşeme)

```
havuz_su — 2D flat vector cartoon seamless pattern, NOT a photo: sparkling turquoise swimming pool water with soft white light ripples, top-down view. Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, no outline frame, no border, no vignette, no text, no letters, no logo, no watermark.
```

### `bahce_manzara` — Bahçe manzarası (16:9, havuz odasının arkası)

```
bahce_manzara — 2D flat vector cartoon background illustration, NOT a photo: a sunny garden view behind a swimming pool: pastel blue sky with a few soft clouds at the top, a low white wooden fence across the middle, green bushes, a few trees and flower beds along the fence, empty grass in front, the left and right edges continue the same scene so it can repeat side by side. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```


## 🆕 Pencereler ve kapılar (10 istek)

Eşya gibi üretilir (**Square 1:1**, beyaz arka plan; arka planı ben silerim). Pencereler duvara, kapılar yere oturur;
ikisi de oyunda sürüklenip yeri değiştirilebilir. Toplu istek: aşağıdaki `set_yapi_01` (10'lu sayfa).

### `pencere_01` — Beyaz çift kanatlı pencere

```
pencere_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white double casement window with a blue sky and one cloud visible through the glass. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `pencere_02` — Kemerli pencere

```
pencere_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tall arched white window with thin muntins and pale sky behind the glass. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `pencere_03` — Yuvarlak pencere

```
pencere_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round porthole style window with a pink wooden frame and blue sky inside. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `pencere_04` — Perdeli pencere

```
pencere_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white window with short pink gingham curtains tied on both sides and a flower box below. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `pencere_05` — Gece penceresi

```
pencere_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white window showing a dark blue night sky with a crescent moon and stars. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `pencere_06` — Büyük cam kapı/pencere

```
pencere_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wide three-panel white framed window with green garden trees visible outside. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kapi_01` — Beyaz panel kapı

```
kapi_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a closed white panel interior door with a round gold doorknob. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kapi_02` — Pembe kemerli kapı

```
kapi_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a closed pastel pink arched wooden door with a small heart window and gold knob. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kapi_03` — Mint ahşap kapı

```
kapi_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a closed mint green wooden plank door with a brass handle. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kapi_04` — Bahçe cam kapısı

```
kapi_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a closed white French door with glass panes showing a sunny garden. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Toplu üretim: çıkartma sayfaları (86 istek)

Görselleri tek tek üretmek yerine **bir istekte 9 tane** (karakterlerde 4) üretebilirsiniz. Firefly hepsini aynı resimde,
aralarında boşluk bırakarak çizer; ben sayfayı otomatik keser, her parçaya doğru kodu veririm.

- Ayarlar aynı: **Square (1:1)**, **Art**, **Style reference** yüklü.
- Firefly bazen sırayı ya da sayıyı tutturamaz. Sayfada eksik, birleşik ya da fazla parça varsa yine yükleyin,
  kesip hangisinin ne olduğunu ben bakarak adlandırırım. Beğenmediğiniz tek parçayı aşağıdaki tekli istekle yeniden üretebilirsiniz.
- Kalite: tekli istek her eşyayı daha büyük ve detaylı çizer. Önemli eşyalar (yatak, kanepe, karakterler) için tekli,
  küçük eşyalar ve kelime resimleri için toplu üretim iyi bir denge.


### 🆕 YENİ sayfalar: çeşit aileleri, pencere ve kapılar (39 istek)

Bunlar yeni eklendi, henüz üretilmedi. Her ailede ilk 2 çeşit bedava, diğerleri oyunda okuma sorusuyla açılır.

#### `set_cesit_yatak_01` — 9 görsel: v_yatak_01, v_yatak_02, v_yatak_03, v_yatak_04, v_yatak_05, v_yatak_06, v_yatak_07, v_yatak_08, v_dolap_01

```
set_cesit_yatak_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a simple wooden single bed with a white blanket; 2) a single bed with a blue blanket with stars; 3) a pink princess bed with a heart shaped headboard; 4) a white bed with a cloud shaped headboard and a rainbow blanket; 5) a lilac bed with a crescent moon headboard and star pillows; 6) a pastel car shaped bed for kids; 7) a fairy tale bed shaped like a castle with tiny towers; 8) a golden royal bed with a velvet canopy and tassels; 9) a simple white two-door wardrobe. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_yatak_02` — 9 görsel: v_dolap_02, v_dolap_03, v_dolap_04, v_dolap_05, v_dolap_06, v_makyaj_01, v_makyaj_02, v_makyaj_03, v_makyaj_04

```
set_cesit_yatak_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a light wooden wardrobe with round knobs; 2) a mint wardrobe with heart shaped door handles; 3) a lilac wardrobe with a mirror door; 4) a pink wardrobe with a scalloped top and flower decorations; 5) a golden princess wardrobe with crystal knobs; 6) a simple white vanity table with a round mirror; 7) a wooden vanity table with a square mirror; 8) a pink vanity table with a heart mirror; 9) a lilac vanity with a mirror surrounded by light bulbs and perfume bottles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_yatak_03` — 9 görsel: v_makyaj_05, v_makyaj_06, v_masa_01, v_masa_02, v_masa_03, v_masa_04, v_masa_05, v_oturak_01, v_oturak_02

```
set_cesit_yatak_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a white vanity with a big shell shaped mirror and pearls; 2) a golden princess vanity with a crown shaped mirror; 3) a simple white study desk with a chair; 4) a wooden study desk with a desk lamp; 5) a pink desk with a laptop and a cat lamp; 6) a lilac gaming desk with a monitor and colorful lights; 7) a mint desk with a globe, books and a pencil cup; 8) a simple round cream pouf; 9) a light blue bean bag. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_yatak_04` — 9 görsel: v_oturak_03, v_oturak_04, v_oturak_05, v_oturak_06, v_oyuncak_01, v_oyuncak_02, v_oyuncak_03, v_oyuncak_04, v_oyuncak_05

```
set_cesit_yatak_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a pink furry heart shaped chair; 2) a white hanging egg chair with a pink cushion; 3) a lilac cloud shaped armchair; 4) a golden princess throne chair with pink velvet; 5) a wooden toy train; 6) a rubber ball; 7) a rag doll with yarn hair; 8) a toy xylophone; 9) a plush unicorn. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_yatak_05` — 4 görsel: v_oyuncak_06, v_oyuncak_07, v_oyuncak_08, v_oyuncak_09

```
set_cesit_yatak_05 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a toy rocket; 2) a plush dinosaur; 3) a toy castle with flags; 4) a dollhouse with a pink roof. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_mutfak_01` — 9 görsel: buzdolabi_01, buzdolabi_02, buzdolabi_03, buzdolabi_04, buzdolabi_05, buzdolabi_06, buzdolabi_07, buzdolabi_08, v_ocak_01

```
set_cesit_mutfak_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a simple white two-door fridge; 2) a light grey fridge with a freezer on top; 3) a mint green retro rounded fridge with a silver handle; 4) a pastel pink retro fridge with cute magnets; 5) a lilac fridge with a calendar and sticky notes on it; 6) a butter yellow double-door fridge with a water dispenser; 7) a sparkly holographic fridge with glitter; 8) a big double-door fridge with a smart screen and an ice maker; 9) a simple white stove with an oven. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_mutfak_02` — 9 görsel: v_ocak_02, v_ocak_03, v_ocak_04, v_ocak_05, v_ocak_06, v_tezgah_01, v_tezgah_02, v_tezgah_03, v_tezgah_04

```
set_cesit_mutfak_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cream stove with a pink pot on top; 2) a mint retro stove with knobs; 3) a lilac stove with a frying pan and pancakes; 4) a big red restaurant oven with six burners; 5) a pizza oven made of bricks; 6) a simple white kitchen counter with a sink; 7) a wooden kitchen counter with drawers; 8) a mint kitchen counter with a sink and plants; 9) a pink kitchen counter with hanging utensils. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_mutfak_03` — 9 görsel: v_tezgah_05, v_tezgah_06, v_masa_mutfak_01, v_masa_mutfak_02, v_masa_mutfak_03, v_masa_mutfak_04, v_masa_mutfak_05, v_sandalye_01, v_sandalye_02

```
set_cesit_mutfak_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a lilac kitchen island with bar stools; 2) a cream kitchen counter with a tiled backsplash and spice jars; 3) a simple white table; 4) a wooden table with a vase; 5) a round pink table with a cake; 6) a long wooden table with a checkered tablecloth; 7) a glass table with rainbow legs; 8) a simple white chair; 9) a wooden chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_mutfak_04` — 9 görsel: v_sandalye_03, v_sandalye_04, v_sandalye_05, v_sandalye_06, v_alet_01, v_alet_02, v_alet_03, v_alet_04, v_alet_05

```
set_cesit_mutfak_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a pink chair with a heart back; 2) a mint bar stool; 3) a yellow chair with a flower cushion; 4) a lilac velvet chair; 5) a white kettle; 6) a toaster; 7) a blender with a smoothie; 8) a mint stand mixer; 9) a lilac microwave. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_mutfak_05` — 9 görsel: v_alet_06, v_alet_07, v_alet_08, v_alet_09, v_alet_10, v_yemek_01, v_yemek_02, v_yemek_03, v_yemek_04

```
set_cesit_mutfak_05 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a coffee machine with a cup; 2) a waffle maker with a waffle; 3) a cotton candy machine; 4) a popcorn machine full of popcorn; 5) an ice cream machine; 6) a bowl of soup; 7) a plate of spaghetti; 8) a stack of pancakes with syrup; 9) a slice of watermelon. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_mutfak_06` — 9 görsel: v_yemek_05, v_yemek_06, v_yemek_07, v_yemek_08, v_yemek_09, v_yemek_10, v_yemek_11, v_yemek_12, v_tabak_01

```
set_cesit_mutfak_06 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a basket of muffins; 2) a plate of sushi; 3) a bowl of fruit salad; 4) a donut with sprinkles; 5) a big rainbow layer cake; 6) a bowl of popcorn; 7) a milkshake with a cherry; 8) a box of macarons; 9) a shelf with white plates. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_mutfak_07` — 4 görsel: v_tabak_02, v_tabak_03, v_tabak_04, v_tabak_05

```
set_cesit_mutfak_07 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a shelf with pink cups; 2) a glass cabinet with colorful bowls; 3) a hanging rack with pots and pans; 4) a jar shelf with cookies and candies. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_banyo_01` — 9 görsel: v_kuvet_01, v_kuvet_02, v_kuvet_03, v_kuvet_04, v_kuvet_05, v_kuvet_06, v_lavabo_01, v_lavabo_02, v_lavabo_03

```
set_cesit_banyo_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a simple white bathtub; 2) a white bathtub with bubbles; 3) a pink bathtub with golden feet; 4) a round wooden hot tub; 5) a seashell shaped bathtub; 6) a heart shaped jacuzzi with bubbles and rose petals; 7) a simple white sink; 8) a sink with a round mirror; 9) a pink sink with a heart mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_banyo_02` — 9 görsel: v_lavabo_04, v_lavabo_05, v_lavabo_06, v_dus_01, v_dus_02, v_dus_03, v_dus_04, v_tuvalet_01, v_tuvalet_02

```
set_cesit_banyo_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a wooden sink cabinet with plants; 2) a seashell sink with a pearl mirror; 3) a golden princess sink; 4) a simple glass shower; 5) a shower with a blue curtain; 6) a shower with a rainbow curtain; 7) a rain shower with a big round head; 8) a simple white toilet; 9) a toilet with a wooden seat. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_banyo_03` — 9 görsel: v_tuvalet_03, v_tuvalet_04, v_banyo_aksesuar_01, v_banyo_aksesuar_02, v_banyo_aksesuar_03, v_banyo_aksesuar_04, v_banyo_aksesuar_05, v_banyo_aksesuar_06, v_banyo_aksesuar_07

```
set_cesit_banyo_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a pink toilet with a fluffy cover; 2) a golden toilet; 3) a towel rack with a white towel; 4) a laundry basket; 5) a cup with toothbrushes; 6) a bath sponge; 7) a rubber duck family; 8) a bath bomb box; 9) a fluffy pink bathrobe. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_banyo_04` — 3 görsel: v_banyo_aksesuar_08, v_banyo_aksesuar_09, v_banyo_aksesuar_10

```
set_cesit_banyo_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a shelf of colorful shampoo bottles; 2) a bubble machine; 3) a robot vacuum. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_salon_01` — 9 görsel: v_kanepe_01, v_kanepe_02, v_kanepe_03, v_kanepe_04, v_kanepe_05, v_kanepe_06, v_kanepe_07, v_kanepe_08, v_koltuk_01

```
set_cesit_salon_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a simple grey sofa; 2) a beige sofa with pillows; 3) a mint velvet sofa; 4) a pink sofa with heart pillows; 5) a lilac L-shaped sofa; 6) a yellow retro sofa; 7) a cloud shaped white sofa; 8) a golden royal sofa with tassels; 9) a simple grey armchair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_salon_02` — 9 görsel: v_koltuk_02, v_koltuk_03, v_koltuk_04, v_koltuk_05, v_koltuk_06, v_tv_01, v_tv_02, v_tv_03, v_tv_04

```
set_cesit_salon_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a wooden rocking chair; 2) a pink round armchair; 3) a mint egg chair; 4) a yellow bean bag; 5) a lilac swing chair; 6) a small TV on a stand; 7) a flat TV on a wooden cabinet; 8) a retro pink TV with antennas; 9) a big TV with speakers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_salon_03` — 9 görsel: v_tv_05, v_sehpa_01, v_sehpa_02, v_sehpa_03, v_sehpa_04, v_sehpa_05, v_muzik_01, v_muzik_02, v_muzik_03

```
set_cesit_salon_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a home cinema with a projector screen; 2) a simple round coffee table; 3) a wooden coffee table with books; 4) a glass coffee table; 5) a pink heart shaped table with tea set; 6) a marble table with flowers; 7) a small guitar; 8) a toy drum set; 9) a white piano. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_salon_04` — 3 görsel: v_muzik_04, v_muzik_05, v_muzik_06

```
set_cesit_salon_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a pink keyboard; 2) a golden harp; 3) a karaoke microphone stand. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_bahce_01` — 9 görsel: v_havuz_oyuncak_01, v_havuz_oyuncak_02, v_havuz_oyuncak_03, v_havuz_oyuncak_04, v_havuz_oyuncak_05, v_havuz_oyuncak_06, v_havuz_oyuncak_07, v_havuz_oyuncak_08, v_bahce_mobilya_01

```
set_cesit_bahce_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a striped swim ring; 2) a beach ball; 3) an inflatable duck float; 4) an inflatable unicorn float; 5) an inflatable donut float; 6) an inflatable swan float; 7) an inflatable watermelon float; 8) a water slide; 9) a wooden bench. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_bahce_02` — 9 görsel: v_bahce_mobilya_02, v_bahce_mobilya_03, v_bahce_mobilya_04, v_bahce_mobilya_05, v_bahce_mobilya_06, v_bahce_mobilya_07, v_oyun_parki_01, v_oyun_parki_02, v_oyun_parki_03

```
set_cesit_bahce_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a deck chair; 2) a hammock between two posts; 3) a garden swing; 4) a picnic table; 5) a big parasol; 6) a rattan egg chair; 7) a small slide; 8) a sandbox with toys; 9) a seesaw. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_bahce_03` — 9 görsel: v_oyun_parki_04, v_oyun_parki_05, v_oyun_parki_06, v_bahce_bitki_01, v_bahce_bitki_02, v_bahce_bitki_03, v_bahce_bitki_04, v_bahce_bitki_05, v_bahce_bitki_06

```
set_cesit_bahce_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a trampoline; 2) a playhouse; 3) a big castle playground; 4) a flower bed with tulips; 5) a round bush; 6) an apple tree; 7) a palm tree; 8) a cherry blossom tree; 9) a sunflower patch. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_bahce_04` — 2 görsel: v_bahce_bitki_07, v_bahce_bitki_08

```
set_cesit_bahce_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 2 completely separate items arranged in a neat 1 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a vegetable garden box; 2) a rainbow rose bush. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_hepsi_01` — 9 görsel: v_lamba_01, v_lamba_02, v_lamba_03, v_lamba_04, v_lamba_05, v_lamba_06, v_hali_01, v_hali_02, v_hali_03

```
set_cesit_hepsi_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a simple white table lamp; 2) a mushroom shaped night lamp; 3) a moon shaped lamp; 4) a cute bunny shaped lamp; 5) a lava lamp with pink and purple blobs; 6) a crystal chandelier; 7) a round cream rug, seen from above; 8) an oval light blue rug, seen from above; 9) a heart shaped pink fluffy rug, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_hepsi_02` — 9 görsel: v_hali_04, v_hali_05, v_hali_06, v_hali_07, v_raf_01, v_raf_02, v_raf_03, v_raf_04, v_raf_05

```
set_cesit_hepsi_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a rainbow striped round rug, seen from above; 2) a bunny face shaped white rug, seen from above; 3) a cloud shaped lilac rug, seen from above; 4) a purple cow print oval rug, seen from above; 5) a simple white wall shelf with books; 6) a wooden ladder shelf with plants; 7) a cloud shaped wall shelf with tiny toys; 8) a house shaped shelf with dolls; 9) a rainbow shaped bookshelf full of books. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_hepsi_03` — 9 görsel: v_ayna_01, v_ayna_02, v_ayna_03, v_ayna_04, v_ayna_05, v_bitki_01, v_bitki_02, v_bitki_03, v_bitki_04

```
set_cesit_hepsi_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a simple round wall mirror; 2) a tall standing mirror with a wooden frame; 3) a wavy lilac mirror; 4) a heart shaped pink mirror; 5) a golden ornate princess mirror; 6) a small green plant in a pot; 7) a cactus; 8) a tall monstera plant; 9) a snake plant. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_hepsi_04` — 9 görsel: v_bitki_05, v_bitki_06, v_bitki_07, v_bitki_08, v_bitki_09, v_tablo_01, v_tablo_02, v_tablo_03, v_tablo_04

```
set_cesit_hepsi_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a pot of sunflowers; 2) a pot of pink tulips; 3) a little lemon tree; 4) a hanging ivy plant; 5) a bonsai tree; 6) a framed flower painting; 7) a framed cat painting; 8) a framed rainbow painting; 9) a framed sea painting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_cesit_hepsi_05` — 9 görsel: v_tablo_05, v_tablo_06, v_tablo_07, v_evcil_esya_01, v_evcil_esya_02, v_evcil_esya_03, v_evcil_esya_04, v_evcil_esya_05, v_evcil_esya_06

```
set_cesit_hepsi_05 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a framed space painting with planets; 2) a framed family portrait drawing; 3) a framed unicorn painting; 4) a round pet bed; 5) a cat tree; 6) a fish tank; 7) a bird cage; 8) a dog house; 9) a hamster cage with a wheel. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_yapi_01` — 10 görsel: pencere_01, pencere_02, pencere_03, pencere_04, pencere_05, pencere_06, kapi_01, kapi_02, kapi_03, kapi_04

```
set_yapi_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 10 completely separate items arranged in a neat 2 by 5 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a white double casement window with a blue sky and one cloud visible through the glass; 2) a tall arched white window with thin muntins and pale sky behind the glass; 3) a round porthole style window with a pink wooden frame and blue sky inside; 4) a white window with short pink gingham curtains tied on both sides and a flower box below; 5) a white window showing a dark blue night sky with a crescent moon and stars; 6) a wide three-panel white framed window with green garden trees visible outside; 7) a closed white panel interior door with a round gold doorknob; 8) a closed pastel pink arched wooden door with a small heart window and gold knob; 9) a closed mint green wooden plank door with a brass handle; 10) a closed white French door with glass panes showing a sunny garden. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_poz_01` — 4 görsel: kiz1_otur, kiz1_yat, kiz2_otur, kiz2_yat

```
set_poz_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little girl with a long lavender braid, light skin, wearing a pink hoodie, light blue jeans and white sneakers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 2) a cute little girl with a long lavender braid, light skin, wearing a pink hoodie, light blue jeans and white sneakers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow; 3) a cute little girl with big curly black hair in a puff with a yellow bow, dark brown skin, wearing a yellow dress and pink sandals, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 4) a cute little girl with big curly black hair in a puff with a yellow bow, dark brown skin, wearing a yellow dress and pink sandals, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_poz_02` — 4 görsel: kiz3_otur, kiz3_yat, kiz4_otur, kiz4_yat

```
set_poz_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little girl with a short pink bob haircut, fair skin, wearing a star print t-shirt, a lilac skirt and white boots, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 2) a cute little girl with a short pink bob haircut, fair skin, wearing a star print t-shirt, a lilac skirt and white boots, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow; 3) a cute little girl with two blonde space buns, light skin, wearing mint overalls with a white shirt and yellow shoes, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 4) a cute little girl with two blonde space buns, light skin, wearing mint overalls with a white shirt and yellow shoes, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_poz_03` — 4 görsel: kiz5_otur, kiz5_yat, kiz6_otur, kiz6_yat

```
set_poz_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little girl with long wavy red hair and freckles, wearing a green dress with a white collar and red shoes, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 2) a cute little girl with long wavy red hair and freckles, wearing a green dress with a white collar and red shoes, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow; 3) a cute little girl princess with long brown hair and a small golden tiara, medium tan skin, wearing a puffy lilac ball gown, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 4) a cute little girl princess with long brown hair and a small golden tiara, medium tan skin, wearing a puffy lilac ball gown, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_poz_04` — 4 görsel: kiz7_otur, kiz7_yat, oglan1_otur, oglan1_yat

```
set_poz_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little girl pop star with a high purple ponytail, light skin, wearing a sparkly silver jacket, a pink skirt and holding nothing, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 2) a cute little girl pop star with a high purple ponytail, light skin, wearing a sparkly silver jacket, a pink skirt and holding nothing, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow; 3) a cute little boy with short brown hair, light skin, wearing a blue sweater, khaki shorts and sneakers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 4) a cute little boy with short brown hair, light skin, wearing a blue sweater, khaki shorts and sneakers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_poz_05` — 4 görsel: oglan2_otur, oglan2_yat, oglan3_otur, oglan3_yat

```
set_poz_05 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little boy with short black curly hair, dark brown skin, wearing a green t-shirt with a dinosaur, jeans and orange sneakers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 2) a cute little boy with short black curly hair, dark brown skin, wearing a green t-shirt with a dinosaur, jeans and orange sneakers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow; 3) a cute little boy with straight black hair and a backwards yellow cap, light tan skin, wearing a striped shirt and shorts, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 4) a cute little boy with straight black hair and a backwards yellow cap, light tan skin, wearing a striped shirt and shorts, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_poz_06` — 4 görsel: bebek1_otur, bebek1_yat, bebek2_otur, bebek2_yat

```
set_poz_06 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute cute baby with a tiny curl of hair, wearing a pastel yellow onesie, sitting, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 2) a cute cute baby with a tiny curl of hair, wearing a pastel yellow onesie, sitting, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow; 3) a cute cute baby girl with a pink headband, wearing a pink onesie, sitting, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 4) a cute cute baby girl with a pink headband, wearing a pink onesie, sitting, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_poz_07` — 4 görsel: anne_otur, anne_yat, baba_otur, baba_yat

```
set_poz_07 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute young mother with long brown hair, light skin, wearing a green dress and white sneakers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 2) a cute young mother with long brown hair, light skin, wearing a green dress and white sneakers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow; 3) a cute young father with short black hair and a short beard, light tan skin, wearing a blue striped shirt and jeans, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 4) a cute young father with short black hair and a short beard, light tan skin, wearing a blue striped shirt and jeans, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_poz_08` — 4 görsel: nine_otur, nine_yat, dede_otur, dede_yat

```
set_poz_08 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute kind grandmother with grey hair in a bun and round glasses, wearing a lilac cardigan and a long skirt, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 2) a cute kind grandmother with grey hair in a bun and round glasses, wearing a lilac cardigan and a long skirt, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow; 3) a cute kind grandfather with white hair, a white mustache and glasses, wearing a brown vest and trousers, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 4) a cute kind grandfather with white hair, a white mustache and glasses, wearing a brown vest and trousers, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_poz_09` — 2 görsel: ogretmen_otur, ogretmen_yat

```
set_poz_09 — 2D flat vector cartoon sticker sheet, NOT a photo: 2 completely separate items arranged in a neat 1 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute friendly young teacher with a brown ponytail, wearing a yellow sweater and blue skirt, sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile; 2) a cute friendly young teacher with a brown ponytail, wearing a yellow sweater and blue skirt, lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```


### ✅ Önceki sayfalar (47 istek) — zaten üretildi, tekrar üretmeyin

#### `set_esya_yatak_01` — 9 görsel: yatak, yuvarlakyatak, cibinlikliyatak, ranza, besik, dolap, kiyafetaski, sifonyer, makyaj

```
set_esya_yatak_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a single bed with a wooden headboard, pink blanket with tiny flower pattern and two white pillows; 2) a round bed with a rainbow arch headboard, lilac blanket and fluffy white pillows; 3) a princess canopy bed with sheer pink curtains tied with bows and a heart pillow; 4) a white bunk bed with a small ladder, mint and pink blankets; 5) a white baby crib with a little star mobile above it; 6) a tall pastel pink wardrobe with two doors and round knobs; 7) an open clothes rack with colorful hanging shirts and dresses and two drawers below; 8) a cream chest of drawers with three drawers and gold handles; 9) a vanity table with a big mirror surrounded by round light bulbs, a hair brush and lipsticks. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_yatak_02` — 9 görsel: kozmetik, koltuk, armut, cicekminder, ayihali, bilgisayar, calismamasasi, aynadalga, boyaynasi

```
set_esya_yatak_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small glass-door mini fridge full of pastel skincare bottles; 2) a hanging egg chair with a white cushion and a heart pillow, hanging rope on top; 3) a soft lilac bean bag chair; 4) a flower shaped floor cushion in cream and butter yellow; 5) a fluffy rug shaped like a cute teddy bear face, seen from above; 6) a lilac desk with a computer monitor, keyboard and a game controller; 7) a wooden study desk with a desk lamp, pencil cup and a stack of books; 8) a wall mirror with a wavy lilac frame; 9) a tall standing full-length mirror with a wooden frame. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_yatak_03` — 6 görsel: komodin, gecelambasi, oyuncaksandigi, unicorn, oyuncakev, yazitahtasi

```
set_esya_yatak_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small bedside table with a mushroom lamp on top; 2) a moon shaped night light glowing softly; 3) an open toy chest with a ball, a teddy and blocks peeking out; 4) a plush unicorn toy with a rainbow mane; 5) a small toy dollhouse with a pink roof; 6) a standing chalkboard easel with colorful chalk doodles of a sun and a heart. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_mutfak_01` — 9 görsel: retrobuzdolabi, buzdolabi, tezgah, ocak, firin, lavabo, mikrodalga, tost, kahve

```
set_esya_mutfak_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a retro rounded fridge in peach color with a silver handle and cute magnets; 2) a mint green two-door fridge with sticky notes and magnets; 3) a kitchen counter with a sink, a stove top and an oven, cream cabinets with round knobs; 4) a small cooking stove with an oven and a pink pot on top; 5) a built-in oven with a glass door and a tray of cookies inside; 6) a kitchen sink cabinet with a silver faucet; 7) a lilac microwave oven; 8) a pastel blue toaster with a smiling face and two toast slices popping up; 9) a yellow drip coffee machine with a glass coffee pot. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_mutfak_02` — 9 görsel: blender, mikser, kettle, caydanlik, rafkupa, tabakdolabi, kasiklik, masa, yuvarlakmasa

```
set_esya_mutfak_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a blender with a pink strawberry smoothie inside; 2) a stand mixer in mint color with a mixing bowl; 3) an electric kettle in cream color; 4) a pink teapot with a lid; 5) a wall shelf with pink bowls and white mugs; 6) a glass-door kitchen cabinet with stacked plates and cups; 7) a hanging rail with a spatula, a fork, a whisk and a wooden spoon; 8) a small wooden dining table; 9) a round white table with a vase of tulips. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_mutfak_03` — 9 görsel: sandalye, tabure, mamasandalyesi, meyve, ekmek, kurabiye, pizza, hamburger, salata

```
set_esya_mutfak_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a wooden chair with a yellow cushion; 2) a wooden bar stool with a pink cushion; 3) a baby high chair in mint color; 4) a fruit bowl with an apple, an orange and bananas; 5) a woven basket with bread rolls and a baguette; 6) a glass cookie jar full of round cookies; 7) a cute round pizza with cheese and tomato slices; 8) a cute hamburger; 9) a bowl of green salad with tomatoes. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_mutfak_04` — 3 görsel: cilek, sut, saksiotlar

```
set_esya_mutfak_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small basket of red strawberries; 2) a milk carton with a small cow face, no letters; 3) three small pots with basil and mint herbs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_banyo_01` — 9 görsel: kuvet, jakuzi, duskabini, banyolavabo, tuvalet, camasir, sampuan, sepet, havlu

```
set_esya_banyo_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a white bathtub with golden feet full of bubbles; 2) a round wooden hot tub with blue water; 3) a glass shower cabin with a silver shower head; 4) a bathroom sink with an oval mirror and a small cabinet; 5) a white toilet; 6) a white washing machine with a round door; 7) a bathroom shelf with colorful shampoo and soap bottles without letters; 8) a blue laundry basket with towels; 9) a towel rack with a pink striped towel. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_banyo_02` — 6 görsel: bornoz, ayna, ordek, dissfircasi, sabunluk, paspas

```
set_esya_banyo_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a fluffy pink bathrobe hanging on a hook; 2) a round wall mirror with a wooden frame; 3) a yellow rubber duck toy; 4) a cup with two toothbrushes and toothpaste; 5) a soap dispenser bottle in lilac; 6) a fluffy blue bath mat, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_salon_01` — 9 görsel: kanepe, kosekanepe, berjer, tv, tvunitesi, sehpa, oyunrafi, kediagaci, akvaryum

```
set_esya_salon_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a lilac three-seat sofa with a yellow pillow; 2) a cream L-shaped sectional sofa with pastel pillows; 3) a cozy round armchair in mint color; 4) a flat television on a small wooden stand; 5) a low wooden TV cabinet with books and a plant; 6) a round white coffee table with a cup of tea; 7) a shelf full of toys, balls and building blocks; 8) a cat tree scratching post with platforms; 9) a small fish tank with two orange fish and plants. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_salon_02` — 3 görsel: piyano, somine, kuskafesi

```
set_esya_salon_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a white upright piano; 2) a cozy fireplace with a warm fire and stockings; 3) a white bird cage with a small yellow bird inside. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_bahce_01` — 9 görsel: sezlong, semsiye, flamingo, simit, palmiye, buzkutusu, kaydirak, salincak, trambolin

```
set_esya_bahce_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a wooden beach deck chair with pink fabric; 2) a white and pink beach umbrella standing on a pole; 3) an inflatable pink flamingo pool float; 4) a striped inflatable swim ring; 5) a palm tree with coconuts; 6) a yellow picnic cooler box; 7) a small pastel playground slide; 8) a wooden garden swing with ropes and flowers; 9) a round trampoline with a safety net in pastel colors. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_bahce_02` — 9 görsel: kumkovasi, mangal, cicektarhi, agac, cit, kopekkulubesi, bisiklet, limonatastandi, gokkusagi

```
set_esya_bahce_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a sand bucket with a little shovel; 2) a small round barbecue grill; 3) a wooden flower box full of colorful tulips and daisies; 4) a round fluffy green tree with apples; 5) a short white picket fence section; 6) a red wooden dog house; 7) a pastel kids bicycle with a basket of flowers; 8) a wooden lemonade stand with a striped awning, no letters; 9) a pastel rainbow arch with fluffy clouds at both ends. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_bahce_03` — 1 görsel: piknik

```
set_esya_bahce_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 1 completely separate items arranged in a neat 1 by 1 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a red and white checkered picnic blanket with a basket, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_hepsi_01` — 9 görsel: yuvarlakhali, kitaplik, duvarrafi, fotoipi, perde, kedipostu, pasta, limonata, copkutusu

```
set_esya_hepsi_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a round fluffy white rug, seen from above; 2) a bookshelf with colorful books, a small plant and a toy; 3) a floating wall shelf with tiny plants, a candle and a photo frame; 4) a string with clothespins holding instant photos and tiny fairy lights; 5) a pair of soft pink curtains with a curtain rod, tied with bows; 6) a framed poster with a cute smiling cat illustration; 7) a strawberry layer cake with one candle; 8) a glass jug of pink lemonade with lemon slices; 9) a pastel pedal trash bin. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_hepsi_02` — 9 görsel: robot, abajur, lambader, puf, buyukbitki, bitki, sarkitbitki, kaktus, kediyatagi

```
set_esya_hepsi_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a round robot vacuum cleaner; 2) a small table lamp with a pink shade; 3) a tall floor lamp with a cream shade; 4) an orange round pouf; 5) a tall leafy monstera plant in a white pot; 6) a small potted plant in a terracotta pot; 7) a hanging plant in a macrame holder; 8) a small cactus with a pink flower in an orange pot; 9) a round pink pet bed. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_hepsi_03` — 9 görsel: oyunkonsolu, vazo, duvarsaati, disko, sarkit, perilamba, tablo, cerceve, ayi

```
set_esya_hepsi_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a game console with two controllers; 2) a glass vase with pink tulips; 3) a round wall clock shaped like a cat face, without numbers; 4) a lilac disco ball hanging from a string; 5) a hanging pendant ceiling lamp with a cream shade; 6) a string of warm fairy lights hanging in a gentle curve; 7) a framed painting of flowers and a heart; 8) a framed painting of green hills and a sun; 9) a soft brown teddy bear sitting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_esya_hepsi_04` — 4 görsel: top, kalpbalon, dondurma, cadir

```
set_esya_hepsi_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a red and white beach ball; 2) a pink heart shaped balloon on a string; 3) an ice cream cone with pink and vanilla scoops; 4) a cream teepee play tent with bunting flags. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

#### `set_karakter_01` — 4 görsel: kiz1, kiz2, kiz3, kiz4

```
set_karakter_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 1 by 4 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little girl with a long lavender braid, light skin, wearing a pink hoodie, light blue jeans and white sneakers; 2) a cute little girl with big curly black hair in a puff with a yellow bow, dark brown skin, wearing a yellow dress and pink sandals; 3) a cute little girl with a short pink bob haircut, fair skin, wearing a star print t-shirt, a lilac skirt and white boots; 4) a cute little girl with two blonde space buns, light skin, wearing mint overalls with a white shirt and yellow shoes. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_karakter_02` — 4 görsel: kiz5, kiz6, kiz7, oglan1

```
set_karakter_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 1 by 4 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little girl with long wavy red hair and freckles, wearing a green dress with a white collar and red shoes; 2) a cute little girl princess with long brown hair and a small golden tiara, medium tan skin, wearing a puffy lilac ball gown; 3) a cute little girl pop star with a high purple ponytail, light skin, wearing a sparkly silver jacket, a pink skirt and holding nothing; 4) a cute little boy with short brown hair, light skin, wearing a blue sweater, khaki shorts and sneakers. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_karakter_03` — 4 görsel: oglan2, oglan3, bebek1, bebek2

```
set_karakter_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 1 by 4 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little boy with short black curly hair, dark brown skin, wearing a green t-shirt with a dinosaur, jeans and orange sneakers; 2) a cute little boy with straight black hair and a backwards yellow cap, light tan skin, wearing a striped shirt and shorts; 3) a cute cute baby with a tiny curl of hair, wearing a pastel yellow onesie, sitting; 4) a cute cute baby girl with a pink headband, wearing a pink onesie, sitting. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_karakter_04` — 4 görsel: anne, baba, nine, dede

```
set_karakter_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 1 by 4 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute young mother with long brown hair, light skin, wearing a green dress and white sneakers; 2) a cute young father with short black hair and a short beard, light tan skin, wearing a blue striped shirt and jeans; 3) a cute kind grandmother with grey hair in a bun and round glasses, wearing a lilac cardigan and a long skirt; 4) a cute kind grandfather with white hair, a white mustache and glasses, wearing a brown vest and trousers. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_karakter_05` — 1 görsel: ogretmen

```
set_karakter_05 — 2D flat vector cartoon sticker sheet, NOT a photo: 1 completely separate items arranged in a neat 1 by 1 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute friendly young teacher with a brown ponytail, wearing a yellow sweater and blue skirt. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_hayvan_01` — 6 görsel: kedi, kedi2, kedi3, kopek, kopek2, tavsan

```
set_hayvan_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) an orange tabby kitten; 2) a fluffy white kitten with a pink bow; 3) a grey kitten with stripes; 4) a light brown puppy with floppy ears; 5) a white puppy with black spots; 6) a white bunny with long ears. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_hayvan_02` — 6 görsel: hamster, papagan, kaplumbaga, ordekyavrusu, midilli, panda

```
set_hayvan_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a round golden hamster; 2) a small green and yellow parrot; 3) a little green turtle; 4) a fluffy yellow duckling; 5) a little pastel pony with a rainbow mane; 6) a baby panda. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_buton_01` — 9 görsel: ui_geri, ui_hoparlor, ui_basla, ui_anasayfa, ui_tekrar, ui_hediye, ui_yildiz, ui_album, ui_birlestir

```
set_buton_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a rounded arrow pointing left; 2) a cute speaker with sound waves; 3) a big green play triangle; 4) a small cute house; 5) a circular arrow going around; 6) a pink gift box with a big golden bow; 7) a shiny golden star with a cute face; 8) a sticker album book with hearts and stars on the cover; 9) two links of a chain joining together with a sparkle. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_buton_02` — 9 görsel: ui_dogru, ui_cop, ui_oda_yatak, ui_oda_mutfak, ui_oda_banyo, ui_oda_salon, ui_oda_havuz, ui_mod_tasi, ui_mod_boya

```
set_buton_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a happy thumbs up hand; 2) a cute small trash bin; 3) a small cute bed; 4) a small cute cooking pot on a stove with steam; 5) a small cute bathtub with bubbles; 6) a small cute sofa; 7) a small swimming pool with a pink flamingo float; 8) a cute open hand with four little arrows around it; 9) a paintbrush with a pink paint drop. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_buton_03` — 9 görsel: ui_mod_tasarla, ui_kat_kiyafet, ui_kat_sac, ui_kat_ten, ui_kat_taki, ui_kat_elde, ui_kat_ayakkabi, ui_kat_hayvan, ui_kat_fon

```
set_buton_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a wallpaper roll and a paint roller; 2) a pink dress; 3) a long purple braided hairstyle on its own, no face; 4) three round face shapes in light, medium and dark skin tones; 5) a golden tiara with pink gems; 6) a pink microphone; 7) a pair of pink ballet shoes; 8) a cute cat face; 9) a tiny stage with curtains and a star. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_buton_04` — 3 görsel: ui_duvar, ui_zemin, ui_pencere

```
set_buton_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a piece of wallpaper with little hearts; 2) a square of wooden floor planks; 3) a window with a sun and a cloud outside. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kart_01` — 4 görsel: ui_oyun_sesibul, ui_oyun_birlestir, ui_oyun_kelimekur, ui_oyun_oku

```
set_kart_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a big cute cartoon ear with sound waves and a few floating musical notes; 2) two cute rounded toy blocks snapping together with a sparkle in the middle; 3) three colorful puzzle pieces fitting together with little stars; 4) an open storybook with a rainbow and stars coming out of it. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kart_02` — 4 görsel: ui_sahne, ui_ev, ui_giydir, ui_boyama

```
set_kart_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small theater stage with purple curtains, a golden crown and a microphone in spotlight; 2) a cute pastel pink two-storey house with a heart window and flowers; 3) a pastel dress on a hanger next to a little crown and a bow; 4) a paint palette with colorful paint blobs and a brush. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_01` — 9 görsel: kelime_at, kelime_et, kelime_ana, kelime_anne, kelime_ata, kelime_nine, kelime_nene, kelime_nane, kelime_tane

```
set_kelime_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute horse; 2) a piece of steak meat; 3) a smiling mother hugging her child; 4) a smiling mother hugging her little daughter; 5) a kind old grandfather with a cane; 6) a kind grandmother with grey hair in a bun; 7) a kind grandmother knitting; 8) a sprig of fresh mint leaves; 9) a single bean. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_02` — 9 görsel: kelime_anten, kelime_tente, kelime_inat, kelime_tat, kelime_net, kelime_el, kelime_lale, kelime_kale, kelime_kalem

```
set_kelime_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a TV antenna on a little roof; 2) a striped awning over a small shop window; 3) a little girl pouting with crossed arms; 4) a child happily licking a lollipop; 5) a soccer goal net; 6) an open waving hand; 7) a red tulip; 8) a fairy tale castle; 9) a yellow pencil. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_03` — 9 görsel: kelime_elma, kelime_ekmek, kelime_kek, kelime_kalkan, kelime_kedi, kelime_etek, kelime_inek, kelime_kanat, kelime_ekin

```
set_kelime_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a red apple; 2) a loaf of bread; 3) a cupcake; 4) a knight's shield; 5) a cat; 6) a pink skirt; 7) a cow; 8) a pair of feathered wings; 9) a field of golden wheat. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_04` — 9 görsel: kelime_tekne, kelime_iki, kelime_tilki, kelime_lamba, kelime_ayna, kelime_ay, kelime_ayi, kelime_un, kelime_mum

```
set_kelime_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small boat; 2) two red apples side by side; 3) a fox; 4) a table lamp; 5) a hand mirror; 6) a crescent moon; 7) a bear; 8) a bag of flour; 9) a lit candle. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_05` — 9 görsel: kelime_muz, kelime_limon, kelime_yumurta, kelime_oyun, kelime_mutlu, kelime_yatak, kelime_kayik, kelime_koltuk, kelime_kutu

```
set_kelime_05 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a banana; 2) a lemon; 3) an egg; 4) a pair of dice and a board game; 5) a very happy smiling child; 6) a bed; 7) a small rowing boat; 8) an armchair; 9) a cardboard box. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_06` — 9 görsel: kelime_maymun, kelime_kum, kelime_okul, kelime_balik, kelime_balon, kelime_bal, kelime_araba, kelime_ordek, kelime_dede

```
set_kelime_06 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a monkey; 2) a pile of sand with a bucket; 3) a school building; 4) a fish; 5) a balloon; 6) a honey pot; 7) a car; 8) a duck; 9) a grandfather with a white mustache. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_07` — 9 görsel: kelime_saat, kelime_su, kelime_simit, kelime_armut, kelime_domates, kelime_sari, kelime_ari, kelime_burun, kelime_bebek

```
set_kelime_07 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) an alarm clock; 2) a glass of water; 3) a Turkish sesame bagel ring; 4) a pear; 5) a tomato; 6) a yellow paint splash; 7) a bee; 8) a cute nose; 9) a baby. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_08` — 9 görsel: kelime_dondurma, kelime_kirmizi, kelime_yildiz, kelime_balina, kelime_kitap, kelime_top, kelime_tuz, kelime_goz, kelime_gunes

```
set_kelime_08 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) an ice cream cone; 2) a red paint splash; 3) a star; 4) a whale; 5) a book; 6) a ball; 7) a salt shaker; 8) a big eye; 9) a smiling sun. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_09` — 9 görsel: kelime_cicek, kelime_canta, kelime_sapka, kelime_kus, kelime_kopek, kelime_ceket, kelime_pasta, kelime_gemi, kelime_patates

```
set_kelime_09 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a flower; 2) a backpack; 3) a sun hat; 4) a little bird; 5) a dog; 6) a jacket; 7) a birthday cake; 8) a ship; 9) a potato. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_10` — 9 görsel: kelime_peynir, kelime_gol, kelime_semsiye, kelime_corap, kelime_bocek, kelime_ucak, kelime_ev, kelime_havuc, kelime_fil

```
set_kelime_10 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a piece of cheese; 2) a small lake with ducks; 3) an umbrella; 4) a pair of socks; 5) a ladybug; 6) an airplane; 7) a house; 8) a carrot; 9) an elephant. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_11` — 9 görsel: kelime_horoz, kelime_dag, kelime_agac, kelime_fare, kelime_zurafa, kelime_hediye, kelime_havuz, kelime_otobus, kelime_tavsan

```
set_kelime_11 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a rooster; 2) a mountain; 3) a tree; 4) a mouse; 5) a giraffe; 6) a gift box; 7) a swimming pool; 8) a bus; 9) a rabbit. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_kelime_12` — 2 görsel: kelime_tavuk, kelime_kaplumbaga

```
set_kelime_12 — 2D flat vector cartoon sticker sheet, NOT a photo: 2 completely separate items arranged in a neat 1 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a hen; 2) a turtle. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

#### `set_cikartma_01` — 9 görsel: cikartma_01, cikartma_02, cikartma_03, cikartma_04, cikartma_05, cikartma_06, cikartma_07, cikartma_08, cikartma_09

```
set_cikartma_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a unicorn; 2) a panda; 3) a butterfly; 4) a ladybug; 5) a tropical fish; 6) a lion; 7) a frog; 8) an octopus; 9) a fox. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

#### `set_cikartma_02` — 9 görsel: cikartma_10, cikartma_11, cikartma_12, cikartma_13, cikartma_14, cikartma_15, cikartma_16, cikartma_17, cikartma_18

```
set_cikartma_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a koala; 2) a penguin; 3) an owl; 4) a bee; 5) a turtle; 6) a baby dinosaur; 7) a rainbow; 8) a sunflower; 9) a strawberry. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

#### `set_cikartma_03` — 9 görsel: cikartma_19, cikartma_20, cikartma_21, cikartma_22, cikartma_23, cikartma_24, cikartma_25, cikartma_26, cikartma_27

```
set_cikartma_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a watermelon slice; 2) a rocket; 3) a balloon; 4) a teddy bear; 5) a pink bow; 6) a lollipop; 7) a shooting star; 8) a dolphin; 9) a giraffe. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

#### `set_cikartma_04` — 3 görsel: cikartma_28, cikartma_29, cikartma_30

```
set_cikartma_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a bunny; 2) a whale; 3) a cherry blossom. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```


# Tekli istekler


## Eşyalar: Yatak odası (64)

### `yatak` — Tek kişilik yatak

```
yatak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a single bed with a wooden headboard, pink blanket with tiny flower pattern and two white pillows. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `yuvarlakyatak` — Yuvarlak yatak

```
yuvarlakyatak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round bed with a rainbow arch headboard, lilac blanket and fluffy white pillows. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `cibinlikliyatak` — Cibinlikli yatak

```
cibinlikliyatak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a princess canopy bed with sheer pink curtains tied with bows and a heart pillow. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `ranza` — Ranza

```
ranza — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white bunk bed with a small ladder, mint and pink blankets. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `besik` — Bebek beşiği

```
besik — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white baby crib with a little star mobile above it. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `dolap` — Gardırop

```
dolap — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tall pastel pink wardrobe with two doors and round knobs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kiyafetaski` — Kıyafet askılığı

```
kiyafetaski — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an open clothes rack with colorful hanging shirts and dresses and two drawers below. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `sifonyer` — Şifonyer

```
sifonyer — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cream chest of drawers with three drawers and gold handles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `makyaj` — Makyaj masası

```
makyaj — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a vanity table with a big mirror surrounded by round light bulbs, a hair brush and lipsticks. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kozmetik` — Kozmetik dolabı

```
kozmetik — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small glass-door mini fridge full of pastel skincare bottles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `koltuk` — Salıncak koltuk

```
koltuk — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hanging egg chair with a white cushion and a heart pillow, hanging rope on top. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `armut` — Armut koltuk

```
armut — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a soft lilac bean bag chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `cicekminder` — Çiçek minder

```
cicekminder — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a flower shaped floor cushion in cream and butter yellow. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `ayihali` — Ayı halı

```
ayihali — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fluffy rug shaped like a cute teddy bear face, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `bilgisayar` — Bilgisayar masası

```
bilgisayar — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac desk with a computer monitor, keyboard and a game controller. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `calismamasasi` — Çalışma masası

```
calismamasasi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden study desk with a desk lamp, pencil cup and a stack of books. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `aynadalga` — Dalgalı ayna

```
aynadalga — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wall mirror with a wavy lilac frame. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `boyaynasi` — Boy aynası

```
boyaynasi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tall standing full-length mirror with a wooden frame. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `komodin` — Komodin

```
komodin — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small bedside table with a mushroom lamp on top. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `gecelambasi` — Ay gece lambası

```
gecelambasi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a moon shaped night light glowing softly. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `oyuncaksandigi` — Oyuncak sandığı

```
oyuncaksandigi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an open toy chest with a ball, a teddy and blocks peeking out. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `unicorn` — Peluş unicorn

```
unicorn — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a plush unicorn toy with a rainbow mane. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `oyuncakev` — Oyuncak ev

```
oyuncakev — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small toy dollhouse with a pink roof. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `yazitahtasi` — Yazı tahtası

```
yazitahtasi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a standing chalkboard easel with colorful chalk doodles of a sun and a heart. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yatak_01` — Yatak 1

```
v_yatak_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple wooden single bed with a white blanket. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yatak_02` — Yatak 2

```
v_yatak_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a single bed with a blue blanket with stars. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yatak_03` — Yatak 3 (kilitli)

```
v_yatak_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink princess bed with a heart shaped headboard. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yatak_04` — Yatak 4 (kilitli)

```
v_yatak_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white bed with a cloud shaped headboard and a rainbow blanket. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yatak_05` — Yatak 5 (kilitli)

```
v_yatak_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac bed with a crescent moon headboard and star pillows. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yatak_06` — Yatak 6 (kilitli)

```
v_yatak_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pastel car shaped bed for kids. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yatak_07` — Yatak 7 (kilitli)

```
v_yatak_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fairy tale bed shaped like a castle with tiny towers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yatak_08` — Yatak 8 (kilitli)

```
v_yatak_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden royal bed with a velvet canopy and tassels. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dolap_01` — Gardırop 1

```
v_dolap_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white two-door wardrobe. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dolap_02` — Gardırop 2

```
v_dolap_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a light wooden wardrobe with round knobs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dolap_03` — Gardırop 3 (kilitli)

```
v_dolap_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint wardrobe with heart shaped door handles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dolap_04` — Gardırop 4 (kilitli)

```
v_dolap_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac wardrobe with a mirror door. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dolap_05` — Gardırop 5 (kilitli)

```
v_dolap_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink wardrobe with a scalloped top and flower decorations. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dolap_06` — Gardırop 6 (kilitli)

```
v_dolap_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden princess wardrobe with crystal knobs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_makyaj_01` — Makyaj masası 1

```
v_makyaj_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white vanity table with a round mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_makyaj_02` — Makyaj masası 2

```
v_makyaj_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden vanity table with a square mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_makyaj_03` — Makyaj masası 3 (kilitli)

```
v_makyaj_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink vanity table with a heart mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_makyaj_04` — Makyaj masası 4 (kilitli)

```
v_makyaj_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac vanity with a mirror surrounded by light bulbs and perfume bottles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_makyaj_05` — Makyaj masası 5 (kilitli)

```
v_makyaj_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white vanity with a big shell shaped mirror and pearls. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_makyaj_06` — Makyaj masası 6 (kilitli)

```
v_makyaj_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden princess vanity with a crown shaped mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_01` — Çalışma masası 1

```
v_masa_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white study desk with a chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_02` — Çalışma masası 2

```
v_masa_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden study desk with a desk lamp. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_03` — Çalışma masası 3 (kilitli)

```
v_masa_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink desk with a laptop and a cat lamp. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_04` — Çalışma masası 4 (kilitli)

```
v_masa_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac gaming desk with a monitor and colorful lights. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_05` — Çalışma masası 5 (kilitli)

```
v_masa_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint desk with a globe, books and a pencil cup. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oturak_01` — Koltuk ve puf 1

```
v_oturak_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple round cream pouf. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oturak_02` — Koltuk ve puf 2

```
v_oturak_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a light blue bean bag. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oturak_03` — Koltuk ve puf 3 (kilitli)

```
v_oturak_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink furry heart shaped chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oturak_04` — Koltuk ve puf 4 (kilitli)

```
v_oturak_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white hanging egg chair with a pink cushion. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oturak_05` — Koltuk ve puf 5 (kilitli)

```
v_oturak_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac cloud shaped armchair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oturak_06` — Koltuk ve puf 6 (kilitli)

```
v_oturak_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden princess throne chair with pink velvet. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyuncak_01` — Oyuncak 1

```
v_oyuncak_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden toy train. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyuncak_02` — Oyuncak 2

```
v_oyuncak_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rubber ball. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyuncak_03` — Oyuncak 3 (kilitli)

```
v_oyuncak_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rag doll with yarn hair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyuncak_04` — Oyuncak 4 (kilitli)

```
v_oyuncak_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a toy xylophone. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyuncak_05` — Oyuncak 5 (kilitli)

```
v_oyuncak_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a plush unicorn. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyuncak_06` — Oyuncak 6 (kilitli)

```
v_oyuncak_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a toy rocket. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyuncak_07` — Oyuncak 7 (kilitli)

```
v_oyuncak_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a plush dinosaur. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyuncak_08` — Oyuncak 8 (kilitli)

```
v_oyuncak_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a toy castle with flags. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyuncak_09` — Oyuncak 9 (kilitli)

```
v_oyuncak_09 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a dollhouse with a pink roof. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Eşyalar: Mutfak (88)

### `retrobuzdolabi` — Retro buzdolabı

```
retrobuzdolabi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a retro rounded fridge in peach color with a silver handle and cute magnets. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzdolabi` — Buzdolabı

```
buzdolabi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint green two-door fridge with sticky notes and magnets. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `tezgah` — Mutfak tezgâhı

```
tezgah — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a kitchen counter with a sink, a stove top and an oven, cream cabinets with round knobs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `ocak` — Ocak

```
ocak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small cooking stove with an oven and a pink pot on top. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `firin` — Fırın

```
firin — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a built-in oven with a glass door and a tray of cookies inside. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `lavabo` — Mutfak lavabosu

```
lavabo — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a kitchen sink cabinet with a silver faucet. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `mikrodalga` — Mikrodalga

```
mikrodalga — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac microwave oven. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `tost` — Tost makinesi

```
tost — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pastel blue toaster with a smiling face and two toast slices popping up. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kahve` — Kahve makinesi

```
kahve — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a yellow drip coffee machine with a glass coffee pot. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `blender` — Blender

```
blender — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a blender with a pink strawberry smoothie inside. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `mikser` — Mikser

```
mikser — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a stand mixer in mint color with a mixing bowl. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kettle` — Su ısıtıcı

```
kettle — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an electric kettle in cream color. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `caydanlik` — Çaydanlık

```
caydanlik — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink teapot with a lid. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `rafkupa` — Kâse rafı

```
rafkupa — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wall shelf with pink bowls and white mugs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `tabakdolabi` — Tabak dolabı

```
tabakdolabi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a glass-door kitchen cabinet with stacked plates and cups. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kasiklik` — Kaşıklık

```
kasiklik — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hanging rail with a spatula, a fork, a whisk and a wooden spoon. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `masa` — Yemek masası

```
masa — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small wooden dining table. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `yuvarlakmasa` — Yuvarlak masa

```
yuvarlakmasa — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round white table with a vase of tulips. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `sandalye` — Sandalye

```
sandalye — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden chair with a yellow cushion. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `tabure` — Bar taburesi

```
tabure — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden bar stool with a pink cushion. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `mamasandalyesi` — Mama sandalyesi

```
mamasandalyesi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a baby high chair in mint color. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `meyve` — Meyve kâsesi

```
meyve — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fruit bowl with an apple, an orange and bananas. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `ekmek` — Ekmek sepeti

```
ekmek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a woven basket with bread rolls and a baguette. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kurabiye` — Kurabiye kavanozu

```
kurabiye — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a glass cookie jar full of round cookies. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `pizza` — Pizza

```
pizza — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute round pizza with cheese and tomato slices. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `hamburger` — Hamburger

```
hamburger — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute hamburger. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `salata` — Salata

```
salata — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bowl of green salad with tomatoes. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `cilek` — Çilek sepeti

```
cilek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small basket of red strawberries. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `sut` — Süt kutusu

```
sut — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a milk carton with a small cow face, no letters. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `saksiotlar` — Saksıda otlar

```
saksiotlar — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: three small pots with basil and mint herbs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzdolabi_01` — Buzdolabı 1

```
buzdolabi_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white two-door fridge. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzdolabi_02` — Buzdolabı 2

```
buzdolabi_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a light grey fridge with a freezer on top. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzdolabi_03` — Buzdolabı 3 (kilitli)

```
buzdolabi_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint green retro rounded fridge with a silver handle. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzdolabi_04` — Buzdolabı 4 (kilitli)

```
buzdolabi_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pastel pink retro fridge with cute magnets. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzdolabi_05` — Buzdolabı 5 (kilitli)

```
buzdolabi_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac fridge with a calendar and sticky notes on it. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzdolabi_06` — Buzdolabı 6 (kilitli)

```
buzdolabi_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a butter yellow double-door fridge with a water dispenser. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzdolabi_07` — Buzdolabı 7 (kilitli)

```
buzdolabi_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a sparkly holographic fridge with glitter. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzdolabi_08` — Buzdolabı 8 (kilitli)

```
buzdolabi_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a big double-door fridge with a smart screen and an ice maker. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ocak_01` — Ocak ve fırın 1

```
v_ocak_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white stove with an oven. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ocak_02` — Ocak ve fırın 2

```
v_ocak_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cream stove with a pink pot on top. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ocak_03` — Ocak ve fırın 3 (kilitli)

```
v_ocak_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint retro stove with knobs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ocak_04` — Ocak ve fırın 4 (kilitli)

```
v_ocak_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac stove with a frying pan and pancakes. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ocak_05` — Ocak ve fırın 5 (kilitli)

```
v_ocak_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a big red restaurant oven with six burners. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ocak_06` — Ocak ve fırın 6 (kilitli)

```
v_ocak_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pizza oven made of bricks. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tezgah_01` — Mutfak dolabı 1

```
v_tezgah_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white kitchen counter with a sink. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tezgah_02` — Mutfak dolabı 2

```
v_tezgah_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden kitchen counter with drawers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tezgah_03` — Mutfak dolabı 3 (kilitli)

```
v_tezgah_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint kitchen counter with a sink and plants. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tezgah_04` — Mutfak dolabı 4 (kilitli)

```
v_tezgah_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink kitchen counter with hanging utensils. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tezgah_05` — Mutfak dolabı 5 (kilitli)

```
v_tezgah_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac kitchen island with bar stools. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tezgah_06` — Mutfak dolabı 6 (kilitli)

```
v_tezgah_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cream kitchen counter with a tiled backsplash and spice jars. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_mutfak_01` — Yemek masası 1

```
v_masa_mutfak_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white table. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_mutfak_02` — Yemek masası 2

```
v_masa_mutfak_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden table with a vase. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_mutfak_03` — Yemek masası 3 (kilitli)

```
v_masa_mutfak_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round pink table with a cake. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_mutfak_04` — Yemek masası 4 (kilitli)

```
v_masa_mutfak_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a long wooden table with a checkered tablecloth. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_masa_mutfak_05` — Yemek masası 5 (kilitli)

```
v_masa_mutfak_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a glass table with rainbow legs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sandalye_01` — Sandalye 1

```
v_sandalye_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sandalye_02` — Sandalye 2

```
v_sandalye_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sandalye_03` — Sandalye 3 (kilitli)

```
v_sandalye_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink chair with a heart back. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sandalye_04` — Sandalye 4 (kilitli)

```
v_sandalye_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint bar stool. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sandalye_05` — Sandalye 5 (kilitli)

```
v_sandalye_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a yellow chair with a flower cushion. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sandalye_06` — Sandalye 6 (kilitli)

```
v_sandalye_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac velvet chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_01` — Mutfak aleti 1

```
v_alet_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white kettle. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_02` — Mutfak aleti 2

```
v_alet_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a toaster. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_03` — Mutfak aleti 3 (kilitli)

```
v_alet_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a blender with a smoothie. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_04` — Mutfak aleti 4 (kilitli)

```
v_alet_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint stand mixer. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_05` — Mutfak aleti 5 (kilitli)

```
v_alet_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac microwave. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_06` — Mutfak aleti 6 (kilitli)

```
v_alet_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a coffee machine with a cup. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_07` — Mutfak aleti 7 (kilitli)

```
v_alet_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a waffle maker with a waffle. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_08` — Mutfak aleti 8 (kilitli)

```
v_alet_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cotton candy machine. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_09` — Mutfak aleti 9 (kilitli)

```
v_alet_09 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a popcorn machine full of popcorn. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_alet_10` — Mutfak aleti 10 (kilitli)

```
v_alet_10 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an ice cream machine. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_01` — Yiyecek 1

```
v_yemek_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bowl of soup. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_02` — Yiyecek 2

```
v_yemek_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a plate of spaghetti. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_03` — Yiyecek 3 (kilitli)

```
v_yemek_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a stack of pancakes with syrup. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_04` — Yiyecek 4 (kilitli)

```
v_yemek_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a slice of watermelon. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_05` — Yiyecek 5 (kilitli)

```
v_yemek_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a basket of muffins. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_06` — Yiyecek 6 (kilitli)

```
v_yemek_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a plate of sushi. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_07` — Yiyecek 7 (kilitli)

```
v_yemek_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bowl of fruit salad. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_08` — Yiyecek 8 (kilitli)

```
v_yemek_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a donut with sprinkles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_09` — Yiyecek 9 (kilitli)

```
v_yemek_09 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a big rainbow layer cake. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_10` — Yiyecek 10 (kilitli)

```
v_yemek_10 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bowl of popcorn. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_11` — Yiyecek 11 (kilitli)

```
v_yemek_11 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a milkshake with a cherry. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_yemek_12` — Yiyecek 12 (kilitli)

```
v_yemek_12 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a box of macarons. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tabak_01` — Tabak rafı 1

```
v_tabak_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a shelf with white plates. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tabak_02` — Tabak rafı 2

```
v_tabak_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a shelf with pink cups. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tabak_03` — Tabak rafı 3 (kilitli)

```
v_tabak_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a glass cabinet with colorful bowls. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tabak_04` — Tabak rafı 4 (kilitli)

```
v_tabak_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hanging rack with pots and pans. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tabak_05` — Tabak rafı 5 (kilitli)

```
v_tabak_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a jar shelf with cookies and candies. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Eşyalar: Banyo (45)

### `kuvet` — Küvet

```
kuvet — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white bathtub with golden feet full of bubbles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `jakuzi` — Jakuzi

```
jakuzi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round wooden hot tub with blue water. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `duskabini` — Duş kabini

```
duskabini — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a glass shower cabin with a silver shower head. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `banyolavabo` — Lavabo

```
banyolavabo — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bathroom sink with an oval mirror and a small cabinet. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `tuvalet` — Tuvalet

```
tuvalet — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white toilet. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `camasir` — Çamaşır makinesi

```
camasir — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white washing machine with a round door. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `sampuan` — Şampuan rafı

```
sampuan — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bathroom shelf with colorful shampoo and soap bottles without letters. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `sepet` — Çamaşır sepeti

```
sepet — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a blue laundry basket with towels. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `havlu` — Havluluk

```
havlu — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a towel rack with a pink striped towel. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `bornoz` — Bornoz

```
bornoz — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fluffy pink bathrobe hanging on a hook. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `ayna` — Yuvarlak ayna

```
ayna — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round wall mirror with a wooden frame. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `ordek` — Plastik ördek

```
ordek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a yellow rubber duck toy. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `dissfircasi` — Diş fırçası bardağı

```
dissfircasi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cup with two toothbrushes and toothpaste. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `sabunluk` — Sabunluk

```
sabunluk — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a soap dispenser bottle in lilac. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `paspas` — Banyo paspası

```
paspas — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fluffy blue bath mat, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kuvet_01` — Küvet 1

```
v_kuvet_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white bathtub. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kuvet_02` — Küvet 2

```
v_kuvet_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white bathtub with bubbles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kuvet_03` — Küvet 3 (kilitli)

```
v_kuvet_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink bathtub with golden feet. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kuvet_04` — Küvet 4 (kilitli)

```
v_kuvet_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round wooden hot tub. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kuvet_05` — Küvet 5 (kilitli)

```
v_kuvet_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a seashell shaped bathtub. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kuvet_06` — Küvet 6 (kilitli)

```
v_kuvet_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a heart shaped jacuzzi with bubbles and rose petals. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lavabo_01` — Lavabo 1

```
v_lavabo_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white sink. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lavabo_02` — Lavabo 2

```
v_lavabo_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a sink with a round mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lavabo_03` — Lavabo 3 (kilitli)

```
v_lavabo_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink sink with a heart mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lavabo_04` — Lavabo 4 (kilitli)

```
v_lavabo_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden sink cabinet with plants. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lavabo_05` — Lavabo 5 (kilitli)

```
v_lavabo_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a seashell sink with a pearl mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lavabo_06` — Lavabo 6 (kilitli)

```
v_lavabo_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden princess sink. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dus_01` — Duş 1

```
v_dus_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple glass shower. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dus_02` — Duş 2

```
v_dus_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a shower with a blue curtain. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dus_03` — Duş 3 (kilitli)

```
v_dus_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a shower with a rainbow curtain. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_dus_04` — Duş 4 (kilitli)

```
v_dus_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rain shower with a big round head. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tuvalet_01` — Tuvalet 1

```
v_tuvalet_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white toilet. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tuvalet_02` — Tuvalet 2

```
v_tuvalet_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a toilet with a wooden seat. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tuvalet_03` — Tuvalet 3 (kilitli)

```
v_tuvalet_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink toilet with a fluffy cover. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tuvalet_04` — Tuvalet 4 (kilitli)

```
v_tuvalet_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden toilet. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_01` — Banyo aksesuarı 1

```
v_banyo_aksesuar_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a towel rack with a white towel. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_02` — Banyo aksesuarı 2

```
v_banyo_aksesuar_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a laundry basket. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_03` — Banyo aksesuarı 3 (kilitli)

```
v_banyo_aksesuar_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cup with toothbrushes. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_04` — Banyo aksesuarı 4 (kilitli)

```
v_banyo_aksesuar_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bath sponge. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_05` — Banyo aksesuarı 5 (kilitli)

```
v_banyo_aksesuar_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rubber duck family. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_06` — Banyo aksesuarı 6 (kilitli)

```
v_banyo_aksesuar_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bath bomb box. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_07` — Banyo aksesuarı 7 (kilitli)

```
v_banyo_aksesuar_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fluffy pink bathrobe. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_08` — Banyo aksesuarı 8 (kilitli)

```
v_banyo_aksesuar_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a shelf of colorful shampoo bottles. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_09` — Banyo aksesuarı 9 (kilitli)

```
v_banyo_aksesuar_09 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bubble machine. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_banyo_aksesuar_10` — Banyo aksesuarı 10 (kilitli)

```
v_banyo_aksesuar_10 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a robot vacuum. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Eşyalar: Salon (42)

### `kanepe` — Kanepe

```
kanepe — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac three-seat sofa with a yellow pillow. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kosekanepe` — Köşe koltuk

```
kosekanepe — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cream L-shaped sectional sofa with pastel pillows. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `berjer` — Berjer

```
berjer — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cozy round armchair in mint color. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `tv` — Televizyon

```
tv — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a flat television on a small wooden stand. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `tvunitesi` — TV ünitesi

```
tvunitesi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a low wooden TV cabinet with books and a plant. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `sehpa` — Sehpa

```
sehpa — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round white coffee table with a cup of tea. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `oyunrafi` — Oyuncak rafı

```
oyunrafi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a shelf full of toys, balls and building blocks. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kediagaci` — Kedi ağacı

```
kediagaci — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cat tree scratching post with platforms. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `akvaryum` — Akvaryum

```
akvaryum — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small fish tank with two orange fish and plants. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `piyano` — Piyano

```
piyano — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white upright piano. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `somine` — Şömine

```
somine — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cozy fireplace with a warm fire and stockings. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kuskafesi` — Kuş kafesi

```
kuskafesi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white bird cage with a small yellow bird inside. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kanepe_01` — Kanepe 1

```
v_kanepe_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple grey sofa. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kanepe_02` — Kanepe 2

```
v_kanepe_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a beige sofa with pillows. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kanepe_03` — Kanepe 3 (kilitli)

```
v_kanepe_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint velvet sofa. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kanepe_04` — Kanepe 4 (kilitli)

```
v_kanepe_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink sofa with heart pillows. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kanepe_05` — Kanepe 5 (kilitli)

```
v_kanepe_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac L-shaped sofa. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kanepe_06` — Kanepe 6 (kilitli)

```
v_kanepe_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a yellow retro sofa. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kanepe_07` — Kanepe 7 (kilitli)

```
v_kanepe_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cloud shaped white sofa. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_kanepe_08` — Kanepe 8 (kilitli)

```
v_kanepe_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden royal sofa with tassels. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_koltuk_01` — Koltuk 1

```
v_koltuk_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple grey armchair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_koltuk_02` — Koltuk 2

```
v_koltuk_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden rocking chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_koltuk_03` — Koltuk 3 (kilitli)

```
v_koltuk_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink round armchair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_koltuk_04` — Koltuk 4 (kilitli)

```
v_koltuk_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mint egg chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_koltuk_05` — Koltuk 5 (kilitli)

```
v_koltuk_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a yellow bean bag. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_koltuk_06` — Koltuk 6 (kilitli)

```
v_koltuk_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac swing chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tv_01` — Televizyon 1

```
v_tv_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small TV on a stand. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tv_02` — Televizyon 2

```
v_tv_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a flat TV on a wooden cabinet. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tv_03` — Televizyon 3 (kilitli)

```
v_tv_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a retro pink TV with antennas. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tv_04` — Televizyon 4 (kilitli)

```
v_tv_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a big TV with speakers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tv_05` — Televizyon 5 (kilitli)

```
v_tv_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a home cinema with a projector screen. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sehpa_01` — Sehpa 1

```
v_sehpa_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple round coffee table. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sehpa_02` — Sehpa 2

```
v_sehpa_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden coffee table with books. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sehpa_03` — Sehpa 3 (kilitli)

```
v_sehpa_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a glass coffee table. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sehpa_04` — Sehpa 4 (kilitli)

```
v_sehpa_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink heart shaped table with tea set. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_sehpa_05` — Sehpa 5 (kilitli)

```
v_sehpa_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a marble table with flowers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_muzik_01` — Müzik aleti 1

```
v_muzik_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small guitar. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_muzik_02` — Müzik aleti 2

```
v_muzik_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a toy drum set. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_muzik_03` — Müzik aleti 3 (kilitli)

```
v_muzik_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white piano. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_muzik_04` — Müzik aleti 4 (kilitli)

```
v_muzik_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink keyboard. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_muzik_05` — Müzik aleti 5 (kilitli)

```
v_muzik_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden harp. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_muzik_06` — Müzik aleti 6 (kilitli)

```
v_muzik_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a karaoke microphone stand. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Eşyalar: Bahçe ve havuz (48)

### `sezlong` — Şezlong

```
sezlong — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden beach deck chair with pink fabric. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `semsiye` — Şemsiye

```
semsiye — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white and pink beach umbrella standing on a pole. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `flamingo` — Flamingo simit

```
flamingo — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an inflatable pink flamingo pool float. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `simit` — Deniz simidi

```
simit — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a striped inflatable swim ring. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `palmiye` — Palmiye

```
palmiye — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a palm tree with coconuts. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buzkutusu` — Buz kutusu

```
buzkutusu — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a yellow picnic cooler box. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kaydirak` — Kaydırak

```
kaydirak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small pastel playground slide. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `salincak` — Salıncak

```
salincak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden garden swing with ropes and flowers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `trambolin` — Trambolin

```
trambolin — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round trampoline with a safety net in pastel colors. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kumkovasi` — Kum kovası

```
kumkovasi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a sand bucket with a little shovel. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `mangal` — Mangal

```
mangal — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small round barbecue grill. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `cicektarhi` — Çiçek tarhı

```
cicektarhi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden flower box full of colorful tulips and daisies. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `agac` — Ağaç

```
agac — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round fluffy green tree with apples. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `cit` — Çit

```
cit — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a short white picket fence section. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kopekkulubesi` — Köpek kulübesi

```
kopekkulubesi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a red wooden dog house. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `bisiklet` — Bisiklet

```
bisiklet — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pastel kids bicycle with a basket of flowers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `limonatastandi` — Limonata standı

```
limonatastandi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden lemonade stand with a striped awning, no letters. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `gokkusagi` — Gökkuşağı

```
gokkusagi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pastel rainbow arch with fluffy clouds at both ends. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `piknik` — Piknik örtüsü

```
piknik — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a red and white checkered picnic blanket with a basket, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_havuz_oyuncak_01` — Havuz oyuncağı 1

```
v_havuz_oyuncak_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a striped swim ring. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_havuz_oyuncak_02` — Havuz oyuncağı 2

```
v_havuz_oyuncak_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a beach ball. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_havuz_oyuncak_03` — Havuz oyuncağı 3 (kilitli)

```
v_havuz_oyuncak_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an inflatable duck float. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_havuz_oyuncak_04` — Havuz oyuncağı 4 (kilitli)

```
v_havuz_oyuncak_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an inflatable unicorn float. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_havuz_oyuncak_05` — Havuz oyuncağı 5 (kilitli)

```
v_havuz_oyuncak_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an inflatable donut float. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_havuz_oyuncak_06` — Havuz oyuncağı 6 (kilitli)

```
v_havuz_oyuncak_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an inflatable swan float. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_havuz_oyuncak_07` — Havuz oyuncağı 7 (kilitli)

```
v_havuz_oyuncak_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an inflatable watermelon float. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_havuz_oyuncak_08` — Havuz oyuncağı 8 (kilitli)

```
v_havuz_oyuncak_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a water slide. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_mobilya_01` — Bahçe mobilyası 1

```
v_bahce_mobilya_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden bench. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_mobilya_02` — Bahçe mobilyası 2

```
v_bahce_mobilya_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a deck chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_mobilya_03` — Bahçe mobilyası 3 (kilitli)

```
v_bahce_mobilya_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hammock between two posts. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_mobilya_04` — Bahçe mobilyası 4 (kilitli)

```
v_bahce_mobilya_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a garden swing. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_mobilya_05` — Bahçe mobilyası 5 (kilitli)

```
v_bahce_mobilya_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a picnic table. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_mobilya_06` — Bahçe mobilyası 6 (kilitli)

```
v_bahce_mobilya_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a big parasol. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_mobilya_07` — Bahçe mobilyası 7 (kilitli)

```
v_bahce_mobilya_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rattan egg chair. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyun_parki_01` — Oyun parkı 1

```
v_oyun_parki_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small slide. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyun_parki_02` — Oyun parkı 2

```
v_oyun_parki_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a sandbox with toys. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyun_parki_03` — Oyun parkı 3 (kilitli)

```
v_oyun_parki_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a seesaw. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyun_parki_04` — Oyun parkı 4 (kilitli)

```
v_oyun_parki_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a trampoline. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyun_parki_05` — Oyun parkı 5 (kilitli)

```
v_oyun_parki_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a playhouse. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_oyun_parki_06` — Oyun parkı 6 (kilitli)

```
v_oyun_parki_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a big castle playground. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_bitki_01` — Bahçe bitkisi 1

```
v_bahce_bitki_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a flower bed with tulips. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_bitki_02` — Bahçe bitkisi 2

```
v_bahce_bitki_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round bush. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_bitki_03` — Bahçe bitkisi 3 (kilitli)

```
v_bahce_bitki_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an apple tree. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_bitki_04` — Bahçe bitkisi 4 (kilitli)

```
v_bahce_bitki_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a palm tree. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_bitki_05` — Bahçe bitkisi 5 (kilitli)

```
v_bahce_bitki_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cherry blossom tree. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_bitki_06` — Bahçe bitkisi 6 (kilitli)

```
v_bahce_bitki_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a sunflower patch. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_bitki_07` — Bahçe bitkisi 7 (kilitli)

```
v_bahce_bitki_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a vegetable garden box. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bahce_bitki_08` — Bahçe bitkisi 8 (kilitli)

```
v_bahce_bitki_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rainbow rose bush. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Eşyalar: Her odada (76)

### `yuvarlakhali` — Yuvarlak halı

```
yuvarlakhali — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round fluffy white rug, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kitaplik` — Kitaplık

```
kitaplik — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bookshelf with colorful books, a small plant and a toy. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `duvarrafi` — Duvar rafı

```
duvarrafi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a floating wall shelf with tiny plants, a candle and a photo frame. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `fotoipi` — Fotoğraf ipi

```
fotoipi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a string with clothespins holding instant photos and tiny fairy lights. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `perde` — Perde

```
perde — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pair of soft pink curtains with a curtain rod, tied with bows. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kedipostu` — Kedi posteri

```
kedipostu — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed poster with a cute smiling cat illustration. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `pasta` — Pasta

```
pasta — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a strawberry layer cake with one candle. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `limonata` — Limonata sürahisi

```
limonata — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a glass jug of pink lemonade with lemon slices. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `copkutusu` — Çöp kutusu

```
copkutusu — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pastel pedal trash bin. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `robot` — Robot süpürge

```
robot — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round robot vacuum cleaner. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `abajur` — Abajur

```
abajur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small table lamp with a pink shade. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `lambader` — Lambader

```
lambader — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tall floor lamp with a cream shade. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `puf` — Puf

```
puf — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an orange round pouf. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `buyukbitki` — Büyük bitki

```
buyukbitki — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tall leafy monstera plant in a white pot. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `bitki` — Saksı bitkisi

```
bitki — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small potted plant in a terracotta pot. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `sarkitbitki` — Asma bitki

```
sarkitbitki — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hanging plant in a macrame holder. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kaktus` — Kaktüs

```
kaktus — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small cactus with a pink flower in an orange pot. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kediyatagi` — Kedi yatağı

```
kediyatagi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round pink pet bed. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `oyunkonsolu` — Oyun konsolu

```
oyunkonsolu — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a game console with two controllers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `vazo` — Lale vazosu

```
vazo — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a glass vase with pink tulips. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `duvarsaati` — Duvar saati

```
duvarsaati — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round wall clock shaped like a cat face, without numbers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `disko` — Disko topu

```
disko — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lilac disco ball hanging from a string. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `sarkit` — Sarkıt lamba

```
sarkit — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hanging pendant ceiling lamp with a cream shade. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `perilamba` — Peri ışıkları

```
perilamba — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a string of warm fairy lights hanging in a gentle curve. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `tablo` — Tablo

```
tablo — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed painting of flowers and a heart. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `cerceve` — Manzara tablosu

```
cerceve — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed painting of green hills and a sun. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `ayi` — Oyuncak ayı

```
ayi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a soft brown teddy bear sitting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `top` — Top

```
top — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a red and white beach ball. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `kalpbalon` — Kalp balon

```
kalpbalon — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink heart shaped balloon on a string. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `dondurma` — Dondurma

```
dondurma — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an ice cream cone with pink and vanilla scoops. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `cadir` — Oyun çadırı

```
cadir — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cream teepee play tent with bunting flags. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lamba_01` — Lamba 1

```
v_lamba_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white table lamp. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lamba_02` — Lamba 2

```
v_lamba_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mushroom shaped night lamp. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lamba_03` — Lamba 3 (kilitli)

```
v_lamba_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a moon shaped lamp. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lamba_04` — Lamba 4 (kilitli)

```
v_lamba_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute bunny shaped lamp. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lamba_05` — Lamba 5 (kilitli)

```
v_lamba_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lava lamp with pink and purple blobs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_lamba_06` — Lamba 6 (kilitli)

```
v_lamba_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a crystal chandelier. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_hali_01` — Halı 1

```
v_hali_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round cream rug, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_hali_02` — Halı 2

```
v_hali_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an oval light blue rug, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_hali_03` — Halı 3 (kilitli)

```
v_hali_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a heart shaped pink fluffy rug, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_hali_04` — Halı 4 (kilitli)

```
v_hali_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rainbow striped round rug, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_hali_05` — Halı 5 (kilitli)

```
v_hali_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bunny face shaped white rug, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_hali_06` — Halı 6 (kilitli)

```
v_hali_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cloud shaped lilac rug, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_hali_07` — Halı 7 (kilitli)

```
v_hali_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a purple cow print oval rug, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_raf_01` — Raf 1

```
v_raf_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple white wall shelf with books. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_raf_02` — Raf 2

```
v_raf_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wooden ladder shelf with plants. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_raf_03` — Raf 3 (kilitli)

```
v_raf_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cloud shaped wall shelf with tiny toys. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_raf_04` — Raf 4 (kilitli)

```
v_raf_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a house shaped shelf with dolls. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_raf_05` — Raf 5 (kilitli)

```
v_raf_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rainbow shaped bookshelf full of books. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ayna_01` — Ayna 1

```
v_ayna_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a simple round wall mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ayna_02` — Ayna 2

```
v_ayna_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tall standing mirror with a wooden frame. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ayna_03` — Ayna 3 (kilitli)

```
v_ayna_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wavy lilac mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ayna_04` — Ayna 4 (kilitli)

```
v_ayna_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a heart shaped pink mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_ayna_05` — Ayna 5 (kilitli)

```
v_ayna_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden ornate princess mirror. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bitki_01` — Bitki 1

```
v_bitki_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small green plant in a pot. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bitki_02` — Bitki 2

```
v_bitki_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cactus. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bitki_03` — Bitki 3 (kilitli)

```
v_bitki_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tall monstera plant. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bitki_04` — Bitki 4 (kilitli)

```
v_bitki_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a snake plant. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bitki_05` — Bitki 5 (kilitli)

```
v_bitki_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pot of sunflowers. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bitki_06` — Bitki 6 (kilitli)

```
v_bitki_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pot of pink tulips. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bitki_07` — Bitki 7 (kilitli)

```
v_bitki_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a little lemon tree. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bitki_08` — Bitki 8 (kilitli)

```
v_bitki_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hanging ivy plant. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_bitki_09` — Bitki 9 (kilitli)

```
v_bitki_09 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bonsai tree. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tablo_01` — Tablo 1

```
v_tablo_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed flower painting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tablo_02` — Tablo 2

```
v_tablo_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed cat painting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tablo_03` — Tablo 3 (kilitli)

```
v_tablo_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed rainbow painting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tablo_04` — Tablo 4 (kilitli)

```
v_tablo_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed sea painting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tablo_05` — Tablo 5 (kilitli)

```
v_tablo_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed space painting with planets. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tablo_06` — Tablo 6 (kilitli)

```
v_tablo_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed family portrait drawing. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_tablo_07` — Tablo 7 (kilitli)

```
v_tablo_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a framed unicorn painting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_evcil_esya_01` — Evcil hayvan eşyası 1

```
v_evcil_esya_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round pet bed. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_evcil_esya_02` — Evcil hayvan eşyası 2

```
v_evcil_esya_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cat tree. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_evcil_esya_03` — Evcil hayvan eşyası 3 (kilitli)

```
v_evcil_esya_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fish tank. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_evcil_esya_04` — Evcil hayvan eşyası 4 (kilitli)

```
v_evcil_esya_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bird cage. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_evcil_esya_05` — Evcil hayvan eşyası 5 (kilitli)

```
v_evcil_esya_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a dog house. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `v_evcil_esya_06` — Evcil hayvan eşyası 6 (kilitli)

```
v_evcil_esya_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hamster cage with a wheel. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, one single isolated object, the whole object fully visible and centered with generous empty margin around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```


## Karakterler (17)

### `kiz1` — Mor örgülü kız

```
kiz1 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with a long lavender braid, light skin, wearing a pink hoodie, light blue jeans and white sneakers. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz2` — Kıvırcık saçlı kız

```
kiz2 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with big curly black hair in a puff with a yellow bow, dark brown skin, wearing a yellow dress and pink sandals. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz3` — Pembe saçlı kız

```
kiz3 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with a short pink bob haircut, fair skin, wearing a star print t-shirt, a lilac skirt and white boots. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz4` — Topuzlu kız

```
kiz4 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with two blonde space buns, light skin, wearing mint overalls with a white shirt and yellow shoes. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz5` — Kızıl saçlı kız

```
kiz5 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl with long wavy red hair and freckles, wearing a green dress with a white collar and red shoes. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz6` — Prenses kız

```
kiz6 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl princess with long brown hair and a small golden tiara, medium tan skin, wearing a puffy lilac ball gown. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kiz7` — Pop yıldızı kız

```
kiz7 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little girl pop star with a high purple ponytail, light skin, wearing a sparkly silver jacket, a pink skirt and holding nothing. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `oglan1` — Kahverengi saçlı oğlan

```
oglan1 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little boy with short brown hair, light skin, wearing a blue sweater, khaki shorts and sneakers. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `oglan2` — Kıvırcık saçlı oğlan

```
oglan2 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little boy with short black curly hair, dark brown skin, wearing a green t-shirt with a dinosaur, jeans and orange sneakers. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `oglan3` — Şapkalı oğlan

```
oglan3 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute little boy with straight black hair and a backwards yellow cap, light tan skin, wearing a striped shirt and shorts. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `bebek1` — Bebek

```
bebek1 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute cute baby with a tiny curl of hair, wearing a pastel yellow onesie, sitting. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `bebek2` — Bebek (pembe)

```
bebek2 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute cute baby girl with a pink headband, wearing a pink onesie, sitting. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `anne` — Anne

```
anne — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute young mother with long brown hair, light skin, wearing a green dress and white sneakers. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `baba` — Baba

```
baba — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute young father with short black hair and a short beard, light tan skin, wearing a blue striped shirt and jeans. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `nine` — Nine

```
nine — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute kind grandmother with grey hair in a bun and round glasses, wearing a lilac cardigan and a long skirt. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `dede` — Dede

```
dede — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute kind grandfather with white hair, a white mustache and glasses, wearing a brown vest and trousers. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ogretmen` — Öğretmen

```
ogretmen — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute friendly young teacher with a brown ponytail, wearing a yellow sweater and blue skirt. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```


## Evcil hayvanlar (12)

### `kedi` — Turuncu kedi

```
kedi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an orange tabby kitten. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kedi2` — Beyaz kedi

```
kedi2 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fluffy white kitten with a pink bow. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kedi3` — Gri kedi

```
kedi3 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a grey kitten with stripes. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kopek` — Köpek yavrusu

```
kopek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a light brown puppy with floppy ears. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kopek2` — Benekli köpek

```
kopek2 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white puppy with black spots. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `tavsan` — Tavşan

```
tavsan — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a white bunny with long ears. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `hamster` — Hamster

```
hamster — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a round golden hamster. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `papagan` — Papağan

```
papagan — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small green and yellow parrot. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kaplumbaga` — Kaplumbağa

```
kaplumbaga — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a little green turtle. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ordekyavrusu` — Ördek yavrusu

```
ordekyavrusu — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fluffy yellow duckling. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `midilli` — Midilli

```
midilli — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a little pastel pony with a rainbow mane. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `panda` — Panda

```
panda — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a baby panda. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```


## Butonlar ve simgeler (38)

Oyundaki emoji ve çizim simgelerin yerine geçer. `ui_oyun_…`, `ui_sahne`, `ui_ev`, `ui_giydir`, `ui_boyama` kart resmidir; diğerleri küçük buton simgesidir.

### `ui_oyun_sesibul` — Oyun kartı: Sesi Bul

```
ui_oyun_sesibul — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a big cute cartoon ear with sound waves and a few floating musical notes. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, centered composition with empty margin, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_oyun_birlestir` — Oyun kartı: Sesleri Birleştir

```
ui_oyun_birlestir — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: two cute rounded toy blocks snapping together with a sparkle in the middle. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, centered composition with empty margin, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_oyun_kelimekur` — Oyun kartı: Kelime Kur

```
ui_oyun_kelimekur — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: three colorful puzzle pieces fitting together with little stars. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, centered composition with empty margin, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_oyun_oku` — Oyun kartı: Oku

```
ui_oyun_oku — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an open storybook with a rainbow and stars coming out of it. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, centered composition with empty margin, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_sahne` — Ana sayfa: Sahne

```
ui_sahne — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small theater stage with purple curtains, a golden crown and a microphone in spotlight. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, centered composition with empty margin, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_ev` — Ana sayfa: Ev

```
ui_ev — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute pastel pink two-storey house with a heart window and flowers. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, centered composition with empty margin, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_giydir` — Sahne: Giydir

```
ui_giydir — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pastel dress on a hanger next to a little crown and a bow. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, centered composition with empty margin, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_boyama` — Sahne: Boyama

```
ui_boyama — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a paint palette with colorful paint blobs and a brush. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, centered composition with empty margin, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_geri` — Buton: Geri

```
ui_geri — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rounded arrow pointing left. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_hoparlor` — Buton: Dinle

```
ui_hoparlor — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute speaker with sound waves. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_basla` — Buton: Başla

```
ui_basla — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a big green play triangle. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_anasayfa` — Buton: Ana sayfa

```
ui_anasayfa — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small cute house. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_tekrar` — Buton: Tekrar

```
ui_tekrar — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a circular arrow going around. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_hediye` — Hediye kutusu

```
ui_hediye — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink gift box with a big golden bow. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_yildiz` — Yıldız

```
ui_yildiz — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a shiny golden star with a cute face. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_album` — Çıkartma albümü

```
ui_album — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a sticker album book with hearts and stars on the cover. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_birlestir` — Buton: Birleştir

```
ui_birlestir — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: two links of a chain joining together with a sparkle. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_dogru` — Buton: Doğru okudum

```
ui_dogru — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a happy thumbs up hand. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_cop` — Çöp kutusu

```
ui_cop — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute small trash bin. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_oda_yatak` — Oda: Yatak odası

```
ui_oda_yatak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small cute bed. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_oda_mutfak` — Oda: Mutfak

```
ui_oda_mutfak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small cute cooking pot on a stove with steam. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_oda_banyo` — Oda: Banyo

```
ui_oda_banyo — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small cute bathtub with bubbles. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_oda_salon` — Oda: Salon

```
ui_oda_salon — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small cute sofa. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_oda_havuz` — Oda: Havuz bahçesi

```
ui_oda_havuz — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small swimming pool with a pink flamingo float. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_mod_tasi` — Mod: Taşı

```
ui_mod_tasi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute open hand with four little arrows around it. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_mod_boya` — Mod: Boya

```
ui_mod_boya — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a paintbrush with a pink paint drop. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_mod_tasarla` — Mod: Tasarla

```
ui_mod_tasarla — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a wallpaper roll and a paint roller. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_kat_kiyafet` — Kategori: Kıyafet

```
ui_kat_kiyafet — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink dress. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_kat_sac` — Kategori: Saç

```
ui_kat_sac — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a long purple braided hairstyle on its own, no face. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_kat_ten` — Kategori: Ten rengi

```
ui_kat_ten — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: three round face shapes in light, medium and dark skin tones. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_kat_taki` — Kategori: Taç ve takılar

```
ui_kat_taki — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a golden tiara with pink gems. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_kat_elde` — Kategori: Elindekiler

```
ui_kat_elde — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink microphone. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_kat_ayakkabi` — Kategori: Ayakkabı

```
ui_kat_ayakkabi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pair of pink ballet shoes. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_kat_hayvan` — Kategori: Evcil hayvan

```
ui_kat_hayvan — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute cat face. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_kat_fon` — Kategori: Arka plan

```
ui_kat_fon — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tiny stage with curtains and a star. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_duvar` — Tasarım: Duvar

```
ui_duvar — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a piece of wallpaper with little hearts. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_zemin` — Tasarım: Zemin

```
ui_zemin — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a square of wooden floor planks. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `ui_pencere` — Tasarım: Pencere

```
ui_pencere — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a window with a sun and a cloud outside. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```


## Okuma oyunu kelime resimleri (101)

### `kelime_at` — at

```
kelime_at — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute horse. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_et` — et

```
kelime_et — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a piece of steak meat. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ana` — ana

```
kelime_ana — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a smiling mother hugging her child. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_anne` — anne

```
kelime_anne — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a smiling mother hugging her little daughter. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ata` — ata

```
kelime_ata — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a kind old grandfather with a cane. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_nine` — nine

```
kelime_nine — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a kind grandmother with grey hair in a bun. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_nene` — nene

```
kelime_nene — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a kind grandmother knitting. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_nane` — nane

```
kelime_nane — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a sprig of fresh mint leaves. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_tane` — tane

```
kelime_tane — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a single bean. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_anten` — anten

```
kelime_anten — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a TV antenna on a little roof. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_tente` — tente

```
kelime_tente — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a striped awning over a small shop window. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_inat` — inat

```
kelime_inat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a little girl pouting with crossed arms. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_tat` — tat

```
kelime_tat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a child happily licking a lollipop. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_net` — net

```
kelime_net — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a soccer goal net. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_el` — el

```
kelime_el — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an open waving hand. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_lale` — lale

```
kelime_lale — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a red tulip. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kale` — kale

```
kelime_kale — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fairy tale castle. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kalem` — kalem

```
kelime_kalem — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a yellow pencil. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_elma` — elma

```
kelime_elma — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a red apple. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ekmek` — ekmek

```
kelime_ekmek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a loaf of bread. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kek` — kek

```
kelime_kek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cupcake. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kalkan` — kalkan

```
kelime_kalkan — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a knight's shield. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kedi` — kedi

```
kelime_kedi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cat. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_etek` — etek

```
kelime_etek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink skirt. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_inek` — inek

```
kelime_inek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cow. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kanat` — kanat

```
kelime_kanat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pair of feathered wings. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ekin` — ekin

```
kelime_ekin — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a field of golden wheat. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_tekne` — tekne

```
kelime_tekne — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small boat. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_iki` — iki

```
kelime_iki — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: two red apples side by side. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_tilki` — tilki

```
kelime_tilki — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fox. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_lamba` — lamba

```
kelime_lamba — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a table lamp. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ayna` — ayna

```
kelime_ayna — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hand mirror. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ay` — ay

```
kelime_ay — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a crescent moon. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ayi` — ayı

```
kelime_ayi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bear. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_un` — un

```
kelime_un — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bag of flour. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_mum` — mum

```
kelime_mum — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lit candle. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_muz` — muz

```
kelime_muz — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a banana. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_limon` — limon

```
kelime_limon — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lemon. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_yumurta` — yumurta

```
kelime_yumurta — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an egg. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_oyun` — oyun

```
kelime_oyun — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pair of dice and a board game. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_mutlu` — mutlu

```
kelime_mutlu — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a very happy smiling child. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_yatak` — yatak

```
kelime_yatak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bed. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kayik` — kayık

```
kelime_kayik — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small rowing boat. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_koltuk` — koltuk

```
kelime_koltuk — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an armchair. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kutu` — kutu

```
kelime_kutu — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cardboard box. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_maymun` — maymun

```
kelime_maymun — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a monkey. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kum` — kum

```
kelime_kum — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pile of sand with a bucket. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_okul` — okul

```
kelime_okul — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a school building. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_balik` — balık

```
kelime_balik — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fish. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_balon` — balon

```
kelime_balon — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a balloon. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_bal` — bal

```
kelime_bal — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a honey pot. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_araba` — araba

```
kelime_araba — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a car. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ordek` — ördek

```
kelime_ordek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a duck. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_dede` — dede

```
kelime_dede — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a grandfather with a white mustache. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_saat` — saat

```
kelime_saat — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an alarm clock. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_su` — su

```
kelime_su — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a glass of water. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_simit` — simit

```
kelime_simit — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a Turkish sesame bagel ring. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_armut` — armut

```
kelime_armut — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pear. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_domates` — domates

```
kelime_domates — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tomato. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_sari` — sarı

```
kelime_sari — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a yellow paint splash. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ari` — arı

```
kelime_ari — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bee. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_burun` — burun

```
kelime_burun — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cute nose. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_bebek` — bebek

```
kelime_bebek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a baby. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_dondurma` — dondurma

```
kelime_dondurma — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an ice cream cone. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kirmizi` — kırmızı

```
kelime_kirmizi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a red paint splash. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_yildiz` — yıldız

```
kelime_yildiz — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a star. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_balina` — balina

```
kelime_balina — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a whale. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kitap` — kitap

```
kelime_kitap — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a book. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_top` — top

```
kelime_top — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a ball. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_tuz` — tuz

```
kelime_tuz — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a salt shaker. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_goz` — göz

```
kelime_goz — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a big eye. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_gunes` — güneş

```
kelime_gunes — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a smiling sun. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_cicek` — çiçek

```
kelime_cicek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a flower. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_canta` — çanta

```
kelime_canta — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a backpack. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_sapka` — şapka

```
kelime_sapka — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a sun hat. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kus` — kuş

```
kelime_kus — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a little bird. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kopek` — köpek

```
kelime_kopek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a dog. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ceket` — ceket

```
kelime_ceket — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a jacket. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_pasta` — pasta

```
kelime_pasta — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a birthday cake. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_gemi` — gemi

```
kelime_gemi — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a ship. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_patates` — patates

```
kelime_patates — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a potato. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_peynir` — peynir

```
kelime_peynir — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a piece of cheese. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_gol` — göl

```
kelime_gol — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a small lake with ducks. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_semsiye` — şemsiye

```
kelime_semsiye — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an umbrella. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_corap` — çorap

```
kelime_corap — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pair of socks. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_bocek` — böcek

```
kelime_bocek — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a ladybug. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ucak` — uçak

```
kelime_ucak — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an airplane. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_ev` — ev

```
kelime_ev — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a house. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_havuc` — havuç

```
kelime_havuc — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a carrot. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_fil` — fil

```
kelime_fil — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an elephant. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_horoz` — horoz

```
kelime_horoz — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rooster. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_dag` — dağ

```
kelime_dag — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mountain. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_agac` — ağaç

```
kelime_agac — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tree. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_fare` — fare

```
kelime_fare — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a mouse. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_zurafa` — zürafa

```
kelime_zurafa — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a giraffe. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_hediye` — hediye

```
kelime_hediye — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a gift box. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_havuz` — havuz

```
kelime_havuz — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a swimming pool. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_otobus` — otobüs

```
kelime_otobus — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bus. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_tavsan` — tavşan

```
kelime_tavsan — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rabbit. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_tavuk` — tavuk

```
kelime_tavuk — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a hen. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `kelime_kaplumbaga` — kaplumbağa

```
kelime_kaplumbaga — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a turtle. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```


## Çıkartmalar (30)

### `cikartma_01` — unicorn

```
cikartma_01 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a unicorn. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_02` — panda

```
cikartma_02 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a panda. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_03` — butterfly

```
cikartma_03 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a butterfly. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_04` — ladybug

```
cikartma_04 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a ladybug. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_05` — tropical fish

```
cikartma_05 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a tropical fish. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_06` — lion

```
cikartma_06 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lion. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_07` — frog

```
cikartma_07 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a frog. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_08` — octopus

```
cikartma_08 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an octopus. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_09` — fox

```
cikartma_09 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a fox. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_10` — koala

```
cikartma_10 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a koala. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_11` — penguin

```
cikartma_11 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a penguin. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_12` — owl

```
cikartma_12 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: an owl. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_13` — bee

```
cikartma_13 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bee. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_14` — turtle

```
cikartma_14 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a turtle. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_15` — baby dinosaur

```
cikartma_15 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a baby dinosaur. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_16` — rainbow

```
cikartma_16 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rainbow. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_17` — sunflower

```
cikartma_17 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a sunflower. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_18` — strawberry

```
cikartma_18 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a strawberry. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_19` — watermelon slice

```
cikartma_19 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a watermelon slice. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_20` — rocket

```
cikartma_20 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a rocket. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_21` — balloon

```
cikartma_21 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a balloon. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_22` — teddy bear

```
cikartma_22 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a teddy bear. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_23` — pink bow

```
cikartma_23 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a pink bow. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_24` — lollipop

```
cikartma_24 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a lollipop. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_25` — shooting star

```
cikartma_25 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a shooting star. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_26` — dolphin

```
cikartma_26 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a dolphin. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_27` — giraffe

```
cikartma_27 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a giraffe. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_28` — bunny

```
cikartma_28 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a bunny. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_29` — whale

```
cikartma_29 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a whale. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `cikartma_30` — cherry blossom

```
cikartma_30 — 2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it: a cherry blossom. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```


## Arka planlar (4)

Bunlar için **Aspect ratio: Widescreen (16:9)** seçin. Arka planları silmiyorum, olduğu gibi kullanılır.

### `arka_ana` — Ana sayfa arka planı

```
arka_ana — 2D flat vector cartoon background illustration, NOT a photo: a soft pastel sky with fluffy clouds and gentle rolling hills at the bottom edge. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `arka_sahne` — Konser sahnesi

```
arka_sahne — 2D flat vector cartoon background illustration, NOT a photo: a cute concert stage with purple velvet curtains on the sides, spotlights and twinkling stars, empty stage floor. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `arka_kale` — Kale arka planı

```
arka_kale — 2D flat vector cartoon background illustration, NOT a photo: a pink fairy tale castle on a hill far in the background, flowers along the bottom edge. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `arka_gece` — Gece arka planı

```
arka_gece — 2D flat vector cartoon background illustration, NOT a photo: a dreamy night sky with a big moon and stars over soft hills. Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame.
```

### `uygulama_ikonu` — Uygulama ikonu (Square 1:1)

```
uygulama_ikonu — a cute app icon: two rounded letter blocks, a pink crown on top and a little sparkle, on a soft butter yellow rounded square that fills the whole frame, flat vector art style with soft shading, clean thick dark navy outline (#3D3553), pastel colors, no text, no letters written, no logo, no watermark.
```


## Karakterler hakkında

- Karakterler evde gezdirilen hazır karakterler olur. Hepsi aynı oranlarla (büyük kafa, küçük gövde, önden, ayakta) istenir ki yan yana uyumlu dursunlar.
- Aynı karakteri farklı kıyafetlerle istiyorsanız: Firefly'da ilk görseli **Structure reference** (Yapı referansı) olarak yükleyip
  isteğin sadece kıyafet kısmını değiştirin, kodun sonuna `_2`, `_3` ekleyin (ör. `kiz1_2`). Haber verin, bunları kıyafet seçimine bağlarım.
- Giydirme oyunundaki bebek katmanlı olduğu için (saç, kıyafet, ayakkabı ayrı) onu vektör çizmeye devam ediyorum.
