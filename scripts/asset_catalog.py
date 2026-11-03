#!/usr/bin/env python3
"""
Defne'nin Evi görsel kataloğu. Bu dosya tek kaynaktır:
  python3 -I scripts/asset_catalog.py
komutu ASSETS.md (Firefly istekleri) ve src/assets/items.json (oyunun bildiği eşyalar) dosyalarını üretir.

Her kayıt: (kod, oda, genişlik_yüzde, yere_serili_mi, Türkçe ad, İngilizce tarif)
  - kod: dosya adı (kod.png). Sadece küçük harf, rakam ve alt çizgi.
  - oda: yatak, mutfak, banyo, salon, bahce, hepsi
  - genişlik: odanın genişliğine göre eşyanın oyundaki genişliği (%)
"""
import json
import sys
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# ---------------------------------------------------------------- stiller
STYLE_ITEM = (
    "Cute cozy 2D illustration for a children's dollhouse game, flat vector art style with very soft gentle shading, "
    "rounded friendly shapes, clean thick dark navy outline (#3D3553) around every shape, soft pastel color palette "
    "(blush pink, lilac, mint, butter yellow, sky blue, cream), straight-on front view at eye level with no perspective "
    "distortion, one single isolated object, the whole object fully visible and centered with generous empty margin "
    "around it, no floor, no cast shadow, no text, no letters, no logo, no watermark, no people, "
    "plain solid pure white background (#FFFFFF)."
)
STYLE_CHAR = (
    "Cute 2D chibi character for a children's dollhouse game, flat vector art style with very soft gentle shading, "
    "big round head, small rounded body (head about one third of total height), simple black oval eyes with a tiny "
    "white highlight, rosy round cheeks, small friendly smile, clean thick dark navy outline (#3D3553), soft pastel "
    "color palette, full body visible from head to shoes, standing straight and facing the viewer, arms relaxed "
    "slightly away from the body, feet together on the same level, centered with generous empty margin, no floor, "
    "no cast shadow, no props, no text, no logo, no watermark, plain solid pure white background (#FFFFFF)."
)
STYLE_PET = (
    "Cute 2D chibi animal for a children's dollhouse game, flat vector art style with very soft gentle shading, "
    "big head, small rounded body, simple black oval eyes with a tiny white highlight, rosy cheeks, clean thick dark "
    "navy outline (#3D3553), soft pastel colors, full body visible, sitting and facing the viewer, centered with "
    "generous empty margin, no floor, no cast shadow, no text, no logo, no watermark, "
    "plain solid pure white background (#FFFFFF)."
)
EXCLUDE = "photo, photograph, photorealistic, realistic, 3D render, room, interior, window, wall, floor, perspective, shadow, background scenery, text, letters, logo, watermark, frame, border"

# ---------------------------------------------------------------- eşyalar
ITEMS = [
    # --- yatak odası
    ("yatak", "yatak", 46, False, "Tek kişilik yatak", "a single bed with a wooden headboard, pink blanket with tiny flower pattern and two white pillows"),
    ("yuvarlakyatak", "yatak", 46, False, "Yuvarlak yatak", "a round bed with a rainbow arch headboard, lilac blanket and fluffy white pillows"),
    ("cibinlikliyatak", "yatak", 46, False, "Cibinlikli yatak", "a princess canopy bed with sheer pink curtains tied with bows and a heart pillow"),
    ("ranza", "yatak", 40, False, "Ranza", "a white bunk bed with a small ladder, mint and pink blankets"),
    ("besik", "yatak", 30, False, "Bebek beşiği", "a white baby crib with a little star mobile above it"),
    ("dolap", "yatak", 22, False, "Gardırop", "a tall pastel pink wardrobe with two doors and round knobs"),
    ("kiyafetaski", "yatak", 26, False, "Kıyafet askılığı", "an open clothes rack with colorful hanging shirts and dresses and two drawers below"),
    ("sifonyer", "yatak", 24, False, "Şifonyer", "a cream chest of drawers with three drawers and gold handles"),
    ("makyaj", "yatak", 32, False, "Makyaj masası", "a vanity table with a big mirror surrounded by round light bulbs, a hair brush and lipsticks"),
    ("kozmetik", "yatak", 16, False, "Kozmetik dolabı", "a small glass-door mini fridge full of pastel skincare bottles"),
    ("koltuk", "yatak", 22, False, "Salıncak koltuk", "a hanging egg chair with a white cushion and a heart pillow, hanging rope on top"),
    ("armut", "yatak", 18, False, "Armut koltuk", "a soft lilac bean bag chair"),
    ("cicekminder", "yatak", 14, False, "Çiçek minder", "a flower shaped floor cushion in cream and butter yellow"),
    ("ayihali", "yatak", 40, True, "Ayı halı", "a fluffy rug shaped like a cute teddy bear face, seen from above"),
    ("yuvarlakhali", "hepsi", 40, True, "Yuvarlak halı", "a round fluffy white rug, seen from above"),
    ("bilgisayar", "yatak", 36, False, "Bilgisayar masası", "a lilac desk with a computer monitor, keyboard and a game controller"),
    ("calismamasasi", "yatak", 34, False, "Çalışma masası", "a wooden study desk with a desk lamp, pencil cup and a stack of books"),
    ("kitaplik", "hepsi", 24, False, "Kitaplık", "a bookshelf with colorful books, a small plant and a toy"),
    ("aynadalga", "yatak", 16, False, "Dalgalı ayna", "a wall mirror with a wavy lilac frame"),
    ("boyaynasi", "yatak", 14, False, "Boy aynası", "a tall standing full-length mirror with a wooden frame"),
    ("komodin", "yatak", 14, False, "Komodin", "a small bedside table with a mushroom lamp on top"),
    ("gecelambasi", "yatak", 8, False, "Ay gece lambası", "a moon shaped night light glowing softly"),
    ("oyuncaksandigi", "yatak", 20, False, "Oyuncak sandığı", "an open toy chest with a ball, a teddy and blocks peeking out"),
    ("unicorn", "yatak", 10, False, "Peluş unicorn", "a plush unicorn toy with a rainbow mane"),
    ("oyuncakev", "yatak", 18, False, "Oyuncak ev", "a small toy dollhouse with a pink roof"),
    ("yazitahtasi", "yatak", 16, False, "Yazı tahtası", "a standing chalkboard easel with colorful chalk doodles of a sun and a heart"),
    ("duvarrafi", "hepsi", 28, False, "Duvar rafı", "a floating wall shelf with tiny plants, a candle and a photo frame"),
    ("fotoipi", "hepsi", 30, False, "Fotoğraf ipi", "a string with clothespins holding instant photos and tiny fairy lights"),
    ("perde", "hepsi", 34, False, "Perde", "a pair of soft pink curtains with a curtain rod, tied with bows"),
    ("kedipostu", "hepsi", 16, False, "Kedi posteri", "a framed poster with a cute smiling cat illustration"),

    # --- mutfak
    ("retrobuzdolabi", "mutfak", 22, False, "Retro buzdolabı", "a retro rounded fridge in peach color with a silver handle and cute magnets"),
    ("buzdolabi", "mutfak", 22, False, "Buzdolabı", "a mint green two-door fridge with sticky notes and magnets"),
    ("tezgah", "mutfak", 46, False, "Mutfak tezgâhı", "a kitchen counter with a sink, a stove top and an oven, cream cabinets with round knobs"),
    ("ocak", "mutfak", 26, False, "Ocak", "a small cooking stove with an oven and a pink pot on top"),
    ("firin", "mutfak", 24, False, "Fırın", "a built-in oven with a glass door and a tray of cookies inside"),
    ("lavabo", "mutfak", 30, False, "Mutfak lavabosu", "a kitchen sink cabinet with a silver faucet"),
    ("mikrodalga", "mutfak", 20, False, "Mikrodalga", "a lilac microwave oven"),
    ("tost", "mutfak", 12, False, "Tost makinesi", "a pastel blue toaster with a smiling face and two toast slices popping up"),
    ("kahve", "mutfak", 12, False, "Kahve makinesi", "a yellow drip coffee machine with a glass coffee pot"),
    ("blender", "mutfak", 9, False, "Blender", "a blender with a pink strawberry smoothie inside"),
    ("mikser", "mutfak", 12, False, "Mikser", "a stand mixer in mint color with a mixing bowl"),
    ("kettle", "mutfak", 10, False, "Su ısıtıcı", "an electric kettle in cream color"),
    ("caydanlik", "mutfak", 12, False, "Çaydanlık", "a pink teapot with a lid"),
    ("rafkupa", "mutfak", 32, False, "Kâse rafı", "a wall shelf with pink bowls and white mugs"),
    ("tabakdolabi", "mutfak", 26, False, "Tabak dolabı", "a glass-door kitchen cabinet with stacked plates and cups"),
    ("kasiklik", "mutfak", 24, False, "Kaşıklık", "a hanging rail with a spatula, a fork, a whisk and a wooden spoon"),
    ("masa", "mutfak", 34, False, "Yemek masası", "a small wooden dining table"),
    ("yuvarlakmasa", "mutfak", 28, False, "Yuvarlak masa", "a round white table with a vase of tulips"),
    ("sandalye", "mutfak", 12, False, "Sandalye", "a wooden chair with a yellow cushion"),
    ("tabure", "mutfak", 10, False, "Bar taburesi", "a wooden bar stool with a pink cushion"),
    ("mamasandalyesi", "mutfak", 14, False, "Mama sandalyesi", "a baby high chair in mint color"),
    ("meyve", "mutfak", 14, False, "Meyve kâsesi", "a fruit bowl with an apple, an orange and bananas"),
    ("ekmek", "mutfak", 12, False, "Ekmek sepeti", "a woven basket with bread rolls and a baguette"),
    ("pasta", "hepsi", 13, False, "Pasta", "a strawberry layer cake with one candle"),
    ("kurabiye", "mutfak", 9, False, "Kurabiye kavanozu", "a glass cookie jar full of round cookies"),
    ("pizza", "mutfak", 12, False, "Pizza", "a cute round pizza with cheese and tomato slices"),
    ("hamburger", "mutfak", 9, False, "Hamburger", "a cute hamburger"),
    ("salata", "mutfak", 12, False, "Salata", "a bowl of green salad with tomatoes"),
    ("cilek", "mutfak", 9, False, "Çilek sepeti", "a small basket of red strawberries"),
    ("sut", "mutfak", 6, False, "Süt kutusu", "a milk carton with a small cow face, no letters"),
    ("limonata", "hepsi", 8, False, "Limonata sürahisi", "a glass jug of pink lemonade with lemon slices"),
    ("copkutusu", "hepsi", 12, False, "Çöp kutusu", "a pastel pedal trash bin"),
    ("saksiotlar", "mutfak", 16, False, "Saksıda otlar", "three small pots with basil and mint herbs"),

    # --- banyo
    ("kuvet", "banyo", 48, False, "Küvet", "a white bathtub with golden feet full of bubbles"),
    ("jakuzi", "banyo", 42, False, "Jakuzi", "a round wooden hot tub with blue water"),
    ("duskabini", "banyo", 26, False, "Duş kabini", "a glass shower cabin with a silver shower head"),
    ("banyolavabo", "banyo", 22, False, "Lavabo", "a bathroom sink with an oval mirror and a small cabinet"),
    ("tuvalet", "banyo", 18, False, "Tuvalet", "a white toilet"),
    ("camasir", "banyo", 22, False, "Çamaşır makinesi", "a white washing machine with a round door"),
    ("sampuan", "banyo", 26, False, "Şampuan rafı", "a bathroom shelf with colorful shampoo and soap bottles without letters"),
    ("sepet", "banyo", 14, False, "Çamaşır sepeti", "a blue laundry basket with towels"),
    ("robot", "hepsi", 14, False, "Robot süpürge", "a round robot vacuum cleaner"),
    ("havlu", "banyo", 16, False, "Havluluk", "a towel rack with a pink striped towel"),
    ("bornoz", "banyo", 12, False, "Bornoz", "a fluffy pink bathrobe hanging on a hook"),
    ("ayna", "banyo", 16, False, "Yuvarlak ayna", "a round wall mirror with a wooden frame"),
    ("ordek", "banyo", 9, False, "Plastik ördek", "a yellow rubber duck toy"),
    ("dissfircasi", "banyo", 7, False, "Diş fırçası bardağı", "a cup with two toothbrushes and toothpaste"),
    ("sabunluk", "banyo", 6, False, "Sabunluk", "a soap dispenser bottle in lilac"),
    ("paspas", "banyo", 30, True, "Banyo paspası", "a fluffy blue bath mat, seen from above"),

    # --- salon
    ("kanepe", "salon", 48, False, "Kanepe", "a lilac three-seat sofa with a yellow pillow"),
    ("kosekanepe", "salon", 52, False, "Köşe koltuk", "a cream L-shaped sectional sofa with pastel pillows"),
    ("berjer", "salon", 22, False, "Berjer", "a cozy round armchair in mint color"),
    ("tv", "salon", 32, False, "Televizyon", "a flat television on a small wooden stand"),
    ("tvunitesi", "salon", 34, False, "TV ünitesi", "a low wooden TV cabinet with books and a plant"),
    ("sehpa", "salon", 26, False, "Sehpa", "a round white coffee table with a cup of tea"),
    ("abajur", "hepsi", 10, False, "Abajur", "a small table lamp with a pink shade"),
    ("lambader", "hepsi", 13, False, "Lambader", "a tall floor lamp with a cream shade"),
    ("puf", "hepsi", 12, False, "Puf", "an orange round pouf"),
    ("buyukbitki", "hepsi", 18, False, "Büyük bitki", "a tall leafy monstera plant in a white pot"),
    ("bitki", "hepsi", 15, False, "Saksı bitkisi", "a small potted plant in a terracotta pot"),
    ("sarkitbitki", "hepsi", 16, False, "Asma bitki", "a hanging plant in a macrame holder"),
    ("kaktus", "hepsi", 10, False, "Kaktüs", "a small cactus with a pink flower in an orange pot"),
    ("oyunrafi", "salon", 30, False, "Oyuncak rafı", "a shelf full of toys, balls and building blocks"),
    ("kediyatagi", "hepsi", 18, False, "Kedi yatağı", "a round pink pet bed"),
    ("kediagaci", "salon", 18, False, "Kedi ağacı", "a cat tree scratching post with platforms"),
    ("akvaryum", "salon", 24, False, "Akvaryum", "a small fish tank with two orange fish and plants"),
    ("piyano", "salon", 32, False, "Piyano", "a white upright piano"),
    ("somine", "salon", 34, False, "Şömine", "a cozy fireplace with a warm fire and stockings"),
    ("oyunkonsolu", "hepsi", 12, False, "Oyun konsolu", "a game console with two controllers"),
    ("vazo", "hepsi", 9, False, "Lale vazosu", "a glass vase with pink tulips"),
    ("duvarsaati", "hepsi", 10, False, "Duvar saati", "a round wall clock shaped like a cat face, without numbers"),
    ("kuskafesi", "salon", 14, False, "Kuş kafesi", "a white bird cage with a small yellow bird inside"),
    ("disko", "hepsi", 14, False, "Disko topu", "a lilac disco ball hanging from a string"),
    ("sarkit", "hepsi", 12, False, "Sarkıt lamba", "a hanging pendant ceiling lamp with a cream shade"),
    ("perilamba", "hepsi", 60, False, "Peri ışıkları", "a string of warm fairy lights hanging in a gentle curve"),
    ("tablo", "hepsi", 18, False, "Tablo", "a framed painting of flowers and a heart"),
    ("cerceve", "hepsi", 18, False, "Manzara tablosu", "a framed painting of green hills and a sun"),
    ("ayi", "hepsi", 12, False, "Oyuncak ayı", "a soft brown teddy bear sitting"),
    ("top", "hepsi", 8, False, "Top", "a red and white beach ball"),

    # --- bahçe ve havuz
    ("sezlong", "bahce", 24, False, "Şezlong", "a wooden beach deck chair with pink fabric"),
    ("semsiye", "bahce", 34, False, "Şemsiye", "a white and pink beach umbrella standing on a pole"),
    ("flamingo", "bahce", 22, False, "Flamingo simit", "an inflatable pink flamingo pool float"),
    ("simit", "bahce", 15, False, "Deniz simidi", "a striped inflatable swim ring"),
    ("palmiye", "bahce", 26, False, "Palmiye", "a palm tree with coconuts"),
    ("kalpbalon", "hepsi", 10, False, "Kalp balon", "a pink heart shaped balloon on a string"),
    ("buzkutusu", "bahce", 14, False, "Buz kutusu", "a yellow picnic cooler box"),
    ("dondurma", "hepsi", 7, False, "Dondurma", "an ice cream cone with pink and vanilla scoops"),
    ("kaydirak", "bahce", 30, False, "Kaydırak", "a small pastel playground slide"),
    ("salincak", "bahce", 30, False, "Salıncak", "a wooden garden swing with ropes and flowers"),
    ("trambolin", "bahce", 34, False, "Trambolin", "a round trampoline with a safety net in pastel colors"),
    ("kumkovasi", "bahce", 8, False, "Kum kovası", "a sand bucket with a little shovel"),
    ("mangal", "bahce", 18, False, "Mangal", "a small round barbecue grill"),
    ("cicektarhi", "bahce", 30, False, "Çiçek tarhı", "a wooden flower box full of colorful tulips and daisies"),
    ("agac", "bahce", 34, False, "Ağaç", "a round fluffy green tree with apples"),
    ("cit", "bahce", 40, False, "Çit", "a short white picket fence section"),
    ("kopekkulubesi", "bahce", 22, False, "Köpek kulübesi", "a red wooden dog house"),
    ("bisiklet", "bahce", 26, False, "Bisiklet", "a pastel kids bicycle with a basket of flowers"),
    ("cadir", "hepsi", 28, False, "Oyun çadırı", "a cream teepee play tent with bunting flags"),
    ("limonatastandi", "bahce", 32, False, "Limonata standı", "a wooden lemonade stand with a striped awning, no letters"),
    ("gokkusagi", "bahce", 40, False, "Gökkuşağı", "a pastel rainbow arch with fluffy clouds at both ends"),
    ("piknik", "bahce", 34, True, "Piknik örtüsü", "a red and white checkered picnic blanket with a basket, seen from above"),
]

