import { makeObservable, observable, computed, autorun } from "mobx";

class Store {
  filter = "";
  pokemon = [];
  selectedPokemon = null;

  constructor() {
    makeObservable(this, {
      filter: observable,
      pokemon: observable,
      selectedPokemon: observable,
      filteredPokemon: computed,
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter(({ name: { english } }) =>
      english.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }
  setFilter(filter) {
    this.filter = filter;
  }
  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

const store = new Store();

fetch(window.location.origin + "/aizen-react-16/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) => store.setPokemon(pokemon));

export default store;
