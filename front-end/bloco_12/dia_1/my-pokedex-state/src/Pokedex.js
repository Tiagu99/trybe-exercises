import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
     	pokemonPosition: 0,
			pokemonType: 'all'
  	}
		this.changePokemon = this.changePokemon.bind(this);
		this.pokemonFilter = this.pokemonFilter.bind(this);
		this.getPokemons = this.getPokemons.bind(this)
	}

	getPokemons(){
		const { pokemonType } = this.state;
		if (pokemonType === 'all') {
			return pokemons;
		}
		return pokemons.filter((pokemon) => pokemon.type === pokemonType);
	}
		
	changePokemon(lengthList) {
		if(this.state.pokemonPosition === (lengthList - 1)) {
			this.setState({
				pokemonPosition: 0
			});
		} else {
			this.setState((previousState, _props) => ({
				pokemonPosition: previousState.pokemonPosition + 1
			}));
		}
	}

	pokemonFilter(typePokemon) {
		this.setState({
			pokemonType: typePokemon,
			pokemonPosition: 0
		});	
	}

	getTypePokemons() {
		const types = pokemons.map((pokemon) => pokemon.type);
		return types.filter((type, index) => types.indexOf(type) === index);
	}

  render() {
		const filterPokemons = this.getPokemons();
		const typePokemons = this.getTypePokemons();
		const pokemon = filterPokemons[this.state.pokemonPosition];
    return (
			<div className="pokedex">
      	<Pokemon key={pokemon.id} pokemon={pokemon} />
			<div className="button-container">
				<Button 
					clickFunction={() => this.pokemonFilter('all')}
					className="type-button">
						All
				</Button>
				{typePokemons.map((type) => (
					<Button 
						key={type}
						clickFunction={() => this.pokemonFilter(type)}
						className="type-button">
							{ type }
					</Button>
				))}
				</div>
					<Button 
						clickFunction={() => this.changePokemon(filterPokemons.length)}
						className="next-button"
						disable={filterPokemons.length<= 1}>
							Next Pokemon
					</Button>
         </div>
    );
  }
}

export default Pokedex;