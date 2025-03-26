import './style.scss';
interface Props {
    scale?: boolean;
    text?: boolean;
}

const Pokeball = ({ scale = true, text = true }: Props) => {
    return (
        <div className={`pokeball_main ${scale ? 'scale' : ''}`}>
            <div className='line'></div>
            <div className='circle'></div>
            <div className='circle-mini'></div>
            {text && <span className='text'>Cargando...</span>}
        </div>
    );
};
export default Pokeball;