CHARACTERS = [
    ("kiz1", 26, "Mor örgülü kız", "a little girl with a long lavender braid, light skin, wearing a pink hoodie, light blue jeans and white sneakers"),
    ("kiz2", 26, "Kıvırcık saçlı kız", "a little girl with big curly black hair in a puff with a yellow bow, dark brown skin, wearing a yellow dress and pink sandals"),
    ("kiz3", 26, "Pembe saçlı kız", "a little girl with a short pink bob haircut, fair skin, wearing a star print t-shirt, a lilac skirt and white boots"),
    ("kiz4", 26, "Topuzlu kız", "a little girl with two blonde space buns, light skin, wearing mint overalls with a white shirt and yellow shoes"),
    ("kiz5", 26, "Kızıl saçlı kız", "a little girl with long wavy red hair and freckles, wearing a green dress with a white collar and red shoes"),
    ("kiz6", 26, "Prenses kız", "a little girl princess with long brown hair and a small golden tiara, medium tan skin, wearing a puffy lilac ball gown"),
    ("kiz7", 26, "Pop yıldızı kız", "a little girl pop star with a high purple ponytail, light skin, wearing a sparkly silver jacket, a pink skirt and holding nothing"),
    ("oglan1", 26, "Kahverengi saçlı oğlan", "a little boy with short brown hair, light skin, wearing a blue sweater, khaki shorts and sneakers"),
    ("oglan2", 26, "Kıvırcık saçlı oğlan", "a little boy with short black curly hair, dark brown skin, wearing a green t-shirt with a dinosaur, jeans and orange sneakers"),
    ("oglan3", 26, "Şapkalı oğlan", "a little boy with straight black hair and a backwards yellow cap, light tan skin, wearing a striped shirt and shorts"),
    ("bebek1", 15, "Bebek", "a cute baby with a tiny curl of hair, wearing a pastel yellow onesie, sitting"),
    ("bebek2", 15, "Bebek (pembe)", "a cute baby girl with a pink headband, wearing a pink onesie, sitting"),
    ("anne", 34, "Anne", "a young mother with long brown hair, light skin, wearing a green dress and white sneakers"),
    ("baba", 34, "Baba", "a young father with short black hair and a short beard, light tan skin, wearing a blue striped shirt and jeans"),
    ("nine", 32, "Nine", "a kind grandmother with grey hair in a bun and round glasses, wearing a lilac cardigan and a long skirt"),
    ("dede", 32, "Dede", "a kind grandfather with white hair, a white mustache and glasses, wearing a brown vest and trousers"),
    ("ogretmen", 34, "Öğretmen", "a friendly young teacher with a brown ponytail, wearing a yellow sweater and blue skirt"),
]

