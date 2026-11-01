let ctx: AudioContext | null = null;
export let soundOn = true;
export let vibrationOn = true;

export function setSound(on: boolean) {
  soundOn = on;
}
export function setVibration(on: boolean) {
  vibrationOn = on;
}

function ac(): AudioContext | null {
  if (!soundOn) return null;
  try {
    ctx ??= new AudioContext();
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tone(freq: number, dur: number, type: OscillatorType = 'sine', gain = 0.12, when = 0) {
  const a = ac();
  if (!a) return;
  const t = a.currentTime + when;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + dur);
}

function buzz(ms: number | number[]) {
  if (vibrationOn && 'vibrate' in navigator) {
    try {
      navigator.vibrate(ms);
    } catch {
      /* ignore */
    }
  }
}

export const sfx = {
  pick: () => {
    tone(520, 0.08, 'triangle');
    buzz(10);
  },
  tray: () => tone(300, 0.1, 'triangle', 0.08),
  serve: () => {
    tone(660, 0.1, 'sine', 0.12);
    tone(880, 0.14, 'sine', 0.12, 0.08);
    buzz(25);
  },
  win: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.25, 'triangle', 0.12, i * 0.12)),
  lose: () => {
    [400, 320, 240].forEach((f, i) => tone(f, 0.25, 'sawtooth', 0.06, i * 0.15));
    buzz([60, 40, 60]);
  },
  click: () => tone(440, 0.05, 'square', 0.04),
  coin: () => tone(1200, 0.08, 'sine', 0.08),
};
