/**
 * Evdeki karakterleri giydirme (başa, göze, kulağa, boyna takılanlar, elde tutulanlar, çanta, yüz süsü).
 * Karakter resimleri tek parça olduğu için aksesuarlar resmin üstüne, scripts/anchors.py'nin bulduğu
 * göz/el/ayak noktalarına göre yerleştirilir. Aksesuarın Firefly/Gemini resmi (aks_*) yoksa emoji gösterilir.
 */
import { img } from './assets';

export interface Look {
  /** Kıyafet: karakterin bu kıyafetle yeniden çizilmiş resmi (<karakter>_kiyafet_NN). */
  kiyafet?: string;
  bas?: string;
  goz?: string;
  kulak?: string;
  boyun?: string;
  bilek?: string;
  el?: string;
  canta?: string;
  ayak?: string;
  ruj?: string;
  allik?: string;
  far?: string;
  yuz?: string;
}
export type Slot = keyof Look;

interface Anchor {
  ar: number;
  head?: [number, number];
  shoes?: [number, number, number][];
  footw?: number;
  eye: [number, number, number, number];
  top: number;
  foot: [number, number, number];
  hand: [number, number, number, number];
}
const ANCHORS = (Object.values(import.meta.glob('./assets/anchors.json', { eager: true, import: 'default' }))[0] ?? {}) as Record<string, Anchor>;
export const anchorFor = (key: string) => ANCHORS[key];

/** Kıyafetler: her karakter için ayrı resim (ayakta ve oturan). Resmi gelmeyen kıyafet menüde görünmez. */
export const OUTFITS: DressItem[] = [
  { id: 'kiyafet_01', e: '☀️' },
  { id: 'kiyafet_02', e: '🌙' },
  { id: 'kiyafet_03', e: '☔' },
  { id: 'kiyafet_04', e: '❄️' },
  { id: 'kiyafet_05', e: '🎉' },
  { id: 'kiyafet_06', e: '⚽' },
];
/** Karakterin kıyafetli resmi (oturuyorsa oturan hâli); yoksa undefined. */
export const outfitImage = (char: string, kf: string | undefined, otur = false) => (kf ? img(`${char}_${kf}${otur ? '_otur' : ''}`) : undefined);
/** Bu karakter için resmi gelmiş kıyafetler. */
export const outfitsFor = (char: string) => OUTFITS.filter((o) => outfitImage(char, o.id));
/** Giydirme noktalarının anahtarı: kıyafetli resmin kendi noktaları varsa onlar. */
export const anchorKey = (char: string, kf: string | undefined, otur = false) => {
  const k = `${char}${kf && outfitImage(char, kf, otur) ? `_${kf}` : ''}${otur ? '_otur' : ''}`;
  return ANCHORS[k] ? k : `${char}${otur ? '_otur' : ''}`;
};
/** Kıyafetli resim boyu farklıysa karakter aynı boyda kalsın diye genişlik çarpanı. */
export const outfitScale = (char: string, kf: string | undefined, otur = false) => {
  const a = ANCHORS[`${char}${otur ? '_otur' : ''}`];
  const b = kf && outfitImage(char, kf, otur) ? ANCHORS[`${char}_${kf}${otur ? '_otur' : ''}`] : undefined;
  if (!a || !b) return 1;
  return ((a.foot[2] - a.top) * a.ar) / ((b.foot[2] - b.top) * b.ar);
};

/** Aksesuar: kod (aks_…) ve resmi gelene kadar gösterilecek emoji. */
export interface DressItem {
  id: string;
  e: string;
}
export interface DressSlot {
  k: Slot;
  icon: string;
  /** Kıyafet: karakterin resmi değişir. */
  outfit?: boolean;
  /** Yalnızca makyaj yapılabilen karakterlerde. */
  makeup?: boolean;
  /** Renk seçenekleri (makyaj). */
  colors?: string[];
  items?: DressItem[];
}

const it = (slot: string, list: string[]): DressItem[] => list.map((e, i) => ({ id: `aks_${slot}_${String(i + 1).padStart(2, '0')}`, e }));

