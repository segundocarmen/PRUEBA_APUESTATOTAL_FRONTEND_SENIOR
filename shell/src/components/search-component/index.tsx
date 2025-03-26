/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import { useCallApi } from '../../hooks/useCallApi';
import {
    ApiPokemonDetailsName,
    ApiPokemonPaginated,
    PokemonPhotoUrl
} from '../../services/pokemon';
import { HTTP_METHODS } from '../../common/Constants';

interface Props {
    actionClick?: () => void;
}

let timeout: any;
const SearchComponent = ({ actionClick }: Props) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const { GetData, LoadingData, LoaderElement } = useCallApi();
    const { TransformData, setPokemonSearchReplace } = usePokemon();

    const ValidateKeyDown = (e: any) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            SearchName(e.target.value);
            clearTimeout(timeout);
        }, 1000);
    };

    const SearchName = async (name: string) => {
        if (name !== '') {
            try {
                const result = await GetData(
                    ApiPokemonDetailsName(name),
                    HTTP_METHODS.GET
                );
                const pokemonFilter = {
                    id: result.id,
                    name: result.name,
                    url: result.species.url,
                    image: PokemonPhotoUrl(result.id)
                };
                setPokemonSearchReplace([pokemonFilter]);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const result = await GetData(
                    ApiPokemonPaginated(30, 0),
                    HTTP_METHODS.GET
                );
                const transform = TransformData(result.results);
                setPokemonSearchReplace(transform);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className='form'>
            <div className='form-item'>
                <input
                    onClick={actionClick}
                    type='text'
                    className='form-control'
                    placeholder='Buscar...'
                    onChange={(e: any) => {
                        setSearchValue(e.target.value);
                    }}
                    onKeyDown={ValidateKeyDown}
                    value={searchValue}
                />
            </div>
            {LoadingData && <LoaderElement />}
        </div>
    );
};
export default SearchComponent;
