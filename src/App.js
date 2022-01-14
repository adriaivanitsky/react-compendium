import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon, getTypes } from './services/pokemon';
import PokeList from './components/PokeList/PokeList';
import Controls from './components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('asc');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(search, sort, selectedType);
      setPokemon(data.results);
      setLoading(false);
    };
    fetchPokemon();
  }, [search, sort, selectedType]);

  useEffect(() => {
    const fetchTypes = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchTypes();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <Controls {...{ search, setSearch, sort, setSort, selectedType, setSelectedType, types }} />
      <PokeList pokemonList={pokemon} />
    </div>
  );
}

export default App;
