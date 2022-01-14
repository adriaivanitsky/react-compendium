export async function getPokemon(search, sort, chosenType) {
  const params = new URLSearchParams();
  params.set('pokemon', search);
  params.set('sort', 'pokemon');
  params.set('direction', sort);
  if (chosenType !== 'all') params.set('type', chosenType);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=20&${params.toString()}`
  );
  const data = await response.json(); //fetch is a function built into browsers similarly this response is some sort of built in mechanism
  return data;
}

export async function getTypes() {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const data = await response.json();
  return data.map((banana) => banana.type);
}
