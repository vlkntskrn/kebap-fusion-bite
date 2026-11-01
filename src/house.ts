/**
 * Defne'nin Evi: odalarda eşyaları parmakla sürükleyip yerleştirme (bebek evi oyunu).
 * Bütün oda ve eşya çizimleri bu projeye özgüdür.
 */
import { progress, commit } from './state';
import { talk, bindTalkButtons } from './talk';
import { show, on, talkBtn } from './ui';
import { sfx } from './sfx';
import { dollSvg, currentLook } from './stage';
import { genitive, TalkId } from './content';

type RoomId = 'yatak' | 'mutfak' | 'banyo' | 'salon';

interface Thing {
  id: string;
  /** Odanın genişliğine göre yüzde. */
  w: number;
  vb: string;
  svg: string;
  /** Yere serilen (halı) eşyalar hep en arkada. */
  flat?: boolean;
  /** Dokununca açılıp kapanan (lamba, TV, küvet köpüğü…). */
  toggle?: boolean;
}

const OL = `<defs><filter id="tol" x="-15%" y="-15%" width="130%" height="130%"><feMorphology in="SourceAlpha" operator="dilate" radius="2" result="d"/><feFlood flood-color="#3d3553"/><feComposite in2="d" operator="in" result="o"/><feMerge><feMergeNode in="o"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;

const T = (id: string, w: number, vb: string, body: string, extra: Partial<Thing> = {}): Thing => ({ id, w, vb, svg: body, ...extra });

/* ------------------------------------------------------------- eşyalar */

const THINGS: Record<string, Thing> = Object.fromEntries(
  [
    // yatak odası
    T('yatak', 48, '0 0 200 120', `<rect x="2" y="14" width="30" height="100" rx="10" fill="#ffb3d1"/><rect x="170" y="44" width="26" height="70" rx="8" fill="#ffb3d1"/>
      <rect x="20" y="64" width="160" height="34" rx="8" fill="#fff"/><rect x="66" y="58" width="114" height="42" rx="12" fill="#ff8fc0"/>
      ${[86, 112, 138, 162].map((x, i) => `<circle cx="${x}" cy="${74 + (i % 2) * 12}" r="5" fill="#fff" opacity=".8"/>`).join('')}
      <ellipse cx="48" cy="62" rx="24" ry="13" fill="#fff"/><rect x="24" y="98" width="8" height="18" fill="#c98a5a"/><rect x="168" y="98" width="8" height="18" fill="#c98a5a"/>`),
    T('dolap', 22, '0 0 100 180', `<rect x="4" y="4" width="92" height="166" rx="10" fill="#ffd6e7"/><path d="M50 10 V164" stroke="#e7a9c4" stroke-width="3"/>
      <circle cx="42" cy="90" r="4" fill="#fff"/><circle cx="58" cy="90" r="4" fill="#fff"/><rect x="12" y="170" width="10" height="8" fill="#c98a5a"/><rect x="78" y="170" width="10" height="8" fill="#c98a5a"/>`),
    T('makyaj', 32, '0 0 140 150', `<rect x="30" y="6" width="80" height="66" rx="10" fill="#dff3ff"/>
      ${[38, 56, 74, 92, 102].map((x) => `<circle cx="${x}" cy="10" r="5" fill="#fff6b0"/>`).join('')}
      <rect x="4" y="78" width="132" height="18" rx="6" fill="#fff"/><rect x="12" y="96" width="44" height="40" rx="4" fill="#ffd6e7"/>
      <rect x="12" y="136" width="6" height="12" fill="#c98a5a"/><rect x="126" y="96" width="6" height="52" fill="#c98a5a"/>
      <rect x="80" y="62" width="8" height="16" rx="3" fill="#ff5d8f"/><rect x="92" y="66" width="10" height="12" rx="3" fill="#c77dff"/><circle cx="114" cy="72" r="6" fill="#5fd3f3"/>`),
    T('koltuk', 22, '0 0 100 170', `<path d="M50 0 V44" stroke="#c98a5a" stroke-width="4"/><circle cx="50" cy="104" r="54" fill="#ffc8e3"/>
      <circle cx="50" cy="110" r="38" fill="#fff"/><path d="M50 132 c-14 -10 -18 -26 -6 -28 c4 0 6 3 6 5 c0 -2 2 -5 6 -5 c12 2 8 18 -6 28Z" fill="#ff8fc0"/>`),
    T('hali', 50, '0 0 200 50', `<ellipse cx="100" cy="26" rx="96" ry="22" fill="#ffb3d9"/><ellipse cx="100" cy="26" rx="70" ry="14" fill="#ffd1ea"/>`, { flat: true }),
    T('lamba', 13, '0 0 60 170', `<circle class="on-show glow" cx="30" cy="32" r="40" fill="#fff6b0" opacity=".6"/><path d="M12 8 H48 L56 48 H4 Z" fill="#fff1c9"/>
      <rect x="27" y="48" width="6" height="110" fill="#9c8f86"/><ellipse cx="30" cy="162" rx="20" ry="7" fill="#9c8f86"/>`, { toggle: true }),
    T('bitki', 15, '0 0 80 120', `<ellipse cx="22" cy="44" rx="14" ry="30" fill="#5fbf6e" transform="rotate(-25 22 44)"/><ellipse cx="58" cy="44" rx="14" ry="30" fill="#4aa85a" transform="rotate(25 58 44)"/>
      <ellipse cx="40" cy="34" rx="14" ry="34" fill="#6fd17d"/><path d="M16 74 H64 L56 118 H24 Z" fill="#f2b880"/>`),
    T('ayi', 12, '0 0 70 80', `<circle cx="18" cy="14" r="10" fill="#c98a5a"/><circle cx="52" cy="14" r="10" fill="#c98a5a"/><ellipse cx="35" cy="60" rx="24" ry="20" fill="#c98a5a"/>
      <circle cx="35" cy="28" r="20" fill="#d9a06b"/><circle cx="28" cy="26" r="3" fill="#2d2440"/><circle cx="42" cy="26" r="3" fill="#2d2440"/><ellipse cx="35" cy="35" rx="7" ry="5" fill="#f3d3b0"/>`),
    T('kitaplik', 24, '0 0 120 150', `<rect x="4" y="4" width="112" height="142" rx="6" fill="#f5e0c3"/><path d="M8 52 H112 M8 100 H112" stroke="#d6b48c" stroke-width="5"/>
      ${[['#ff8fc0', 14], ['#5fd3f3', 26], ['#ffd93d', 38], ['#c77dff', 52]].map(([c, x]) => `<rect x="${x}" y="16" width="10" height="34" rx="2" fill="${c}"/>`).join('')}
      <circle cx="90" cy="38" r="12" fill="#6fd17d"/>${[['#ffa94d', 16], ['#4d96ff', 30], ['#ff6b6b', 70], ['#5fd39a', 84]].map(([c, x]) => `<rect x="${x}" y="64" width="12" height="34" rx="2" fill="${c}"/>`).join('')}`),

    // mutfak
    T('buzdolabi', 22, '0 0 100 200', `<rect x="4" y="4" width="92" height="190" rx="16" fill="#a8e6cf"/><path d="M6 70 H94" stroke="#7fcfb0" stroke-width="4"/>
      <rect x="14" y="24" width="6" height="30" rx="3" fill="#fff"/><rect x="14" y="88" width="6" height="40" rx="3" fill="#fff"/>
      <circle cx="70" cy="36" r="8" fill="#ff8fc0"/><rect x="58" y="96" width="22" height="16" rx="3" fill="#ffd93d" transform="rotate(-8 69 104)"/>`),
    T('ocak', 26, '0 0 120 140', `<path class="on-show steam" d="M48 6 q-8 10 0 20 q8 10 0 20 M70 6 q-8 10 0 20 q8 10 0 20" stroke="#cfd8e6" stroke-width="5" fill="none" stroke-linecap="round"/>
      <rect x="34" y="40" width="52" height="30" rx="8" fill="#ff8f7a"/><rect x="28" y="38" width="64" height="8" rx="4" fill="#e2604f"/>
      <rect x="4" y="70" width="112" height="66" rx="8" fill="#f1f1f4"/><rect x="18" y="90" width="84" height="38" rx="6" fill="#3d3553" opacity=".85"/>
      <circle cx="22" cy="78" r="4" fill="#3d3553"/><circle cx="36" cy="78" r="4" fill="#3d3553"/><circle cx="84" cy="78" r="4" fill="#3d3553"/><circle cx="98" cy="78" r="4" fill="#3d3553"/>`, { toggle: true }),
    T('lavabo', 30, '0 0 140 120', `<path d="M96 10 V30 H82" stroke="#b9c2cc" stroke-width="7" fill="none" stroke-linecap="round"/><path class="on-show" d="M82 34 V58" stroke="#7fd1ff" stroke-width="5" stroke-linecap="round"/>
      <rect x="4" y="40" width="132" height="16" rx="5" fill="#fff"/><rect x="40" y="40" width="60" height="10" rx="4" fill="#cfe9ff"/>
      <rect x="8" y="56" width="124" height="60" rx="6" fill="#a8e6cf"/><path d="M70 60 V112" stroke="#7fcfb0" stroke-width="3"/><circle cx="62" cy="86" r="3" fill="#fff"/><circle cx="78" cy="86" r="3" fill="#fff"/>`, { toggle: true }),
    T('masa', 34, '0 0 160 90', `<rect x="4" y="6" width="152" height="16" rx="6" fill="#e3b98a"/><rect x="16" y="22" width="10" height="66" fill="#c98a5a"/><rect x="134" y="22" width="10" height="66" fill="#c98a5a"/>`),
    T('sandalye', 12, '0 0 60 100', `<rect x="8" y="4" width="44" height="44" rx="10" fill="#ffd93d"/><rect x="4" y="50" width="52" height="12" rx="5" fill="#ffc21a"/>
      <rect x="8" y="62" width="7" height="36" fill="#c98a5a"/><rect x="45" y="62" width="7" height="36" fill="#c98a5a"/>`),
    T('meyve', 14, '0 0 80 56', `<circle cx="26" cy="22" r="13" fill="#ff6b6b"/><circle cx="52" cy="20" r="13" fill="#ffa94d"/><path d="M30 10 Q46 -2 62 12" stroke="#ffd93d" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M4 28 H76 Q70 54 40 54 Q10 54 4 28 Z" fill="#5fd3f3"/>`),
    T('pasta', 13, '0 0 70 76', `<rect x="31" y="2" width="8" height="16" rx="3" fill="#ff8fc0"/><path d="M35 0 q4 -6 0 -10" stroke="#ffd93d" stroke-width="4" fill="none"/>
      <rect x="8" y="20" width="54" height="22" rx="6" fill="#fff1f6"/><rect x="4" y="42" width="62" height="26" rx="6" fill="#ffb3d1"/><path d="M8 42 q8 10 16 0 q8 10 16 0 q8 10 16 0 q8 10 14 0" fill="#fff"/><rect x="0" y="68" width="70" height="6" rx="3" fill="#cfe9ff"/>`),
    T('caydanlik', 12, '0 0 70 60', `<path d="M56 30 Q70 26 66 14" stroke="#ff8fc0" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="32" cy="36" rx="26" ry="22" fill="#ff8fc0"/>
      <rect x="22" y="8" width="20" height="8" rx="4" fill="#ffd1e6"/><circle cx="32" cy="6" r="4" fill="#ffd1e6"/><path d="M8 30 Q-2 30 2 42" stroke="#ff8fc0" stroke-width="6" fill="none"/>`),

    // banyo
    T('kuvet', 48, '0 0 200 120', `<path d="M164 10 V26 H150" stroke="#b9c2cc" stroke-width="7" fill="none" stroke-linecap="round"/>
      <g class="on-show">${[40, 64, 92, 120, 146, 76, 108].map((x, i) => `<circle cx="${x}" cy="${36 - (i % 3) * 10}" r="${10 + (i % 3) * 4}" fill="#fff" opacity=".95"/>`).join('')}</g>
      <rect x="4" y="40" width="192" height="60" rx="26" fill="#fff"/><rect x="16" y="44" width="168" height="14" rx="7" fill="#bfe8ff"/>
      <rect x="30" y="98" width="12" height="16" rx="4" fill="#ffd93d"/><rect x="158" y="98" width="12" height="16" rx="4" fill="#ffd93d"/>`, { toggle: true }),
    T('banyolavabo', 22, '0 0 100 180', `<ellipse cx="50" cy="40" rx="34" ry="38" fill="#dff3ff"/><ellipse cx="50" cy="40" rx="24" ry="28" fill="#f4fbff"/>
      <path d="M50 88 V100" stroke="#b9c2cc" stroke-width="6" stroke-linecap="round"/><rect x="10" y="100" width="80" height="20" rx="8" fill="#fff"/>
      <rect x="22" y="120" width="56" height="56" rx="6" fill="#ffd6e7"/>`),
    T('camasir', 22, '0 0 100 110', `<rect x="4" y="4" width="92" height="102" rx="10" fill="#f1f1f4"/><rect x="10" y="10" width="40" height="10" rx="4" fill="#cfd8e6"/>
      <circle cx="78" cy="15" r="5" fill="#5fd39a"/><circle cx="50" cy="64" r="32" fill="#cfd8e6"/><g class="spin"><circle cx="50" cy="64" r="22" fill="#7fd1ff"/><path d="M36 64 Q50 50 64 64" stroke="#fff" stroke-width="5" fill="none"/></g>`, { toggle: true }),
    T('havlu', 16, '0 0 80 100', `<rect x="4" y="6" width="72" height="8" rx="4" fill="#b9c2cc"/><rect x="12" y="12" width="56" height="80" rx="6" fill="#ff9fd6"/>
      <path d="M12 74 H68" stroke="#fff" stroke-width="5"/><path d="M12 82 H68" stroke="#fff" stroke-width="3"/>`),
    T('ordek', 9, '0 0 50 46', `<ellipse cx="28" cy="32" rx="20" ry="13" fill="#ffd93d"/><circle cx="16" cy="16" r="12" fill="#ffd93d"/><path d="M2 18 L10 14 L10 22 Z" fill="#ffa94d"/><circle cx="14" cy="13" r="2.5" fill="#2d2440"/>`),
    T('tuvalet', 18, '0 0 80 110', `<rect x="10" y="4" width="60" height="38" rx="8" fill="#fff"/><ellipse cx="40" cy="58" rx="36" ry="12" fill="#f4e3d0"/>
      <path d="M8 60 Q12 96 40 100 Q68 96 72 60 Z" fill="#fff"/><rect x="26" y="98" width="28" height="10" rx="3" fill="#fff"/>`),

    // salon
    T('kanepe', 48, '0 0 200 110', `<rect x="20" y="8" width="160" height="56" rx="20" fill="#c77dff"/><rect x="4" y="44" width="34" height="56" rx="14" fill="#b066f0"/><rect x="162" y="44" width="34" height="56" rx="14" fill="#b066f0"/>
      <rect x="30" y="56" width="140" height="36" rx="10" fill="#d9a6ff"/><rect x="44" y="26" width="34" height="30" rx="8" fill="#ffd93d" transform="rotate(-8 61 41)"/>
      <rect x="20" y="98" width="8" height="10" fill="#c98a5a"/><rect x="172" y="98" width="8" height="10" fill="#c98a5a"/>`),
    T('tv', 32, '0 0 140 120', `<rect x="4" y="4" width="132" height="80" rx="8" fill="#3d3553"/><rect x="12" y="12" width="116" height="64" rx="4" fill="#4a4458"/>
      <g class="on-show">${['#ff6b6b', '#ffa94d', '#ffd93d', '#5fd39a', '#4d96ff', '#c77dff'].map((c, i) => `<rect x="${12 + i * 19.3}" y="12" width="19.6" height="64" fill="${c}"/>`).join('')}<circle cx="70" cy="44" r="14" fill="#fff" opacity=".9"/><path d="M65 36 L79 44 L65 52Z" fill="#ff5d8f"/></g>
      <rect x="62" y="84" width="16" height="16" fill="#9c8f86"/><rect x="34" y="98" width="72" height="16" rx="5" fill="#e3b98a"/>`, { toggle: true }),
    T('sehpa', 26, '0 0 120 54', `<ellipse cx="60" cy="14" rx="56" ry="11" fill="#fff"/><rect x="20" y="16" width="8" height="34" fill="#c98a5a"/><rect x="92" y="16" width="8" height="34" fill="#c98a5a"/>`),
    T('abajur', 10, '0 0 50 80', `<circle class="on-show glow" cx="25" cy="20" r="28" fill="#fff6b0" opacity=".6"/><path d="M8 4 H42 L48 34 H2 Z" fill="#ffd1ea"/><rect x="22" y="34" width="6" height="30" fill="#9c8f86"/><rect x="10" y="62" width="30" height="14" rx="5" fill="#c77dff"/>`, { toggle: true }),
    T('hali2', 46, '0 0 200 50', `<ellipse cx="100" cy="26" rx="96" ry="22" fill="#cfe9ff"/>${[40, 70, 100, 130, 160].map((x) => `<circle cx="${x}" cy="26" r="6" fill="#fff"/>`).join('')}`, { flat: true }),
    T('kedi', 14, '0 0 80 60', `<path d="M66 44 Q84 34 74 18" stroke="#f2c14e" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="44" cy="44" rx="26" ry="15" fill="#f2c14e"/>
      <path d="M8 18 L12 0 L24 12 Z M34 18 L30 0 L18 12 Z" fill="#f2c14e"/><circle cx="21" cy="24" r="16" fill="#f2c14e"/><circle cx="16" cy="23" r="2.5" fill="#2d2440"/><circle cx="26" cy="23" r="2.5" fill="#2d2440"/>`),
    T('top', 8, '0 0 40 40', `<circle cx="20" cy="20" r="18" fill="#ff6b6b"/><path d="M4 16 Q20 26 36 16" stroke="#fff" stroke-width="5" fill="none"/>`),
    T('cerceve', 18, '0 0 80 60', `<rect x="2" y="2" width="76" height="56" rx="4" fill="#e3b98a"/><rect x="10" y="10" width="60" height="40" fill="#cfe9ff"/>
      <path d="M10 50 L30 28 L44 42 L54 32 L70 50 Z" fill="#6fd17d"/><circle cx="58" cy="20" r="6" fill="#ffd93d"/>`),
  ].map((t) => [t.id, t]),
);

