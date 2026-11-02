/** Türk alfabesi (küçük harf, okuldaki dik temel harf sırası değil, alfabe sırası). */
export const ALPHABET = 'abcçdefgğhıijklmnoöprsştuüvyz'.split('');
export const VOWELS = new Set('aeıioöuü'.split(''));

export const isVowel = (ch: string) => VOWELS.has(ch);

export interface Word {
  text: string;
  syllables: string[];
  emoji: string;
}

/**
 * Resimle gösterilebilen, 1. sınıf düzeyinde kelimeler. Heceler okulda öğretildiği gibi ayrılmıştır.
 * Oyun yalnızca çocuğun öğrendiği harflerden oluşan kelimeleri kullanır.
 */
const RAW = `
at|at|🐴
et|et|🥩
ana|a-na|👩
anne|an-ne|👩‍👧
ata|a-ta|🧓
nine|ni-ne|👵
nene|ne-ne|👵
nane|na-ne|🌿
tane|ta-ne|🫘
anten|an-ten|📡
tente|ten-te|⛱️
inat|i-nat|😤
tat|tat|😋
net|net|🥅
el|el|✋
lale|la-le|🌷
kale|ka-le|🏰
kalem|ka-lem|✏️
elma|el-ma|🍎
ekmek|ek-mek|🍞
kek|kek|🍰
kalkan|kal-kan|🛡️
kedi|ke-di|🐱
etek|e-tek|👗
inek|i-nek|🐄
kanat|ka-nat|🪽
ekin|e-kin|🌾
tekne|tek-ne|🚤
iki|i-ki|2️⃣
tilki|til-ki|🦊
lamba|lam-ba|💡
ayna|ay-na|🪞
ay|ay|🌙
ayı|a-yı|🐻
un|un|🌾
mum|mum|🕯️
muz|muz|🍌
limon|li-mon|🍋
yumurta|yu-mur-ta|🥚
oyun|o-yun|🎲
mutlu|mut-lu|😊
yatak|ya-tak|🛏️
kayık|ka-yık|🛶
koltuk|kol-tuk|🛋️
kutu|ku-tu|📦
maymun|may-mun|🐒
kum|kum|🏖️
okul|o-kul|🏫
balık|ba-lık|🐟
balon|ba-lon|🎈
bal|bal|🍯
araba|a-ra-ba|🚗
ördek|ör-dek|🦆
dede|de-de|👴
saat|sa-at|⏰
su|su|💧
simit|si-mit|🥯
armut|ar-mut|🍐
domates|do-ma-tes|🍅
sarı|sa-rı|🟡
arı|a-rı|🐝
burun|bu-run|👃
bebek|be-bek|👶
dondurma|don-dur-ma|🍦
kırmızı|kır-mı-zı|🔴
yıldız|yıl-dız|⭐
balina|ba-li-na|🐳
kitap|ki-tap|📖
top|top|⚽
tuz|tuz|🧂
göz|göz|👁️
güneş|gü-neş|☀️
çiçek|çi-çek|🌸
çanta|çan-ta|🎒
şapka|şap-ka|👒
kuş|kuş|🐦
köpek|kö-pek|🐶
ceket|ce-ket|🧥
pasta|pas-ta|🎂
gemi|ge-mi|🚢
patates|pa-ta-tes|🥔
peynir|pey-nir|🧀
göl|göl|🏞️
şemsiye|şem-si-ye|☂️
çorap|ço-rap|🧦
böcek|bö-cek|🐞
uçak|u-çak|✈️
ev|ev|🏠
havuç|ha-vuç|🥕
fil|fil|🐘
horoz|ho-roz|🐓
dağ|dağ|⛰️
ağaç|a-ğaç|🌳
fare|fa-re|🐭
zürafa|zü-ra-fa|🦒
hediye|he-di-ye|🎁
havuz|ha-vuz|🏊
otobüs|o-to-büs|🚌
tavşan|tav-şan|🐰
tavuk|ta-vuk|🐔
kaplumbağa|kap-lum-ba-ğa|🐢
`;

export const WORDS: Word[] = RAW.trim()
  .split('\n')
  .map((line) => {
    const [text, syl, emoji] = line.split('|');
    return { text, syllables: syl.split('-'), emoji };
  });

