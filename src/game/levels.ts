import { Column, GameState, Ing, LevelDef, SKEWER_SIZE, Tile, INGREDIENTS } from './types';
import { rng, randInt, shuffle } from './rng';
import { createState, pick, canPick } from './engine';

export interface LevelParams {
  types: number;
  orders: number;
  columns: number;
  activeSlots: number;
  trayCap: number;
  /** 0..1 — how far items drift from the order they are needed in. */
  noise: number;
  hiddenRatio: number;
  frozenCrates: number;
}

/** First level where each special mechanic appears (used for intro popups). */
export const FEATURE_LEVELS = { hidden: 6, frozen: 11 } as const;

export function paramsFor(level: number): LevelParams {
  const L = Math.max(1, level);
  // Gentle saw-tooth: every 5th level is a little harder, the next one a breather.
  const spike = L % 5 === 0 ? 1 : 0;
  const ramp = Math.min(1, (L - 1) / 25);
  const late = Math.min(1, Math.max(0, (L - 25) / 75));
  return {
    types: Math.min(INGREDIENTS.length, 3 + Math.floor((L - 1) / 4)),
    orders: Math.min(30, 4 + Math.floor(L * 0.6) + spike * 2),
    columns: Math.min(7, 4 + Math.floor((L - 1) / 8)),
    activeSlots: L <= 2 ? 2 : 3,
    trayCap: 5,
    noise: Math.min(0.8, 0.12 + ramp * 0.4 + late * 0.08 + spike * 0.12),
    hiddenRatio: L >= FEATURE_LEVELS.hidden ? Math.min(0.35, 0.1 + (L - FEATURE_LEVELS.hidden) * 0.01) : 0,
    frozenCrates: L >= FEATURE_LEVELS.frozen ? (L >= 30 ? 2 : 1) : 0,
  };
}

function buildOrders(p: LevelParams, r: () => number): Ing[] {
  const pool = shuffle(INGREDIENTS.map((i) => i.id), r).slice(0, p.types);
  const orders: Ing[] = [];
  // Every chosen type appears at least once.
  for (let i = 0; i < p.orders; i++) orders.push(i < pool.length ? pool[i] : pool[Math.floor(r() * pool.length)]);
  return shuffle(orders, r);
}

function buildColumns(orders: Ing[], p: LevelParams, r: () => number): Column[] {
  // Items in the sequence they are (roughly) needed.
  const items: Ing[] = [];
  for (const o of orders) for (let k = 0; k < SKEWER_SIZE; k++) items.push(o);
  // Local shuffle: each item may move up to `window` places.
  const window = Math.max(1, Math.round(p.noise * Math.min(items.length, 36) * 0.5));
  const keyed = items.map((ing, i) => ({ ing, key: i + r() * window }));
  keyed.sort((a, b) => a.key - b.key);

  // Deal top-down: early items end up near the top of crates.
  const topDown: Ing[][] = Array.from({ length: p.columns }, () => []);
  const cap = Math.ceil(items.length / p.columns) + 1;
  for (const { ing } of keyed) {
    let c = Math.floor(r() * p.columns);
    while (topDown[c].length >= cap) c = (c + 1) % p.columns;
    topDown[c].push(ing);
  }
  const columns: Column[] = topDown.map((col) => ({
    frozen: 0,
    tiles: col.reverse().map<Tile>((ing) => ({ ing, hidden: false })),
  }));

  // Hidden tiles (never the top tile, so the start is readable).
  if (p.hiddenRatio > 0) {
    for (const c of columns) {
      for (let i = 0; i < c.tiles.length - 1; i++) if (r() < p.hiddenRatio) c.tiles[i].hidden = true;
    }
  }
  // Frozen crates: choose among the taller ones.
  if (p.frozenCrates > 0) {
    const idx = columns
      .map((c, i) => ({ i, n: c.tiles.length }))
      .filter((x) => x.n > 0)
      .sort((a, b) => b.n - a.n)
      .slice(0, p.frozenCrates + 1)
      .map((x) => x.i);
    shuffle(idx, r)
      .slice(0, p.frozenCrates)
      .forEach((i, k) => (columns[i].frozen = randInt(r, 2, 3) + k * 2));
  }
  return columns;
}

/**
 * Depth-first search with a node budget. Returns true when the level can be cleared.
 * Moves that feed a waiting customer are tried first.
 */
