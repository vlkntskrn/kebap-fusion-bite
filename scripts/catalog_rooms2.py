"""
İkinci aşama odaları ve eşyaları (oyun odası, bebek odası, giyinme odası, sanat atölyesi, müzik odası, kütüphane).
asset_catalog.py ve sizes.py bu dosyayı okur. İleride kasabaya geçerken bu odalar binaların içi olacak.

NEW_ROOMS : oda kodu -> (Türkçe ad, oda düğmesi simgesi tarifi)
NEW_ITEMS : (kod, oda, yere_serili, Türkçe ad, tarif, (h|w, cm))   h = gerçek yükseklik, w = gerçek genişlik
NEW_VARIANTS : (aile, oda, Türkçe ad, (h|w, cm), [çeşit tarifleri])  ilk 2 bedava, gerisi okuma sorusuyla açılır
"""

H, W = "h", "w"

NEW_ROOMS = {
    "oyun": ("Oyun odası", "a small cute play tent with a pennant flag"),
    "bebekodasi": ("Bebek odası", "a small cute baby crib with a star mobile"),
    "giyinme": ("Giyinme odası", "a small cute pink dress on a hanger"),
    "atolye": ("Sanat atölyesi", "a small cute painter's easel with a rainbow painting"),
    "muzik": ("Müzik odası", "a small cute electric guitar with music notes"),
    "kutuphane": ("Kütüphane", "a small cute stack of colorful books with an open book on top"),
}