interface Room {
  id: RoomId;
  icon: string;
  wall: string;
  dots: string;
  floor: string;
  line: string;
  tiles?: boolean;
  /** Bu odada eşya çekmecesinde görünenler. */
  tray: string[];
  /** İlk açılıştaki yerleşim: [eşya, x%, y%] (y = eşyanın alt kenarı). */
  start: [string, number, number][];
}

const COMMON = ['bitki', 'lamba', 'ayi', 'cerceve', 'top', 'kedi', 'hali', 'hali2'];

const ROOMS: Room[] = [
  {
    id: 'yatak', icon: '🛏️', wall: '#ffe3ef', dots: '#ffc8de', floor: '#f3c99b', line: '#e2b07f',
    tray: ['yatak', 'dolap', 'makyaj', 'koltuk', 'kitaplik', ...COMMON],
    start: [['hali', 50, 92], ['dolap', 13, 76], ['yatak', 66, 86], ['makyaj', 36, 72], ['koltuk', 88, 60], ['ayi', 52, 79], ['cerceve', 62, 30]],
  },
  {
    id: 'mutfak', icon: '🍳', wall: '#e3f6ec', dots: '#c9ead8', floor: '#fff7ec', line: '#e9dcc8', tiles: true,
    tray: ['buzdolabi', 'ocak', 'lavabo', 'masa', 'sandalye', 'meyve', 'pasta', 'caydanlik', ...COMMON],
    start: [['buzdolabi', 12, 74], ['ocak', 34, 72], ['lavabo', 60, 70], ['masa', 62, 94], ['sandalye', 40, 95], ['sandalye', 84, 95], ['pasta', 60, 85], ['caydanlik', 34, 54]],
  },
  {
    id: 'banyo', icon: '🛁', wall: '#e3f1ff', dots: '#c8e1fb', floor: '#f2f6fa', line: '#d9e3ec', tiles: true,
    tray: ['kuvet', 'banyolavabo', 'camasir', 'havlu', 'ordek', 'tuvalet', ...COMMON],
    start: [['tuvalet', 12, 76], ['banyolavabo', 34, 72], ['camasir', 60, 72], ['havlu', 84, 50], ['kuvet', 64, 95], ['ordek', 60, 82], ['hali2', 30, 92]],
  },
  {
    id: 'salon', icon: '🛋️', wall: '#fff1d6', dots: '#ffe0a8', floor: '#e7b98a', line: '#d29d69',
    tray: ['kanepe', 'tv', 'sehpa', 'abajur', ...COMMON],
    start: [['hali2', 50, 92], ['tv', 22, 72], ['kanepe', 64, 82], ['sehpa', 42, 92], ['bitki', 92, 76], ['abajur', 92, 52], ['kedi', 30, 96], ['cerceve', 66, 30]],
  },
];

