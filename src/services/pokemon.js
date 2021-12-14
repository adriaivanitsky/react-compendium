export async function getPokemon(search) {
  const params = new URLSearchParams();
  params.set('pokemon', search);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=20&${params.toString()}`
  );
  const data = await response.json(); //fetch is a function built into browsers similarly this response is some sort of built in mechanism
  return data;
}
