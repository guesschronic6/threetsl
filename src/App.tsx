import { ThemeProvider } from "@mui/material";
import "./App.css";
import { MainPage } from "./components";
import { GirdContextProvider } from "./components/contexts/GridContextProvider";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GirdContextProvider>
        <div className="App">
          <MainPage />
        </div>
      </GirdContextProvider>
    </ThemeProvider>
  );
}

export default App;
