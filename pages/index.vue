<template>
    <main class="bg-dark h-screen text-white relative">
        <div class="container pt-[140px]">
            <div class="flex flex-col items-start gap-6">
                <div class="flex justify-between items-center w-full">
                    <h1 class="text-white font-bold text-3xl max-w-[350px] text-start">{{ $t("main.welcomeToOurWebsite") }}</h1>
                    <p class="text-white bg-[#0A4088] p-5 rounded-full max-w-[450px]">{{ $t("main.WeCareAboutMeeting") }}</p>
                </div>
                <div class="absolute bottom-20">
                    <img src="/assets/images/main/video.png" alt="" />
                </div>
            </div>
            <div class="w-full flex justify-center">
                <img class="absolute bottom-0" src="/assets/images/main/main.png" alt="" />
            </div>
            <button type="button" :class="position" class="absolute bottom-20 flex justify-center items-center bg-main p-4 rounded-full">
                <img src="/assets/images/icons/arrow-down.png" alt="" />
            </button>
        </div>
    </main>
    <article id="services" class="container py-24 overflow-hidden">
        <div class="flex justify-between items-center bg-[url('/assets/images/main/servicesbackground.png')] bg-cover h-[550px] p-10 w-full rounded-3xl min-h-[550px] relative">
            <div>
                <UIBage class="mb-10 px-5 py-2 text-md font-medium bg-white rounded-full w-fit text-main">{{ $t("main.ourServices") }}</UIBage>
                <h1 class="mb-16 text-5xl max-w-[640px] font-[25px]">{{ $t("main.chooseTheService") }}</h1>
                <p class="text-light">{{ $t("main.tellUs") }}</p>
            </div>
            <div>
                <NuxtLink class="mb-6 flex flex-col items-center gap-4">
                    <img class="bg-white p-4 flex justify-center items-center rounded-3xl" src="/assets/images/main/service1.png" alt="" />
                    <p class="text-main font-bold">{{ $t("main.leakDetection") }}</p>
                </NuxtLink>
                <NuxtLink class="mb-6 flex flex-col items-center gap-4">
                    <img class="bg-white p-4 flex justify-center items-center rounded-3xl" src="/assets/images/main/service2.png" alt="" />
                    <p class="text-main font-bold">{{ $t("main.insulationInspection") }}</p>
                </NuxtLink>
            </div>
        </div>
    </article>
    <MainAbout />
    <MainServeice />
    <article id="our-experts" class="container py-24">
        <div class="flex justify-between items-center">
            <div>
                <UIBage>خبرائنا</UIBage>
                <h1 class="mb-16 text-5xl max-w-[640px] font-[25px]">افضل خبراء لدينا</h1>
            </div>
            <UIButton>تواصل معنا</UIButton>
        </div>
        <div class="grid grid-cols-3 gap-16">
            <div class="col-span-1 flex flex-col items-center gap-8 justify-center">
                <img src="/assets/images/main/member3.png" alt="" />
                <div class="flex flex-col items-center gap-2">
                    <h3 class="text-text font-medium text-lg">ندي علي</h3>
                    <p class="text-light">خبير تسريب المياه</p>
                </div>
            </div>
            <div class="col-span-1 flex flex-col items-center gap-8 justify-center">
                <img src="/assets/images/main/member2.png" alt="" />
                <div class="flex flex-col items-center gap-2">
                    <h3 class="text-text font-medium text-lg">احمد جلال</h3>
                    <p class="text-light">خبير تسريب المياه</p>
                </div>
            </div>
            <div class="col-span-1 flex flex-col items-center gap-8 justify-center">
                <img src="/assets/images/main/member1.png" alt="" />
                <div class="flex flex-col items-center gap-2">
                    <h3 class="text-text font-medium text-lg">نادر كمال</h3>
                    <p class="text-light">خبير تسريب المياه</p>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
const { locale } = useI18n();

const position = computed(() => {
    return locale.value === "ar" ? "left-16" : "right-16";
});
</script>

<style scoped></style>
