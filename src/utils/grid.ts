import { Cell, CellState, Grid } from "../types";

function create(width: number, height: number): Grid {
  const grid: Grid = [];
  for (let rowNum = 0; rowNum < height; rowNum++) {
    const row: Cell[] = [];
    for (let colNum = 0; colNum < width; colNum++) {
      row.push({
        x: rowNum,
        y: colNum,
        state: CellState.NONE,
      });
    }
    grid.push(row);
  }
  return grid;
}

export { create };
