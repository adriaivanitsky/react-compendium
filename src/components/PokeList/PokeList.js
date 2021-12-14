import React from 'react';

export default function PokeList({ pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <p key={pokemon._id}>{pokemon.pokemon}</p>
      ))}
      ;
    </div>
  );
}
