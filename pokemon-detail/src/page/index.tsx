/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { usePokemonActualStore } from "ShellStore/storeActual";
import { useCallApi } from "../hooks/useCallApi";
import { HTTP_METHODS } from "../common/Constants";
import "./style.scss";

const PokemonDetailPage = () => {
  const { GetData, LoaderElement, LoadingData } = useCallApi();
  const { actualPokemon } = usePokemonActualStore();
  const [pokemonInfo, setPokemonInfo] = useState<any>(null);

  useEffect(() => {
    if (actualPokemon.length > 0) {
      GetPokemonInfo();
    }
  }, [actualPokemon]);

  const GetPokemonInfo = async () => {
    try {
      const result = await GetData(actualPokemon[0].url, HTTP_METHODS.GET);
      setPokemonInfo(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-pokemon-detail">
      <div className="card">
        <div className="card-title">
          <h2>
            {" "}
            {actualPokemon.length > 0
              ? actualPokemon[0].name
              : "Ningún pokemon seleccionado"}{" "}
          </h2>
        </div>
        <div className="card-image">
          {actualPokemon.length > 0 && (
            <img src={actualPokemon[0].image} alt={actualPokemon[0].name} />
          )}
        </div>
        <div className="card-description">
          <div className="dflex">
            <div className="detail">
              <p>
                <strong>Tipos:</strong>
              </p>
              <ul>
                {pokemonInfo &&
                  pokemonInfo.types
                    .map((item: any) => item.type)
                    .map((item: any) => {
                      return <li> {item.name} </li>;
                    })}
              </ul>
            </div>
            <div className="detail">
              <p>
                <strong>Habilidades:</strong>
              </p>
              <ul>
                {pokemonInfo &&
                  pokemonInfo.abilities
                    .map((item: any) => item.ability)
                    .map((item: any) => {
                      return <li> {item.name} </li>;
                    })}
              </ul>
            </div>
          </div>
          <div className="detail">
            <p>
              <strong>Sonido:</strong>
            </p>
            {pokemonInfo && (
              <audio controls>
                <source src={pokemonInfo.cries.latest} type="audio/ogg" />
              </audio>
            )}
          </div>
          <div className="detail">
            <p>
              <strong>Estadísticas</strong>
            </p>
            {pokemonInfo &&
              pokemonInfo.stats.map((item: any) => {
                return (
                  <div className="stat_container">
                    <input
                      type="range"
                      id={item.stat.name}
                      name={item.stat.name}
                      min="0"
                      max="255"
                      value={item.base_stat}
                    />
                    <label htmlFor="volume">{`${item.stat.name} - ${item.base_stat}`}</label>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {LoadingData && <LoaderElement />}
    </div>
  );
};

export default PokemonDetailPage;
