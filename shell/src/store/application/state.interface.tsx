export enum ThemeValues {
    light = 'light',
    dark = 'dark'
}
type Theme = (typeof ThemeValues)[keyof typeof ThemeValues];

export interface RootApplicationInterface {
    application: ApplicationInterface;
    setApplicationConnection: (connection: boolean) => void;
    setApplicationTheme: (theme: Theme) => void;
    setApplicationUser: (user: string) => void;
}

export interface ApplicationInterface {
    connection: boolean;
    theme: Theme;
    user: string;
}
