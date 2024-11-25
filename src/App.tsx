import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
function App() {
  return (
    <section>
      <MyTitle />
      <PokemonCard pokemon={"New"} />
    </section>
  );
}

export default App;
