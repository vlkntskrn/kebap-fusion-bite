let ctx: AudioContext | null = null;

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

export const sfx = {
  tap: () => tone(660, 0.08, 0, 'triangle', 0.08),
  right: () => [784, 988, 1175].forEach((f, i) => tone(f, 0.25, i * 0.09)),
  // Yanlışta ceza hissi vermeyen yumuşak bir ses.
  soft: () => tone(330, 0.2, 0, 'sine', 0.08),
  merge: () => [523, 659].forEach((f, i) => tone(f, 0.18, i * 0.07, 'triangle', 0.1)),
  win: () => [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, 0.35, i * 0.12, 'triangle', 0.12)),
  /** iOS sesi ilk dokunuşta açmayı ister. */
  unlock: () => tone(1, 0.01, 0, 'sine', 0.0001),
};
