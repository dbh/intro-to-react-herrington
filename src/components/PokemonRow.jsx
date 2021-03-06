import React from 'react';
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';

const PokemonRow = ({ pokemon, onClick  }) => (
  <>
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => onClick (pokemon)}>More Info
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({ english: PropTypes.string.isRequired}),
    type: PropTypes.arrayOf(PropTypes.string.isRequired)
  }),
  onSelect: PropTypes.func
};

export default PokemonRow;