import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

const PokemonList = (props) => {
  const items = props.pokemons.map((pokemon) => {
    return (
      <li className="card" key={pokemon.id}>
        <Pokemon url={pokemon.url} name={pokemon.name} types={pokemon.types} />
      </li>
    );
  });
  return (
    <>
      <h1 className="h1">Mi lista de Pokemons</h1>
      <ul className="cards">{items}</ul>
    </>
  );
};

PokemonList.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.string,
  pokemons: PropTypes.array,
};

export default PokemonList;
