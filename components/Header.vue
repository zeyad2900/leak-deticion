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
            <img width="16" height="16" src="/assets/images/imgicons/earth.png" alt="" />
            {{ $t("nav.lang") }}
        </button>
    </div>
    <!-- header -->
    <header :class="white ? 'text-text bg-white border-b' : 'text-white bg-dark'" class="fixed top-0 flex items-center justify-center start-0 w-full z-[1000] h-[85px] border-stroke">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <NuxtLink href="">
                <img v-if="!white" src="/logo.png" alt="" width="71" height="37" />
                <img v-if="white" src="/logob.png" alt="" width="71" height="37" />
            </NuxtLink>
            <!-- llinks -->

            <div class="">
                <ul class="hidden xl:flex items-center justify-center gap-5">
                    <NuxtLink to="/">{{ $t("nav.home") }}</NuxtLink>
                    <NuxtLink to="/#services">{{ $t("nav.services") }}</NuxtLink>
                    <NuxtLink to="/about">{{ $t("nav.aboutuUs") }}</NuxtLink>
                    <NuxtLink to="/contact">{{ $t("nav.contactUs") }}</NuxtLink>
                </ul>
            </div>
            <!-- buttons -->

            <div class="flex items-center gap-2 xl:gap-7">
                <ul class="flex items-center gap-2">
                    <!-- login -->
                    <li>
                        <button @click="myShowAndHideStore.openLogin()" class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <img v-if="!white" src="/assets/images/imgicons/user.png" alt="" />
                            <img v-if="white" src="/assets/images/imgicons/userb.png" alt="" />
                        </button>
                    </li>
                    <!-- notifiction -->
                    <li>
                        <button @click="myShowAndHideStore.switchNotify()" class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <img v-if="!white" src="/assets/images/imgicons/bell.png" alt="" />
                            <img v-if="white" src="/assets/images/imgicons/bellb.png" alt="" />
                            <img class="absolute bottom-8 left-8" width="16" height="16" src="/assets/images/imgicons/red.png" alt="" />
                        </button>
                        <PopupsNotifications v-if="notification" />
                    </li>
                </ul>
                <button @click="handelSmallMenu" class="xl:hidden relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                    <Icon name="nimbus:menu" class="" />
                </button>

                <button @click="changeLang" type="button" class="hidden xl:flex items-center gap-1">
                    <img v-if="!white" width="16" height="16" src="/assets/images/imgicons/earth.png" alt="" />
                    <img v-if="white" width="16" height="16" src="/assets/images/imgicons/earthb.png" alt="" />
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
</template>

<script setup>
const { locale, setLocale } = useI18n();
const route = useRoute();
const myShowAndHideStore = useMyShowAndHideStore();

const { login, signup, fogertPass, verify, change, notification } = storeToRefs(myShowAndHideStore);
const white = ref(true);
const showSmallMenu = ref(false);

// change lang logic
const changeLang = () => {
    const newLocale = locale.value === "en" ? "ar" : "en"; // Example toggle between 'en' and 'fr'
    setLocale(newLocale);
};
// change color of header
const handleScroll = () => {
    const scrollY = window.scrollY;
    if (route.fullPath === "/" && scrollY < 50) {
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
