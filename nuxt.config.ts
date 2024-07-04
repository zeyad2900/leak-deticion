import { acceptHMRUpdate, defineStore } from "pinia";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [{ src: "/wow.js" }],
        },
    },
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
        "nuxt3-socket.io",
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
    css: ["~/assets/style/main.scss" , "/assets/style/animation/animate.css"],
    plugins: ["/plugins/vue-toastfiy.ts", "/plugins/VueMaps.js"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    socket: {
        // JSON serializable options only.
        // options object to pass when instantiating socket server.
        serverOptions: {},
    },
    build: {
        transpile: ['vue-toastification', "@fawmi/vue-google-maps", "swiper"]
    },
    runtimeConfig: {
        public: {
            // baseURL: "https://leak-detection-v2.phpv8.aait-d.com/api/",
            socketURL: "https://leak-detection.phpv8.aait-d.com:3089",
            baseURL: "https://phpv8.aait-d.com/leak_detection/public/api/",
            // real
        },
    },
});
