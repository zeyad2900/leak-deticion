import { defineStore } from "pinia";

export const useMyShowAndHideStore = defineStore("myShowAndHideStore", {
    state: () => ({
        login: false,
        signup: false,
        fogertPass: false,
        verify: false,
        change: false,
        notification: false,
    }),

    actions: {
        // login
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
        // signup
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
        // forgetpass
        openForgetPass() {
            this.fogertPass = true;
            this.login = false;
        },
        closeForgetPass() {
            this.fogertPass = false;
        },
        // verfiy
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
        // changepass
        openChange() {
            this.change = true;
            this.verify = false;
        },
        closeChange() {
            this.change = false;
        },
        // notification
        switchNotify() {
            this.notification = !this.notification;
        },
    },
});
