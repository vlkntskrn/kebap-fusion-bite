import { GameState, LevelDef, MoveResult, Placement, SKEWER_SIZE, Column } from './types';
import { shuffle } from './rng';

export function cloneState(s: GameState): GameState {
  return {
    columns: s.columns.map((c) => ({ frozen: c.frozen, tiles: c.tiles.map((t) => ({ ...t })) })),
    queue: [...s.queue],
    active: s.active.map((o) => (o ? { ...o } : null)),
    tray: [...s.tray],
    trayCap: s.trayCap,
    served: s.served,
    totalOrders: s.totalOrders,
    status: s.status,
  };
}

export function createState(def: LevelDef): GameState {
  const s: GameState = {
    columns: def.columns.map((c) => ({ frozen: c.frozen, tiles: c.tiles.map((t) => ({ ...t })) })),
    queue: [...def.orders],
    active: new Array(def.activeSlots).fill(null),
    tray: [],
    trayCap: def.trayCap,
    served: 0,
    totalOrders: def.orders.length,
    status: 'playing',
  };
  for (let i = 0; i < s.active.length; i++) {
    const ing = s.queue.shift();
    s.active[i] = ing === undefined ? null : { ing, have: 0, n: i };
  }
  revealTops(s.columns);
  return s;
}

function revealTops(columns: Column[]) {
  for (const c of columns) {
    const top = c.tiles[c.tiles.length - 1];
    if (top && c.frozen === 0) top.hidden = false;
  }
}

export function canPick(s: GameState, col: number): boolean {
  const c = s.columns[col];
  return s.status === 'playing' && !!c && c.frozen === 0 && c.tiles.length > 0;
}

/** Slot of the active order that should receive this ingredient (fullest first), or -1. */
function targetSlot(s: GameState, ing: number): number {
  let best = -1;
  for (let i = 0; i < s.active.length; i++) {
    const o = s.active[i];
    if (o && o.ing === ing && o.have < SKEWER_SIZE) {
      if (best === -1 || o.have > s.active[best]!.have) best = i;
    }
  }
  return best;
}

/** Serve any finished orders, bring in new customers and let them grab matching tray items. */
function resolve(s: GameState): number {
  let completed = 0;
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < s.active.length; i++) {
      const o = s.active[i];
      if (o && o.have >= SKEWER_SIZE) {
        completed++;
        s.served++;
        for (const c of s.columns) if (c.frozen > 0) c.frozen--;
        const next = s.queue.shift();
        s.active[i] = next === undefined ? null : { ing: next, have: 0, n: s.totalOrders - s.queue.length - 1 };
        changed = true;
      }
    }
    // New customers take what they need from the tray.
    for (let i = 0; i < s.active.length; i++) {
      const o = s.active[i];
      if (!o) continue;
      for (let k = 0; k < s.tray.length && o.have < SKEWER_SIZE; ) {
        if (s.tray[k] === o.ing) {
          s.tray.splice(k, 1);
          o.have++;
          changed = true;
        } else k++;
      }
    }
  }
  revealTops(s.columns);
  if (s.active.every((o) => o === null) && s.queue.length === 0) s.status = 'won';
  return completed;
}

export function pick(prev: GameState, col: number): MoveResult | null {
  if (!canPick(prev, col)) return null;
  const s = cloneState(prev);
  const tile = s.columns[col].tiles.pop()!;
  const ing = tile.ing;
  let placement: Placement;
  const slot = targetSlot(s, ing);
  if (slot >= 0) {
    const o = s.active[slot]!;
    placement = { kind: 'order', slot, index: o.have };
    o.have++;
  } else if (s.tray.length < s.trayCap) {
    placement = { kind: 'tray', index: s.tray.length };
    s.tray.push(ing);
  } else {
    placement = { kind: 'overflow' };
    s.status = 'lost';
    return { state: s, ing, placement, completed: 0 };
  }
  const completed = resolve(s);
  // Deadlock: only frozen crates left and nobody can be served.
  if (s.status === 'playing' && !s.columns.some((_, i) => canPick(s, i))) s.status = 'lost';
  return { state: s, ing, placement, completed };
}

/** Booster: shuffle all tiles between open crates, keeping each crate's height. */
export function shuffleBoard(prev: GameState, r: () => number): GameState {
  const s = cloneState(prev);
  const open = s.columns.filter((c) => c.frozen === 0);
  const pool = shuffle(open.flatMap((c) => c.tiles), r);
  let k = 0;
  for (const c of open) for (let i = 0; i < c.tiles.length; i++) c.tiles[i] = pool[k++];
  revealTops(s.columns);
  return s;
}

/** Booster / continue: extra tray space. */
export function addTraySlots(prev: GameState, n: number): GameState {
  const s = cloneState(prev);
  s.trayCap += n;
  if (s.status === 'lost') s.status = 'playing';
  return s;
}

export function remainingTiles(s: GameState): number {
  return s.columns.reduce((n, c) => n + c.tiles.length, 0);
}
