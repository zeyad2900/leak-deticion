import { defineStore } from "pinia";

export const useMyShowAndHideStore = defineStore("myShowAndHideStore", {
    state: () => ({
        login: false,

        loginInitialValue: null,

        signup: false,

        fogertPass: false,

        verify: false,

        verfiyInitialValue: null,

        verifyLogin: false,

        change: false,

        changeInitialValue: null,

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
        loginHnadler(order, data) {
            if (order === "open") {
                this.login = true;
                this.signup = false;
                this.fogertPass = false;
                this.verify = false;
                this.change = false;
                this.loginInitialValue = data;
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
                this.verifyLogin = false;
                this.fogertPass = false;
            } else if (order === "back") {
                this.verify = false;
                this.fogertPass = true;
            } else if (order === "loginOpen") {
                this.verify = true;
                this.verifyLogin = true;
                this.verfiyInitialValue = data;
            } else if (order === "forgetOpen") {
                this.verify = true;
                this.fogertPass = false;
                this.verifyLogin = false;
                this.verfiyInitialValue = data;
            } else {
                this.verify = false;
            }
        },
        // changepass
        changeHandler(order, data) {
            if (order === "open") {
                this.change = true;
                this.verify = false;
                this.changeInitialValue = data;
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
