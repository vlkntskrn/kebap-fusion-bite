/**
 * Defne'nin Evi eşyaları. Hepsi bu proje için çizilmiş özgün SVG'lerdir.
 * `main`: boyanabilen ana renk (çizimde bu renk geçen her yer boyanır).
 */
export interface Thing {
  id: string;
  /** Odanın genişliğine göre yüzde. */
  w: number;
  vb: string;
  svg: string;
  main?: string;
  /** Yere serilen (halı) eşyalar hep en arkada. */
  flat?: boolean;
  /** Dokununca açılıp kapanan (lamba, TV, küvet köpüğü…). */
  toggle?: boolean;
  /** Sürekli hafif sallanan (balon, simit). */
  bob?: boolean;
}

const T = (id: string, w: number, vb: string, svg: string, extra: Partial<Thing> = {}): Thing => ({ id, w, vb, svg, ...extra });
const star = (x: number, y: number, r: number, fill: string) =>
  `<path d="M${x} ${y - r} L${x + r * 0.3} ${y - r * 0.3} L${x + r} ${y - r * 0.2} L${x + r * 0.45} ${y + r * 0.25} L${x + r * 0.6} ${y + r} L${x} ${y + r * 0.6} L${x - r * 0.6} ${y + r} L${x - r * 0.45} ${y + r * 0.25} L${x - r} ${y - r * 0.2} L${x - r * 0.3} ${y - r * 0.3} Z" fill="${fill}"/>`;
const heart = (x: number, y: number, r: number, fill: string) =>
  `<path d="M${x} ${y + r} C${x - r * 1.7} ${y} ${x - r * 0.9} ${y - r * 1.3} ${x} ${y - r * 0.35} C${x + r * 0.9} ${y - r * 1.3} ${x + r * 1.7} ${y} ${x} ${y + r}Z" fill="${fill}"/>`;