const allKnown = (s: string, known: Set<string>) => [...s].every((ch) => known.has(ch));

export function wordsFor(known: Set<string>): Word[] {
  return WORDS.filter((w) => allKnown(w.text, known));
}

/**
 * Ses birleştirme için iki sesli heceler: sessiz+sesli (na) ve sesli+sessiz (an).
 * "na" ile "an" ayrımı, okumaya başlayan çocukların en çok karıştırdığı şeydir.
 */
export function syllablesFor(known: Set<string>): string[] {
  const letters = ALPHABET.filter((l) => known.has(l));
  const vowels = letters.filter(isVowel);
  const cons = letters.filter((l) => !isVowel(l) && l !== 'ğ');
  const out: string[] = [];
  for (const c of cons) for (const v of vowels) out.push(c + v);
  for (const v of vowels) for (const c of cons) out.push(v + c);
  return out;
}

/** Övgüler: {ad} çocuğun adıyla değişir. */
export const PRAISES = ['Aferin {ad}!', 'Harika {ad}!', 'Çok güzel {ad}!', 'Bravo {ad}!'];

/** Her kaydın benzersiz anahtarı. */
export const key = {
  letter: (l: string) => `harf:${l}`,
  syllable: (s: string) => `hece:${s}`,
  word: (w: string) => `kelime:${w}`,
  praise: (i: number) => `ovgu:${i}`,
  talk: (id: string) => `tal:${id}`,
};

/**
 * Sesli talimatlar. Çocuk henüz okuyamadığı için her ekran ne yapacağını sesle söyler.
 * Ebeveyn kendi sesiyle kaydedebilir; kayıt yoksa telefonun Türkçe sesi okur.
 * {ad} = çocuğun adı, {adın} = adın -in eki almış hâli (Defne'nin).
 */