NEW_ITEMS = [
    # --- oyun odası
    ("oyun_cadiri", "oyun", False, "Oyun çadırı", "a pastel pink and white striped play tent (teepee) with a little pennant garland and a fluffy cushion inside", (H, 150)),
    ("top_havuzu", "oyun", False, "Top havuzu", "a round soft ball pit full of colorful plastic balls", (H, 45)),
    ("oyuncak_mutfak", "oyun", False, "Oyuncak mutfak", "a wooden toy kitchen with a tiny stove, sink and little pots", (H, 90)),
    ("tren_rayi", "oyun", True, "Tren rayı", "a wooden toy train track set laid out in a loop with a little red train, seen from above", (W, 120)),
    ("lego_masasi", "oyun", False, "Yapı masası", "a low kids table covered with colorful building blocks and a small block tower", (H, 50)),
    ("sallanan_at", "oyun", False, "Sallanan at", "a wooden rocking horse with a yarn mane and a red saddle", (H, 70)),
    ("oyuncak_dolabi", "oyun", False, "Oyuncak dolabı", "a low white toy storage shelf with colorful fabric bins and toys peeking out", (H, 95)),
    ("puzzle_minder", "oyun", True, "Yapboz minder", "a colorful foam puzzle floor mat made of interlocking squares, seen from above", (W, 150)),
    ("buyuk_bebek_evi", "oyun", False, "Büyük bebek evi", "a big open wooden dollhouse with three rooms and tiny furniture", (H, 110)),
    ("tirmanma_ucgeni", "oyun", False, "Tırmanma üçgeni", "a wooden climbing triangle with rungs and a small slide board", (H, 90)),
    ("kukla_tiyatrosu", "oyun", False, "Kukla tiyatrosu", "a little puppet theater booth with red curtains and two hand puppets on the stage", (H, 140)),
    ("akulu_araba", "oyun", False, "Akülü araba", "a pastel blue ride-on toy car for kids with a steering wheel", (H, 50)),
    ("dev_ayi", "oyun", False, "Dev ayıcık", "a giant fluffy cream teddy bear sitting with a pink bow", (H, 90)),
    ("balon_demeti", "oyun", False, "Balon demeti", "a bunch of five pastel balloons with curly strings", (H, 120)),
    ("oyuncak_kutusu", "oyun", False, "Oyuncak kutusu", "an open cardboard toy box full of toys: a ball, a doll, blocks and a car", (H, 40)),
    # --- bebek odası
    ("sallanan_besik", "bebekodasi", False, "Sallanan beşik", "a white rocking cradle with soft lilac bedding and a little canopy", (H, 85)),
    ("alt_degistirme", "bebekodasi", False, "Alt değiştirme masası", "a white baby changing table with drawers, a soft mat on top and a basket of diapers", (H, 95)),
    ("emzirme_koltugu", "bebekodasi", False, "Sallanan koltuk", "a cozy white rocking armchair with a mint cushion and a small blanket", (H, 100)),
    ("donence", "bebekodasi", False, "Dönence", "a baby crib mobile hanging from above with little stars, moons and clouds", (H, 50)),
    ("bebek_arabasi", "bebekodasi", False, "Bebek arabası", "a pastel pink baby stroller with a hood", (H, 100)),
    ("oyun_parki", "bebekodasi", False, "Oyun parkı", "a square baby playpen with mesh sides and a few soft toys inside", (H, 70)),
    ("bebek_kuveti", "bebekodasi", False, "Bebek küveti", "a small baby bath tub on a stand with bubbles and a rubber duck", (H, 80)),
    ("biberon", "bebekodasi", False, "Biberon", "a baby bottle with milk and a pastel cap", (H, 18)),
    ("emzik", "bebekodasi", False, "Emzik", "a pastel pink baby pacifier", (W, 7)),
    ("cingirak", "bebekodasi", False, "Çıngırak", "a colorful baby rattle toy", (H, 16)),
    ("bez_yigini", "bebekodasi", False, "Bez yığını", "a neat stack of folded baby diapers", (H, 25)),
    ("bebek_dolabi", "bebekodasi", False, "Bebek dolabı", "a small white baby wardrobe with star shaped knobs", (H, 120)),
    ("ayicik_rafi", "bebekodasi", False, "Ayıcık rafı", "a wall shelf shaped like a cloud with small plush toys on it", (W, 70)),
    ("bulut_hali", "bebekodasi", True, "Bulut halı", "a fluffy white rug shaped like a cloud, seen from above", (W, 140)),
    ("ay_gece_lambasi", "bebekodasi", False, "Ay gece lambası", "a glowing crescent moon night light", (H, 22)),
    # --- giyinme odası
    ("acik_gardirop", "giyinme", False, "Açık gardırop", "an open walk-in closet rail with colorful dresses on hangers and shoe shelves below", (H, 180)),
    ("ayakkabi_rafi", "giyinme", False, "Ayakkabı rafı", "a white shoe shelf full of colorful kids shoes and boots", (H, 100)),
    ("canta_rafi", "giyinme", False, "Çanta rafı", "a wall shelf with cute handbags and backpacks", (W, 80)),
    ("isikli_boy_aynasi", "giyinme", False, "Işıklı boy aynası", "a tall full-length mirror with round light bulbs around the frame", (H, 170)),
    ("taki_kutusu", "giyinme", False, "Takı kutusu", "an open pink jewelry box with necklaces and rings", (H, 15)),
    ("sapka_standi", "giyinme", False, "Şapka standı", "a wooden hat stand with a straw hat, a beret and a cap", (H, 160)),
    ("manken", "giyinme", False, "Manken", "a dress form mannequin wearing a pastel princess dress", (H, 150)),
    ("kapitone_puf", "giyinme", False, "Kapitone puf", "a round tufted pink velvet ottoman", (H, 45)),
    ("ada_dolap", "giyinme", False, "Ada dolap", "a white dressing room island with drawers and a glass top showing jewelry", (H, 90)),
    ("parfum_seti", "giyinme", False, "Parfüm seti", "three cute perfume bottles on a small tray", (H, 20)),
    ("deneme_kabini", "giyinme", False, "Deneme kabini", "a small fitting room booth with a pink curtain", (H, 200)),
    ("sac_kurutma", "giyinme", False, "Saç kurutma", "a pastel hair dryer", (H, 20)),
    ("tac_vitrini", "giyinme", False, "Taç vitrini", "a glass display case with a sparkly tiara on a velvet pillow", (H, 120)),
    ("giysi_elbise", "giyinme", False, "Elbise", "a pink kids party dress with a tulle skirt", (H, 60)),
    ("giysi_tisort", "giyinme", False, "Tişört", "a yellow kids t-shirt with a star print", (H, 40)),
    ("giysi_kot", "giyinme", False, "Kot pantolon", "a pair of light blue kids jeans", (H, 60)),
    ("giysi_mont", "giyinme", False, "Mont", "a puffy lilac kids winter jacket", (H, 50)),
    ("giysi_pijama", "giyinme", False, "Pijama", "a cute kids pajama set with clouds", (H, 55)),
    ("giysi_ayakkabi", "giyinme", False, "Ayakkabı", "a pair of shiny red kids shoes with straps", (W, 30)),
    ("giysi_bot", "giyinme", False, "Bot", "a pair of pink rain boots", (H, 25)),
    ("giysi_canta", "giyinme", False, "Çanta", "a small heart shaped kids handbag", (H, 20)),
    ("giysi_atki", "giyinme", False, "Atkı", "a striped knitted scarf", (W, 60)),
    ("giysi_tac", "giyinme", False, "Taç", "a small golden princess tiara with pink gems", (W, 18)),
    ("giysi_kolye", "giyinme", False, "Kolye", "a pearl necklace with a heart pendant", (W, 20)),
    # --- sanat atölyesi
    ("sovale", "atolye", False, "Şövale", "a wooden easel with a colorful painting of a rainbow and a sun", (H, 160)),
    ("boya_masasi", "atolye", False, "Boya masası", "a kids craft table with paint pots, brushes and paper on top", (H, 75)),
    ("boya_paleti", "atolye", False, "Boya paleti", "a wooden paint palette with colorful paint blobs", (W, 30)),
    ("firca_kupasi", "atolye", False, "Fırça kupası", "a jar full of paint brushes", (H, 22)),
    ("boya_tupleri", "atolye", False, "Boya tüpleri", "a set of colorful paint tubes", (W, 22)),
    ("comlek_carki", "atolye", False, "Çömlek çarkı", "a small pottery wheel with a clay vase on it", (H, 70)),
    ("heykel_kaidesi", "atolye", False, "Heykel", "a funny clay sculpture of a cat on a white pedestal", (H, 120)),
    ("kagit_rulosu", "atolye", False, "Kâğıt rulosu", "a standing drawing paper roll holder with a long sheet of paper", (H, 90)),
    ("sanat_dolabi", "atolye", False, "Sanat dolabı", "an open art supplies cabinet with crayons, paint jars, glitter and paper", (H, 120)),
    ("resim_ipi", "atolye", False, "Resim ipi", "a string with clothespins holding colorful kids drawings", (W, 120)),
    ("pastel_kutusu", "atolye", False, "Pastel boya kutusu", "an open box of colorful crayons", (W, 20)),
    ("makas_yapistirici", "atolye", False, "Makas ve yapıştırıcı", "kids safety scissors and a glue stick", (W, 16)),
    ("boya_kovasi", "atolye", False, "Boya kovası", "a small bucket of pink paint with drips", (H, 30)),
    ("onluk_askisi", "atolye", False, "Önlük askısı", "wall hooks with colorful painting aprons", (W, 60)),
    ("sanat_taburesi", "atolye", False, "Sanat taburesi", "a paint splattered wooden stool", (H, 50)),
    # --- müzik odası
    ("kucuk_sahne", "muzik", False, "Küçük sahne", "a low wooden stage platform with a small purple curtain behind it and star lights", (W, 220)),
    ("mikrofon", "muzik", False, "Mikrofon", "a sparkly pink handheld microphone", (H, 25)),
    ("davul_seti", "muzik", False, "Davul seti", "a colorful drum set with cymbals", (H, 110)),
    ("elektro_gitar", "muzik", False, "Elektro gitar", "a lilac electric guitar with a star sticker", (H, 100)),
    ("keman", "muzik", False, "Keman", "a wooden violin with a bow", (H, 60)),
    ("kuyruklu_piyano", "muzik", False, "Kuyruklu piyano", "a white grand piano with the lid open", (H, 100)),
    ("hoparlor", "muzik", False, "Hoparlör", "a big black speaker with a glowing ring", (H, 90)),
    ("nota_sehpasi", "muzik", False, "Nota sehpası", "a music stand with a sheet of music notes", (H, 120)),
    ("plak_calar", "muzik", False, "Pikap", "a cute retro record player with a pink record", (H, 30)),
    ("kulaklik", "muzik", False, "Kulaklık", "a pair of pastel headphones with cat ears", (H, 20)),
    ("sahne_isigi", "muzik", False, "Sahne ışığı", "a stage spotlight on a tall stand with a warm beam", (H, 150)),
    ("tef", "muzik", False, "Tef", "a tambourine with ribbons", (W, 25)),
    ("trompet", "muzik", False, "Trompet", "a shiny golden trumpet", (W, 45)),
    ("flut", "muzik", False, "Flüt", "a silver flute", (W, 60)),
    ("karaoke_makinesi", "muzik", False, "Karaoke makinesi", "a karaoke machine with a screen, lights and a microphone", (H, 120)),
    ("nota_posteri", "muzik", False, "Nota tablosu", "a framed picture of colorful music notes", (W, 60)),
    # --- kütüphane
    ("buyuk_kitaplik", "kutuphane", False, "Büyük kitaplık", "a tall wooden bookcase full of colorful books and a few toys", (H, 200)),
    ("okuma_koltugu", "kutuphane", False, "Okuma koltuğu", "a cozy wingback reading armchair with a knitted blanket", (H, 105)),
    ("kitap_yigini", "kutuphane", False, "Kitap yığını", "a stack of five colorful books", (H, 30)),
    ("acik_kitap", "kutuphane", False, "Açık kitap", "an open storybook with colorful pictures", (W, 30)),
    ("okuma_minderi", "kutuphane", False, "Okuma minderi", "a big round floor cushion with tassels", (H, 25)),
    ("kure", "kutuphane", False, "Dünya küresi", "a world globe on a wooden stand", (H, 45)),
    ("masa_lambasi", "kutuphane", False, "Masa lambası", "a green banker desk lamp", (H, 45)),
    ("yazi_masasi", "kutuphane", False, "Yazı masası", "a wooden writing desk with a drawer and a pencil cup", (H, 75)),
    ("kitaplik_merdiveni", "kutuphane", False, "Kitaplık merdiveni", "a wooden library ladder", (H, 180)),
    ("agac_kitaplik", "kutuphane", False, "Ağaç kitaplık", "a bookshelf shaped like a tree with books on the branches", (H, 160)),
    ("okuma_cadiri", "kutuphane", False, "Okuma çadırı", "a cozy reading nook tent with fairy lights and pillows", (H, 150)),
    ("kitap_sepeti", "kutuphane", False, "Kitap sepeti", "a woven basket full of picture books", (H, 35)),
    ("teleskop", "kutuphane", False, "Teleskop", "a kids telescope on a tripod", (H, 120)),
    ("dunya_haritasi", "kutuphane", False, "Dünya haritası", "a colorful world map poster with cute animals, no text", (W, 100)),
    ("kum_saati", "kutuphane", False, "Kum saati", "a wooden hourglass with pink sand", (H, 20)),
    ("baykus_lamba", "kutuphane", False, "Baykuş lamba", "a cute owl shaped table lamp", (H, 35)),
]

