/**
 * Defne'nin Sahnesi: kâğıt bebek giydirme ve boyama. Okuma oyunlarından kazanılan yıldızlar
 * yeni kıyafetleri açar; böylece okuma çalışması ödüllendirilir. Bütün çizimler bu projeye özgüdür.
 */
import { genitive } from './content';
import { progress, commit } from './state';
import { talk, bindTalkButtons } from './talk';
import { show, on, wiggle, bounce, confetti, talkBtn, h } from './ui';
import { buildSong, playSong, SongHandle } from './music';
import { CAT_ICONS } from './icons';
import { readingChallenge } from './challenge';
import { imgTag } from './assets';
import type { TalkId } from './content';
import { stopVoice, wait } from './voice';
import { sfx } from './sfx';

/* --------------------------------------------------------------- colors */

const PALETTE = ['#ff5d8f', '#ff8fd8', '#c77dff', '#7b5cff', '#4d96ff', '#5fd3f3', '#5fd39a', '#b5e550', '#ffd93d', '#ffa94d', '#ff6b6b', '#a0522d', '#3d3553', '#ffffff'];
// Doğal saç renkleri + boyamak için canlı renkler.
const HAIR = ['#1f1b24', '#3b2418', '#6b3e26', '#a8642f', '#f2c14e', '#ff6b4a', '#8e5cff', '#c77dff', '#ff7eb6', '#ff5d8f', '#4d96ff', '#5fd3f3', '#5fd39a', '#ffd93d'];
const SKIN = ['#ffe0c7', '#f6c9a4', '#e3a777', '#c68653', '#8d5a3b', '#5e3a26'];