export function solve(def: LevelDef, budget = 20000): boolean {
  const seen = new Set<string>();
  let nodes = 0;
  const key = (s: GameState) =>
    s.columns.map((c) => c.tiles.length).join(',') + '|' + [...s.tray].sort().join('') + '|' + s.trayCap;

  const dfs = (s: GameState): boolean => {
    if (s.status === 'won') return true;
    if (s.status === 'lost' || ++nodes > budget) return false;
    const k = key(s);
    if (seen.has(k)) return false;
    seen.add(k);
    const moves: { col: number; score: number }[] = [];
    const tried = new Set<string>();
    for (let i = 0; i < s.columns.length; i++) {
      if (!canPick(s, i)) continue;
      const c = s.columns[i];
      const ing = c.tiles[c.tiles.length - 1].ing;
      const sig = ing + ':' + c.tiles.length + ':' + c.frozen;
      if (tried.has(sig)) continue;
      tried.add(sig);
      const feeds = s.active.some((o) => o && o.ing === ing && o.have < SKEWER_SIZE);
      const soon = s.queue.indexOf(ing);
      moves.push({ col: i, score: (feeds ? 1000 : 0) - (soon < 0 ? 500 : soon) + c.tiles.length });
    }
    moves.sort((a, b) => b.score - a.score);
    for (const m of moves) {
      const res = pick(s, m.col);
      if (res && dfs(res.state)) return true;
    }
    return false;
  };
  return dfs(createState(def));
}

/**
 * Share of games a casual "mostly obvious moves" bot wins. Humans plan better than the bot,
 * so a 50% bot rate still feels fair to players while making boosters valuable.
 */
export function targetWinRate(level: number): number {
  if (level <= 5) return 1;
  const spike = level % 5 === 0 ? 0.15 : 0;
  if (level <= 14) return 0.9 - spike;
  if (level <= 30) return 0.75 - spike;
  if (level <= 60) return 0.6 - spike;
  return 0.5 - spike;
}

export function botWinRate(def: LevelDef, runs: number, seed = 1): number {
  let wins = 0;
  for (let k = 0; k < runs; k++) {
    const r = rng(seed * 31 + k + 1);
    let s = createState(def);
    while (s.status === 'playing') {
      const opts: number[] = [];
      const feed: number[] = [];
      for (let i = 0; i < s.columns.length; i++) {
        if (!canPick(s, i)) continue;
        opts.push(i);
        const c = s.columns[i];
        const ing = c.tiles[c.tiles.length - 1].ing;
        if (s.active.some((o) => o && o.ing === ing && o.have < SKEWER_SIZE)) feed.push(i);
      }
      const from = feed.length && r() < 0.85 ? feed : opts;
      s = pick(s, from[Math.floor(r() * from.length)])!.state;
    }
    if (s.status === 'won') wins++;
  }
  return wins / runs;
}

const cache = new Map<number, LevelDef>();

export function getLevel(level: number): LevelDef {
  const hit = cache.get(level);
  if (hit) return hit;
  const base = paramsFor(level);
  // Build several solvable candidates and keep the one whose difficulty is closest to the target.
  const target = targetWinRate(level);
  let def: LevelDef | null = null;
  let bestGap = Infinity;
  let solvable = 0;
  for (let attempt = 0; attempt < 40 && solvable < 8; attempt++) {
    const scale = 0.5 + ((attempt % 8) / 7) * 0.9;
    const p = { ...base, noise: Math.max(0.05, base.noise * scale) };
    const r = rng(level * 7919 + attempt * 104729);
    const orders = buildOrders(p, r);
    const candidate: LevelDef = {
      level,
      columns: buildColumns(orders, p, r),
      orders,
      activeSlots: p.activeSlots,
      trayCap: p.trayCap,
    };
    if (!solve(candidate)) continue;
    solvable++;
    const gap = Math.abs(botWinRate(candidate, 40, level) - target);
    if (gap < bestGap) {
      bestGap = gap;
      def = candidate;
    }
  }
  if (!def) {
    // Fallback that is always solvable: no noise, one item per order in sequence.
    const p = { ...base, noise: 0, hiddenRatio: 0, frozenCrates: 0 };
    const r = rng(level);
    const orders = buildOrders(p, r);
    def = { level, columns: buildColumns(orders, p, r), orders, activeSlots: p.activeSlots, trayCap: p.trayCap };
  }
  cache.set(level, def);
  return def;
}
