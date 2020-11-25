import React from "react";
import "../stylesheets/App.css";
import Pokemons from "../data/pokemons.json";
import PokemonList from "./PokemonList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: Pokemons,
    };
  }
  render() {
    return (
      <div>
        <PokemonList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
