import { create } from 'zustand';
import { HistoryPokemonDefault } from './initialValues';
import { RootHistoryPokemonInterface } from './state.interface';
import { MainPokemonInterface } from '../../interface/pokemon.interface';

export const usePokemonHistoryStore = create<RootHistoryPokemonInterface>(
    set => ({
        history: HistoryPokemonDefault.history,
        setHistoryPokemon: (pokemon: MainPokemonInterface) => {
            set((state: RootHistoryPokemonInterface) => {
                return {
                    ...state,
                    history: [...state.history, pokemon]
                };
            });
        }
    })
);
