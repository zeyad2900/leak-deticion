export const useApi = (path: string, options: object) => {
    const { baseURL } = useRuntimeConfig().public;
    const { locale } = useI18n();
    path = `${baseURL}${path}`;
    options = {
        headers: {
            Accept: "application/json",
            "Accept-Language": locale.value,
        },
    };
    return useFetch(path, options);
};
