import { c as create } from './react-CntRnizT.js';

const ActualPokemonDefault = {
  actualPokemon: []
};

const usePokemonActualStore = create(
  (set) => ({
    actualPokemon: ActualPokemonDefault.actualPokemon,
    setActualPokemon: (pokemon) => {
      set({ actualPokemon: [pokemon] });
    }
  })
);

export { usePokemonActualStore };
