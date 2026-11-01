/**
 * Defne'nin Evi: odaları tasarlama (duvar, zemin, pencere), eşyaları sürükleyip yerleştirme,
 * eşyaları boyama ve karakterleri gezdirme. Bütün çizimler bu projeye özgüdür.
 */
import { progress, commit } from './state';
import { talk, bindTalkButtons } from './talk';
import { show, on, talkBtn } from './ui';
import { sfx } from './sfx';
import { dollSvg, currentLook, shade } from './stage';
import { genitive, TalkId } from './content';
import { THINGS, colorize, itemImage, extraItemsFor, isCharAsset } from './house-items';
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
function roomBg(id: RoomId, s: Style): string {
  const pid = `${id}${++bgSeq}`;
  const defs = `<defs>
    <pattern id="w-${pid}" width="40" height="40" patternUnits="userSpaceOnUse">${wallPattern(s.wall, shade(s.wallColor, -0.1))}</pattern>
    <pattern id="f-${pid}" width="80" height="40" patternUnits="userSpaceOnUse">${floorPattern(s.floor, shade(s.floorColor, -0.12))}</pattern></defs>`;
  if (id === 'havuz') {
    return `<svg class="room-bg" viewBox="0 0 400 440" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">${defs}
      <rect width="400" height="200" fill="#8fd3ff"/><circle cx="320" cy="50" r="26" fill="#ffe680"/>
      <g fill="#c4d9f2">${[[20, 120, 30], [60, 100, 26], [100, 130, 34], [300, 110, 30], [340, 126, 40]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${200 - y}"/>`).join('')}</g>
      <g fill="#6fcf7d">${[[150, 150, 40], [200, 140, 46], [250, 152, 40], [10, 170, 30], [390, 170, 30]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>
      <rect y="170" width="400" height="80" fill="${s.wallColor}"/><rect y="170" width="400" height="80" fill="url(#w-${pid})"/><rect y="166" width="400" height="8" fill="#fff"/>
      <rect y="250" width="400" height="60" fill="${s.floorColor}"/><rect y="250" width="400" height="60" fill="url(#f-${pid})"/>
      <rect x="0" y="306" width="400" height="134" rx="10" fill="#fff"/><rect x="10" y="314" width="380" height="126" rx="8" fill="#5fd3f3"/>
      <path d="M30 350 q20 -8 40 0 M160 380 q20 -8 40 0 M290 344 q20 -8 40 0 M80 410 q20 -8 40 0 M260 416 q20 -8 40 0" stroke="#fff" stroke-width="4" fill="none" opacity=".7"/>
    </svg>`;
  }
  return `<svg class="room-bg" viewBox="0 0 400 440" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">${defs}
    <rect width="400" height="300" fill="${s.wallColor}"/><rect width="400" height="300" fill="url(#w-${pid})"/>
    ${windowView(s.view, pid)}
    <rect y="290" width="400" height="150" fill="${s.floorColor}"/><rect y="290" width="400" height="150" fill="url(#f-${pid})"/><rect y="286" width="400" height="10" fill="#fff" opacity=".85"/>
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
}

function house(): Record<string, Inst[]> {
  progress.house ??= {};
  for (const r of ROOMS) {
    if (!progress.house[r.id]) {
      progress.house[r.id] = r.start.map(([id, x, y], i) => ({ u: i + 1, id, x, y }));
      progress.house[r.id].push({ u: 999, id: 'bebek', x: 50, y: 97 });
    }
  }
  return progress.house;
}

function style(id: RoomId): Style {
  progress.roomStyle ??= {};
  const def = ROOMS.find((r) => r.id === id)!.style;
  return (progress.roomStyle[id] ??= { ...def });
}

const nextU = (list: Inst[]) => list.reduce((m, i) => Math.max(m, i.u), 0) + 1;

/* --------------------------------------------------------------- screen */

let current: RoomId = 'yatak';

export function showHouse(back: () => void) {
  sfx.tap();
  let mode: Mode = 'tasi';
  let brush = '#ff8fc0';
  const root = show(`
    <div class="screen house">
      <header class="bar"><button class="round-btn" data-act="back">⬅</button>
        <div class="room-tabs">${ROOMS.map((r) => `<button class="room-tab" data-room="${r.id}">${roomIcon(r.id)}</button>`).join('')}</div>
        ${talkBtn('oda')}</header>
      <div class="room"><div class="room-bg-wrap"></div><div class="layer"></div></div>
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
    if (inst.id === 'bebek') return `<div class="thing doll-thing" data-u="${inst.u}" style="--w:30%">${dollSvg(currentLook(), 'doll', { bg: false })}</div>`;
    const f = FRIENDS[inst.id];
    if (f) return `<div class="thing doll-thing" data-u="${inst.u}" style="--w:${f.w}%">${dollSvg(f.look, 'doll', { bg: false })}</div>`;
    const t = THINGS[inst.id];
    if (!t) return '';
    const img = itemImage(inst.id);
    if (img) return `<div class="thing img-thing ${t.bob ? 'bob' : ''}" data-u="${inst.u}" style="--w:${t.w}%"><img src="${img}" alt="" draggable="false"/></div>`;
    return `<div class="thing ${inst.on ? 'on' : ''} ${t.bob ? 'bob' : ''}" data-u="${inst.u}" style="--w:${t.w}%;${inst.c ? `--c:${inst.c}` : ''}"><svg viewBox="${t.vb}" xmlns="http://www.w3.org/2000/svg">${OL}<g filter="url(#tol)">${colorize(t)}</g></svg></div>`;
  };

  const thumb = (id: string) => {
    const f = FRIENDS[id];
    if (f) return dollSvg(f.look, 'doll', { bg: false });
    const img = itemImage(id);
    if (img) return `<img src="${img}" alt="" draggable="false"/>`;
    const t = THINGS[id];
    return `<svg viewBox="${t.vb}">${t.svg}</svg>`;
  };

  const place = (el: HTMLElement, inst: Inst) => {
    el.style.left = `${inst.x}%`;
    el.style.top = `${inst.y}%`;
    el.style.zIndex = String(THINGS[inst.id]?.flat ? 1 : 10 + Math.round(inst.y * 10));
  };

  const renderBg = () => (root.querySelector('.room-bg-wrap')!.innerHTML = roomBg(current, style(current)));

  const renderDrawer = () => {
    drawerItems.innerHTML =
      mode === 'boya'
        ? PALETTE.map((c) => `<button class="sw ${c === brush ? 'on' : ''}" data-color="${c}" style="background:${c}"></button>`).join('')
        : [...new Set([...extraItemsFor(current).filter(isCharAsset), ...room().tray, ...extraItemsFor(current), ...COMMON])].map((id) => `<button class="drawer-item" data-id="${id}">${thumb(id)}</button>`).join('');
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

  const render = () => {
    root.querySelectorAll('.room-tab').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.room === current));
    root.querySelectorAll('.mode').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.mode === mode));
    renderBg();
    layer.innerHTML = list().map(thingHtml).join('');
    layer.querySelectorAll<HTMLElement>('.thing').forEach((el) => place(el, list().find((i) => i.u === Number(el.dataset.u))!));
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
  const toPct = (cx: number, cy: number) => {
    const r = roomEl.getBoundingClientRect();
    return { x: ((cx - r.left) / r.width) * 100, y: ((cy - r.top) / r.height) * 100 };
  };
  const overDrawer = (cx: number, cy: number) => {
    if (mode !== 'tasi') return false;
    const r = drawer.getBoundingClientRect();
    return cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom;
  };
  const landscape = () => window.innerWidth > window.innerHeight;

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
      inst.x = Math.max(2, Math.min(98, p.x - off.x));
      inst.y = Math.max(8, Math.min(100, p.y - off.y));
      place(el, inst);
      drawer.classList.toggle('drop', overDrawer(e.clientX, e.clientY));
    };
    const up = (e: PointerEvent) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      el.classList.remove('dragging');
      drawer.classList.remove('drop');
      if (!moved) return tap(el, inst);
      if (overDrawer(e.clientX, e.clientY) && inst.id !== 'bebek') {
        house()[current] = list().filter((i) => i !== inst);
        el.animate([{ transform: 'translate(-50%,-100%) scale(1)', opacity: 1 }, { transform: 'translate(-50%,-100%) scale(0.2)', opacity: 0 }], { duration: 250 }).finished.then(() => el.remove());
        sfx.soft();
      } else {
        sfx.tap();
      }
      commit();
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  }

  function tap(el: HTMLElement, inst: Inst) {
    const isChar = inst.id === 'bebek' || !!FRIENDS[inst.id] || isCharAsset(inst.id);
    if (mode === 'boya' && !isChar) {
      const t = THINGS[inst.id];
      if (t?.main && !itemImage(inst.id)) {
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

  layer.addEventListener('pointerdown', (ev) => {
    const el = (ev.target as Element).closest<HTMLElement>('.thing');
    if (!el) return;
    const inst = list().find((i) => i.u === Number(el.dataset.u));
    if (inst) drag(el, inst, ev, false);
  });

  const addInst = (id: string, x: number, y: number): [HTMLElement, Inst] => {
    const inst: Inst = { u: nextU(list()), id, x, y };
    list().push(inst);
    layer.insertAdjacentHTML('beforeend', thingHtml(inst));
    const node = layer.lastElementChild as HTMLElement;
    place(node, inst);
    return [node, inst];
  };

  drawerItems.addEventListener('pointerdown', (ev) => {
    if (mode !== 'tasi') return;
    const b = (ev.target as Element).closest<HTMLElement>('.drawer-item');
    if (!b) return;
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
        const x = Math.random() < 0.5 ? 12 + Math.random() * 22 : 66 + Math.random() * 22;
        const [node] = addInst(b.dataset.id!, x, 84 + Math.random() * 12);
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
  void talk('ev');
}

export const houseTitle = () => `${genitive(progress.name)} Evi`;
