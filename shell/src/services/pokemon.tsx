export const ApiPokemonDetailsId = (id: number) =>
    `${import.meta.env.VITE_BASE_URL_API}/pokemon/${id}`;
export const ApiPokemonDetailsName = (name: string) =>
    `${import.meta.env.VITE_BASE_URL_API}/pokemon/${name}`;
export const ApiPokemonType = (type: string) =>
    `${import.meta.env.VITE_BASE_URL_API}/type/${type}`;
export const ApiPokemonPaginated = (limit: number, offset: number) =>
    `${
        import.meta.env.VITE_BASE_URL_API
    }/pokemon?limit=${limit}&offset=${offset}`;
export const PokemonPhotoUrl = (id: string) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
