/**
 * Evdeki oyun kuralları: hangi eşya yatak, hangisi oturulur, hangisi açılır, hangisi yenir…
 * Eşya kodları scripts/asset_catalog.py'deki kodlardır.
 */
import { sfx } from './sfx';
import { img } from './assets';
import { THINGS } from './house-items';

const R = (s: string) => new RegExp(`^(${s})`);

/** Karakterin eşya üstündeki duruşu. */
export type Pose = 'otur' | 'yat' | 'banyo' | 'dus' | 'yuz';

const PERSON = R('bebek$|bebek1$|bebek2$|kiz\\d$|oglan\\d$|anne$|baba$|nine$|dede$|ogretmen$');
const PET = R('kedi\\d?$|kopek\\d?$|tavsan$|hamster$|papagan$|kaplumbaga$|ordekyavrusu$|midilli$|panda$');
export const isPerson = (id: string) => PERSON.test(id);
/** Bebek karakterler (mama sandalyesi, beşik, bebek arabası yalnızca onlar için). */
export const isBaby = (id: string) => /^bebek\d$/.test(id);
const BABY_ONLY = R('mamasandalyesi$|sallanan_besik$|v_besik_|bebek_arabasi$|v_bebek_arabasi_|bebek_kuveti$|bebek_salincagi$|oyun_parki$|besik$');
export const babyOnly = (id: string) => BABY_ONLY.test(id);
/** Yalnızca hayvanların yatabildiği/girebildiği eşyalar. */
const PET_ONLY = R('muayene_masasi$|pet_yatagi_yuvarlak$|v_pet_yatagi_|pet_kuveti$|kediyatagi$|v_evcil_esya_01$|pet_kafesi$|v_pet_kafesi_');
export const petOnly = (id: string) => PET_ONLY.test(id);
/** Makyaj yapılabilen karakterler (kızlar ve kadınlar). */
export const canMakeup = (id: string) => /^(kiz\d|anne|nine|ogretmen|bebek2)$/.test(id);
export const isPet = (id: string) => PET.test(id);

const BED = R('pet_kafesi$|v_pet_kafesi_|hamak$|sisme_yatak$|muayene_masasi$|pet_yatagi_yuvarlak$|v_pet_yatagi_|besik$|kaydirakli_yatak$|sallanan_besik$|v_besik_|oyun_parki$|yatak$|yuvarlakyatak$|cibinlikliyatak$|ranza$|v_yatak_|kediyatagi$|v_evcil_esya_01$');
const SEAT = R('kuafor_koltugu$|v_kuafor_koltugu_|bekleme_sandalyesi$|bekleme_koltugu_salon$|sac_yikama_lavabosu$|salincak_seti$|v_salincak_|tahterevalli$|yayli_at$|park_banki$|havlu_sezlong$|atlikarinca$|bebek_arabasi$|v_bebek_arabasi_|ic_salincak$|bebek_salincagi$|hikaye_sandalyesi$|v_top_havuzu_|v_kitap_kosesi_|emzirme_koltugu$|sallanan_at$|kapitone_puf$|sanat_taburesi$|okuma_koltugu$|okuma_minderi$|v_okuma_koltugu_|akulu_araba$|dev_ayi$|top_havuzu$|kucuk_sahne$|sandalye$|v_sandalye_|tabure$|koltuk$|berjer$|kanepe$|kosekanepe$|v_kanepe_|v_koltuk_|v_oturak_|puf$|armut$|sezlong$|mamasandalyesi$|salincak$|cicekminder$|v_bahce_mobilya_0[1-4]$');
const TOILET = R('tuvalet$|v_tuvalet_');
const TUB = R('pet_kuveti$|spa_ayak_kuveti$|bebek_kuveti$|kuvet$|jakuzi$|v_kuvet_');
const SHOWER = R('duskabini$|v_dus_');

/** Eşyaya bırakılan karakterin duruşu ve oturduğu yerin yüksekliği (eşya boyunun tabandan oranı). */
export function poseFor(hostId: string): { p: Pose; at: number } | null {
  if (BED.test(hostId)) return { p: 'yat', at: 0.3 };
  if (SEAT.test(hostId) || TOILET.test(hostId)) return { p: 'otur', at: 0.45 };
  if (TUB.test(hostId)) return { p: 'banyo', at: 0.5 };
  if (SHOWER.test(hostId)) return { p: 'dus', at: 0.04 };
  return null;
}

const FOOD = R('dogum_gunu_pastasi$|kapkek_kulesi$|limonata_surahisi$|sac_kulahi_pasta$|v_parti_pastasi_|biberon$|v_yemek_|pasta$|kurabiye$|pizza$|hamburger$|salata$|cilek$|meyve$|ekmek$|sut$|limonata$|dondurma$|kelime_elma$|kelime_muz$|kelime_armut$|kelime_simit$|kelime_kek$|kelime_peynir$|kelime_limon$|kelime_havuc$|kelime_yumurta$|kelime_pasta$|kelime_dondurma$|kelime_ekmek$|kelime_patates$|kelime_et$');
export const isFood = (id: string) => FOOD.test(id);

