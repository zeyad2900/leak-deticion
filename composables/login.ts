export const useToggleLogin = () =>
    useState("toggleLogin", () => {
        const token = useCookie("leakDetectionToken");
        return token.value ? true : false;
    });
