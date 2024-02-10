<template>
    <footer class="mt-auto bg-[#FAFDFF]">
        <div class="container py-14">
            <div class="flex flex-wrap justify-between gap-6">
                <div class="space-y-6 w-[30%]">
                    <NuxtLink to="/about"><img width="108" height="56" src="/logos.svg" alt="" /></NuxtLink>
                    <p class="max-w-[500px]">{{ $t("footer.main") }}</p>
                    <div class="social flex justify-start items-center">
                        <a href="" class="ml-3"><img src="/assets/images/social/Facebook.png" alt="" /></a>
                        <a href="" class="ml-3"><img src="/assets/images/social/Instagram.png" alt="" /></a>
                        <a href="" class="ml-3"><img src="/assets/images/social/Twitter.png" alt="" /></a>
                        <a href="" class="ml-3"><img src="/assets/images/social/youtube.png" alt="" /></a>
                    </div>
                </div>
                <div class="w-[30%]">
                    <h2 class="font-medium leading-7 text-lg mb-5">{{ $t("footer.doYouHaveQuestions") }}</h2>
                    <div class="flex items-end gap-2">
                        <img src="/assets/images/icons/mail.png" alt="" />
                        <a href="">contact@company.com</a>
                    </div>
                    <div class="flex items-end gap-2">
                        <img src="/assets/images/icons/phone.png" alt="" />
                        <a href="">(414) 687 - 5892</a>
                    </div>
                </div>
                <div class="flex flex-col w-[27%]">
                    <div class="flex justify-between mb-10">
                        <div>
                            <h2 class="font-medium leading-7 text-lg mb-5">{{ $t("footer.QuickAccess") }}</h2>
                            <ul>
                                <li class="mb-3">
                                    <NuxtLink>{{ $t("footer.OurServices") }}</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink>{{ $t("footer.RequestAservice") }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="font-medium leading-7 text-lg mb-5">{{ $t("footer.AboutOurSite") }}</h2>
                            <ul>
                                <li class="mb-3">
                                    <NuxtLink>{{ $t("footer.aboutuUs") }}</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink>{{ $t("footer.contactUs") }}</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink>{{ $t("footer.termsCndConditions") }}</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink>{{ $t("footer.privacyPolicy") }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="flex items-center justify-end gap-5">
                        <li>
                            <a href="#"><img src="/assets/images/social/AppStore.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="/assets/images/social/GooglePlay.png" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-[#003773] py-6 text-white">
            <p class="text-center text-white">{{ $t("footer.end") }}</p>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped></style>