function roomBg(r: Room): string {
  const floor = r.tiles
    ? Array.from({ length: 6 }, (_, i) => `<path d="M${i * 80} 300 V440" stroke="${r.line}" stroke-width="2"/>`).join('') +
      Array.from({ length: 4 }, (_, i) => `<path d="M0 ${300 + i * 38} H400" stroke="${r.line}" stroke-width="2"/>`).join('')
    : Array.from({ length: 5 }, (_, i) => `<path d="M0 ${300 + i * 32} H400" stroke="${r.line}" stroke-width="3"/>`).join('');
  return `<svg class="room-bg" viewBox="0 0 400 440" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs><pattern id="pat-${r.id}" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="4" fill="${r.dots}"/><circle cx="30" cy="30" r="4" fill="${r.dots}"/></pattern>
    <linearGradient id="sky-${r.id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd8ff"/><stop offset="1" stop-color="#e3f5ff"/></linearGradient></defs>
    <rect width="400" height="300" fill="${r.wall}"/><rect width="400" height="300" fill="url(#pat-${r.id})"/>
    <rect x="150" y="40" width="110" height="100" rx="10" fill="url(#sky-${r.id})" stroke="#fff" stroke-width="8"/>
    <circle cx="232" cy="70" r="16" fill="#ffe680"/><g fill="#fff"><circle cx="180" cy="110" r="12"/><circle cx="196" cy="104" r="14"/><circle cx="212" cy="112" r="10"/></g>
    <path d="M205 40 V140 M150 90 H260" stroke="#fff" stroke-width="6"/>
    <rect y="290" width="400" height="150" fill="${r.floor}"/>${floor}<rect y="286" width="400" height="10" fill="#fff" opacity=".8"/>
  </svg>`;
}

