import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/pokemon';
import PokeList from './components/PokeList/PokeList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <input placeholder="pokemon"></input>
      <PokeList pokemonList={pokemon} />
    </div>
  );
}

export default App;
