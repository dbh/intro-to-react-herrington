import React from 'react';
import PokemonRow from './PokemonRow';

const PokemonTable = ({ pokemon, filter, selectedPokemonSet }) => (
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
                <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => selectedPokemonSet(pokemon)} />
              ))}        
            </tbody>
          </table>
    </div>
);

export default PokemonTable;