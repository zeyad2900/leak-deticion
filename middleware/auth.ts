export default defineNuxtRouteMiddleware((to, from) => {
    const token: any = useCookie("leakDetectionToken");
    const login = useToggleLogin();

    if (!token.value) {
        login.value = false;
        return navigateTo("/");
    }
});
