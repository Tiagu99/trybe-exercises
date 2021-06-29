import './App.css';
import Data from './data';
import Pokedex from './components/pokedex';

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <Pokedex pokemons={Data}/>
    </main>
  );
}

export default App;
