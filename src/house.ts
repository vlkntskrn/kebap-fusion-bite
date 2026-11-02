/**
 * Defne'nin Evi: ev haritası (kesit görünüm) ve tam ekran odalar. Eşyalar alttan açılan, kategorili
 * menüden gelir; sürükle-bırak, boyama, aynalama/döndürme, geri al. Eşya görselleri Firefly'dan.
 */
import { progress, commit } from './state';
import { talk, bindTalkButtons } from './talk';
import { show, on, talkBtn, wiggle, h as hEl } from './ui';
import { sfx } from './sfx';
import { dollSvg, currentLook, shade } from './stage';
import { genitive, TalkId } from './content';
import { THINGS, itemImage, imageItems, isCharAsset, isLockedItem, unlockItem, yRange, placeOf, heightPct, surfaceTop, aspectOf } from './house-items';
import { Pose, isPerson, isPet, poseFor, isFood, isStove, isLamp, isHoldable, contentsOf, petSound, poseImage, boxKind, fitsIn, BoxKind } from './play';
import { readingChallenge } from './challenge';
import { imgTag, img } from './assets';
import { roomIcon, MODE_ICONS } from './icons';

type RoomId = 'yatak' | 'mutfak' | 'banyo' | 'salon' | 'havuz';
const ROOM_IDS: RoomId[] = ['yatak', 'banyo', 'salon', 'mutfak', 'havuz'];
type Mode = 'tasi' | 'boya' | 'tasarla';

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

