import "./App.css";
import { useState } from "react";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew", // Pas d'image pour ce Pokémon
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handlePokemon = (index: number) => {
    setPokemonIndex(index);
  };
  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button onClick={() => handlePokemon(index)}>{pokemon.name}</button>
        ))}
      </nav>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
