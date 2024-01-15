import {
  setPokemons,
  startLoadingPokemons,
  setPokemonsTypes,
} from "./pokemonSlice";
import { PokemonApi } from "../../../api/PokemonsApi";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //TODO: realizar peticion http
    const { data } = await PokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};

export const getPokemonsTypes = (id = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await PokemonApi.get(`/type/${id}`);
    console.log("TYPESDATA", data);
    dispatch(setPokemonsTypes({ pokemonsType: data }));
  };
};
