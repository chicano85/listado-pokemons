import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={this.props.img} alt={this.props.name}></img>
        <span className="pokemonTitle">{this.props.name}</span>
        <ul className="types">
          {this.props.types.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Pokemon;
