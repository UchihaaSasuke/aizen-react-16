import React from "react";
import { observer } from "mobx-react";

// import PokemonType from "../PokemonType";

import store from "../store";

const PokemonInfo = () => {
  return store.selectedPokemon ? (
    <div>
      <h2>{store.selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(store.selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{store.selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

// PokemonInfo.propTypes = PokemonType;

export default observer(PokemonInfo);
