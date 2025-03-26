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
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className='pokeball'>
                <div className='line'></div>
                <div className='circle'></div>
                <div className='circle-mini'></div>
                <span className='text'>Cargando...</span>
            </div>
        </div>
    );
};