NEW_VARIANTS = [
    ("v_cadir", "oyun", "Oyun çadırı", (H, 150), [
        "a simple white play tent", "a mint play tent with pom poms", "a castle shaped play tent with towers",
        "a rocket shaped play tent", "a rainbow striped play tent"]),
    ("v_pelus", "oyun", "Peluş oyuncak", (H, 45), [
        "a plush bunny", "a plush elephant", "a plush unicorn", "a plush dinosaur", "a plush penguin", "a plush fox"]),
    ("v_besik", "bebekodasi", "Bebek karyolası", (H, 100), [
        "a simple white baby crib", "a wooden baby crib", "a round white baby crib with a canopy",
        "a pink baby crib with hearts", "a cloud shaped baby crib", "a golden royal baby crib"]),
    ("v_bebek_arabasi", "bebekodasi", "Bebek arabası", (H, 100), [
        "a simple grey stroller", "a mint stroller", "a vintage cream pram with big wheels", "a lilac stroller with stars", "a golden princess pram"]),
    ("v_manken", "giyinme", "Manken", (H, 150), [
        "a mannequin with a simple white dress", "a mannequin with a blue ball gown", "a mannequin with a rainbow tutu",
        "a mannequin with a sparkly pop star outfit", "a mannequin with a golden princess gown"]),
    ("v_elbise", "giyinme", "Elbise", (H, 60), [
        "a simple yellow summer dress", "a blue denim dress", "a lilac princess gown", "a mint dress with flowers",
        "a sparkly silver party dress", "a red velvet dress with a bow"]),
    ("v_sovale", "atolye", "Şövale", (H, 160), [
        "an easel with a blank canvas", "an easel with a cat painting", "an easel with a sea painting",
        "an easel with a flower painting", "an easel with a space painting"]),
    ("v_cocuk_resmi", "atolye", "Çocuk resmi", (W, 45), [
        "a framed kids drawing of a house and sun", "a framed kids drawing of a family", "a framed kids drawing of a cat",
        "a framed kids drawing of a rainbow", "a framed kids drawing of a flower garden", "a framed kids drawing of a rocket"]),
    ("v_gitar", "muzik", "Gitar", (H, 100), [
        "a wooden acoustic guitar", "a pink electric guitar", "a blue electric guitar with lightning", "a ukulele",
        "a star shaped guitar", "a golden guitar"]),
    ("v_kitaplik", "kutuphane", "Kitaplık", (H, 160), [
        "a simple white bookshelf with books", "a low wooden book display shelf", "a house shaped bookshelf",
        "a rainbow bookshelf", "a round bookshelf with a reading seat", "a castle shaped bookshelf"]),
    ("v_okuma_koltugu", "kutuphane", "Okuma koltuğu", (H, 100), [
        "a simple grey reading chair", "a yellow bean bag chair", "a hanging egg chair", "a cloud shaped armchair", "a velvet throne reading chair"]),
]

