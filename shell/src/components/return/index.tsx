import { useNavigate } from 'react-router-dom';
import './style.scss';

const Return = () => {
    const navigate = useNavigate();

    const GoBack = () => {
        navigate(-1);
    };

    return (
        <div className='back_container'>
            <button onClick={GoBack}>Volver</button>
        </div>
    );
};
export default Return;