export const THING_LIST: Thing[] = [
  /* ---------------------------------------------------------- yatak odası */
  T('yatak', 48, '0 0 200 120', `<rect x="2" y="14" width="30" height="100" rx="10" fill="#ffb3d1"/><rect x="170" y="44" width="26" height="70" rx="8" fill="#ffb3d1"/>
    <rect x="20" y="64" width="160" height="34" rx="8" fill="#fff"/><rect x="66" y="58" width="114" height="42" rx="12" fill="#ff8fc0"/>
    ${[86, 112, 138, 162].map((x, i) => `<circle cx="${x}" cy="${74 + (i % 2) * 12}" r="5" fill="#fff" opacity=".8"/>`).join('')}
    <ellipse cx="48" cy="62" rx="24" ry="13" fill="#fff"/><rect x="24" y="98" width="8" height="18" fill="#c98a5a"/><rect x="168" y="98" width="8" height="18" fill="#c98a5a"/>`, { main: '#ff8fc0' }),
  T('yuvarlakyatak', 46, '0 0 200 140', `${['#ff9fb0', '#ffd27f', '#a8e6cf', '#9fd8ff', '#c9b6ff'].map((c, i) => `<path d="M${30 + i * 8} 80 A${70 - i * 8} ${70 - i * 8} 0 0 1 ${170 - i * 8} 80" stroke="${c}" stroke-width="8" fill="none"/>`).join('')}
    <ellipse cx="100" cy="104" rx="94" ry="30" fill="#c9b6ff"/><ellipse cx="100" cy="92" rx="88" ry="24" fill="#eef0ff"/>
    <ellipse cx="70" cy="76" rx="24" ry="11" fill="#fff"/><ellipse cx="130" cy="76" rx="24" ry="11" fill="#fff"/>
    <path d="M60 96 q10 -10 20 0 q10 -10 20 0 q-10 10 -20 6 q-10 4 -20 -6Z" fill="#fff"/>`, { main: '#c9b6ff' }),
  T('dolap', 22, '0 0 100 180', `<rect x="4" y="4" width="92" height="166" rx="10" fill="#ffd6e7"/><path d="M50 10 V164" stroke="#e7a9c4" stroke-width="3"/>
    <circle cx="42" cy="90" r="4" fill="#fff"/><circle cx="58" cy="90" r="4" fill="#fff"/><rect x="12" y="170" width="10" height="8" fill="#c98a5a"/><rect x="78" y="170" width="10" height="8" fill="#c98a5a"/>`, { main: '#ffd6e7' }),
  T('kiyafetaski', 26, '0 0 120 170', `<rect x="4" y="4" width="112" height="162" rx="6" fill="#f5e6d3"/><rect x="12" y="12" width="96" height="84" fill="#fffaf3"/>
    <path d="M14 22 H106" stroke="#7d7590" stroke-width="4"/>
    ${[['#ff8fc0', 18], ['#ffd93d', 36], ['#9fd8ff', 54], ['#c9b6ff', 72], ['#a8e6cf', 90]].map(([c, x]) => `<path d="M${x} 24 l-8 10 v36 h20 v-36 z" fill="${c}"/>`).join('')}
    <rect x="12" y="102" width="96" height="28" rx="4" fill="#fff"/><rect x="12" y="134" width="96" height="28" rx="4" fill="#fff"/>
    <rect x="50" y="113" width="20" height="5" rx="2" fill="#7d7590"/><rect x="50" y="145" width="20" height="5" rx="2" fill="#7d7590"/>`, { main: '#f5e6d3' }),
  T('makyaj', 32, '0 0 140 150', `<rect x="30" y="6" width="80" height="66" rx="10" fill="#dff3ff"/>
    ${[38, 56, 74, 92, 102].map((x) => `<circle cx="${x}" cy="10" r="5" fill="#fff6b0"/>`).join('')}
    <rect x="4" y="78" width="132" height="18" rx="6" fill="#fff"/><rect x="12" y="96" width="44" height="40" rx="4" fill="#ffd6e7"/>
    <rect x="12" y="136" width="6" height="12" fill="#c98a5a"/><rect x="126" y="96" width="6" height="52" fill="#c98a5a"/>
    <rect x="80" y="62" width="8" height="16" rx="3" fill="#ff5d8f"/><rect x="92" y="66" width="10" height="12" rx="3" fill="#c77dff"/><circle cx="114" cy="72" r="6" fill="#5fd3f3"/>`, { main: '#ffd6e7' }),
  T('kozmetik', 16, '0 0 80 100', `<rect x="4" y="4" width="72" height="92" rx="8" fill="#e3f7f5"/><rect x="10" y="10" width="60" height="80" rx="4" fill="#c4ece6"/>
    <path d="M10 50 H70" stroke="#fff" stroke-width="4"/>${[['#ff8fc0', 16], ['#fff', 30], ['#c9b6ff', 44], ['#ffd27f', 58]].map(([c, x]) => `<rect x="${x}" y="24" width="10" height="24" rx="3" fill="${c}"/><rect x="${x}" y="64" width="10" height="24" rx="3" fill="${c}"/>`).join('')}`, { main: '#e3f7f5' }),
  T('koltuk', 22, '0 0 100 170', `<path d="M50 0 V44" stroke="#c98a5a" stroke-width="4"/><circle cx="50" cy="104" r="54" fill="#ffc8e3"/>
    <circle cx="50" cy="110" r="38" fill="#fff"/>${heart(50, 112, 13, '#ff8fc0')}`, { main: '#ffc8e3' }),
  T('armut', 18, '0 0 100 90', `<path d="M10 84 Q-6 40 40 10 Q60 0 74 14 Q104 44 92 84 Z" fill="#b79cff"/><path d="M30 60 Q50 40 74 58" stroke="#fff" stroke-width="4" fill="none" opacity=".5"/>`, { main: '#b79cff' }),
  T('cicekminder', 14, '0 0 80 52', `${[0, 1, 2, 3, 4].map((i) => `<ellipse cx="${40 + Math.cos((i / 5) * 6.283) * 20}" cy="${26 + Math.sin((i / 5) * 6.283) * 12}" rx="20" ry="14" fill="#fff6ec"/>`).join('')}<ellipse cx="40" cy="26" rx="12" ry="8" fill="#ffd27f"/>`, { main: '#fff6ec' }),
  T('ayihali', 40, '0 0 200 96', `<circle cx="40" cy="22" r="20" fill="#f6eadc"/><circle cx="160" cy="22" r="20" fill="#f6eadc"/><ellipse cx="100" cy="56" rx="96" ry="38" fill="#f6eadc"/>
    <circle cx="40" cy="22" r="10" fill="#f2cdb6"/><circle cx="160" cy="22" r="10" fill="#f2cdb6"/><circle cx="76" cy="50" r="5" fill="#7d6a5a"/><circle cx="124" cy="50" r="5" fill="#7d6a5a"/>
    <circle cx="62" cy="66" r="9" fill="#ffc2c2" opacity=".7"/><circle cx="138" cy="66" r="9" fill="#ffc2c2" opacity=".7"/><path d="M92 64 Q100 72 108 64" stroke="#7d6a5a" stroke-width="3" fill="none"/>`, { flat: true, main: '#f6eadc' }),
  T('hali', 50, '0 0 200 50', `<ellipse cx="100" cy="26" rx="96" ry="22" fill="#ffb3d9"/><ellipse cx="100" cy="26" rx="70" ry="14" fill="#ffd1ea"/>`, { flat: true, main: '#ffb3d9' }),
  T('bilgisayar', 36, '0 0 170 120', `<rect x="4" y="60" width="162" height="12" rx="4" fill="#d9c2ff"/><rect x="12" y="72" width="8" height="46" fill="#d9c2ff"/><rect x="150" y="72" width="8" height="46" fill="#d9c2ff"/>
    <rect x="60" y="4" width="62" height="44" rx="6" fill="#3d3553"/><rect x="66" y="10" width="50" height="32" rx="2" fill="#b5e550"/><rect x="86" y="48" width="10" height="10" fill="#9c8f86"/>
    <rect x="58" y="50" width="56" height="9" rx="3" fill="#fff"/><path d="M20 50 q10 -10 20 0 q-2 8 -10 6 q-8 2 -10 -6Z" fill="#c9b6ff"/><rect x="130" y="40" width="22" height="18" rx="3" fill="#3d3553"/>`, { main: '#d9c2ff' }),
  T('kitaplik', 24, '0 0 120 150', `<rect x="4" y="4" width="112" height="142" rx="6" fill="#f5e0c3"/><path d="M8 52 H112 M8 100 H112" stroke="#d6b48c" stroke-width="5"/>
    ${[['#ff8fc0', 14], ['#5fd3f3', 26], ['#ffd93d', 38], ['#c77dff', 52]].map(([c, x]) => `<rect x="${x}" y="16" width="10" height="34" rx="2" fill="${c}"/>`).join('')}
    <circle cx="90" cy="38" r="12" fill="#6fd17d"/>${[['#ffa94d', 16], ['#4d96ff', 30], ['#ff6b6b', 70], ['#5fd39a', 84]].map(([c, x]) => `<rect x="${x}" y="64" width="12" height="34" rx="2" fill="${c}"/>`).join('')}`, { main: '#f5e0c3' }),
  T('aynadalga', 16, '0 0 80 104', `<path d="M40 2 ${Array.from({ length: 10 }, (_, i) => { const a = ((i + 1) / 10) * 6.283 - 1.571; return `Q${40 + Math.cos(a - 0.31) * 46} ${52 + Math.sin(a - 0.31) * 58} ${40 + Math.cos(a) * 38} ${52 + Math.sin(a) * 50}`; }).join(' ')} Z" fill="#c9b6ff"/>
    <ellipse cx="40" cy="52" rx="26" ry="36" fill="#eef4ff"/><path d="M28 34 L44 22 M30 50 L50 34" stroke="#fff" stroke-width="4"/>`, { main: '#c9b6ff' }),
  T('disko', 14, '0 0 60 160', `<path d="M30 0 V96" stroke="#9c8f86" stroke-width="3"/><circle cx="30" cy="126" r="30" fill="#c9a6ff"/>
    ${Array.from({ length: 5 }, (_, r) => Array.from({ length: 5 }, (_, c) => ((r + c) % 2 ? `<rect x="${8 + c * 9}" y="${104 + r * 9}" width="8" height="8" fill="#fff" opacity=".45"/>` : '')).join('')).join('')}
    <g class="on-show">${star(6, 104, 6, '#fff6b0')}${star(56, 140, 6, '#fff6b0')}${star(50, 100, 4, '#fff')}</g>`, { toggle: true, main: '#c9a6ff' }),
  T('perilamba', 64, '0 0 300 44', `<path d="M0 6 Q75 40 150 10 Q225 40 300 6" stroke="#7d7590" stroke-width="3" fill="none"/>
    ${Array.from({ length: 11 }, (_, i) => { const x = 14 + i * 27; const y = i < 6 ? 6 + Math.sin((x / 150) * 3.14) * 22 : 6 + Math.sin(((x - 150) / 150) * 3.14) * 22; return `<circle cx="${x}" cy="${y + 8}" r="6" fill="#fff6dc"/><circle class="on-show" cx="${x}" cy="${y + 8}" r="11" fill="#ffe680" opacity=".6"/>`; }).join('')}`, { toggle: true }),
  T('sarkit', 12, '0 0 50 150', `<path d="M25 0 V104" stroke="#9c8f86" stroke-width="3"/><circle class="on-show glow" cx="25" cy="132" r="26" fill="#fff6b0" opacity=".7"/>
    <path d="M6 132 Q6 104 25 104 Q44 104 44 132 Z" fill="#fff1c9"/><circle cx="25" cy="136" r="7" fill="#ffe680"/>`, { toggle: true, main: '#fff1c9' }),
  T('lamba', 13, '0 0 60 170', `<circle class="on-show glow" cx="30" cy="32" r="40" fill="#fff6b0" opacity=".6"/><path d="M12 8 H48 L56 48 H4 Z" fill="#fff1c9"/>
    <rect x="27" y="48" width="6" height="110" fill="#9c8f86"/><ellipse cx="30" cy="162" rx="20" ry="7" fill="#9c8f86"/>`, { toggle: true, main: '#fff1c9' }),
  T('bitki', 15, '0 0 80 120', `<ellipse cx="22" cy="44" rx="14" ry="30" fill="#5fbf6e" transform="rotate(-25 22 44)"/><ellipse cx="58" cy="44" rx="14" ry="30" fill="#4aa85a" transform="rotate(25 58 44)"/>
    <ellipse cx="40" cy="34" rx="14" ry="34" fill="#6fd17d"/><path d="M16 74 H64 L56 118 H24 Z" fill="#f2b880"/>`, { main: '#f2b880' }),
  T('sarkitbitki', 16, '0 0 80 160', `<path d="M40 0 L14 80 M40 0 L66 80" stroke="#c98a5a" stroke-width="2"/><path d="M14 78 H66 L60 104 H20 Z" fill="#ffd1ea"/>
    ${[18, 30, 50, 62].map((x, i) => `<path d="M${x} 100 q${i % 2 ? 6 : -6} 25 0 ${40 + i * 6}" stroke="#4aa85a" stroke-width="4" fill="none"/>${[0, 1, 2].map((k) => `<ellipse cx="${x + (k % 2 ? 5 : -5)}" cy="${112 + k * 14}" rx="6" ry="4" fill="#6fd17d"/>`).join('')}`).join('')}
    <ellipse cx="40" cy="78" rx="28" ry="8" fill="#6fd17d"/>`, { main: '#ffd1ea' }),
  T('kaktus', 10, '0 0 50 100', `<rect x="18" y="10" width="16" height="64" rx="8" fill="#6fd17d"/><path d="M18 46 h-8 v-16" stroke="#6fd17d" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M34 38 h8 v-12" stroke="#6fd17d" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="26" cy="10" r="5" fill="#ff8fc0"/><path d="M8 70 H44 L38 98 H14 Z" fill="#ffa94d"/>`, { main: '#ffa94d' }),
  T('ayi', 12, '0 0 70 80', `<circle cx="18" cy="14" r="10" fill="#c98a5a"/><circle cx="52" cy="14" r="10" fill="#c98a5a"/><ellipse cx="35" cy="60" rx="24" ry="20" fill="#c98a5a"/>
    <circle cx="35" cy="28" r="20" fill="#d9a06b"/><circle cx="28" cy="26" r="3" fill="#2d2440"/><circle cx="42" cy="26" r="3" fill="#2d2440"/><ellipse cx="35" cy="35" rx="7" ry="5" fill="#f3d3b0"/>`),
  T('cerceve', 18, '0 0 80 60', `<rect x="2" y="2" width="76" height="56" rx="4" fill="#e3b98a"/><rect x="10" y="10" width="60" height="40" fill="#cfe9ff"/>
    <path d="M10 50 L30 28 L44 42 L54 32 L70 50 Z" fill="#6fd17d"/><circle cx="58" cy="20" r="6" fill="#ffd93d"/>`, { main: '#e3b98a' }),
  T('tablo', 18, '0 0 80 90', `<path d="M40 0 L10 14 M40 0 L70 14" stroke="#7d7590" stroke-width="2"/><rect x="4" y="12" width="72" height="76" rx="3" fill="#fff"/>
    <rect x="10" y="18" width="60" height="64" fill="#e9e3ff"/>${heart(28, 44, 8, '#ff8fc0')}${star(54, 40, 8, '#ffd93d')}<circle cx="40" cy="66" r="8" fill="#9fd8ff"/>`),

  /* -------------------------------------------------------------- mutfak */
  T('buzdolabi', 22, '0 0 100 200', `<rect x="4" y="4" width="92" height="190" rx="16" fill="#a8e6cf"/><path d="M6 70 H94" stroke="#7fcfb0" stroke-width="4"/>
    <rect x="14" y="24" width="6" height="30" rx="3" fill="#fff"/><rect x="14" y="88" width="6" height="40" rx="3" fill="#fff"/>
    <circle cx="70" cy="36" r="8" fill="#ff8fc0"/><rect x="58" y="96" width="22" height="16" rx="3" fill="#ffd93d" transform="rotate(-8 69 104)"/>`, { main: '#a8e6cf' }),
  T('retrobuzdolabi', 22, '0 0 100 200', `<path d="M4 194 V40 Q4 4 50 4 Q96 4 96 40 V194 Z" fill="#ffd6c9"/><path d="M6 80 H94" stroke="#f2b8a6" stroke-width="3"/>
    <rect x="80" y="96" width="6" height="40" rx="3" fill="#b9c2cc"/><path d="M50 50 l6 8 -6 8 -6 -8z" fill="#b9c2cc"/>
    <rect x="18" y="104" width="18" height="18" rx="3" fill="#fff" transform="rotate(-6 27 113)"/><circle cx="54" cy="124" r="6" fill="#5fd3f3"/>`, { main: '#ffd6c9' }),
  T('tezgah', 46, '0 0 220 120', `<path d="M60 4 V24 H48" stroke="#b9c2cc" stroke-width="6" fill="none" stroke-linecap="round"/><path class="on-show" d="M48 28 V46" stroke="#7fd1ff" stroke-width="5" stroke-linecap="round"/>
    <rect x="2" y="40" width="216" height="14" rx="4" fill="#f2c79b"/><rect x="24" y="40" width="56" height="8" rx="3" fill="#cfe9ff"/><rect x="128" y="42" width="60" height="6" rx="2" fill="#3d3553"/>
    <rect x="6" y="54" width="208" height="62" rx="4" fill="#f5e6d3"/><path d="M58 58 V112 M112 58 V112" stroke="#e0cdb5" stroke-width="3"/>
    <rect x="120" y="64" width="86" height="44" rx="6" fill="#3d3553"/><rect x="128" y="72" width="70" height="28" rx="4" fill="#5a5470"/><circle cx="34" cy="84" r="3" fill="#c98a5a"/><circle cx="84" cy="84" r="3" fill="#c98a5a"/>`, { toggle: true, main: '#f5e6d3' }),
  T('ocak', 26, '0 0 120 140', `<path class="on-show steam" d="M48 6 q-8 10 0 20 q8 10 0 20 M70 6 q-8 10 0 20 q8 10 0 20" stroke="#cfd8e6" stroke-width="5" fill="none" stroke-linecap="round"/>
    <rect x="34" y="40" width="52" height="30" rx="8" fill="#ff8f7a"/><rect x="28" y="38" width="64" height="8" rx="4" fill="#e2604f"/>
    <rect x="4" y="70" width="112" height="66" rx="8" fill="#f1f1f4"/><rect x="18" y="90" width="84" height="38" rx="6" fill="#3d3553" opacity=".85"/>
    <circle cx="22" cy="78" r="4" fill="#3d3553"/><circle cx="36" cy="78" r="4" fill="#3d3553"/><circle cx="84" cy="78" r="4" fill="#3d3553"/><circle cx="98" cy="78" r="4" fill="#3d3553"/>`, { toggle: true, main: '#f1f1f4' }),
  T('lavabo', 30, '0 0 140 120', `<path d="M96 10 V30 H82" stroke="#b9c2cc" stroke-width="7" fill="none" stroke-linecap="round"/><path class="on-show" d="M82 34 V58" stroke="#7fd1ff" stroke-width="5" stroke-linecap="round"/>
    <rect x="4" y="40" width="132" height="16" rx="5" fill="#fff"/><rect x="40" y="40" width="60" height="10" rx="4" fill="#cfe9ff"/>
    <rect x="8" y="56" width="124" height="60" rx="6" fill="#a8e6cf"/><path d="M70 60 V112" stroke="#7fcfb0" stroke-width="3"/><circle cx="62" cy="86" r="3" fill="#fff"/><circle cx="78" cy="86" r="3" fill="#fff"/>`, { toggle: true, main: '#a8e6cf' }),
  T('mikrodalga', 20, '0 0 110 72', `<rect x="4" y="4" width="102" height="62" rx="10" fill="#c9a6ff"/><rect x="12" y="12" width="64" height="46" rx="5" fill="#3d3553"/>
    <rect class="on-show" x="14" y="14" width="60" height="42" rx="4" fill="#ffe680" opacity=".75"/><circle cx="92" cy="22" r="5" fill="#fff"/><circle cx="92" cy="38" r="5" fill="#fff"/><rect x="84" y="48" width="16" height="6" rx="2" fill="#5fd39a"/>`, { toggle: true, main: '#c9a6ff' }),
  T('tost', 12, '0 0 70 64', `<g class="on-show"><rect x="16" y="2" width="16" height="26" rx="6" fill="#e0a45e"/><rect x="38" y="2" width="16" height="26" rx="6" fill="#e0a45e"/></g>
    <rect x="4" y="18" width="62" height="42" rx="14" fill="#d6f0ff"/><rect x="16" y="18" width="16" height="6" rx="2" fill="#3d3553"/><rect x="38" y="18" width="16" height="6" rx="2" fill="#3d3553"/>
    <circle cx="26" cy="40" r="3" fill="#3d3553"/><circle cx="44" cy="40" r="3" fill="#3d3553"/><path d="M28 48 Q35 54 42 48" stroke="#3d3553" stroke-width="2.5" fill="none"/>`, { toggle: true, main: '#d6f0ff' }),
  T('kahve', 12, '0 0 60 84', `<path class="on-show" d="M30 30 q-6 -8 0 -14 q6 -8 0 -14" stroke="#cfd8e6" stroke-width="3" fill="none"/>
    <rect x="4" y="4" width="52" height="16" rx="4" fill="#ffb84d"/><rect x="4" y="20" width="14" height="60" fill="#ffb84d"/><rect x="2" y="76" width="56" height="8" rx="3" fill="#ffb84d"/>
    <path d="M24 46 H52 L50 74 H26 Z" fill="#cfe9ff" opacity=".8"/><rect x="26" y="62" width="24" height="12" fill="#7a4b2a"/>`, { toggle: true, main: '#ffb84d' }),
  T('rafkupa', 32, '0 0 160 56', `<rect x="2" y="44" width="156" height="8" rx="3" fill="#e3b98a"/>
    ${[12, 46, 80, 114].map((x) => `<path d="M${x} 20 H${x + 30} L${x + 26} 44 H${x + 4} Z" fill="#ffb3d1"/>`).join('')}`, { main: '#ffb3d1' }),
  T('kasiklik', 24, '0 0 120 90', `<rect x="4" y="4" width="112" height="6" rx="3" fill="#b9c2cc"/>
    <path d="M22 10 V60" stroke="#7d7590" stroke-width="4"/><rect x="14" y="58" width="16" height="22" rx="3" fill="#7d7590"/>
    <path d="M50 10 V56" stroke="#c98a5a" stroke-width="4"/><path d="M42 56 h16 v14 h-16z M44 70 v14 M50 70 v14 M56 70 v14" stroke="#c98a5a" stroke-width="3" fill="#c98a5a"/>
    <path d="M78 10 V50" stroke="#7d7590" stroke-width="4"/><ellipse cx="78" cy="66" rx="9" ry="16" stroke="#7d7590" stroke-width="3" fill="none"/>
    <path d="M104 10 V58" stroke="#c98a5a" stroke-width="4"/><ellipse cx="104" cy="70" rx="9" ry="13" fill="#c98a5a"/>`),
  T('masa', 34, '0 0 160 90', `<rect x="4" y="6" width="152" height="16" rx="6" fill="#e3b98a"/><rect x="16" y="22" width="10" height="66" fill="#c98a5a"/><rect x="134" y="22" width="10" height="66" fill="#c98a5a"/>`, { main: '#e3b98a' }),
  T('sandalye', 12, '0 0 60 100', `<rect x="8" y="4" width="44" height="44" rx="10" fill="#ffd93d"/><rect x="4" y="50" width="52" height="12" rx="5" fill="#ffc21a"/>
    <rect x="8" y="62" width="7" height="36" fill="#c98a5a"/><rect x="45" y="62" width="7" height="36" fill="#c98a5a"/>`, { main: '#ffd93d' }),
  T('tabure', 10, '0 0 50 90', `<ellipse cx="25" cy="12" rx="22" ry="9" fill="#ffd6e7"/><rect x="3" y="12" width="44" height="8" fill="#ffd6e7"/>
    <path d="M10 20 L6 88 M40 20 L44 88 M8 60 H42" stroke="#c98a5a" stroke-width="4"/>`, { main: '#ffd6e7' }),
  T('meyve', 14, '0 0 80 56', `<circle cx="26" cy="22" r="13" fill="#ff6b6b"/><circle cx="52" cy="20" r="13" fill="#ffa94d"/><path d="M30 10 Q46 -2 62 12" stroke="#ffd93d" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M4 28 H76 Q70 54 40 54 Q10 54 4 28 Z" fill="#5fd3f3"/>`, { main: '#5fd3f3' }),
  T('ekmek', 12, '0 0 70 46', `<ellipse cx="24" cy="18" rx="16" ry="12" fill="#e0a45e"/><ellipse cx="46" cy="16" rx="16" ry="12" fill="#eab36e"/>
    <path d="M4 22 H66 L58 44 H12 Z" fill="#c98a5a"/><path d="M10 30 H60 M14 38 H56" stroke="#a8693c" stroke-width="2"/>`),
  T('pasta', 13, '0 0 70 76', `<rect x="31" y="2" width="8" height="16" rx="3" fill="#ff8fc0"/><rect x="8" y="20" width="54" height="22" rx="6" fill="#fff1f6"/>
    <rect x="4" y="42" width="62" height="26" rx="6" fill="#ffb3d1"/><path d="M8 42 q8 10 16 0 q8 10 16 0 q8 10 16 0 q8 10 14 0" fill="#fff"/><rect x="0" y="68" width="70" height="6" rx="3" fill="#cfe9ff"/>`, { main: '#ffb3d1' }),
  T('hamburger', 9, '0 0 50 44', `<path d="M4 18 Q4 2 25 2 Q46 2 46 18 Z" fill="#eab36e"/><rect x="2" y="18" width="46" height="5" rx="2" fill="#6fd17d"/>
    <rect x="4" y="23" width="42" height="8" rx="3" fill="#8a4b2a"/><rect x="2" y="31" width="46" height="4" rx="2" fill="#ffd93d"/><path d="M4 35 H46 Q46 42 25 42 Q4 42 4 35Z" fill="#eab36e"/>`),
  T('caydanlik', 12, '0 0 70 60', `<path d="M56 30 Q70 26 66 14" stroke="#ff8fc0" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="32" cy="36" rx="26" ry="22" fill="#ff8fc0"/>
    <rect x="22" y="8" width="20" height="8" rx="4" fill="#ffd1e6"/><circle cx="32" cy="6" r="4" fill="#ffd1e6"/><path d="M8 30 Q-2 30 2 42" stroke="#ff8fc0" stroke-width="6" fill="none"/>`, { main: '#ff8fc0' }),

  /* --------------------------------------------------------------- banyo */
  T('kuvet', 48, '0 0 200 120', `<path d="M164 10 V26 H150" stroke="#b9c2cc" stroke-width="7" fill="none" stroke-linecap="round"/>
    <g class="on-show">${[40, 64, 92, 120, 146, 76, 108].map((x, i) => `<circle cx="${x}" cy="${36 - (i % 3) * 10}" r="${10 + (i % 3) * 4}" fill="#fff" opacity=".95"/>`).join('')}</g>
    <rect x="4" y="40" width="192" height="60" rx="26" fill="#ffffff"/><rect x="16" y="44" width="168" height="14" rx="7" fill="#bfe8ff"/>
    <rect x="30" y="98" width="12" height="16" rx="4" fill="#ffd93d"/><rect x="158" y="98" width="12" height="16" rx="4" fill="#ffd93d"/>`, { toggle: true, main: '#ffffff' }),
  T('jakuzi', 42, '0 0 200 100', `<g class="on-show">${[30, 60, 100, 140, 170, 80, 120].map((x, i) => `<circle cx="${x}" cy="${30 - (i % 3) * 8}" r="${9 + (i % 3) * 4}" fill="#fff" opacity=".95"/>`).join('')}</g>
    <path d="M4 40 H196 V70 Q196 98 100 98 Q4 98 4 70 Z" fill="#9ea7b3"/><ellipse cx="100" cy="40" rx="96" ry="18" fill="#f5d6c9"/><ellipse cx="100" cy="40" rx="80" ry="12" fill="#7fd8ff"/>
    <circle cx="170" cy="76" r="9" fill="#f5d6c9"/><path d="M100 4 V22 H90" stroke="#c98a5a" stroke-width="5" fill="none"/>`, { toggle: true, main: '#f5d6c9' }),
  T('banyolavabo', 22, '0 0 100 180', `<ellipse cx="50" cy="40" rx="34" ry="38" fill="#dff3ff"/><ellipse cx="50" cy="40" rx="24" ry="28" fill="#f4fbff"/>
    <path d="M50 88 V100" stroke="#b9c2cc" stroke-width="6" stroke-linecap="round"/><rect x="10" y="100" width="80" height="20" rx="8" fill="#fff"/>
    <rect x="22" y="120" width="56" height="56" rx="6" fill="#ffd6e7"/>`, { main: '#ffd6e7' }),
  T('camasir', 22, '0 0 100 110', `<rect x="4" y="4" width="92" height="102" rx="10" fill="#f1f1f4"/><rect x="10" y="10" width="40" height="10" rx="4" fill="#cfd8e6"/>
    <circle cx="78" cy="15" r="5" fill="#5fd39a"/><circle cx="50" cy="64" r="32" fill="#cfd8e6"/><g class="spin"><circle cx="50" cy="64" r="22" fill="#7fd1ff"/><path d="M36 64 Q50 50 64 64" stroke="#fff" stroke-width="5" fill="none"/></g>`, { toggle: true, main: '#f1f1f4' }),
  T('sampuan', 26, '0 0 140 84', `<rect x="2" y="70" width="136" height="8" rx="3" fill="#fff"/>
    ${[['#9fd8ff', 8, 46], ['#c9b6ff', 30, 40], ['#a8e6cf', 52, 50], ['#ffd27f', 76, 36], ['#ff9fd6', 98, 44], ['#fff', 118, 30]].map(([c, x, h]) => `<rect x="${x}" y="${70 - Number(h)}" width="16" height="${h}" rx="4" fill="${c}"/><rect x="${Number(x) + 4}" y="${62 - Number(h)}" width="8" height="10" rx="2" fill="#7d7590"/>`).join('')}`),
  T('sepet', 14, '0 0 70 64', `<path d="M8 10 H62 L56 62 H14 Z" fill="#7fd1ff"/><path d="M14 22 H56 M14 34 H56 M16 46 H54" stroke="#fff" stroke-width="3"/>
    <path d="M14 10 q6 -10 14 0 q6 -10 14 0 q6 -10 14 0" fill="#ff9fd6"/>`, { main: '#7fd1ff' }),
  T('robot', 14, '0 0 80 34', `<ellipse cx="40" cy="20" rx="38" ry="13" fill="#3d3553"/><ellipse cx="40" cy="16" rx="34" ry="10" fill="#5a5470"/><circle cx="40" cy="14" r="6" fill="#ff6b6b"/>
    <circle class="on-show" cx="40" cy="14" r="10" fill="#5fd39a" opacity=".7"/>`, { toggle: true }),
  T('havlu', 16, '0 0 80 100', `<rect x="4" y="6" width="72" height="8" rx="4" fill="#b9c2cc"/><rect x="12" y="12" width="56" height="80" rx="6" fill="#ff9fd6"/>
    <path d="M12 74 H68" stroke="#fff" stroke-width="5"/><path d="M12 82 H68" stroke="#fff" stroke-width="3"/>`, { main: '#ff9fd6' }),
  T('ayna', 16, '0 0 80 80', `<circle cx="40" cy="40" r="38" fill="#e3b98a"/><circle cx="40" cy="40" r="30" fill="#eef4ff"/><path d="M24 34 L40 20 M28 50 L52 28" stroke="#fff" stroke-width="5"/>`, { main: '#e3b98a' }),
  T('ordek', 9, '0 0 50 46', `<ellipse cx="28" cy="32" rx="20" ry="13" fill="#ffd93d"/><circle cx="16" cy="16" r="12" fill="#ffd93d"/><path d="M2 18 L10 14 L10 22 Z" fill="#ffa94d"/><circle cx="14" cy="13" r="2.5" fill="#2d2440"/>`, { main: '#ffd93d' }),
  T('tuvalet', 18, '0 0 80 110', `<rect x="10" y="4" width="60" height="38" rx="8" fill="#fff"/><ellipse cx="40" cy="58" rx="36" ry="12" fill="#f4e3d0"/>
    <path d="M8 60 Q12 96 40 100 Q68 96 72 60 Z" fill="#fff"/><rect x="26" y="98" width="28" height="10" rx="3" fill="#fff"/>`),

  /* --------------------------------------------------------------- salon */
  T('kanepe', 48, '0 0 200 110', `<rect x="20" y="8" width="160" height="56" rx="20" fill="#c77dff"/><rect x="4" y="44" width="34" height="56" rx="14" fill="#c77dff"/><rect x="162" y="44" width="34" height="56" rx="14" fill="#c77dff"/>
    <rect x="30" y="56" width="140" height="36" rx="10" fill="#d9a6ff"/><rect x="44" y="26" width="34" height="30" rx="8" fill="#ffd93d" transform="rotate(-8 61 41)"/>
    <rect x="20" y="98" width="8" height="10" fill="#c98a5a"/><rect x="172" y="98" width="8" height="10" fill="#c98a5a"/>`, { main: '#c77dff' }),
  T('tv', 32, '0 0 140 120', `<rect x="4" y="4" width="132" height="80" rx="8" fill="#3d3553"/><rect x="12" y="12" width="116" height="64" rx="4" fill="#4a4458"/>
    <g class="on-show">${['#ff6b6b', '#ffa94d', '#ffd93d', '#5fd39a', '#4d96ff', '#c77dff'].map((c, i) => `<rect x="${12 + i * 19.3}" y="12" width="19.6" height="64" fill="${c}"/>`).join('')}<circle cx="70" cy="44" r="14" fill="#fff" opacity=".9"/><path d="M65 36 L79 44 L65 52Z" fill="#ff5d8f"/></g>
    <rect x="62" y="84" width="16" height="16" fill="#9c8f86"/><rect x="34" y="98" width="72" height="16" rx="5" fill="#e3b98a"/>`, { toggle: true }),
  T('sehpa', 26, '0 0 120 54', `<ellipse cx="60" cy="14" rx="56" ry="11" fill="#ffffff"/><rect x="20" y="16" width="8" height="34" fill="#c98a5a"/><rect x="92" y="16" width="8" height="34" fill="#c98a5a"/>`, { main: '#ffffff' }),
  T('puf', 12, '0 0 60 50', `<ellipse cx="30" cy="34" rx="28" ry="14" fill="#ffa94d"/><rect x="2" y="16" width="56" height="18" fill="#ffa94d"/><ellipse cx="30" cy="16" rx="28" ry="12" fill="#ffc27a"/>
    <path d="M30 6 V26 M12 10 L48 22" stroke="#e08a2a" stroke-width="2"/>`, { main: '#ffa94d' }),
  T('abajur', 10, '0 0 50 80', `<circle class="on-show glow" cx="25" cy="20" r="28" fill="#fff6b0" opacity=".6"/><path d="M8 4 H42 L48 34 H2 Z" fill="#ffd1ea"/><rect x="22" y="34" width="6" height="30" fill="#9c8f86"/><rect x="10" y="62" width="30" height="14" rx="5" fill="#c77dff"/>`, { toggle: true, main: '#ffd1ea' }),
  T('buyukbitki', 18, '0 0 90 180', `${[[-30, 50], [30, 50], [-14, 30], [14, 30], [0, 18]].map(([a, y], i) => `<ellipse cx="${45 + a * 0.6}" cy="${y + 30}" rx="12" ry="40" fill="${i % 2 ? '#4aa85a' : '#6fd17d'}" transform="rotate(${a} 45 140)"/>`).join('')}
    <path d="M18 136 H72 L64 178 H26 Z" fill="#f5f5f5"/>`, { main: '#f5f5f5' }),
  T('oyunrafi', 30, '0 0 140 150', `<rect x="4" y="4" width="132" height="142" rx="8" fill="#ffe0a8"/><path d="M8 52 H132 M8 100 H132" stroke="#e8b866" stroke-width="5"/>
    <circle cx="28" cy="38" r="12" fill="#ff6b6b"/><rect x="50" y="26" width="24" height="24" rx="4" fill="#5fd3f3"/>${star(100, 36, 12, '#ffd93d')}
    <path d="M18 98 q12 -24 24 0Z" fill="#a8e6cf"/><rect x="58" y="72" width="30" height="26" rx="5" fill="#c9b6ff"/><circle cx="110" cy="84" r="12" fill="#ff9fd6"/>
    <rect x="18" y="114" width="40" height="28" rx="4" fill="#ffd27f"/><rect x="72" y="118" width="50" height="24" rx="4" fill="#9fd8ff"/>`, { main: '#ffe0a8' }),
  T('kediyatagi', 18, '0 0 90 52', `<ellipse cx="45" cy="34" rx="43" ry="16" fill="#ffb3d1"/><ellipse cx="45" cy="28" rx="34" ry="11" fill="#fff1f6"/>
    <path d="M30 26 Q45 14 60 26" stroke="#ffb3d1" stroke-width="3" fill="none"/>`, { main: '#ffb3d1' }),
  T('hali2', 46, '0 0 200 50', `<ellipse cx="100" cy="26" rx="96" ry="22" fill="#cfe9ff"/>${[40, 70, 100, 130, 160].map((x) => `<circle cx="${x}" cy="26" r="6" fill="#fff"/>`).join('')}`, { flat: true, main: '#cfe9ff' }),
  T('kedi', 14, '0 0 80 60', `<path d="M66 44 Q84 34 74 18" stroke="#f2c14e" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="44" cy="44" rx="26" ry="15" fill="#f2c14e"/>
    <path d="M8 18 L12 0 L24 12 Z M34 18 L30 0 L18 12 Z" fill="#f2c14e"/><circle cx="21" cy="24" r="16" fill="#f2c14e"/><circle cx="16" cy="23" r="2.5" fill="#2d2440"/><circle cx="26" cy="23" r="2.5" fill="#2d2440"/>`, { main: '#f2c14e' }),
  T('kopek', 15, '0 0 80 64', `<ellipse cx="46" cy="46" rx="28" ry="15" fill="#c98a5a"/><circle cx="22" cy="28" r="18" fill="#c98a5a"/><ellipse cx="8" cy="30" rx="6" ry="14" fill="#8a5a3a"/><ellipse cx="36" cy="30" rx="6" ry="14" fill="#8a5a3a"/>
    <circle cx="16" cy="26" r="2.5" fill="#2d2440"/><circle cx="28" cy="26" r="2.5" fill="#2d2440"/><ellipse cx="22" cy="35" rx="4" ry="3" fill="#2d2440"/><path d="M72 40 q8 -8 4 -16" stroke="#c98a5a" stroke-width="6" fill="none" stroke-linecap="round"/>`, { main: '#c98a5a' }),
  T('tavsan', 12, '0 0 60 76', `<ellipse cx="22" cy="18" rx="6" ry="17" fill="#f4f0ec"/><ellipse cx="38" cy="18" rx="6" ry="17" fill="#f4f0ec"/><ellipse cx="30" cy="60" rx="22" ry="14" fill="#f4f0ec"/>
    <circle cx="30" cy="40" r="15" fill="#f4f0ec"/><circle cx="25" cy="38" r="2.4" fill="#2d2440"/><circle cx="35" cy="38" r="2.4" fill="#2d2440"/><circle cx="30" cy="44" r="2.5" fill="#ff8fa3"/>`, { main: '#f4f0ec' }),
  T('top', 8, '0 0 40 40', `<circle cx="20" cy="20" r="18" fill="#ff6b6b"/><path d="M4 16 Q20 26 36 16" stroke="#fff" stroke-width="5" fill="none"/>`, { main: '#ff6b6b' }),

  /* --------------------------------------------------------------- havuz */
  T('sezlong', 24, '0 0 120 90', `<path d="M14 88 L40 20 M100 88 L70 40 M30 50 H86" stroke="#c98a5a" stroke-width="5"/><path d="M42 18 L22 64 H96 L74 34 Z" fill="#ffb3c7"/>
    <path d="M36 32 L26 58 M52 30 L44 62" stroke="#fff" stroke-width="3" opacity=".6"/>`, { main: '#ffb3c7' }),
  T('semsiye', 34, '0 0 180 190', `<path d="M90 30 V186" stroke="#c98a5a" stroke-width="6"/>
    <path d="M6 70 Q90 -20 174 70 Q160 58 146 70 Q132 58 118 70 Q104 58 90 70 Q76 58 62 70 Q48 58 34 70 Q20 58 6 70 Z" fill="#ffd1e0"/>
    <path d="M90 14 L62 70 M90 14 L118 70" stroke="#fff" stroke-width="3" opacity=".6"/>`, { main: '#ffd1e0' }),
  T('flamingo', 22, '0 0 120 100', `<ellipse cx="62" cy="76" rx="56" ry="20" fill="#ff8fc0"/><ellipse cx="62" cy="72" rx="34" ry="10" fill="#7fd8ff"/>
    <path d="M30 70 Q14 20 30 10 Q46 2 46 20" stroke="#ff8fc0" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M42 20 L56 26 L44 30 Z" fill="#3d3553"/><circle cx="36" cy="14" r="2.5" fill="#2d2440"/>`, { bob: true, main: '#ff8fc0' }),
  T('simit', 15, '0 0 70 44', `<ellipse cx="35" cy="22" rx="33" ry="19" fill="#5fd3f3"/><ellipse cx="35" cy="21" rx="15" ry="7" fill="#9fe6ff"/>
    ${[[10, 18], [34, 6], [58, 18], [34, 38]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="#fff"/>`).join('')}`, { bob: true, main: '#5fd3f3' }),
  T('palmiye', 26, '0 0 120 230', `<path d="M58 90 Q66 160 54 228 H74 Q82 160 70 90 Z" fill="#c98a5a"/>
    ${[[-70, '#4aa85a'], [-30, '#6fd17d'], [10, '#4aa85a'], [50, '#6fd17d'], [90, '#4aa85a']].map(([a, c]) => `<ellipse cx="64" cy="54" rx="14" ry="50" fill="${c}" transform="rotate(${a} 64 90)"/>`).join('')}
    <circle cx="58" cy="94" r="7" fill="#8a5a3a"/><circle cx="70" cy="96" r="7" fill="#8a5a3a"/>`),
  T('kalpbalon', 10, '0 0 50 160', `${heart(25, 26, 20, '#ff8fd8')}<path d="M16 16 Q20 10 26 12" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/><path d="M25 46 Q30 100 22 158" stroke="#7d7590" stroke-width="2" fill="none"/>`, { bob: true, main: '#ff8fd8' }),
  T('kalpisik', 64, '0 0 300 44', `<path d="M0 6 Q75 40 150 10 Q225 40 300 6" stroke="#7d7590" stroke-width="3" fill="none"/>
    ${Array.from({ length: 9 }, (_, i) => { const x = 18 + i * 33; const y = i < 5 ? 10 + Math.sin((x / 150) * 3.14) * 20 : 10 + Math.sin(((x - 150) / 150) * 3.14) * 20; return heart(x, y + 6, 9, '#ff7eb6'); }).join('')}`, { main: '#ff7eb6' }),
  T('buzkutusu', 14, '0 0 70 56', `<rect x="4" y="14" width="62" height="40" rx="6" fill="#ffd93d"/><rect x="2" y="8" width="66" height="12" rx="4" fill="#fff"/>
    <path d="M24 8 Q35 -4 46 8" stroke="#3d3553" stroke-width="3" fill="none"/><rect x="18" y="0" width="8" height="12" rx="2" fill="#ff8f7a"/>`, { main: '#ffd93d' }),
  T('dondurma', 7, '0 0 40 70', `<path d="M10 30 L20 68 L30 30 Z" fill="#eab36e"/><circle cx="20" cy="24" r="12" fill="#ff9fd6"/><circle cx="20" cy="12" r="9" fill="#fff1c9"/><circle cx="22" cy="4" r="4" fill="#ff6b6b"/>`, { main: '#ff9fd6' }),
];

export const THINGS: Record<string, Thing> = Object.fromEntries(THING_LIST.map((t) => [t.id, t]));

/** Eşyanın ana rengini CSS değişkenine bağlar; böylece her eşya ayrı boyanabilir. */
export function colorize(t: Thing): string {
  if (!t.main) return t.svg;
  return t.svg.split(`fill="${t.main}"`).join(`fill="${t.main}" style="fill:var(--c, ${t.main})"`);
}

/* ------------------------------------------------- yapay zekâ görselleri */

/**
 * Hazır görsel (ör. Adobe Firefly ile üretilmiş, arka planı şeffaf PNG/WebP) varsa çizim yerine o kullanılır:
 *   src/assets/items/<eşya-id>.png
 * Yalnızca görselden oluşan yeni eşyalar src/assets/items.json listesine eklenir:
 *   [{ "id": "disko2", "w": 14, "rooms": ["yatak", "salon"], "flat": false }]
 */
const IMAGES = import.meta.glob('./assets/items/*.{png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

export function itemImage(id: string): string | undefined {
  return IMAGES[`./assets/items/${id}.png`] ?? IMAGES[`./assets/items/${id}.webp`];
}

interface ExtraItem {
  id: string;
  w: number;
  rooms?: string[];
  flat?: boolean;
}
const EXTRA = (Object.values(import.meta.glob('./assets/items.json', { eager: true, import: 'default' }))[0] ?? []) as ExtraItem[];

for (const e of EXTRA) {
  if (!THINGS[e.id] && itemImage(e.id)) THINGS[e.id] = { id: e.id, w: e.w, vb: '0 0 100 100', svg: '', flat: e.flat };
}

/** Bir odanın çekmecesine eklenecek, sadece görselden oluşan eşyalar. */
export const extraItemsFor = (room: string) => EXTRA.filter((e) => itemImage(e.id) && (!e.rooms || e.rooms.includes(room))).map((e) => e.id);
