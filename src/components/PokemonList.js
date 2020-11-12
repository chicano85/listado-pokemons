import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class PokemonList extends React.Component {
  render() {
    return (
      <ul className="PokemonList">
        {this.props.dataPokemons.map((pokemonObjet) => (
          <li className="pokemonItem" id={this.props.name}>
            <Pokemon
              key={pokemonObjet.id}
              name={pokemonObjet.name}
              img={pokemonObjet.url}
              types={pokemonObjet.types}
            />
          </li>
        ))}
      </ul>
    );
  }
}

PokemonList.propTypes = {
  name: PropTypes.string,
  dataPokemons: PropTypes.array,
};
export default PokemonList;
