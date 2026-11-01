/**
 * Konser şarkısı: bu proje için yazılmış özgün söz ve melodi (telif sorunu yok).
 * Melodi, bas, akor ve davul Web Audio ile çalınır; sözler hece hece ekranda yanar.
 */
import { audioCtx } from './sfx';

const VOWELS = 'aeıioöuüAEIİOÖUÜ';

/** Türkçe heceleme: her hecede bir ünlü; iki ünlü arasındaki son ünsüz sonraki heceye geçer. */
export function syllabify(word: string): string[] {
  const chars = [...word];
  const vi = chars.map((c, i) => (VOWELS.includes(c) ? i : -1)).filter((i) => i >= 0);
  if (vi.length <= 1) return [word];
  const cuts: number[] = [];
  for (let k = 0; k < vi.length - 1; k++) {
    const a = vi[k],
      b = vi[k + 1];
    cuts.push(b - a - 1 === 0 ? b : b - 1);
  }
  const out: string[] = [];
  let start = 0;
  for (const c of cuts) {
    out.push(chars.slice(start, c).join(''));
    start = c;
  }
  out.push(chars.slice(start).join(''));
  return out;
}

export interface Line {
  /** Ekranda görünen heceler (her biri bir nota). */
  syl: string[];
  /** Hecenin kendinden sonra boşluk alıp almadığı (kelime sonu). */
  space: boolean[];
  chorus: boolean;
}

function line(text: string, chorus = false): Line {
  const syl: string[] = [];
  const space: boolean[] = [];
  for (const word of text.split(' ').filter(Boolean)) {
    const parts = syllabify(word);
    parts.forEach((p, i) => {
      syl.push(p);
      space.push(i === parts.length - 1);
    });
  }
  return { syl, space, chorus };
}

export function buildSong(name: string, letters: string[]): Line[] {
  const ls = letters.slice(-8);
  const letterLine: Line = { syl: ls.map((l, i) => (i === ls.length - 1 ? `${l}!` : `${l},`)), space: ls.map(() => true), chorus: false };
  return [
    line('Işıklar yandı, sahne hazır,'),
    line(`${name} geldi, herkes hazır!`),
    line('La la la, la la la, hep birlikte!', true),
    line('Harfler dans eder, hece hece.'),
    letterLine,
    line('Okumak ne güzel, değil mi?'),
    line('La la la, la la la, alkışlar sana!', true),
    line(`Aferin ${name}, sen bir yıldızsın!`),
  ];
}

/* ------------------------------------------------------------- melody */

const BPM = 112;
const BEAT = 60 / BPM;
const SCALE = [57, 60, 62, 64, 67, 69, 72, 74, 76]; // A3 C D E G A C5 D5 E5 (pentatonik)
const CHORDS: Record<string, number[]> = { C: [60, 64, 67], G: [55, 59, 62], Am: [57, 60, 64], F: [53, 57, 60] };
const PROG = [
  ['C', 'G'],
  ['Am', 'F'],
  ['C', 'G'],
  ['F', 'G'],
  ['C', 'Am'],
  ['F', 'G'],
  ['C', 'G'],
  ['F', 'C'],
];
const midi = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

interface Note {
  t: number; // vuruş
  d: number;
  m: number;
}

function melodyFor(l: Line, idx: number): Note[] {
  const n = l.syl.length;
  const d = n <= 6 ? 1 : 0.5;
  const notes: Note[] = [];
  const [c0, c1] = PROG[idx % PROG.length];
  let si = 4; // G4 civarından başla
  // Basit, tekrar eden bir kontur: yukarı-yukarı-aşağı… nakaratta sabit motif.
  const contour = idx % 2 === 0 ? [1, 1, -1, 1, 1, -1, -1, -1, 1, -1] : [-1, 1, 1, 1, -1, -1, 1, -1, -1, -1];
  const chorusMotif = [67, 67, 67, 69, 69, 69, 72, 69, 67, 64];
  for (let i = 0; i < n; i++) {
    const t = i * d;
    const chord = CHORDS[t < 4 ? c0 : c1];
    let m: number;
    if (l.chorus && i < chorusMotif.length) m = chorusMotif[i];
    else if (i === n - 1) {
      // Son hece: akorun kök ya da üçlüsüne otur.
      const target = chord.map((x) => (x < 60 ? x + 12 : x));
      m = target.reduce((best, x) => (Math.abs(x - SCALE[si]) < Math.abs(best - SCALE[si]) ? x : best), target[0]);
    } else {
      si = Math.max(1, Math.min(SCALE.length - 2, si + contour[i % contour.length]));
      m = SCALE[si];
      if (Number.isInteger(t)) {
        // Güçlü vuruşta en yakın akor sesine kay.
        const tones = chord.flatMap((x) => [x, x + 12]);
        m = tones.reduce((best, x) => (Math.abs(x - m) < Math.abs(best - m) ? x : best), tones[0]);
      }
    }
    const dur = i === n - 1 ? 8 - d * (n - 1) : d;
    notes.push({ t, d: dur, m });
  }
  return notes;
}

