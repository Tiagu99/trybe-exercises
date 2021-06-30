import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return(
      pokemons.map((data) => <Pokemon key={data.id} pokemon={data} />)
    )
  }
}

export default Pokedex;