/** Firefly duvar kâğıdı / zemin dokuları varsa onlar, yoksa çizim desenleri. */
const range = (p: string, n: number) => Array.from({ length: n }, (_, i) => `${p}_${String(i + 1).padStart(2, '0')}`);
const WALL_TILES = range('duvar', 12);
const FLOOR_TILES = range('zemin', 10);
const WALLS = [...WALL_TILES.filter((c) => img(c)), 'duz', 'puan', 'cizgi', 'kalp', 'pul', 'yildiz', 'cicek', 'tas'];
const FLOORS = [...FLOOR_TILES.filter((c) => img(c)), 'parke', 'balik', 'fayans', 'dama', 'hali'];
/** Desen bir görsel dokuysa <pattern> içine görsel olarak döşenir. */
const tileFill = (code: string, w: number, h: number) => `<image href="${img(code)}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice"/>`;
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
/** Bahçe manzarasının bir tekrarının genişliği (görsel 1344x564, yükseklik 256 birim). */
const SKY_W = Math.round((256 * 1344) / 564);
export function roomBg(id: RoomId, s: Style): string {
  const pid = `${id}${++bgSeq}`;
  const wImg = !!img(s.wall);
  const fImg = !!img(s.floor);
  const sky = img('bahce_manzara');
  const water = img('havuz_su');
  const defs = `<defs>
    ${wImg ? `<pattern id="w-${pid}" width="150" height="150" patternUnits="userSpaceOnUse">${tileFill(s.wall, 150, 150)}</pattern>` : `<pattern id="w-${pid}" width="40" height="40" patternUnits="userSpaceOnUse">${wallPattern(s.wall, shade(s.wallColor, -0.1))}</pattern>`}
    ${fImg ? `<pattern id="f-${pid}" width="120" height="120" patternUnits="userSpaceOnUse">${tileFill(s.floor, 120, 120)}</pattern>` : `<pattern id="f-${pid}" width="80" height="40" patternUnits="userSpaceOnUse">${floorPattern(s.floor, shade(s.floorColor, -0.12))}</pattern>`}
    ${sky ? `<pattern id="s-${pid}" width="${SKY_W}" height="256" patternUnits="userSpaceOnUse"><image href="${sky}" width="${SKY_W}" height="256" preserveAspectRatio="xMidYMid slice"/></pattern>` : ''}
    ${water ? `<pattern id="p-${pid}" width="160" height="160" patternUnits="userSpaceOnUse"><image href="${water}" width="160" height="160" preserveAspectRatio="xMidYMid slice"/></pattern>` : ''}</defs>`;
  const open = `<svg class="room-bg" viewBox="0 0 ${WVB} 440" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">${defs}`;
  if (id === 'havuz') {
    const scene = `<rect width="400" height="200" fill="#8fd3ff"/>
      <g fill="#c4d9f2">${[[20, 120, 30], [60, 100, 26], [100, 130, 34], [300, 110, 30], [340, 126, 40]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${200 - y}"/>`).join('')}</g>
      <g fill="#6fcf7d">${[[150, 150, 40], [200, 140, 46], [250, 152, 40], [10, 170, 30], [390, 170, 30]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>`;
    return `${open}
      ${sky ? `<rect width="${WVB}" height="256" fill="url(#s-${pid})"/>` : `${Array.from({ length: WORLD }, (_, i) => `<g transform="translate(${i * 400} 0)">${scene}</g>`).join('')}<circle cx="${WVB - 120}" cy="50" r="26" fill="#ffe680"/>
      <rect y="170" width="${WVB}" height="80" fill="${s.wallColor}"/><rect y="170" width="${WVB}" height="80" fill="url(#w-${pid})"/><rect y="166" width="${WVB}" height="8" fill="#fff"/>`}
      <rect y="250" width="${WVB}" height="60" fill="${s.floorColor}"/><rect y="250" width="${WVB}" height="60" fill="url(#f-${pid})"/>
      <rect x="0" y="306" width="${WVB}" height="134" rx="10" fill="#fff"/><rect x="10" y="314" width="${WVB - 20}" height="126" rx="8" fill="${water ? `url(#p-${pid})` : '#5fd3f3'}"/>
      ${Array.from({ length: WORLD }, (_, i) => `<path transform="translate(${i * 400} 0)" d="M30 350 q20 -8 40 0 M160 380 q20 -8 40 0 M290 344 q20 -8 40 0 M80 410 q20 -8 40 0 M260 416 q20 -8 40 0" stroke="#fff" stroke-width="4" fill="none" opacity=".7"/>`).join('')}
    </svg>`;
  }
  return `${open}
    <rect width="${WVB}" height="300" fill="${s.wallColor}"/><rect width="${WVB}" height="300" fill="url(#w-${pid})"/>
    <rect y="290" width="${WVB}" height="150" fill="${s.floorColor}"/><rect y="290" width="${WVB}" height="150" fill="url(#f-${pid})"/>
    <rect y="280" width="${WVB}" height="14" fill="#fff" opacity=".9"/><rect y="292" width="${WVB}" height="6" fill="#000" opacity=".06"/>
  </svg>`;
}

/* ---------------------------------------------------------------- odalar */

interface Room {
  id: RoomId;
  icon: string;
  style: Style;
  /** İlk açılıştaki yerleşim: [eşya, x%, y%] (y = eşyanın alt kenarı; x eski oda genişliğine göre). */
  start: [string, number, number][];
  /** Odanın penceresi (görseli yoksa çizim pencere). */
  win: string;
}

/** Görseli gelen doku, yoksa çizim desen. */
const tile = (code: string, fallback: string) => (img(code) ? code : fallback);
/** Eski sürümlerin varsayılan desenleri: hâlâ bunlarsa yeni dokulara geçilir. */
const OLD_DEF: Record<string, [string, string]> = { yatak: ['puan', 'parke'], mutfak: ['pul', 'fayans'], banyo: ['puan', 'fayans'], salon: ['cizgi', 'balik'], havuz: ['duz', 'fayans'] };
const winOf = (rid: string) => {
  const w = ROOMS.find((r) => r.id === rid)?.win;
  return w && itemImage(w) ? w : 'pencere';
};

const ROOMS: Room[] = [
  {
    id: 'yatak', icon: '🛏️',
    style: { wall: tile('duvar_01', 'puan'), wallColor: '#ffe3ef', floor: tile('zemin_01', 'parke'), floorColor: '#f3c99b', view: 'gunes' }, win: 'pencere_04',
    start: [['yuvarlakhali', 50, 94], ['dolap', 13, 80], ['yatak', 66, 88], ['makyaj', 36, 76], ['koltuk', 88, 70], ['ayi', 52, 82], ['cerceve', 62, 30]],
  },
  {
    id: 'mutfak', icon: '🍳',
    style: { wall: tile('duvar_11', 'pul'), wallColor: '#e3f6ec', floor: tile('zemin_03', 'fayans'), floorColor: '#fff7ec', view: 'gunes' }, win: 'pencere_04',
    start: [['buzdolabi', 12, 76], ['ocak', 34, 74], ['lavabo', 60, 74], ['masa', 62, 94], ['sandalye', 40, 95], ['sandalye', 84, 95], ['pasta', 60, 85]],
  },
  {
    id: 'banyo', icon: '🛁',
    style: { wall: tile('duvar_12', 'puan'), wallColor: '#e3f1ff', floor: tile('zemin_06', 'fayans'), floorColor: '#f2f6fa', view: 'gunes' }, win: 'pencere_03',
    start: [['tuvalet', 12, 78], ['banyolavabo', 34, 76], ['camasir', 60, 76], ['havlu', 84, 50], ['kuvet', 64, 95], ['paspas', 30, 94]],
  },
  {
    id: 'salon', icon: '🛋️',
    style: { wall: tile('duvar_02', 'cizgi'), wallColor: '#fff1d6', floor: tile('zemin_02', 'balik'), floorColor: '#e7b98a', view: 'sehir' }, win: 'pencere_02',
    start: [['v_hali_02', 50, 94], ['tv', 22, 76], ['kanepe', 64, 84], ['sehpa', 42, 92], ['bitki', 92, 80], ['kedi', 30, 96], ['cerceve', 66, 30]],
  },
  {
    id: 'havuz', icon: '🏖️',
    style: { wall: 'duz', wallColor: '#ffe3ef', floor: tile('zemin_10', 'fayans'), floorColor: '#fff1e6', view: 'gunes' }, win: '',
    start: [['palmiye', 10, 66], ['semsiye', 50, 66], ['sezlong', 30, 70], ['sezlong', 72, 70], ['buzkutusu', 50, 70], ['flamingo', 74, 94], ['simit', 28, 92]],
  },
];

/* ---------------------------------------------------------------- state */

interface Inst {
  u: number;
  id: string;
  x: number;
  y: number;
  on?: boolean;
  /** Boyanmış renk. */
  c?: string;
  /** Aynalanmış (sağa/sola bakıyor). */
  fl?: boolean;
  /** Döndürme açısı (derece). */
  r?: number;
  /** Üstünde durduğu eşyanın numarası (masa, tezgâh…; karakterde yatak, sandalye…). */
  s?: number;
  /** Karakterin duruşu (oturuyor, yatıyor, banyoda…). */
  p?: Pose;
  /** Karakterin elinde tutuluyor (s = karakter). */
  hd?: boolean;
  /** Yiyecekten alınan ısırık sayısı. */
  b?: number;
  /** Lamba kapalı. */
  off?: boolean;
  /** Dolabın, buzdolabının içine konan eşyalar. */
  in?: string[];
  /** Görünüm: yandan ya da arkadan (Firefly <kod>_yan / <kod>_arka). */
  v?: 'yan' | 'arka';
}

/** Eşyanın elde olan görünümleri: önden ('') + resmi olan yan/arka. */
const viewsOf = (id: string): ('' | 'yan' | 'arka')[] => ['', ...(['yan', 'arka'] as const).filter((k) => itemImage(`${id}_${k}`))];

/** Görseli olmayan eşyalar artık gösterilmez (bebek ve çizim pencere hariç). */
const keep = (id: string) => id === 'bebek' || id === 'pencere' || !!itemImage(id);

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
  if ((progress.houseV ?? 1) < 4) {
    for (const rid of Object.keys(progress.house)) progress.house[rid] = progress.house[rid].filter((i) => keep(i.id));
    progress.houseV = 4;
  }
  if ((progress.houseV ?? 1) < 5) {
    // Çizim pencereler yerine Firefly pencereleri; eski varsayılan duvar/zemin yerine dokular.
    for (const [rid, list] of Object.entries(progress.house)) {
      const w = winOf(rid);
      if (w !== 'pencere') for (const i of list) if (i.id === 'pencere') { i.id = w; i.y = WIN_Y; }
    }
    for (const [rid, st] of Object.entries(progress.roomStyle ?? {})) {
      const old = OLD_DEF[rid];
      const def = ROOMS.find((r) => r.id === rid)?.style;
      if (!old || !def) continue;
      if (st.wall === old[0]) st.wall = def.wall;
      if (st.floor === old[1]) st.floor = def.floor;
    }
    progress.houseV = 5;
    commit();
  }
  let created = false;
  for (const r of ROOMS) {
    if (!progress.house[r.id]) {
      created = true;
      const list: Inst[] = r.start.filter(([id]) => keep(id)).map(([id, x, y], i) => ({ u: i + 1, id, x: x + 100, y }));
      list.push({ u: 999, id: 'bebek', x: 150, y: 97 });
      if (r.id !== 'havuz') {
        const w = winOf(r.id);
        [75, 150, 225].forEach((x, k) => list.push({ u: 1000 + k, id: w, x, y: w === 'pencere' ? 33 : WIN_Y }));
      }
      progress.house[r.id] = list;
    }
  }
  if (created) commit();
  return progress.house as Record<string, Inst[]>;
}

function style(id: RoomId): Style {
  progress.roomStyle ??= {};
  const def = ROOMS.find((r) => r.id === id)!.style;
  return (progress.roomStyle[id] ??= { ...def });
}

/** Firefly penceresinin alt kenarı (oda yüksekliğinin %'si). */
const WIN_Y = 46;
const nextU = (list: Inst[]) => list.reduce((m, i) => Math.max(m, i.u), 0) + 1;

/* ------------------------------------------------------------ çizim */

/** Bir eşyanın HTML'i (oda ve harita önizlemesi için ortak). */
function thingHtml(inst: Inst, room: RoomId): string {
  if (inst.id === 'pencere')
    return `<div class="thing window-thing" data-u="${inst.u}" style="--w:${29.5 / WORLD}%"><svg viewBox="146 36 118 108" xmlns="http://www.w3.org/2000/svg">${windowView(style(room).view, `pw${inst.u}${++bgSeq}`)}</svg></div>`;
  const list = house()[room] ?? [];
  const host = inst.s ? list.find((h) => h.u === inst.s) : undefined;
  const p = inst.p;
  // Yatarken karakter yatağa sığsın.
  const ar = inst.id === 'bebek' ? 1.6 : aspectOf(inst.id);
  const fit = p === 'yat' && host ? Math.min(1, ((THINGS[host.id]?.w ?? 40) * 0.9) / ((inst.id === 'bebek' ? 26 : THINGS[inst.id]?.w ?? 10) * ar)) : 1;
  const fx = p === 'banyo' ? '<span class="fx-bubbles"><i></i><i></i><i></i><i></i><i></i></span>' : p === 'dus' ? '<span class="fx-rain"></span>' : p === 'yuz' ? '<span class="fx-ripple"></span>' : '';
  const mood = p === 'yat' ? '<span class="mood sleep">💤</span>' : '';
  const cls = [p ? `pose pose-${p}` : '', inst.hd ? 'held' : '', inst.b ? `bite-${inst.b}` : '', isLamp(inst.id) ? `lamp ${inst.off ? 'off' : ''}` : '', boxKind(inst.id) ? 'openable' : ''].join(' ');
  const vars = `--ar:${ar};--fit:${fit.toFixed(3)};`;
  if (inst.id === 'bebek') return `<div class="thing doll-thing ${cls}" data-u="${inst.u}" style="--w:${26 / WORLD}%;${vars}">${dollSvg(currentLook(), 'doll', { bg: false })}${fx}${mood}</div>`;
  const vid = inst.v && itemImage(`${inst.id}_${inst.v}`) ? `${inst.id}_${inst.v}` : inst.id;
  const t = THINGS[vid] ?? THINGS[inst.id];
  const src = itemImage(vid);
  if (!t || !src) return '';
  const pimg = poseImage(inst.id, p);
  // Ocaktaki yemekten buhar çıkar.
  const cooking = host && isStove(host.id) && !inst.hd ? '<span class="fx-steam"><i></i><i></i><i></i></span>' : '';
  return `<div class="thing img-thing ${t.bob ? 'bob' : ''} ${inst.on ? 'on' : ''} ${cls} ${pimg ? 'pose-img' : ''}" data-u="${inst.u}" style="--w:${(pimg && p === 'yat' ? t.w * ar * fit : t.w) / WORLD}%;${vars}"><img src="${pimg ?? src}" alt="" draggable="false"/>${
    inst.c ? `<span class="tint" style="background:${inst.c};-webkit-mask-image:url('${src}');mask-image:url('${src}')"></span>` : ''
  }${fx}${mood}${cooking}</div>`;
}

function placeStyle(el: HTMLElement, inst: Inst, list: Inst[]) {
  el.style.left = `${inst.x / WORLD}%`;
  el.style.top = `${inst.y}%`;
  const host = inst.s ? list.find((h) => h.u === inst.s) : undefined;
  el.style.zIndex = String(inst.hd ? 2600 : THINGS[inst.id]?.flat ? 1 : host ? 1100 + Math.round(host.y * 10) : 10 + Math.round(inst.y * 10));
  el.style.transform = `translate(-50%,-100%) rotate(${inst.r ?? 0}deg)${inst.fl ? ' scaleX(-1)' : ''}`;
}

/** Odanın tamamı (arka plan + eşyalar), harita önizlemesi için. */
function worldInto(target: HTMLElement, room: RoomId) {
  const list = house()[room];
  target.innerHTML = `<div class="room-bg-wrap">${roomBg(room, style(room))}</div><div class="layer">${list.map((i) => thingHtml(i, room)).join('')}</div><div class="night-shade"></div>`;
  target.classList.toggle('night', !!progress.night);
  target.querySelectorAll<HTMLElement>('.thing').forEach((el) => placeStyle(el, list.find((i) => i.u === Number(el.dataset.u))!, list));
}

/** Resmin saydam kısmına dokunulunca arkadaki eşya seçilsin: küçük bir alfa haritası. */
const ALPHA = new Map<string, { w: number; h: number; a: Uint8ClampedArray } | null>();
function alphaAt(im: HTMLImageElement, fx: number, fy: number): boolean {
  let m = ALPHA.get(im.src);
  if (m === undefined) {
    try {
      const w = 64;
      const hh = Math.max(1, Math.round((64 * im.naturalHeight) / (im.naturalWidth || 1)));
      const c = document.createElement('canvas');
      c.width = w;
      c.height = hh;
      const ctx = c.getContext('2d', { willReadFrequently: true })!;
      ctx.drawImage(im, 0, 0, w, hh);
      m = { w, h: hh, a: ctx.getImageData(0, 0, w, hh).data };
    } catch {
      m = null;
    }
    if (im.complete && im.naturalWidth) ALPHA.set(im.src, m);
  }
  if (!m) return true;
  const x = Math.min(m.w - 1, Math.max(0, Math.floor(fx * m.w)));
  const y = Math.min(m.h - 1, Math.max(0, Math.floor(fy * m.h)));
  return m.a[(y * m.w + x) * 4 + 3] > 40;
}

/* ------------------------------------------------------------ kategoriler */

interface Cat {
  id: string;
  /** Simge olarak kullanılacak eşya (görseli olan ilk aday). */
  icons: string[];
  test: (id: string) => boolean;
}
const re = (s: string) => new RegExp(s);
const CATS: Cat[] = [
  { id: 'kisi', icons: ['kiz1', 'kiz2'], test: (id) => id === 'bebek' || (isCharAsset(id) && re('^(kiz|oglan|bebek|anne|baba|nine|dede|ogretmen)').test(id)) },
  { id: 'hayvan', icons: ['kedi', 'kopek'], test: (id) => isCharAsset(id) || re('^(v_evcil_esya|kediyatagi|kediagaci|kuskafesi|akvaryum|kopekkulubesi)').test(id) },
  { id: 'yatak', icons: ['v_yatak_03', 'yatak'], test: (id) => re('^(yatak|yuvarlakyatak|cibinlikliyatak|ranza|besik|v_yatak_|dolap|v_dolap_|kiyafetaski|sifonyer|komodin|makyaj|v_makyaj_|kozmetik|boyaynasi)').test(id) },
  { id: 'oturma', icons: ['kanepe', 'v_kanepe_04'], test: (id) => re('^(kanepe|kosekanepe|berjer|v_kanepe_|v_koltuk_|koltuk$|armut|puf|v_oturak_|cicekminder|sandalye|tabure|v_sandalye_|mamasandalyesi)').test(id) },
  { id: 'masa', icons: ['masa', 'v_masa_03'], test: (id) => re('^(masa|yuvarlakmasa|v_masa|sehpa|v_sehpa_|calismamasasi|bilgisayar|tvunitesi|kitaplik|oyunrafi|v_raf_02|v_raf_05)').test(id) },
  { id: 'mutfak', icons: ['retrobuzdolabi', 'buzdolabi'], test: (id) => re('^(buzdolabi|retrobuzdolabi|tezgah|v_tezgah_|ocak|firin|v_ocak_|lavabo|mikrodalga|tost|kahve|blender|mikser|kettle|caydanlik|v_alet_|tabakdolabi|rafkupa|kasiklik|v_tabak_|copkutusu|saksiotlar)').test(id) },
  { id: 'yemek', icons: ['pasta', 'pizza'], test: (id) => re('^(pasta|pizza|hamburger|salata|meyve|ekmek|kurabiye|cilek|sut|limonata|dondurma|v_yemek_)').test(id) },
  { id: 'banyo', icons: ['kuvet', 'v_kuvet_02'], test: (id) => re('^(kuvet|v_kuvet_|jakuzi|duskabini|v_dus_|banyolavabo|v_lavabo_|tuvalet|v_tuvalet_|camasir|sampuan|sepet|havlu|bornoz|ordek|dissfircasi|sabunluk|paspas|robot|v_banyo_aksesuar_)').test(id) },
  { id: 'tv', icons: ['tv', 'v_tv_03'], test: (id) => re('^(tv$|v_tv_|oyunkonsolu|piyano|v_muzik_|somine)').test(id) },
  { id: 'dekor', icons: ['v_bitki_06', 'buyukbitki'], test: (id) => id === 'pencere' || re('^(pencere_|kapi_|perde|tablo|v_tablo_|cerceve|kedipostu|ayna|aynadalga|v_ayna_|duvarrafi|v_raf_|fotoipi|duvarsaati|vazo|bitki|buyukbitki|sarkitbitki|kaktus|v_bitki_|abajur|lambader|v_lamba_|sarkit|disko|perilamba|gecelambasi|yuvarlakhali|ayihali|v_hali_)').test(id) },
  { id: 'oyuncak', icons: ['v_oyuncak_05', 'ayi'], test: (id) => re('^(ayi|unicorn|oyuncakev|oyuncaksandigi|yazitahtasi|v_oyuncak_|top$|cadir)').test(id) },
  { id: 'bahce', icons: ['flamingo', 'semsiye'], test: (id) => re('^(sezlong|semsiye|flamingo|simit|palmiye|buzkutusu|kaydirak|salincak|trambolin|kumkovasi|mangal|cicektarhi|agac|cit|bisiklet|limonatastandi|gokkusagi|piknik|v_havuz_oyuncak_|v_bahce_|v_oyun_parki_)').test(id) },
];
const catOf = (id: string) => CATS.find((c) => c.test(id))?.id ?? 'dekor';
const catIcon = (c: Cat) => {
  const id = c.icons.find((i) => itemImage(i));
  return id ? `<img src="${itemImage(id)}" alt="" draggable="false"/>` : '';
};

/* ------------------------------------------------------------ ev haritası */

/** Evin kesiti: üst kat (yatak odası, banyo), alt kat (salon, mutfak), yanda havuz bahçesi. */
const FLOORS_MAP: RoomId[][] = [
  ['yatak', 'banyo'],
  ['salon', 'mutfak'],
];
let current: RoomId = 'yatak';
/** Oda yakınlığı: 1 = oda ekran yüksekliğini doldurur. */
let zoom = 0.85;

export function showHouse(back: () => void) {
  sfx.tap();
  const card = (r: RoomId) => `<button class="map-room" data-room="${r}"><div class="map-world"></div><span class="map-label">${roomIcon(r)}</span></button>`;
  // Firefly harita parçaları varsa onlar, yoksa CSS çizimi.
  const bg = img('arka_harita');
  const roof = img('harita_cati');
  const sign = img('harita_tabela');
  const bush = img('harita_cali');
  const tree = img('harita_agac');
  const root = show(`
    <div class="screen house-map ${bg ? 'has-bg' : ''}" ${bg ? `style="background-image:url('${bg}')"` : ''}>
      <button class="round-btn map-back" data-act="back">⬅</button>
      <div class="map-talk">${talkBtn('ev')}</div>
      ${tree ? `<img class="map-tree" src="${tree}" alt="" draggable="false"/>` : ''}
      <div class="map-house">
        <div class="map-roof ${roof ? 'has-img' : ''}">${roof ? `<img class="roof-img" src="${roof}" alt="" draggable="false"/>` : ''}<span class="map-name ${sign ? 'has-sign' : ''}" ${sign ? `style="background-image:url('${sign}')"` : ''}>${houseTitle()}</span></div>
        <div class="map-body">${FLOORS_MAP.map((row) => `<div class="map-floor">${row.map(card).join('')}</div>`).join('')}</div>
      </div>
      <div class="map-garden">${card('havuz')}<div class="map-grass"></div></div>
      ${bush ? `<div class="map-bushes" style="background-image:url('${bush}')"></div>` : ''}
    </div>`);
  bindTalkButtons(root);
  on(root, 'back', back);
  root.querySelectorAll<HTMLElement>('.map-room').forEach((b) => {
    worldInto(b.querySelector('.map-world')!, b.dataset.room as RoomId);
    b.addEventListener('click', () => {
      current = b.dataset.room as RoomId;
      // Odaya yakınlaşma animasyonu.
      const r = b.getBoundingClientRect();
      const ghost = b.cloneNode(true) as HTMLElement;
      ghost.classList.add('map-zoom');
      Object.assign(ghost.style, { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` });
      document.body.appendChild(ghost);
      sfx.merge();
      ghost
        .animate([{ left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` }, { left: '0px', top: '0px', width: `${innerWidth}px`, height: `${innerHeight}px` }], { duration: 320, easing: 'ease-in' })
        .finished.then(() => {
          showRoom(back);
          ghost.remove();
        });
    });
  });
  void talk('ev');
}

/* ------------------------------------------------------------ oda */

function showRoom(backToHome: () => void) {
  let mode: Mode = 'tasi';
  let brush = '#ff8fc0';
  let cat = 'kisi';
  const root = show(`
    <div class="screen room-screen">
      <div class="room"><div class="world ${progress.night ? 'night' : ''}"><div class="room-bg-wrap"></div><div class="layer"></div><div class="night-shade"></div><div class="glow-layer"></div></div><div class="pan-hint">⟷</div></div>
      <div class="hud hud-tl"><button class="round-btn" data-act="map">⬅</button><span class="room-chip">${roomIcon(current)}</span></div>
      <div class="hud hud-tr"><button class="round-btn daynight" data-act="night" aria-label="Gece / gündüz">${progress.night ? '☀️' : '🌙'}</button>${talkBtn('oda')}<button class="round-btn" data-zoom="in" aria-label="Yakınlaştır">＋</button><button class="round-btn" data-zoom="out" aria-label="Uzaklaştır">－</button></div>
      <div class="hud hud-l">
        <button class="mode" data-mode="tasi">${imgTag('ui_mod_tasi', MODE_ICONS.tasi)}</button>
        <button class="mode" data-mode="boya">${imgTag('ui_mod_boya', MODE_ICONS.boya)}</button>
        <button class="mode" data-mode="tasarla">${imgTag('ui_mod_tasarla', MODE_ICONS.tasarla)}</button>
        <button class="mode undo" data-act="undo" aria-label="Geri al">↶</button>
      </div>
      <button class="open-sheet" data-act="sheet" aria-label="Eşyalar">${catIcon(CATS[2]) || '🧺'}<b>＋</b></button>
      <div class="trash-drop">🗑️</div>
      <div class="room-doors">${ROOM_IDS.filter((r) => r !== current).map((r) => `<div class="door-drop" data-room="${r}">${roomIcon(r)}</div>`).join('')}</div>
      <div class="inside hidden"></div>
      <div class="sheet hidden">
        <div class="sheet-head"><div class="cat-tabs"></div><button class="sheet-close" data-act="close">▾</button></div>
        <div class="sheet-body"></div>
      </div>
    </div>`);
  bindTalkButtons(root);
  const roomEl = root.querySelector<HTMLElement>('.room')!;
  const world = root.querySelector<HTMLElement>('.world')!;
  const layer = root.querySelector<HTMLElement>('.layer')!;
  const sheet = root.querySelector<HTMLElement>('.sheet')!;
  const sheetBody = root.querySelector<HTMLElement>('.sheet-body')!;
  const tabs = root.querySelector<HTMLElement>('.cat-tabs')!;
  const trash = root.querySelector<HTMLElement>('.trash-drop')!;
  const list = () => house()[current];
  const place = (el: HTMLElement, inst: Inst) => placeStyle(el, inst, list());
  const elOf = (u: number) => layer.querySelector<HTMLElement>(`.thing[data-u="${u}"]`);

  /* ---- geri al */
  const undoStack: string[] = [];
  const snapshot = () => {
    undoStack.push(JSON.stringify({ l: list(), s: style(current) }));
    if (undoStack.length > 40) undoStack.shift();
    root.querySelector('.undo')!.classList.remove('off');
  };
  const undo = () => {
    const last = undoStack.pop();
    if (!last) return;
    const { l, s } = JSON.parse(last);
    house()[current] = l;
    progress.roomStyle![current] = s;
    commit();
    renderBg();
    renderLayer();
    sfx.soft();
    root.querySelector('.undo')!.classList.toggle('off', undoStack.length === 0);
  };
  root.querySelector('.undo')!.classList.add('off');
  on(root, 'undo', undo);
  on(root, 'map', () => showHouse(backToHome));

  /* ---- seçili eşya: aynala / döndür */
  let selected: { el: HTMLElement; inst: Inst } | null = null;
  const tools = hEl(`<div class="item-tools hidden"><button data-tool="flip" aria-label="Sağa sola çevir">⇋</button><button data-tool="turn" aria-label="Önden, yandan, arkadan">🔄</button><button data-tool="left" aria-label="Sola eğ">↺</button><button data-tool="right" aria-label="Sağa eğ">↻</button><button data-tool="reset" aria-label="Düzelt">⟲0</button></div>`);
  roomEl.appendChild(tools);
  const hideTools = () => {
    selected = null;
    tools.classList.add('hidden');
  };
  const positionTools = () => {
    if (!selected) return;
    const r = selected.el.getBoundingClientRect();
    const rr = roomEl.getBoundingClientRect();
    tools.style.left = `${Math.max(4, Math.min(rr.width - tools.offsetWidth - 4, r.left + r.width / 2 - rr.left - tools.offsetWidth / 2))}px`;
    tools.style.top = `${Math.max(56, r.top - rr.top - tools.offsetHeight - 6)}px`;
  };
  const showTools = (el: HTMLElement, inst: Inst) => {
    selected = { el, inst };
    // Çevir: yalnızca yan/arka resmi olan eşyada. Eğme: küçük eşyalarda (ya da zaten eğilmişse düzeltmek için).
    const small = isHoldable(inst.id) || isFood(inst.id) || placeOf(inst.id) === 'surface' || placeOf(inst.id) === 'wall';
    tools.querySelector<HTMLElement>('[data-tool="turn"]')!.hidden = viewsOf(inst.id).length < 2;
    for (const k of ['left', 'right']) tools.querySelector<HTMLElement>(`[data-tool="${k}"]`)!.hidden = !small;
    tools.querySelector<HTMLElement>('[data-tool="reset"]')!.hidden = !inst.r && !inst.v && !inst.fl;
    tools.classList.remove('hidden');
    positionTools();
  };
  tools.addEventListener('pointerdown', (e) => e.stopPropagation());
  tools.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLElement>('[data-tool]');
    if (!b || !selected) return;
    snapshot();
    const { inst } = selected;
    let { el } = selected;
    const t = b.dataset.tool;
    if (t === 'turn') {
      const vs = viewsOf(inst.id);
      const next = vs[(vs.indexOf(inst.v ?? '') + 1) % vs.length];
      if (next) inst.v = next;
      else delete inst.v;
      const node = hEl(thingHtml(inst, current));
      el.replaceWith(node);
      el = node;
      selected = { el, inst };
      node.animate([{ scale: '0.6 1' }, { scale: '1 1' }], { duration: 250, easing: 'ease-out' });
    } else if (t === 'flip') inst.fl = !inst.fl;
    else if (t === 'left') inst.r = ((inst.r ?? 0) - 15) % 360;
    else if (t === 'right') inst.r = ((inst.r ?? 0) + 15) % 360;
    else if (t === 'reset') {
      inst.r = 0;
      inst.fl = false;
      if (inst.v) {
        delete inst.v;
        const node = hEl(thingHtml(inst, current));
        el.replaceWith(node);
        el = node;
        selected = { el, inst };
      }
    }
    if (!inst.r) delete inst.r;
    if (!inst.fl) delete inst.fl;
    place(el, inst);
    showTools(el, inst);
    commit();
    sfx.tap();
  });

  /* ---- çizim */
  const renderBg = () => (root.querySelector('.room-bg-wrap')!.innerHTML = roomBg(current, style(current)));
  const renderLayer = () => {
    hideTools();
    let fixed = false;
    for (const i of list()) {
      const host = i.s ? list().find((h) => h.u === i.s) : undefined;
      if (placeOf(i.id) === 'surface' && !i.hd && (!host || !surfaceTop(host.id))) {
        settle(i);
        fixed = true;
      }
    }
    if (fixed) commit();
    layer.innerHTML = list().map((i) => thingHtml(i, current)).join('');
    layer.querySelectorAll<HTMLElement>('.thing').forEach((el) => place(el, list().find((i) => i.u === Number(el.dataset.u))!));
    renderGlows();
  };
  /** Gece açık lambaların ışığı. */
  const glowLayer = root.querySelector<HTMLElement>('.glow-layer')!;
  const renderGlows = () => {
    glowLayer.innerHTML = list()
      .filter((i) => isLamp(i.id) && !i.off)
      .map((i) => {
        const hgt = heightPct(i.id) || 10;
        const big = /lambader|sarkit|somine|perilamba|disko|v_lamba_06/.test(i.id) ? 1.6 : 1;
        return `<span class="glow" style="left:${i.x / WORLD}%;top:${i.y - hgt * 0.7}%;--g:${(18 + hgt) * big}"></span>`;
      })
      .join('');
  };
  const setNight = (n: boolean) => {
    progress.night = n;
    commit();
    world.classList.toggle('night', n);
    root.querySelector('.daynight')!.textContent = n ? '☀️' : '🌙';
    (n ? sfx.night : sfx.day)();
    renderGlows();
  };
  on(root, 'night', () => setNight(!progress.night));

  /* ---- alt menü */
  const allItems = () => {
    const ids = imageItems().filter((id) => current === 'havuz' || catOf(id) !== 'bahce' || !re('^(palmiye|agac|v_bahce_bitki_0[3-5])').test(id));
    const extra = [...(list().some((i) => i.id === 'bebek') ? [] : ['bebek']), ...(current === 'havuz' ? [] : ['pencere'])];
    return [...extra, ...ids];
  };
  const thumb = (id: string) => {
    if (id === 'pencere') return `<svg viewBox="146 36 118 108">${windowView(style(current).view, `pt${++bgSeq}`)}</svg>`;
    if (id === 'bebek') return dollSvg(currentLook(), 'doll', { bg: false });
    return `<img src="${itemImage(id)}" alt="" loading="lazy" decoding="async" draggable="false"/>`;
  };
  const renderTabs = () => {
    tabs.innerHTML =
      mode === 'tasi'
        ? CATS.filter((c) => allItems().some((id) => catOf(id) === c.id)).map((c) => `<button class="cat-tab ${c.id === cat ? 'on' : ''}" data-cat="${c.id}">${catIcon(c)}</button>`).join('')
        : `<span class="sheet-title">${mode === 'boya' ? imgTag('ui_mod_boya', MODE_ICONS.boya) : imgTag('ui_mod_tasarla', MODE_ICONS.tasarla)}</span>`;
  };
  const renderBody = () => {
    if (mode === 'boya') {
      sheetBody.innerHTML = `<div class="palette">${PALETTE.map((c) => `<button class="sw ${c === brush ? 'on' : ''}" data-color="${c}" style="background:${c}"></button>`).join('')}</div>`;
      return;
    }
    if (mode === 'tasarla') return renderDesign();
    const ids = allItems().filter((id) => catOf(id) === cat);
    sheetBody.innerHTML = `<div class="sheet-items">${ids
      .map((id) => `<button class="drawer-item ${isLockedItem(id) ? 'locked' : ''}" data-id="${id}">${thumb(id)}${isLockedItem(id) ? '<span class="lock-badge">🔒</span>' : ''}</button>`)
      .join('')}</div>`;
  };
  const openSheet = (yes: boolean) => {
    sheet.classList.toggle('hidden', !yes);
    root.classList.toggle('sheet-open', yes);
    if (yes) {
      renderTabs();
      renderBody();
    }
  };
  on(root, 'sheet', () => {
    sfx.tap();
    openSheet(true);
  });
  on(root, 'close', () => openSheet(false));
  tabs.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLElement>('.cat-tab');
    if (!b) return;
    cat = b.dataset.cat!;
    sfx.tap();
    renderTabs();
    renderBody();
    void talk(`esyakat_${cat}` as TalkId);
  });

  const renderDesign = () => {
    const s = style(current);
    const opt = (k: keyof Style, value: string, inner: string, extra = '') => `<button class="dz ${s[k] === value ? 'on' : ''}" ${extra} data-key="${k}" data-val="${value}">${inner}</button>`;
    const swatch = (k: keyof Style, c: string) => opt(k, c, '', `style="background:${c}" data-sw="1"`);
    const mini = (k: 'wall' | 'floor', kind: string) => {
      if (img(kind)) return `<img src="${img(kind)}" alt=""/>`;
      const c = k === 'wall' ? s.wallColor : s.floorColor;
      const pat = k === 'wall' ? wallPattern(kind, shade(c, -0.18)) : floorPattern(kind, shade(c, -0.2));
      return `<svg viewBox="0 0 80 40"><rect width="80" height="40" fill="${c}"/><g>${pat}</g><g transform="translate(40 0)">${pat}</g></svg>`;
    };
    const viewMini = (v: string) => `<svg viewBox="146 36 118 108">${windowView(v, `m${v}${++bgSeq}`)}</svg>`;
    const row = (icon: string, inner: string) => `<div class="dz-row"><span class="dz-icon">${icon}</span><div class="dz-list">${inner}</div></div>`;
    sheetBody.innerHTML =
      row(imgTag('ui_duvar', '🧱'), WALLS.map((w) => opt('wall', w, mini('wall', w))).join('')) +
      (img(s.wall) ? '' : row('🎨', WALL_COLORS.map((c) => swatch('wallColor', c)).join(''))) +
      row(imgTag('ui_zemin', '🟫'), FLOORS.map((f) => opt('floor', f, mini('floor', f))).join('')) +
      (img(s.floor) ? '' : row('🎨', FLOOR_COLORS.map((c) => swatch('floorColor', c)).join(''))) +
      (current === 'havuz' ? '' : row(imgTag('ui_pencere', '🪟'), VIEWS.map((v) => opt('view', v, viewMini(v))).join('')));
  };

  sheetBody.addEventListener('click', (e) => {
    const t = e.target as Element;
    const sw = t.closest<HTMLElement>('.palette .sw');
    if (sw) {
      brush = sw.dataset.color!;
      sfx.tap();
      renderBody();
      return;
    }
    const dz = t.closest<HTMLElement>('.dz');
    if (dz) {
      snapshot();
      (style(current) as unknown as Record<string, string>)[dz.dataset.key!] = dz.dataset.val!;
      commit();
      sfx.paint();
      renderBg();
      if (dz.dataset.key === 'view') renderLayer();
      const scroll = [...sheetBody.querySelectorAll<HTMLElement>('.dz-list')].map((l) => l.scrollLeft);
      renderDesign();
      sheetBody.querySelectorAll<HTMLElement>('.dz-list').forEach((l, i) => (l.scrollLeft = scroll[i] ?? 0));
    }
  });

  /* ---- kaydırma ve yakınlaştırma */
  const toPct = (cx: number, cy: number) => {
    const r = world.getBoundingClientRect();
    return { x: ((cx - r.left) / r.width) * 100 * WORLD, y: ((cy - r.top) / r.height) * 100 };
  };
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
  const setZoom = (z: number) => {
    const old = zoom;
    const fit = roomEl.clientWidth / (world.offsetWidth || 1);
    zoom = Math.max(Math.min(1, fit), Math.min(1.3, z));
    const mid = (panX + roomEl.clientWidth / 2) / (world.offsetWidth * old || 1);
    setPan(mid * scaledW() - roomEl.clientWidth / 2);
  };
  const visibleX = () => {
    const W = scaledW() || 1;
    if (W <= roomEl.clientWidth) return { a: 0, b: 100 * WORLD };
    return { a: (panX / W) * 100 * WORLD, b: ((panX + roomEl.clientWidth) / W) * 100 * WORLD };
  };
  root.querySelector('[data-zoom="in"]')!.addEventListener('click', () => setZoom(zoom + 0.15));
  root.querySelector('[data-zoom="out"]')!.addEventListener('click', () => setZoom(zoom - 0.15));
  const onResize = () => setPan(panX);
  window.addEventListener('resize', onResize);

  /* ---- yüzeyler */
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
  const settle = (inst: Inst) => {
    delete inst.s;
    if (placeOf(inst.id) !== 'surface') return;
    const hit = hostUnder(inst);
    if (hit) {
      inst.y = hit.topY + 0.6;
      inst.s = hit.h.u;
    } else inst.y = Math.max(72, inst.y);
  };

  const pickThing = (cx: number, cy: number): HTMLElement | null => {
    for (const e of document.elementsFromPoint(cx, cy)) {
      const th = e.closest<HTMLElement>('.thing');
      if (!th || !layer.contains(th)) continue;
      const im = th.querySelector<HTMLImageElement>(':scope > img');
      if (!im) return th;
      if (e !== im) continue;
      const r = im.getBoundingClientRect();
      const inst = list().find((i) => i.u === Number(th.dataset.u));
      let fx = (cx - r.left) / r.width;
      if (inst?.fl) fx = 1 - fx;
      if (inst?.r || inst?.p || alphaAt(im, fx, (cy - r.top) / r.height)) return th;
    }
    return null;
  };
  const overTrash = (cx: number, cy: number) => {
    const r = trash.getBoundingClientRect();
    return cx >= r.left - 20 && cx <= r.right + 20 && cy >= r.top - 20 && cy <= r.bottom + 20;
  };

  /* ---- karakter ve eşya etkileşimleri */
  const doors = root.querySelector<HTMLElement>('.room-doors')!;
  const doorAt = (cx: number, cy: number) => {
    for (const d of doors.querySelectorAll<HTMLElement>('.door-drop')) {
      const r = d.getBoundingClientRect();
      if (cx >= r.left - 8 && cx <= r.right + 8 && cy >= r.top - 8 && cy <= r.bottom + 8) return d;
    }
    return null;
  };
  const isChar = (id: string) => id === 'bebek' || isCharAsset(id);
  const widthOf = (i: Inst) => (i.id === 'bebek' ? 26 : THINGS[i.id]?.w ?? 10);
  const heightOf = (i: Inst) => (i.id === 'bebek' ? ((26 * 4 * 1.6) / 440) * 100 : heightPct(i.id));
  /** Noktanın üstünde olduğu eşya (en öndeki). */
  const under = (x: number, y: number, ok: (h: Inst) => boolean, self: Inst) => {
    let best: Inst | null = null;
    for (const h of list()) {
      if (h === self || h.s === self.u || !ok(h)) continue;
      const half = widthOf(h) / 2;
      if (Math.abs(x - h.x) > half * 0.9 || y > h.y + 3 || y < h.y - heightOf(h) - 2) continue;
      if (!best || h.y > best.y) best = h;
    }
    return best;
  };
  const mood = (u: number, emoji: string, ms = 1600) => {
    const el = elOf(u);
    if (!el) return;
    const m = hEl(`<span class="mood pop">${emoji}</span>`);
    el.appendChild(m);
    setTimeout(() => m.remove(), ms);
  };
  /** Yiyecekten bir ısırık: üçüncüde biter. */
  const bite = (food: Inst, eater: Inst) => {
    food.b = (food.b ?? 0) + 1;
    sfx.chomp();
    if (food.b >= 3) {
      house()[current] = list().filter((i) => i !== food);
      setTimeout(() => sfx.yum(), 350);
    }
    commit();
    renderLayer();
    mood(eater.u, food.b >= 3 ? '😋' : '😊');
  };
  /** Küçük eşya buzdolabına, dolaba bırakılınca içine konur. */
  const putAway = (inst: Inst, cy: number): boolean => {
    const box = under(inst.x, cy, (h) => fitsIn(h.id, inst.id), inst);
    if (!box) return false;
    house()[current] = list().filter((i) => i !== inst);
    box.in = [inst.id, ...(box.in ?? [])].slice(0, 16);
    commit();
    renderLayer();
    const bel = elOf(box.u);
    bel?.classList.add('opened');
    setTimeout(() => bel?.classList.remove('opened'), 400);
    sfx.door();
    setTimeout(() => sfx.close(), 300);
    mood(box.u, '✨', 900);
    return true;
  };
  /** Bırakılan eşya bir şeyle etkileşirse true. */
  const interact = (inst: Inst): boolean => {
    // Karakter: yatağa yatar, sandalyeye oturur, küvete girer, havuzda yüzer.
    if (isChar(inst.id)) {
      const person = isPerson(inst.id);
      const host = under(inst.x, inst.y, (h) => !!poseFor(h.id) && !isChar(h.id), inst);
      if (host) {
        const pf = poseFor(host.id)!;
        const p: Pose = person ? pf.p : pf.p === 'banyo' ? 'banyo' : 'otur';
        inst.s = host.u;
        inst.p = p;
        inst.x = host.x;
        inst.y = host.y - heightOf(host) * (p === 'otur' && !person ? 0.5 : pf.at);
        commit();
        renderLayer();
        if (p === 'yat') {
          sfx.sleep();
        } else if (p === 'banyo') {
          sfx.water();
          setTimeout(() => sfx.bubbles(), 500);
          mood(inst.u, '😊');
        } else if (p === 'dus') {
          sfx.water();
          mood(inst.u, '😊');
        } else {
          sfx.sit();
          mood(inst.u, '🙂', 1100);
        }
        return true;
      }
      if (current === 'havuz' && inst.y >= 76) {
        inst.p = 'yuz';
        commit();
        renderLayer();
        sfx.splash();
        mood(inst.u, '😄');
        return true;
      }
      return false;
    }
    // Küçük eşya karaktere verilince eline alır; yiyecek ağzına götürülünce yer.
    if (isHoldable(inst.id) || isFood(inst.id)) {
      const cy = inst.y - heightPct(inst.id) / 2;
      const ch = under(inst.x, cy, (h) => isPerson(h.id), inst);
      if (!ch) return putAway(inst, cy);
      const H = heightOf(ch);
      const lying = ch.p === 'yat';
      const nearMouth = cy < ch.y - H * 0.55;
      for (const r of list()) if (r.s === ch.u && r.hd && r !== inst) {
        delete r.hd;
        delete r.s;
        r.x = ch.x + widthOf(ch);
        r.y = Math.max(72, ch.y);
        settle(r);
      }
      inst.s = ch.u;
      inst.hd = true;
      inst.x = ch.x + (ch.fl ? -1 : 1) * widthOf(ch) * 0.34;
      inst.y = lying ? ch.y - 1 : ch.y - H * (ch.p === 'otur' ? 0.18 : 0.3);
      if (isFood(inst.id) && nearMouth && !lying) bite(inst, ch);
      else {
        commit();
        renderLayer();
        sfx.merge();
        mood(ch.u, isFood(inst.id) ? '🤤' : '😊', 1200);
      }
      return true;
    }
    return false;
  };
  /** Eşyayı (üstündekilerle birlikte) başka odaya taşır ve o odaya geçer. */
  const moveToRoom = (inst: Inst, to: RoomId) => {
    const group = [inst];
    for (let k = 0; k < group.length; k++) for (const r of list()) if (r.s === group[k].u && !group.includes(r)) group.push(r);
    house()[current] = list().filter((i) => !group.includes(i));
    const dest = house()[to];
    const dx = 150 - inst.x;
    const map = new Map<number, number>();
    for (const g of group) {
      const u = nextU(dest);
      map.set(g.u, u);
      dest.push({ ...g, u, x: g.x + dx });
    }
    for (const g of dest.slice(dest.length - group.length)) {
      if (g.s) g.s = map.get(g.s);
    }
    const moved = dest[dest.length - group.length];
    delete moved.s;
    if (moved.p !== 'yuz' || to !== 'havuz') delete moved.p;
    if (to !== 'havuz' || moved.p !== 'yuz') {
      const [y0, y1] = yRange(moved.id);
      moved.y = Math.max(y0, Math.min(y1, moved.y));
    }
    commit();
    sfx.whoosh();
    current = to;
    showRoom(backToHome);
  };

  /* ---- açılan eşyalar (buzdolabı, dolap, fırın…): kapakları açılır, içi raflı görünür */
  const insideEl = root.querySelector<HTMLElement>('.inside')!;
  let openBox: { el: HTMLElement; inst: Inst } | null = null;
  const closeInside = (quiet = false) => {
    if (!openBox) return;
    openBox.el.classList.remove('opened');
    openBox = null;
    insideEl.classList.add('hidden');
    insideEl.innerHTML = '';
    if (!quiet) sfx.close();
  };
  /** Rafların düzeni: her rafa kaç eşya. */
  const PER: Record<BoxKind, number> = { buzdolabi: 4, firin: 4, dolap: 5, sandik: 6, raf: 5, banyo: 4, cekmece: 4 };
  const openInside = (el: HTMLElement, inst: Inst, items: string[]) => {
    const kind = boxKind(inst.id)!;
    openBox = { el, inst };
    el.classList.add('opened');
    const per = PER[kind];
    const rows: string[][] = [];
    for (let i = 0; i < items.length; i += per) rows.push(items.slice(i, i + per));
    const stored = new Set(inst.in ?? []);
    const back = img(`ic_${kind}`);
    insideEl.innerHTML = `
      <div class="cabinet kind-${kind}">
        <div class="cab-top"><img src="${itemImage(inst.id)}" alt=""/><button class="cab-close" data-act="inside-close" aria-label="Kapat">✕</button></div>
        <div class="cab-body ${back ? 'has-art' : ''}" ${back ? `style="background-image:url('${back}')"` : ''}>
          ${kind === 'firin' ? '<div class="cab-glow"></div>' : ''}
          <div class="cab-shelves">${rows
            .map((r) => `<div class="cab-shelf">${r.map((id) => `<button class="cab-item ${stored.has(id) ? 'mine' : ''}" data-id="${id}">${thumb(id)}</button>`).join('')}</div>`)
            .join('')}</div>
          ${kind === 'sandik' ? '<div class="cab-lid"></div>' : '<div class="cab-door left"></div><div class="cab-door right"></div>'}
        </div>
      </div>`;
    insideEl.classList.remove('hidden');
    sfx.door();
    if (kind === 'buzdolabi') setTimeout(() => sfx.click(), 250);
  };
  /** İçinden alınan eşya: Defne'nin koyduğu bir eşyaysa listeden düşer. */
  const takeOut = (box: Inst, id: string) => {
    const k = box.in?.indexOf(id) ?? -1;
    if (k >= 0) box.in!.splice(k, 1);
    if (box.in && !box.in.length) delete box.in;
  };
  // Kapat düğmesi dolap her açıldığında yeniden çizildiği için tıklama burada yakalanır.
  insideEl.addEventListener('click', (e) => {
    if (e.target === insideEl || (e.target as Element).closest('[data-act="inside-close"]')) closeInside();
  });
  // Raftaki eşyaya dokununca dolabın önüne çıkar; parmakla çekince odaya sürüklenir.
  insideEl.addEventListener('pointerdown', (ev) => {
    const b = (ev.target as Element).closest<HTMLElement>('.cab-item');
    if (!b || !openBox) return;
    ev.preventDefault();
    const box = openBox.inst;
    const id = b.dataset.id!;
    const sx = ev.clientX;
    const sy = ev.clientY;
    b.classList.add('lift');
    const pull = (e: PointerEvent) => {
      if (Math.hypot(e.clientX - sx, e.clientY - sy) < 14) return;
      cleanup();
      snapshot();
      takeOut(box, id);
      closeInside(true);
      const p = toPct(e.clientX, e.clientY);
      const [node, inst] = addInst(id, p.x, Math.min(100, p.y + 4));
      sfx.tap();
      drag(node, inst, e, true);
    };
    const tapOut = () => {
      cleanup();
      b.classList.remove('lift');
      snapshot();
      takeOut(box, id);
      const w = widthOf(box);
      const [node] = addInst(id, box.x + (Math.random() < 0.5 ? -1 : 1) * (w / 2 + 3 + Math.random() * 4), placeOf(id) === 'wall' ? 50 : Math.min(98, box.y + 4));
      pop(node);
      commit();
      sfx.merge();
      closeInside();
    };
    const cleanup = () => {
      window.removeEventListener('pointermove', pull);
      window.removeEventListener('pointerup', tapOut);
    };
    window.addEventListener('pointermove', pull);
    window.addEventListener('pointerup', tapOut);
  });

  /* ---- sürükle-bırak */
  function drag(el: HTMLElement, inst: Inst, ev: PointerEvent, fresh: boolean) {
    ev.preventDefault();
    const start = toPct(ev.clientX, ev.clientY);
    const off = fresh ? { x: 0, y: 0 } : { x: start.x - inst.x, y: start.y - inst.y };
    let moved = fresh;
    el.classList.add('dragging');
    const move = (e: PointerEvent) => {
      const p = toPct(e.clientX, e.clientY);
      if (!moved && Math.hypot(p.x - start.x, p.y - start.y) > 2) {
        moved = true;
        snapshot();
        // Kalkınca oturma/yatma biter, elden alınan eşya serbest kalır.
        if (inst.p || inst.hd) {
          delete inst.p;
          delete inst.hd;
          delete inst.s;
          const node = hEl(thingHtml(inst, current));
          node.classList.add('dragging');
          el.replaceWith(node);
          el = node;
          place(el, inst);
        }
      }
      if (!moved) return;
      hideTools();
      root.classList.add('dragging-item');
      const px = inst.x;
      const py = inst.y;
      inst.x = Math.max(2, Math.min(100 * WORLD - 2, p.x - off.x));
      const [y0, y1] = yRange(inst.id);
      inst.y = Math.max(y0, Math.min(y1, p.y - off.y));
      place(el, inst);
      for (const r of list()) {
        if (r.s !== inst.u) continue;
        r.x += inst.x - px;
        r.y += inst.y - py;
        const rel = elOf(r.u);
        if (rel) place(rel, r);
      }
      trash.classList.toggle('hot', overTrash(e.clientX, e.clientY));
      const dr = doorAt(e.clientX, e.clientY);
      doors.querySelectorAll('.door-drop').forEach((d) => d.classList.toggle('hot', d === dr));
    };
    const up = (e: PointerEvent) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      el.classList.remove('dragging');
      const del = moved && overTrash(e.clientX, e.clientY);
      const door = moved ? doorAt(e.clientX, e.clientY) : null;
      root.classList.remove('dragging-item');
      trash.classList.remove('hot');
      doors.querySelectorAll('.door-drop').forEach((d) => d.classList.remove('hot'));
      if (!moved) return tap(el, inst);
      if (door) return moveToRoom(inst, door.dataset.room as RoomId);
      if (del) {
        for (const r of list())
          if (r.s === inst.u) {
            delete r.s;
            delete r.p;
            if (r.hd) {
              delete r.hd;
              r.y = Math.max(72, r.y);
            }
          }
        house()[current] = list().filter((i) => i !== inst);
        el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200 }).finished.then(() => el.remove());
        sfx.soft();
      } else if (!interact(inst)) {
        settle(inst);
        place(el, inst);
        for (const r of list()) {
          if (r.s !== inst.u) continue;
          const rel = elOf(r.u);
          if (rel) place(rel, r);
        }
        // Ocağa yemek konunca buhar çıksın, kalkınca dursun.
        if (list().some((h) => isStove(h.id))) renderLayer();
        const host = inst.s ? list().find((h) => h.u === inst.s) : undefined;
        if (host && isStove(host.id)) sfx.sizzle();
        else sfx.tap();
      }
      commit();
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  }

  const pop = (node: HTMLElement) =>
    node.animate([{ transform: 'translate(-50%,-100%) scale(0.3)' }, { transform: 'translate(-50%,-100%) scale(1.1)' }, { transform: 'translate(-50%,-100%) scale(1)' }], { duration: 350 });

  function tap(el: HTMLElement, inst: Inst) {
    const ch = isChar(inst.id);
    if (mode === 'boya') {
      if (ch || inst.id === 'pencere') return sfx.soft();
      snapshot();
      inst.c = brush === '#ffffff' ? undefined : brush;
      commit();
      sfx.paint();
      const node = hEl(thingHtml(inst, current));
      el.replaceWith(node);
      place(node, inst);
      pop(node);
      return;
    }
    const jump = () =>
      (el.querySelector('.doll-body') ?? el.querySelector('img'))?.animate([{ translate: '0 0' }, { translate: '0 -30px' }, { translate: '0 0' }], { duration: 500 });
    // Elindeki yiyecekten ısırır.
    const food = ch ? list().find((r) => r.s === inst.u && r.hd && isFood(r.id)) : undefined;
    if (food) {
      snapshot();
      return bite(food, inst);
    }
    // Elindeki yiyeceğe dokununca da yer.
    if (inst.hd && isFood(inst.id)) {
      const eater = list().find((h) => h.u === inst.s);
      if (eater) {
        snapshot();
        return bite(inst, eater);
      }
    }
    if (ch && isPet(inst.id)) {
      jump();
      petSound(inst.id);
      mood(inst.u, '💕', 1200);
      return;
    }
    if (ch) {
      if (inst.p === 'yat') {
        sfx.sleep();
        mood(inst.u, progress.night ? '😴' : '🥱', 1400);
        return;
      }
      showTools(el, inst);
      if (inst.p === 'banyo' || inst.p === 'yuz') {
        sfx.bubbles();
        mood(inst.u, '🫧', 1200);
        return;
      }
      jump();
      sfx.sing();
      mood(inst.u, ['😊', '😄', '🎵', '💖'][Math.floor(Math.random() * 4)], 1200);
      return;
    }
    const inside = contentsOf(inst.id, inst.in);
    if (inside) return openInside(el, inst, inside);
    showTools(el, inst);
    if (isLamp(inst.id)) {
      snapshot();
      inst.off = !inst.off;
      if (!inst.off) delete inst.off;
      el.classList.toggle('off', !!inst.off);
      commit();
      sfx.click();
      renderGlows();
      return;
    }
    if (isStove(inst.id) && list().some((r) => r.s === inst.u)) return sfx.sizzle();
    if (poseFor(inst.id)?.p === 'banyo' || poseFor(inst.id)?.p === 'dus') return sfx.water();
    if (THINGS[inst.id]?.toggle) {
      inst.on = !inst.on;
      el.classList.toggle('on', inst.on);
      commit();
      sfx.merge();
    } else {
      sfx.paint();
    }
  }

  const touches = new Map<number, number[]>();
  let pinch: { d: number; z: number } | null = null;
  roomEl.addEventListener('pointerdown', (ev) => {
    if ((ev.target as Element).closest('.item-tools') || pickThing(ev.clientX, ev.clientY)) return;
    hideTools();
    if (!sheet.classList.contains('hidden') && mode === 'tasi') openSheet(false);
    touches.set(ev.pointerId, [ev.clientX, ev.clientY]);
    if (touches.size === 2) {
      const [a, b] = [...touches.values()];
      pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]) || 1, z: zoom };
    }
    let sx = ev.clientX;
    let start = panX;
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
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  });
  roomEl.addEventListener(
    'wheel',
    (e) => {
      if (e.ctrlKey) setZoom(zoom - e.deltaY * 0.01);
      else setPan(panX + (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY));
      e.preventDefault();
    },
    { passive: false },
  );
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
    const node = hEl(thingHtml(inst, current));
    layer.appendChild(node);
    place(node, inst);
    return [node, inst];
  };
  /** Dokunarak eklenen eşyanın yeri: küçükse görünen bir masa/tezgâhın üstü, değilse görünen alanda boş bir yer. */
  const spotFor = (id: string) => {
    const v = visibleX();
    const hosts = placeOf(id) === 'surface' ? list().filter((h) => surfaceTop(h.id) !== undefined && !h.r && h.x > v.a && h.x < v.b) : [];
    if (hosts.length) {
      const h = hosts[Math.floor(Math.random() * hosts.length)];
      return { x: h.x + (Math.random() - 0.5) * (THINGS[h.id]?.w ?? 0) * 0.6, y: h.y - heightPct(h.id) * (1 - (surfaceTop(h.id) ?? 0)) + 1 };
    }
    const [y0, y1] = yRange(id);
    return { x: v.a + (v.b - v.a) * (0.2 + Math.random() * 0.6), y: y1 >= 100 ? 84 + Math.random() * 12 : (y0 + y1) / 2 };
  };

  sheetBody.addEventListener('pointerdown', (ev) => {
    if (mode !== 'tasi') return;
    const b = (ev.target as Element).closest<HTMLElement>('.drawer-item');
    if (!b) return;
    const id = b.dataset.id!;
    if (isLockedItem(id)) {
      const up = (e: PointerEvent) => {
        window.removeEventListener('pointerup', up);
        if (Math.hypot(e.clientX - ev.clientX, e.clientY - ev.clientY) > 8) return;
        wiggle(b);
        readingChallenge(() => {
          unlockItem(id);
          renderBody();
          openSheet(false);
          snapshot();
          const s = spotFor(id);
          pop(addInst(id, s.x, s.y)[0]);
          commit();
        });
      };
      window.addEventListener('pointerup', up);
      return;
    }
    const sx = ev.clientX;
    const sy = ev.clientY;
    // Yukarı, odaya doğru çekilince eşya parmağa yapışır; menü kapanır.
    const pull = (e: PointerEvent) => {
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;
      if (dy < -16 && Math.abs(dy) > Math.abs(dx)) {
        cleanup();
        openSheet(false);
        snapshot();
        const p = toPct(e.clientX, e.clientY);
        const [node, inst] = addInst(id, p.x, Math.min(100, p.y + 6));
        sfx.tap();
        drag(node, inst, e, true);
      }
    };
    const tapAdd = (e: PointerEvent) => {
      cleanup();
      if (Math.hypot(e.clientX - sx, e.clientY - sy) >= 8) return;
      openSheet(false);
      snapshot();
      const s = spotFor(id);
      pop(addInst(id, s.x, s.y)[0]);
      sfx.merge();
      commit();
    };
    const cleanup = () => {
      window.removeEventListener('pointermove', pull);
      window.removeEventListener('pointerup', tapAdd);
    };
    window.addEventListener('pointermove', pull);
    window.addEventListener('pointerup', tapAdd);
  });

  root.querySelectorAll<HTMLElement>('.mode[data-mode]').forEach((b) =>
    b.addEventListener('click', () => {
      mode = b.dataset.mode as Mode;
      sfx.tap();
      root.querySelectorAll('.mode[data-mode]').forEach((x) => x.classList.toggle('on', (x as HTMLElement).dataset.mode === mode));
      hideTools();
      openSheet(mode !== 'tasi');
      void talk(mode === 'tasi' ? 'mod_tasi' : mode === 'boya' ? 'esyaBoya' : 'tasarla');
    }),
  );
  root.querySelector('.mode[data-mode="tasi"]')!.classList.add('on');

  renderBg();
  renderLayer();
  requestAnimationFrame(centerPan);
  void talk(`oda_${current}` as TalkId);
}

export const houseTitle = () => `${genitive(progress.name)} Evi`;
