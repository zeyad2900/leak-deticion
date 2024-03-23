<template>
    <HeaderSmallMenu v-if="smallmenu" />

    <!-- header -->
    <header :class="white ? 'text-text bg-white border-b' : 'text-white bg-dark'" class="fixed top-0 flex items-center justify-center start-0 w-full z-[1000] h-[85px] border-light border-opacity-35">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <NuxtLink :to="localePath('/')">
                <nuxt-icon :class="white ? 'text-main' : 'text-white'" class="text-[70px] m-0" name="logo" />
            </NuxtLink>
            <!-- llinks -->
            <div class="">
                <ul class="hidden xl:flex items-center justify-center gap-5">
                    <NuxtLink
                        v-for="(link, index) in links"
                        :key="index"
                        :to="localePath(link.path)"
                        @click="active(index)"
                        :class="index === activeLinkIndex && white ? 'text-main font-bold' : index === activeLinkIndex && !white ? 'font-bold' : ''"
                        >{{ $t("NAV." + link.Name) }}</NuxtLink
                    >
                </ul>
            </div>
            <!-- buttons -->
            <div class="flex items-center gap-2 xl:gap-7">
                <ul class="flex items-center gap-2">
                    <!-- notifiction -->
                    <li v-if="isLogin">
                        <button @click="myShowAndHideStore.switchNotify()" class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="notification" />
                            <img v-if="Allnotifications.length > 0" class="absolute bottom-8 left-8" width="16" height="16" src="/assets/images/imgicons/red.png" alt="" />
                        </button>
                    </li>
                    <!-- login -->
                    <li>
                        <button @click="loginHandler" class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="vector" />
                        </button>
                    </li>
                </ul>
                <!-- small menu button -->
                <button @click="myShowAndHideStore.smallMenueHndler('open')" class="xl:hidden relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                    <Icon name="nimbus:menu" class="" />
                </button>

                <!-- lang button -->
                <button @click="changeLang" type="button" class="hidden xl:flex items-center gap-1">
                    <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="earth" />
                    {{ $t("NAV.lang") }}
                </button>
                <audio controls class="z-[10000] hidden" ref="notificationSound">
                    <source src="/assets/notifications.wav" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    </header>
    <!-- login popups -->
    <Teleport to="body">
        <PopupsNotifications v-if="notification" :notifications="Allnotifications" @delete="Allnotifications = []" />
        <PopupsAuthLogin v-if="login" />
        <PopupsAuthSignup v-if="signup" />
        <PopupsAuthForgetPass v-if="fogertPass" />
        <PopupsAuthVerfy v-if="verify" />
        <PopupsAuthChangePass v-if="change" />
    </Teleport>
</template>

<script setup>
import { useToast } from "vue-toastification";

const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const toast = useToast();
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const token = useCookie("leakDetectionToken");
const myShowAndHideStore = useMyShowAndHideStore();
const notificationSound = ref();

const { login, signup, fogertPass, verify, change, notification, smallmenu } = storeToRefs(myShowAndHideStore);
const white = ref(true);
const activeLinkIndex = ref(null);
const Allnotifications = ref([]);
const isLogin = useToggleLogin();

const links = ref([
    { Name: "home", path: "/" },
    { Name: "services", path: "/#services" },
    { Name: "about", path: "/about" },
    { Name: "contact", path: "/contact" },
]);

const active = (index) => {
    activeLinkIndex.value = index;
};

// change lang logic
const changeLang = () => {
    const newLocale = locale.value === "en" ? "ar" : "en"; // Example toggle between 'en' and 'fr'
    setLocale(newLocale);
};

// change header color
const handleScroll = () => {
    const scrollY = window.scrollY;
    if (route.fullPath == "/" && scrollY < 50) {
        white.value = false;
    } else if (route.fullPath == "/#services" && scrollY < 50) {
        white.value = false;
    } else if (route.fullPath == "/en" && scrollY < 50) {
        white.value = false;
    } else if (route.fullPath == "/en/#services" && scrollY < 50) {
        white.value = false;
    } else {
        white.value = true;
    }
};
// login button
const loginHandler = () => {
    if (isLogin.value === false) {
        myShowAndHideStore.loginHnadler("open");
    } else {
        router.push(localePath("/profile"));
    }
};

if (token.value) {
    getNotifictions();
}

async function getNotifictions() {
    await $fetch(`${config.public.baseURL}website/notifications`, {
        headers: {
            Authorization: `Bearer  ${token.value}`,
            accept: "application/json",
            "Accept-Language": locale.value,
        },
    }).then((res) => {
        Allnotifications.value = res.data;
    });
}

// show small menu
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    const profileId = useCookie("profileId");

    const io = useIO();
    const socket2 = io(config.public.socketURL);
    socket2.on("connect", (payload) => {
        console.log("connected");
    });

    socket2.on(`notification:${profileId.value}`, (payload) => {
        toast.success("اشعار جديد");
        Allnotifications.value.unshift(payload);
        notificationSound.value.play();
    });

    socket2.on("error", (error) => {
        toast.error(error);
        console.error("Socket error:", error);
    });
});
</script>

<style scoped></style>
