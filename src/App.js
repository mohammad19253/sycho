 import './App.css';
import { Home } from './components/Home/Home';
import { ThemeProvider } from '@mui/system';
// import { Sycho } from './components/Sycho';
import { theme } from './styles/theme'
import { Header } from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Header />
          <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
