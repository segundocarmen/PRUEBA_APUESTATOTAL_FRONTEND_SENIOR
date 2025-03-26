/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from '../../../components/modal';
import PokemonCarousel from '../../../components/pokemon-carousel';
import SearchComponent from '../../../components/search-component';
import { usePokemon } from '../../../hooks/usePokemon';

interface Props {
    GetPokemonSearch: () => void;
    setShowModal: (status: boolean) => void;
    shoModal: boolean;
}

const DashboardSearch = ({
    GetPokemonSearch,
    setShowModal,
    shoModal
}: Props) => {
    const { OnSelectItemCarousel, pokemonSearch } = usePokemon();
    const HandleScroll = (target: any) => {
        if (target.scrollHeight - target.scrollTop <= target.clientHeight) {
            GetPokemonSearch();
        }
    };

    return (
        <Modal
            onClose={() => {
                setShowModal(false);
            }}
            open={shoModal}
            fullScreen={true}
            scrollController={HandleScroll}
        >
            <SearchComponent />
            <div className='scroll_pokemon'>
                <PokemonCarousel
                    type='todos'
                    values={pokemonSearch}
                    isCarrousel={false}
                    limit={1200}
                    onSelect={OnSelectItemCarousel}
                />
            </div>
        </Modal>
    );
};

export default DashboardSearch;
