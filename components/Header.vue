<template>
    <div v-if="showSmallMenu" class="bg-[#000000c8] h-screen w-screen fixed z-[2000] flex flex-col gap-2 items-center justify-center text-white">
        <button @click="handelSmallMenu" class="absolute top-7 right-7 text-white">
            <Icon name="ep:close-bold" size="40" />
        </button>
        <ul class="flex flex-col items-center justify-center gap-1">
            <NuxtLink to="/">{{ $t("nav.home") }}</NuxtLink>
            <NuxtLink to="/#services">{{ $t("nav.services") }}</NuxtLink>
            <NuxtLink to="/about">{{ $t("nav.aboutuUs") }}</NuxtLink>
            <NuxtLink to="/contact">{{ $t("nav.contactUs") }}</NuxtLink>
        </ul>
        <button @click="changeLang" type="button" class="flex items-center gap-1">
            <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="earth" />
            {{ $t("nav.lang") }}
        </button>
    </div>
    <!-- header -->
    <header :class="white ? 'text-text bg-white border-b' : 'text-white bg-dark'" class="fixed top-0 flex items-center justify-center start-0 w-full z-[1000] h-[85px] border-light border-opacity-35">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <NuxtLink to="/">
                <nuxt-icon :class="white ? 'text-main' : 'text-white'" class="text-[70px] m-0" name="logo" />
            </NuxtLink>
            <!-- llinks -->

            <div class="">
                <ul class="hidden xl:flex items-center justify-center gap-5">
                    <NuxtLink
                        v-for="(link, index) in links"
                        :key="index"
                        :to="link.path"
                        @click="active(index)"
                        :class="index === activeLinkIndex && white ? 'text-main font-bold' : index === activeLinkIndex && !white ? 'font-bold' : ''"
                        >{{ $t("nav." + link.Name) }}</NuxtLink
                    >
                </ul>
            </div>
            <!-- buttons -->

            <div class="flex items-center gap-2 xl:gap-7">
                <ul class="flex items-center gap-2">
                    <!-- login -->
                    <li>
                        <button @click="myShowAndHideStore.openLogin()" class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="vector" />
                        </button>
                    </li>
                    <!-- notifiction -->
                    <li>
                        <button @click="myShowAndHideStore.switchNotify()" class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="notification" />
                            <img class="absolute bottom-8 left-8" width="16" height="16" src="/assets/images/imgicons/red.png" alt="" />
                        </button>
                        <PopupsNotifications v-if="notification" />
                    </li>
                </ul>
                <button @click="handelSmallMenu" class="xl:hidden relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                    <Icon name="nimbus:menu" class="" />
                </button>

                <button @click="changeLang" type="button" class="hidden xl:flex items-center gap-1">
                    <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="earth" />
                    {{ $t("nav.lang") }}
                </button>
            </div>
        </div>
    </header>
    <!-- login popups -->
    <PopupsLogin v-if="login" />
    <PopupsSignup v-if="signup" />
    <PopupsForgetPass v-if="fogertPass" />
    <PopupsVerfy v-if="verify" />
    <PopupsChangePass v-if="change" />
    <!-- pay and rate popups -->
    <!-- <PopupsPay /> -->
    <!-- <PopupsRate /> -->
    <!-- <PopupsRespiteResone /> -->
    <!-- <PopupsCancelResone/> -->
    <!-- <PopupsDelete /> -->
    <!-- <PopupsChangePassProfile/> -->
    <!-- <PopupsChoseNewDate/> -->
</template>

<script setup>
const { locale, setLocale } = useI18n();
const route = useRoute();
const myShowAndHideStore = useMyShowAndHideStore();

const { login, signup, fogertPass, verify, change, notification } = storeToRefs(myShowAndHideStore);
const white = ref(true);
const showSmallMenu = ref(false);
const activeLinkIndex = ref(null);

const links = ref([
    { Name: "home", path: "/" },
    { Name: "services", path: "/#services" },
    { Name: "aboutuUs", path: "/about" },
    { Name: "contactUs", path: "/contact" },
]);

const active = (index) => {
    activeLinkIndex.value = index;
};

// change lang logic
const changeLang = () => {
    const newLocale = locale.value === "en" ? "ar" : "en"; // Example toggle between 'en' and 'fr'
    setLocale(newLocale);
};
// change color of header
const handleScroll = () => {
    const scrollY = window.scrollY;
    if (route.fullPath == "/" && scrollY < 50) {
        white.value = false;
    } else if (route.fullPath == "/#services" && scrollY < 50) {
        white.value = false;
    } else if (route.fullPath == "/en" && scrollY < 50) {
        white.value = false;
    } else {
        white.value = true;
    }
};

// show small menu
const handelSmallMenu = () => {
    showSmallMenu.value = !showSmallMenu.value;
};
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
