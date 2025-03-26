/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './style.module.scss';
import { useApplicationStore } from '../../store/application';
import { RootApplicationInterface } from '../../store/application/state.interface';
import SwitchDarkMode from '../../components/switch-dark-mode';
import Pokeball from '../../components/pokeball';
import './pokeball.scss';
import { SaveStorage } from '../../common/Storage';

const Welcome = () => {
    const [userName, setUserName] = useState<string>('');
    const navigate = useNavigate();
    const { setApplicationUser }: RootApplicationInterface =
        useApplicationStore();

    const Login = () => {
        SaveStorage(userName, import.meta.env.VITE_USER_CONECTED_KEY);
        setApplicationUser(userName);
        navigate('/dashboard');
    };

    const OnKeyUp = (e: any) => {
        const keyPress = e.key;
        if (keyPress === 'Enter') {
            Login();
        }
    };

    return (
        <>
            <div className={styles.header}></div>
            <div className='page welcome'>
                <div className={styles.form}>
                    <SwitchDarkMode isSwitch={false} />
                    <div className='form-item'>
                        <input
                            type='text'
                            className='form-control align-center'
                            placeholder='Usuario'
                            value={userName}
                            onChange={(e: any) => {
                                setUserName(e.target.value);
                            }}
                            onKeyUp={OnKeyUp}
                        />
                    </div>
                    <div className='form-item'>
                        <button
                            onClick={Login}
                            className={`at_button bg-yellow`}
                        >
                            Ingresar
                        </button>
                    </div>
                </div>
                <div className='pokeball_runs'>
                    <div className='pokeballWrapper'>
                        <div className='pokeballcontainer'>
                            <Pokeball scale={false} text={false} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
