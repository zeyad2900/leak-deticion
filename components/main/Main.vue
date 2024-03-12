<template>
    <main id="main" class="relative min-h-[100vh] bg-dark">
        <div class="container pt-[140px]">
            <!-- video button -->
            <div class="flex flex-col md:flex-row gap-6 md:items-center z-20">
                <div class="lg:absolute lg:bottom-5 z-50">
                    <div class="relative overflow-hidden w-[250px] h-[250px] md:w-[280px] md:h-[280px] mx-auto rounded-full mb-5 order-1 md:order-2">
                        <button @click="video = true" class="bg-dark absolute left-0 top-0 flex justify-center items-center w-full h-full">
                            <span class="w-16 h-16 rounded-full border bg-primary border-primary flex justify-center items-center z-20">
                                <img src="/assets/images/main/next.webp" alt="next" />
                            </span>
                            <NuxtImg class="w-full h-full object-cover absolute" placeholder="/video.webp" :src="data?.image" alt="video" />
                        </button>
                    </div>
                </div>
                <PopupsVideo v-if="video" @close-video="video = false" :item="data?.video" />
                <!-- text -->
                <div class="flex flex-col md:flex-1 items-center lg:flex-row space-y-5 lg:space-y-0 justify-between order-2 md:order-1">
                    <h1 class="text-white md:text-start text-center font-bold xl:text-3xl lg:max-w-[200px] xl:max-w-[350px] z-20">{{ $t("main.welcomeToOurWebsite") }}</h1>
                    <p class="bg-[#0A4088] p-5 md:text-start lg:text-base text-sm rounded-full text-white text-center lg:max-w-[450px] z-20">
                        {{ $t("main.WeCareAboutMeeting") }}
                    </p>
                </div>
            </div>
            <!-- image -->
            <div class="w-full flex items-center justify-center mt-10">
                <NuxtImg class="xl:absolute bottom-0 xl:h-[75%] xl:w-full object-contain z-0" :src="data.big_image" alt="bigi image" placeholder="/main.webp" />
            </div>
            <!-- scroll to services -->
            <NuxtLink
                to="/#services"
                type="button"
                class="end-[50px] hidden arrow-button rtl:scale-x-[-1] bg-[#0A4088] w-20 h-20 z-20 rounded-full justify-center items-center lg:flex absolute bottom-11 btn-move"
            >
                <img src="/assets/images/main/arrow-down.webp" alt="" />
            </NuxtLink>
        </div>
    </main>
</template>

<script setup>
defineProps({
    data: {
        required: true,
    },
});
const video = ref(false);
</script>

<style></style>