export function shade(hex: string, amt: number): string {
  const n = parseInt(hex.slice(1), 16);
  const f = (c: number) => Math.max(0, Math.min(255, Math.round(c + amt * (amt < 0 ? c : 255 - c))));
  const r = f(n >> 16),
    g = f((n >> 8) & 255),
    b = f(n & 255);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

/* ----------------------------------------------------------------- doll */

type Look = Record<string, { item: string; color: string }>;

interface Item {
  id: string;
  /** Baştan açık mı; değilse okuma oyunlarından kazanılan hediyeyle açılır. */
  free?: boolean;
}
interface Cat {
  id: string;
  icon: string;
  items: Item[];
  colors: string[];
}

const CATS: Cat[] = [
  { id: 'kiyafet', icon: '👗', colors: PALETTE, items: [{ id: 'prenses', free: true }, { id: 'pop', free: true }, { id: 'tisort' }, { id: 'tutu' }, { id: 'sim' }, { id: 'cicekli' }, { id: 'sweat' }, { id: 'tulum' }, { id: 'kahraman' }] },
  { id: 'sac', icon: '💇‍♀️', colors: HAIR, items: [{ id: 'orgu', free: true }, { id: 'uzun', free: true }, { id: 'atkuyrugu' }, { id: 'kisa' }, { id: 'topuz' }, { id: 'kivircik' }] },
  { id: 'ten', icon: '🙂', colors: SKIN, items: [{ id: 'ten', free: true }] },
  { id: 'taki', icon: '👑', colors: PALETTE, items: [{ id: 'tac', free: true }, { id: 'yok', free: true }, { id: 'yildiz' }, { id: 'kurdele' }, { id: 'cicek' }, { id: 'sapka' }, { id: 'bere' }, { id: 'gozluk' }, { id: 'kulaklik' }] },
  { id: 'elde', icon: '🎤', colors: PALETTE, items: [{ id: 'mikrofon', free: true }, { id: 'yok', free: true }, { id: 'buket' }, { id: 'degnek' }, { id: 'gitar' }] },
  { id: 'ayakkabi', icon: '👟', colors: PALETTE, items: [{ id: 'babet', free: true }, { id: 'spor' }, { id: 'cizme' }] },
  { id: 'hayvan', icon: '🐱', colors: ['#f2c14e', '#a0522d', '#ffffff', '#9a9a9a', '#3d3553', ...PALETTE.slice(0, 6)], items: [{ id: 'kedi', free: true }, { id: 'yok', free: true }, { id: 'kopek' }, { id: 'tavsan' }] },
  { id: 'fon', icon: '🏰', colors: PALETTE, items: [{ id: 'sahne', free: true }, { id: 'kale' }, { id: 'gokkusagi' }, { id: 'gece' }] },
];

/** Önceki sürümde yıldızla açılan parçalar: güncellemede çocuğun kazandıkları kaybolmasın. */
const OLD_STAR_UNLOCKS: Record<string, number> = {
  'kiyafet:tisort': 0, 'kiyafet:tulum': 5, 'kiyafet:kahraman': 12, 'sac:atkuyrugu': 0, 'sac:topuz': 3, 'sac:kivircik': 8,
  'taki:yildiz': 0, 'taki:cicek': 6, 'taki:kulaklik': 10, 'elde:degnek': 15, 'ayakkabi:spor': 0, 'ayakkabi:cizme': 4, 'fon:kale': 0, 'fon:gece': 20,
};

export function isUnlocked(cat: string, item: string): boolean {
  const c = CATS.find((x) => x.id === cat);
  const it = c?.items.find((i) => i.id === item);
  return !!it?.free || (progress.unlocked ?? []).includes(`${cat}:${item}`);
}

export function lockedItems(): { cat: string; item: string }[] {
  return CATS.flatMap((c) => c.items.filter((i) => !isUnlocked(c.id, i.id)).map((i) => ({ cat: c.id, item: i.id })));
}

export const pendingGifts = () => progress.gifts ?? 0;


const DEFAULT_LOOK: Look = {
  kiyafet: { item: 'prenses', color: '#c77dff' },
  sac: { item: 'orgu', color: '#8e5cff' },
  taki: { item: 'tac', color: '#ffd93d' },
  elde: { item: 'mikrofon', color: '#ff5d8f' },
  ayakkabi: { item: 'babet', color: '#ff8fd8' },
  fon: { item: 'sahne', color: '#7b5cff' },
  ten: { item: 'ten', color: '#f6c9a4' },
  hayvan: { item: 'kedi', color: '#f2c14e' },
};

/** Bebeğin şu anki görünümü (evde de aynı bebek görünsün). */
export function currentLook(): Look {
  return look();
}

function look(): Look {
  if (!progress.unlocked) {
    progress.unlocked = progress.doll ? Object.entries(OLD_STAR_UNLOCKS).filter(([, st]) => progress.stars >= st).map(([k]) => k) : [];
  }
  progress.doll ??= structuredClone(DEFAULT_LOOK);
  for (const k of Object.keys(DEFAULT_LOOK)) progress.doll[k] ??= { ...DEFAULT_LOOK[k] };
  return progress.doll;
}

function background(item: string, c: string): string {
  if (item === 'gokkusagi')
    return `<rect width="300" height="480" fill="${shade(c, 0.8)}"/>
      ${['#ff6b6b', '#ffa94d', '#ffd93d', '#5fd39a', '#4d96ff', '#c77dff'].map((col, i) => `<path d="M${-10 + i * 14} 330 A${160 - i * 14} ${160 - i * 14} 0 0 1 ${310 - i * 14} 330" stroke="${col}" stroke-width="14" fill="none"/>`).join('')}
      <g fill="#fff"><circle cx="40" cy="330" r="26"/><circle cx="70" cy="324" r="30"/><circle cx="260" cy="330" r="26"/><circle cx="232" cy="324" r="30"/></g>
      <rect y="400" width="300" height="80" fill="#9be08f"/>`;
  if (item === 'kale')
    return `<rect width="300" height="480" fill="${shade(c, 0.75)}"/>
      <circle cx="250" cy="60" r="28" fill="#fff6b0"/>
      <g fill="${shade(c, 0.45)}"><rect x="20" y="230" width="60" height="180"/><rect x="220" y="230" width="60" height="180"/><rect x="60" y="280" width="180" height="130"/>
      <path d="M14 232 L50 170 L86 232Z M214 232 L250 170 L286 232Z"/></g>
      <rect y="400" width="300" height="80" fill="#9be08f"/>`;
  if (item === 'gece')
    return `<rect width="300" height="480" fill="${shade(c, -0.55)}"/>
      ${Array.from({ length: 22 }, (_, i) => `<circle cx="${(i * 73) % 300}" cy="${(i * 41) % 380}" r="${1.5 + (i % 3)}" fill="#fff" opacity="${0.5 + (i % 4) * 0.12}"/>`).join('')}
      <path d="M60 70 a26 26 0 1 0 26 -30 a20 20 0 1 1 -26 30Z" fill="#ffe680"/>
      <rect y="410" width="300" height="70" fill="${shade(c, -0.3)}"/>`;
  // sahne
  return `<rect width="300" height="480" fill="${shade(c, -0.35)}"/>
    <path d="M150 0 L60 420 L240 420Z" fill="#fff" opacity=".13"/>
    <path d="M0 0 H70 Q50 120 70 260 Q30 300 0 300Z M300 0 H230 Q250 120 230 260 Q270 300 300 300Z" fill="${shade(c, 0.25)}"/>
    <rect y="0" width="300" height="26" fill="${shade(c, 0.4)}"/>
    <rect y="415" width="300" height="65" fill="#7a4b2a"/><rect y="415" width="300" height="8" fill="#a8693c"/>
    ${[40, 90, 210, 260].map((x, i) => `<path d="M${x} ${60 + i * 25} l4 9 10 1 -8 6 3 10 -9 -6 -9 6 3 -10 -8 -6 10 -1Z" fill="#ffe680" opacity=".85"/>`).join('')}`;
}

function hairBack(item: string, c: string): string {
  const cap = `<path d="M88 125 Q86 56 150 50 Q214 56 212 125 Z" fill="${c}"/>`;
  switch (item) {
    case 'uzun':
      return `<path d="M86 120 Q84 52 150 48 Q216 52 214 120 L226 300 Q150 322 74 300 Z" fill="${c}"/>`;
    case 'orgu': {
      const beads = Array.from({ length: 7 }, (_, i) => `<ellipse cx="${206 + Math.sin(i * 0.6) * 6}" cy="${176 + i * 22}" rx="16" ry="14" fill="${i % 2 ? shade(c, -0.15) : c}"/>`).join('');
      return `${cap}${beads}<circle cx="${206 + Math.sin(7 * 0.6) * 6}" cy="${176 + 7 * 22 - 6}" r="8" fill="${shade(c, -0.3)}"/>`;
    }
    case 'atkuyrugu':
      return `${cap}<path d="M188 66 Q262 84 246 214 Q236 262 218 236 Q238 136 184 96 Z" fill="${c}"/><circle cx="192" cy="72" r="10" fill="#ff5d8f"/>`;
    case 'topuz':
      return `${cap}<circle cx="96" cy="66" r="30" fill="${c}"/><circle cx="204" cy="66" r="30" fill="${c}"/>`;
    case 'kisa':
      return `<path d="M84 122 Q82 52 150 48 Q218 52 216 122 L218 182 Q204 198 186 188 L114 188 Q96 198 82 182 Z" fill="${c}"/>`;
    case 'kivircik':
      return Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * Math.PI * 2;
        return `<circle cx="${150 + Math.cos(a) * 72}" cy="${130 + Math.sin(a) * 74}" r="30" fill="${c}"/>`;
      }).join('');
  }
  return cap;
}

function hairFront(item: string, c: string): string {
  if (item === 'kivircik')
    return [100, 125, 150, 175, 200].map((x, i) => `<circle cx="${x}" cy="${78 + (i % 2) * 6}" r="22" fill="${c}"/>`).join('');
  return `<path d="M88 122 Q90 58 150 56 Q210 58 212 122 Q196 90 168 86 Q150 104 112 98 Q96 104 88 122Z" fill="${c}"/>
    <path d="M118 70 Q140 62 160 66" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none" opacity=".35"/>`;
}

function outfitBack(item: string, c: string): string {
  return item === 'kahraman' ? `<path d="M118 196 L76 422 Q150 444 224 422 L182 196 Z" fill="${shade(c, -0.3)}"/>` : '';
}

