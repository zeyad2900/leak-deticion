<template>
    <header class="fixed top-0 flex items-center justify-center start-0 w-full z-[1000] h-[85px] bg-dark text-white">
        <div class="container flex items-center justify-between">
            <NuxtLink href="">
                <img src="/logo.png" alt="" width="71" height="37" />
            </NuxtLink>
            <div>
                <ul class="flex items-center justify-center gap-5">
                    <NuxtLink href="">{{ $t("nav.home") }}</NuxtLink>
                    <NuxtLink href="">{{ $t("nav.services") }}</NuxtLink>
                    <NuxtLink href="">{{ $t("nav.aboutuUs") }}</NuxtLink>
                    <NuxtLink href="">{{ $t("nav.contactUs") }}</NuxtLink>
                </ul>
            </div>
            <div class="flex items-center gap-7">
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
                <button @click="changeLang" type="button" class="flex items-center gap-1">
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
