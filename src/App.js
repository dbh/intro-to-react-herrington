import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from '@material-ui/core';

import './App.css';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

const pokemonReducer = (state, action)=> {
  switch(action.type) {
    case 'SET_FILTER': 
      return {
        ...state, 
        filter: action.payload,
      };
    case 'SET_POKEMON': 
      return {
        ...state, 
        pokemon: action.payload,
      };
    case 'SET_SELECTED_POKEMON': 
      return {
        ...state, 
        selectedPokemon: action.payload,
      };      
    default:
        return new Error("No Action");
    }
}

const Title = styled.h1`
  text-align: center;
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`

const PageContainer = styled.div`
  margin: auto; 
  width: 800;
  paddingTop: lrem
`


function App() {
  const [state, dispatch] = React.useReducer(pokemonReducer, {
    pokemon:[],
    filter: "",
    selectedPokemon: null
  });

  React.useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
      .then(resp => resp.json())
      .then((data) => dispatch({
        type: 'SET_POKEMON',
        payload: data,
      }))
  }, []);
  // with empty array, useEffect triggers only once at beginning

  if (!state.pokemon) {
    return <div>Loading Data</div>;
  }

  return (
    <PokemonContext.Provider value={{
      state,
      dispatch
    }}> 
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>

        <TwoColumnLayout>

          <div>

            <PokemonFilter />
            <PokemonTable />

          </div>
          <PokemonInfo />          

        </TwoColumnLayout>
        
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