/* ------------------------------------------------------------ playback */

let noise: AudioBuffer | null = null;
function noiseBuf(ctx: AudioContext) {
  if (noise) return noise;
  noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const ch = noise.getChannelData(0);
  for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
  return noise;
}

export interface SongHandle {
  stop: () => void;
  duration: number;
}

/**
 * Şarkıyı çalar. onSyl(satır, hece) her hecenin başında çağrılır; onEnd şarkı bitince.
 */
export function playSong(lines: Line[], onSyl: (li: number, si: number) => void, onEnd: () => void): SongHandle {
  const ctx = audioCtx();
  const timers: number[] = [];
  if (!ctx) {
    onEnd();
    return { stop: () => {}, duration: 0 };
  }
  const master = ctx.createGain();
  master.gain.value = 0.9;
  master.connect(ctx.destination);
  const t0 = ctx.currentTime + 0.15;
  const intro = 8; // 2 ölçü giriş
  const at = (beat: number) => t0 + beat * BEAT;

  const osc = (type: OscillatorType, freq: number, start: number, dur: number, gain: number, dest: AudioNode = master) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, start);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(gain, start + 0.02);
    g.gain.setValueAtTime(gain, start + Math.max(0.03, dur * 0.6));
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(g).connect(dest);
    o.start(start);
    o.stop(start + dur + 0.05);
    return o;
  };
  const kick = (start: number) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.setValueAtTime(140, start);
    o.frequency.exponentialRampToValueAtTime(45, start + 0.15);
    g.gain.setValueAtTime(0.5, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + 0.2);
    o.connect(g).connect(master);
    o.start(start);
    o.stop(start + 0.25);
  };
  const hit = (start: number, freq: number, dur: number, gain: number) => {
    const s = ctx.createBufferSource();
    s.buffer = noiseBuf(ctx);
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    s.connect(f).connect(g).connect(master);
    s.start(start, Math.random() * 0.5, dur + 0.05);
  };

  const totalBeats = intro + lines.length * 8 + 2;
  // Davul ve bas tüm şarkı boyunca.
  for (let b = 0; b < totalBeats - 2; b++) {
    kick(at(b));
    if (b % 2 === 1) hit(at(b), 1800, 0.12, 0.35);
    hit(at(b + 0.5), 8000, 0.04, 0.08);
  }
  for (let li = -1; li < lines.length; li++) {
    const base = intro + li * 8;
    const prog = PROG[(li + PROG.length) % PROG.length];
    prog.forEach((name, half) => {
      const ch = CHORDS[name];
      const start = base + half * 4;
      if (start < 0) return;
      osc('triangle', midi(ch[0] - 24), at(start), BEAT * 1.9, 0.22);
      osc('triangle', midi(ch[0] - 24), at(start + 2), BEAT * 1.9, 0.22);
      ch.forEach((m) => osc('sine', midi(m), at(start), BEAT * 3.6, 0.035));
    });
  }
  // Melodi + ekrandaki hece senkronu.
  lines.forEach((l, li) => {
    melodyFor(l, li).forEach((n, si) => {
      const start = at(intro + li * 8 + n.t);
      const dur = Math.max(0.15, n.d * BEAT * 0.92);
      osc('triangle', midi(n.m), start, dur, 0.16);
      osc('sine', midi(n.m + 12), start, dur, 0.04);
      timers.push(window.setTimeout(() => onSyl(li, si), (start - ctx.currentTime) * 1000));
    });
  });
  // Sonda alkış.
  const end = at(totalBeats - 2);
  for (let i = 0; i < 40; i++) hit(end + Math.random() * 2.4, 1200 + Math.random() * 1500, 0.06, 0.12 + Math.random() * 0.15);
  timers.push(window.setTimeout(onEnd, (end + 2.6 - ctx.currentTime) * 1000));

  return {
    duration: end + 2.6 - ctx.currentTime,
    stop: () => {
      timers.forEach(clearTimeout);
      try {
        master.gain.setValueAtTime(0, ctx.currentTime);
        master.disconnect();
      } catch {
        /* zaten durdu */
      }
    },
  };
}
