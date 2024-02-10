// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        [
            "@nuxtjs/i18n",
            {
                locales: [
                    {
                        name: "EN",
                        code: "en",
                        iso: "en-US",
                        file: "en.json",
                        dir: "ltr",
                    },
                    {
                        name: "AR",
                        code: "ar",
                        iso: "ar-AR",
                        file: "ar.json",
                        dir: "rtl",
                    },
                ],
                lazy: true,
                langDir: "locales/",
                defaultLocale: "ar",
                detectBrowserLanguage: false,
                vueI18nLoader: true,
            },
        ],
    ],
    plugins: ["~/plugins/i18n.client.ts"],
    css: ["~/assets/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
