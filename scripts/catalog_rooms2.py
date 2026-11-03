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
    ("lego_masasi", "oyun", False, "Yapı masası", "a low kids table covered with colorful building blocks and a small block tower", (H, 62)),
    ("sallanan_at", "oyun", False, "Sallanan at", "a wooden rocking horse with a yarn mane and a red saddle", (H, 70)),
    ("oyuncak_dolabi", "oyun", False, "Oyuncak dolabı", "a low white toy storage shelf with colorful fabric bins and toys peeking out", (H, 95)),
    ("puzzle_minder", "oyun", True, "Yapboz minder", "a colorful foam puzzle floor mat made of interlocking squares, seen from above", (W, 220)),
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
    ("bulut_hali", "bebekodasi", True, "Bulut halı", "a fluffy white rug shaped like a cloud, seen from above", (W, 210)),
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
    ("boya_masasi", "atolye", False, "Boya masası", "a kids craft table with paint pots, brushes and paper on top", (H, 90)),
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
    ("yazi_masasi", "kutuphane", False, "Yazı masası", "a wooden writing desk with a drawer and a pencil cup", (H, 90)),
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
    ("v_boya_masasi", "atolye", "Sanat masası", (H, 90), [
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


# ------------------------------------------------------------------ üçüncü aşama
NEW_ROOMS.update({
    "petrevir": ("Pet revir", "a small cute veterinary cross with a paw print and a heart"),
    "makyaj": ("Makyaj odası", "a small cute lipstick and a round mirror with sparkles"),
    "oyunparki": ("Oyun parkı", "a small cute playground slide with a sun"),
})
# Odası olmayan gruplar: hepsi = her iç oda, parti = iç odalar + dış alanlar, bahce = havuz ve oyun parkı
EXTRA_GROUPS = {"hepsi": "Işık, süs ve ev aksesuarları (her oda)", "parti": "Parti malzemeleri ve süsler", "bahce": "Havuz ve bahçe (ek)"}

NEW_ITEMS += [
    # --- pet revir
    ("muayene_masasi", "petrevir", False, "Muayene masası", "a white pet examination table with a soft mint pad and a paw print", (H, 90)),
    ("pet_kafesi", "petrevir", False, "Hasta kafesi", "a cozy pet recovery cage with a blanket and a little bone toy", (H, 70)),
    ("veteriner_dolabi", "petrevir", False, "Veteriner dolabı", "a white cabinet with glass doors, pet food bags and cute medicine bottles", (H, 140)),
    ("pet_tartisi", "petrevir", False, "Pet tartısı", "a flat pet weighing scale with a paw print", (W, 60)),
    ("pet_yatagi_yuvarlak", "petrevir", False, "Pet yatağı", "a round fluffy pet bed with a pillow", (W, 60)),
    ("mama_kabi", "petrevir", False, "Mama kabı", "a pet food bowl full of kibble", (W, 20)),
    ("su_kabi", "petrevir", False, "Su kabı", "a blue pet water bowl", (W, 20)),
    ("ilk_yardim_cantasi", "petrevir", False, "İlk yardım çantası", "a cute first aid bag with a heart and bandages", (W, 35)),
    ("stetoskop", "petrevir", False, "Stetoskop", "a toy stethoscope", (W, 30)),
    ("pet_tasima_cantasi", "petrevir", False, "Taşıma çantası", "a pastel pet carrier bag with a window", (H, 40)),
    ("pet_kuveti", "petrevir", False, "Pet küveti", "a small pet bath tub with bubbles and a rubber bone", (H, 50)),
    ("pet_oyuncaklari", "petrevir", False, "Pet oyuncakları", "a basket of pet toys: a ball, a mouse toy and a rope", (W, 30)),
    ("bekleme_sandalyesi", "petrevir", False, "Bekleme sandalyesi", "a row of two cute waiting room chairs", (H, 85)),
    ("pet_odul_kavanozu", "petrevir", False, "Ödül kavanozu", "a jar of bone shaped pet treats", (H, 25)),
    ("kedi_tirmalama", "petrevir", False, "Tırmalama tahtası", "a cat scratching post with a dangling ball", (H, 90)),
    ("tasma_askisi", "petrevir", False, "Tasma askısı", "wall hooks with colorful pet leashes and collars", (W, 60)),
    ("pati_posteri", "petrevir", False, "Pati tablosu", "a framed picture of cute paw prints and hearts", (W, 50)),
    ("bandaj_rulosu", "petrevir", False, "Bandaj", "a roll of colorful bandage", (W, 12)),
    # --- makyaj odası
    ("kuafor_koltugu", "makyaj", False, "Kuaför koltuğu", "a pink salon chair with a footrest", (H, 110)),
    ("kurutma_kaski", "makyaj", False, "Kurutma kaskı", "a retro standing hair dryer hood", (H, 150)),
    ("ayna_istasyonu", "makyaj", False, "Ayna istasyonu", "a salon mirror station with light bulbs and a counter with brushes", (H, 170)),
    ("oje_rafi", "makyaj", False, "Oje rafı", "a wall shelf full of colorful nail polish bottles", (W, 70)),
    ("manikur_masasi", "makyaj", False, "Manikür masası", "a small white manicure table with a lamp and nail polish", (H, 75)),
    ("makyaj_cantasi", "makyaj", False, "Makyaj çantası", "an open pink makeup bag with brushes", (W, 30)),
    ("ruj_seti", "makyaj", False, "Ruj seti", "three lipsticks in different colors", (W, 18)),
    ("far_paleti", "makyaj", False, "Far paleti", "an eyeshadow palette with pastel colors", (W, 20)),
    ("fon_makinesi", "makyaj", False, "Fön makinesi", "a lilac hair dryer", (H, 22)),
    ("tarak_firca", "makyaj", False, "Tarak ve fırça", "a hairbrush and a comb", (W, 25)),
    ("spa_ayak_kuveti", "makyaj", False, "Ayak spası", "a foot spa basin with bubbles and flower petals", (W, 45)),
    ("havlu_rafi_salon", "makyaj", False, "Havlu rafı", "a rack with rolled pastel towels", (H, 120)),
    ("yuz_maskesi_seti", "makyaj", False, "Yüz maskesi", "a jar of face mask with cucumber slices", (W, 20)),
    ("sac_bandi", "makyaj", False, "Saç bandı", "a fluffy spa headband with bunny ears", (W, 18)),
    ("parfum_vitrini", "makyaj", False, "Parfüm vitrini", "a glass display cabinet with perfume bottles", (H, 130)),
    ("bekleme_koltugu_salon", "makyaj", False, "Bekleme koltuğu", "a velvet pink waiting armchair", (H, 90)),
    ("oje_kurutucu", "makyaj", False, "Oje kurutucu", "a small nail dryer machine", (W, 20)),
    ("sac_yikama_lavabosu", "makyaj", False, "Saç yıkama koltuğu", "a salon hair washing chair with a basin", (H, 100)),
    # --- oyun parkı
    ("kaydirak_buyuk", "oyunparki", False, "Büyük kaydırak", "a big colorful playground slide with stairs", (H, 200)),
    ("salincak_seti", "oyunparki", False, "Salıncak seti", "a playground swing set with two swings", (H, 200)),
    ("tahterevalli", "oyunparki", False, "Tahterevalli", "a colorful seesaw", (H, 60)),
    ("kum_havuzu", "oyunparki", False, "Kum havuzu", "a wooden sandbox with sand, a bucket and a shovel", (W, 200)),
    ("tirmanma_duvari", "oyunparki", False, "Tırmanma duvarı", "a kids climbing wall with colorful holds", (H, 180)),
    ("atlikarinca", "oyunparki", False, "Atlıkarınca", "a small playground merry-go-round with a pastel canopy", (H, 180)),
    ("park_banki", "oyunparki", False, "Park bankı", "a green wooden park bench", (H, 80)),
    ("su_cesmesi", "oyunparki", False, "Su çeşmesi", "a small drinking water fountain for kids", (H, 90)),
    ("agac_ev", "oyunparki", False, "Ağaç ev", "a cute treehouse with a ladder and a little flag", (H, 260)),
    ("tunel_kaydirak", "oyunparki", False, "Tünel kaydırak", "a tube slide on a small tower", (H, 160)),
    ("yayli_at", "oyunparki", False, "Yaylı at", "a spring rider horse toy for the playground", (H, 80)),
    ("basket_potasi", "oyunparki", False, "Basket potası", "a kids basketball hoop with a ball", (H, 200)),
    ("seksek", "oyunparki", True, "Seksek", "a hopscotch game drawn with chalk on the ground, seen from above, no numbers", (W, 150)),
    ("ucurtma", "oyunparki", False, "Uçurtma", "a colorful kite with a ribbon tail", (H, 80)),
    ("dondurma_arabasi", "oyunparki", False, "Dondurma arabası", "a cute ice cream cart with an umbrella", (H, 160)),
    ("park_cop_kutusu", "oyunparki", False, "Park çöp kutusu", "a green park trash bin with a smiling face", (H, 90)),
    # --- havuz ve bahçe (ek)
    ("havuz_merdiveni", "bahce", False, "Havuz merdiveni", "a shiny pool ladder", (H, 120)),
    ("sisme_yatak", "bahce", False, "Şişme yatak", "a striped inflatable pool mattress", (W, 180)),
    ("semsiyeli_masa", "bahce", False, "Şemsiyeli masa", "a round garden table with a big striped umbrella", (H, 220)),
    ("havuz_dusu", "bahce", False, "Havuz duşu", "an outdoor pool shower", (H, 200)),
    ("havuz_bari", "bahce", False, "Havuz barı", "a little tiki juice bar with straw roof", (H, 110)),
    ("hamak", "bahce", False, "Hamak", "a striped hammock between two posts", (H, 100)),
    ("cardak", "bahce", False, "Çardak", "a white garden gazebo with flowers", (H, 250)),
    ("havuz_lambasi", "bahce", False, "Bahçe feneri", "a garden lantern lamp on a post", (H, 120)),
    ("su_tabancasi", "bahce", False, "Su tabancası", "a colorful water squirt gun", (W, 30)),
    ("deniz_gozlugu", "bahce", False, "Deniz gözlüğü", "kids swimming goggles", (W, 20)),
    ("havlu_sezlong", "bahce", False, "Havlulu şezlong", "a lounge chair with a beach towel", (H, 80)),
    # --- ışık (her oda)
    ("tavan_lambasi_yildiz", "hepsi", False, "Yıldız tavan lambası", "a star shaped ceiling lamp", (H, 50)),
    ("duvar_apligi", "hepsi", False, "Duvar apliği", "a cute brass wall sconce lamp with a pastel shade", (H, 35)),
    ("neon_kalp", "hepsi", False, "Neon kalp", "a glowing pink neon heart wall sign", (W, 50)),
    ("neon_gokkusagi", "hepsi", False, "Neon gökkuşağı", "a glowing rainbow neon wall sign", (W, 60)),
    ("bulut_lamba", "hepsi", False, "Bulut lamba", "a glowing cloud shaped wall lamp", (W, 50)),
    ("mantar_lamba", "hepsi", False, "Mantar lamba", "a red mushroom shaped table lamp", (H, 30)),
    ("fener_lamba", "hepsi", False, "Fener", "a little lantern with a candle light", (H, 30)),
    ("mum_seti", "hepsi", False, "Mumlar", "three glowing candles of different sizes", (H, 20)),
    # --- süs ve ev aksesuarları (her oda)
    ("yastik_seti", "hepsi", False, "Yastıklar", "a pile of three cute cushions: a heart, a star and a cloud", (W, 50)),
    ("orgu_battaniye", "hepsi", False, "Örgü battaniye", "a folded chunky knit blanket", (W, 50)),
    ("kedi_saat", "hepsi", False, "Kedi saat", "a cat shaped wall clock with a swinging tail", (H, 45)),
    ("terrarium", "hepsi", False, "Teraryum", "a glass terrarium with tiny plants", (H, 25)),
    ("cerceve_seti", "hepsi", False, "Fotoğraf çerçeveleri", "three small standing photo frames with family drawings", (W, 40)),
    ("dekor_sepet", "hepsi", False, "Örgü sepet", "a woven basket with a folded blanket", (H, 40)),
    ("seramik_kus", "hepsi", False, "Seramik kuş", "a cute ceramic bird figurine", (H, 15)),
    ("boncuk_perde", "hepsi", False, "Boncuk perde", "a pastel bead curtain with hearts", (H, 120)),
    ("ruya_kapani", "hepsi", False, "Rüya kapanı", "a dreamcatcher with feathers", (H, 60)),
    ("duvar_yildizlari", "hepsi", False, "Duvar yıldızları", "a group of glow in the dark stars for the wall", (W, 60)),
    # --- parti
    ("balon_kemeri", "parti", False, "Balon kemeri", "a pastel balloon arch", (H, 220)),
    ("flama", "parti", False, "Flama", "a pastel triangle bunting garland", (W, 200)),
    ("parti_masasi", "parti", False, "Parti masası", "a party table with a festive tablecloth, plates and cups", (H, 80)),
    ("dogum_gunu_pastasi", "parti", False, "Doğum günü pastası", "a tall birthday cake with candles and sprinkles", (H, 35)),
    ("hediye_yigini", "parti", False, "Hediye yığını", "a pile of wrapped presents with bows", (H, 50)),
    ("konfeti_patlatici", "parti", False, "Konfeti", "a party popper with confetti", (W, 20)),
    ("parti_sapkasi", "parti", False, "Parti şapkası", "a striped cone party hat with a pom pom", (H, 20)),
    ("pinata", "parti", False, "Pinyata", "a colorful donkey pinata hanging from a string", (H, 70)),
    ("kapkek_kulesi", "parti", False, "Kek kulesi", "a cupcake tower with colorful cupcakes", (H, 45)),
    ("limonata_surahisi", "parti", False, "Limonata sürahisi", "a jug of pink lemonade with lemon slices", (H, 30)),
    ("kagit_fener", "parti", False, "Kâğıt fenerler", "three hanging paper lanterns in pastel colors", (H, 60)),
    ("balon_hayvan", "parti", False, "Balon köpek", "a balloon animal dog", (H, 40)),
    ("parti_duduk", "parti", False, "Parti düdüğü", "a party blower horn", (W, 15)),
    ("yildiz_balon", "parti", False, "Yıldız balon", "a golden star foil balloon", (H, 60)),
    ("dans_isigi", "parti", False, "Disko ışığı", "a small party disco light projecting colorful dots", (H, 40)),
    ("sac_kulahi_pasta", "parti", False, "Dondurmalı pasta", "an ice cream cake with a cherry", (H, 30)),
    # --- önceki yeni odalara ek
    ("oyuncak_bebek_arabasi", "oyun", False, "Oyuncak bebek arabası", "a small toy doll stroller with a doll inside", (H, 60)),
    ("top_sepeti", "oyun", False, "Top sepeti", "a basket full of colorful balls", (H, 40)),
    ("hula_hop", "oyun", False, "Hula hop", "a striped hula hoop", (W, 70)),
    ("oyuncak_piyano", "oyun", False, "Oyuncak piyano", "a small pink toy piano", (H, 40)),
    ("kale_cadiri", "oyun", False, "Kale yapbozu", "a big foam castle building blocks set", (H, 60)),
    ("bebek_aynasi", "bebekodasi", False, "Bebek aynası", "a soft baby floor mirror with a rainbow frame", (W, 40)),
    ("bebek_pelus_seti", "bebekodasi", False, "Peluş seti", "three tiny plush toys: a bunny, a bear and a duck", (W, 35)),
    ("bebek_ayakkabisi", "bebekodasi", False, "Patik", "a pair of knitted baby booties", (W, 15)),
    ("bebek_sallanir_tavsan", "bebekodasi", False, "Sallanan tavşan", "a soft rocking bunny toy", (H, 45)),
    ("bebek_kitapligi", "bebekodasi", False, "Bebek kitaplığı", "a low baby bookshelf with soft books", (H, 60)),
    ("aksesuar_kutusu", "giyinme", False, "Aksesuar kutusu", "an open box with sunglasses, watches and hair clips", (W, 35)),
    ("tac_standi", "giyinme", False, "Taç standı", "a stand with three tiaras", (H, 40)),
    ("canta_koleksiyonu", "giyinme", False, "Çanta koleksiyonu", "a shelf with five cute bags", (H, 100)),
    ("ayakkabi_kutusu", "giyinme", False, "Ayakkabı kutusu", "an open shoe box with sparkly shoes", (W, 35)),
    ("isikli_dolap", "giyinme", False, "Işıklı vitrin", "a lighted glass wardrobe showing dresses", (H, 190)),
    ("cocuk_sergisi", "atolye", False, "Çocuk sergisi", "an easel board with kids art pinned on it", (H, 150)),
    ("boya_rafi", "atolye", False, "Boya rafı", "a wall shelf with paint jars in rainbow order", (W, 80)),
    ("kolaj_masasi", "atolye", False, "Kolaj masası", "a table with paper cutouts and stickers", (H, 75)),
    ("sanat_onlugu", "atolye", False, "Önlük", "a painting apron with paint splashes", (H, 50)),
    ("heykel_seti", "atolye", False, "Kil hayvanlar", "three small clay animal figures", (W, 30)),
    ("mikrofon_standi", "muzik", False, "Mikrofon standı", "a microphone on a tall stand", (H, 150)),
    ("gitar_standi", "muzik", False, "Gitar standı", "a stand holding two guitars", (H, 110)),
    ("notalar", "muzik", False, "Nota kitabı", "an open music book with colorful notes", (W, 30)),
    ("isikli_kurs", "muzik", False, "Sahne merdiveni", "small lighted stage steps", (H, 30)),
    ("plak_rafi", "muzik", False, "Plak rafı", "a shelf with colorful vinyl records", (H, 90)),
    ("kitap_kosesi_minder", "kutuphane", False, "Minder köşesi", "a corner with big floor pillows and a soft rug", (W, 140)),
    ("bilgi_kuresi_lamba", "kutuphane", False, "Gezegen lamba", "a glowing planet shaped lamp", (H, 35)),
    ("harf_bloklari", "kutuphane", False, "Bloklar", "a stack of colorful wooden blocks with pictures, no letters", (H, 30)),
    ("kitap_okuyan_ayi", "kutuphane", False, "Okuyan ayıcık", "a teddy bear reading a book", (H, 35)),
    ("posta_kutusu_kitap", "kutuphane", False, "Kitap iade kutusu", "a cute red book return box", (H, 100)),
]

NEW_VARIANTS += [
    ("v_pet_yatagi", "petrevir", "Pet yatağı", (W, 60), [
        "a round grey pet bed", "a pink pet bed with a crown", "a pet bed shaped like a donut", "a pet bed shaped like a slipper",
        "a pet bed shaped like a cloud", "a royal pet bed with a canopy"]),
    ("v_pet_kafesi", "petrevir", "Pet evi", (H, 70), [
        "a white pet crate", "a wooden pet house", "a pet house shaped like a castle", "a pet tent", "a bird house on a stand"]),
    ("v_kuafor_koltugu", "makyaj", "Kuaför koltuğu", (H, 110), [
        "a white salon chair", "a mint salon chair", "a lilac velvet salon chair", "a golden salon chair", "a salon chair shaped like a shell"]),
    ("v_oje", "makyaj", "Oje", (H, 10), [
        "a red nail polish bottle", "a pink nail polish bottle", "a glitter nail polish bottle", "a mint nail polish bottle",
        "a purple nail polish bottle", "a rainbow nail polish bottle"]),
    ("v_salincak", "oyunparki", "Salıncak", (H, 200), [
        "a single swing", "a baby bucket swing", "a tire swing", "a nest swing", "a swing shaped like a horse"]),
    ("v_kaydirak", "oyunparki", "Kaydırak", (H, 150), [
        "a small plastic slide", "a wavy slide", "a double slide", "a slide shaped like an elephant", "a spiral slide"]),
    ("v_sisme", "bahce", "Şişme oyuncak", (W, 120), [
        "an inflatable crocodile float", "an inflatable pizza float", "an inflatable rainbow float", "an inflatable whale float",
        "an inflatable boat", "an inflatable star float"]),
    ("v_avize", "hepsi", "Avize", (H, 70), [
        "a simple white pendant lamp", "a crystal chandelier", "a flower shaped chandelier", "a hot air balloon lamp",
        "a moon and stars chandelier", "a candy colored chandelier"]),
    ("v_aplik", "hepsi", "Duvar lambası", (H, 35), [
        "a star wall lamp", "a moon wall lamp", "a flower wall lamp", "a heart wall lamp", "a rainbow wall lamp"]),
    ("v_yastik", "hepsi", "Yastık", (W, 40), [
        "a heart cushion", "a star cushion", "a cat cushion", "a rainbow cushion", "a donut cushion", "a strawberry cushion"]),
    ("v_vazo", "hepsi", "Vazo", (H, 35), [
        "a white vase with tulips", "a pink vase with roses", "a blue vase with daisies", "a glass vase with sunflowers",
        "a round vase with lavender", "a golden vase with peonies"]),
    ("v_cerceve", "hepsi", "Çerçeve", (W, 40), [
        "a framed family photo drawing", "a framed pet photo drawing", "a framed beach photo drawing", "a framed baby photo drawing",
        "a heart shaped photo frame", "a star shaped photo frame"]),
    ("v_parti_pastasi", "parti", "Parti pastası", (H, 35), [
        "a chocolate birthday cake", "a unicorn cake", "a rainbow cake", "a princess castle cake", "a strawberry cake", "a three tier party cake"]),
    ("v_hediye", "parti", "Hediye kutusu", (H, 30), [
        "a pink gift box with a bow", "a blue gift box with stars", "a striped gift box", "a round gift box",
        "a heart shaped gift box", "a big golden gift box"]),
    ("v_balon", "parti", "Balon", (H, 60), [
        "a pink heart balloon", "a blue round balloon", "a rainbow balloon", "a unicorn balloon", "a cat balloon", "a number free star balloon"]),
]

# Odası olmayan yeni eşyaların menüde görüneceği odalar
PARTI_ROOMS = ["salon", "mutfak", "oyun", "yatak", "muzik", "havuz", "oyunparki"]

ALSO_ROOMS += [
    (r"^(v_bahce_bitki_\d+|agac|cit|cicektarhi|bisiklet|trambolin|kaydirak|salincak|kumkovasi|v_oyun_parki_\d+|piknik|limonatastandi|mangal|v_bahce_mobilya_\d+|semsiyeli_masa|havuz_lambasi|su_tabancasi|cardak|hamak)$", ["oyunparki"]),
    (r"^(kedi_tirmalama|pet_yatagi_yuvarlak|mama_kabi|su_kabi|pet_oyuncaklari|v_pet_yatagi_\d+)$", ["salon", "yatak", "mutfak"]),
    (r"^(makyaj_cantasi|ruj_seti|far_paleti|fon_makinesi|tarak_firca|v_oje_\d+|sac_bandi|yuz_maskesi_seti)$", ["giyinme", "yatak", "banyo"]),
    (r"^(v_makyaj_\d+|makyaj|kozmetik|boyaynasi|isikli_boy_aynasi|kapitone_puf|parfum_seti)$", ["makyaj"]),
    (r"^(kedi|kedi2|kedi3|kopek|kopek2|tavsan|hamster|papagan|kaplumbaga|panda|midilli|ordekyavrusu|v_evcil_esya_\d+|kediyatagi|kediagaci|kuskafesi|akvaryum|kopekkulubesi)$", ["petrevir"]),
]


# ------------------------------------------------------------------ giydirme (src/dress.ts ile aynı sıra)
_DRESS = {
    "bas": ["a small golden crown with pink gems", "a big red hair bow", "a straw sun hat with a ribbon", "a pastel baseball cap",
            "a pink flower hair clip", "a yellow star hair clip", "a unicorn horn headband", "a cat ears headband", "a daisy flower hairband",
            "a sparkly gem tiara"],
    "goz": ["a pair of black sunglasses", "a pair of round glasses", "a pair of swim goggles", "a pair of heart shaped glasses",
            "a pair of star shaped glasses", "a pair of rainbow glasses"],
    "kulak": ["a pair of pastel headphones", "a single small gem earring", "a single star earring", "a single moon earring",
              "a single cherry earring", "a single heart earring"],
    "boyun": ["a pearl necklace", "a necklace with a heart pendant", "a necklace with a star pendant", "a flower garland necklace",
              "a gold medal on a ribbon", "a striped knitted scarf"],
    "bilek": ["a kids wrist watch", "a sparkly ring", "a rainbow bead bracelet", "a gem bracelet", "a bracelet with a bow"],
    "el": ["a smartphone with a pink case", "a sparkly microphone", "a swirl lollipop", "a closed umbrella", "a magic wand with a star",
           "a red balloon on a string"],
    "canta": ["a small handbag", "a little purse", "a kids backpack", "a mini suitcase", "a picnic basket", "a shopping bag"],
    "ayak": ["a single white sneaker seen from the front", "a single red party shoe seen from the front", "a single pink ballet flat seen from the front",
             "a single rain boot seen from the front", "a single ballet slipper seen from the front", "a single flip flop seen from the front"],
    "yuz": ["a tiny pink heart face sticker", "a tiny gold star face sticker", "a tiny butterfly face sticker", "a tiny rainbow face sticker",
            "a tiny flower face sticker", "a tiny sparkle face sticker"],
}
DRESS_ITEMS = [(f"aks_{k}_{i + 1:02d}", f"Aksesuar {k} {i + 1}", en) for k, lst in _DRESS.items() for i, en in enumerate(lst)]

# Saç modelleri: kel karakterin üstüne giyilen saç parçaları (önden, yüz kısmı boş)
HAIRS = ["long straight hair with bangs", "short bob hair", "two space buns", "a high ponytail", "long wavy hair", "two braids",
         "a curly afro puff", "a pixie cut", "a side braid", "long hair with a headband", "short curly hair", "a messy bun"]
HAIR_ITEMS = [(f"aks_sac_{i + 1:02d}", f"Saç {i + 1}", f"a cartoon hairstyle piece only: {en}, seen from the front, with an empty space where the face goes, no face, no body, no head") for i, en in enumerate(HAIRS)]


# ------------------------------------------------------------------ giydirme v2: karaktere göre, giyildiği açıda
# (yuva, Türkçe başlık, açı/oturuş tarifi, [parçalar]) — kodlar aynı kalır (aks_<yuva>_NN), resimler değişir.
DRESS_V2 = [
    ("ayak", "Ayakkabılar (çift, önden)",
     "each item is a PAIR of shoes exactly as worn by this character, seen straight from the front at the character's eye level, "
     "toes pointing toward the viewer, the two shoes side by side with the same small gap as this character's feet, the opening of "
     "each shoe at the top is EMPTY (no foot, no leg, no sock inside), flat bottoms resting on one line",
     ["white sneakers with laces", "red party shoes with a strap", "pink ballet flats with a bow", "mint rain boots",
      "lilac ballet slippers with crossed ribbons", "light blue flip flops"]),
    ("bas", "Başa takılanlar (önden)",
     "each item is seen straight from the front exactly as it sits on this character's head, sized to fit this character's head width, "
     "the bottom edge shaped to sit on top of a head, but the head and hair themselves are NOT drawn (empty white below the accessory)",
     ["a small golden crown", "a big red hair bow", "a straw sun hat with a ribbon", "a pastel baseball cap facing forward",
      "a pink flower hair clip", "a yellow star hair clip", "a unicorn horn headband", "a cat ears headband", "a daisy flower crown",
      "a sparkly gem tiara"]),
    ("goz", "Gözlükler (önden)",
     "each item is a pair of glasses seen straight from the front exactly as worn on this character's face, the two lenses spaced "
     "exactly like this character's eyes, temples hidden behind",
     ["black sunglasses", "round glasses", "swim goggles", "heart shaped glasses", "star shaped glasses", "rainbow glasses"]),
    ("kulak", "Kulaklık ve küpeler (önden)",
     "the headphones are seen straight from the front exactly as worn on this character's head: the band over the top of the head and "
     "the two ear cups on the sides at ear height, with an EMPTY space in the middle where the face goes; each earring is a PAIR, "
     "seen from the front, hanging, spaced like this character's ears",
     ["pastel headphones", "a pair of small gem earrings", "a pair of star earrings", "a pair of moon earrings",
      "a pair of cherry earrings", "a pair of heart earrings"]),
    ("boyun", "Kolye ve atkılar (önden)",
     "each item is seen straight from the front exactly as worn around this character's neck, the top edge shaped like this "
     "character's neckline, sized to this character's shoulders",
     ["a pearl necklace", "a necklace with a heart pendant", "a necklace with a star pendant", "a flower garland necklace",
      "a gold medal on a ribbon", "a striped knitted scarf wrapped around the neck"]),
    ("bilek", "Saat ve bileklikler (önden)",
     "each item is seen from the front as an empty loop exactly as it would sit around this character's small wrist, sized to the wrist, with NO wrist or arm inside (empty white inside the loop)",
     ["a kids wrist watch", "a sparkly ring", "a rainbow bead bracelet", "a gem bracelet", "a bracelet with a bow"]),
    ("el", "Elde tutulanlar",
     "each item stands upright by itself, NOT held by any hand: draw ONLY the object, sized for this character's hand, the part that would be "
     "gripped at the bottom center",
     ["a smartphone in a pink case, screen facing the viewer", "a sparkly microphone", "a swirl lollipop", "a closed umbrella held by the handle",
      "a magic wand with a star", "a red balloon on a string (string end at the bottom)"]),
    ("canta", "Çantalar",
     "each bag is seen from the front exactly as carried by this character: hand bags hang straight down from the handle (handle at "
     "the top center), the backpack is seen from the FRONT showing only its two shoulder straps (as worn on the back), the suitcase "
     "is upright on its wheels with the extended handle at the top, sized for this character",
     ["a small pink handbag", "a little mint coin purse", "the two front shoulder straps of a light blue backpack", "a lilac rolling suitcase",
      "a picnic basket", "a mint shopping bag"]),
    ("yuz", "Yüz süsleri",
     "each item is a tiny face sticker, seen straight from the front, sized for this character's cheek",
     ["a tiny pink heart", "a tiny gold star", "a tiny butterfly", "a tiny rainbow", "a tiny flower", "a tiny sparkle"]),
]
