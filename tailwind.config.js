/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
    content: ["./components//*.{js,vue,ts}", "./layouts//*.vue", "./pages//*.vue", "./plugins//*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
    theme: {
        colors: {
            dark: "#003773",
            main : "#3162DA",
            white: colors.white,
            text:colors.black,
            light:"#ADB3DA",
            stroke: "#F7F7FC"
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
        minHeight: {
            "3/4": "75%",
        },
        maxWidth: {
            "3/4": "75%",
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
