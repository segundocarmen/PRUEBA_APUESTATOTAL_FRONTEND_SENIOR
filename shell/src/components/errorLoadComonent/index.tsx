import './style.scss';

interface Props {
    message: string;
}

const ErrorLoadComponent = ({ message }: Props) => {
    return (
        <div className='error_wrapper'>
            <div className='error'>
                <p> {message} </p>
            </div>
        </div>
    );
};
export default ErrorLoadComponent;
