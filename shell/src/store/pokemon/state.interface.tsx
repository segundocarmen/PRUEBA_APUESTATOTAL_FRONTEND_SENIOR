import { MainPokemonInterface } from '../../interface/pokemon.interface';

export interface RootPokemonInterface {
    pokemonSearch: MainPokemonInterface[];
    pokemonTypes: TypesPokemon[];
    setPokemonSearchAdd: (pokemons: MainPokemonInterface[]) => void;
    setPokemonSearchReplace: (pokemons: MainPokemonInterface[]) => void;
    setPokemonTypes: (payload: TypesPokemon[]) => void;
}

export interface PokemonInterfaceStates {
    pokemonSearch: MainPokemonInterface[];
    pokemonTypes: TypesPokemon[];
}

export interface TypesPokemon {
    type: string;
    values: MainPokemonInterface[];
}
