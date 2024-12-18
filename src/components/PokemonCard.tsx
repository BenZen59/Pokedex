import React from "react";
import { card, cardImg } from "./PokemonCard.module.css";

interface PokemonProps {
  pokemon: {
    name: string;
    imgSrc?: string; // Optionnel pour gérer le cas où l'image est manquante
  };
}

export default function PokemonCard({ pokemon }: PokemonProps) {
  return (
    <>
      <figure className={card}>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} className={cardImg} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}
