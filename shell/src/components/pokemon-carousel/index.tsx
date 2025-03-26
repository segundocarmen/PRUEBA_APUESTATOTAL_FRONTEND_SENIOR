import { MainPokemonInterface } from '../../interface/pokemon.interface';

import './style.scss';
interface Props {
    type: string;
    values: MainPokemonInterface[];
    isCarrousel?: boolean;
    limit?: number;
    onSelect?: (pokemon: MainPokemonInterface) => void;
}

const PokemonCarousel = ({
    type,
    values,
    isCarrousel = true,
    limit = 10,
    onSelect
}: Props) => {
    const ShowPokemon = (pokemon: MainPokemonInterface) => {
        if (onSelect) {
            onSelect(pokemon);
        }
    };

    return (
        <div className='type'>
            <p className='typename'> {type} </p>
            <div className={`type_pokemon ${!isCarrousel ? 'column' : ''}`}>
                {values.map((pokemon, index) => {
                    if (index <= limit) {
                        return (
                            <div
                                key={pokemon.id}
                                className={`type_pokemon_detail ${!isCarrousel ? 'column' : ''}`}
                                onClick={() => {
                                    ShowPokemon(pokemon);
                                }}
                            >
                                <img
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                    width={80}
                                    loading='lazy'
                                />
                                <span> {pokemon.name} </span>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default PokemonCarousel;
