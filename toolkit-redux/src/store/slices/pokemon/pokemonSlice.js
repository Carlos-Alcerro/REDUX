import { createSlice } from "@reduxjs/toolkit";
export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    page: 0,
    pokemons: [],
    pokemonsType: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
    setPokemonsTypes: (state, action) => {
      console.log(state, action);
      (state.isLoading = false), (state.pokemonsType = action.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const { setPokemons, startLoadingPokemons, setPokemonsTypes } =
  pokemonSlice.actions;
