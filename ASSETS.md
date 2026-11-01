# Firefly görsel listesi

Toplam **131 eşya**, **17 karakter**, **12 evcil hayvan**, **38 buton/simge**, **101 kelime resmi**, **30 çıkartma**, **4 arka plan** ve uygulama ikonu. Her isteği olduğu gibi kopyalayıp Firefly'a yapıştırın. Stil, arka plan, açı ve boyut bilgisi isteğin içinde.

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


## Toplu üretim: çıkartma sayfaları (47 istek)

Görselleri tek tek üretmek yerine **bir istekte 9 tane** (karakterlerde 4) üretebilirsiniz. Firefly hepsini aynı resimde,
aralarında boşluk bırakarak çizer; ben sayfayı otomatik keser, her parçaya doğru kodu veririm.

- Ayarlar aynı: **Square (1:1)**, **Art**, **Style reference** yüklü.
- Firefly bazen sırayı ya da sayıyı tutturamaz. Sayfada eksik, birleşik ya da fazla parça varsa yine yükleyin,
  kesip hangisinin ne olduğunu ben bakarak adlandırırım. Beğenmediğiniz tek parçayı aşağıdaki tekli istekle yeniden üretebilirsiniz.
- Kalite: tekli istek her eşyayı daha büyük ve detaylı çizer. Önemli eşyalar (yatak, kanepe, karakterler) için tekli,
  küçük eşyalar ve kelime resimleri için toplu üretim iyi bir denge.

### `set_esya_yatak_01` — 9 görsel: yatak, yuvarlakyatak, cibinlikliyatak, ranza, besik, dolap, kiyafetaski, sifonyer, makyaj

```
set_esya_yatak_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a single bed with a wooden headboard, pink blanket with tiny flower pattern and two white pillows; 2) a round bed with a rainbow arch headboard, lilac blanket and fluffy white pillows; 3) a princess canopy bed with sheer pink curtains tied with bows and a heart pillow; 4) a white bunk bed with a small ladder, mint and pink blankets; 5) a white baby crib with a little star mobile above it; 6) a tall pastel pink wardrobe with two doors and round knobs; 7) an open clothes rack with colorful hanging shirts and dresses and two drawers below; 8) a cream chest of drawers with three drawers and gold handles; 9) a vanity table with a big mirror surrounded by round light bulbs, a hair brush and lipsticks. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_yatak_02` — 9 görsel: kozmetik, koltuk, armut, cicekminder, ayihali, bilgisayar, calismamasasi, aynadalga, boyaynasi

```
set_esya_yatak_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small glass-door mini fridge full of pastel skincare bottles; 2) a hanging egg chair with a white cushion and a heart pillow, hanging rope on top; 3) a soft lilac bean bag chair; 4) a flower shaped floor cushion in cream and butter yellow; 5) a fluffy rug shaped like a cute teddy bear face, seen from above; 6) a lilac desk with a computer monitor, keyboard and a game controller; 7) a wooden study desk with a desk lamp, pencil cup and a stack of books; 8) a wall mirror with a wavy lilac frame; 9) a tall standing full-length mirror with a wooden frame. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_yatak_03` — 6 görsel: komodin, gecelambasi, oyuncaksandigi, unicorn, oyuncakev, yazitahtasi

```
set_esya_yatak_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small bedside table with a mushroom lamp on top; 2) a moon shaped night light glowing softly; 3) an open toy chest with a ball, a teddy and blocks peeking out; 4) a plush unicorn toy with a rainbow mane; 5) a small toy dollhouse with a pink roof; 6) a standing chalkboard easel with colorful chalk doodles of a sun and a heart. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_mutfak_01` — 9 görsel: retrobuzdolabi, buzdolabi, tezgah, ocak, firin, lavabo, mikrodalga, tost, kahve

