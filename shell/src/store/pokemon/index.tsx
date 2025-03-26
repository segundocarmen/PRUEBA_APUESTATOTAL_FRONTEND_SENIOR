import { create } from 'zustand';
import { PokemonDefault } from './initialValues';
import { RootPokemonInterface, TypesPokemon } from './state.interface';
import { MainPokemonInterface } from '../../interface/pokemon.interface';

export const usePokemonStore = create<RootPokemonInterface>(set => ({
    pokemonSearch: PokemonDefault.pokemonSearch,
    pokemonTypes: PokemonDefault.pokemonTypes,
    setPokemonSearchAdd: (pokemonSearch: MainPokemonInterface[]) => {
        set((state: RootPokemonInterface) => {
            return {
                ...state,
                pokemonSearch: [...state.pokemonSearch, ...pokemonSearch]
            };
        });
    },
    setPokemonSearchReplace: (pokemons: MainPokemonInterface[]) => {
        set({ pokemonSearch: pokemons });
    },
    setPokemonTypes: (payload: TypesPokemon[]) => {
        set({ pokemonTypes: payload });
    }
}));
