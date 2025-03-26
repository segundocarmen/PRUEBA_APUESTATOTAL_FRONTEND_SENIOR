import { GetStorage } from '../../common/Storage';
import { ApplicationInterface, ThemeValues } from './state.interface';
const savedUser = GetStorage(import.meta.env.VITE_USER_CONECTED_KEY);

export const ApplicationDefault: ApplicationInterface = {
    connection: true,
    theme: ThemeValues.light,
    user: !savedUser ? '' : savedUser
};