function outfit(item: string, c: string): string {
  const d = shade(c, -0.22),
    l = shade(c, 0.35);
  switch (item) {
    case 'prenses':
      return `<path d="M128 250 Q92 330 62 428 Q150 450 238 428 Q208 330 172 250 Z" fill="${c}"/>
        <path d="M74 400 Q100 388 120 402 Q140 388 160 402 Q180 388 200 402 Q218 388 228 400" stroke="${l}" stroke-width="6" fill="none"/>
        <path d="M122 196 Q150 188 178 196 L174 258 Q150 266 126 258 Z" fill="${d}"/>
        <circle cx="119" cy="205" r="17" fill="${l}"/><circle cx="181" cy="205" r="17" fill="${l}"/>
        <circle cx="150" cy="222" r="7" fill="#fff" opacity=".8"/>`;
    case 'pop':
      return `<path d="M124 248 L176 248 L194 324 L106 324 Z" fill="${d}"/>
        ${[124, 138, 152, 166].map((x) => `<path d="M${x + 6} 250 L${x - 2 + (x - 150) * 0.3} 322" stroke="${shade(c, -0.4)}" stroke-width="2"/>`).join('')}
        <path d="M120 196 Q150 188 180 196 L178 252 L122 252 Z" fill="${c}"/>
        <path d="M121 200 Q104 232 100 262" stroke="${c}" stroke-width="22" stroke-linecap="round" fill="none"/>
        <path d="M179 200 Q196 232 200 262" stroke="${c}" stroke-width="22" stroke-linecap="round" fill="none"/>
        <path d="M150 210 l5 10 11 1 -8 7 3 11 -11 -6 -11 6 3 -11 -8 -7 11 -1Z" fill="#fff6b0"/>`;
    case 'tulum':
      return `<path d="M122 196 Q150 188 178 196 L176 318 L124 318 Z" fill="${c}"/>
        <rect x="126" y="300" width="23" height="112" rx="8" fill="${c}"/><rect x="151" y="300" width="23" height="112" rx="8" fill="${c}"/>
        <rect x="134" y="226" width="32" height="26" rx="6" fill="${d}"/>
        <circle cx="132" cy="206" r="5" fill="${l}"/><circle cx="168" cy="206" r="5" fill="${l}"/>`;
    case 'kahraman':
      return `<path d="M122 196 L178 196 L192 330 L108 330 Z" fill="${c}"/>
        <rect x="120" y="262" width="60" height="12" rx="4" fill="#ffd93d"/>
        <path d="M150 212 l6 12 13 2 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -2Z" fill="#ffd93d"/>`;
    case 'cicekli':
      return `<path d="M124 196 Q150 188 176 196 L198 334 L102 334 Z" fill="${c}"/>
        ${[[130, 240], [165, 262], [140, 300], [178, 310], [118, 318], [160, 220]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#fff"/><circle cx="${x}" cy="${y}" r="3" fill="#ffd93d"/>`).join('')}
        <rect x="104" y="196" width="22" height="24" rx="8" fill="${l}" transform="rotate(20 115 208)"/><rect x="174" y="196" width="22" height="24" rx="8" fill="${l}" transform="rotate(-20 185 208)"/>`;
    case 'sweat':
      return `<rect x="127" y="276" width="22" height="140" rx="6" fill="#7a9bd6"/><rect x="151" y="276" width="22" height="140" rx="6" fill="#7a9bd6"/>
        <path d="M112 196 L188 196 L192 288 L108 288 Z" fill="${c}"/>
        <path d="M118 200 Q98 240 96 284" stroke="${c}" stroke-width="26" stroke-linecap="round" fill="none"/>
        <path d="M182 200 Q202 240 204 284" stroke="${c}" stroke-width="26" stroke-linecap="round" fill="none"/>
        <rect x="108" y="278" width="84" height="12" rx="4" fill="${d}"/><circle cx="150" cy="236" r="14" fill="${l}"/>`;
    case 'tutu':
      return `<path d="M124 196 Q150 188 176 196 L174 262 L126 262 Z" fill="${c}"/>
        ${[0, 1, 2].map((i) => `<ellipse cx="150" cy="${262 + i * 9}" rx="${70 - i * 8}" ry="${20 - i * 3}" fill="${i % 2 ? l : c}" opacity=".95"/>`).join('')}
        <circle cx="150" cy="214" r="9" fill="${l}"/><circle cx="141" cy="214" r="6" fill="${d}"/><circle cx="159" cy="214" r="6" fill="${d}"/>`;
    case 'sim':
      return `<path d="M124 196 Q150 188 176 196 L188 300 Q200 380 214 430 Q150 446 86 430 Q100 380 112 300 Z" fill="${c}"/>
        ${Array.from({ length: 18 }, (_, i) => `<circle cx="${112 + ((i * 37) % 78)}" cy="${210 + ((i * 53) % 210)}" r="${2 + (i % 3)}" fill="#fff" opacity=".8"/>`).join('')}
        <path d="M124 196 Q150 214 176 196" stroke="${l}" stroke-width="6" fill="none"/>`;
    default: // tisort
      return `<path d="M118 258 L182 258 L198 322 L102 322 Z" fill="${d}"/>
        <path d="M120 196 L180 196 L182 262 L118 262 Z" fill="${c}"/>
        <rect x="104" y="196" width="24" height="26" rx="8" fill="${c}" transform="rotate(20 116 209)"/>
        <rect x="172" y="196" width="24" height="26" rx="8" fill="${c}" transform="rotate(-20 184 209)"/>
        <path d="M150 238 c-10 -12 -22 0 0 14 c22 -14 10 -26 0 -14Z" fill="${l}"/>`;
  }
}

function shoes(item: string, c: string): string {
  if (item === 'cizme') return `<rect x="126" y="372" width="24" height="64" rx="8" fill="${c}"/><rect x="150" y="372" width="24" height="64" rx="8" fill="${c}"/>
    <rect x="126" y="372" width="24" height="10" rx="4" fill="${shade(c, 0.35)}"/><rect x="150" y="372" width="24" height="10" rx="4" fill="${shade(c, 0.35)}"/>`;
  if (item === 'spor') return `<ellipse cx="136" cy="432" rx="17" ry="11" fill="${c}"/><ellipse cx="164" cy="432" rx="17" ry="11" fill="${c}"/>
    <rect x="120" y="436" width="32" height="6" rx="3" fill="#fff"/><rect x="148" y="436" width="32" height="6" rx="3" fill="#fff"/>`;
  return `<ellipse cx="137" cy="432" rx="15" ry="9" fill="${c}"/><ellipse cx="163" cy="432" rx="15" ry="9" fill="${c}"/>
    <circle cx="137" cy="427" r="4" fill="#fff"/><circle cx="163" cy="427" r="4" fill="#fff"/>`;
}

function accessory(item: string, c: string): string {
  switch (item) {
    case 'tac':
      return `<path d="M116 70 L124 36 L139 58 L150 26 L161 58 L176 36 L184 70 Z" fill="${c}" stroke="${shade(c, -0.3)}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="150" cy="56" r="6" fill="#ff5d8f"/><circle cx="130" cy="62" r="4" fill="#4d96ff"/><circle cx="170" cy="62" r="4" fill="#4d96ff"/>`;
    case 'yildiz':
      return `<path d="M192 62 l7 14 15 2 -11 10 3 15 -14 -7 -14 7 3 -15 -11 -10 15 -2Z" fill="${c}" stroke="${shade(c, -0.3)}" stroke-width="2"/>`;
    case 'cicek':
      return [96, 118, 140, 160, 182, 204]
        .map((x, i) => {
          const y = 76 - Math.sin((i / 5) * Math.PI) * 28;
          const col = i % 2 ? c : '#ff8fd8';
          return `<circle cx="${x}" cy="${y}" r="11" fill="${col}"/><circle cx="${x}" cy="${y}" r="4" fill="#ffd93d"/>`;
        })
        .join('');
    case 'sapka':
      return `<ellipse cx="150" cy="92" rx="76" ry="15" fill="${shade(c, -0.15)}"/><path d="M98 92 Q102 38 150 36 Q198 38 202 92 Z" fill="${c}"/>
        ${[120, 150, 180].map((x) => `<circle cx="${x}" cy="70" r="8" fill="#fff"/><circle cx="${x}" cy="70" r="3" fill="#ffd93d"/>`).join('')}`;
    case 'bere':
      return `<path d="M90 100 Q90 34 150 34 Q210 34 210 100 Z" fill="${c}"/><rect x="88" y="88" width="124" height="18" rx="8" fill="${shade(c, -0.2)}"/>
        <circle cx="150" cy="32" r="14" fill="${shade(c, 0.4)}"/>`;
    case 'kurdele':
      return `<path d="M150 58 L112 36 L116 82 Z M150 58 L188 36 L184 82 Z" fill="${c}" stroke="${shade(c, -0.3)}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="150" cy="58" r="10" fill="${shade(c, -0.2)}"/>`;
    case 'gozluk': {
      const heart = (x: number, y: number, r: number) =>
        `<path d="M${x} ${y + r} C${x - r * 1.7} ${y} ${x - r * 0.9} ${y - r * 1.3} ${x} ${y - r * 0.35} C${x + r * 0.9} ${y - r * 1.3} ${x + r * 1.7} ${y} ${x} ${y + r}Z" fill="${c}" opacity=".85" stroke="${shade(c, -0.35)}" stroke-width="3"/>`;
      return `${heart(128, 130, 15)}${heart(172, 130, 15)}<path d="M140 126 Q150 120 160 126" stroke="${shade(c, -0.35)}" stroke-width="3" fill="none"/>`;
    }
    case 'kulaklik':
      return `<path d="M90 124 Q88 34 150 34 Q212 34 210 124" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round"/>
        <rect x="76" y="106" width="22" height="40" rx="10" fill="${c}"/><rect x="202" y="106" width="22" height="40" rx="10" fill="${c}"/>
        <rect x="80" y="114" width="14" height="24" rx="6" fill="${shade(c, -0.3)}"/><rect x="206" y="114" width="14" height="24" rx="6" fill="${shade(c, -0.3)}"/>`;
  }
  return '';
}