```
set_esya_mutfak_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a retro rounded fridge in peach color with a silver handle and cute magnets; 2) a mint green two-door fridge with sticky notes and magnets; 3) a kitchen counter with a sink, a stove top and an oven, cream cabinets with round knobs; 4) a small cooking stove with an oven and a pink pot on top; 5) a built-in oven with a glass door and a tray of cookies inside; 6) a kitchen sink cabinet with a silver faucet; 7) a lilac microwave oven; 8) a pastel blue toaster with a smiling face and two toast slices popping up; 9) a yellow drip coffee machine with a glass coffee pot. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_mutfak_02` — 9 görsel: blender, mikser, kettle, caydanlik, rafkupa, tabakdolabi, kasiklik, masa, yuvarlakmasa

```
set_esya_mutfak_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a blender with a pink strawberry smoothie inside; 2) a stand mixer in mint color with a mixing bowl; 3) an electric kettle in cream color; 4) a pink teapot with a lid; 5) a wall shelf with pink bowls and white mugs; 6) a glass-door kitchen cabinet with stacked plates and cups; 7) a hanging rail with a spatula, a fork, a whisk and a wooden spoon; 8) a small wooden dining table; 9) a round white table with a vase of tulips. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_mutfak_03` — 9 görsel: sandalye, tabure, mamasandalyesi, meyve, ekmek, kurabiye, pizza, hamburger, salata

```
set_esya_mutfak_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a wooden chair with a yellow cushion; 2) a wooden bar stool with a pink cushion; 3) a baby high chair in mint color; 4) a fruit bowl with an apple, an orange and bananas; 5) a woven basket with bread rolls and a baguette; 6) a glass cookie jar full of round cookies; 7) a cute round pizza with cheese and tomato slices; 8) a cute hamburger; 9) a bowl of green salad with tomatoes. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_mutfak_04` — 3 görsel: cilek, sut, saksiotlar

```
set_esya_mutfak_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small basket of red strawberries; 2) a milk carton with a small cow face, no letters; 3) three small pots with basil and mint herbs. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_banyo_01` — 9 görsel: kuvet, jakuzi, duskabini, banyolavabo, tuvalet, camasir, sampuan, sepet, havlu

```
set_esya_banyo_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a white bathtub with golden feet full of bubbles; 2) a round wooden hot tub with blue water; 3) a glass shower cabin with a silver shower head; 4) a bathroom sink with an oval mirror and a small cabinet; 5) a white toilet; 6) a white washing machine with a round door; 7) a bathroom shelf with colorful shampoo and soap bottles without letters; 8) a blue laundry basket with towels; 9) a towel rack with a pink striped towel. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_banyo_02` — 6 görsel: bornoz, ayna, ordek, dissfircasi, sabunluk, paspas

```
set_esya_banyo_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a fluffy pink bathrobe hanging on a hook; 2) a round wall mirror with a wooden frame; 3) a yellow rubber duck toy; 4) a cup with two toothbrushes and toothpaste; 5) a soap dispenser bottle in lilac; 6) a fluffy blue bath mat, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_salon_01` — 9 görsel: kanepe, kosekanepe, berjer, tv, tvunitesi, sehpa, oyunrafi, kediagaci, akvaryum

```
set_esya_salon_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a lilac three-seat sofa with a yellow pillow; 2) a cream L-shaped sectional sofa with pastel pillows; 3) a cozy round armchair in mint color; 4) a flat television on a small wooden stand; 5) a low wooden TV cabinet with books and a plant; 6) a round white coffee table with a cup of tea; 7) a shelf full of toys, balls and building blocks; 8) a cat tree scratching post with platforms; 9) a small fish tank with two orange fish and plants. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_salon_02` — 3 görsel: piyano, somine, kuskafesi

```
set_esya_salon_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a white upright piano; 2) a cozy fireplace with a warm fire and stockings; 3) a white bird cage with a small yellow bird inside. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_bahce_01` — 9 görsel: sezlong, semsiye, flamingo, simit, palmiye, buzkutusu, kaydirak, salincak, trambolin

```
set_esya_bahce_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a wooden beach deck chair with pink fabric; 2) a white and pink beach umbrella standing on a pole; 3) an inflatable pink flamingo pool float; 4) a striped inflatable swim ring; 5) a palm tree with coconuts; 6) a yellow picnic cooler box; 7) a small pastel playground slide; 8) a wooden garden swing with ropes and flowers; 9) a round trampoline with a safety net in pastel colors. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_bahce_02` — 9 görsel: kumkovasi, mangal, cicektarhi, agac, cit, kopekkulubesi, bisiklet, limonatastandi, gokkusagi

