import { defineStore } from "pinia";
export const useMyGeneralStore = defineStore({
    id: "myGeneralStore",
    state: () => ({
        lat: null,
        lng: null,
        countries: [],
    }),
    actions: {
        async fetchCountries() {
            const config = useRuntimeConfig().public.baseURL;
            $fetch(`${config}general/countries`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Accept-Language": useNuxtApp().$i18n.locale.value,
                },
            }).then((res) => {
                this.countries = res.data;
            });
        },
        async getLocation() {
            // Check if Geolocation is available in the user's browser
            if ("geolocation" in navigator) {
                // Use the Geolocation API to get the user's location
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // Extract latitude and longitude from the position object
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;

                        // Do something with the latitude and longitude
                        this.lat = latitude;
                        this.lng = longitude;
                    },
                    function (error) {
                        // Handle any errors that may occur while trying to get the location
                        console.error("Error getting location:", error);
                    }
                );
            } else {
                // Geolocation is not available in this browser
                console.error("Geolocation is not available.");
            }
        },
    },
});