function handheld(item: string, c: string): string {
  if (item === 'mikrofon')
    return `<path d="M203 296 L214 266" stroke="#4a4458" stroke-width="8" stroke-linecap="round"/>
      <circle cx="217" cy="258" r="13" fill="${c}"/><path d="M208 252 Q217 246 226 252" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>`;
  if (item === 'buket')
    return `<path d="M200 296 L212 252 M204 296 L226 258 M200 296 L198 254" stroke="#3f9a52" stroke-width="4"/>
      <circle cx="212" cy="248" r="10" fill="${c}"/><circle cx="228" cy="256" r="9" fill="#ff8fd8"/><circle cx="196" cy="250" r="9" fill="#ffd93d"/>
      <circle cx="212" cy="248" r="3" fill="#fff"/>`;
  if (item === 'gitar')
    return `<g transform="rotate(-35 205 300)"><rect x="200" y="200" width="10" height="80" rx="3" fill="#7a4b2a"/>
      <ellipse cx="205" cy="300" rx="24" ry="28" fill="${c}"/><ellipse cx="205" cy="272" rx="18" ry="18" fill="${c}"/>
      <circle cx="205" cy="292" r="8" fill="#3d3553"/><rect x="196" y="194" width="18" height="12" rx="3" fill="#5e3a1f"/></g>`;
  if (item === 'degnek')
    return `<path d="M203 298 L228 236" stroke="#d6c3ff" stroke-width="6" stroke-linecap="round"/>
      <path d="M230 214 l7 14 15 2 -11 10 3 15 -14 -7 -14 7 3 -15 -11 -10 15 -2Z" fill="${c}"/>`;
  return '';
}

