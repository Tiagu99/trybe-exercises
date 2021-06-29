import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;
    return(
      <section className='pokemon-container'>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} alt={moreInfo}/>
      </section>
    )
  }
}

export default Pokemon;