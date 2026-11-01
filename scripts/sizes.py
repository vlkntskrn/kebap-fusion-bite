#!/usr/bin/env python3
"""
Eşyalara gerçekçi boyut verir ve src/assets/items.json'a yazar:
  w   : oyundaki genişlik (eski oda genişliğine göre %), gerçek yükseklikten ve resmin oranından hesaplanır
  ar  : resmin yükseklik/genişlik oranı
  top : üstüne eşya konabilen eşyalarda (masa, tezgâh…) üst yüzeyin resmin tepesinden uzaklığı (0..1)
Kullanım: python3 -I scripts/sizes.py   (asset_catalog.py'den sonra çalıştırın)
"""
import json
import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ITEMS = ROOT / "src" / "assets" / "items"
CM = 1.115  # oda birimi / cm (duvar 290 birim ≈ 260 cm)

# ('h', cm) = gerçek yükseklik, ('w', cm) = gerçek genişlik (yere serilen ve yassı şeyler)
H, W = "h", "w"
EXACT = {
    # yatak odası
    "yatak": (H, 90), "yuvarlakyatak": (H, 110), "cibinlikliyatak": (H, 190), "ranza": (H, 165), "besik": (H, 110),
    "v_yatak_06": (H, 80), "v_yatak_07": (H, 150), "v_yatak_08": (H, 180),
    "dolap": (H, 180), "kiyafetaski": (H, 150), "sifonyer": (H, 90), "makyaj": (H, 140), "kozmetik": (H, 60),
    "koltuk": (H, 180), "armut": (H, 70), "cicekminder": (W, 60), "bilgisayar": (H, 120), "calismamasasi": (H, 110),
    "kitaplik": (H, 120), "aynadalga": (H, 70), "boyaynasi": (H, 160), "komodin": (H, 85), "gecelambasi": (H, 22),
    "oyuncaksandigi": (H, 60), "unicorn": (H, 35), "oyuncakev": (H, 70), "yazitahtasi": (H, 110), "duvarrafi": (W, 70),
    "fotoipi": (W, 120), "perde": (H, 200), "kedipostu": (H, 55),
    # mutfak
    "retrobuzdolabi": (H, 165), "tezgah": (H, 110), "ocak": (H, 95), "firin": (H, 90), "lavabo": (H, 100),
    "mikrodalga": (H, 30), "tost": (H, 22), "kahve": (H, 34), "blender": (H, 38), "mikser": (H, 34), "kettle": (H, 26),
    "caydanlik": (H, 22), "rafkupa": (W, 70), "tabakdolabi": (H, 90), "kasiklik": (W, 60), "masa": (H, 75),
    "yuvarlakmasa": (H, 95), "sandalye": (H, 90), "tabure": (H, 75), "mamasandalyesi": (H, 100), "meyve": (W, 30),
    "ekmek": (W, 30), "pasta": (H, 22), "kurabiye": (H, 24), "pizza": (W, 32), "hamburger": (W, 14), "salata": (W, 26),
    "cilek": (W, 24), "sut": (H, 22), "limonata": (H, 26), "saksiotlar": (W, 40), "v_ocak_06": (H, 140), "v_tezgah_04": (H, 150),
    "v_sandalye_04": (H, 75), "v_masa_mutfak_03": (H, 95),
    # banyo
    "kuvet": (H, 85), "jakuzi": (H, 95), "duskabini": (H, 200), "banyolavabo": (H, 150), "tuvalet": (H, 80), "camasir": (H, 85),
    "sampuan": (W, 60), "sepet": (H, 50), "robot": (W, 35), "havlu": (W, 60), "bornoz": (H, 100), "ayna": (W, 60),
    "ordek": (W, 14), "dissfircasi": (H, 20), "sabunluk": (H, 18), "paspas": (W, 80), "v_kuvet_04": (H, 110),
    "v_lavabo_01": (H, 110), "v_banyo_aksesuar_01": (W, 60), "v_banyo_aksesuar_02": (H, 50), "v_banyo_aksesuar_03": (H, 18),
    "v_banyo_aksesuar_04": (W, 16), "v_banyo_aksesuar_05": (W, 32), "v_banyo_aksesuar_06": (W, 30), "v_banyo_aksesuar_07": (H, 100),
    "v_banyo_aksesuar_08": (W, 60), "v_banyo_aksesuar_09": (H, 30), "v_banyo_aksesuar_10": (W, 35),
    # salon
    "kanepe": (H, 85), "kosekanepe": (H, 85), "berjer": (H, 90), "tv": (H, 100), "tvunitesi": (H, 70), "sehpa": (H, 45),
    "oyunrafi": (H, 100), "kediagaci": (H, 150), "akvaryum": (H, 40), "piyano": (H, 130), "somine": (H, 120), "kuskafesi": (H, 70),
    "v_koltuk_01": (H, 100), "v_koltuk_04": (H, 180), "v_koltuk_05": (H, 70), "v_tv_02": (H, 120), "v_tv_03": (H, 55),
    "v_tv_04": (H, 110), "v_tv_05": (H, 180), "v_sehpa_04": (H, 50), "v_muzik_01": (H, 90), "v_muzik_02": (H, 95),
    "v_muzik_04": (H, 90), "v_muzik_05": (H, 170), "v_muzik_06": (H, 150), "v_evcil_esya_01": (W, 60), "v_evcil_esya_02": (H, 150),
    "v_evcil_esya_03": (H, 50), "v_evcil_esya_04": (H, 70), "v_evcil_esya_05": (H, 90), "v_evcil_esya_06": (H, 40), "kediyatagi": (W, 60),
    # her oda
    "abajur": (H, 50), "lambader": (H, 160), "puf": (H, 42), "buyukbitki": (H, 120), "bitki": (H, 45), "sarkitbitki": (H, 70),
    "kaktus": (H, 35), "disko": (H, 70), "sarkit": (H, 60), "perilamba": (W, 200), "kalpisik": (W, 200), "tablo": (W, 60),
    "cerceve": (W, 60), "oyunkonsolu": (W, 35), "vazo": (H, 35), "duvarsaati": (H, 35), "ayi": (H, 40), "top": (W, 30),
    "copkutusu": (H, 45), "kalpbalon": (H, 120), "dondurma": (H, 20), "cadir": (H, 170), "yuvarlakhali": (W, 160),
    "v_bitki_02": (H, 40), "v_bitki_03": (H, 120), "v_bitki_04": (H, 80), "v_bitki_05": (H, 60), "v_bitki_07": (H, 120),
    "v_bitki_08": (H, 70), "v_lamba_02": (H, 35), "v_lamba_03": (H, 35), "v_lamba_04": (H, 35), "v_lamba_05": (H, 40),
    "v_lamba_06": (H, 70), "v_ayna_02": (H, 160), "v_raf_02": (H, 150), "v_raf_05": (H, 100),
    "v_oyuncak_01": (W, 40), "v_oyuncak_02": (W, 30), "v_oyuncak_03": (W, 40), "v_oyuncak_04": (W, 40), "v_oyuncak_05": (H, 35),
    "v_oyuncak_06": (H, 45), "v_oyuncak_07": (H, 45), "v_oyuncak_08": (H, 50), "v_oyuncak_09": (H, 70),
    "v_oturak_01": (H, 40), "v_oturak_02": (H, 70), "v_oturak_03": (H, 70), "v_oturak_04": (H, 180), "v_oturak_05": (H, 90), "v_oturak_06": (H, 120),
    # bahçe
    "sezlong": (H, 80), "semsiye": (H, 220), "flamingo": (H, 80), "simit": (W, 80), "palmiye": (H, 350), "buzkutusu": (H, 40),
    "kaydirak": (H, 150), "salincak": (H, 200), "trambolin": (H, 120), "kumkovasi": (H, 25), "mangal": (H, 100), "cicektarhi": (W, 120),
    "agac": (H, 300), "cit": (H, 100), "kopekkulubesi": (H, 90), "bisiklet": (H, 80), "limonatastandi": (H, 180), "gokkusagi": (H, 150),
    "piknik": (W, 180), "ayihali": (W, 150), "v_havuz_oyuncak_01": (W, 80), "v_havuz_oyuncak_02": (W, 40), "v_havuz_oyuncak_03": (W, 100),
    "v_havuz_oyuncak_04": (W, 120), "v_havuz_oyuncak_05": (W, 90), "v_havuz_oyuncak_06": (W, 110), "v_havuz_oyuncak_07": (W, 100),
    "v_havuz_oyuncak_08": (H, 150), "v_bahce_mobilya_01": (H, 85), "v_bahce_mobilya_02": (H, 80), "v_bahce_mobilya_03": (W, 200),
    "v_bahce_mobilya_04": (H, 200), "v_bahce_mobilya_05": (H, 75), "v_bahce_mobilya_06": (H, 220), "v_bahce_mobilya_07": (H, 190),
    "v_oyun_parki_01": (H, 150), "v_oyun_parki_02": (W, 150), "v_oyun_parki_03": (W, 200), "v_oyun_parki_04": (H, 120),
    "v_oyun_parki_05": (H, 170), "v_oyun_parki_06": (H, 250), "v_bahce_bitki_01": (W, 120), "v_bahce_bitki_02": (H, 100),
    "v_bahce_bitki_03": (H, 300), "v_bahce_bitki_04": (H, 350), "v_bahce_bitki_05": (H, 300), "v_bahce_bitki_06": (H, 150),
    "v_bahce_bitki_07": (W, 120), "v_bahce_bitki_08": (H, 100),
    # karakterler ve hayvanlar
    "bebek1": (H, 60), "bebek2": (H, 60), "anne": (H, 170), "baba": (H, 175), "ogretmen": (H, 168), "nine": (H, 158), "dede": (H, 162),
    "kedi": (H, 35), "kedi2": (H, 35), "kedi3": (H, 35), "kopek": (H, 45), "kopek2": (H, 45), "tavsan": (H, 35), "hamster": (H, 18),
    "papagan": (H, 30), "kaplumbaga": (H, 20), "ordekyavrusu": (H, 20), "midilli": (H, 100), "panda": (H, 70),
}
PREFIX = [
    (r"^kiz\d|^oglan\d", (H, 125)),
    (r"^v_yatak_", (H, 95)), (r"^v_dolap_", (H, 175)), (r"^v_makyaj_", (H, 140)), (r"^v_masa_mutfak_", (H, 80)), (r"^v_masa_", (H, 110)),
    (r"^buzdolabi", (H, 175)), (r"^v_ocak_", (H, 95)), (r"^v_tezgah_", (H, 100)), (r"^v_sandalye_", (H, 90)),
    (r"^v_alet_(08|09|10)", (H, 48)), (r"^v_alet_", (H, 30)), (r"^v_yemek_09", (H, 32)), (r"^v_yemek_", (W, 26)), (r"^v_tabak_03", (H, 90)),
    (r"^v_tabak_", (W, 70)), (r"^v_kuvet_", (H, 85)), (r"^v_lavabo_", (H, 150)), (r"^v_dus_", (H, 200)), (r"^v_tuvalet_", (H, 80)),
    (r"^v_kanepe_", (H, 85)), (r"^v_koltuk_", (H, 95)), (r"^v_sehpa_", (H, 45)), (r"^v_bitki_", (H, 50)), (r"^v_lamba_", (H, 50)),
    (r"^v_hali_", (W, 160)), (r"^v_tablo_", (W, 60)), (r"^v_ayna_", (H, 80)), (r"^v_raf_", (W, 75)),
]
# Üstüne eşya konabilenler (üst yüzey resimden bulunur).
HOSTS = [r"^masa$", r"^yuvarlakmasa$", r"^v_masa", r"^sehpa$", r"^v_sehpa_", r"^tezgah$", r"^v_tezgah_", r"^lavabo$", r"^komodin$",
         r"^sifonyer$", r"^tvunitesi$", r"^calismamasasi$", r"^bilgisayar$", r"^makyaj$", r"^v_makyaj_", r"^banyolavabo$", r"^v_lavabo_0[3-6]",
         r"^kozmetik$", r"^v_tabak_03$", r"^v_bahce_mobilya_05$", r"^piyano$", r"^somine$", r"^kitaplik$", r"^oyuncaksandigi$", r"^firin$",
         r"^camasir$", r"^oyunrafi$", r"^limonatastandi$", r"^v_oturak_01$", r"^puf$"]


