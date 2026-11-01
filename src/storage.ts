export interface Save {
  level: number;
  coins: number;
  sound: boolean;
  vibration: boolean;
  boosters: { undo: number; shuffle: number; slot: number };
  seenFeatures: string[];
  lastDaily: string;
  noAds: boolean;
}

const KEY = 'kfb-save-v1';

const DEFAULT: Save = {
  level: 1,
  coins: 200,
  sound: true,
  vibration: true,
  boosters: { undo: 2, shuffle: 1, slot: 1 },
  seenFeatures: [],
  lastDaily: '',
  noAds: false,
};

export function load(): Save {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw);
      return { ...DEFAULT, ...s, boosters: { ...DEFAULT.boosters, ...(s.boosters ?? {}) } };
    }
  } catch {
    /* storage unavailable – play without saving */
  }
  return structuredClone(DEFAULT);
}

export function save(s: Save) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export function reset(): Save {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  return structuredClone(DEFAULT);
}
