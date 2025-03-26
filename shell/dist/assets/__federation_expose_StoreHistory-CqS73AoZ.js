import { c as create } from './react-CntRnizT.js';

const SaveStorage = (data, name) => {
  if (typeof localStorage === "undefined") {
    return "";
  }
  if (name) {
    localStorage.setItem(name, JSON.stringify(data));
  }
};
const GetStorage = (name) => {
  if (typeof localStorage === "undefined") {
    return "";
  }
  if (name) {
    const data = localStorage.getItem(name);
    return JSON.parse(data);
  }
};
const DeleteStorage = (name) => {
  if (name) {
    localStorage.removeItem(name);
  }
};

const savedHistory = GetStorage("pokemon-history");
const HistoryPokemonDefault = {
  history: !savedHistory ? [] : JSON.parse(savedHistory)
};

const usePokemonHistoryStore = create(
  (set) => ({
    history: HistoryPokemonDefault.history,
    setHistoryPokemon: (pokemon) => {
      set((state) => {
        return {
          ...state,
          history: [...state.history, pokemon]
        };
      });
    }
  })
);

export { DeleteStorage as D, GetStorage as G, SaveStorage as S, usePokemonHistoryStore };
