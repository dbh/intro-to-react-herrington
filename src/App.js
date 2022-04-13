import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from '@material-ui/core';

import './App.css';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

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
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
      .then(resp => resp.json())
      .then(data => pokemonSet(data))
  }, []);
  // with empty array, useEffect triggers only once at beginning


  return (
    <PokemonContext.Provider value={{
      filter,
      filterSet,
      pokemon,
      pokemonSet,
      selectedPokemon,
      selectedPokemonSet
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
