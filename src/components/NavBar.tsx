import React, { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (
      selectedPokemonIndex !== null &&
      pokemonList[selectedPokemonIndex]?.name.toLowerCase() === "pikachu"
    ) {
      alert("pika pikachu !!!");
    }
  }, [selectedPokemonIndex, pokemonList]);
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => {
            setPokemonIndex(index);
            setSelectedPokemonIndex(index);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