PETS = [
    ("kedi", 14, "Turuncu kedi", "an orange tabby kitten"),
    ("kedi2", 14, "Beyaz kedi", "a fluffy white kitten with a pink bow"),
    ("kedi3", 14, "Gri kedi", "a grey kitten with stripes"),
    ("kopek", 15, "Köpek yavrusu", "a light brown puppy with floppy ears"),
    ("kopek2", 15, "Benekli köpek", "a white puppy with black spots"),
    ("tavsan", 12, "Tavşan", "a white bunny with long ears"),
    ("hamster", 9, "Hamster", "a round golden hamster"),
    ("papagan", 10, "Papağan", "a small green and yellow parrot"),
    ("kaplumbaga", 12, "Kaplumbağa", "a little green turtle"),
    ("ordekyavrusu", 9, "Ördek yavrusu", "a fluffy yellow duckling"),
    ("midilli", 22, "Midilli", "a little pastel pony with a rainbow mane"),
    ("panda", 14, "Panda", "a baby panda"),
]


STYLE_UI = (
    "Cute game button icon for a children's app, one bold simple symbol, flat vector art style with soft glossy shading, "
    "rounded friendly shapes, clean thick dark navy outline (#3D3553), bright cheerful pastel colors, front view, "
    "the symbol fills about 80 percent of the canvas and is perfectly centered, no button background, no text, "
    "no letters, no numbers, no logo, no watermark, plain solid pure white background (#FFFFFF)."
)
STYLE_CARD = (
    "Cute illustration for a children's game menu card, a small cheerful scene, flat vector art style with soft "
    "gentle shading, rounded friendly shapes, clean thick dark navy outline (#3D3553), soft pastel colors, "
    "centered composition with empty margin, no text, no letters, no logo, no watermark, plain solid pure white background (#FFFFFF)."
)
STYLE_WORD = (
    "Cute picture card illustration for a children's reading game, one clear simple subject that a 6 year old "
    "recognizes instantly, flat vector art style with soft gentle shading, rounded friendly shapes, clean thick dark "
    "navy outline (#3D3553), soft pastel colors, front view, centered with generous empty margin, no text, no letters, "
    "no numbers written, no logo, no watermark, plain solid pure white background (#FFFFFF)."
)
STYLE_STICKER = (
    "Cute kawaii die-cut sticker for a children's sticker album, flat vector art style with soft shading, big shiny "
    "eyes if it is a creature, clean thick dark navy outline (#3D3553) and a thick white sticker border around the "
    "whole shape, bright pastel colors, centered, no text, no logo, no watermark, plain solid light grey background (#EEEEEE)."
)
STYLE_BG = (
    "Wide cozy background illustration for a children's game screen, flat vector art style with soft gentle shading, "
    "soft pastel colors, calm and not busy, gentle details only near the edges so the center stays clean, "
    "no characters, no people, no text, no letters, no logo, no watermark, full bleed scene filling the whole frame."
)

UI = [
    # (kod, Türkçe ad, tarif, stil)
    ("ui_oyun_sesibul", "Oyun kartı: Sesi Bul", "a big cute cartoon ear with sound waves and a few floating musical notes", STYLE_CARD),
    ("ui_oyun_birlestir", "Oyun kartı: Sesleri Birleştir", "two cute rounded toy blocks snapping together with a sparkle in the middle", STYLE_CARD),
    ("ui_oyun_kelimekur", "Oyun kartı: Kelime Kur", "three colorful puzzle pieces fitting together with little stars", STYLE_CARD),
    ("ui_oyun_oku", "Oyun kartı: Oku", "an open storybook with a rainbow and stars coming out of it", STYLE_CARD),
    ("ui_sahne", "Ana sayfa: Sahne", "a small theater stage with purple curtains, a golden crown and a microphone in spotlight", STYLE_CARD),
    ("ui_ev", "Ana sayfa: Ev", "a cute pastel pink two-storey house with a heart window and flowers", STYLE_CARD),
    ("ui_giydir", "Sahne: Giydir", "a pastel dress on a hanger next to a little crown and a bow", STYLE_CARD),
    ("ui_boyama", "Sahne: Boyama", "a paint palette with colorful paint blobs and a brush", STYLE_CARD),
    ("ui_geri", "Buton: Geri", "a rounded arrow pointing left", STYLE_UI),
    ("ui_hoparlor", "Buton: Dinle", "a cute speaker with sound waves", STYLE_UI),
    ("ui_basla", "Buton: Başla", "a big green play triangle", STYLE_UI),
    ("ui_anasayfa", "Buton: Ana sayfa", "a small cute house", STYLE_UI),
    ("ui_tekrar", "Buton: Tekrar", "a circular arrow going around", STYLE_UI),
    ("ui_hediye", "Hediye kutusu", "a pink gift box with a big golden bow", STYLE_UI),
    ("ui_yildiz", "Yıldız", "a shiny golden star with a cute face", STYLE_UI),
    ("ui_album", "Çıkartma albümü", "a sticker album book with hearts and stars on the cover", STYLE_UI),
    ("ui_birlestir", "Buton: Birleştir", "two links of a chain joining together with a sparkle", STYLE_UI),
    ("ui_dogru", "Buton: Doğru okudum", "a happy thumbs up hand", STYLE_UI),
    ("ui_cop", "Çöp kutusu", "a cute small trash bin", STYLE_UI),
    ("ui_oda_yatak", "Oda: Yatak odası", "a small cute bed", STYLE_UI),
    ("ui_oda_mutfak", "Oda: Mutfak", "a small cute cooking pot on a stove with steam", STYLE_UI),
    ("ui_oda_banyo", "Oda: Banyo", "a small cute bathtub with bubbles", STYLE_UI),
    ("ui_oda_salon", "Oda: Salon", "a small cute sofa", STYLE_UI),
    ("ui_oda_havuz", "Oda: Havuz bahçesi", "a small swimming pool with a pink flamingo float", STYLE_UI),
    ("ui_mod_tasi", "Mod: Taşı", "a cute open hand with four little arrows around it", STYLE_UI),
    ("ui_mod_boya", "Mod: Boya", "a paintbrush with a pink paint drop", STYLE_UI),
    ("ui_mod_tasarla", "Mod: Tasarla", "a wallpaper roll and a paint roller", STYLE_UI),
    ("ui_kat_kiyafet", "Kategori: Kıyafet", "a pink dress", STYLE_UI),
    ("ui_kat_sac", "Kategori: Saç", "a long purple braided hairstyle on its own, no face", STYLE_UI),
    ("ui_kat_ten", "Kategori: Ten rengi", "three round face shapes in light, medium and dark skin tones", STYLE_UI),
    ("ui_kat_taki", "Kategori: Taç ve takılar", "a golden tiara with pink gems", STYLE_UI),
    ("ui_kat_elde", "Kategori: Elindekiler", "a pink microphone", STYLE_UI),
    ("ui_kat_ayakkabi", "Kategori: Ayakkabı", "a pair of pink ballet shoes", STYLE_UI),
    ("ui_kat_hayvan", "Kategori: Evcil hayvan", "a cute cat face", STYLE_UI),
    ("ui_kat_fon", "Kategori: Arka plan", "a tiny stage with curtains and a star", STYLE_UI),
    ("ui_duvar", "Tasarım: Duvar", "a piece of wallpaper with little hearts", STYLE_UI),
    ("ui_zemin", "Tasarım: Zemin", "a square of wooden floor planks", STYLE_UI),
    ("ui_pencere", "Tasarım: Pencere", "a window with a sun and a cloud outside", STYLE_UI),
]

WORD_EN = {
    "at": "a cute horse", "et": "a piece of steak meat", "ana": "a smiling mother hugging her child",
    "anne": "a smiling mother hugging her little daughter", "ata": "a kind old grandfather with a cane",
    "nine": "a kind grandmother with grey hair in a bun", "nene": "a kind grandmother knitting",
    "nane": "a sprig of fresh mint leaves", "tane": "a single bean", "anten": "a TV antenna on a little roof",
    "tente": "a striped awning over a small shop window", "inat": "a little girl pouting with crossed arms",
    "tat": "a child happily licking a lollipop", "net": "a soccer goal net", "el": "an open waving hand",
    "lale": "a red tulip", "kale": "a fairy tale castle", "kalem": "a yellow pencil", "elma": "a red apple",
    "ekmek": "a loaf of bread", "kek": "a cupcake", "kalkan": "a knight's shield", "kedi": "a cat",
    "etek": "a pink skirt", "inek": "a cow", "kanat": "a pair of feathered wings", "ekin": "a field of golden wheat",
    "tekne": "a small boat", "iki": "two red apples side by side", "tilki": "a fox", "lamba": "a table lamp",
    "ayna": "a hand mirror", "ay": "a crescent moon", "ayı": "a bear", "un": "a bag of flour",
    "mum": "a lit candle", "muz": "a banana", "limon": "a lemon", "yumurta": "an egg", "oyun": "a pair of dice and a board game",
    "mutlu": "a very happy smiling child", "yatak": "a bed", "kayık": "a small rowing boat", "koltuk": "an armchair",
    "kutu": "a cardboard box", "maymun": "a monkey", "kum": "a pile of sand with a bucket", "okul": "a school building",
    "balık": "a fish", "balon": "a balloon", "bal": "a honey pot", "araba": "a car", "ördek": "a duck",
    "dede": "a grandfather with a white mustache", "saat": "an alarm clock", "su": "a glass of water",
    "simit": "a Turkish sesame bagel ring", "armut": "a pear", "domates": "a tomato", "sarı": "a yellow paint splash",
    "arı": "a bee", "burun": "a cute nose", "bebek": "a baby", "dondurma": "an ice cream cone",
    "kırmızı": "a red paint splash", "yıldız": "a star", "balina": "a whale", "kitap": "a book", "top": "a ball",
    "tuz": "a salt shaker", "göz": "a big eye", "güneş": "a smiling sun", "çiçek": "a flower", "çanta": "a backpack",
    "şapka": "a sun hat", "kuş": "a little bird", "köpek": "a dog", "ceket": "a jacket", "pasta": "a birthday cake",
    "gemi": "a ship", "patates": "a potato", "peynir": "a piece of cheese", "göl": "a small lake with ducks",
    "şemsiye": "an umbrella", "çorap": "a pair of socks", "böcek": "a ladybug", "uçak": "an airplane", "ev": "a house",
    "havuç": "a carrot", "fil": "an elephant", "horoz": "a rooster", "dağ": "a mountain", "ağaç": "a tree",
    "fare": "a mouse", "zürafa": "a giraffe", "hediye": "a gift box", "havuz": "a swimming pool", "otobüs": "a bus",
    "tavşan": "a rabbit", "tavuk": "a hen", "kaplumbağa": "a turtle",
}
TR = str.maketrans("çğıöşüÇĞİÖŞÜ", "cgiosuCGIOSU")


def word_code(w: str) -> str:
    return "kelime_" + w.translate(TR).lower()


