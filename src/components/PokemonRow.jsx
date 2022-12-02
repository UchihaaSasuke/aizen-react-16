import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon, onClick }) =>(
   <> 
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More Information
        </Button>
      </td>
    </tr>
  </>
  
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({PokemonType}),
};

export default PokemonRow;