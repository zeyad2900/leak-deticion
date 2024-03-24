<template>
    <div class="bg-[#000000c8] h-screen w-screen fixed z-[2000] top-0 left-0 flex flex-col gap-2 items-center justify-center text-white">
        <button @click="myShowAndHideStore.smallMenueHndler('close')" class="absolute top-7 right-7 text-white">
            <Icon name="ep:close-bold" size="40" />
        </button>
        <ul class="flex flex-col items-center justify-center gap-6">
            <NuxtLink :to="localePath('/')">{{ $t("NAV.home") }}</NuxtLink>
            <NuxtLink :to="localePath('/#services')">{{ $t("NAV.services") }}</NuxtLink>
            <NuxtLink :to="localePath('/about')">{{ $t("NAV.about") }}</NuxtLink>
            <NuxtLink :to="localePath('/contact')">{{ $t("NAV.contact") }}</NuxtLink>
        </ul>
        <button @click="changeLang" type="button" class="flex items-center gap-1">
            <nuxt-icon class="text-white text-[25px] mt-1 p-0" name="earth" />
            {{ $t("NAV.lang") }}
        </button>
    </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const changeLang = () => {
    const newLocale = locale.value === "en" ? "ar" : "en"; // Example toggle between 'en' and 'fr'
    setLocale(newLocale);
};
const myShowAndHideStore = useMyShowAndHideStore();
</script>