const STOVE = R('ocak$|v_ocak_|firin$|mangal$');
export const isStove = (id: string) => STOVE.test(id);

const LAMP = R('tavan_lambasi_yildiz$|duvar_apligi$|neon_|bulut_lamba$|mantar_lamba$|fener_lamba$|mum_seti$|v_avize_|v_aplik_|havuz_lambasi$|dans_isigi$|kagit_fener$|okuma_lambasi$|isik_masasi$|ay_gece_lambasi$|masa_lambasi$|baykus_lamba$|sahne_isigi$|abajur$|lambader$|gecelambasi$|perilamba$|sarkit$|disko$|v_lamba_|somine$|kelime_lamba$|kelime_mum$');
export const isLamp = (id: string) => LAMP.test(id);

/** Elde tutulabilecek küçük eşyalar (yiyecek, oyuncak, kelime resimleri…). */
const HOLD = R('stetoskop$|bandaj_rulosu$|ruj_seti$|far_paleti$|fon_makinesi$|tarak_firca$|makyaj_cantasi$|v_oje_|su_tabancasi$|deniz_gozlugu$|konfeti_patlatici$|parti_sapkasi$|balon_hayvan$|parti_duduk$|v_hediye_|v_yastik_|ucurtma$|marakas$|akordeon$|bowling_seti$|robot_oyuncak$|muzik_kutusu$|bebek_kitabi$|terlik$|toka_kutusu$|gozluk_standi$|oyun_hamuru$|boncuk_kutusu$|cizim_tableti$|kitap_ayraci_seti$|mektup_kutusu$|v_ayakkabi_|giysi_|v_pelus_|biberon$|emzik$|cingirak$|taki_kutusu$|parfum_seti$|sac_kurutma$|boya_paleti$|firca_kupasi$|boya_tupleri$|pastel_kutusu$|makas_yapistirici$|mikrofon$|kulaklik$|tef$|trompet$|flut$|keman$|kitap_yigini$|acik_kitap$|kum_saati$|v_yemek_|v_oyuncak_|v_alet_0[1-2]$|kelime_|pasta$|kurabiye$|pizza$|hamburger$|salata$|cilek$|meyve$|ekmek$|sut$|limonata$|dondurma$|kahve$|ayi$|unicorn$|top$|ordek$|dissfircasi$|sabunluk$|kumkovasi$|v_havuz_oyuncak_0[1-2]$|v_banyo_aksesuar_0[3-5]$|v_muzik_0[1,6]$|robot$');
export const isHoldable = (id: string) => HOLD.test(id);

/* ------------------------------------------------------------ açılan eşyalar */

