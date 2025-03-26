import { useNavigate } from 'react-router';
import { DeleteStorage } from '../../common/Storage';
import './style.scss';

const Logout = () => {
    const navigate = useNavigate();
    const OnLogout = () => {
        DeleteStorage(import.meta.env.VITE_USER_CONECTED_KEY);
        DeleteStorage(import.meta.env.VITE_POKEMON_HISTORY_KEY);
        navigate('/');
    };

    return (
        <div className='logout' title='Cerrar sesión' onClick={OnLogout}></div>
    );
};

export default Logout;
