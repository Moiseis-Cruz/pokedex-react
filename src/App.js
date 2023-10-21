import { createGlobalStyle } from 'styled-components';
import './App.css';
import { HeaderPokemon } from './components/header/header';
import { ListCards } from './components/pokemons';
import { ThemeProvider } from './theme-context/theme-context';

function App() {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider>
        <HeaderPokemon/>
        <ListCards />
      </ThemeProvider>
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`