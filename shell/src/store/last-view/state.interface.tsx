import { MainPokemonInterface } from "../../interface/pokemon.interface";

export interface RootLastPokemonInterface {
  lastView: MainPokemonInterface[];
  setLastPokemon: (pokemon: MainPokemonInterface) => void;
}

export interface LastPokemonInterface {
  lastView: MainPokemonInterface[];
}
