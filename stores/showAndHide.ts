import { defineStore } from "pinia";

export const useMyShowAndHideStore = defineStore("myShowAndHideStore", {
    state: () => ({
        login: false,
        signup: false,
        fogertPass: false,
        verify: false,
        change : false
    }),

    actions: {
        openLogin() {
            this.login = true;
            this.signup = false;
            this.fogertPass = false;
            this.verify = false;
            this.change = false;
        },
        closeLogin() {
            this.login = false;
        },
        openSignup() {
            this.signup = true;
            this.login = false;
        },
        closeSignup() {
            this.signup = false;
        },
        backToLogin() {
            this.signup = false;
            this.login = true;
        },
        openForgetPass() {
            this.fogertPass = true;
            this.login = false;
        },
        closeForgetPass() {
            this.fogertPass = false;
        },
        openVerify() {
            this.verify = true;
            this.fogertPass = false;
        },
        closeVerify() {
            this.verify = false;
        },
        backToForget() {
            this.verify = false;
            this.fogertPass = true;
        },
        openChange() {
            this.change = true;
            this.verify = false;
        },
        closeChange() {
            this.change = false;
        },
    },
});
