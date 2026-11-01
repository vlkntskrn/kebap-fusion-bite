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

export const PRAISES = ['Aferin!', 'Harika!', 'Çok güzel!', 'Bravo!'];

/** Her kaydın benzersiz anahtarı. */
export const key = {
  letter: (l: string) => `harf:${l}`,
  syllable: (s: string) => `hece:${s}`,
  word: (w: string) => `kelime:${w}`,
  praise: (i: number) => `ovgu:${i}`,
  intro: (name: string) => `yonerge:${name}`,
};

/** Oyun yönergeleri: ebeveyn kendi sesiyle okursa çocuk ne yapacağını duyar. */
export const INSTRUCTIONS: Record<string, string> = {
  bul: 'Duyduğun sesin harfini bul.',
  birlestir: 'Sesleri dinle, sonra birleştir.',
  kur: 'Heceleri sırayla diz, kelimeyi kur.',
  oku: 'Kelimeyi sesli oku, sonra dinleyerek kontrol et.',
};

export const STICKERS = '🦄🐼🦋🐞🐠🦁🐸🐙🦊🐨🐧🦉🐝🐢🦖🌈🌻🍓🍉🚀🎈🧸🎀🍭⭐️🐬🦒🐰🐳🌸'.match(/\p{Extended_Pictographic}(️)?/gu)!;