NEW_ITEMS += [
    # --- oyun odası (ek)
    ("kaydirakli_yatak", "oyun", False, "Kaydıraklı ranza", "a low kids loft bed with a pastel slide and a little ladder", (H, 140)),
    ("oyuncak_market", "oyun", False, "Oyuncak market", "a wooden toy market stand with tiny fruits, a scale and a cash register", (H, 110)),
    ("ic_salincak", "oyun", False, "Salıncak", "an indoor wooden swing with soft ropes and a cushion", (H, 160)),
    ("yarisa_araba_pisti", "oyun", True, "Araba pisti", "a colorful toy car race track play mat with little cars, seen from above", (W, 140)),
    ("bowling_seti", "oyun", False, "Bowling seti", "a kids bowling set with colorful pins and a ball", (H, 30)),
    ("kostum_sandigi", "oyun", False, "Kostüm sandığı", "an open dress-up trunk with a cape, a crown and a fairy wand peeking out", (H, 55)),
    ("robot_oyuncak", "oyun", False, "Robot oyuncak", "a cute friendly toy robot with antenna", (H, 40)),
    ("uzay_roketi", "oyun", False, "Oyuncak roket", "a big cardboard play rocket with round windows", (H, 150)),
    # --- bebek odası (ek)
    ("bebek_yatagi_tavan", "bebekodasi", False, "Cibinlik", "a soft white canopy net hanging from above with a little crown on top", (H, 120)),
    ("oyun_halisi_bebek", "bebekodasi", True, "Bebek oyun halısı", "a soft baby play mat with an arch of hanging toys, seen from above", (W, 100)),
    ("puset_cantasi", "bebekodasi", False, "Bebek çantası", "a cute diaper bag with bunny ears", (H, 35)),
    ("bebek_terazisi", "bebekodasi", False, "Bebek terazisi", "a pastel baby scale with a tray", (H, 20)),
    ("muzik_kutusu", "bebekodasi", False, "Müzik kutusu", "a music box with a tiny spinning carousel horse", (H, 20)),
    ("bebek_kitabi", "bebekodasi", False, "Bez kitap", "a soft fabric baby book with animals", (W, 18)),
    ("emekleme_tuneli", "bebekodasi", False, "Emekleme tüneli", "a colorful soft play tunnel for babies", (H, 50)),
    ("bebek_salincagi", "bebekodasi", False, "Ana kucağı", "a baby bouncer seat with a toy bar", (H, 55)),
    # --- giyinme odası (ek)
    ("gozluk_standi", "giyinme", False, "Gözlük standı", "a small stand with colorful heart and star sunglasses", (H, 30)),
    ("toka_kutusu", "giyinme", False, "Toka kutusu", "an open box of hair bows, clips and scrunchies", (W, 25)),
    ("utu_masasi", "giyinme", False, "Ütü masası", "a pastel ironing board with an iron", (H, 90)),
    ("kiyafet_sepeti", "giyinme", False, "Kıyafet sepeti", "a woven laundry basket with folded clothes", (H, 45)),
    ("terlik", "giyinme", False, "Terlik", "a pair of fluffy bunny slippers", (W, 25)),
    ("giysi_yagmurluk", "giyinme", False, "Yağmurluk", "a yellow kids raincoat with a hood", (H, 60)),
    ("giysi_mayo", "giyinme", False, "Mayo", "a cute kids swimsuit with watermelon print", (H, 40)),
    ("giysi_sort", "giyinme", False, "Şort", "a pair of kids denim shorts", (H, 30)),
    # --- sanat atölyesi (ek)
    ("isik_masasi", "atolye", False, "Işıklı çizim masası", "a glowing light table for tracing drawings", (H, 70)),
    ("simli_kavanozlar", "atolye", False, "Simli kavanozlar", "a row of jars with colorful glitter", (W, 30)),
    ("dikis_makinesi", "atolye", False, "Dikiş makinesi", "a cute pastel sewing machine with a spool of thread", (H, 30)),
    ("yun_sepeti", "atolye", False, "Yün sepeti", "a basket of colorful yarn balls with knitting needles", (H, 30)),
    ("oyun_hamuru", "atolye", False, "Oyun hamuru", "colorful play dough tubs and shapes", (W, 25)),
    ("boncuk_kutusu", "atolye", False, "Boncuk kutusu", "a box of colorful beads with a half-made bracelet", (W, 22)),
    ("cizim_tableti", "atolye", False, "Çizim tableti", "a kids drawing tablet with a stylus", (W, 30)),
    ("sanat_ruloyu_kurutucu", "atolye", False, "Boya kurutma rafı", "a wooden drying rack with wet paintings", (H, 120)),
    # --- müzik odası (ek)
    ("ksilofon_buyuk", "muzik", False, "Ksilofon", "a big rainbow xylophone on a stand", (H, 70)),
    ("marakas", "muzik", False, "Marakas", "a pair of colorful maracas", (W, 25)),
    ("cello", "muzik", False, "Çello", "a wooden cello standing on its end pin", (H, 120)),
    ("dj_masasi", "muzik", False, "DJ masası", "a kids DJ table with turntables and glowing buttons", (H, 90)),
    ("nota_dolabi", "muzik", False, "Nota dolabı", "a cabinet with music books and small instruments", (H, 110)),
    ("akordeon", "muzik", False, "Akordeon", "a red accordion", (W, 40)),
    ("baglama", "muzik", False, "Bağlama", "a wooden Turkish baglama (saz) with a long neck", (H, 100)),
    ("darbuka", "muzik", False, "Darbuka", "a decorated goblet drum (darbuka)", (H, 40)),
    # --- kütüphane (ek)
    ("kitap_arabasi", "kutuphane", False, "Kitap arabası", "a rolling library book cart full of books", (H, 90)),
    ("kitap_ayraci_seti", "kutuphane", False, "Ayraçlar", "a set of cute animal bookmarks", (W, 15)),
    ("hikaye_sandalyesi", "kutuphane", False, "Hikâye sandalyesi", "a big storyteller chair painted with stars", (H, 120)),
    ("okuma_lambasi", "kutuphane", False, "Okuma lambası", "a tall floor reading lamp with a curved neck", (H, 160)),
    ("dinozor_kitaplik", "kutuphane", False, "Dinozor kitaplık", "a bookshelf shaped like a friendly dinosaur", (H, 120)),
    ("mektup_kutusu", "kutuphane", False, "Defter ve kalemler", "a notebook with colorful pencils", (W, 25)),
    ("sessiz_tabelasi", "kutuphane", False, "Sus işareti", "a cute wall sign with a finger on lips owl, no text", (W, 40)),
    ("fil_kitap_destegi", "kutuphane", False, "Kitap desteği", "a pair of elephant shaped bookends holding books", (W, 35)),
]

