import { create } from 'zustand';
import { ApplicationDefault } from './initialValues';
import { RootApplicationInterface, ThemeValues } from './state.interface';

export const useApplicationStore = create<RootApplicationInterface>(set => ({
    application: ApplicationDefault,
    setApplicationConnection: (connection: boolean) => {
        set((state: RootApplicationInterface) => {
            return {
                ...state,
                application: { ...state.application, connection }
            };
        });
    },
    setApplicationTheme: (theme: ThemeValues) => {
        set((state: RootApplicationInterface) => {
            return {
                ...state,
                application: { ...state.application, theme }
            };
        });
    },
    setApplicationUser: (user: string) => {
        set((state: RootApplicationInterface) => {
            return {
                ...state,
                application: { ...state.application, user }
            };
        });
    }
}));
