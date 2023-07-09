import { ThemeProvider } from "@mui/system";
import { theme } from "./styles/theme";
import { AppRoutes } from "./app/routes/public";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
