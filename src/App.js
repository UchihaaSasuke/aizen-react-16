import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from "@material-ui/core";

import "./App.css";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

//?Begin pokemon reducer
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error("No action");
  }
};
//?End pokemon reducer

const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

function App() {
  const [state, dispatch] = React.useReducer(pokemonReducer, {
    filter: "",
    pokemon: [],
    selectedPokemon: null,
  }); //we need that for the reducer: React.useReducer(REDUCER_NAME, INITIAL_STATE)

  React.useEffect(() => {
    fetch(window.location.origin + "/aizen-react-16/pokemon.json")
      .then((resp) => resp.json())
      // .then((data) => pokemonSet(data)); //before using the reducer
      .then((data) =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      );
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          {/* {selectedPokemon && <PokemonInfo />} */}
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
