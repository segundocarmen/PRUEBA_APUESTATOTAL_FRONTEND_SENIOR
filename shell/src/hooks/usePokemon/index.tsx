import { useNavigate } from 'react-router';
import { DiffString } from '../../common/Constants';
import { MainPokemonInterface } from '../../interface/pokemon.interface';
import { PokemonPhotoUrl } from '../../services/pokemon';
import { usePokemonActualStore } from '../../store/actual-pokemon';
import { RootActualPokemonInterface } from '../../store/actual-pokemon/state.interface';
import { usePokemonHistoryStore } from '../../store/history';
import { RootHistoryPokemonInterface } from '../../store/history/state.interface';
import { usePokemonLastStore } from '../../store/last-view';
import { RootLastPokemonInterface } from '../../store/last-view/state.interface';
import { usePokemonStore } from '../../store/pokemon';
import { RootPokemonInterface } from '../../store/pokemon/state.interface';
import { GetStorage, SaveStorage } from '../../common/Storage';

interface ArrayResultSearchPokemon {
    name: string;
    url: string;
}

const urlPrefix = `${import.meta.env.VITE_BASE_URL_API}/pokemon/`;

export function usePokemon() {
    const navigate = useNavigate();
    const {
        setPokemonTypes,
        setPokemonSearchAdd,
        setPokemonSearchReplace,
        pokemonSearch,
        pokemonTypes
    }: RootPokemonInterface = usePokemonStore();
    const { setLastPokemon, lastView }: RootLastPokemonInterface =
        usePokemonLastStore();
    const { setHistoryPokemon, history }: RootHistoryPokemonInterface =
        usePokemonHistoryStore();
    const { setActualPokemon, actualPokemon }: RootActualPokemonInterface =
        usePokemonActualStore();

    const TransformData = (array: ArrayResultSearchPokemon[]) => {
        const transform = array.map(item => {
            const imageCode = DiffString(item.url, urlPrefix);
            return {
                id: imageCode.substring(0, imageCode.length - 1),
                name: item.name,
                url: item.url,
                image: PokemonPhotoUrl(
                    imageCode.substring(0, imageCode.length - 1)
                )
            };
        });
        return transform;
    };

    const OnSelectItemCarousel = (pokemon: MainPokemonInterface) => {
        const historySaved = GetStorage(
            import.meta.env.VITE_POKEMON_HISTORY_KEY
        );
        if (historySaved) {
            const parsed = JSON.parse(historySaved);
            parsed.push(pokemon);
            SaveStorage(
                JSON.stringify(parsed),
                import.meta.env.VITE_POKEMON_HISTORY_KEY
            );
        } else {
            SaveStorage(
                JSON.stringify([pokemon]),
                import.meta.env.VITE_POKEMON_HISTORY_KEY
            );
        }
        setLastPokemon(pokemon);
        setHistoryPokemon(pokemon);
        setActualPokemon(pokemon);
        navigate('/pokemon-detail');
    };

    return {
        OnSelectItemCarousel,
        TransformData,
        setPokemonTypes,
        setPokemonSearchAdd,
        setPokemonSearchReplace,
        setLastPokemon,
        setHistoryPokemon,
        setActualPokemon,
        pokemonSearch,
        pokemonTypes,
        lastView,
        history,
        actualPokemon
    };
}