STICKERS = ["a unicorn", "a panda", "a butterfly", "a ladybug", "a tropical fish", "a lion", "a frog", "an octopus",
            "a fox", "a koala", "a penguin", "an owl", "a bee", "a turtle", "a baby dinosaur", "a rainbow", "a sunflower",
            "a strawberry", "a watermelon slice", "a rocket", "a balloon", "a teddy bear", "a pink bow", "a lollipop",
            "a shooting star", "a dolphin", "a giraffe", "a bunny", "a whale", "a cherry blossom"]

BACKGROUNDS = [
    ("arka_ana", "Ana sayfa arka planı", "a soft pastel sky with fluffy clouds and gentle rolling hills at the bottom edge"),
    ("arka_sahne", "Konser sahnesi", "a cute concert stage with purple velvet curtains on the sides, spotlights and twinkling stars, empty stage floor"),
    ("arka_kale", "Kale arka planı", "a pink fairy tale castle on a hill far in the background, flowers along the bottom edge"),
    ("arka_gece", "Gece arka planı", "a dreamy night sky with a big moon and stars over soft hills"),
]


# ------------------------------------------------------------ oda yüzeyleri (duvar, zemin, bahçe)
STYLE_TILE = (
    "Seamless repeating square texture tile for a children's dollhouse game, flat vector art style with very soft gentle "
    "shading, soft pastel colors, the pattern fills the WHOLE square edge to edge and tiles perfectly with no visible seams "
    "when repeated left-right and up-down, straight-on flat view with no perspective, no furniture, no objects, no people, "
    "no outline frame, no border, no vignette, no text, no letters, no logo, no watermark."
)
WALLPAPERS = [
    ("duvar_01", "Pembe puantiyeli duvar kâğıdı", "soft blush pink wallpaper with small white polka dots"),
    ("duvar_02", "Lila çizgili duvar kâğıdı", "lilac and cream vertical stripes wallpaper"),
    ("duvar_03", "Nane yeşili yonca desenli", "mint green wallpaper with tiny white four-leaf clovers"),
    ("duvar_04", "Gökyüzü ve bulutlar", "pale sky blue wallpaper with small fluffy white clouds"),
    ("duvar_05", "Yıldızlı gece mavisi", "dusty navy blue wallpaper with tiny golden stars and little moons"),
    ("duvar_06", "Küçük kalpler", "cream wallpaper with small pink and red hearts in a regular pattern"),
    ("duvar_07", "Çiçekli bahar", "butter yellow wallpaper with small pastel flowers and leaves"),
    ("duvar_08", "Gökkuşağı yaylar", "white wallpaper with small pastel rainbow arches in a regular pattern"),
    ("duvar_09", "Pembe ahşap lambri", "light pink painted wooden wall panels, vertical planks"),
    ("duvar_10", "Beyaz tuğla", "soft white painted brick wall with gentle cream mortar"),
    ("duvar_11", "Mutfak fayansı", "mint and white small square kitchen wall tiles in a checker pattern"),
    ("duvar_12", "Banyo balık pulu fayans", "pale aqua fish scale bathroom wall tiles"),
]
FLOORTILES = [
    ("zemin_01", "Açık meşe parke", "light honey oak wooden floor planks in a straight pattern, top-down view"),
    ("zemin_02", "Balıksırtı parke", "warm light wooden herringbone parquet floor, top-down view"),
    ("zemin_03", "Beyaz ahşap", "whitewashed pale wooden floor planks, top-down view"),
    ("zemin_04", "Siyah beyaz dama", "soft charcoal and cream checkerboard floor tiles, top-down view"),
    ("zemin_05", "Pembe beyaz dama", "blush pink and white checkerboard floor tiles, top-down view"),
    ("zemin_06", "Banyo fayansı", "small white hexagon bathroom floor tiles with light grey grout, top-down view"),
    ("zemin_07", "Mutfak karosu", "terracotta and cream patterned kitchen floor tiles, top-down view"),
    ("zemin_08", "Yumuşak halıfleks", "soft lilac fluffy carpet floor texture, top-down view"),
    ("zemin_09", "Mermer", "white marble floor with very soft pink veins, top-down view"),
    ("zemin_10", "Çim", "soft green lawn grass with a few tiny daisies, top-down view, for the garden"),
]
OUTDOOR = [
    ("havuz_su", "Havuz suyu (kare, kenarsız döşeme)", "sparkling turquoise swimming pool water with soft white light ripples, top-down view", STYLE_TILE),
    ("bahce_manzara", "Bahçe manzarası (16:9, havuz odasının arkası)",
     "a sunny garden view behind a swimming pool: pastel blue sky with a few soft clouds at the top, a low white wooden "
     "fence across the middle, green bushes, a few trees and flower beds along the fence, empty grass in front, the "
     "left and right edges continue the same scene so it can repeat side by side", None),
]
# Pencere ve kapılar: duvara/yere yerleştirilen eşyalar. (kod, Türkçe, tarif)
WINDOWS = [
    ("pencere_01", "Beyaz çift kanatlı pencere", "a white double casement window with a blue sky and one cloud visible through the glass"),
    ("pencere_02", "Kemerli pencere", "a tall arched white window with thin muntins and pale sky behind the glass"),
    ("pencere_03", "Yuvarlak pencere", "a round porthole style window with a pink wooden frame and blue sky inside"),
    ("pencere_04", "Perdeli pencere", "a white window with short pink gingham curtains tied on both sides and a flower box below"),
    ("pencere_05", "Gece penceresi", "a white window showing a dark blue night sky with a crescent moon and stars"),
    ("pencere_06", "Büyük cam kapı/pencere", "a wide three-panel white framed window with green garden trees visible outside"),
]
DOORS = [
    ("kapi_01", "Beyaz panel kapı", "a closed white panel interior door with a round gold doorknob"),
    ("kapi_02", "Pembe kemerli kapı", "a closed pastel pink arched wooden door with a small heart window and gold knob"),
    ("kapi_03", "Mint ahşap kapı", "a closed mint green wooden plank door with a brass handle"),
    ("kapi_04", "Bahçe cam kapısı", "a closed white French door with glass panes showing a sunny garden"),
]
# Açılan eşyaların içinden çıkan kelime resimleri (gerçek boyları scripts/sizes.py'de).
INSIDE_WORDS = ["kelime_" + w for w in ["elma", "muz", "armut", "simit", "kek", "peynir", "limon", "havuc", "yumurta", "pasta", "dondurma",
                "ekmek", "patates", "et", "ceket", "etek", "corap", "sapka", "canta", "semsiye", "top", "balon", "ucak", "gemi", "araba",
                "kitap", "kalem", "saat", "mum", "lamba"]]

# Karakter pozları: oturan ve uyuyan hâller (oyun bunları varsa kullanır, yoksa ayakta resmi döndürür/keser).
POSE_TEXT = {
    "otur": "sitting on an invisible chair seen straight from the front, knees bent, lower legs hanging down, hands resting on the lap, happy smile",
    "yat": "lying flat on their back asleep, seen from the side, the whole body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow",
}
POSES = []  # (kod, Türkçe, tarif)


def pose_style(st: str) -> str:
    """Karakter stilinden 'ayakta dik dur' kısmını çıkarır (poz isteklerinde çelişmesin)."""
    return re.sub(r"standing straight[^,]*, arms relaxed[^,]*, feet together[^,]*, ", "", st)

for _c, _w, _tr, _en in CHARACTERS:
    for _k, _t in POSE_TEXT.items():
        POSES.append((f"{_c}_{_k}", f"{_tr} ({'oturuyor' if _k == 'otur' else 'uyuyor'})", f"{_en.removeprefix('a ')}, {_t}"))


# Açılan eşyaların içi (oyunda kapaklar açılınca arkada görünür; eşyalar rafların üstüne dizilir).
INTERIORS = [
    ("ic_buzdolabi", "Buzdolabının içi", "the inside of an open fridge seen straight from the front: bright white inner walls, a soft warm light at the top, three empty clear glass shelves at even heights, two empty vegetable drawers at the bottom"),
    ("ic_dolap", "Gardırobun içi", "the inside of an open pastel wardrobe seen straight from the front: light wooden back wall, an empty wooden hanging rail near the top, two empty wooden shelves below"),
    ("ic_firin", "Fırının içi", "the inside of an open oven seen straight from the front: dark warm brown inner walls, a soft orange glow at the bottom, two empty metal racks"),
    ("ic_sandik", "Oyuncak sandığının içi", "the inside of an open wooden toy chest seen straight from the front: warm yellow painted inner walls with little stars, empty"),
    ("ic_raf", "Mutfak dolabının içi", "the inside of an open cream kitchen cupboard seen straight from the front: light inner walls, three empty wooden shelves"),
    ("ic_banyo", "Banyo dolabının içi", "the inside of an open white bathroom cabinet seen straight from the front: pale aqua inner walls, three empty glass shelves"),
    ("ic_cekmece", "Çekmecenin içi", "the inside of an open wooden drawer seen from the front and slightly above: light wood, empty"),
]

# Ev haritası parçaları: (kod, Türkçe, tarif, en-boy)
MAP = [
    ("arka_harita", "Harita arka planı (16:9)",
     "a sunny pastel landscape seen from the front: soft blue sky with a few fluffy clouds and a small sun in the "
     "top right corner, far away gentle green rolling hills with tiny round trees, a wide flat light green lawn filling the "
     "bottom third, a narrow light stone garden path along the very bottom edge, the middle of the picture is open empty "
     "lawn and sky with no house and no buildings so a house can be placed there", "Widescreen (16:9)"),
    ("harita_cati", "Evin çatısı",
     "a wide cute pastel pink tiled dollhouse roof seen straight from the front, a symmetrical triangle gable that is about "
     "three times wider than it is tall, scalloped roof tiles, a small round attic window in the center top, a little brick "
     "chimney on the right side with a tiny puff of white smoke, white trim along the bottom edge, nothing below the roof",
     "Widescreen (16:9)"),
    ("harita_tabela", "İsim tabelası (boş)",
     "a cute blank wooden name sign board with rounded corners hanging from two short ropes, cream painted face with a "
     "thin pink border, two small flowers on the top corners, the board face is completely empty with no writing",
     "Square (1:1)"),
    ("harita_cali", "Önde çalı ve çiçek şeridi",
     "a long low horizontal row of round green bushes with small pink, yellow and white flowers between them, like a "
     "garden border strip, the row fills the full width from left edge to right edge, very low and flat, nothing above it",
     "Widescreen (16:9)"),
    ("harita_agac", "Bahçe ağacı",
     "a single cute round fluffy green tree with a short brown trunk and a few pink blossoms in the crown",
     "Square (1:1)"),
]

SURFACES = WALLPAPERS + FLOORTILES + [(c, tr, en) for c, tr, en, _s in OUTDOOR]

