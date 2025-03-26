import { create } from "zustand";
import { ActualPokemonDefault } from "./initialValues";
import { RootActualPokemonInterface } from "./state.interface";
import { MainPokemonInterface } from "../../interface/pokemon.interface";

export const usePokemonActualStore = create<RootActualPokemonInterface>(
  (set) => ({
    actualPokemon: ActualPokemonDefault.actualPokemon,
    setActualPokemon: (pokemon: MainPokemonInterface) => {
      set({ actualPokemon: [pokemon] });
    },
  })
);
