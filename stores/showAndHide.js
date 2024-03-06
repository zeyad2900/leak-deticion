import { defineStore } from "pinia";

export const useMyShowAndHideStore = defineStore("myShowAndHideStore", {
    state: () => ({
        login: false,
        loginInitialValue: null,
        signup: false,
        fogertPass: false,
        verify: false,
        verifyLogin: false,
        change: false,
        notification: false,
        smallmenu: false,
    }),

    actions: {
        // smallmenu
        smallMenueHndler(order) {
            if (order === "open") {
                this.smallmenu = true;
            } else {
                this.smallmenu = false;
            }
        },
        // login
        loginHnadler(order) {
            if (order === "open") {
                this.login = true;
                this.signup = false;
                this.fogertPass = false;
                this.verify = false;
                this.change = false;
            } else {
                this.login = false;
            }
        },
        // signup
        signupHandler(order, data) {
            if (order === "open") {
                this.signup = true;
                this.login = false;
            } else if (order === "back") {
                this.signup = false;
                this.login = true;
                this.loginInitialValue = data;
            } else {
                this.signup = false;
            }
        },
        // forgetpass
        forgetPassHandler(order) {
            if (order === "open") {
                this.fogertPass = true;
                this.login = false;
            } else {
                this.fogertPass = false;
            }
        },
        // verfiy
        verfiyHandler(order, data) {
            if (order === "open") {
                this.verify = true;
                this.fogertPass = false;
            } else if (order === "back") {
                this.verify = false;
                this.fogertPass = true;
            } else if (order === "loginOpen") {
                this.verify = true;
                this.verifyLogin = true;
            } else {
                this.verify = false;
            }
        },
        // changepass
        changeHandler(order) {
            if (order === "open") {
                this.change = true;
                this.verify = false;
            } else {
                this.change = false;
            }
        },
        // notification
        switchNotify() {
            this.notification = !this.notification;
        },
    },
});
