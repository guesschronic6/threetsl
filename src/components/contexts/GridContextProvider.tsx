import { createContext, useEffect, useState } from "react";
import { Grid } from "../../types";
import { util } from "../../utils";

type GridContextProps = {
  grid: Grid;
  setGrid: React.Dispatch<React.SetStateAction<Grid>>;
};

const GridContext = createContext<GridContextProps>({
  grid: [],
  setGrid: () => {},
});

const GirdContextProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = (props) => {
  const { children } = props;

  const [grid, setGrid] = useState<Grid>(util.grid.create(47, 157));

  useEffect(() => {}, []);

  useEffect(() => {}, [grid]);

  return (
    <GridContext.Provider value={{ grid, setGrid }}>
      {children}
    </GridContext.Provider>
  );
};

export { GirdContextProvider, GridContext };
