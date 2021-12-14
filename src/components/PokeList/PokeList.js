import React from 'react';

export default function PokeList({ pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <div key={pokemon._id}>
          <p>{pokemon.pokemon}</p>
          <img src={pokemon.url_image}></img>
        </div>
      ))}
      ;
    </div>
  );
}
