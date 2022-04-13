import React from 'react';
import { useContext } from 'react';
import styled from "@emotion/styled";
import PokemonContext from '../PokemonContext';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem
`

const PokemonFilter = () => {
    const {filter, filterSet} = useContext(PokemonContext);
    return (
        <Input 
            value={filter}
            onChange={(event) => filterSet(event.target.value.toLowerCase())}
        />
    );
};

export default PokemonFilter;