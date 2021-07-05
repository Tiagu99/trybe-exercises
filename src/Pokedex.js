import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();

        this.state = {
        	pokemonPosition: 0
        }
				this.changePokemon = this.changePokemon.bind(this);
    }
		
		changePokemon() {
			if(this.state.pokemonPosition === (pokemons.length - 1)) {
				this.setState({
					pokemonPosition: 0
				});
			} else {
				this.setState((previousState, _props) => ({
						pokemonPosition: previousState.pokemonPosition + 1
				}));
			}
		}

    render() {
        return (
            <div className="pokedex">
                <Pokemon key={pokemons[this.state.pokemonPosition].id} pokemon={pokemons[this.state.pokemonPosition]} />
								<button onClick={this.changePokemon}>Next Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;