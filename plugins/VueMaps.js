import { defineNuxtPlugin } from "#app";
import VueGoogleMaps from "@fawmi/vue-google-maps";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGoogleMaps, {
        load: {
            key: "AIzaSyA8qi0TK3EDod0LlTXbQFf_DyEptiGgPFU",
            libraries: "places", // This is required if you use the Autocomplete plugin
        },
        // autobindAllEvents: true,
    });
});
