import React from 'react';

export default function PokeList({ pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon) => {
        <p>{pokemon.pokemon}</p>;
      })}
    </div>
  );
}