NEW_VARIANTS += [
    ("v_top_havuzu", "oyun", "Top havuzu", (H, 45), [
        "a square ball pit with pastel balls", "a round mint ball pit", "a castle ball pit with towers", "a rainbow ball pit", "a cloud shaped ball pit"]),
    ("v_donence", "bebekodasi", "Dönence", (H, 50), [
        "a crib mobile with clouds", "a crib mobile with little elephants", "a crib mobile with hot air balloons",
        "a crib mobile with butterflies", "a crib mobile with planets"]),
    ("v_ayakkabi", "giyinme", "Ayakkabı", (W, 30), [
        "a pair of white sneakers", "a pair of pink ballet flats", "a pair of glittery party shoes",
        "a pair of rainbow sneakers", "a pair of glass princess slippers"]),
    ("v_boya_masasi", "atolye", "Sanat masası", (H, 75), [
        "a simple white craft table", "a round art table with stools", "a rainbow art table", "an art table shaped like a palette", "a big wooden workshop table"]),
    ("v_davul", "muzik", "Davul", (H, 60), [
        "a small toy drum", "a pink drum set", "a blue drum with stars", "a big bass drum", "a set of bongo drums"]),
    ("v_kitap_kosesi", "kutuphane", "Okuma köşesi", (H, 120), [
        "a reading nook with pillows", "a reading tent with fairy lights", "a reading treehouse corner", "a reading castle corner", "a reading cloud corner"]),
]


