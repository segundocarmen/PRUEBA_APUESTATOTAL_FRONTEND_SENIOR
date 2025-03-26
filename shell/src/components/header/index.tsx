import styles from './style.module.scss';
import { useApplicationStore } from '../../store/application';
import { RootApplicationInterface } from '../../store/application/state.interface';
import SwitchDarkMode from '../switch-dark-mode';

const Header = () => {
    const {
        application: { user }
    }: RootApplicationInterface = useApplicationStore();
    return (
        <div className={`${styles.header} main_header`}>
            <div> {user} </div>
            <div>
                {' '}
                <SwitchDarkMode />{' '}
            </div>
        </div>
    );
};

export default Header;
