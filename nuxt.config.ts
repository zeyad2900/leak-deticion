import { acceptHMRUpdate, defineStore } from "pinia";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "nuxt-headlessui",
        [
            "@vee-validate/nuxt",
            {
                // disable or enable auto imports
                autoImports: true,
                // Use different names for components
                componentNames: {
                    Form: "VeeForm",
                    Field: "VeeField",
                    FieldArray: "VeeFieldArray",
                    ErrorMessage: "VeeErrorMessage",
                },
            },
        ],
        "nuxt-swiper",
        "nuxt-icons",
        "nuxt-icon",
        "@nuxt/image",
        [
            "@pinia/nuxt",
            {
                autoImports: [defineStore, acceptHMRUpdate],
            },
        ],
        "@nuxtjs/tailwindcss",
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
    imports: {
        dirs: ["stores"],
    },
    css: ["~/assets/main.scss"],
    plugins: ["/plugins/vue-toastfiy.ts"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            baseURL: "https://leak-detection-v2.phpv8.aait-d.com/api/",
        },
    },
});
