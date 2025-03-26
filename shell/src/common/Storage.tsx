/* eslint-disable @typescript-eslint/no-explicit-any */
export const SaveStorage = (data: any, name: string | undefined) => {
    if (typeof localStorage === 'undefined') {
        return '';
    }
    if (name) {
        localStorage.setItem(name, JSON.stringify(data));
    }
};

export const GetStorage = (name: string | undefined) => {
    if (typeof localStorage === 'undefined') {
        return '';
    }
    if (name) {
        const data: any = localStorage.getItem(name);
        return JSON.parse(data);
    }
};

export const DeleteStorage = (name: string | undefined) => {
    if (name) {
        localStorage.removeItem(name);
    }
};

export const DeleteAllStorage = () => {
    localStorage.clear();
};
