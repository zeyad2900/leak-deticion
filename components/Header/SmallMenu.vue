<template>
    <div class="bg-[#000000c8] h-screen w-screen fixed z-[2000] flex flex-col gap-2 items-center justify-center text-white">
        <button @click="myShowAndHideStore.smallMenueHndler('close')" class="absolute top-7 right-7 text-white">
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
</template>

<script setup>
const myShowAndHideStore = useMyShowAndHideStore();
</script>

<style></style>
