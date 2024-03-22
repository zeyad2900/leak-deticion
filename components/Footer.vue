<template>
    <footer class="mt-auto bg-[#FAFDFF]">
        <div class="container py-14">
            <div class="flex flex-wrap flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between gap-6">
                <div class="space-y-6 w-full lg:w-[30%]">
                    <NuxtLink to="/#main"><img width="108" height="56" src="/logos.svg" alt="" /></NuxtLink>
                    <div class="social flex justify-start items-center">
                        <a :href="items.facebook" class="ml-3"><img src="/assets/images/social/Facebook.png" alt="" /></a>
                        <a :href="items.instagram" class="ml-3"><img src="/assets/images/social/Instagram.png" alt="" /></a>
                        <a :href="items.youtube" class="ml-3"><img src="/assets/images/social/youtube.png" alt="" /></a>
                    </div>
                </div>
                <div class="w-full lg:w-[30%]">
                    <h2 class="font-medium leading-7 text-lg mb-5">{{ $t("NAV.doYouHaveQuestions") }}</h2>
                    <div class="flex items-end gap-2 mb-4">
                        <img src="/assets/images/imgicons/mail.png" alt="" />
                        <p href="">{{ items.email }}</p>
                    </div>
                    <div class="flex items-end gap-2">
                        <img src="/assets/images/imgicons/phone.png" alt="" />
                        <p href="">{{ items.phone }}</p>
                    </div>
                </div>
                <div class="flex flex-col w-full lg:w-[30%]">
                    <div class="flex lg:flex-row flex-col justify-between mb-10">
                        <div>
                            <h2 class="font-medium leading-7 text-lg mb-5">{{ $t("NAV.quickAccess") }}</h2>
                            <ul>
                                <li class="mb-3">
                                    <NuxtLink to="/#services">{{ $t("NAV.ourServices") }}</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink to="/#services">{{ $t("NAV.callService") }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="font-medium leading-7 text-lg mb-5">{{ $t("NAV.mainlinks") }}</h2>
                            <ul>
                                <li class="mb-3">
                                    <NuxtLink to="/about">{{ $t("NAV.about") }}</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink to="/contact">{{ $t("NAV.contact") }}</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink to="/terms">{{ $t("NAV.terms") }}</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink to="/policy">{{ $t("NAV.privacy") }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="flex items-center justify-center lg:justify-end gap-5">
                        <li>
                            <a :href="items.app_store"><img src="/assets/images/imgicons/AppStore.png" alt="" /></a>
                        </li>
                        <li>
                            <a :href="items.google_play"><img src="/assets/images/imgicons/GooglePlay.png" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-[#003773] py-6 text-white">
            <p class="text-center text-white">{{ $t("SectionsDescription.copyRights", { year: currentYear }) }}</p>
        </div>
    </footer>
</template>

<script setup>
defineProps({
    items: {
        required: true,
    },
});
const currentYear = new Date().getFullYear();
</script>

<style scoped></style>
