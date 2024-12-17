import React from "react";

interface PokemonProps {
  pokemon: {
    name: string;
    imgSrc?: string; // Optionnel pour gérer le cas où l'image est manquante
  };
}

export default function PokemonCard({ pokemon }: PokemonProps) {
  return (
    <>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </>
  );
}
