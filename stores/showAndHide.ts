import { defineStore } from "pinia";

export const useMyShowAndHideStore = defineStore("myShowAndHideStore", {
    state: () => ({
        login: false,
        signup: false,
        fogertPass: false,
        verify: false,
        change: false,
        notification: false,
        video: false,
        smallmenu: false,
    }),

    actions: {
        // smallmenu
        smallMenueHndler(order: string) {
            if (order === "open") {
                this.smallmenu = true;
            } else {
                this.smallmenu = false;
            }
        },
        // login
        loginHnadler(order: string) {
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
        signupHandler(order: string) {
            if (order === "open") {
                this.signup = true;
                this.login = false;
            } else if (order === "back") {
                this.signup = false;
                this.login = true;
            } else {
                this.signup = false;
            }
        },
        // forgetpass
        forgetPassHandler(order: string) {
            if (order === "open") {
                this.fogertPass = true;
                this.login = false;
            } else {
                this.fogertPass = false;
            }
        },
        // verfiy
        verfiyHandler(order: string) {
            if (order === "open") {
                this.verify = true;
                this.fogertPass = false;
            } else if (order === "back") {
                this.verify = false;
                this.fogertPass = true;
            } else {
                this.verify = false;
            }
        },
        // changepass
        changeHandler(order: string) {
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
        // video
        videoHandler(order: string) {
            if (order === "open") {
                this.video = true;
            } else {
                this.video = false;
            }
        },
    },
});
