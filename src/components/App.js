import React from "react";
import pokemons from "../data/pokemons";
import PokemonList from "./PokemonList";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="Title">¡Hazte con todos!</h1>
        <PokemonList dataList={pokemons} />
      </div>
    );
  }
}

export default App;
