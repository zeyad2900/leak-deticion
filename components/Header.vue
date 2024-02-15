<template>
    <header class="fixed top-0 flex items-center justify-center start-0 w-full z-[1000] h-[85px] bg-dark text-white">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <NuxtLink href="">
                <img src="/logo.png" alt="" width="71" height="37" />
            </NuxtLink>
            <!-- llinks -->

            <div class="">
                <ul class="hidden xl:flex items-center justify-center gap-5">
                    <NuxtLink to="/#main">{{ $t("nav.home") }}</NuxtLink>
                    <NuxtLink to="/#services">{{ $t("nav.services") }}</NuxtLink>
                    <NuxtLink to="/about">{{ $t("nav.aboutuUs") }}</NuxtLink>
                    <NuxtLink to="/contact">{{ $t("nav.contactUs") }}</NuxtLink>
                </ul>
            </div>
            <!-- buttons -->

            <div class="flex items-center gap-2 xl:gap-7">
                <ul class="flex items-center gap-2">
                    <li>
                        <button class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <img src="/assets/images/icons/user.png" alt="" />
                        </button>
                    </li>
                    <li>
                        <button class="relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                            <img src="/assets/images/icons/bell.png" alt="" />
                            <img class="absolute bottom-8 left-8" width="16" height="16" src="/assets/images/icons/red.png" alt="" />
                        </button>
                    </li>
                </ul>
                <button class="xl:hidden relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
                    <Icon name="nimbus:menu" />
                </button>
                <button @click="changeLang" type="button" class="hidden xl:flex items-center gap-1">
                    <img width="16" height="16" src="/assets/images/icons/earth.png" alt="" />
                    {{ $t("nav.lang") }}
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const changeLang = () => {
    const newLocale = locale.value === "en" ? "ar" : "en"; // Example toggle between 'en' and 'fr'
    setLocale(newLocale);
};
</script>

<style scoped></style>
