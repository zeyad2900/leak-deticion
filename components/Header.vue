<template>
    <HeaderSmallMenu v-if="smallmenu" />

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
                    <!-- notifiction -->
                    <li>
                        <button @click="myShowAndHideStore.switchNotify()" class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="notification" />
                            <img class="absolute bottom-8 left-8" width="16" height="16" src="/assets/images/imgicons/red.png" alt="" />
                        </button>
                        <PopupsNotifications v-if="notification" />
                    </li>
                    <!-- login -->
                    <li>
                        <button @click="myShowAndHideStore.loginHnadler('open')" class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="vector" />
                        </button>
                    </li>
                </ul>
                <!-- small icon button -->
                <button @click="myShowAndHideStore.smallMenueHndler('open')" class="xl:hidden relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                    <Icon name="nimbus:menu" class="" />
                </button>

                <!-- lang button -->
                <button @click="changeLang" type="button" class="hidden xl:flex items-center gap-1">
                    <nuxt-icon :class="white ? 'text-text' : 'text-white'" class="text-[25px] mt-1 p-0" name="earth" />
                    {{ $t("nav.lang") }}
                </button>
            </div>
        </div>
    </header>
    <!-- login popups -->
    <PopupsAuthLogin v-if="login" />
    <PopupsAuthSignup v-if="signup" />
    <PopupsAuthForgetPass v-if="fogertPass" />
    <PopupsAuthVerfy v-if="verify" />
    <PopupsAuthChangePass v-if="change" />
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

const { login, signup, fogertPass, verify, change, notification, smallmenu } = storeToRefs(myShowAndHideStore);
const white = ref(true);
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

// show small menu
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
