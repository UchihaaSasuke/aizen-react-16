import React from "react";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";

import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  const {
    state: { pokemon, filter },
    dispatch,
  } = useContext(PokemonContext);

  return (
    <table width="100%">
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              // onClick={(pokemon) => selectedPokemonSet(pokemon)}
              onClick={(pokemon) =>
                dispatch({
                  type: "SET_SELECTED_POKEMON",
                  payload: pokemon,
                })
              }
            />
          ))}
      </tbody>
    </table>
  );
};
export default PokemonTable;
