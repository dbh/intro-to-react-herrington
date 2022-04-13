import React from 'react';
import PropTypes from "prop-types";


const PokemonInfo = ({ name, base}) => (
    <div>
      <h1>{name.english}</h1>
      <table>
        <tbody>
          {
            Object.keys(base).map(key => (
              <tr key={key}>
                <td>{key}</td>
                <td>{base[key]}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
  
  PokemonInfo.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
      japanese: PropTypes.string.isRequired,
      chinese: PropTypes.string.isRequired,
      french: PropTypes.string.isRequired
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
    base: PropTypes.shape({
      HP: PropTypes.number.isRequired,
      Attack: PropTypes.number.isRequired,
      Defense: PropTypes.number.isRequired,
      "Sp. Attack": PropTypes.number.isRequired,
      "Sp. Defense": PropTypes.number.isRequired,
      Speed: PropTypes.number.isRequired
      }),
  };

  export default PokemonInfo;