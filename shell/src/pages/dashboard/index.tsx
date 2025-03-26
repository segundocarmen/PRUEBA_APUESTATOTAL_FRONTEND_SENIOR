/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { SearchPokemonParamsInterface } from '../../interface/pokemon.interface';
import { useCallApi } from '../../hooks/useCallApi';
import { usePokemon } from '../../hooks/usePokemon';
import { ApiPokemonPaginated, ApiPokemonType } from '../../services/pokemon';
import { HTTP_METHODS, PokemontYpes } from '../../common/Constants';
import PokemonCarousel from '../../components/pokemon-carousel';
import SearchComponent from '../../components/search-component';
import DashboardSearch from './component/search';
import './style.scss';
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const navigate = useNavigate();
    const {
        OnSelectItemCarousel,
        TransformData,
        setPokemonTypes,
        setPokemonSearchAdd,
        pokemonTypes
    } = usePokemon();
    const { GetData, LoadingData, LoaderElement } = useCallApi();
    const [shoModal, setShowModal] = useState<boolean>(false);
    const [searchPokemon, setSearchPokemon] =
        useState<SearchPokemonParamsInterface>({ limit: 30, offset: 0 });

    useEffect(() => {
        GetPokemonByType();
        GetPokemonSearch();
    }, []);

    const GetPokemonSearch = async () => {
        try {
            const result = await GetData(
                ApiPokemonPaginated(searchPokemon.limit, searchPokemon.offset),
                HTTP_METHODS.GET
            );
            const transform = TransformData(result.results);
            setPokemonSearchAdd(transform);
            setSearchPokemon({
                ...searchPokemon,
                offset: searchPokemon.offset + searchPokemon.limit
            });
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };

    const GetPokemonByType = async () => {
        const data = await Promise.all(
            PokemontYpes.map(async item => {
                try {
                    const result = await GetData(
                        ApiPokemonType(item),
                        HTTP_METHODS.GET
                    );
                    const pokemonData = result.pokemon.map(
                        (item: any) => item.pokemon
                    );
                    const transform = TransformData(pokemonData);
                    return { type: item, values: transform };
                } catch (error) {
                    console.log(error);
                    return { type: item, values: [] };
                }
            })
        );
        setPokemonTypes(data);
    };

    const RenderPokemon = () => {
        return pokemonTypes.map((item, index) => {
            return (
                <PokemonCarousel
                    key={index}
                    {...item}
                    onSelect={OnSelectItemCarousel}
                />
            );
        });
    };

    const ShowHistory = () => {
        navigate('/pokemon-history');
    };

    return (
        <div className='page'>
            <div className='dflex jcbetween head'>
                <h1>Ubica tus Pokémons</h1>
                <button
                    className='at_button bg-primary cl-white'
                    onClick={ShowHistory}
                >
                    Historial
                </button>
            </div>
            <SearchComponent
                actionClick={() => {
                    setShowModal(true);
                }}
            />
            <DashboardSearch
                GetPokemonSearch={GetPokemonSearch}
                setShowModal={setShowModal}
                shoModal={shoModal}
            />
            <div className='pokemon_list'>{RenderPokemon()}</div>
            {LoadingData && <LoaderElement />}
        </div>
    );
};

export default Dashboard;
