import React from 'react';

export default function PokeList({ pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <div key={pokemon._id}>
          <p>{pokemon.pokemon}</p>
          <p>height: {pokemon.height}m</p>
          <p>weight: {pokemon.weight}kg</p>
          <p>shape: {pokemon.shape}</p>
          <p>type 1: {pokemon.type_1}</p>
          <p>type 2: {pokemon.type_2}</p>
          <img src={pokemon.url_image}></img>
        </div>
      ))}
      ;
    </div>
  );
}
