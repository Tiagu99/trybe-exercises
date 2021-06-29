import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    const { dataList } = this.props.data;
    return(
      dataList.map((data) => <Pokemon key={data.id} pokemon={data} />)
    )
  }
}