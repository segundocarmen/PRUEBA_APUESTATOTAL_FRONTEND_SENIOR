import { MainPokemonInterface } from "../../interface/pokemon.interface";

export interface RootHistoryPokemonInterface {
  history: MainPokemonInterface[];
  setHistoryPokemon: (pokemon: MainPokemonInterface) => void;
}

export interface HistoryPokemonInterface {
  history: MainPokemonInterface[];
}