/** Kalın, koyu kontur: her parçanın etrafına "çıkartma" gibi çizgi çeker. */
const OUTLINE = `<defs><filter id="ol" x="-15%" y="-15%" width="130%" height="130%"><feMorphology in="SourceAlpha" operator="dilate" radius="2.6" result="d"/><feFlood flood-color="#3d3553"/><feComposite in2="d" operator="in" result="o"/><feMerge><feMergeNode in="o"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
/** Sevimli oranlar: büyük kafa, kısa gövde. */
const HEAD = 'translate(-37.5 -46.25) scale(1.25)';
const BODY = 'translate(0 38) scale(1 0.8)';

function pet(item: string, c: string): string {
  const d = shade(c, -0.25);
  const eyes = (x: number, y: number) => `<circle cx="${x - 6}" cy="${y}" r="2.6" fill="#2d2440"/><circle cx="${x + 6}" cy="${y}" r="2.6" fill="#2d2440"/>`;
  if (item === 'kedi')
    return `<path d="M96 420 Q122 404 112 382" stroke="${c}" stroke-width="8" fill="none" stroke-linecap="round"/>
      <ellipse cx="74" cy="420" rx="28" ry="18" fill="${c}"/>
      <path d="M38 382 L42 360 L54 374 Z M66 382 L62 360 L50 374 Z" fill="${c}"/>
      <circle cx="52" cy="390" r="19" fill="${c}"/>${eyes(52, 390)}<path d="M49 397 Q52 400 55 397" stroke="#2d2440" stroke-width="2" fill="none"/>`;
  if (item === 'kopek')
    return `<ellipse cx="76" cy="420" rx="30" ry="18" fill="${c}"/><circle cx="52" cy="388" r="20" fill="${c}"/>
      <ellipse cx="34" cy="390" rx="7" ry="15" fill="${d}"/><ellipse cx="70" cy="390" rx="7" ry="15" fill="${d}"/>
      ${eyes(52, 386)}<ellipse cx="52" cy="396" rx="5" ry="4" fill="#2d2440"/><path d="M104 412 q10 -12 4 -20" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
  if (item === 'tavsan')
    return `<ellipse cx="74" cy="422" rx="26" ry="16" fill="${c}"/><circle cx="100" cy="418" r="7" fill="#fff"/>
      <ellipse cx="44" cy="356" rx="7" ry="20" fill="${c}"/><ellipse cx="60" cy="356" rx="7" ry="20" fill="${c}"/>
      <ellipse cx="44" cy="356" rx="3" ry="13" fill="#ff8fa3"/><ellipse cx="60" cy="356" rx="3" ry="13" fill="#ff8fa3"/>
      <circle cx="52" cy="390" r="18" fill="${c}"/>${eyes(52, 388)}<circle cx="52" cy="396" r="3" fill="#ff8fa3"/>`;
  return '';
}

/** opts.bg=false: arka plansız (evde odaların içinde kullanmak için). */
export function dollSvg(lk: Look, cls = 'doll', opts: { bg?: boolean } = {}): string {
  const g = (k: string) => lk[k] ?? DEFAULT_LOOK[k];
  const skin = g('ten').color;
  const bg = opts.bg !== false;
  const part = (id: string, body: string) => `<g data-part="${id}" filter="url(#ol)">${body}</g>`;
  return `<svg class="${cls}" viewBox="0 0 300 480" xmlns="http://www.w3.org/2000/svg">${OUTLINE}
    ${bg ? `<g data-part="fon">${background(g('fon').item, g('fon').color)}</g>` : ''}
    <ellipse cx="150" cy="436" rx="70" ry="9" fill="#000" opacity=".15"/>
    <g class="doll-body"><g transform="translate(0 40)">
      <g transform="${HEAD}">${part('sac', hairBack(g('sac').item, g('sac').color))}</g>
      <g transform="${BODY}">
        ${part('kiyafet', outfitBack(g('kiyafet').item, g('kiyafet').color))}
        ${part('ten', `<rect x="128" y="316" width="18" height="118" rx="8" fill="${skin}"/><rect x="154" y="316" width="18" height="118" rx="8" fill="${skin}"/>`)}
        ${part('ayakkabi', shoes(g('ayakkabi').item, g('ayakkabi').color))}
        ${part('ten', `<path d="M121 202 Q102 242 98 290" stroke="${skin}" stroke-width="17" stroke-linecap="round" fill="none"/>
          <path d="M179 202 Q198 242 202 290" stroke="${skin}" stroke-width="17" stroke-linecap="round" fill="none"/>`)}
        ${part('kiyafet', outfit(g('kiyafet').item, g('kiyafet').color))}
        ${part('ten', `<circle cx="98" cy="294" r="11" fill="${skin}"/><circle cx="202" cy="294" r="11" fill="${skin}"/><rect x="141" y="160" width="18" height="40" rx="6" fill="${skin}"/>`)}
      </g>
      <g transform="${HEAD}">
        ${part('ten', `<circle cx="92" cy="132" r="10" fill="${skin}"/><circle cx="208" cy="132" r="10" fill="${skin}"/><circle cx="150" cy="122" r="60" fill="${skin}"/>`)}
        <g data-part="ten">
          <ellipse cx="128" cy="132" rx="7" ry="9" fill="#2d2440"/><ellipse cx="172" cy="132" rx="7" ry="9" fill="#2d2440"/>
          <circle cx="130" cy="128" r="2.6" fill="#fff"/><circle cx="174" cy="128" r="2.6" fill="#fff"/>
          <circle cx="112" cy="148" r="10" fill="#ff8fa3" opacity=".5"/><circle cx="188" cy="148" r="10" fill="#ff8fa3" opacity=".5"/>
          <path d="M142 152 Q150 160 158 152" stroke="#3d3553" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        </g>
        ${part('sac', hairFront(g('sac').item, g('sac').color))}
        ${part('taki', accessory(g('taki').item, g('taki').color))}
      </g>
      <g transform="${BODY}">${part('elde', handheld(g('elde').item, g('elde').color))}</g>
    </g>
    ${part('hayvan', pet(g('hayvan').item, g('hayvan').color))}</g>
  </svg>`;
}

/* ---------------------------------------------------------------- screens */

let goHome: () => void = () => {};

export function showStage(home: () => void) {
  goHome = home;
  sfx.tap();
  const root = show(`
    <div class="screen stage-menu">
      <header class="bar"><button class="round-btn" data-act="home">⬅</button><h2>${genitive(progress.name)} Sahnesi</h2>${talkBtn('sahne')}</header>
      <div class="pill center-pill">⭐ ${progress.stars}</div>
      ${pendingGifts() > 0 ? `<button class="gift-btn" data-act="gift">🎁<b>${pendingGifts()}</b></button>` : ''}
      <div class="stage-choices">
        <button class="stage-card grape" data-act="dress">${dollSvg(look(), 'doll mini')}<span>👗</span></button>
        <button class="stage-card pink" data-act="paint">${imgTag('ui_boyama', '<span class="big">🖍️</span>', 'ui-img card-img')}<span>🎨</span></button>
      </div>
    </div>`);
  bindTalkButtons(root);
  on(root, 'home', goHome);
  on(root, 'dress', showDressUp);
  on(root, 'paint', showPaintMenu);
  on(root, 'gift', () => showGiftPicker(() => showStage(goHome)));
  void talk(pendingGifts() > 0 ? 'hediye' : 'sahne');
}

