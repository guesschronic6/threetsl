import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { GridMap } from "../organisms";

const MainPage: React.FunctionComponent<{}> = (props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root)}>
      <header></header>
      <main>
        <GridMap />
      </main>
      <footer>
        <Typography color={"primary"}>v0.3.0</Typography>
      </footer>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: 400,
    background: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[3],
    maxHeight: 600,
    display: "flex",
    flexDirection: "column",
    "&>header": {
      background: "linear-gradient(261.75deg, #774BF5 2.13%, #92AEF7 100%);",
      height: 45,
      borderTopRightRadius: "inherit",
      borderTopLeftRadius: "inherit",
    },
    "&>main": {
      width: "100%",
      minHeight: 1,
      flex: 1,
      overflow: "auto",
      maxHeight: "inherit",
      background: theme.palette.background.default,
    },
    "&>footer": {
      justifySelf: "flex-end",
    },
  },
}));

export { MainPage };
