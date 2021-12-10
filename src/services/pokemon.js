export async function getPokemon(search) {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await response.json(); //fetch is a function built into browsers similarly this response is some sort of built in mechanism
  return data;
}