const range = (p: string, n: number) => Array.from({ length: n }, (_, i) => `${p}${String(i + 1).padStart(2, '0')}`);
/** Açılan eşyanın türü: içinin nasıl görüneceğini belirler. */
export type BoxKind = 'buzdolabi' | 'firin' | 'dolap' | 'sandik' | 'raf' | 'banyo' | 'cekmece';
const CONTAINERS: [RegExp, BoxKind, string[]][] = [
  [R('buzdolabi|retrobuzdolabi$'), 'buzdolabi', [...range('v_yemek_', 12), 'pasta', 'meyve', 'sut', 'limonata', 'salata', 'cilek', 'pizza', 'hamburger', 'ekmek', 'kurabiye', 'dondurma', 'kelime_elma', 'kelime_muz', 'kelime_peynir', 'kelime_yumurta', 'kelime_limon', 'kelime_havuc']],
  [R('firin$|v_ocak_'), 'firin', ['pasta', 'kurabiye', 'pizza', 'ekmek', 'v_yemek_02', 'v_yemek_03', 'v_yemek_05', 'v_yemek_09', 'kelime_kek', 'kelime_simit', 'kelime_patates']],
  [R('acik_gardirop$|ayakkabi_rafi$|bebek_dolabi$|ada_dolap$'), 'dolap', ['giysi_elbise', 'giysi_tisort', 'giysi_kot', 'giysi_mont', 'giysi_pijama', 'giysi_ayakkabi', 'giysi_bot', 'giysi_canta', 'giysi_atki', 'giysi_tac', 'giysi_kolye', ...range('v_elbise_', 6), 'kelime_sapka', 'kelime_corap']],
  [R('dolap$|v_dolap_|sifonyer$|kiyafetaski$'), 'dolap', ['giysi_elbise', 'giysi_tisort', 'giysi_kot', 'giysi_pijama', 'giysi_mont', 'kelime_ceket', 'kelime_etek', 'kelime_corap', 'kelime_sapka', 'kelime_canta', 'bornoz', 'v_banyo_aksesuar_07', 'havlu', 'kelime_semsiye']],
  [R('kostum_sandigi$'), 'sandik', ['giysi_tac', 'giysi_kolye', 'giysi_elbise', 'kelime_sapka', 'giysi_atki', ...range('v_elbise_', 6)]],
  [R('oyuncaksandigi$|oyunrafi$|oyuncak_dolabi$|oyuncak_kutusu$'), 'sandik', ['robot_oyuncak', 'bowling_seti', ...range('v_pelus_', 6), 'dev_ayi', 'cingirak', ...range('v_oyuncak_', 9), 'ayi', 'unicorn', 'top', 'robot', 'kelime_top', 'kelime_balon', 'kelime_ucak', 'kelime_gemi', 'kelime_araba']],
  [R('tabakdolabi$|v_tabak_|tezgah$|v_tezgah_'), 'raf', [...range('v_alet_', 10), 'kahve', 'caydanlik', 'kettle', 'tost', 'blender', 'mikser', 'v_yemek_01', 'v_yemek_07', 'v_yemek_10']],
  [R('banyolavabo$|v_lavabo_'), 'banyo', ['dissfircasi', 'sabunluk', 'ordek', 'sampuan', 'v_banyo_aksesuar_03', 'v_banyo_aksesuar_04', 'v_banyo_aksesuar_05', 'v_banyo_aksesuar_06', 'havlu']],
  [R('buyuk_kitaplik$|agac_kitaplik$|v_kitaplik_|kitap_sepeti$|yazi_masasi$'), 'raf', ['kitap_yigini', 'acik_kitap', 'kelime_kitap', 'kure', 'kum_saati', 'baykus_lamba', 'masa_lambasi', 'kelime_kalem', 'teleskop']],
  [R('veteriner_dolabi$'), 'raf', ['stetoskop', 'bandaj_rulosu', 'ilk_yardim_cantasi', 'mama_kabi', 'su_kabi', 'pet_odul_kavanozu', 'pet_oyuncaklari']],
  [R('parfum_vitrini$'), 'raf', ['parfum_seti', 'ruj_seti', 'far_paleti', ...range('v_oje_', 6), 'yuz_maskesi_seti']],
  [R('isikli_dolap$|canta_koleksiyonu$'), 'dolap', ['giysi_elbise', 'giysi_canta', 'giysi_tac', ...range('v_elbise_', 6), 'aksesuar_kutusu']],
  [R('nota_dolabi$'), 'raf', ['marakas', 'tef', 'flut', 'trompet', 'mikrofon', 'kulaklik', 'akordeon', 'keman']],
  [R('sanat_dolabi$|boya_masasi$|v_boya_masasi_'), 'raf', ['simli_kavanozlar', 'oyun_hamuru', 'boncuk_kutusu', 'cizim_tableti', 'boya_paleti', 'firca_kupasi', 'boya_tupleri', 'pastel_kutusu', 'makas_yapistirici', 'boya_kovasi', 'kelime_kalem']],
  [R('alt_degistirme$'), 'cekmece', ['biberon', 'emzik', 'cingirak', 'bez_yigini', 'ay_gece_lambasi', ...range('v_pelus_', 6)]],
  [R('oyuncak_mutfak$'), 'firin', ['pasta', 'kurabiye', 'pizza', 'v_yemek_08', 'v_yemek_05', 'meyve']],
  [R('komodin$|kitaplik$'), 'cekmece', ['gecelambasi', 'kelime_kitap', 'kelime_kalem', 'ayi', 'kelime_saat', 'kelime_mum']],
];
export const boxKind = (id: string): BoxKind | null => CONTAINERS.find(([re]) => re.test(id))?.[1] ?? null;
/** Açılabilen eşyanın içindekiler (görseli olanlar): önce Defne'nin içine koydukları, sonra hazır olanlar. */
export function contentsOf(id: string, stored: string[] = []): string[] | null {
  const c = CONTAINERS.find(([re]) => re.test(id));
  if (!c) return null;
  const items = [...new Set([...stored, ...c[2]])].filter((x) => img(x) && THINGS[x]);
  return items.length ? items : null;
}
/** Bu eşya bu dolaba konabilir mi (buzdolabına yiyecek, gardıroba kıyafet…). */
export function fitsIn(box: string, item: string): boolean {
  const k = boxKind(box);
  if (!k) return false;
  if (k === 'buzdolabi' || k === 'firin') return isFood(item);
  return isHoldable(item) || isFood(item);
}

/* ------------------------------------------------------------ sesler */

export function petSound(id: string) {
  if (/^kedi/.test(id)) return sfx.meow();
  if (/^kopek/.test(id)) return sfx.woof();
  if (/ordek/.test(id)) return sfx.quack();
  if (/papagan/.test(id)) return sfx.tweet();
  if (/hamster|tavsan/.test(id)) return sfx.squeak();
  if (/midilli/.test(id)) return sfx.neigh();
  return sfx.squeak();
}

/** Özel duruş resmi (Firefly: <karakter>_otur, <karakter>_yat) varsa onun adresi. */
export const poseImage = (id: string, p?: Pose) => (p === 'otur' || p === 'yat' ? img(`${id}_${p}`) : undefined);
