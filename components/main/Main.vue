<template>
    <main id="main" class="bg-dark h-screen text-white relative">
        <div class="container pt-[140px]">
            <div class="flex flex-col items-start gap-6">
                <div class="flex justify-between items-center w-full">
                    <h1 class="text-white font-bold text-3xl max-w-[350px] text-start">{{ $t("main.welcomeToOurWebsite") }}</h1>
                    <p class="text-white bg-[#0A4088] p-5 rounded-full max-w-[450px]">{{ $t("main.WeCareAboutMeeting") }}</p>
                </div>
                <div class="absolute bottom-20">
                    <img class="w-[300px]" src="/assets/images/main/video.png" alt="" />
                </div>
            </div>
            <div class="w-full flex justify-center">
                <img class="absolute bottom-0 w-[550px]" src="/assets/images/main/main.png" alt="" />
            </div>
            <button type="button" :class="position" class="absolute bottom-20 flex justify-center items-center bg-main p-4 rounded-full">
                <img src="/assets/images/icons/arrow-down.png" alt="" />
            </button>
        </div>
    </main>
</template>

<script setup>
const { locale } = useI18n();

const position = computed(() => {
    return locale.value === "ar" ? "left-16" : "right-16";
});
</script>

<style></style>
