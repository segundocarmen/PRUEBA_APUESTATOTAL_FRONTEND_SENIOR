import { GetStorage } from '../../common/Storage';
import { HistoryPokemonInterface } from './state.interface';
const savedHistory = GetStorage(import.meta.env.VITE_POKEMON_HISTORY_KEY);
export const HistoryPokemonDefault: HistoryPokemonInterface = {
    history: !savedHistory ? [] : JSON.parse(savedHistory)
};