```
set_esya_bahce_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a sand bucket with a little shovel; 2) a small round barbecue grill; 3) a wooden flower box full of colorful tulips and daisies; 4) a round fluffy green tree with apples; 5) a short white picket fence section; 6) a red wooden dog house; 7) a pastel kids bicycle with a basket of flowers; 8) a wooden lemonade stand with a striped awning, no letters; 9) a pastel rainbow arch with fluffy clouds at both ends. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_bahce_03` — 1 görsel: piknik

```
set_esya_bahce_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 1 completely separate items arranged in a neat 1 by 1 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a red and white checkered picnic blanket with a basket, seen from above. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_hepsi_01` — 9 görsel: yuvarlakhali, kitaplik, duvarrafi, fotoipi, perde, kedipostu, pasta, limonata, copkutusu

```
set_esya_hepsi_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a round fluffy white rug, seen from above; 2) a bookshelf with colorful books, a small plant and a toy; 3) a floating wall shelf with tiny plants, a candle and a photo frame; 4) a string with clothespins holding instant photos and tiny fairy lights; 5) a pair of soft pink curtains with a curtain rod, tied with bows; 6) a framed poster with a cute smiling cat illustration; 7) a strawberry layer cake with one candle; 8) a glass jug of pink lemonade with lemon slices; 9) a pastel pedal trash bin. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_hepsi_02` — 9 görsel: robot, abajur, lambader, puf, buyukbitki, bitki, sarkitbitki, kaktus, kediyatagi

```
set_esya_hepsi_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a round robot vacuum cleaner; 2) a small table lamp with a pink shade; 3) a tall floor lamp with a cream shade; 4) an orange round pouf; 5) a tall leafy monstera plant in a white pot; 6) a small potted plant in a terracotta pot; 7) a hanging plant in a macrame holder; 8) a small cactus with a pink flower in an orange pot; 9) a round pink pet bed. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_hepsi_03` — 9 görsel: oyunkonsolu, vazo, duvarsaati, disko, sarkit, perilamba, tablo, cerceve, ayi

```
set_esya_hepsi_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a game console with two controllers; 2) a glass vase with pink tulips; 3) a round wall clock shaped like a cat face, without numbers; 4) a lilac disco ball hanging from a string; 5) a hanging pendant ceiling lamp with a cream shade; 6) a string of warm fairy lights hanging in a gentle curve; 7) a framed painting of flowers and a heart; 8) a framed painting of green hills and a sun; 9) a soft brown teddy bear sitting. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_esya_hepsi_04` — 4 görsel: top, kalpbalon, dondurma, cadir

```
set_esya_hepsi_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a red and white beach ball; 2) a pink heart shaped balloon on a string; 3) an ice cream cone with pink and vanilla scoops; 4) a cream teepee play tent with bunting flags. Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette (blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective distortion, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, plain solid pure white background (#FFFFFF).
```

### `set_karakter_01` — 4 görsel: kiz1, kiz2, kiz3, kiz4

```
set_karakter_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 1 by 4 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little girl with a long lavender braid, light skin, wearing a pink hoodie, light blue jeans and white sneakers; 2) a cute little girl with big curly black hair in a puff with a yellow bow, dark brown skin, wearing a yellow dress and pink sandals; 3) a cute little girl with a short pink bob haircut, fair skin, wearing a star print t-shirt, a lilac skirt and white boots; 4) a cute little girl with two blonde space buns, light skin, wearing mint overalls with a white shirt and yellow shoes. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_karakter_02` — 4 görsel: kiz5, kiz6, kiz7, oglan1

```
set_karakter_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 1 by 4 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little girl with long wavy red hair and freckles, wearing a green dress with a white collar and red shoes; 2) a cute little girl princess with long brown hair and a small golden tiara, medium tan skin, wearing a puffy lilac ball gown; 3) a cute little girl pop star with a high purple ponytail, light skin, wearing a sparkly silver jacket, a pink skirt and holding nothing; 4) a cute little boy with short brown hair, light skin, wearing a blue sweater, khaki shorts and sneakers. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_karakter_03` — 4 görsel: oglan2, oglan3, bebek1, bebek2

