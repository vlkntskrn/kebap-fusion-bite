import { describe, it, expect } from 'vitest';
import { getLevel, solve, paramsFor } from './levels';
import { createState, pick, addTraySlots } from './engine';
import { SKEWER_SIZE } from './types';

describe('levels', () => {
  it('first 150 levels are generated, consistent and solvable', () => {
    for (let l = 1; l <= 150; l++) {
      const def = getLevel(l);
      const counts = new Map<number, number>();
      for (const c of def.columns) for (const t of c.tiles) counts.set(t.ing, (counts.get(t.ing) ?? 0) + 1);
      const need = new Map<number, number>();
      for (const o of def.orders) need.set(o, (need.get(o) ?? 0) + SKEWER_SIZE);
      expect(counts, `level ${l}`).toEqual(need);
      expect(solve(def, 200000), `level ${l} solvable`).toBe(true);
    }
  }, 120_000);

  it('is deterministic', () => {
    expect(JSON.stringify(getLevel(42))).toBe(JSON.stringify(getLevel(42)));
  });

  it('difficulty grows', () => {
    expect(paramsFor(50).orders).toBeGreaterThan(paramsFor(1).orders);
    expect(paramsFor(50).types).toBeGreaterThan(paramsFor(1).types);
  });
});

describe('engine', () => {
  const def = {
    level: 0,
    activeSlots: 1,
    trayCap: 1,
    orders: [0, 1],
    columns: [
      { frozen: 0, tiles: [{ ing: 0, hidden: false }, { ing: 0, hidden: false }, { ing: 0, hidden: false }] },
      { frozen: 1, tiles: [{ ing: 1, hidden: true }, { ing: 1, hidden: false }, { ing: 1, hidden: false }] },
    ],
  };

  it('serves orders, thaws crates and wins', () => {
    let s = createState(def);
    expect(pick(s, 1)).toBeNull(); // frozen
    for (let i = 0; i < 3; i++) s = pick(s, 0)!.state;
    expect(s.served).toBe(1);
    expect(s.columns[1].frozen).toBe(0);
    for (let i = 0; i < 3; i++) s = pick(s, 1)!.state;
    expect(s.status).toBe('won');
  });

  it('tray overflow loses, extra slots continue', () => {
    let s = createState({ ...def, columns: [def.columns[1], def.columns[0]].map((c) => ({ ...c, frozen: 0 })) });
    s = pick(s, 0)!.state; // ing 1 -> tray (order wants 0)
    expect(s.tray).toEqual([1]);
    const lost = pick(s, 0)!;
    expect(lost.state.status).toBe('lost');
    const cont = pick(addTraySlots(s, 2), 0)!.state;
    expect(cont.status).toBe('playing');
    expect(cont.tray).toEqual([1, 1]);
  });

  it('new customer takes items from the tray', () => {
    let s = createState({ ...def, columns: [def.columns[1], def.columns[0]].map((c) => ({ ...c, frozen: 0 })), trayCap: 5 });
    for (let i = 0; i < 3; i++) s = pick(s, 0)!.state; // three 1s into tray
    for (let i = 0; i < 3; i++) s = pick(s, 1)!.state; // serve 0, next order (1) takes tray
    expect(s.status).toBe('won');
  });
});
