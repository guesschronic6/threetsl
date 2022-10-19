import clsx from "clsx";
import { Cell, CellState } from "../../types";

type GridCellProps = {
  cell: Cell;
  handleOnMouseDown: () => void;
  handleOnMouseOver: (cell: Cell) => void;
};

const GridCell: React.FunctionComponent<GridCellProps> = (props) => {
  const { cell, handleOnMouseDown, handleOnMouseOver } = props;
  return (
    <div
      className={clsx(cell.state == CellState.OBSTACLE && "obstacle")}
      onMouseDown={() => {
        handleOnMouseDown();
        handleOnMouseOver(cell);
      }}
      onMouseOver={() => {
        handleOnMouseOver(cell);
      }}
    ></div>
  );
};

export { GridCell };