```
set_karakter_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 1 by 4 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute little boy with short black curly hair, dark brown skin, wearing a green t-shirt with a dinosaur, jeans and orange sneakers; 2) a cute little boy with straight black hair and a backwards yellow cap, light tan skin, wearing a striped shirt and shorts; 3) a cute cute baby with a tiny curl of hair, wearing a pastel yellow onesie, sitting; 4) a cute cute baby girl with a pink headband, wearing a pink onesie, sitting. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_karakter_04` — 4 görsel: anne, baba, nine, dede

```
set_karakter_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 1 by 4 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute young mother with long brown hair, light skin, wearing a green dress and white sneakers; 2) a cute young father with short black hair and a short beard, light tan skin, wearing a blue striped shirt and jeans; 3) a cute kind grandmother with grey hair in a bun and round glasses, wearing a lilac cardigan and a long skirt; 4) a cute kind grandfather with white hair, a white mustache and glasses, wearing a brown vest and trousers. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_karakter_05` — 1 görsel: ogretmen

```
set_karakter_05 — 2D flat vector cartoon sticker sheet, NOT a photo: 1 completely separate items arranged in a neat 1 by 1 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute friendly young teacher with a brown ponytail, wearing a yellow sweater and blue skirt. Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed slightly away from the body, feet together on the same level, no floor, no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_hayvan_01` — 6 görsel: kedi, kedi2, kedi3, kopek, kopek2, tavsan

```
set_hayvan_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) an orange tabby kitten; 2) a fluffy white kitten with a pink bow; 3) a grey kitten with stripes; 4) a light brown puppy with floppy ears; 5) a white puppy with black spots; 6) a white bunny with long ears. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_hayvan_02` — 6 görsel: hamster, papagan, kaplumbaga, ordekyavrusu, midilli, panda

```
set_hayvan_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 6 completely separate items arranged in a neat 2 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a round golden hamster; 2) a small green and yellow parrot; 3) a little green turtle; 4) a fluffy yellow duckling; 5) a little pastel pony with a rainbow mane; 6) a baby panda. Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, no floor, no cast shadow, no text, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_buton_01` — 9 görsel: ui_geri, ui_hoparlor, ui_basla, ui_anasayfa, ui_tekrar, ui_hediye, ui_yildiz, ui_album, ui_birlestir

```
set_buton_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a rounded arrow pointing left; 2) a cute speaker with sound waves; 3) a big green play triangle; 4) a small cute house; 5) a circular arrow going around; 6) a pink gift box with a big golden bow; 7) a shiny golden star with a cute face; 8) a sticker album book with hearts and stars on the cover; 9) two links of a chain joining together with a sparkle. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_buton_02` — 9 görsel: ui_dogru, ui_cop, ui_oda_yatak, ui_oda_mutfak, ui_oda_banyo, ui_oda_salon, ui_oda_havuz, ui_mod_tasi, ui_mod_boya

```
set_buton_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a happy thumbs up hand; 2) a cute small trash bin; 3) a small cute bed; 4) a small cute cooking pot on a stove with steam; 5) a small cute bathtub with bubbles; 6) a small cute sofa; 7) a small swimming pool with a pink flamingo float; 8) a cute open hand with four little arrows around it; 9) a paintbrush with a pink paint drop. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_buton_03` — 9 görsel: ui_mod_tasarla, ui_kat_kiyafet, ui_kat_sac, ui_kat_ten, ui_kat_taki, ui_kat_elde, ui_kat_ayakkabi, ui_kat_hayvan, ui_kat_fon

```
set_buton_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a wallpaper roll and a paint roller; 2) a pink dress; 3) a long purple braided hairstyle on its own, no face; 4) three round face shapes in light, medium and dark skin tones; 5) a golden tiara with pink gems; 6) a pink microphone; 7) a pair of pink ballet shoes; 8) a cute cat face; 9) a tiny stage with curtains and a star. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_buton_04` — 3 görsel: ui_duvar, ui_zemin, ui_pencere

