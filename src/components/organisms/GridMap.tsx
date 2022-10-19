import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";
import { Grid } from "react-virtualized";
import { Cell, CellState } from "../../types";
import { useGridContext } from "../contexts";

let isMouseDown = false;

const GridMap: React.FunctionComponent<{}> = (props) => {
  const { grid, setGrid, updateCell } = useGridContext();
  const classes = useStyles();

  function handleOnMouseDown() {
    isMouseDown = true;
  }

  function handleOnMouseUp() {
    isMouseDown = false;
  }

  function handleOnMouseOver(cell: Cell) {
    if (!isMouseDown) return;
    console.log("updateCell:", cell.x, cell.y);
    cell.state = CellState.OBSTACLE;
    updateCell(cell);
  }

  function cellRenderer(params: any) {
    const { columnIndex, rowIndex, key, style } = params;
    return (
      <div key={key} style={style} className={clsx(classes.cell)}>
        {`${rowIndex},${columnIndex}`}
      </div>
    );
  }

  return (
    <div
      className={clsx(classes.root)}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
    >
      <>
        <Grid
          cellRenderer={cellRenderer}
          columnCount={50}
          columnWidth={25}
          height={300}
          rowCount={5}
          rowHeight={25}
          width={300}
        />
      </>
      {/* <div className="grid">
        {grid.map((row, index) => {
          return (
            <div key={`row:${index}`} className="grid-row">
              {row.map((cell) => (
                <GridCell
                  key={`${cell.x}.${cell.y}`}
                  cell={cell}
                  handleOnMouseDown={handleOnMouseDown}
                  handleOnMouseOver={handleOnMouseOver}
                />
              ))}
            </div>
          );
        })}
      </div> */}
      <div className="background"></div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    "& .grid": {
      display: "flex",
      flexDirection: "column",
      "& .grid-row": {
        display: "flex",
        "& .obstacle": {
          background: "#3d3d3d",
        },
        "&>div": {
          height: "25px",
          width: "25px",
          minHeight: "25px",
          minWidth: "25px",
          border: `1px solid ${theme.palette.divider}`,
          userSelect: "none",
        },
      },
    },
  },
  cell: {
    height: "25px",
    width: "25px",
    minHeight: "25px",
    minWidth: "25px",
    border: `1px solid ${theme.palette.divider}`,
    userSelect: "none",
  },
}));

export { GridMap };

