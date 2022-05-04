import React from 'react';
import PokemonRow from './PokemonRow';

import useStore from '../store';

const PokemonTable = () => {
    const pokemon = useStore(state => state.pokemon);
    const filter = useStore(state => state.filter);
    const setSelectedPokemon = useStore(state => state.setSelectedPokemon);
  
    return (
        <div>
            <table width="100%">
                <thead>
                    <tr>
                    <th>Pokemon</th>
                    <th>Type</th>          
                    </tr>
                </thead>
                <tbody>
                    {pokemon
                    .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter))
                    // .slice(0, 20)
                    .map(pokemon => (
                        <PokemonRow 
                            pokemon={pokemon} 
                            key={pokemon.id} 
                            onClick={(pokemon) => setSelectedPokemon(pokemon)}
                        />
                    ))}        
                </tbody>
            </table>
        </div>

    );
};

export default PokemonTable;