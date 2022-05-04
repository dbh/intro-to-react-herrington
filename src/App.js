import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from '@material-ui/core';

import './App.css';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from "./components/PokemonTable";

import useStore from './store';

const Title = styled.h1`
  text-align: center;`

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
  const pokemon = useStore(state => state.pokemon);
  const setPokemon = useStore(state => state.setPokemon);

  React.useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
      .then(resp => resp.json())
      .then(setPokemon)
  }, [setPokemon]);
  // with empty array, useEffect triggers only once at beginning

  if (!pokemon) {
    return <div>Loading Data</div>;
  }

  return (
    // <PokemonContext.Provider value={{
    //   state,
    //   dispatch
    // }}> 
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
    // </PokemonContext.Provider>
  );
}

export default App;