```
set_buton_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a piece of wallpaper with little hearts; 2) a square of wooden floor planks; 3) a window with a sun and a cloud outside. Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, no button background, no text, no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kart_01` — 4 görsel: ui_oyun_sesibul, ui_oyun_birlestir, ui_oyun_kelimekur, ui_oyun_oku

```
set_kart_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a big cute cartoon ear with sound waves and a few floating musical notes; 2) two cute rounded toy blocks snapping together with a sparkle in the middle; 3) three colorful puzzle pieces fitting together with little stars; 4) an open storybook with a rainbow and stars coming out of it. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kart_02` — 4 görsel: ui_sahne, ui_ev, ui_giydir, ui_boyama

```
set_kart_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 4 completely separate items arranged in a neat 2 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small theater stage with purple curtains, a golden crown and a microphone in spotlight; 2) a cute pastel pink two-storey house with a heart window and flowers; 3) a pastel dress on a hanger next to a little crown and a bow; 4) a paint palette with colorful paint blobs and a brush. Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_01` — 9 görsel: kelime_at, kelime_et, kelime_ana, kelime_anne, kelime_ata, kelime_nine, kelime_nene, kelime_nane, kelime_tane

```
set_kelime_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a cute horse; 2) a piece of steak meat; 3) a smiling mother hugging her child; 4) a smiling mother hugging her little daughter; 5) a kind old grandfather with a cane; 6) a kind grandmother with grey hair in a bun; 7) a kind grandmother knitting; 8) a sprig of fresh mint leaves; 9) a single bean. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_02` — 9 görsel: kelime_anten, kelime_tente, kelime_inat, kelime_tat, kelime_net, kelime_el, kelime_lale, kelime_kale, kelime_kalem

```
set_kelime_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a TV antenna on a little roof; 2) a striped awning over a small shop window; 3) a little girl pouting with crossed arms; 4) a child happily licking a lollipop; 5) a soccer goal net; 6) an open waving hand; 7) a red tulip; 8) a fairy tale castle; 9) a yellow pencil. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_03` — 9 görsel: kelime_elma, kelime_ekmek, kelime_kek, kelime_kalkan, kelime_kedi, kelime_etek, kelime_inek, kelime_kanat, kelime_ekin

```
set_kelime_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a red apple; 2) a loaf of bread; 3) a cupcake; 4) a knight's shield; 5) a cat; 6) a pink skirt; 7) a cow; 8) a pair of feathered wings; 9) a field of golden wheat. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_04` — 9 görsel: kelime_tekne, kelime_iki, kelime_tilki, kelime_lamba, kelime_ayna, kelime_ay, kelime_ayi, kelime_un, kelime_mum

```
set_kelime_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a small boat; 2) two red apples side by side; 3) a fox; 4) a table lamp; 5) a hand mirror; 6) a crescent moon; 7) a bear; 8) a bag of flour; 9) a lit candle. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_05` — 9 görsel: kelime_muz, kelime_limon, kelime_yumurta, kelime_oyun, kelime_mutlu, kelime_yatak, kelime_kayik, kelime_koltuk, kelime_kutu

```
set_kelime_05 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a banana; 2) a lemon; 3) an egg; 4) a pair of dice and a board game; 5) a very happy smiling child; 6) a bed; 7) a small rowing boat; 8) an armchair; 9) a cardboard box. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_06` — 9 görsel: kelime_maymun, kelime_kum, kelime_okul, kelime_balik, kelime_balon, kelime_bal, kelime_araba, kelime_ordek, kelime_dede

```
set_kelime_06 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a monkey; 2) a pile of sand with a bucket; 3) a school building; 4) a fish; 5) a balloon; 6) a honey pot; 7) a car; 8) a duck; 9) a grandfather with a white mustache. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_07` — 9 görsel: kelime_saat, kelime_su, kelime_simit, kelime_armut, kelime_domates, kelime_sari, kelime_ari, kelime_burun, kelime_bebek

```
set_kelime_07 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) an alarm clock; 2) a glass of water; 3) a Turkish sesame bagel ring; 4) a pear; 5) a tomato; 6) a yellow paint splash; 7) a bee; 8) a cute nose; 9) a baby. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_08` — 9 görsel: kelime_dondurma, kelime_kirmizi, kelime_yildiz, kelime_balina, kelime_kitap, kelime_top, kelime_tuz, kelime_goz, kelime_gunes

