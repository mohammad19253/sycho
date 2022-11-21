 import './App.css';
import { Home } from './components/Home/Home';
import { ThemeProvider } from '@mui/system';
import { theme } from './styles/theme'
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Header />
          {/* <Home /> */}
          <Game />
      </ThemeProvider>
    </div>
  );
}

export default App;