# ------------------------------------------------------------ toplu üretim
SHEET_LEAD = ("2D flat vector cartoon sticker sheet, NOT a photo: {n} completely separate items arranged in a neat {grid} grid "
              "with wide empty white space between them, every item fully visible, none of the items touching or overlapping, "
              "all items drawn at a similar size and in the same consistent style. The items in order, left to right and top to bottom: ")


def sheets(entries, size, cols, style, prefix):
    """entries: [(kod, tarif)] -> [(set_kodu, [kodlar], istek)]"""
    out = []
    for i in range(0, len(entries), size):
        chunk = entries[i:i + size]
        rows = (len(chunk) + cols - 1) // cols
        grid = f"{rows} by {cols}" if rows > 1 else f"1 by {len(chunk)}"
        items = "; ".join(f"{k + 1}) {en}" for k, (_c, en) in enumerate(chunk))
        code = f"set_{prefix}_{i // size + 1:02d}"
        text = f"{code} — " + SHEET_LEAD.format(n=len(chunk), grid=grid) + items + ". " + style
        out.append((code, [c for c, _ in chunk], text))
    return out


# ------------------------------------------------------------ çeşit aileleri
# (aile, oda, genişlik, yere_serili, Türkçe ad, [çeşitler]); her ailede ilk FREE çeşit bedava,
# gerisi kilitli: Defne 2 okuma sorusunu doğru yapınca açılır. Kod: <aile>_<sıra> (ör. buzdolabi_05).
FREE = 2
VARIANTS = [
    # yatak odası
    ("v_yatak", "yatak", 46, False, "Yatak", [
        "a simple wooden single bed with a white blanket", "a single bed with a blue blanket with stars",
        "a pink princess bed with a heart shaped headboard", "a white bed with a cloud shaped headboard and a rainbow blanket",
        "a lilac bed with a crescent moon headboard and star pillows", "a pastel car shaped bed for kids",
        "a fairy tale bed shaped like a castle with tiny towers", "a golden royal bed with a velvet canopy and tassels"]),
    ("v_dolap", "yatak", 24, False, "Gardırop", [
        "a simple white two-door wardrobe", "a light wooden wardrobe with round knobs",
        "a mint wardrobe with heart shaped door handles", "a lilac wardrobe with a mirror door",
        "a pink wardrobe with a scalloped top and flower decorations", "a golden princess wardrobe with crystal knobs"]),
    ("v_makyaj", "yatak", 30, False, "Makyaj masası", [
        "a simple white vanity table with a round mirror", "a wooden vanity table with a square mirror",
        "a pink vanity table with a heart mirror", "a lilac vanity with a mirror surrounded by light bulbs and perfume bottles",
        "a white vanity with a big shell shaped mirror and pearls", "a golden princess vanity with a crown shaped mirror"]),
    ("v_masa", "yatak", 32, False, "Çalışma masası", [
        "a simple white study desk with a chair", "a wooden study desk with a desk lamp",
        "a pink desk with a laptop and a cat lamp", "a lilac gaming desk with a monitor and colorful lights",
        "a mint desk with a globe, books and a pencil cup"]),
    ("v_oturak", "yatak", 18, False, "Koltuk ve puf", [
        "a simple round cream pouf", "a light blue bean bag",
        "a pink furry heart shaped chair", "a white hanging egg chair with a pink cushion",
        "a lilac cloud shaped armchair", "a golden princess throne chair with pink velvet"]),
    ("v_lamba", "hepsi", 10, False, "Lamba", [
        "a simple white table lamp", "a mushroom shaped night lamp",
        "a moon shaped lamp", "a cute bunny shaped lamp", "a lava lamp with pink and purple blobs", "a crystal chandelier"]),
    ("v_hali", "hepsi", 42, True, "Halı", [
        "a round cream rug, seen from above", "an oval light blue rug, seen from above",
        "a heart shaped pink fluffy rug, seen from above", "a rainbow striped round rug, seen from above",
        "a bunny face shaped white rug, seen from above", "a cloud shaped lilac rug, seen from above",
        "a purple cow print oval rug, seen from above"]),
    ("v_oyuncak", "yatak", 10, False, "Oyuncak", [
        "a wooden toy train", "a rubber ball", "a rag doll with yarn hair", "a toy xylophone",
        "a plush unicorn", "a toy rocket", "a plush dinosaur", "a toy castle with flags", "a dollhouse with a pink roof"]),
    ("v_raf", "hepsi", 26, False, "Raf", [
        "a simple white wall shelf with books", "a wooden ladder shelf with plants",
        "a cloud shaped wall shelf with tiny toys", "a house shaped shelf with dolls", "a rainbow shaped bookshelf full of books"]),
    ("v_ayna", "hepsi", 14, False, "Ayna", [
        "a simple round wall mirror", "a tall standing mirror with a wooden frame",
        "a wavy lilac mirror", "a heart shaped pink mirror", "a golden ornate princess mirror"]),
    # mutfak
    ("buzdolabi", "mutfak", 22, False, "Buzdolabı", [
        "a simple white two-door fridge", "a light grey fridge with a freezer on top",
        "a mint green retro rounded fridge with a silver handle", "a pastel pink retro fridge with cute magnets",
        "a lilac fridge with a calendar and sticky notes on it", "a butter yellow double-door fridge with a water dispenser",
        "a sparkly holographic fridge with glitter", "a big double-door fridge with a smart screen and an ice maker"]),
    ("v_ocak", "mutfak", 26, False, "Ocak ve fırın", [
        "a simple white stove with an oven", "a cream stove with a pink pot on top",
        "a mint retro stove with knobs", "a lilac stove with a frying pan and pancakes",
        "a big red restaurant oven with six burners", "a pizza oven made of bricks"]),
    ("v_tezgah", "mutfak", 44, False, "Mutfak dolabı", [
        "a simple white kitchen counter with a sink", "a wooden kitchen counter with drawers",
        "a mint kitchen counter with a sink and plants", "a pink kitchen counter with hanging utensils",
        "a lilac kitchen island with bar stools", "a cream kitchen counter with a tiled backsplash and spice jars"]),
    ("v_masa_mutfak", "mutfak", 32, False, "Yemek masası", [
        "a simple white table", "a wooden table with a vase", "a round pink table with a cake",
        "a long wooden table with a checkered tablecloth", "a glass table with rainbow legs"]),
    ("v_sandalye", "mutfak", 12, False, "Sandalye", [
        "a simple white chair", "a wooden chair", "a pink chair with a heart back",
        "a mint bar stool", "a yellow chair with a flower cushion", "a lilac velvet chair"]),
    ("v_alet", "mutfak", 11, False, "Mutfak aleti", [
        "a white kettle", "a toaster", "a blender with a smoothie", "a mint stand mixer",
        "a lilac microwave", "a coffee machine with a cup", "a waffle maker with a waffle", "a cotton candy machine",
        "a popcorn machine full of popcorn", "an ice cream machine"]),
    ("v_yemek", "mutfak", 9, False, "Yiyecek", [
        "a bowl of soup", "a plate of spaghetti", "a stack of pancakes with syrup", "a slice of watermelon",
        "a basket of muffins", "a plate of sushi", "a bowl of fruit salad", "a donut with sprinkles",
        "a big rainbow layer cake", "a bowl of popcorn", "a milkshake with a cherry", "a box of macarons"]),
    ("v_tabak", "mutfak", 26, False, "Tabak rafı", [
        "a shelf with white plates", "a shelf with pink cups", "a glass cabinet with colorful bowls",
        "a hanging rack with pots and pans", "a jar shelf with cookies and candies"]),
    # banyo
    ("v_kuvet", "banyo", 46, False, "Küvet", [
        "a simple white bathtub", "a white bathtub with bubbles", "a pink bathtub with golden feet",
        "a round wooden hot tub", "a seashell shaped bathtub", "a heart shaped jacuzzi with bubbles and rose petals"]),
    ("v_lavabo", "banyo", 22, False, "Lavabo", [
        "a simple white sink", "a sink with a round mirror", "a pink sink with a heart mirror",
        "a wooden sink cabinet with plants", "a seashell sink with a pearl mirror", "a golden princess sink"]),
    ("v_dus", "banyo", 26, False, "Duş", [
        "a simple glass shower", "a shower with a blue curtain", "a shower with a rainbow curtain", "a rain shower with a big round head"]),
    ("v_tuvalet", "banyo", 18, False, "Tuvalet", [
        "a simple white toilet", "a toilet with a wooden seat", "a pink toilet with a fluffy cover", "a golden toilet"]),
    ("v_banyo_aksesuar", "banyo", 10, False, "Banyo aksesuarı", [
        "a towel rack with a white towel", "a laundry basket", "a cup with toothbrushes", "a bath sponge",
        "a rubber duck family", "a bath bomb box", "a fluffy pink bathrobe", "a shelf of colorful shampoo bottles",
        "a bubble machine", "a robot vacuum"]),
    # salon
    ("v_kanepe", "salon", 46, False, "Kanepe", [
        "a simple grey sofa", "a beige sofa with pillows", "a mint velvet sofa", "a pink sofa with heart pillows",
        "a lilac L-shaped sofa", "a yellow retro sofa", "a cloud shaped white sofa", "a golden royal sofa with tassels"]),
    ("v_koltuk", "salon", 22, False, "Koltuk", [
        "a simple grey armchair", "a wooden rocking chair", "a pink round armchair", "a mint egg chair",
        "a yellow bean bag", "a lilac swing chair"]),
    ("v_tv", "salon", 30, False, "Televizyon", [
        "a small TV on a stand", "a flat TV on a wooden cabinet", "a retro pink TV with antennas",
        "a big TV with speakers", "a home cinema with a projector screen"]),
    ("v_sehpa", "salon", 24, False, "Sehpa", [
        "a simple round coffee table", "a wooden coffee table with books", "a glass coffee table",
        "a pink heart shaped table with tea set", "a marble table with flowers"]),
    ("v_bitki", "hepsi", 14, False, "Bitki", [
        "a small green plant in a pot", "a cactus", "a tall monstera plant", "a snake plant", "a pot of sunflowers",
        "a pot of pink tulips", "a little lemon tree", "a hanging ivy plant", "a bonsai tree"]),
    ("v_tablo", "hepsi", 16, False, "Tablo", [
        "a framed flower painting", "a framed cat painting", "a framed rainbow painting", "a framed sea painting",
        "a framed space painting with planets", "a framed family portrait drawing", "a framed unicorn painting"]),
    ("v_muzik", "salon", 24, False, "Müzik aleti", [
        "a small guitar", "a toy drum set", "a white piano", "a pink keyboard", "a golden harp", "a karaoke microphone stand"]),
    ("v_evcil_esya", "hepsi", 16, False, "Evcil hayvan eşyası", [
        "a round pet bed", "a cat tree", "a fish tank", "a bird cage", "a dog house", "a hamster cage with a wheel"]),
    # bahçe
    ("v_havuz_oyuncak", "bahce", 18, False, "Havuz oyuncağı", [
        "a striped swim ring", "a beach ball", "an inflatable duck float", "an inflatable unicorn float",
        "an inflatable donut float", "an inflatable swan float", "an inflatable watermelon float", "a water slide"]),
    ("v_bahce_mobilya", "bahce", 26, False, "Bahçe mobilyası", [
        "a wooden bench", "a deck chair", "a hammock between two posts", "a garden swing",
        "a picnic table", "a big parasol", "a rattan egg chair"]),
    ("v_oyun_parki", "bahce", 30, False, "Oyun parkı", [
        "a small slide", "a sandbox with toys", "a seesaw", "a trampoline", "a playhouse", "a big castle playground"]),
    ("v_bahce_bitki", "bahce", 24, False, "Bahçe bitkisi", [
        "a flower bed with tulips", "a round bush", "an apple tree", "a palm tree", "a cherry blossom tree",
        "a sunflower patch", "a vegetable garden box", "a rainbow rose bush"]),
]

