/**
 * Defne'nin Evi: odaları tasarlama (duvar, zemin, pencere), eşyaları sürükleyip yerleştirme,
 * eşyaları boyama ve karakterleri gezdirme. Bütün çizimler bu projeye özgüdür.
 */
import { progress, commit } from './state';
import { talk, bindTalkButtons } from './talk';
import { show, on, talkBtn, wiggle } from './ui';
import { sfx } from './sfx';
import { dollSvg, currentLook, shade } from './stage';
import { genitive, TalkId } from './content';
import { THINGS, colorize, itemImage, extraItemsFor, isCharAsset, isLockedItem, unlockItem, yRange, placeOf, heightPct, surfaceTop } from './house-items';
import { readingChallenge } from './challenge';
import { imgTag } from './assets';
import { roomIcon, MODE_ICONS } from './icons';

type RoomId = 'yatak' | 'mutfak' | 'banyo' | 'salon' | 'havuz';
type Mode = 'tasi' | 'boya' | 'tasarla';

const OL = `<defs><filter id="tol" x="-15%" y="-15%" width="130%" height="130%"><feMorphology in="SourceAlpha" operator="dilate" radius="2" result="d"/><feFlood flood-color="#3d3553"/><feComposite in2="d" operator="in" result="o"/><feMerge><feMergeNode in="o"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;

const PALETTE = ['#ffffff', '#fff1c9', '#ffd6e7', '#ffb3d1', '#ff8fc0', '#ff6b6b', '#ffa94d', '#ffd93d', '#b5e550', '#a8e6cf', '#5fd39a', '#9fd8ff', '#5fd3f3', '#4d96ff', '#c9b6ff', '#c77dff', '#e3b98a', '#c98a5a', '#9c8f86', '#3d3553'];
const WALL_COLORS = ['#ffffff', '#fff6e6', '#ffe3ef', '#ffd1e3', '#f1e3ff', '#e3e8ff', '#e3f1ff', '#e3f6ec', '#fff1d6', '#ffe8d6', '#f2ece4', '#d9d4e6'];
const FLOOR_COLORS = ['#f3c99b', '#e7b98a', '#d29d69', '#fff7ec', '#f2f6fa', '#e9e3ff', '#ffe3ef', '#dff7ea', '#cfd8e6', '#c9b6ff'];

/* --------------------------------------------------------- oda tasarımı */

interface Style {
  wall: string;
  wallColor: string;
  floor: string;
  floorColor: string;
  view: string;
}

const WALLS = ['duz', 'puan', 'cizgi', 'kalp', 'pul', 'yildiz', 'cicek', 'tas'];
const FLOORS = ['parke', 'balik', 'fayans', 'dama', 'hali'];
const VIEWS = ['gunes', 'aksam', 'gece', 'sehir', 'deniz'];

function wallPattern(kind: string, c: string): string {
  switch (kind) {
    case 'puan':
      return `<circle cx="10" cy="10" r="4" fill="${c}"/><circle cx="30" cy="30" r="4" fill="${c}"/>`;
    case 'cizgi':
      return `<rect width="14" height="40" fill="${c}"/>`;
    case 'kalp':
      return `<path d="M20 28 C8 20 10 10 16 10 C18 10 20 12 20 14 C20 12 22 10 24 10 C30 10 32 20 20 28Z" fill="${c}"/>`;
    case 'pul':
      return `<path d="M0 20 A20 20 0 0 1 40 20 M-20 40 A20 20 0 0 1 20 40 M20 40 A20 20 0 0 1 60 40 M-20 0 A20 20 0 0 1 20 0 M20 0 A20 20 0 0 1 60 0" stroke="${c}" stroke-width="3" fill="none"/>`;
    case 'yildiz':
      return `<path d="M10 4 L12 9 L17 9 L13 12 L15 17 L10 14 L5 17 L7 12 L3 9 L8 9Z M30 24 L32 29 L37 29 L33 32 L35 37 L30 34 L25 37 L27 32 L23 29 L28 29Z" fill="${c}"/>`;
    case 'cicek':
      return [0, 1, 2, 3, 4].map((i) => `<circle cx="${20 + Math.cos(i * 1.257) * 6}" cy="${20 + Math.sin(i * 1.257) * 6}" r="4.5" fill="${c}"/>`).join('') + `<circle cx="20" cy="20" r="3" fill="#fff"/>`;
    case 'tas':
      return `<path d="M2 2 h16 l3 10 -6 8 h-12z M24 4 h12 l2 12 h-14z M4 24 h14 l2 14 h-16z M24 22 h14 v16 h-12z" fill="${c}"/>`;
  }
  return '';
}

function floorPattern(kind: string, c: string): string {
  switch (kind) {
    case 'parke':
      return `<path d="M0 0 H80 M0 20 H80 M30 0 V20 M70 20 V40" stroke="${c}" stroke-width="2.5"/>`;
    case 'balik':
      return `<path d="M0 20 L20 0 L40 20 L60 0 L80 20 M0 40 L20 20 L40 40 L60 20 L80 40" stroke="${c}" stroke-width="2.5" fill="none"/>`;
    case 'fayans':
      return `<path d="M0 0 H80 M0 0 V40 M40 0 V40" stroke="${c}" stroke-width="2"/>`;
    case 'dama':
      return `<rect width="20" height="20" fill="${c}"/><rect x="20" y="20" width="20" height="20" fill="${c}"/><rect x="40" width="20" height="20" fill="${c}"/><rect x="60" y="20" width="20" height="20" fill="${c}"/>`;
    case 'hali':
      return `<circle cx="10" cy="8" r="1.5" fill="${c}"/><circle cx="50" cy="28" r="1.5" fill="${c}"/><circle cx="34" cy="14" r="1.2" fill="${c}"/>`;
  }
  return '';
}

function windowView(view: string, id: string): string {
  const sky: Record<string, [string, string]> = {
    gunes: ['#9fd8ff', '#e3f5ff'],
    aksam: ['#ff9f7a', '#ffd6a8'],
    gece: ['#2b2d6b', '#5a4c9c'],
    sehir: ['#b8e2ff', '#eef8ff'],
    deniz: ['#9fd8ff', '#e3f5ff'],
  };
  const [a, b] = sky[view] ?? sky.gunes;
  let extra = `<circle cx="232" cy="70" r="16" fill="#ffe680"/><g fill="#fff"><circle cx="180" cy="110" r="12"/><circle cx="196" cy="104" r="14"/><circle cx="212" cy="112" r="10"/></g>`;
  if (view === 'aksam') extra = `<circle cx="205" cy="128" r="26" fill="#ffb347"/><path d="M150 132 H260" stroke="#ff8f7a" stroke-width="10"/>`;
  if (view === 'gece') extra = `<path d="M228 58 a16 16 0 1 0 14 22 a12 12 0 1 1 -14 -22Z" fill="#fff3b0"/>${[[166, 60], [190, 80], [178, 112], [246, 118], [220, 100]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff"/>`).join('')}`;
  if (view === 'sehir') extra = `<circle cx="236" cy="62" r="12" fill="#ffe680"/><g fill="#9bb2d6">${[[152, 96, 22], [176, 80, 18], [196, 104, 20], [218, 88, 22], [242, 100, 18]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${140 - y}"/>`).join('')}</g>`;
  if (view === 'deniz') extra = `<circle cx="232" cy="66" r="14" fill="#ffe680"/><rect x="150" y="104" width="110" height="36" fill="#4fb6ef"/><path d="M156 116 q8 -6 16 0 q8 -6 16 0 M200 126 q8 -6 16 0 q8 -6 16 0" stroke="#fff" stroke-width="3" fill="none"/>`;
  return `<defs><linearGradient id="sky-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
    <clipPath id="win-${id}"><rect x="150" y="40" width="110" height="100" rx="10"/></clipPath></defs>
    <rect x="150" y="40" width="110" height="100" rx="10" fill="url(#sky-${id})"/><g clip-path="url(#win-${id})">${extra}</g>
    <rect x="150" y="40" width="110" height="100" rx="10" fill="none" stroke="#fff" stroke-width="8"/><path d="M205 40 V140 M150 90 H260" stroke="#fff" stroke-width="6"/>`;
}

let bgSeq = 0;
/** Oda ekrandan geniş bir alan: x 0..WORLD*100 birimi (eski oda genişliği = 100). Sağa sola kaydırılır. */
const WORLD = 3;
const WVB = 400 * WORLD;
function roomBg(id: RoomId, s: Style): string {
  const pid = `${id}${++bgSeq}`;
  const defs = `<defs>
    <pattern id="w-${pid}" width="40" height="40" patternUnits="userSpaceOnUse">${wallPattern(s.wall, shade(s.wallColor, -0.1))}</pattern>
    <pattern id="f-${pid}" width="80" height="40" patternUnits="userSpaceOnUse">${floorPattern(s.floor, shade(s.floorColor, -0.12))}</pattern></defs>`;
  const open = `<svg class="room-bg" viewBox="0 0 ${WVB} 440" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">${defs}`;
  if (id === 'havuz') {
    const scene = `<rect width="400" height="200" fill="#8fd3ff"/>
      <g fill="#c4d9f2">${[[20, 120, 30], [60, 100, 26], [100, 130, 34], [300, 110, 30], [340, 126, 40]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${200 - y}"/>`).join('')}</g>
      <g fill="#6fcf7d">${[[150, 150, 40], [200, 140, 46], [250, 152, 40], [10, 170, 30], [390, 170, 30]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>`;
    return `${open}
      ${Array.from({ length: WORLD }, (_, i) => `<g transform="translate(${i * 400} 0)">${scene}</g>`).join('')}
      <circle cx="${WVB - 120}" cy="50" r="26" fill="#ffe680"/>
      <rect y="170" width="${WVB}" height="80" fill="${s.wallColor}"/><rect y="170" width="${WVB}" height="80" fill="url(#w-${pid})"/><rect y="166" width="${WVB}" height="8" fill="#fff"/>
      <rect y="250" width="${WVB}" height="60" fill="${s.floorColor}"/><rect y="250" width="${WVB}" height="60" fill="url(#f-${pid})"/>
      <rect x="0" y="306" width="${WVB}" height="134" rx="10" fill="#fff"/><rect x="10" y="314" width="${WVB - 20}" height="126" rx="8" fill="#5fd3f3"/>
      ${Array.from({ length: WORLD }, (_, i) => `<path transform="translate(${i * 400} 0)" d="M30 350 q20 -8 40 0 M160 380 q20 -8 40 0 M290 344 q20 -8 40 0 M80 410 q20 -8 40 0 M260 416 q20 -8 40 0" stroke="#fff" stroke-width="4" fill="none" opacity=".7"/>`).join('')}
    </svg>`;
  }
  return `${open}
    <rect width="${WVB}" height="300" fill="${s.wallColor}"/><rect width="${WVB}" height="300" fill="url(#w-${pid})"/>
    <rect y="290" width="${WVB}" height="150" fill="${s.floorColor}"/><rect y="290" width="${WVB}" height="150" fill="url(#f-${pid})"/><rect y="286" width="${WVB}" height="10" fill="#fff" opacity=".85"/>
  </svg>`;
}

/* ---------------------------------------------------------------- odalar */

interface Room {
  id: RoomId;
  icon: string;
  style: Style;
  tray: string[];
  /** İlk açılıştaki yerleşim: [eşya, x%, y%] (y = eşyanın alt kenarı). */
  start: [string, number, number][];
}

/** Her odada çekmecede olan karakterler ve eşyalar. */
const COMMON = ['arkadas1', 'arkadas2', 'kardes', 'minik', 'kedi', 'kopek', 'tavsan', 'bitki', 'buyukbitki', 'sarkitbitki', 'kaktus', 'lamba', 'sarkit', 'perilamba', 'disko', 'tablo', 'cerceve', 'ayna', 'top', 'ayi', 'puf', 'hali', 'hali2', 'ayihali'];

const ROOMS: Room[] = [
  {
    id: 'yatak', icon: '🛏️',
    style: { wall: 'puan', wallColor: '#ffe3ef', floor: 'parke', floorColor: '#f3c99b', view: 'gunes' },
    tray: ['yatak', 'yuvarlakyatak', 'dolap', 'kiyafetaski', 'makyaj', 'kozmetik', 'koltuk', 'armut', 'cicekminder', 'bilgisayar', 'kitaplik', 'aynadalga'],
    start: [['hali', 50, 92], ['dolap', 13, 76], ['yatak', 66, 86], ['makyaj', 36, 72], ['koltuk', 88, 60], ['ayi', 52, 79], ['cerceve', 62, 30]],
  },
  {
    id: 'mutfak', icon: '🍳',
    style: { wall: 'pul', wallColor: '#e3f6ec', floor: 'fayans', floorColor: '#fff7ec', view: 'gunes' },
    tray: ['tezgah', 'retrobuzdolabi', 'buzdolabi', 'ocak', 'lavabo', 'mikrodalga', 'tost', 'kahve', 'rafkupa', 'kasiklik', 'masa', 'sandalye', 'tabure', 'meyve', 'ekmek', 'pasta', 'hamburger', 'caydanlik', 'dondurma'],
    start: [['buzdolabi', 12, 74], ['ocak', 34, 72], ['lavabo', 60, 70], ['masa', 62, 94], ['sandalye', 40, 95], ['sandalye', 84, 95], ['pasta', 60, 85], ['caydanlik', 34, 54]],
  },
  {
    id: 'banyo', icon: '🛁',
    style: { wall: 'puan', wallColor: '#e3f1ff', floor: 'fayans', floorColor: '#f2f6fa', view: 'gunes' },
    tray: ['kuvet', 'jakuzi', 'banyolavabo', 'camasir', 'sampuan', 'sepet', 'robot', 'havlu', 'ayna', 'ordek', 'tuvalet'],
    start: [['tuvalet', 12, 76], ['banyolavabo', 34, 72], ['camasir', 60, 72], ['havlu', 84, 50], ['kuvet', 64, 95], ['ordek', 60, 82], ['hali2', 30, 92]],
  },
  {
    id: 'salon', icon: '🛋️',
    style: { wall: 'cizgi', wallColor: '#fff1d6', floor: 'balik', floorColor: '#e7b98a', view: 'sehir' },
    tray: ['kanepe', 'tv', 'sehpa', 'abajur', 'oyunrafi', 'kediyatagi', 'kitaplik'],
    start: [['hali2', 50, 92], ['tv', 22, 72], ['kanepe', 64, 82], ['sehpa', 42, 92], ['bitki', 92, 76], ['abajur', 92, 52], ['kedi', 30, 96], ['cerceve', 66, 30]],
  },
  {
    id: 'havuz', icon: '🏖️',
    style: { wall: 'duz', wallColor: '#ffe3ef', floor: 'fayans', floorColor: '#fff1e6', view: 'gunes' },
    tray: ['sezlong', 'semsiye', 'flamingo', 'simit', 'palmiye', 'kalpbalon', 'kalpisik', 'buzkutusu', 'dondurma'],
    start: [['palmiye', 10, 66], ['semsiye', 50, 66], ['sezlong', 30, 70], ['sezlong', 72, 70], ['buzkutusu', 50, 70], ['flamingo', 74, 94], ['simit', 28, 92], ['kalpbalon', 90, 64], ['kalpisik', 50, 40]],
  },
];

/* ------------------------------------------------------------ karakterler */

type LookT = ReturnType<typeof currentLook>;
const base = (o: Record<string, [string, string]>): LookT => {
  const l: LookT = {
    kiyafet: { item: 'tisort', color: '#9fd8ff' },
    sac: { item: 'uzun', color: '#3b2418' },
    taki: { item: 'yok', color: '#fff' },
    elde: { item: 'yok', color: '#fff' },
    ayakkabi: { item: 'spor', color: '#fff' },
    fon: { item: 'sahne', color: '#7b5cff' },
    ten: { item: 'ten', color: '#f6c9a4' },
    hayvan: { item: 'yok', color: '#fff' },
  };
  for (const [k, v] of Object.entries(o)) l[k] = { item: v[0], color: v[1] };
  return l;
};
/** Özgün arkadaş karakterler (bebekle aynı çizim sistemi, hazır kıyafetlerle). */
const FRIENDS: Record<string, { look: LookT; w: number }> = {
  arkadas1: { look: base({ sac: ['kivircik', '#1f1b24'], ten: ['ten', '#8d5a3b'], kiyafet: ['sweat', '#5fd39a'], taki: ['kurdele', '#ffd93d'] }), w: 26 },
  arkadas2: { look: base({ sac: ['kisa', '#ff7eb6'], ten: ['ten', '#ffe0c7'], kiyafet: ['tutu', '#9fd8ff'], taki: ['sapka', '#b5e550'] }), w: 26 },
  kardes: { look: base({ sac: ['topuz', '#a8642f'], ten: ['ten', '#e3a777'], kiyafet: ['tulum', '#ffd93d'], ayakkabi: ['babet', '#ff8fd8'] }), w: 20 },
  minik: { look: base({ sac: ['kisa', '#f2c14e'], ten: ['ten', '#f6c9a4'], kiyafet: ['tulum', '#ffb3d1'], taki: ['bere', '#c9b6ff'] }), w: 15 },
};

/* ---------------------------------------------------------------- state */

interface Inst {
  u: number;
  id: string;
  x: number;
  y: number;
  on?: boolean;
  /** Boyanmış ana renk. */
  c?: string;
  /** Aynalanmış (sağa/sola bakıyor). */
  fl?: boolean;
  /** Döndürme açısı (derece). */
  r?: number;
  /** Üstünde durduğu eşyanın numarası (masa, tezgâh…). */
  s?: number;
}

function house(): Record<string, Inst[]> {
  progress.house ??= {};
  if ((progress.houseV ?? 1) < 2) {
    for (const list of Object.values(progress.house)) for (const i of list) i.x += 100;
    progress.houseV = 2;
  }
  if ((progress.houseV ?? 1) < 3) {
    for (const [rid, list] of Object.entries(progress.house)) {
      for (const i of list) {
        const [y0, y1] = yRange(i.id);
        i.y = Math.max(y0, Math.min(y1, i.y));
      }
      if (rid !== 'havuz' && !list.some((i) => i.id === 'pencere'))
        [75, 150, 225].forEach((x, k) => list.push({ u: nextU(list) + k, id: 'pencere', x, y: 33 }));
    }
    progress.houseV = 3;
  }
  for (const r of ROOMS) {
    if (!progress.house[r.id]) {
      progress.house[r.id] = r.start.map(([id, x, y], i) => ({ u: i + 1, id, x: x + 100, y }));
      progress.house[r.id].push({ u: 999, id: 'bebek', x: 150, y: 97 });
      if (r.id !== 'havuz') [75, 150, 225].forEach((x, k) => progress.house![r.id].push({ u: 1000 + k, id: 'pencere', x, y: 33 }));
    }
  }
  if (!localStorage.getItem('hece-hece-v1')?.includes('"house"')) commit();
  return progress.house;
}

function style(id: RoomId): Style {
  progress.roomStyle ??= {};
  const def = ROOMS.find((r) => r.id === id)!.style;
  return (progress.roomStyle[id] ??= { ...def });
}

const nextU = (list: Inst[]) => list.reduce((m, i) => Math.max(m, i.u), 0) + 1;

/* --------------------------------------------------------------- screen */

/** Resmin saydam kısmına dokunulunca arkadaki eşya seçilsin: küçük bir alfa haritası. */
const ALPHA = new Map<string, { w: number; h: number; a: Uint8ClampedArray } | null>();
function alphaAt(img: HTMLImageElement, fx: number, fy: number): boolean {
  let m = ALPHA.get(img.src);
  if (m === undefined) {
    try {
      const w = 64;
      const h = Math.max(1, Math.round((64 * img.naturalHeight) / (img.naturalWidth || 1)));
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d', { willReadFrequently: true })!;
      ctx.drawImage(img, 0, 0, w, h);
      m = { w, h, a: ctx.getImageData(0, 0, w, h).data };
    } catch {
      m = null;
    }
    if (img.complete && img.naturalWidth) ALPHA.set(img.src, m);
  }
  if (!m) return true;
  const x = Math.min(m.w - 1, Math.max(0, Math.floor(fx * m.w)));
  const y = Math.min(m.h - 1, Math.max(0, Math.floor(fy * m.h)));
  return m.a[(y * m.w + x) * 4 + 3] > 40;
}

let current: RoomId = 'yatak';
/** Oda yakınlığı: 1 = oda ekran yüksekliğini doldurur; varsayılan biraz uzaktan. */
let zoom = 0.85;

export function showHouse(back: () => void) {
  sfx.tap();
  let mode: Mode = 'tasi';
  let brush = '#ff8fc0';
  const root = show(`
    <div class="screen house">
      <header class="bar"><button class="round-btn" data-act="back">⬅</button>
        <div class="room-tabs">${ROOMS.map((r) => `<button class="room-tab" data-room="${r.id}">${roomIcon(r.id)}</button>`).join('')}</div>
        ${talkBtn('oda')}</header>
      <div class="room"><div class="world"><div class="room-bg-wrap"></div><div class="layer"></div></div><div class="pan-hint">⟷</div><div class="zoom-btns"><button data-zoom="in" aria-label="Yakınlaştır">＋</button><button data-zoom="out" aria-label="Uzaklaştır">－</button></div></div>
      <div class="modes">
        <button class="mode" data-mode="tasi">${imgTag('ui_mod_tasi', MODE_ICONS.tasi)}</button>
        <button class="mode" data-mode="boya">${imgTag('ui_mod_boya', MODE_ICONS.boya)}</button>
        <button class="mode" data-mode="tasarla">${imgTag('ui_mod_tasarla', MODE_ICONS.tasarla)}</button>
      </div>
      <div class="drawer"><div class="drawer-items"></div><div class="trash">🗑️</div></div>
      <div class="design hidden"></div>
    </div>`);
  bindTalkButtons(root);
  on(root, 'back', back);
  const roomEl = root.querySelector<HTMLElement>('.room')!;
  const layer = root.querySelector<HTMLElement>('.layer')!;
  const drawer = root.querySelector<HTMLElement>('.drawer')!;
  const drawerItems = root.querySelector<HTMLElement>('.drawer-items')!;
  const design = root.querySelector<HTMLElement>('.design')!;

  const room = () => ROOMS.find((r) => r.id === current)!;
  const list = () => house()[current];

  const thingHtml = (inst: Inst) => {
    if (inst.id === 'pencere')
      return `<div class="thing window-thing" data-u="${inst.u}" style="--w:${29.5 / WORLD}%"><svg viewBox="146 36 118 108" xmlns="http://www.w3.org/2000/svg">${windowView(style(current).view, `pw${inst.u}${++bgSeq}`)}</svg></div>`;
    if (inst.id === 'bebek') return `<div class="thing doll-thing" data-u="${inst.u}" style="--w:${26 / WORLD}%">${dollSvg(currentLook(), 'doll', { bg: false })}</div>`;
    const f = FRIENDS[inst.id];
    if (f) return `<div class="thing doll-thing" data-u="${inst.u}" style="--w:${f.w / WORLD}%">${dollSvg(f.look, 'doll', { bg: false })}</div>`;
    const t = THINGS[inst.id];
    if (!t) return '';
    const img = itemImage(inst.id);
    if (img)
      return `<div class="thing img-thing ${t.bob ? 'bob' : ''}" data-u="${inst.u}" style="--w:${t.w / WORLD}%"><img src="${img}" alt="" draggable="false"/>${
        inst.c ? `<span class="tint" style="background:${inst.c};-webkit-mask-image:url('${img}');mask-image:url('${img}')"></span>` : ''
      }</div>`;
    return `<div class="thing ${inst.on ? 'on' : ''} ${t.bob ? 'bob' : ''}" data-u="${inst.u}" style="--w:${t.w / WORLD}%;${inst.c ? `--c:${inst.c}` : ''}"><svg viewBox="${t.vb}" xmlns="http://www.w3.org/2000/svg">${OL}<g filter="url(#tol)">${colorize(t)}</g></svg></div>`;
  };

  const thumb = (id: string) => {
    if (id === 'pencere') return `<svg viewBox="146 36 118 108">${windowView(style(current).view, `pt${++bgSeq}`)}</svg>`;
    if (id === 'bebek') return dollSvg(currentLook(), 'doll', { bg: false });
    const f = FRIENDS[id];
    if (f) return dollSvg(f.look, 'doll', { bg: false });
    const img = itemImage(id);
    if (img) return `<img src="${img}" alt="" loading="lazy" decoding="async" draggable="false"/>`;
    const t = THINGS[id];
    return `<svg viewBox="${t.vb}">${t.svg}</svg>`;
  };

  const place = (el: HTMLElement, inst: Inst) => {
    el.style.left = `${inst.x / WORLD}%`;
    el.style.top = `${inst.y}%`;
    const host = inst.s ? list().find((h) => h.u === inst.s) : undefined;
    el.style.zIndex = String(THINGS[inst.id]?.flat ? 1 : host ? 1100 + Math.round(host.y * 10) : 10 + Math.round(inst.y * 10));
    // Alt-orta noktası etrafında döner; aynalama sadece içeriği çevirir.
    el.style.transform = `translate(-50%,-100%) rotate(${inst.r ?? 0}deg)${inst.fl ? ' scaleX(-1)' : ''}`;
  };

  /* ---- seçili eşya: aynala / döndür / sil düğmeleri */
  let selected: { el: HTMLElement; inst: Inst } | null = null;
  const tools = document.createElement('div');
  tools.className = 'item-tools hidden';
  tools.innerHTML = `<button data-tool="flip" aria-label="Aynala">⇋</button><button data-tool="left" aria-label="Sola döndür">↺</button><button data-tool="right" aria-label="Sağa döndür">↻</button><button data-tool="reset" aria-label="Düzelt">⟲0</button>`;
  const hideTools = () => {
    selected = null;
    tools.classList.add('hidden');
  };
  const showTools = (el: HTMLElement, inst: Inst) => {
    selected = { el, inst };
    tools.classList.remove('hidden');
    positionTools();
  };
  const positionTools = () => {
    if (!selected) return;
    const r = selected.el.getBoundingClientRect();
    const rr = roomEl.getBoundingClientRect();
    const x = Math.max(4, Math.min(rr.width - tools.offsetWidth - 4, r.left + r.width / 2 - rr.left - tools.offsetWidth / 2));
    const y = Math.max(4, r.top - rr.top - tools.offsetHeight - 6);
    tools.style.left = `${x}px`;
    tools.style.top = `${y}px`;
  };
  tools.addEventListener('pointerdown', (e) => e.stopPropagation());
  tools.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLElement>('[data-tool]');
    if (!b || !selected) return;
    const { el, inst } = selected;
    const t = b.dataset.tool;
    if (t === 'flip') inst.fl = !inst.fl;
    else if (t === 'left') inst.r = ((inst.r ?? 0) - 15) % 360;
    else if (t === 'right') inst.r = ((inst.r ?? 0) + 15) % 360;
    else {
      inst.r = 0;
      inst.fl = false;
    }
    if (!inst.r) delete inst.r;
    if (!inst.fl) delete inst.fl;
    place(el, inst);
    positionTools();
    commit();
    sfx.tap();
  });

  const renderBg = () => (root.querySelector('.room-bg-wrap')!.innerHTML = roomBg(current, style(current)));

  const renderDrawer = () => {
    drawerItems.innerHTML =
      mode === 'boya'
        ? PALETTE.map((c) => `<button class="sw ${c === brush ? 'on' : ''}" data-color="${c}" style="background:${c}"></button>`).join('')
        : [...new Set([...(list().some((i) => i.id === 'bebek') ? [] : ['bebek']), ...(current === 'havuz' ? [] : ['pencere']), ...extraItemsFor(current).filter(isCharAsset), ...room().tray, ...extraItemsFor(current), ...COMMON])].map((id) => `<button class="drawer-item ${isLockedItem(id) ? 'locked' : ''}" data-id="${id}">${thumb(id)}${isLockedItem(id) ? '<span class="lock-badge">🔒</span>' : ''}</button>`).join('');
    drawerItems.scrollLeft = 0;
    drawer.classList.toggle('paint', mode === 'boya');
  };

  const renderDesign = () => {
    const s = style(current);
    const opt = (key: keyof Style, value: string, inner: string, extra = '') =>
      `<button class="dz ${s[key] === value ? 'on' : ''}" ${extra} data-key="${key}" data-val="${value}">${inner}</button>`;
    const swatch = (key: keyof Style, c: string) => opt(key, c, '', `style="background:${c}" data-sw="1"`);
    const mini = (k: 'wall' | 'floor', kind: string) => {
      const c = k === 'wall' ? s.wallColor : s.floorColor;
      const pat = k === 'wall' ? wallPattern(kind, shade(c, -0.18)) : floorPattern(kind, shade(c, -0.2));
      return `<svg viewBox="0 0 80 40"><rect width="80" height="40" fill="${c}"/><g>${pat}</g><g transform="translate(40 0)">${pat}</g></svg>`;
    };
    const viewMini = (v: string) => `<svg viewBox="146 36 118 108">${windowView(v, `m${v}${++bgSeq}`)}</svg>`;
    design.innerHTML = `
      <div class="dz-row"><span class="dz-icon">🧱</span><div class="dz-list">${WALLS.map((w) => opt('wall', w, mini('wall', w))).join('')}</div></div>
      <div class="dz-row"><span class="dz-icon">🎨</span><div class="dz-list">${WALL_COLORS.map((c) => swatch('wallColor', c)).join('')}</div></div>
      <div class="dz-row"><span class="dz-icon">🟫</span><div class="dz-list">${FLOORS.map((f) => opt('floor', f, mini('floor', f))).join('')}</div></div>
      <div class="dz-row"><span class="dz-icon">🎨</span><div class="dz-list">${FLOOR_COLORS.map((c) => swatch('floorColor', c)).join('')}</div></div>
      ${current === 'havuz' ? '' : `<div class="dz-row"><span class="dz-icon">🪟</span><div class="dz-list">${VIEWS.map((v) => opt('view', v, viewMini(v))).join('')}</div></div>`}`;
  };

  const renderLayer = () => {
    hideTools();
    // Havada kalmış küçük eşyaları yerine oturt (eski kayıtlar ve boyut değişiklikleri için).
    let fixed = false;
    for (const i of list()) {
      const host = i.s ? list().find((h) => h.u === i.s) : undefined;
      if (placeOf(i.id) === 'surface' && (!host || !surfaceTop(host.id))) {
        settle(i);
        fixed = true;
      }
    }
    if (fixed) commit();
    layer.innerHTML = list().map(thingHtml).join('');
    layer.querySelectorAll<HTMLElement>('.thing').forEach((el) => place(el, list().find((i) => i.u === Number(el.dataset.u))!));
  };

  const render = () => {
    root.querySelectorAll('.room-tab').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.room === current));
    root.querySelectorAll('.mode').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.mode === mode));
    renderBg();
    renderLayer();
    drawer.classList.toggle('hidden', mode === 'tasarla');
    design.classList.toggle('hidden', mode !== 'tasarla');
    if (mode === 'tasarla') renderDesign();
    else renderDrawer();
  };

  /* ---- tasarım: duvar, zemin, pencere */
  design.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLElement>('.dz');
    if (!b) return;
    const s = style(current) as unknown as Record<string, string>;
    s[b.dataset.key!] = b.dataset.val!;
    commit();
    sfx.paint();
    renderBg();
    if (b.dataset.key === 'view') renderLayer();
    const scroll = [...design.querySelectorAll<HTMLElement>('.dz-list')].map((l) => l.scrollLeft);
    renderDesign();
    design.querySelectorAll<HTMLElement>('.dz-list').forEach((l, i) => (l.scrollLeft = scroll[i] ?? 0));
  });

  /* ---- boya: renk seç */
  drawerItems.addEventListener('click', (e) => {
    if (mode !== 'boya') return;
    const b = (e.target as Element).closest<HTMLElement>('.sw');
    if (!b) return;
    brush = b.dataset.color!;
    sfx.tap();
    renderDrawer();
  });

  /* ---- sürükle-bırak */
  const world = root.querySelector<HTMLElement>('.world')!;
  roomEl.appendChild(tools);
  const toPct = (cx: number, cy: number) => {
    const r = world.getBoundingClientRect();
    return { x: ((cx - r.left) / r.width) * 100 * WORLD, y: ((cy - r.top) / r.height) * 100 };
  };
  /* ---- odayı sağa sola kaydırma */
  let panX = 0;
  const scaledW = () => world.offsetWidth * zoom;
  const maxPan = () => Math.max(0, scaledW() - roomEl.clientWidth);
  const setPan = (v: number) => {
    panX = Math.max(0, Math.min(maxPan(), v));
    const W = scaledW();
    const tx = W < roomEl.clientWidth ? (roomEl.clientWidth - W) / 2 : -panX;
    const ty = (roomEl.clientHeight * (1 - zoom)) / 2;
    world.style.transform = `translate(${tx}px, ${ty}px) scale(${zoom})`;
    positionTools();
  };
  const centerPan = () => setPan(maxPan() / 2);
  /** Yakınlaştırma: ekranın ortası sabit kalır. */
  const setZoom = (z: number) => {
    const old = zoom;
    // En çok, odanın tamamı ekrana sığana kadar uzaklaş.
    const fit = roomEl.clientWidth / (world.offsetWidth || 1);
    zoom = Math.max(Math.min(1, fit), Math.min(1.25, z));
    const mid = (panX + roomEl.clientWidth / 2) / (world.offsetWidth * old || 1);
    setPan(mid * scaledW() - roomEl.clientWidth / 2);
  };
  /** Ekranda görünen x aralığı (dünya birimi). */
  const visibleX = () => {
    const W = scaledW() || 1;
    if (W <= roomEl.clientWidth) return { a: 0, b: 100 * WORLD };
    return { a: (panX / W) * 100 * WORLD, b: ((panX + roomEl.clientWidth) / W) * 100 * WORLD };
  };
  root.querySelector('[data-zoom="in"]')!.addEventListener('click', () => {
    sfx.tap();
    setZoom(zoom + 0.15);
  });
  root.querySelector('[data-zoom="out"]')!.addEventListener('click', () => {
    sfx.tap();
    setZoom(zoom - 0.15);
  });
  window.addEventListener('resize', () => setPan(panX));
  const overDrawer = (cx: number, cy: number) => {
    if (mode !== 'tasi') return false;
    const r = drawer.getBoundingClientRect();
    return cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom;
  };
  const landscape = () => window.innerWidth > window.innerHeight;

  /** Bırakılan küçük eşyanın altındaki masa/tezgâh (varsa) ve üst yüzeyin y'si. */
  const hostUnder = (inst: Inst) => {
    let best: { h: Inst; topY: number } | null = null;
    for (const h of list()) {
      const top = h === inst ? undefined : surfaceTop(h.id);
      if (top === undefined || h.r) continue;
      const half = (THINGS[h.id]?.w ?? 0) / 2;
      const topY = h.y - heightPct(h.id) * (1 - top);
      if (Math.abs(inst.x - h.x) > half * 0.85) continue;
      if (inst.y < topY - 14 || inst.y > h.y) continue;
      if (!best || Math.abs(inst.y - topY) < Math.abs(inst.y - best.topY)) best = { h, topY };
    }
    return best;
  };
  /** Küçük eşyalar ya bir yüzeyin üstüne oturur ya yere iner; havada kalmaz. */
  const settle = (inst: Inst) => {
    delete inst.s;
    if (placeOf(inst.id) !== 'surface') return;
    const hit = hostUnder(inst);
    if (hit) {
      inst.y = hit.topY + 0.6;
      inst.s = hit.h.u;
    } else inst.y = Math.max(72, inst.y);
  };
  /** Dokunulan noktadaki en üstteki eşya (resimlerin saydam kısımları sayılmaz). */
  const pickThing = (cx: number, cy: number): HTMLElement | null => {
    for (const e of document.elementsFromPoint(cx, cy)) {
      const th = e.closest<HTMLElement>('.thing');
      if (!th || !layer.contains(th)) continue;
      const img = th.querySelector<HTMLImageElement>(':scope > img');
      if (!img) return th;
      if (e !== img) continue;
      const r = img.getBoundingClientRect();
      const inst = list().find((i) => i.u === Number(th.dataset.u));
      let fx = (cx - r.left) / r.width;
      if (inst?.fl) fx = 1 - fx;
      if (inst?.r || alphaAt(img, fx, (cy - r.top) / r.height)) return th;
    }
    return null;
  };
  const elOf = (u: number) => layer.querySelector<HTMLElement>(`.thing[data-u="${u}"]`);

  function drag(el: HTMLElement, inst: Inst, ev: PointerEvent, fresh: boolean) {
    ev.preventDefault();
    const start = toPct(ev.clientX, ev.clientY);
    const off = fresh ? { x: 0, y: 0 } : { x: start.x - inst.x, y: start.y - inst.y };
    let moved = fresh;
    el.classList.add('dragging');
    const move = (e: PointerEvent) => {
      const p = toPct(e.clientX, e.clientY);
      if (!moved && Math.hypot(p.x - start.x, p.y - start.y) > 2) moved = true;
      if (!moved) return;
      if (selected) hideTools();
      const px = inst.x;
      const py = inst.y;
      inst.x = Math.max(2, Math.min(100 * WORLD - 2, p.x - off.x));
      const [y0, y1] = yRange(inst.id);
      inst.y = Math.max(y0, Math.min(y1, p.y - off.y));
      place(el, inst);
      // Üstündekiler de onunla birlikte taşınır.
      for (const r of list()) {
        if (r.s !== inst.u) continue;
        r.x += inst.x - px;
        r.y += inst.y - py;
        const re = elOf(r.u);
        if (re) place(re, r);
      }
      drawer.classList.toggle('drop', overDrawer(e.clientX, e.clientY));
    };
    const up = (e: PointerEvent) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      el.classList.remove('dragging');
      drawer.classList.remove('drop');
      if (!moved) return tap(el, inst);
      if (overDrawer(e.clientX, e.clientY)) {
        for (const r of list()) if (r.s === inst.u) delete r.s;
        house()[current] = list().filter((i) => i !== inst);
        el.animate([{ transform: 'translate(-50%,-100%) scale(1)', opacity: 1 }, { transform: 'translate(-50%,-100%) scale(0.2)', opacity: 0 }], { duration: 250 }).finished.then(() => el.remove());
        sfx.soft();
        if (inst.id === 'bebek') renderDrawer();
      } else {
        settle(inst);
        place(el, inst);
        for (const r of list()) {
          if (r.s !== inst.u) continue;
          const re = elOf(r.u);
          if (re) place(re, r);
        }
        sfx.tap();
      }
      commit();
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  }

  function tap(el: HTMLElement, inst: Inst) {
    if (mode === 'tasi') showTools(el, inst);
    const isChar = inst.id === 'bebek' || !!FRIENDS[inst.id] || isCharAsset(inst.id);
    if (mode === 'boya' && !isChar) {
      const t = THINGS[inst.id];
      if (t && itemImage(inst.id)) {
        // Görsel eşyalar: rengi gölge ve çizgileri koruyarak üstüne uygula; beyaz = boyayı sil.
        inst.c = brush === '#ffffff' ? undefined : brush;
        commit();
        sfx.paint();
        const fresh = document.createElement('div');
        fresh.innerHTML = thingHtml(inst);
        const node = fresh.firstElementChild as HTMLElement;
        el.replaceWith(node);
        place(node, inst);
        node.animate([{ transform: 'translate(-50%,-100%) scale(1)' }, { transform: 'translate(-50%,-100%) scale(1.08)' }, { transform: 'translate(-50%,-100%) scale(1)' }], { duration: 250 });
      } else if (t?.main) {
        inst.c = brush;
        el.style.setProperty('--c', brush);
        commit();
        sfx.paint();
        el.animate([{ transform: 'translate(-50%,-100%) scale(1)' }, { transform: 'translate(-50%,-100%) scale(1.08)' }, { transform: 'translate(-50%,-100%) scale(1)' }], { duration: 250 });
      } else {
        sfx.soft();
      }
      return;
    }
    if (isChar) {
      (el.querySelector('.doll-body') ?? el.querySelector('img'))?.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-30px)' }, { transform: 'translateY(0)' }], { duration: 500 });
      sfx.sing();
      return;
    }
    const t = THINGS[inst.id];
    if (t?.toggle) {
      inst.on = !inst.on;
      el.classList.toggle('on', inst.on);
      commit();
      sfx.merge();
    } else {
      el.animate([{ transform: 'translate(-50%,-100%) rotate(0)' }, { transform: 'translate(-50%,-100%) rotate(-6deg)' }, { transform: 'translate(-50%,-100%) rotate(6deg)' }, { transform: 'translate(-50%,-100%) rotate(0)' }], { duration: 400 });
      sfx.paint();
    }
  }

  const touches = new Map<number, number[]>();
  let pinch: { d: number; z: number } | null = null;
  roomEl.addEventListener('pointerdown', (ev) => {
    if ((ev.target as Element).closest('.zoom-btns, .item-tools') || pickThing(ev.clientX, ev.clientY)) return;
    hideTools();
    touches.set(ev.pointerId, [ev.clientX, ev.clientY]);
    if (touches.size === 2) {
      const [a, b] = [...touches.values()];
      pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]) || 1, z: zoom };
    }
    let sx = ev.clientX;
    let start = panX;
    roomEl.classList.add('panning');
    const move = (e: PointerEvent) => {
      if (!touches.has(e.pointerId)) return;
      touches.set(e.pointerId, [e.clientX, e.clientY]);
      if (pinch && touches.size >= 2) {
        const [a, b] = [...touches.values()];
        setZoom((pinch.z * Math.hypot(a[0] - b[0], a[1] - b[1])) / pinch.d);
        sx = e.clientX;
        start = panX;
        return;
      }
      if (e.pointerId === ev.pointerId) setPan(start - (e.clientX - sx));
    };
    const up = (e: PointerEvent) => {
      if (e.pointerId !== ev.pointerId) return;
      touches.delete(ev.pointerId);
      if (touches.size < 2) pinch = null;
      roomEl.classList.remove('panning');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  });
  roomEl.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      setZoom(zoom - e.deltaY * 0.01);
      e.preventDefault();
      return;
    }
    setPan(panX + (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY));
    e.preventDefault();
  }, { passive: false });

  layer.addEventListener('pointerdown', (ev) => {
    const el = pickThing(ev.clientX, ev.clientY);
    if (!el) return;
    const inst = list().find((i) => i.u === Number(el.dataset.u));
    if (inst) drag(el, inst, ev, false);
  });

  const addInst = (id: string, x: number, y: number): [HTMLElement, Inst] => {
    const [y0, y1] = yRange(id);
    const inst: Inst = { u: nextU(list()), id, x, y: Math.max(y0, Math.min(y1, y)) };
    settle(inst);
    list().push(inst);
    layer.insertAdjacentHTML('beforeend', thingHtml(inst));
    if (id === 'bebek') queueMicrotask(renderDrawer);
    const node = layer.lastElementChild as HTMLElement;
    place(node, inst);
    return [node, inst];
  };

  drawerItems.addEventListener('pointerdown', (ev) => {
    if (mode !== 'tasi') return;
    const b = (ev.target as Element).closest<HTMLElement>('.drawer-item');
    if (!b) return;
    if (isLockedItem(b.dataset.id!)) {
      const up = (e: PointerEvent) => {
        window.removeEventListener('pointerup', up);
        if (Math.hypot(e.clientX - ev.clientX, e.clientY - ev.clientY) > 8) return;
        wiggle(b);
        readingChallenge(() => {
          unlockItem(b.dataset.id!);
          const scroll = drawerItems.scrollTop;
          renderDrawer();
          drawerItems.scrollTop = scroll;
          const v = visibleX();
          const [node] = addInst(b.dataset.id!, v.a + (v.b - v.a) * (0.3 + Math.random() * 0.4), 88);
          node.animate([{ transform: 'translate(-50%,-100%) scale(0.3)' }, { transform: 'translate(-50%,-100%) scale(1.15)' }, { transform: 'translate(-50%,-100%) scale(1)' }], { duration: 450 });
          commit();
        });
      };
      window.addEventListener('pointerup', up);
      return;
    }
    const startY = ev.clientY;
    const startX = ev.clientX;
    // Çekmece kaydırılabilir; odaya doğru çekilince eşya odaya çıkar.
    const pull = (e: PointerEvent) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      // Dikeyde çekmece altta: yukarı çek. Yatayda çekmece sağda: sola, odaya doğru çek.
      const out = landscape() ? dx < -14 && Math.abs(dx) > Math.abs(dy) : dy < -14 && Math.abs(dy) > Math.abs(dx);
      if (out) {
        cleanup();
        const p = toPct(e.clientX, e.clientY);
        const [node, inst] = addInst(b.dataset.id!, p.x, Math.min(100, p.y + 6));
        sfx.tap();
        drag(node, inst, e, true);
      }
    };
    const tapAdd = (e: PointerEvent) => {
      cleanup();
      // Dokunup bırakınca odanın ortasına eklenir (küçük çocuklar için kolaylık).
      if (Math.hypot(e.clientX - startX, e.clientY - startY) < 8) {
        // Bebeğin arkasında kaybolmasın: odanın sağına ya da soluna koy.
        const v = visibleX();
        const id = b.dataset.id!;
        let x: number;
        let y = 84 + Math.random() * 12;
        // Küçük eşyalar: ekranda bir masa/tezgâh varsa onun üstüne.
        const hosts = placeOf(id) === 'surface' ? list().filter((h) => surfaceTop(h.id) !== undefined && !h.r && h.x > v.a && h.x < v.b) : [];
        if (hosts.length) {
          const h = hosts[Math.floor(Math.random() * hosts.length)];
          x = h.x + (Math.random() - 0.5) * (THINGS[h.id]?.w ?? 0) * 0.6;
          y = h.y - heightPct(h.id) * (1 - (surfaceTop(h.id) ?? 0)) + 1;
        } else {
          const f = Math.random() < 0.5 ? 0.12 + Math.random() * 0.22 : 0.66 + Math.random() * 0.22;
          x = v.a + (v.b - v.a) * f;
        }
        const [node] = addInst(id, x, y);
        node.animate([{ transform: 'translate(-50%,-100%) scale(0.3)' }, { transform: 'translate(-50%,-100%) scale(1.1)' }, { transform: 'translate(-50%,-100%) scale(1)' }], { duration: 350 });
        sfx.merge();
        commit();
      }
    };
    const cleanup = () => {
      window.removeEventListener('pointermove', pull);
      window.removeEventListener('pointerup', tapAdd);
    };
    window.addEventListener('pointermove', pull);
    window.addEventListener('pointerup', tapAdd);
  });

  root.querySelectorAll<HTMLElement>('.room-tab').forEach((b) =>
    b.addEventListener('click', () => {
      current = b.dataset.room as RoomId;
      sfx.tap();
      render();
      requestAnimationFrame(centerPan);
      void talk(`oda_${current}` as TalkId);
    }),
  );
  root.querySelectorAll<HTMLElement>('.mode').forEach((b) =>
    b.addEventListener('click', () => {
      mode = b.dataset.mode as Mode;
      sfx.tap();
      render();
      void talk(mode === 'tasi' ? 'mod_tasi' : mode === 'boya' ? 'esyaBoya' : 'tasarla');
    }),
  );

  render();
  requestAnimationFrame(centerPan);
  void talk('ev');
}

export const houseTitle = () => `${genitive(progress.name)} Evi`;