def spec(code):
    if code in EXACT:
        return EXACT[code]
    for pat, sp in PREFIX:
        if re.match(pat, code):
            return sp
    return None


def top_inset(im: Image.Image) -> float:
    """Üst yüzey: tepeden itibaren en geniş satırın %85'ine ulaşan ilk satır."""
    a = im.getchannel("A")
    w, h = a.size
    px = a.load()
    widths = []
    for y in range(h):
        xs = [x for x in range(0, w, 2) if px[x, y] > 40]
        widths.append((xs[-1] - xs[0]) if xs else 0)
    m = max(widths) or 1
    for y, ww in enumerate(widths):
        if ww >= 0.85 * m:
            return min(0.6, y / h + 0.03)
    return 0.05


def main():
    path = ROOT / "src" / "assets" / "items.json"
    items = json.loads(path.read_text())
    by_id = {e["id"]: e for e in items}
    missing = []
    for f in sorted(ITEMS.glob("*.webp")):
        code = f.stem
        if code.startswith(("ui_", "kelime_", "cikartma_", "arka_", "uygulama")):
            continue
        sp = spec(code)
        if not sp:
            missing.append(code)
            continue
        im = Image.open(f).convert("RGBA")
        iw, ih = im.size
        ar = ih / iw
        kind, cm = sp
        width_units = cm * CM / ar if kind == H else cm * CM
        e = by_id.setdefault(code, {"id": code})
        if e not in items:
            items.append(e)
        e["w"] = round(width_units / 4, 2)
        e["ar"] = round(ar, 3)
        if any(re.match(p, code) for p in HOSTS):
            e["top"] = round(top_inset(im), 3)
        else:
            e.pop("top", None)
    path.write_text(json.dumps(items, ensure_ascii=False, indent=1) + "\n")
    print(f"{len(items)} kayıt; boyutu tanımsız: {missing}")


if __name__ == "__main__":
    main()
