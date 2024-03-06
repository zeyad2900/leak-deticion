export default defineNuxtRouteMiddleware((to, from) => {
    const token: any = useCookie("leakDetectionToken");
    const login = useToggleLogin();

    if (!token.value) {
        const last_page: any = useCookie("last_page");
        last_page.value = from;
        login.value = true;
        return navigateTo("/");
    }
});
