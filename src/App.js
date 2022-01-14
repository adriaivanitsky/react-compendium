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
  const [types, setTypes] = useState(''); //types is an array of 18 types of pokemon
  const [selectedType, setSelectedType] = useState(''); //selectedType is whichever type the user chooses

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(search, sort);
      setPokemon(data.results);
      setLoading(false);
    };
    fetchPokemon();
  }, [search, sort]);

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
      <Controls search={search} setSearch={setSearch} sort={sort} setSort={setSort} />
      <PokeList pokemonList={pokemon} />
    </div>
  );
}

export default App;