function showDressUp() {
  sfx.tap();
  let cat = CATS[0];
  const root = show(`
    <div class="screen dress">
      <header class="bar"><button class="round-btn" data-act="back">⬅</button><div class="pill">⭐ ${progress.stars}</div>${talkBtn('giydir')}</header>
      <div class="doll-wrap" data-act="doll"></div>
      <div class="cats">${CATS.map((c) => `<button class="cat" data-act="cat" data-c="${c.id}">${imgTag(`ui_kat_${c.id}`, CAT_ICONS[c.id] ?? c.icon)}</button>`).join('')}</div>
      <div class="items"></div>
      <div class="swatches"></div>
    </div>`);
  bindTalkButtons(root);
  const wrap = root.querySelector<HTMLElement>('.doll-wrap')!;
  const itemsEl = root.querySelector<HTMLElement>('.items')!;
  const swEl = root.querySelector<HTMLElement>('.swatches')!;

  const renderDoll = () => (wrap.innerHTML = dollSvg(look()));
  const renderPicker = () => {
    root.querySelectorAll('.cat').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.c === cat.id));
    const cur = look()[cat.id];
    itemsEl.innerHTML =
      cat.items.length > 1
        ? cat.items
            .map((it) => {
              const locked = !isUnlocked(cat.id, it.id);
              const preview = { ...look(), [cat.id]: { item: it.id, color: cur.color } };
              const inner = it.id === 'yok' ? '<span class="none">🚫</span>' : dollSvg(preview, 'doll thumb');
              return `<button class="item ${cur.item === it.id ? 'on' : ''} ${locked ? 'locked' : ''}" data-item="${it.id}">
                ${inner}${locked ? `<span class="lock">🎁</span>` : ''}</button>`;
            })
            .join('')
        : '';
    swEl.innerHTML = cat.colors.map((c) => `<button class="sw ${cur.color === c ? 'on' : ''}" data-color="${c}" style="background:${c}"></button>`).join('');
  };

  root.querySelectorAll<HTMLElement>('.cat').forEach((b) =>
    b.addEventListener('click', () => {
      sfx.tap();
      cat = CATS.find((c) => c.id === b.dataset.c)!;
      renderPicker();
      void talk(`kat_${cat.id}` as TalkId);
    }),
  );
  itemsEl.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-item]');
    if (!b) return;
    const it = cat.items.find((i) => i.id === b.dataset.item)!;
    if (!isUnlocked(cat.id, it.id)) {
      wiggle(b);
      const c = cat;
      readingChallenge(() => {
        progress.unlocked = [...(progress.unlocked ?? []), `${c.id}:${it.id}`];
        look()[c.id].item = it.id;
        commit();
        renderDoll();
        renderPicker();
        sparkle(wrap);
      });
      return;
    }
    look()[cat.id].item = it.id;
    commit();
    sfx.merge();
    renderDoll();
    renderPicker();
    sparkle(wrap);
  });
  swEl.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-color]');
    if (!b) return;
    look()[cat.id].color = b.dataset.color!;
    commit();
    sfx.tap();
    renderDoll();
    renderPicker();
  });
  // Bebeğin bir parçasına dokununca o parça seçilir (saç, ten, kıyafet…); arka plana dokununca zıplar.
  wrap.addEventListener('click', (e) => {
    const part = (e.target as Element).closest<SVGGElement>('[data-part]')?.dataset.part;
    if (part && part !== 'fon' && part !== cat.id) {
      cat = CATS.find((c) => c.id === part)!;
      sfx.tap();
      renderPicker();
      void talk(`kat_${cat.id}` as TalkId);
      wrap.querySelectorAll(`[data-part="${part}"]`).forEach((g) => g.animate([{ opacity: 1 }, { opacity: 0.4 }, { opacity: 1 }], { duration: 400 }));
      root.querySelector('.swatches')?.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.05)' }, { transform: 'scale(1)' }], { duration: 400 });
      return;
    }
    const body = wrap.querySelector('.doll-body');
    body?.animate(
      [{ transform: 'translateY(0)' }, { transform: 'translateY(-26px) rotate(-3deg)' }, { transform: 'translateY(0)' }, { transform: 'translateY(-12px) rotate(3deg)' }, { transform: 'translateY(0)' }],
      { duration: 700, easing: 'ease-out' },
    );
    sparkle(wrap);
    if (look().elde.item === 'mikrofon') sfx.sing();
    else sfx.merge();
  });
  on(root, 'back', () => showStage(goHome));
  renderDoll();
  renderPicker();
  void talk('giydir');
}

/* ------------------------------------------------------- gift & concert */

/** Okuma oyununda başarılı olunca: kilitli parçalardan 3 tanesi arasından birini seçer. */
export function showGiftPicker(after: () => void) {
  const locked = lockedItems();
  if (pendingGifts() <= 0 || locked.length === 0) {
    if (locked.length === 0 && pendingGifts() > 0) {
      progress.gifts = 0;
      commit();
    }
    return showConcert(after);
  }
  const offer = locked.sort(() => Math.random() - 0.5).slice(0, 3);
  const colorFor = (cat: string) => CATS.find((c) => c.id === cat)!.colors[Math.floor(Math.random() * 8)];
  const options = offer.map((o) => ({ ...o, color: colorFor(o.cat) }));
  const root = show(`
    <div class="screen gift-screen">
      <header class="bar"><span></span><div class="gift-title">🎁</div>${talkBtn('hediye')}</header>
      <div class="gift-options">
        ${options
          .map((o, i) => {
            const preview = { ...look(), [o.cat]: { item: o.item, color: o.color } };
            return `<button class="gift-option" data-i="${i}">${dollSvg(preview, 'doll')}<span class="gift-cat">${CATS.find((c) => c.id === o.cat)!.icon}</span></button>`;
          })
          .join('')}
      </div>
    </div>`);
  bindTalkButtons(root);
  let chosen = false;
  root.querySelectorAll<HTMLElement>('.gift-option').forEach((b) =>
    b.addEventListener('click', async () => {
      if (chosen) return;
      chosen = true;
      const o = options[Number(b.dataset.i)];
      progress.unlocked = [...(progress.unlocked ?? []), `${o.cat}:${o.item}`];
      look()[o.cat] = { item: o.item, color: o.color };
      progress.gifts = Math.max(0, pendingGifts() - 1);
      commit();
      root.querySelectorAll('.gift-option').forEach((x) => x !== b && x.classList.add('faded'));
      b.classList.add('picked');
      sfx.win();
      confetti();
      await talk('hediyeSecildi');
      await wait(300);
      showConcert(after);
    }),
  );
  void talk('hediye');
}

