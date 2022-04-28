import React from 'react';
import PokemonContext from '../PokemonContext';
import PokemonRow from './PokemonRow';
import { useContext } from 'react';

const PokemonTable = () => {
    const { 
        state: {pokemon, filter},
        dispatch,
    } = useContext(PokemonContext);
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
                            onClick={(pokemon) => dispatch({
                                type: 'SET_SELECTED_POKEMON',
                                payload: pokemon
                            })
                        } />
                    ))}        
                </tbody>
            </table>
        </div>

    );
};

export default PokemonTable;