import { create } from "zustand";
import { LastPokemonDefault } from "./initialValues";
import { RootLastPokemonInterface } from "./state.interface";
import { MainPokemonInterface } from "../../interface/pokemon.interface";

export const usePokemonLastStore = create<RootLastPokemonInterface>((set) => ({
  lastView: LastPokemonDefault.lastView,
  setLastPokemon: (pokemon: MainPokemonInterface) => {
    set({ lastView: [pokemon] });
  },
}));