let song: SongHandle | null = null;

/** Bebeğin sahnede şarkı söylediği konser; sözler hece hece yanar. */
export function showConcert(after: () => void) {
  const lk = { ...look(), fon: { item: 'sahne', color: look().fon.item === 'sahne' ? look().fon.color : '#7b5cff' } };
  const lines = buildSong(progress.name, progress.known);
  const root = show(`
    <div class="screen concert">
      <div class="lights"><i></i><i></i><i></i></div>
      <div class="concert-doll">${dollSvg(lk)}</div>
      <div class="lyrics"><p class="lyric"></p></div>
      <div class="crowd">${['🧒', '👧', '👦', '👩', '👨', '👵', '👴', '🧑'].map((e, i) => `<span style="animation-delay:${i * 0.12}s">${e}</span>`).join('')}</div>
      <div class="concert-end hidden">
        <button class="big-btn grape-btn" data-act="again">🎤 🔁</button>
        <button class="big-btn ghost" data-act="done">🏠</button>
      </div>
    </div>`);
  const lyric = root.querySelector<HTMLElement>('.lyric')!;
  const dollEl = root.querySelector<HTMLElement>('.concert-doll')!;
  const renderLine = (li: number, si: number) => {
    const l = lines[li];
    // Heceleri kelime kelime grupla: satır kelimenin ortasından bölünmesin.
    let html = '<span class="w">';
    l.syl.forEach((sy, i) => {
      html += `<span class="${i < si ? 'sung' : i === si ? 'now' : ''}">${sy}</span>`;
      if (l.space[i]) html += i === l.syl.length - 1 ? '</span>' : '</span> <span class="w">';
    });
    lyric.innerHTML = html;
  };
  const finish = () => {
    song?.stop();
    song = null;
  };
  const leave = (fn: () => void) => {
    finish();
    stopVoice();
    fn();
  };
  on(root, 'done', () => leave(after));
  on(root, 'again', () => leave(() => showConcert(after)));
  dollEl.addEventListener('click', () => sparkle(dollEl));

  void (async () => {
    lyric.textContent = '🎤';
    await talk('konser');
    if (!root.isConnected) return;
    root.classList.add('playing');
    renderLine(0, -1);
    song = playSong(
      lines,
      (li, si) => {
        if (!root.isConnected) return finish();
        renderLine(li, si);
        if (si === 0) sparkle(dollEl);
      },
      async () => {
        song = null;
        if (!root.isConnected) return;
        root.classList.remove('playing');
        lyric.innerHTML = '👏 👏 👏';
        confetti();
        for (let i = 0; i < 3; i++) dollEl.appendChild(h('<span class="heart-float">💖</span>'));
        await talk('konserBitti');
        root.querySelector('.concert-end')?.classList.remove('hidden');
      },
    );
  })();
}

function sparkle(host: HTMLElement) {
  for (let i = 0; i < 6; i++) {
    const s = document.createElement('span');
    s.className = 'spark';
    s.textContent = ['✨', '⭐', '💖', '🎵'][i % 4];
    s.style.left = `${20 + Math.random() * 60}%`;
    s.style.top = `${15 + Math.random() * 50}%`;
    host.appendChild(s);
    setTimeout(() => s.remove(), 900);
  }
}

/* -------------------------------------------------------------- coloring */

interface Page {
  id: string;
  svg: () => string;
}

const R = (id: string, d: string) => `<path class="r" data-r="${id}" d="${d}"/>`;

