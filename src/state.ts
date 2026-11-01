export interface Progress {
  name: string;
  /** Kayıt olmayan talimatları telefonun Türkçe sesi okusun mu. */
  tts: boolean;
  known: string[];
  stars: number;
  stickers: string[];
  /** Harf/hece/kelime başına doğru-yanlış sayısı; zorlandığı öğeler daha sık sorulur. */
  stats: Record<string, { ok: number; miss: number }>;
  /** Defne'nin Sahnesi: bebeğin seçili kıyafetleri ve boyama sayfalarının renkleri. */
  doll?: Record<string, { item: string; color: string }>;
  /** Hediyeyle açılmış bebek parçaları ("kategori:parça"). */
  unlocked?: string[];
  /** Henüz seçilmemiş hediye sayısı. */
  gifts?: number;
  paintings?: Record<string, Record<string, string>>;
}

const KEY = 'hece-hece-v1';
const DEFAULT: Progress = { name: 'Defne', tts: true, known: ['e', 'n', 'a', 't', 'i'], stars: 0, stickers: [], stats: {} };

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...DEFAULT, ...JSON.parse(raw) };
  } catch {
    /* depolama yoksa varsayılanla devam */
  }
  return structuredClone(DEFAULT);
}

export function saveProgress(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* yoksay */
  }
}

export function record(p: Progress, item: string, ok: boolean) {
  const s = (p.stats[item] ??= { ok: 0, miss: 0 });
  if (ok) s.ok++;
  else s.miss++;
}

/** Zorlanılan öğeler daha ağır basar. */
export function weightedPick<T>(items: T[], id: (t: T) => string, p: Progress, avoid?: T): T {
  const pool = items.length > 1 && avoid !== undefined ? items.filter((i) => i !== avoid) : items;
  const w = pool.map((i) => {
    const s = p.stats[id(i)];
    return s ? 1 + (s.miss * 2) / (1 + s.ok * 0.5) : 1.5;
  });
  let r = Math.random() * w.reduce((a, b) => a + b, 0);
  for (let i = 0; i < pool.length; i++) if ((r -= w[i]) <= 0) return pool[i];
  return pool[pool.length - 1];
}

export function shuffle<T>(a: T[]): T[] {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Uygulama genelinde tek ilerleme kaydı. */
export const progress = loadProgress();
export const commit = () => saveProgress(progress);
