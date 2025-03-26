export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};

export const PokemontYpes = ['fire', 'water', 'electric', 'dragon', 'ghost'];

export const DiffString = (diffMe: string, diffBy: string) =>
    diffMe.split(diffBy).join('');