ROOM_TR = {"yatak": "Yatak odası", "mutfak": "Mutfak", "banyo": "Banyo", "salon": "Salon", "bahce": "Bahçe ve havuz", "hepsi": "Her odada"}
ROOM_GAME = {"yatak": ["yatak"], "mutfak": ["mutfak"], "banyo": ["banyo"], "salon": ["salon"], "bahce": ["havuz"], "hepsi": None}
# İkinci aşama odaları (scripts/catalog_rooms2.py)
import sys as _sys  # noqa: E402
_sys.path.insert(0, str(ROOT / 'scripts'))
import catalog_rooms2 as R2  # noqa: E402
for _r, (_tr, _icon) in R2.NEW_ROOMS.items():
    ROOM_TR[_r] = _tr
    ROOM_GAME[_r] = [_r]
NEW_ROOM_IDS = list(R2.NEW_ROOMS)
ROOM_TR["parti"] = "Parti"
ROOM_GAME["parti"] = list(R2.PARTI_ROOMS)
GROUP_IDS = NEW_ROOM_IDS + list(R2.EXTRA_GROUPS)


LEAD = "2D flat vector cartoon illustration, NOT a photo, simple clean shapes, no realistic textures, no photographic lighting, isolated on a plain white background, no room around it"


def prompt(code: str, subject: str, style: str) -> str:
    # Kod başta: Firefly indirilen dosyaya isteğin ilk kelimelerini koyar, kodu dosya adından tanırım.
    # Ardından hemen çizim stili gelir; Firefly baştaki kelimelere daha çok ağırlık veriyor.
    if style is STYLE_BG:
        return f"{code} — 2D flat vector cartoon background illustration, NOT a photo: {subject}. {style}"
    return f"{code} — {LEAD}: {subject}. {style}"


VAR_ROWS = [(f"{fam}_{i + 1:02d}", room, w, flat, f"{tr} {i + 1}" + (" (kilitli)" if i >= FREE else ""), en, i >= FREE)
            for fam, room, w, flat, tr, lst in VARIANTS for i, en in enumerate(lst)]
ITEMS_ALL = [(c, r, w, f, tr, en, False) for c, r, w, f, tr, en in ITEMS] + VAR_ROWS
# Yeni odaların eşyaları ve çeşit aileleri (eski sayfalar değişmesin diye ayrı listeler).
NEW_ROWS = [(c, r, 10, f, tr, en, False) for c, r, f, tr, en, _sz in R2.NEW_ITEMS]
NEW_VAR_ROWS = [(f"{fam}_{i + 1:02d}", room, 10, False, f"{tr} {i + 1}" + (" (kilitli)" if i >= FREE else ""), en, i >= FREE)
                for fam, room, tr, _sz, lst in R2.NEW_VARIANTS for i, en in enumerate(lst)]
ITEMS_ALL += NEW_ROWS + NEW_VAR_ROWS
# Yeni odaların düğme simgeleri
ROOM_ICONS2 = [(f"ui_oda_{r}", f"Oda: {tr}", icon) for r, (tr, icon) in R2.NEW_ROOMS.items()]


# Yan ve arka görünümler: oyundaki "çevir" düğmesi önden -> yandan -> arkadan gösterir.
VIEW_BASE = re.compile(r"^(buzdolabi_\d+|buzdolabi|retrobuzdolabi|dolap|v_dolap_\d+|sifonyer|komodin|kitaplik|oyuncaksandigi|tabakdolabi|firin|ocak|v_ocak_\d+|tezgah|v_tezgah_\d+|kanepe|kosekanepe|v_kanepe_\d+|koltuk|berjer|v_koltuk_\d+|sandalye|v_sandalye_\d+|yatak|yuvarlakyatak|cibinlikliyatak|ranza|v_yatak_\d+|tv|v_tv_\d+|piyano)$")
VIEW_TEXT = {
    "yan": "now seen exactly from the side in a flat side profile view, facing to the right",
    "arka": "now seen from directly behind, a flat back view showing only the back side",
}
VIEWS = []  # (kod, temel kod, Türkçe, tarif, karakter mi)
# Referans resimle düzenleme istekleri (yüklenen resmi değiştirir; bire bir aynı eşya/karakter kalır).
REF_TEXT = {
    "yan": "Show this exact same {what} from the side, in a flat side profile view facing to the right.",
    "arka": "Show this exact same {what} from behind, a flat back view.",
    "otur": "Show this exact same character sitting on an invisible chair, seen from the front, knees bent, lower legs hanging down, hands on the lap.",
    "yat": "Show this exact same character lying flat on their back asleep, seen from the side, body horizontal with the head on the left, eyes closed, peaceful smile, no bed, no pillow.",
}
REF_KEEP = (" Keep everything else identical: the same colors, the same shapes and details, the same clothes and hair, the same thick dark navy "
            "outline and flat cartoon style, the same size. Plain pure white background, nothing else in the picture.")


def ref_prompt(code: str, kind: str, what: str) -> str:
    return f"{code} — " + REF_TEXT[kind].format(what=what) + REF_KEEP

import firefly_plan as FP  # noqa: E402

for _c, _r, _w, _f, _tr, _en, _l in ITEMS_ALL:
    if VIEW_BASE.match(_c) or FP.TURN_NEW.match(_c):
        for _k, _t in VIEW_TEXT.items():
            VIEWS.append((f"{_c}_{_k}", _c, f"{_tr} ({'yandan' if _k == 'yan' else 'arkadan'})", f"{_en}, {_t}, same colors, same style and same size", False))
for _c, _w, _tr, _en in CHARACTERS:
    for _k, _t in VIEW_TEXT.items():
        VIEWS.append((f"{_c}_{_k}", _c, f"{_tr} ({'yandan' if _k == 'yan' else 'arkadan'})", f"a cute {_en.removeprefix('a ')}, standing, {_t}, the same hair and clothes", True))


