import { useContext } from "react";
import { Cell } from "../../types";
import { GridContext } from "./GridContextProvider";

function useGridContext() {
  const gridContext = useContext(GridContext);

  const { setGrid } = gridContext;

  const updateCell = (cell: Cell) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[cell.x][cell.y] = cell;
      return newGrid;
    });
  };

  return {
    ...gridContext,
    updateCell,
  };
}

export { useGridContext };
