import Pokeball from '../../components/pokeball';
import './styles.scss';

export const Loader = () => {
    return (
        <div
            className='loading-component'
            style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                background: 'rgba(255,203,5,0.8)',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Pokeball />
        </div>
    );
};
