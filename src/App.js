import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from "@material-ui/core";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import "./App.css";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

//?Begin using Redux
const pokemonReducer = (
  state = {
    filter: "",
    pokemon: [],
    selectedPokemon: null,
  },
  action
) => {
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
      return state; // the default Redux's behavior is to return the current state
  }
};
//?End using Redux

const store = createStore(pokemonReducer);

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
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

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

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
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
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
