import { useNavigate } from 'react-router';
import { DeleteStorage } from '../../common/Storage';
import './style.scss';
import { usePokemon } from '../../hooks/usePokemon';

const Logout = () => {
    const navigate = useNavigate();
    const { setPokemonSearchReplace } = usePokemon();
    const OnLogout = () => {
        DeleteStorage(import.meta.env.VITE_USER_CONECTED_KEY);
        DeleteStorage(import.meta.env.VITE_POKEMON_HISTORY_KEY);
        setPokemonSearchReplace([]);
        navigate('/');
    };

    return (
        <div className='logout' title='Cerrar sesión' onClick={OnLogout}></div>
    );
};

export default Logout;
