import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, avaregeWeight, image } = this.props.pokemon;
    return(
      <section>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{avaregeWeight}</p>
        <img src={image}/>
      </section>
    )
  }
}

export default Pokemon;