/* ---------------------------------------------------------------- state */

interface Inst {
  u: number;
  id: string;
  x: number;
  y: number;
  on?: boolean;
}
type HouseState = Record<string, Inst[]>;

function house(): HouseState {
  const p = progress;
  if (!p.house) p.house = {};
  for (const r of ROOMS) {
    if (!p.house[r.id]) {
      p.house[r.id] = r.start.map(([id, x, y], i) => ({ u: i + 1, id, x, y }));
      p.house[r.id].push({ u: 999, id: 'bebek', x: 50, y: 97 });
    }
  }
  return p.house;
}

const nextU = (list: Inst[]) => list.reduce((m, i) => Math.max(m, i.u), 0) + 1;

/* --------------------------------------------------------------- screen */

let current: RoomId = 'yatak';

export function showHouse(back: () => void) {
  sfx.tap();
  const root = show(`
    <div class="screen house">
      <header class="bar"><button class="round-btn" data-act="back">⬅</button>
        <div class="room-tabs">${ROOMS.map((r) => `<button class="room-tab" data-room="${r.id}">${r.icon}</button>`).join('')}</div>
        ${talkBtn('oda')}</header>
      <div class="room"><div class="room-bg-wrap"></div><div class="layer"></div></div>
      <div class="drawer"><div class="drawer-items"></div><div class="trash">🗑️</div></div>
    </div>`);
  bindTalkButtons(root);
  on(root, 'back', back);
  const roomEl = root.querySelector<HTMLElement>('.room')!;
  const layer = root.querySelector<HTMLElement>('.layer')!;
  const drawer = root.querySelector<HTMLElement>('.drawer')!;
  const drawerItems = root.querySelector<HTMLElement>('.drawer-items')!;

  const room = () => ROOMS.find((r) => r.id === current)!;
  const list = () => house()[current];

  const thingHtml = (inst: Inst) => {
    if (inst.id === 'bebek') {
      return `<div class="thing doll-thing" data-u="${inst.u}" style="--w:30%">${dollSvg(currentLook(), 'doll', { bg: false })}</div>`;
    }
    const t = THINGS[inst.id];
    if (!t) return '';
    return `<div class="thing ${inst.on ? 'on' : ''}" data-u="${inst.u}" style="--w:${t.w}%"><svg viewBox="${t.vb}" xmlns="http://www.w3.org/2000/svg">${OL}<g filter="url(#tol)">${t.svg}</g></svg></div>`;
  };

  const place = (el: HTMLElement, inst: Inst) => {
    el.style.left = `${inst.x}%`;
    el.style.top = `${inst.y}%`;
    const t = THINGS[inst.id];
    el.style.zIndex = String(t?.flat ? 1 : 10 + Math.round(inst.y * 10));
  };

  const render = () => {
    root.querySelectorAll('.room-tab').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.room === current));
    root.querySelector('.room-bg-wrap')!.innerHTML = roomBg(room());
    layer.innerHTML = list().map(thingHtml).join('');
    layer.querySelectorAll<HTMLElement>('.thing').forEach((el) => place(el, list().find((i) => i.u === Number(el.dataset.u))!));
    drawerItems.innerHTML = room()
      .tray.map((id) => {
        const t = THINGS[id];
        return `<button class="drawer-item" data-id="${id}"><svg viewBox="${t.vb}">${t.svg}</svg></button>`;
      })
      .join('');
    drawerItems.scrollLeft = 0;
  };

  /* ---- sürükle-bırak */
  const toPct = (cx: number, cy: number) => {
    const r = roomEl.getBoundingClientRect();
    return { x: ((cx - r.left) / r.width) * 100, y: ((cy - r.top) / r.height) * 100 };
  };
  const overDrawer = (cy: number) => cy > drawer.getBoundingClientRect().top;

  function drag(el: HTMLElement, inst: Inst, ev: PointerEvent, fresh: boolean) {
    ev.preventDefault();
    const start = toPct(ev.clientX, ev.clientY);
    const off = fresh ? { x: 0, y: 0 } : { x: start.x - inst.x, y: start.y - inst.y };
    let moved = fresh;
    el.classList.add('dragging');
    const move = (e: PointerEvent) => {
      const p = toPct(e.clientX, e.clientY);
      if (!moved && Math.hypot(p.x - start.x, p.y - start.y) > 2) moved = true;
      inst.x = Math.max(2, Math.min(98, p.x - off.x));
      inst.y = Math.max(8, Math.min(100, p.y - off.y));
      place(el, inst);
      drawer.classList.toggle('drop', overDrawer(e.clientY));
    };
    const up = (e: PointerEvent) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      el.classList.remove('dragging');
      drawer.classList.remove('drop');
      if (!moved) return tap(el, inst);
      if (overDrawer(e.clientY) && inst.id !== 'bebek') {
        // Çekmeceye geri bırakınca kaldırılır.
        house()[current] = list().filter((i) => i !== inst);
        el.animate([{ transform: 'translate(-50%,-100%) scale(1)', opacity: 1 }, { transform: 'translate(-50%,-100%) scale(0.2)', opacity: 0 }], { duration: 250 }).finished.then(() => el.remove());
        sfx.soft();
      } else {
        sfx.tap();
        el.animate([{ transform: 'translate(-50%,-100%) scale(1.08)' }, { transform: 'translate(-50%,-100%) scale(1)' }], { duration: 200 });
      }
      commit();
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  }

  function tap(el: HTMLElement, inst: Inst) {
    if (inst.id === 'bebek') {
      el.querySelector('.doll-body')?.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-30px)' }, { transform: 'translateY(0)' }], { duration: 500 });
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
  drawerItems.addEventListener('pointerdown', (ev) => {
    const b = (ev.target as Element).closest<HTMLElement>('.drawer-item');
    if (!b) return;
    const startY = ev.clientY;
    const startX = ev.clientX;
    // Çekmece yatay kayar: yukarı doğru çekilince eşya odaya çıkar.
    const pull = (e: PointerEvent) => {
      if (startY - e.clientY > 14 && Math.abs(startY - e.clientY) > Math.abs(e.clientX - startX)) {
        cleanup();
        const p = toPct(e.clientX, e.clientY);
        const inst: Inst = { u: nextU(list()), id: b.dataset.id!, x: p.x, y: Math.min(100, p.y + 6) };
        list().push(inst);
        layer.insertAdjacentHTML('beforeend', thingHtml(inst));
        const node = layer.lastElementChild as HTMLElement;
        place(node, inst);
        sfx.tap();
        drag(node, inst, e, true);
      }
    };
    const tapAdd = (e: PointerEvent) => {
      cleanup();
      // Dokunup bırakınca da odanın ortasına eklensin (küçük çocuklar için kolaylık).
      if (Math.hypot(e.clientX - startX, e.clientY - startY) < 8) {
        const inst: Inst = { u: nextU(list()), id: b.dataset.id!, x: 30 + Math.random() * 40, y: 80 + Math.random() * 12 };
        list().push(inst);
        layer.insertAdjacentHTML('beforeend', thingHtml(inst));
        const node = layer.lastElementChild as HTMLElement;
        place(node, inst);
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

  render();
  void talk('ev');
}

export const houseTitle = () => `${genitive(progress.name)} Evi`;
