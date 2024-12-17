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

  const handleIndexPrecedent = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleIndexSuivant = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <section>
      <MyTitle />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && (
        <button onClick={handleIndexPrecedent}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleIndexSuivant}>Suivant</button>
      )}
    </section>
  );
}

export default App;