def main():
    for code, *_ in ITEMS_ALL + [(c[0],) for c in CHARACTERS] + [(p[0],) for p in PETS]:
        assert code.replace("_", "").isalnum() and code.islower(), code
    words = [l.split("|")[0] for l in (ROOT / "src" / "content.ts").read_text().split("const RAW = `")[1].split("`;")[0].strip().splitlines()]
    missing = [w for w in words if w not in WORD_EN]
    assert not missing, f"kelime tarifi eksik: {missing}"
    codes = ([i[0] for i in ITEMS_ALL] + [c[0] for c in CHARACTERS] + [p[0] for p in PETS] + [u[0] for u in UI]
             + [word_code(w) for w in words] + [f"cikartma_{i + 1:02d}" for i in range(len(STICKERS))] + [b[0] for b in BACKGROUNDS] + ["uygulama_ikonu"]
             + [x[0] for x in SURFACES] + [x[0] for x in WINDOWS + DOORS] + [x[0] for x in MAP] + [c for c, _tr, _en in POSES] + [x[0] for x in INTERIORS] + [x[0] for x in VIEWS] + [x[0] for x in ROOM_ICONS2] + [x[0] for x in R2.DRESS_ITEMS] + R2.OUTFIT_CODES)
    assert len(codes) == len(set(codes)), "tekrarlanan kod"
    item_style = STYLE_ITEM.replace("one single isolated object, the whole object fully visible and centered with generous empty margin around it, ", "")
    char_style = STYLE_CHAR.replace("centered with generous empty margin, ", "")
    sets = []
    for room in ["yatak", "mutfak", "banyo", "salon", "bahce", "hepsi"]:
        # Eski sayfalar sabit kalsın (zaten üretildi): sadece ilk eşya listesi.
        sets += sheets([(c, en) for c, r, _w, _f, _tr, en in ITEMS if r == room], 9, 3, item_style, "esya_" + room)
    # Çeşit aileleri ayrı, yeni sayfalarda.
    for room in ["yatak", "mutfak", "banyo", "salon", "bahce", "hepsi"]:
        sets += sheets([(c, en) for c, r, _w, _f, _tr, en, _l in VAR_ROWS if r == room], 9, 3, item_style, "cesit_" + room)
    sets += sheets([(c, "a cute " + en.removeprefix("a ")) for c, _w, _tr, en in CHARACTERS], 4, 4, char_style, "karakter")
    sets += sheets([(c, en) for c, _w, _tr, en in PETS], 6, 3, STYLE_PET.replace("centered with generous empty margin, ", ""), "hayvan")
    sets += sheets([(c, en) for c, _tr, en, st in UI if st is STYLE_UI], 9, 3, STYLE_UI.replace("the symbol fills about 80 percent of the canvas and is perfectly centered, ", ""), "buton")
    sets += sheets([(c, en) for c, _tr, en, st in UI if st is STYLE_CARD], 4, 2, STYLE_CARD.replace("centered composition with empty margin, ", ""), "kart")
    sets += sheets([(word_code(w), WORD_EN[w]) for w in words], 9, 3, STYLE_WORD.replace("centered with generous empty margin, ", ""), "kelime")
    sets += sheets([(f"cikartma_{i + 1:02d}", en) for i, en in enumerate(STICKERS)], 9, 3, STYLE_STICKER.replace("centered, ", ""), "cikartma")
    sets += sheets([(c, en) for c, _tr, en in WINDOWS + DOORS], 10, 5, item_style, "yapi")
    sets += sheets([(c, "a cute " + en) for c, _tr, en in POSES], 4, 2, pose_style(char_style), "poz")
    # Yeni odalar, aileler, görünümler ve aksesuarlar için Firefly sayfaları: FIREFLY.md (scripts/firefly_plan.py)
    ff_sets, ff_md = FP.plan(sys.modules[__name__])
    sets += ff_sets
    (ROOT / "FIREFLY.md").write_text(ff_md)
    sets += sheets([(c, en) for c, _b, _tr, en, ch in VIEWS if not ch], 9, 3, item_style.replace("straight-on front view at eye level with no perspective distortion, ", "no perspective distortion, "), "gorunum")
    sets += sheets([(c, en) for c, _b, _tr, en, ch in VIEWS if ch], 4, 2, pose_style(char_style).replace("facing the viewer", ""), "gorunum_karakter")
    codes += [code for code, _c, _t in sets]
    (ROOT / "src" / "assets" / "codes.json").write_text(json.dumps(sorted(codes)) + "\n")
    (ROOT / "src" / "assets" / "sets.json").write_text(json.dumps({code: cs for code, cs, _t in sets}, indent=1) + "\n")

    catalog = []
    for code, room, w, flat, _tr, _en, lock in ITEMS_ALL:
        e = {"id": code, "w": w}
        if not ROOM_GAME[room] and code in R2.HEPSI_ROOMS:
            e["rooms"] = list(R2.HEPSI_ROOMS[code])
        if ROOM_GAME[room]:
            e["rooms"] = list(ROOM_GAME[room])
            for pat, extra in R2.ALSO_ROOMS:
                if re.match(pat, code):
                    e["rooms"] += [x for x in extra if x not in e["rooms"]]
        if flat:
            e["flat"] = True
        if lock:
            e["lock"] = True
        catalog.append(e)
    for code, *_ in WINDOWS:
        catalog.append({"id": code, "w": 14})
    for code, *_ in DOORS:
        catalog.append({"id": code, "w": 14})
    for code, w, *_ in CHARACTERS + PETS:
        catalog.append({"id": code, "w": w, "char": True})
    # Dolaptan, buzdolabından çıkan küçük eşyalar: kelime resimleri (menüde görünmez).
    for code in INSIDE_WORDS:
        catalog.append({"id": code, "w": 6, "hide": True})
    # Yan/arka görünümler menüde görünmez; boyları temel eşyanınkiyle aynıdır (scripts/sizes.py).
    for code, *_ in VIEWS:
        catalog.append({"id": code, "w": 10, "hide": True})
    (ROOT / "src" / "assets" / "items.json").write_text(json.dumps(catalog, ensure_ascii=False, indent=1) + "\n")

    out = []
    out.append("# Firefly görsel listesi\n")
    out.append(f"Toplam **{len(ITEMS_ALL)} eşya** ({len(VAR_ROWS)} tanesi çeşit ailelerinden, ilk {FREE} çeşit bedava, gerisi okuma sorusuyla açılır), **{len(CHARACTERS)} karakter**, **{len(PETS)} evcil hayvan**, **{len(UI)} buton/simge**, "
               f"**{len(words)} kelime resmi**, **{len(STICKERS)} çıkartma**, **{len(BACKGROUNDS)} arka plan** ve uygulama ikonu. "
               "Her isteği olduğu gibi kopyalayıp Firefly'a yapıştırın. Stil, arka plan, açı ve boyut bilgisi isteğin içinde.\n")
    out.append("""## Firefly'da her görsel için aynı ayarlar

| Ayar | Değer |
|---|---|
| Model | **Firefly Image** (Adobe'un kendi modeli, en yeni sürüm; ortak/partner modelleri seçmeyin) |
| Aspect ratio | **Square (1:1)** |
| Content type | **Art** (Sanat). **Photo seçili olmamalı**, yoksa gerçek fotoğraf çıkar |
| **Style reference** | `firefly-stil-referansi.png` dosyasını yükleyin, **Strength: yüksek** (en önemli ayar) |
| Visual intensity | düşük |
| Effects | varsa **Flat design** ya da **Vector look**, yoksa boş |
| Exclude from image (varsa) | `""" + EXCLUDE + """` |
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
""")


    out.append(f"""
## 🆕 Yeni odalar: {", ".join(R2.NEW_ROOMS[r][0] for r in NEW_ROOM_IDS)} ({len(NEW_ROWS) + len(NEW_VAR_ROWS) + len(ROOM_ICONS2)} istek)

Altı yeni oda ve eşyaları. Her odada temel eşyalar ve çeşit aileleri var (her ailede ilk {FREE} çeşit bedava, gerisi okuma
sorusuyla açılır). Ayarlar eşyalarla aynı: **Square (1:1)**, Art, Style reference yüklü, beyaz arka plan.
Toplu istekler (tek resimde birden çok görsel) **FIREFLY.md** dosyasında.
""")
    out.append("### Oda düğmeleri\n")
    for code, tr, en in ROOM_ICONS2:
        out.append(f"#### `{code}` — {tr}\n")
        out.append("```\n" + prompt(code, en, STYLE_UI) + "\n```\n")
    for room in GROUP_IDS:
        rows = [(c, tr, en) for c, r, _w, _f, tr, en, _l in NEW_ROWS + NEW_VAR_ROWS if r == room]
        out.append(f"### {R2.NEW_ROOMS[room][0] if room in R2.NEW_ROOMS else R2.EXTRA_GROUPS[room]} ({len(rows)} eşya)\n")
        out.append("| Kod | Eşya |\n|---|---|\n" + "\n".join(f"| `{c}` | {tr} |" for c, tr, _en in rows) + "\n")
        for code, tr, en in rows:
            out.append(f"#### `{code}` — {tr}\n")
            out.append("```\n" + prompt(code, en, STYLE_ITEM) + "\n```\n")
    out.append(f"""
## 🆕 Giydirme aksesuarları ({len(R2.DRESS_ITEMS)} istek)

Evdeki karakterlere takılan aksesuarlar (taç, gözlük, küpe, kolye, saat, eldeki eşya, çanta, ayakkabı, yüz süsü) **Square (1:1)**, beyaz arka plan; arka planı ben silerim. Ayakkabılar **tek tek** (tek ayakkabı, önden).
""")
    for code, tr, en in R2.DRESS_ITEMS:
        out.append(f"#### `{code}` — {tr}\n")
        out.append("```\n" + prompt(code, en, STYLE_ITEM) + "\n```\n")
    out.append(f"""
## 🆕 Yandan ve arkadan görünümler ({len(VIEWS)} istek)

### Bire bir aynı eşyayı/karakteri nasıl üretirsiniz

Yalnızca metinle istenirse Firefly her seferinde biraz farklı bir kanepe/karakter çizer. Aynısını elde etmenin yolu
**orijinal resmi yükleyip "bunu arkadan göster" diye düzenletmek**:

1. `referans.zip` içindeki ilgili resmi (ör. `referans/kanepe.png`) Firefly'a yükleyin. Bu resimler oyundaki resimlerin
   beyaz arka planlı hâlidir; kendi ürettiğiniz orijinal PNG'yi de kullanabilirsiniz.
2. Firefly'da **yüklenen resmi düzenleyebilen** bir yöntem seçin: resim düzenleme / "prompt ile düzenle" ya da referans resim
   kabul eden bir model (Firefly'daki iş ortağı modelleri bunu genelde Firefly Image'dan daha iyi yapar). Menü adları
   sürüme göre değişebilir; önemli olan modelin **yüklediğiniz resmi değiştirmesi**, yeni bir resim uydurmaması.
3. Aşağıdaki **"referans resimle"** isteğini yapıştırın. İstek kodla başlar; indirilen dosyanın adında kod kalırsa ben tanırım.
4. Sonuç farklıysa aynı isteği 2–3 kez deneyin, en benzeyeni seçin.

Yalnızca **Style reference** (stil referansı) yeterli olmaz: o sadece çizim tarzını taşır, eşyanın kendisini değil.
**Structure/Composition reference** de uygun değil: önden duruşu kopyalar, yandan ya da arkadan göstermez.

Oyunda eşyaya dokununca çıkan **🔄 Çevir** düğmesi eşyayı önden → yandan → arkadan gösterir; **⇋** sağa/sola çevirir.
Bunun için aynı eşyanın yandan (`_yan`) ve arkadan (`_arka`) resmi gerekir. Hangi eşyanın resmi gelirse onda çalışır.
- Kanepeler, koltuklar, sandalyeler, yataklar, televizyonlar, piyano ve bütün karakterler.
- Ayar: **Square (1:1)**.
- `_yan` resimlerinde eşya **sağa** baksın (sola bakanı oyun aynalayarak yapar).
- Toplu istekler aşağıda `set_gorunum_…` (9'lu eşya) ve `set_gorunum_karakter_…` (4'lü karakter) sayfalarında.
""")
    for code, base, tr, en, ch in VIEWS:
        out.append(f"### `{code}` — {tr}\n")
        out.append(f"**Önerilen — referans resimle:** `referans/{base}.png` dosyasını yükleyin, şunu yazın:\n")
        out.append("```\n" + ref_prompt(code, code.rsplit("_", 1)[1], "character" if ch else "piece of furniture") + "\n```\n")
        out.append("Referans yüklemeden (yalnızca metinle):\n")
        out.append("```\n" + prompt(code, en, pose_style(STYLE_CHAR).replace("facing the viewer", "") if ch else STYLE_ITEM.replace("straight-on front view at eye level with no perspective distortion, ", "no perspective distortion, ")) + "\n```\n")
    out.append(f"""
## 🆕 Açılan eşyaların içi ({len(INTERIORS)} istek)

Buzdolabı, gardırop, fırın gibi eşyalara dokununca kapakları açılır ve içi görünür; içindekiler raflara dizilir.
Bu resimler o iç görünümün arka planıdır (raflar boş olmalı, oyun eşyaları kendisi koyar). Yoksa oyun düz renkli bir iç çizer.
- **Aspect ratio: Landscape (4:3)**, Art, Style reference yüklü. Arka planını silmiyorum; resim kenardan kenara dolu olmalı.
""")
    for code, tr, en in INTERIORS:
        out.append(f"### `{code}` — {tr}\n")
        out.append("```\n" + prompt(code, en, STYLE_BG) + "\n```\n")
    out.append(f"""
## 🆕 Karakter pozları: oturan ve uyuyan hâller ({len(POSES)} istek)

Oyunda karakter sandalyeye bırakılınca oturur, yatağa bırakılınca uyur. Bu resimler yoksa oyun ayakta duran resmi
keserek ya da yatırarak gösterir; resimler gelince gerçek oturma ve uyuma pozları kullanılır.
- En iyi sonuç: karakterin ayakta duran resmini (`referans/kiz1.png` gibi) yükleyip **"referans resimle"** isteğini
  kullanın (nasıl yapılacağı "Yandan ve arkadan görünümler" bölümünün başında). Böylece yüz ve kıyafet aynı kalır.
- `_yat` resimlerinde karakter **yatay**, başı **solda** olmalı. Toplu istekler aşağıda `set_poz_…` sayfalarında (4'lü).
""")
    for code, tr, en in POSES:
        out.append(f"### `{code}` — {tr}\n")
        out.append(f"**Önerilen — referans resimle:** `referans/{code.rsplit('_', 1)[0]}.png` dosyasını yükleyin, şunu yazın:\n")
        out.append("```\n" + ref_prompt(code, code.rsplit("_", 1)[1], "character") + "\n```\n")
        out.append("Referans yüklemeden (yalnızca metinle):\n")
        out.append("```\n" + prompt(code, "a cute " + en, pose_style(STYLE_CHAR)) + "\n```\n")
    out.append(f"""
## 🆕 Ev haritası ({len(MAP)} istek)

Ev haritası (odaların seçildiği ekran) bu parçalardan kurulur: arkada manzara, odaların üstünde çatı, çatıda isim
tabelası (yazıyı oyun kendisi yazar), önde çalı şeridi ve yanda ağaç. Odaların içi oyundan canlı gösterilir; o yüzden
evin gövdesi istenmiyor. Her isteğin altında hangi **Aspect ratio**'nun seçileceği yazıyor.
`arka_harita` olduğu gibi kullanılır; diğerlerinin beyaz arka planını ben silerim.
""")
    for code, tr, en, ar in MAP:
        out.append(f"### `{code}` — {tr} · **{ar}**\n")
        body = prompt(code, en, STYLE_BG) if code.startswith("arka_") else prompt(code, en, STYLE_ITEM)
        out.append("```\n" + body + "\n```\n")
    out.append(f"""
## 🆕 Oda yüzeyleri: duvar kâğıtları, zeminler, bahçe ve havuz ({len(SURFACES)} istek)

Bunlar odanın **boş** zemini ve duvarıdır; içinde eşya olmamalı. Oyun bunları fayans gibi yan yana döşer.

- Ayarlar: **Square (1:1)**, **Art**, Style reference yüklü (bahçe manzarası hariç hepsi kare).
- `bahce_manzara` için **Widescreen (16:9)** seçin.
- Bunların arka planını silmiyorum; görsel kenardan kenara dolu olmalı (beyaz kenar, çerçeve olmasın).
- Firefly'da varsa **"Seamless pattern / Tileable"** efektini açın; yoksa istek zaten bunu söylüyor.
- Oyunda: Oda içinde sol menüdeki **Tasarla** düğmesinde duvar ve zemin seçeneği olarak çıkar. `zemin_10` (çim) ve `havuz_su`, `bahce_manzara` havuz bahçesinde kullanılır.
""")
    for code, tr, en in WALLPAPERS + FLOORTILES:
        out.append(f"### `{code}` — {tr}\n")
        out.append("```\n" + f"{code} — 2D flat vector cartoon seamless pattern, NOT a photo: {en}. {STYLE_TILE}" + "\n```\n")
    for code, tr, en, st in OUTDOOR:
        out.append(f"### `{code}` — {tr}\n")
        body = f"{code} — 2D flat vector cartoon seamless pattern, NOT a photo: {en}. {STYLE_TILE}" if st else prompt(code, en, STYLE_BG)
        out.append("```\n" + body + "\n```\n")
    out.append(f"""
## 🆕 Pencereler ve kapılar ({len(WINDOWS) + len(DOORS)} istek)

Eşya gibi üretilir (**Square 1:1**, beyaz arka plan; arka planı ben silerim). Pencereler duvara, kapılar yere oturur;
ikisi de oyunda sürüklenip yeri değiştirilebilir. Toplu istek: aşağıdaki `set_yapi_01` (10'lu sayfa).
""")
    for code, tr, en in WINDOWS + DOORS:
        out.append(f"### `{code}` — {tr}\n")
        out.append("```\n" + prompt(code, en, STYLE_ITEM) + "\n```\n")
    out.append(f"""
## Toplu üretim: çıkartma sayfaları ({len(sets)} istek)

Görselleri tek tek üretmek yerine **bir istekte 9 tane** (karakterlerde 4) üretebilirsiniz. Firefly hepsini aynı resimde,
aralarında boşluk bırakarak çizer; ben sayfayı otomatik keser, her parçaya doğru kodu veririm.

- Ayarlar aynı: **Square (1:1)**, **Art**, **Style reference** yüklü.
- Firefly bazen sırayı ya da sayıyı tutturamaz. Sayfada eksik, birleşik ya da fazla parça varsa yine yükleyin,
  kesip hangisinin ne olduğunu ben bakarak adlandırırım. Beğenmediğiniz tek parçayı aşağıdaki tekli istekle yeniden üretebilirsiniz.
- Kalite: tekli istek her eşyayı daha büyük ve detaylı çizer. Önemli eşyalar (yatak, kanepe, karakterler) için tekli,
  küçük eşyalar ve kelime resimleri için toplu üretim iyi bir denge.
""")
    new_sets = [x for x in sets if x[0].startswith(("set_cesit_", "set_yapi_", "set_poz_", "set_gorunum", "set_yeni_"))]
    old_sets = [x for x in sets if not x[0].startswith(("set_cesit_", "set_yapi_", "set_poz_", "set_gorunum", "set_yeni_"))]
    out.append(f"\n### 🆕 YENİ sayfalar: çeşit aileleri, pencere ve kapılar ({len(new_sets)} istek)\n")
    out.append("Bunlar yeni eklendi, henüz üretilmedi. Her ailede ilk 2 çeşit bedava, diğerleri oyunda okuma sorusuyla açılır.\n")
    for code, cs, text in new_sets:
        out.append(f"#### `{code}` — {len(cs)} görsel: {', '.join(cs)}\n")
        out.append("```\n" + text + "\n```\n")
    out.append(f"\n### ✅ Önceki sayfalar ({len(old_sets)} istek) — zaten üretildi, tekrar üretmeyin\n")
    for code, cs, text in old_sets:
        out.append(f"#### `{code}` — {len(cs)} görsel: {', '.join(cs)}\n")
        out.append("```\n" + text + "\n```\n")
    out.append("\n# Tekli istekler\n")

    def section(title, rows, style):
        out.append(f"\n## {title}\n")
        for code, tr, en in rows:
            out.append(f"### `{code}` — {tr}\n")
            out.append("```\n" + prompt(code, en, style) + "\n```\n")

    for room in ["yatak", "mutfak", "banyo", "salon", "bahce", "hepsi"]:
        new_codes = {x[0] for x in NEW_ROWS + NEW_VAR_ROWS}
        rows = [(c, tr, en) for c, r, _w, _f, tr, en, _l in ITEMS_ALL if r == room and c not in new_codes]
        section(f"Eşyalar: {ROOM_TR[room]} ({len(rows)})", rows, STYLE_ITEM)
    section(f"Karakterler ({len(CHARACTERS)})", [(c, tr, "a cute " + en.removeprefix("a ")) for c, _w, tr, en in CHARACTERS], STYLE_CHAR)
    section(f"Evcil hayvanlar ({len(PETS)})", [(c, tr, en) for c, _w, tr, en in PETS], STYLE_PET)

    out.append(f"\n## Butonlar ve simgeler ({len(UI)})\n")
    out.append("Oyundaki emoji ve çizim simgelerin yerine geçer. `ui_oyun_…`, `ui_sahne`, `ui_ev`, `ui_giydir`, `ui_boyama` kart resmidir; diğerleri küçük buton simgesidir.\n")
    for code, tr, en, style in UI:
        out.append(f"### `{code}` — {tr}\n")
        out.append("```\n" + prompt(code, en, style) + "\n```\n")

    section(f"Okuma oyunu kelime resimleri ({len(words)})", [(word_code(w), w, WORD_EN[w]) for w in words], STYLE_WORD)
    section(f"Çıkartmalar ({len(STICKERS)})", [(f"cikartma_{i + 1:02d}", en.split(' ', 1)[1], en) for i, en in enumerate(STICKERS)], STYLE_STICKER)

    out.append(f"\n## Arka planlar ({len(BACKGROUNDS)})\n")
    out.append("Bunlar için **Aspect ratio: Widescreen (16:9)** seçin. Arka planları silmiyorum, olduğu gibi kullanılır.\n")
    for code, tr, en in BACKGROUNDS:
        out.append(f"### `{code}` — {tr}\n")
        out.append("```\n" + prompt(code, en, STYLE_BG) + "\n```\n")
    out.append("### `uygulama_ikonu` — Uygulama ikonu (Square 1:1)\n")
    out.append("```\nuygulama_ikonu — a cute app icon: two rounded letter blocks, a pink crown on top and a little sparkle, "
               "on a soft butter yellow rounded square that fills the whole frame, flat vector art style with soft shading, "
               "clean thick dark navy outline (#3D3553), pastel colors, no text, no letters written, no logo, no watermark.\n```\n")

    out.append("""
## Karakterler hakkında

- Karakterler evde gezdirilen hazır karakterler olur. Hepsi aynı oranlarla (büyük kafa, küçük gövde, önden, ayakta) istenir ki yan yana uyumlu dursunlar.
- Aynı karakteri farklı kıyafetlerle istiyorsanız: Firefly'da ilk görseli **Structure reference** (Yapı referansı) olarak yükleyip
  isteğin sadece kıyafet kısmını değiştirin, kodun sonuna `_2`, `_3` ekleyin (ör. `kiz1_2`). Haber verin, bunları kıyafet seçimine bağlarım.
- Giydirme oyunundaki bebek katmanlı olduğu için (saç, kıyafet, ayakkabı ayrı) onu vektör çizmeye devam ediyorum.
""")
    # En üstte: Firefly'da üretilecek yeni sayfalar (FIREFLY.md ile aynı).
    out = [out[0], ff_md,
           "\n---\n\n# ⛔ BURADAN SONRASI YEDEK — ÜRETMEYİN\n\nYukarıdaki sayfalar bu görsellerin hepsini zaten kapsıyor. Aşağıdakiler eski tek tek istekler ve "
           "önceden üretilmiş sayfalar; yalnızca bir parçayı tek başına yeniden üretmek gerekirse kullanılır.\n"] + [x.replace("## 🆕 ", "## (yedek) ") for x in out[1:]]
    (ROOT / "ASSETS.md").write_text("\n".join(out))
    print(f"{len(codes)} görsel kodu -> ASSETS.md, src/assets/items.json, src/assets/codes.json")


if __name__ == "__main__":
    main()
    # Gerçekçi boyutlar ve üst yüzeyler (items.json'u yeniden yazdığımız için).
    import runpy

    runpy.run_path(str(ROOT / "scripts" / "sizes.py"), run_name="__main__")
