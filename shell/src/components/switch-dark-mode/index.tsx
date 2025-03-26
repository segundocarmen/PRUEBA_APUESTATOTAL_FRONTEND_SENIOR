/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useApplicationStore } from '../../store/application';
import {
    RootApplicationInterface,
    ThemeValues
} from '../../store/application/state.interface';
import './style.scss';
interface Props {
    isSwitch?: boolean;
}
const SwitchDarkMode = ({ isSwitch = true }: Props) => {
    const [checked, setChecked] = useState<boolean>(false);
    const {
        application: { theme },
        setApplicationTheme
    }: RootApplicationInterface = useApplicationStore();

    useEffect(() => {
        if (theme === ThemeValues.dark) {
            setChecked(true);
            document.body.classList.add('dark');
        } else {
            setChecked(false);
            document.body.classList.remove('dark');
        }
    }, [theme]);

    const ChangeTheme = (themeSelected: ThemeValues) => {
        setApplicationTheme(themeSelected);
    };

    const CheckActive = (themeSelected: ThemeValues) => {
        if (theme === themeSelected) {
            return 'active';
        } else {
            return '';
        }
    };

    const ChangeThemeCheck = (e: any) => {
        const value = e.target.checked;
        setApplicationTheme(value ? ThemeValues.dark : ThemeValues.light);
        setChecked(value);
    };

    return (
        <>
            {isSwitch ? (
                <div className='container-switch'>
                    <span>Modo oscuro</span>
                    <label className='switch' htmlFor='checkbox'>
                        <input
                            type='checkbox'
                            id='checkbox'
                            checked={checked}
                            onChange={ChangeThemeCheck}
                        />
                        <div className='slider round'></div>
                    </label>
                </div>
            ) : (
                <div className='theme'>
                    <button
                        onClick={() => {
                            ChangeTheme(ThemeValues.light);
                        }}
                        className={`at_button lightButton ${CheckActive(ThemeValues.light)}`}
                    >
                        Ligth
                    </button>
                    <button
                        onClick={() => {
                            ChangeTheme(ThemeValues.dark);
                        }}
                        className={`at_button darkButton ${CheckActive(ThemeValues.dark)}`}
                    >
                        Dark
                    </button>
                </div>
            )}
        </>
    );
};

export default SwitchDarkMode;
