import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    const pokeType = this.props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
    return (
      <article>
        <h2 className="title">{this.props.name}</h2>
        <div className="img-box">
          <img src={this.props.url} alt={`Foto de ${this.props.name}`} />
        </div>
        <ul className="type-list">{pokeType}</ul>
      </article>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Item;