export const DRESS: DressSlot[] = [
  { k: 'kiyafet', icon: '👗', outfit: true, items: OUTFITS },
  { k: 'bas', icon: '👑', items: it('bas', ['👑', '🎀', '👒', '🧢', '🌸', '⭐', '🦄', '🐱', '🌼', '💎']) },
  { k: 'goz', icon: '🕶️', items: it('goz', ['🕶️', '👓', '🥽', '💗', '⭐', '🌈']) },
  { k: 'kulak', icon: '💎', items: it('kulak', ['🎧', '💎', '⭐', '🌙', '🍒', '💖']).filter((d) => d.id !== 'aks_kulak_01') },
  { k: 'boyun', icon: '📿', items: it('boyun', ['📿', '💖', '⭐', '🌸', '🎗️', '🧣']).filter((d) => d.id !== 'aks_boyun_06') },
  { k: 'el', icon: '📱', items: it('el', ['📱', '🎤', '🍭', '🌂', '🪄', '🎈']) },
  { k: 'canta', icon: '👜', items: it('canta', ['👜', '👛', '🎒', '💼', '🧺', '🛍️']) },
  { k: 'yuz', icon: '💖', makeup: true, items: it('yuz', ['💖', '⭐', '🦋', '🌈', '🌸', '✨']) },
];

const pc = (v: number) => `${(v * 100).toFixed(2)}%`;
const art = (item: DressItem) => {
  const src = img(item.id);
  return src
    ? `<img src="${src}" alt="" draggable="false"/>`
    : `<svg viewBox="0 0 100 100"><text x="50" y="82" font-size="86" text-anchor="middle">${item.e}</text></svg>`;
};
const find = (slot: Slot, id?: string) => DRESS.find((d) => d.k === slot)?.items?.find((i) => i.id === id);

/**
 * Giydirme katmanı (karakterin kutusuna göre % ile).
 * @param key anchors.json anahtarı (ör. "kiz1" ya da oturuyorsa "kiz1_otur")
 */
/**
 * Aksesuarın karaktere oturuşu. w: genişlik (baş genişliğine göre); ax/ay: aksesuarın resmindeki tutma/oturma noktası (0..1);
 * at: karakterde hangi noktaya geldiği; y/x: o noktaya göre kaydırma (u = tepe-göz arası, hw = baş genişliği birimiyle).
 */
type At = 'tepe' | 'goz' | 'sagEl' | 'solEl' | 'sirt' | 'boyun' | 'yanak' | 'sacSag';
interface Fit {
  at: At;
  w: number;
  ax?: number;
  ay?: number;
  x?: number;
  y?: number;
  /** Karakterin arkasında (sırt çantası). */
  back?: boolean;
  /** Yere kadar uzar (tekerlekli valiz): genişlik yerine boy el ile ayak arası. */
  floor?: boolean;
}
const FIT: Record<string, Fit> = {
  // baş: tepe noktası ile göz çizgisi arası 'u' birimi
  aks_bas_01: { at: 'tepe', w: 0.42, ay: 1, y: 0.2 },
  aks_bas_02: { at: 'tepe', w: 0.46, ay: 1, y: 0.22 },
  aks_bas_03: { at: 'tepe', w: 1.2, ay: 1, y: 0.68 },
  aks_bas_04: { at: 'tepe', w: 1.0, ay: 1, y: 0.72 },
  aks_bas_05: { at: 'sacSag', w: 0.3 },
  aks_bas_06: { at: 'sacSag', w: 0.3 },
  aks_bas_07: { at: 'tepe', w: 0.9, ay: 1, y: 0.62 },
  aks_bas_08: { at: 'tepe', w: 0.9, ay: 1, y: 0.6 },
  aks_bas_09: { at: 'tepe', w: 0.92, ay: 1, y: 0.5 },
  aks_bas_10: { at: 'tepe', w: 0.48, ay: 1, y: 0.24 },
  // elde: tutma noktası elin içine gelir
  aks_el_01: { at: 'sagEl', w: 0.16, ay: 0.82, x: -0.05 },
  aks_el_02: { at: 'sagEl', w: 0.16, ay: 0.78 },
  aks_el_03: { at: 'sagEl', w: 0.24, ay: 0.9 },
  aks_el_04: { at: 'sagEl', w: 0.22, ax: 0.62, ay: 0.12 },
  aks_el_05: { at: 'sagEl', w: 0.26, ay: 0.86 },
  aks_el_06: { at: 'sagEl', w: 0.34, ay: 0.98 },
  // çantalar: sap ele, sırt çantası sırta, valiz yerde
  aks_canta_01: { at: 'solEl', w: 0.42, ay: 0.06 },
  aks_canta_02: { at: 'solEl', w: 0.34, ay: 0.08 },
  aks_canta_03: { at: 'sirt', w: 0.78, ay: 0, back: true },
  aks_canta_04: { at: 'solEl', w: 0, ay: 0.03, floor: true },
  aks_canta_05: { at: 'solEl', w: 0.46, ay: 0.06 },
  aks_canta_06: { at: 'solEl', w: 0.42, ay: 0.05 },
};