```
set_kelime_08 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) an ice cream cone; 2) a red paint splash; 3) a star; 4) a whale; 5) a book; 6) a ball; 7) a salt shaker; 8) a big eye; 9) a smiling sun. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_09` — 9 görsel: kelime_cicek, kelime_canta, kelime_sapka, kelime_kus, kelime_kopek, kelime_ceket, kelime_pasta, kelime_gemi, kelime_patates

```
set_kelime_09 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a flower; 2) a backpack; 3) a sun hat; 4) a little bird; 5) a dog; 6) a jacket; 7) a birthday cake; 8) a ship; 9) a potato. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_10` — 9 görsel: kelime_peynir, kelime_gol, kelime_semsiye, kelime_corap, kelime_bocek, kelime_ucak, kelime_ev, kelime_havuc, kelime_fil

```
set_kelime_10 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a piece of cheese; 2) a small lake with ducks; 3) an umbrella; 4) a pair of socks; 5) a ladybug; 6) an airplane; 7) a house; 8) a carrot; 9) an elephant. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_11` — 9 görsel: kelime_horoz, kelime_dag, kelime_agac, kelime_fare, kelime_zurafa, kelime_hediye, kelime_havuz, kelime_otobus, kelime_tavsan

```
set_kelime_11 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a rooster; 2) a mountain; 3) a tree; 4) a mouse; 5) a giraffe; 6) a gift box; 7) a swimming pool; 8) a bus; 9) a rabbit. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_kelime_12` — 2 görsel: kelime_tavuk, kelime_kaplumbaga

```
set_kelime_12 — 2D flat vector cartoon sticker sheet, NOT a photo: 2 completely separate items arranged in a neat 1 by 2 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a hen; 2) a turtle. Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, front view, no text, no letters, no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF).
```

### `set_cikartma_01` — 9 görsel: cikartma_01, cikartma_02, cikartma_03, cikartma_04, cikartma_05, cikartma_06, cikartma_07, cikartma_08, cikartma_09

```
set_cikartma_01 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a unicorn; 2) a panda; 3) a butterfly; 4) a ladybug; 5) a tropical fish; 6) a lion; 7) a frog; 8) an octopus; 9) a fox. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `set_cikartma_02` — 9 görsel: cikartma_10, cikartma_11, cikartma_12, cikartma_13, cikartma_14, cikartma_15, cikartma_16, cikartma_17, cikartma_18

```
set_cikartma_02 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a koala; 2) a penguin; 3) an owl; 4) a bee; 5) a turtle; 6) a baby dinosaur; 7) a rainbow; 8) a sunflower; 9) a strawberry. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `set_cikartma_03` — 9 görsel: cikartma_19, cikartma_20, cikartma_21, cikartma_22, cikartma_23, cikartma_24, cikartma_25, cikartma_26, cikartma_27

```
set_cikartma_03 — 2D flat vector cartoon sticker sheet, NOT a photo: 9 completely separate items arranged in a neat 3 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a watermelon slice; 2) a rocket; 3) a balloon; 4) a teddy bear; 5) a pink bow; 6) a lollipop; 7) a shooting star; 8) a dolphin; 9) a giraffe. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```

### `set_cikartma_04` — 3 görsel: cikartma_28, cikartma_29, cikartma_30

```
set_cikartma_04 — 2D flat vector cartoon sticker sheet, NOT a photo: 3 completely separate items arranged in a neat 1 by 3 grid with wide empty white space between them, every item fully visible, none of the items touching or overlapping, all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: 1) a bunny; 2) a whale; 3) a cherry blossom. Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the whole shape, bright pastel colors, no text, no logo, no watermark, plain solid light grey background (#EEEEEE).
```


# Tekli istekler


## Eşyalar: Yatak odası (24)

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


## Eşyalar: Mutfak (30)

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


## Eşyalar: Banyo (15)

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


## Eşyalar: Salon (12)

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


## Eşyalar: Bahçe ve havuz (19)

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


## Eşyalar: Her odada (31)

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
