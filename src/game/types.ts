/** Ingredient id: index into INGREDIENTS. */
export type Ing = number;

export interface Ingredient {
  id: Ing;
  name: string;
  emoji: string;
  color: string;
}

export const INGREDIENTS: Ingredient[] = [
  { id: 0, name: 'Domates', emoji: '🍅', color: '#ff6b5e' },
  { id: 1, name: 'Biber', emoji: '🫑', color: '#5fcf6a' },
  { id: 2, name: 'Soğan', emoji: '🧅', color: '#d9a46b' },
  { id: 3, name: 'Et', emoji: '🥩', color: '#e0566f' },
  { id: 4, name: 'Patlıcan', emoji: '🍆', color: '#9b6bdf' },
  { id: 5, name: 'Tavuk', emoji: '🍗', color: '#f2b544' },
  { id: 6, name: 'Mantar', emoji: '🍄', color: '#c98a7a' },
  { id: 7, name: 'Mısır', emoji: '🌽', color: '#f5d742' },
];

/** Items needed to finish one skewer order. */
export const SKEWER_SIZE = 3;

export interface Tile {
  ing: Ing;
  /** Hidden tiles show "?" until they become the top of their crate. */
  hidden: boolean;
}

export interface Column {
  /** Bottom → top. The last element is the one the player can take. */
  tiles: Tile[];
  /** Number of orders that must still be served before this crate thaws. 0 = open. */
  frozen: number;
}

export interface Order {
  ing: Ing;
  have: number;
  /** Sequence number of this customer within the level (stable id for the UI). */
  n: number;
}

export interface LevelDef {
  level: number;
  columns: Column[];
  /** Ingredient of every order, in the order customers arrive. */
  orders: Ing[];
  activeSlots: number;
  trayCap: number;
}

export interface GameState {
  columns: Column[];
  queue: Ing[];
  active: (Order | null)[];
  tray: Ing[];
  trayCap: number;
  served: number;
  totalOrders: number;
  status: 'playing' | 'won' | 'lost';
}

/** Where a picked item ended up, used by the UI for animation. */
export type Placement =
  | { kind: 'order'; slot: number; index: number }
  | { kind: 'tray'; index: number }
  | { kind: 'overflow' };

export interface MoveResult {
  state: GameState;
  ing: Ing;
  placement: Placement;
  /** Order slots that were completed (served) during this move, including cascades. */
  completed: number;
}