/**
 * Giydirme katmanı (karakterin kutusuna göre % ile).
 * @param key anchors.json anahtarı (ör. "kiz1" ya da oturuyorsa "kiz1_otur")
 */
export function dressLayer(look: Look | undefined, key: string): string {
  const a = ANCHORS[key];
  if (!look || !a) return '';
  const ar = a.ar;
  const [lx, ly, rx, ry] = a.eye;
  const ex = (lx + rx) / 2;
  const ey = (ly + ry) / 2;
  const dx = rx - lx; // gözler arası, genişliğe göre
  const dy = dx / ar; // aynı uzunluk, yüksekliğe göre
  const hw = a.head ? a.head[1] - a.head[0] : dx * 2.6; // baş genişliği (genişliğe göre)
  const u = Math.max(0.02, ey - a.top); // tepe ile göz arası (yüksekliğe göre)
  const out: string[] = [];
  /** Merkezi (x,y), genişliği w olan kare parça. oy: dikey hizalama (-50 = ortası, -100 = altı). */
  const put = (cls: string, html: string, x: number, y: number, w: number, oy = -50) =>
    out.push(`<span class="dr ${cls}" style="left:${pc(x)};top:${pc(y)};width:${pc(w)};transform:translate(-50%,${oy}%)">${html}</span>`);
  /** Tabloya göre oturtur. */
  const fit = (cls: string, item: DressItem) => {
    const f = FIT[item.id];
    if (!f) return false;
    const pt: Record<At, [number, number]> = {
      tepe: [ex, a.top],
      goz: [ex, ey],
      sagEl: [a.hand[2], a.hand[3]],
      solEl: [a.hand[0], a.hand[1]],
      sirt: [ex, ey + u * 0.62],
      boyun: [ex, ey + u * 1.25],
      yanak: [rx + dx * 0.2, ry + dy * 0.5],
      sacSag: [ex + hw * 0.34, a.top + u * 0.5],
    };
    const [px, py] = pt[f.at];
    const x = px + (f.x ?? 0) * hw;
    const y = py + (f.y ?? 0) * u;
    const ax = (f.ax ?? 0.5) * 100;
    const ay = (f.ay ?? 0.5) * 100;
    if (f.floor) {
      // Valiz: sapı elde, tekerlekleri yerde.
      const hh = Math.max(0.05, a.foot[2] - y);
      out.push(`<span class="dr ${cls} tall" style="left:${pc(x - hw * 0.02)};top:${pc(y)};height:${pc(hh)};transform:translate(-${ax}%,-${ay}%)">${art(item)}</span>`);
      return true;
    }
    out.push(`<span class="dr ${cls} ${f.back ? 'back' : ''}" style="left:${pc(x)};top:${pc(y)};width:${pc(hw * f.w)};transform:translate(-${ax}%,-${ay}%)">${art(item)}</span>`);
    return true;
  };
  const yz = find('yuz', look.yuz);
  if (yz) put('yz', art(yz), rx + dx * 0.2, ry + dy * 0.5, dx * 0.32);
  const gz = find('goz', look.goz);
  if (gz) put('gz', art(gz), ex, ey, dx * 2.1);
  const kl = find('kulak', look.kulak);
  if (kl) for (const x of [ex - dx * 0.92, ex + dx * 0.92]) put('kl', art(kl), x, ey + dy * 0.7, hw * 0.13, -8);
  const bs = find('bas', look.bas);
  if (bs && !fit('bs', bs)) put('bs', art(bs), ex, a.top + dy * 0.12, dx * 1.5, -60);
  const by = find('boyun', look.boyun);
  if (by) put('by', art(by), ex, ey + u * 0.68, hw * 0.32, -8);
  const el = find('el', look.el);
  if (el && !fit('el', el)) put('el', art(el), a.hand[2], a.hand[3], dx * 0.55, -70);
  const ct = find('canta', look.canta);
  if (ct && !fit('ct', ct)) put('ct', art(ct), a.hand[0], a.hand[1] + dy * 0.2, dx * 1.0, -20);
  return out.length ? `<span class="dress-layer">${out.join('')}</span>` : '';
}

/** Menüde gösterilecek küçük resim (emoji ya da aksesuar resmi). */
export const dressThumb = (item: DressItem) => art(item);
