export const LoadRemoteModule = async (moduleName: string) => {
    const MAX_RETRIES = 3;
    let retries = 0;

    while (retries < MAX_RETRIES) {
        try {
            return await import(moduleName);
        } catch (err) {
            console.log(err);
            retries++;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    return null;
};
