import { defineStore } from "pinia";

export const useMyGeneralStore = defineStore({
    id: "myGeneralStore",
    state: () => ({
        countries: [],
    }),
    actions: {
        async fetchCountries() {
            $fetch("https://leak-detection-v2.phpv8.aait-d.com/api/general/countries", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Accept-Language": useNuxtApp().$i18n.locale.value,
                },
            }).then((res) => {
                this.countries = res.data;
            });
        },
    },
});
