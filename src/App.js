import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/pokemon';
import PokeList from './components/PokeList/PokeList';
import Controls from './components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(search);
      setPokemon(data.results);
      setLoading(false);
    };
    fetchData();
  }, [search]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <Controls search={search} setSearch={setSearch} />
      <PokeList pokemonList={pokemon} />
    </div>
  );
}

export default App;
