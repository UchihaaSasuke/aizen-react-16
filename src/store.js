import create from "zustand";

const useStore = create((set) => ({
  filter: "",
  pokemon: [],
  selectedPokemon: null,
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
    })),
  setPokemon: (pokemon) =>
    set((state) => ({
      ...state,
      pokemon,
    })),
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({
      ...state,
      selectedPokemon,
    })),
}));

fetch(window.location.origin + "/aizen-react-16/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) =>
    useStore.setState((state) => ({
      ...state,
      pokemon,
    }))
  );

export default useStore;
