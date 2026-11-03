/**
 * Evdeki karakterleri giydirme ve kızlara basit makyaj.
 * Karakter resimleri tek parça olduğu için aksesuarlar resmin üstüne, scripts/anchors.py'nin bulduğu
 * göz/el/ayak noktalarına göre yerleştirilir. Aksesuarın Firefly/Gemini resmi (aks_*) yoksa emoji gösterilir.
 */
import { img } from './assets';

export interface Look {
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
  eye: [number, number, number, number];
  top: number;
  foot: [number, number, number];
  hand: [number, number, number, number];
}
const ANCHORS = (Object.values(import.meta.glob('./assets/anchors.json', { eager: true, import: 'default' }))[0] ?? {}) as Record<string, Anchor>;
export const anchorFor = (key: string) => ANCHORS[key];

/** Aksesuar: kod (aks_…) ve resmi gelene kadar gösterilecek emoji. */
export interface DressItem {
  id: string;
  e: string;
}
export interface DressSlot {
  k: Slot;
  icon: string;
  /** Yalnızca makyaj yapılabilen karakterlerde. */
  makeup?: boolean;
  /** Renk seçenekleri (makyaj). */
  colors?: string[];
  items?: DressItem[];
}

const it = (slot: string, list: string[]): DressItem[] => list.map((e, i) => ({ id: `aks_${slot}_${String(i + 1).padStart(2, '0')}`, e }));

export const DRESS: DressSlot[] = [
  { k: 'bas', icon: '👑', items: it('bas', ['👑', '🎀', '👒', '🧢', '🌸', '⭐', '🦄', '🐱', '🌼', '💎']) },
  { k: 'goz', icon: '🕶️', items: it('goz', ['🕶️', '👓', '🥽', '💗', '⭐', '🌈']) },
  { k: 'kulak', icon: '🎧', items: it('kulak', ['🎧', '💎', '⭐', '🌙', '🍒', '💖']) },
  { k: 'boyun', icon: '📿', items: it('boyun', ['📿', '💖', '⭐', '🌸', '🎗️', '🧣']) },
  { k: 'bilek', icon: '⌚', items: it('bilek', ['⌚', '💍', '🌈', '💎', '🎀']) },
  { k: 'el', icon: '📱', items: it('el', ['📱', '🎤', '🍭', '🌂', '🪄', '🎈']) },
  { k: 'canta', icon: '👜', items: it('canta', ['👜', '👛', '🎒', '💼', '🧺', '🛍️']) },
  { k: 'ayak', icon: '👟', items: it('ayak', ['👟', '👠', '🥿', '👢', '🩰', '🩴']) },
  { k: 'ruj', icon: '💄', makeup: true, colors: ['#ff4f81', '#ff8fb3', '#d7263d', '#c77dff', '#ff9f68', '#b5446e'] },
  { k: 'allik', icon: '🌸', makeup: true, colors: ['#ff8fb3', '#ffb0a0', '#ff6f91', '#f7a8d8'] },
  { k: 'far', icon: '✨', makeup: true, colors: ['#c77dff', '#7fd1ff', '#ff8fd8', '#ffd93d', '#5fd39a', '#b0b8ff'] },
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
export function dressLayer(look: Look | undefined, key: string): string {
  const a = ANCHORS[key];
  if (!look || !a) return '';
  const ar = a.ar;
  const [lx, ly, rx, ry] = a.eye;
  const ex = (lx + rx) / 2;
  const ey = (ly + ry) / 2;
  const dx = rx - lx; // gözler arası, genişliğe göre
  const dy = dx / ar; // aynı uzunluk, yüksekliğe göre
  const out: string[] = [];
  /** Merkezi (x,y), genişliği w olan kare parça. oy: dikey hizalama (-50 = ortası, -100 = altı). */
  const put = (cls: string, html: string, x: number, y: number, w: number, oy = -50) =>
    out.push(`<span class="dr ${cls}" style="left:${pc(x)};top:${pc(y)};width:${pc(w)};transform:translate(-50%,${oy}%)">${html}</span>`);
  if (look.far) for (const x of [lx, rx]) out.push(`<span class="dr mk" style="left:${pc(x)};top:${pc((x === lx ? ly : ry) - dy * 0.28)};width:${pc(dx * 0.46)};height:${pc(dy * 0.2)};background:${look.far};opacity:.55"></span>`);
  if (look.allik) for (const [x, y] of [[lx - dx * 0.12, ly + dy * 0.45], [rx + dx * 0.12, ry + dy * 0.45]]) out.push(`<span class="dr mk round" style="left:${pc(x)};top:${pc(y)};width:${pc(dx * 0.42)};height:${pc(dy * 0.42)};background:${look.allik};opacity:.45"></span>`);
  if (look.ruj) out.push(`<span class="dr mk lips" style="left:${pc(ex)};top:${pc(ey + dy * 0.64)};width:${pc(dx * 0.34)};height:${pc(dy * 0.13)};background:${look.ruj}"></span>`);
  const yz = find('yuz', look.yuz);
  if (yz) put('yz', art(yz), rx + dx * 0.2, ry + dy * 0.5, dx * 0.32);
  const gz = find('goz', look.goz);
  if (gz) put('gz', art(gz), ex, ey, dx * 2.1);
  const kl = find('kulak', look.kulak);
  // Kulaklık başın üstünden iki kulağı kaplar; küpeler her kulağa ayrı.
  if (kl && kl.id === 'aks_kulak_01') {
    // Kulaklık: bant başın tepesinde, kulaklar yüzün iki yanında (resim gerilerek yerleşir, yüzü kapatmaz).
    const top = a.top - 0.01;
    const earY = ey + dy * 0.35;
    const hh = (earY - top) / 0.65;
    out.push(`<span class="dr kl kulaklik" style="left:${pc(ex)};top:${pc(top)};width:${pc(dx * 4.5)};height:${pc(hh)};transform:translate(-50%,0)">${art(kl)}</span>`);
  }
  else if (kl) for (const x of [lx - dx * 0.55, rx + dx * 0.55]) put('kl', art(kl), x, ey + dy * 0.35, dx * 0.3);
  const bs = find('bas', look.bas);
  if (bs) put('bs', art(bs), ex, a.top + dy * 0.12, dx * 1.5, -60);
  const by = find('boyun', look.boyun);
  if (by) put('by', art(by), ex, ey + dy * 1.5, dx * 1.05);
  const bl = find('bilek', look.bilek);
  if (bl) put('bl', art(bl), a.hand[0] + dx * 0.08, a.hand[1] - dy * 0.12, dx * 0.42);
  const el = find('el', look.el);
  if (el) put('el', art(el), a.hand[2], a.hand[3], dx * 0.55, -70);
  const ct = find('canta', look.canta);
  if (ct) put('ct', art(ct), a.hand[0], a.hand[1] + dy * 0.2, dx * 1.0, -20);
  const ay = find('ayak', look.ayak);
  if (ay) for (const x of [a.foot[0], a.foot[1]]) put('ay', art(ay), x, a.foot[2], dx * 0.62, -88);
  return out.length ? `<span class="dress-layer">${out.join('')}</span>` : '';
}

/** Menüde gösterilecek küçük resim (emoji ya da aksesuar resmi). */
export const dressThumb = (item: DressItem) => art(item);
