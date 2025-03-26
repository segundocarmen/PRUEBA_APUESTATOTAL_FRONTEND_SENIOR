export interface MainPokemonInterface {
    id?: string;
    name: string;
    image: string;
    url?: string;
}

export interface SearchPokemonParamsInterface {
    limit: number;
    offset: number;
}
