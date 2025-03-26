import { MainPokemonInterface } from "../../interface/pokemon.interface";

export interface RootActualPokemonInterface {
  actualPokemon: MainPokemonInterface[];
  setActualPokemon: (pokemon: MainPokemonInterface) => void;
}

export interface ActualPokemonInterface {
  actualPokemon: MainPokemonInterface[];
}
