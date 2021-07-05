import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

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

    render() {
			const filterPokemons = this.getPokemons();
			const pokemon = filterPokemons[this.state.pokemonPosition];
        return (
            <div className="pokedex">
                <Pokemon key={pokemon.id} pokemon={pokemon} />
								<div>
									<button onClick={() => this.changePokemon(filterPokemons.length)}>Next Pokemon</button>
									<button onClick={() => this.pokemonFilter('all')}>All</button>
									<button onClick={() => this.pokemonFilter('Fire')}>Fire</button>
								</div>
            </div>
        );
    }
}

export default Pokedex;