def sizes():
    """sizes.py için: kod -> (h|w, cm)."""
    out = {c: sz for c, _r, _f, _tr, _en, sz in NEW_ITEMS}
    for fam, _r, _tr, sz, lst in NEW_VARIANTS:
        for i in range(len(lst)):
            out[f"{fam}_{i + 1:02d}"] = sz
    return out


# Bir eşyanın başka hangi odalarda da menüde görüneceği (kendi odası ve "her oda" eşyaları zaten görünür).
ALSO_ROOMS = [
    (r"^(besik|mamasandalyesi)$", ["bebekodasi"]),
    (r"^(kiyafetaski|boyaynasi|makyaj|v_makyaj_\d+|kozmetik|dolap|v_dolap_\d+|sifonyer)$", ["giyinme"]),
    (r"^(yazitahtasi)$", ["atolye", "oyun"]),
    (r"^(v_oyuncak_\d+|oyuncaksandigi|ayi|unicorn|oyuncakev|oyunrafi)$", ["oyun"]),
    (r"^(piyano|v_muzik_\d+|disko)$", ["muzik"]),
    (r"^(kitaplik|calismamasasi|bilgisayar|v_masa_\d+|koltuk|berjer|v_koltuk_\d+)$", ["kutuphane"]),
    (r"^(armut|puf|cicekminder|v_oturak_\d+)$", ["giyinme", "oyun", "kutuphane", "muzik"]),
    (r"^(sandalye|v_sandalye_\d+|tabure|masa|yuvarlakmasa|v_masa_mutfak_\d+)$", ["salon", "atolye"]),
    (r"^(giysi_.+|v_elbise_\d+)$", ["yatak"]),
    (r"^(v_pelus_\d+|dev_ayi)$", ["yatak", "bebekodasi"]),
    (r"^(kitap_yigini|acik_kitap|kum_saati|kure|masa_lambasi|baykus_lamba|kitap_sepeti)$", ["yatak", "salon", "oyun"]),
    (r"^(v_gitar_\d+|mikrofon|kulaklik|keman|tef|plak_calar)$", ["yatak", "salon", "oyun"]),
    (r"^(boya_paleti|pastel_kutusu|firca_kupasi|v_cocuk_resmi_\d+|makas_yapistirici)$", ["oyun", "yatak"]),
    (r"^(oyun_cadiri|v_cadir_\d+|balon_demeti|puzzle_minder)$", ["yatak", "bebekodasi"]),
]

# "Her odada" diye işaretlenmiş ama aslında belli odalara ait eşyalar.
HEPSI_ROOMS = {
    "ayi": ["yatak", "oyun", "bebekodasi"],
    "kitaplik": ["salon", "yatak", "kutuphane"],
    "pasta": ["mutfak", "salon"],
    "limonata": ["mutfak", "havuz"],
    "oyunkonsolu": ["salon", "oyun", "yatak"],
    "puf": ["salon", "yatak", "giyinme", "oyun", "kutuphane", "muzik"],
    "disko": ["salon", "yatak", "muzik", "oyun"],
}
