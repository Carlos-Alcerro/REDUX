import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getPokemonsTypes } from "./store/slices/pokemon";

const PokemonApp = () => {
  const dispatch = useDispatch();
  const { page, pokemons, isLoading, pokemonsType } = useSelector(
    (state) => state.pokemons
  );
  console.log("page desde app", page);
  console.log("pokemons desde app", pokemons);
  console.log("isLoad desde app", isLoading);
  console.log("POKEMONSTYPE", pokemonsType);
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPokemonsTypes(4));
  }, [dispatch]);
  return (
    <div>
      <h1>Pokemon App</h1>
      <hr />
      {!isLoading ? "False" : "True"}

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}>{pokemon.name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Siguientes Pokemones
      </button>
    </div>
  );
};

export default PokemonApp;
