/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
    devtools: { enabled: true },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    content: ["./components//*.{js,vue,ts}", "./layouts//*.vue", "./pages//*.vue", "./plugins//*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
    theme: {
        colors: {
            dark: "#003773",
            main: "#3162DA",
            danger: "#ef4444",
            white: colors.white,
            text: colors.black,
            light: "#ADB3DA",
            stroke: "#f7f7fc",
        },
        screens: {
            xs: "475px",

            sm: "576px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "992px",
            // => @media (min-width: 992px) { ... }

            xl: "1200px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1400px",
            // '3xl': '1600px',
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
            din: ["Din", "sans-serif"],
        },
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                lg: "1rem",
                xl: "1rem",
                "2xl": "4rem",
            },
        },
    },
    plugins: [],
};