export const TALK = {
  merhaba: 'Merhaba {ad}! Hangi oyunu oynamak istersin?',
  bul: 'Sesi bul oyunu! {ad}, sesi dinle. Hangi harf? Harfe dokun.',
  birlestir: 'Sesleri birleştir oyunu! {ad}, iki harfe de dokun, seslerini dinle.',
  birlestirBas: 'Şimdi mavi birleştir düğmesine bas, {ad}!',
  birlestirSor: '{ad}, hangisini duydun? Dokun.',
  kur: 'Kelime kur oyunu! {ad}, resme bak, heceleri sırayla diz.',
  oku: 'Oku oyunu! {ad}, kelimeyi sesli oku. Sonra mavi düğmeye bas, dinle.',
  okuKontrol: 'Doğru okuduysan yeşil düğmeye bas, {ad}.',
  tekrar: 'Bir daha dene, {ad}.',
  bitti: 'Aferin {ad}! Yeni bir çıkartma kazandın.',
  album: '{ad}, bunlar senin çıkartmaların.',
  kayitYok: '{ad}, bu oyun için annen ya da baban önce ses kaydetmeli.',
  sahne: '{adın} sahnesine hoş geldin! Giydirmek mi, boyamak mı istersin?',
  giydir: '{ad}, bebeğinin saçına, tenine ya da kıyafetine dokun. Sonra bir renk seç.',
  kilitli: 'Bu bir hediye! Okuma oyunlarında başarılı olunca açabilirsin, {ad}.',
  bittiHediye: 'Aferin {ad}! Bir hediye kazandın! Hediye kutusuna dokun.',
  azKaldi: 'Çok az kaldı {ad}! Bir daha oynarsak hediye kazanacaksın.',
  hediye: '{ad}, bebeğin için bir hediye seç!',
  hediyeSecildi: 'Çok yakıştı! Şimdi sahneye çıkma zamanı!',
  konser: '{ad} sahneye çıkıyor! Hadi birlikte söyleyelim!',
  ev: '{adın} evine hoş geldin! Bir odaya dokun, içine gir.',
  oda: '{ad}, artı düğmesine bas, eşya seç. Karakteri yatağa koy, uyusun. Sandalyeye koy, otursun. Yemeği eline ver, dokun, yesin. Buzdolabına, dolaba dokun, içini aç. Ay düğmesi geceyi getirir. Karakteri yukarıdaki odalara götürürsen o odaya gider.',
  oda_yatak: 'Yatak odası!',
  oda_mutfak: 'Mutfak!',
  oda_banyo: 'Banyo!',
  oda_salon: 'Salon!',
  oda_havuz: 'Havuz bahçesi!',
  oda_oyun: 'Oyun odası!',
  oda_bebekodasi: 'Bebek odası!',
  oda_giyinme: 'Giyinme odası!',
  oda_atolye: 'Sanat atölyesi!',
  oda_muzik: 'Müzik odası!',
  oda_kutuphane: 'Kütüphane! Burada kitap okuyabilirsin.',
  mod_tasi: 'Taşı! Eşyaları parmağınla sürükle.',
  esyakat_kisi: 'Karakterler',
  esyakat_hayvan: 'Hayvanlar',
  esyakat_yatak: 'Yataklar ve dolaplar',
  esyakat_oturma: 'Koltuklar ve sandalyeler',
  esyakat_masa: 'Masalar ve raflar',
  esyakat_mutfak: 'Mutfak eşyaları',
  esyakat_yemek: 'Yiyecekler',
  esyakat_banyo: 'Banyo eşyaları',
  esyakat_tv: 'Televizyon ve müzik',
  esyakat_dekor: 'Süsler, bitkiler, lambalar',
  esyakat_oyuncak: 'Oyuncaklar',
  esyakat_bahce: 'Bahçe ve havuz',
  esyakat_bebekesya: 'Bebek eşyaları',
  esyakat_giysi: 'Kıyafetler ve aynalar',
  esyakat_sanat: 'Resim ve sanat',
  esyakat_muzik: 'Müzik aletleri',
  esyakat_kitap: 'Kitaplar',
  esyakat_oyunodasi: 'Oyun odası eşyaları',
  kat_kiyafet: 'Kıyafetler',
  kat_sac: 'Saçlar',
  kat_ten: 'Ten rengi',
  kat_taki: 'Taçlar, şapkalar ve takılar',
  kat_elde: 'Elinde tuttukları',
  kat_ayakkabi: 'Ayakkabılar',
  kat_hayvan: 'Evcil hayvan',
  kat_fon: 'Arka plan',
  esyaBoya: '{ad}, aşağıdan bir renk seç, sonra boyamak istediğin eşyaya dokun.',
  tasarla: '{ad}, odayı sen tasarla! Duvarı, rengini, yeri ve pencereyi seç.',
  kilitSoru: '{ad}, bunu açmak için iki soru var! Kelimeyi oku, doğru resme dokun.',
  kilitResim: '{ad}, resme bak. Doğru yazılmış kelimeye dokun.',
  kilitAcildi: 'Harika {ad}! Kilidi açtın!',
  kilitTekrar: 'Bu kelime buydu. Bir daha deneyelim mi, {ad}?',
  konserBitti: 'Harika bir konserdi {ad}! Herkes seni alkışlıyor!',
  boyaSec: '{ad}, hangi resmi boyamak istersin?',
  boya: '{ad}, bir renk seç, sonra resme dokun.',
  boyaBitti: 'Çok güzel boyadın, {ad}!',
} as const;
export type TalkId = keyof typeof TALK;

/** Türkçe -in eki (ünlü uyumu): Defne → Defne'nin, Elif → Elif'in, Ayşegül → Ayşegül'ün. */
export function genitive(name: string): string {
  const vowels = [...name.toLocaleLowerCase('tr')].filter((c) => 'aeıioöuü'.includes(c));
  const last = vowels[vowels.length - 1] ?? 'e';
  const v = ({ a: 'ı', ı: 'ı', e: 'i', i: 'i', o: 'u', u: 'u', ö: 'ü', ü: 'ü' } as Record<string, string>)[last];
  const endsVowel = 'aeıioöuü'.includes(name.slice(-1).toLocaleLowerCase('tr'));
  return `${name}'${endsVowel ? 'n' : ''}${v}n`;
}

export function fill(template: string, name: string): string {
  return template.replaceAll('{adın}', genitive(name)).replaceAll('{ad}', name);
}

export const STICKERS = '🦄🐼🦋🐞🐠🦁🐸🐙🦊🐨🐧🦉🐝🐢🦖🌈🌻🍓🍉🚀🎈🧸🎀🍭⭐️🐬🦒🐰🐳🌸'.match(/\p{Extended_Pictographic}(️)?/gu)!;
