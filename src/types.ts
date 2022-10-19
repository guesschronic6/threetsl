export type Grid = Cell[][];

export type Cell = {
  x: number;
  y: number;
  state: CellState;
};

export enum CellState {
  NONE,
  OBSTACLE,
  START,
  END,
  PATH,
  OPEN,
  CLOSE,
}
