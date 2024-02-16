<template>
    <main id="main" class="relative min-h-[100vh] bg-dark">
        <div class="container pt-[140px]">
            <div class="flex flex-col md:flex-row gap-6 md:items-center z-20">
                <div class="lg:absolute lg:bottom-5 z-50">
                    <div class="relative overflow-hidden w-[250px] h-[250px] md:w-[280px] md:h-[280px] mx-auto rounded-full mb-5 order-1 md:order-2">
                        <button class="bg-dark absolute left-0 top-0 flex justify-center items-center w-full h-full">
                            <span class="w-16 h-16 rounded-full border bg-primary border-primary flex justify-center items-center z-20">
                                <img src="/assets/images/main/next.png" alt="" />
                            </span>
                            <img class="w-full h-full object-cover absolute z-10" src="/assets/images/main/video.png" alt="" />
                        </button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-1 items-center lg:flex-row space-y-5 lg:space-y-0 justify-between order-2 md:order-1">
                    <h1 class="text-white md:text-start text-center font-bold xl:text-3xl lg:max-w-[350px]">{{ $t("main.welcomeToOurWebsite") }}</h1>
                    <p class="bg-[#0A4088] animated wow fadeInRight p-5 md:text-start lg:text-base text-sm rounded-full text-white text-center lg:max-w-[450px] animated">
                        {{ $t("main.WeCareAboutMeeting") }}
                    </p>
                </div>
            </div>

            <div class="w-full flex items-center justify-center mt-10">
                <img class="xl:absolute bottom-0 xl:h-[75%] xl:w-full z-10 object-contain" src="/assets/images/main/main.png" alt="" />
            </div>

            <NuxtLink
                to="/#services"
                type="button"
                :class="position"
                class="hidden arrow-button bg-[#0A4088] w-20 h-20 z-20 rounded-full justify-center items-center lg:flex absolute bottom-11 btn-move"
            >
                <img src="/assets/images/imgicons/arrow-down.png" alt="" />
            </NuxtLink>
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
