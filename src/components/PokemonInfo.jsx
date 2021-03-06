import PropTypes from "prop-types";
import useStore from '../store';

const PokemonInfo = () => {
    const selectedPokemon = useStore(state => state.selectedPokemon);

    return selectedPokemon ? ( 
        <div>
        <h1>{selectedPokemon.name.english}</h1>
        <table>
          <tbody>
            {
              Object.keys(selectedPokemon.base).map(key => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{selectedPokemon.base[key]}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>  
    ) : null;
};
  
  PokemonInfo.propTypes = {
    id: PropTypes.number,
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