const PAGES: Page[] = [
  {
    id: 'kale',
    svg: () => `
      ${R('gok', 'M0 0H400V270H0Z')}${R('cim', 'M0 270H400V400H0Z')}${R('gunes', 'M228 46a28 28 0 1 1 -56 0a28 28 0 1 1 56 0Z')}
      ${R('duvar', 'M130 170H270V320H130Z')}${R('k1', 'M60 140H130V320H60Z')}${R('k2', 'M270 140H340V320H270Z')}
      ${R('c1', 'M50 140L95 66L140 140Z')}${R('c2', 'M260 140L305 66L350 140Z')}${R('c3', 'M150 170L200 110L250 170Z')}
      ${R('b1', 'M95 66V30L125 40L95 50')}${R('b2', 'M305 66V30L335 40L305 50')}
      ${R('kapi', 'M176 320V262Q200 232 224 262V320Z')}
      ${R('p1', 'M109 200a14 14 0 1 1 -28 0a14 14 0 1 1 28 0Z')}${R('p2', 'M319 200a14 14 0 1 1 -28 0a14 14 0 1 1 28 0Z')}
      ${R('p3', 'M186 190H214V222H186Z')}
      ${R('yol', 'M176 320H224L250 400H150Z')}`,
  },
  {
    id: 'tac',
    svg: () => `
      ${R('arka', 'M0 0H400V400H0Z')}
      ${R('tac', 'M70 300L90 120L150 210L200 90L250 210L310 120L330 300Z')}
      ${R('bant', 'M70 300H330V350H70Z')}
      ${R('t1', 'M200 90a18 18 0 1 1 -0.1 0Z')}${R('t2', 'M90 120a14 14 0 1 1 -0.1 0Z')}${R('t3', 'M310 120a14 14 0 1 1 -0.1 0Z')}
      ${R('m1', 'M128 325a14 14 0 1 1 -28 0a14 14 0 1 1 28 0Z')}${R('m2', 'M214 325a14 14 0 1 1 -28 0a14 14 0 1 1 28 0Z')}${R('m3', 'M300 325a14 14 0 1 1 -28 0a14 14 0 1 1 28 0Z')}
      ${R('elmas', 'M200 220L225 255L200 290L175 255Z')}
      ${R('y1', 'M50 50l8 16 18 2 -13 12 4 18 -17 -9 -17 9 4 -18 -13 -12 18 -2Z')}${R('y2', 'M340 40l8 16 18 2 -13 12 4 18 -17 -9 -17 9 4 -18 -13 -12 18 -2Z')}`,
  },
  {
    id: 'cicek',
    svg: () => `
      ${R('arka', 'M0 0H400V400H0Z')}
      ${R('sap', 'M193 230H207V330H193Z')}
      ${R('y1', 'M193 290Q140 250 120 290Q150 320 193 300Z')}${R('y2', 'M207 270Q260 230 280 270Q250 300 207 280Z')}
      ${[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2;
        const x = 200 + Math.cos(a) * 62, y = 150 + Math.sin(a) * 62;
        return R(`p${i}`, `M${x + 40} ${y}a40 40 0 1 1 -80 0a40 40 0 1 1 80 0Z`);
      }).join('')}
      ${R('orta', 'M238 150a38 38 0 1 1 -76 0a38 38 0 1 1 76 0Z')}
      ${R('saksi', 'M140 330H260L245 395H155Z')}${R('kenar', 'M130 320H270V340H130Z')}`,
  },
  {
    id: 'dondurma',
    svg: () => `
      ${R('arka', 'M0 0H400V400H0Z')}
      ${R('kulah', 'M140 210L260 210L200 385Z')}
      ${R('top3', 'M265 150a52 52 0 1 1 -130 0a52 52 0 1 1 130 0Z')}
      ${R('top1', 'M200 210a48 48 0 1 1 -96 0a48 48 0 1 1 96 0Z')}${R('top2', 'M296 210a48 48 0 1 1 -96 0a48 48 0 1 1 96 0Z')}
      ${R('kiraz', 'M216 82a16 16 0 1 1 -32 0a16 16 0 1 1 32 0Z')}
      ${R('s1', 'M60 60l6 12 13 2 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -2Z')}${R('s2', 'M330 300l6 12 13 2 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -2Z')}`,
  },
  {
    id: 'kelebek',
    svg: () => `
      ${R('arka', 'M0 0H400V400H0Z')}
      ${R('k1', 'M195 190Q120 60 60 110Q30 190 195 205Z')}${R('k2', 'M205 190Q280 60 340 110Q370 190 205 205Z')}
      ${R('k3', 'M195 210Q80 230 100 310Q150 340 195 230Z')}${R('k4', 'M205 210Q320 230 300 310Q250 340 205 230Z')}
      ${R('n1', 'M135 140a18 18 0 1 1 -36 0a18 18 0 1 1 36 0Z')}${R('n2', 'M301 140a18 18 0 1 1 -36 0a18 18 0 1 1 36 0Z')}
      ${R('n3', 'M150 275a14 14 0 1 1 -28 0a14 14 0 1 1 28 0Z')}${R('n4', 'M278 275a14 14 0 1 1 -28 0a14 14 0 1 1 28 0Z')}
      ${R('govde', 'M188 130Q200 110 212 130L212 300Q200 320 188 300Z')}
      <path d="M195 125Q180 80 160 70M205 125Q220 80 240 70" stroke="#3d3553" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  },
  {
    id: 'isim',
    svg: () => {
      const name = progress.name.slice(0, 8);
      const size = Math.min(120, 560 / Math.max(3, name.length));
      const w = size * 0.62;
      const x0 = 200 - ((name.length - 1) * w) / 2;
      return `${R('arka', 'M0 0H400V400H0Z')}
        ${[...name].map((ch, i) => `<text class="r" data-r="h${i}" x="${x0 + i * w}" y="250" font-size="${size}" text-anchor="middle" font-family="Andika, sans-serif" font-weight="700">${ch}</text>`).join('')}
        ${R('kalp1', 'M70 110c-20 -30 -60 -5 0 35c60 -40 20 -65 0 -35Z')}${R('kalp2', 'M330 110c-20 -30 -60 -5 0 35c60 -40 20 -65 0 -35Z')}
        ${R('kalp3', 'M200 330c-16 -24 -48 -4 0 28c48 -32 16 -52 0 -28Z')}
        ${R('y1', 'M70 320l6 12 13 2 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -2Z')}${R('y2', 'M330 320l6 12 13 2 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -2Z')}`;
    },
  },
];

function pageSvg(p: Page, cls: string): string {
  const fills = progress.paintings?.[p.id] ?? {};
  const style = Object.entries(fills)
    .map(([r, c]) => `.pg-${p.id} [data-r="${r}"]{fill:${c}}`)
    .join('');
  return `<svg class="${cls} pg-${p.id}" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><style>${style}</style>${p.svg()}</svg>`;
}

function showPaintMenu() {
  sfx.tap();
  const root = show(`
    <div class="screen">
      <header class="bar"><button class="round-btn" data-act="back">⬅</button><h2>🎨</h2>${talkBtn('boyaSec')}</header>
      <div class="pages">${PAGES.map((p) => `<button class="page-thumb" data-act="page" data-p="${p.id}">${pageSvg(p, 'paint thumb')}</button>`).join('')}</div>
    </div>`);
  bindTalkButtons(root);
  on(root, 'back', () => showStage(goHome));
  on(root, 'page', (el) => showPaint(PAGES.find((p) => p.id === el.dataset.p)!));
  void talk('boyaSec');
}

function showPaint(page: Page) {
  sfx.tap();
  let color = PALETTE[0];
  const root = show(`
    <div class="screen paint-screen">
      <header class="bar"><button class="round-btn" data-act="back">⬅</button><button class="pill" data-act="done">🎉</button>${talkBtn('boya')}</header>
      <div class="canvas">${pageSvg(page, 'paint')}</div>
      <div class="swatches big">${PALETTE.filter((c) => c !== '#ffffff').map((c, i) => `<button class="sw ${i === 0 ? 'on' : ''}" data-color="${c}" style="background:${c}"></button>`).join('')}
        <button class="sw eraser" data-color="#ffffff" aria-label="Silgi">🧽</button></div>
    </div>`);
  bindTalkButtons(root);
  const svg = root.querySelector<SVGSVGElement>('svg.paint')!;
  root.querySelectorAll<HTMLElement>('.sw').forEach((b) =>
    b.addEventListener('click', () => {
      color = b.dataset.color!;
      root.querySelectorAll('.sw').forEach((x) => x.classList.remove('on'));
      b.classList.add('on');
      sfx.tap();
    }),
  );
  svg.addEventListener('click', (e) => {
    const r = (e.target as Element).closest<SVGElement>('[data-r]');
    if (!r) return;
    r.style.fill = color;
    progress.paintings ??= {};
    (progress.paintings[page.id] ??= {})[r.dataset.r!] = color;
    commit();
    sfx.paint();
  });
  on(root, 'back', showPaintMenu);
  on(root, 'done', async (el) => {
    bounce(el);
    confetti();
    sfx.win();
    await talk('boyaBitti');
  });
  void talk('boya');
}

