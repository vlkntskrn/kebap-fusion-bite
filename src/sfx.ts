let ctx: AudioContext | null = null;

export function audioCtx(): AudioContext | null {
  return ac();
}

function ac(): AudioContext | null {
  try {
    ctx ??= new AudioContext();
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tone(freq: number, dur: number, when = 0, type: OscillatorType = 'sine', gain = 0.15) {
  const a = ac();
  if (!a) return;
  const t = a.currentTime + when;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + dur + 0.05);
}

/** Kısa beyaz gürültü (su, cızırtı, ısırma sesleri için). */
function noise(dur: number, when = 0, gain = 0.12, type: BiquadFilterType = 'bandpass', freq = 1200, q = 1) {
  const a = ac();
  if (!a) return;
  const t = a.currentTime + when;
  const len = Math.max(1, Math.floor(a.sampleRate * dur));
  const buf = a.createBuffer(1, len, a.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  const src = a.createBufferSource();
  src.buffer = buf;
  const f = a.createBiquadFilter();
  f.type = type;
  f.frequency.value = freq;
  f.Q.value = q;
  const g = a.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.03);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f).connect(g).connect(a.destination);
  src.start(t);
  src.stop(t + dur + 0.05);
}

/** Frekansı kayan ton (miyav, gıcırtı). */
function sweep(f0: number, f1: number, dur: number, when = 0, type: OscillatorType = 'sine', gain = 0.12, f2?: number) {
  const a = ac();
  if (!a) return;
  const t = a.currentTime + when;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f0, t);
  if (f2) {
    o.frequency.linearRampToValueAtTime(f1, t + dur * 0.4);
    o.frequency.linearRampToValueAtTime(f2, t + dur);
  } else o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.03);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + dur + 0.05);
}

export const sfx = {
  tap: () => tone(660, 0.08, 0, 'triangle', 0.08),
  right: () => [784, 988, 1175].forEach((f, i) => tone(f, 0.25, i * 0.09)),
  // Yanlışta ceza hissi vermeyen yumuşak bir ses.
  soft: () => tone(330, 0.2, 0, 'sine', 0.08),
  merge: () => [523, 659].forEach((f, i) => tone(f, 0.18, i * 0.07, 'triangle', 0.1)),
  win: () => [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, 0.35, i * 0.12, 'triangle', 0.12)),
  paint: () => tone(880 + Math.random() * 300, 0.12, 0, 'sine', 0.08),
  /** Bebek mikrofonla "şarkı söyler": rastgele neşeli bir melodi. */
  sing: () => {
    const scale = [523, 587, 659, 784, 880, 1046];
    for (let i = 0; i < 6; i++) tone(scale[Math.floor(Math.random() * scale.length)], 0.22, i * 0.16, 'triangle', 0.1);
  },
  /** Ev sesleri */
  door: () => {
    sweep(180, 260, 0.35, 0, 'sawtooth', 0.04, 150);
    tone(520, 0.08, 0.32, 'triangle', 0.06);
  },
  close: () => {
    noise(0.08, 0, 0.12, 'lowpass', 400);
    tone(140, 0.12, 0, 'sine', 0.1);
  },
  water: () => {
    noise(1.2, 0, 0.08, 'bandpass', 1400, 0.6);
    for (let i = 0; i < 6; i++) sweep(500 + Math.random() * 500, 1200 + Math.random() * 600, 0.07, 0.1 + i * 0.16, 'sine', 0.05);
  },
  splash: () => {
    noise(0.5, 0, 0.14, 'bandpass', 900, 0.7);
    sweep(300, 900, 0.15, 0.05, 'sine', 0.06);
  },
  bubbles: () => {
    for (let i = 0; i < 8; i++) sweep(400 + Math.random() * 400, 900 + Math.random() * 700, 0.06, i * 0.09 + Math.random() * 0.05, 'sine', 0.06);
  },
  chomp: () => {
    noise(0.07, 0, 0.16, 'bandpass', 700, 1.5);
    noise(0.07, 0.16, 0.14, 'bandpass', 600, 1.5);
    tone(880, 0.1, 0.32, 'triangle', 0.05);
  },
  yum: () => [659, 784, 988].forEach((f, i) => tone(f, 0.15, i * 0.08, 'triangle', 0.08)),
  sizzle: () => noise(1.4, 0, 0.05, 'highpass', 3500, 0.5),
  click: () => {
    tone(1800, 0.03, 0, 'square', 0.04);
    tone(900, 0.03, 0.03, 'square', 0.03);
  },
  night: () => [784, 659, 523, 392].forEach((f, i) => tone(f, 0.3, i * 0.12, 'sine', 0.07)),
  day: () => [392, 523, 659, 784].forEach((f, i) => tone(f, 0.25, i * 0.1, 'triangle', 0.07)),
  sleep: () => [523, 440, 392].forEach((f, i) => tone(f, 0.4, i * 0.25, 'sine', 0.05)),
  sit: () => {
    sweep(300, 180, 0.15, 0, 'sine', 0.08);
  },
  whoosh: () => noise(0.5, 0, 0.1, 'bandpass', 900, 0.4),
  meow: () => sweep(600, 820, 0.55, 0, 'triangle', 0.08, 520),
  woof: () => {
    sweep(320, 160, 0.14, 0, 'square', 0.06);
    sweep(320, 160, 0.14, 0.22, 'square', 0.06);
  },
  quack: () => {
    sweep(700, 500, 0.12, 0, 'sawtooth', 0.05);
    sweep(700, 500, 0.12, 0.18, 'sawtooth', 0.05);
  },
  tweet: () => {
    for (let i = 0; i < 3; i++) sweep(2200, 3200, 0.08, i * 0.12, 'sine', 0.06);
  },
  squeak: () => {
    sweep(1500, 2200, 0.08, 0, 'sine', 0.06);
    sweep(1600, 2400, 0.08, 0.12, 'sine', 0.06);
  },
  neigh: () => sweep(500, 900, 0.7, 0, 'sawtooth', 0.04, 400),
  /** iOS sesi ilk dokunuşta açmayı ister. */
  unlock: () => tone(1, 0.01, 0, 'sine', 0.0001),
};
