<template>
    <article id="about" class="container py-20">
        <div class="grid grid-cols-3 gap-9">
            <div class="col-span-3 space-y-10 lg:col-span-2 order-2 lg:order-1">
                <UIBage>{{ $t("NAV.about") }}</UIBage>
                <h2
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow fadeInUp text-2xl md:text-3xl lg:text-5xl max-w-[650px] font-medium mb-2 lg:leading-[3.5rem] text-text leading-[2.5rem]"
                >
                    {{ items.title }}
                </h2>

                <div class="grid sm:grid-cols-2 gap-x-[24px] gap-y-[50px]">
                    <div v-for="advantage in advantages" :key="advantage.id" data-wow-duration="1.3s" data-wow-delay="150" class="animated wow fadeInUp flex gap-3 items-center">
                        <div class="w-16 h-16 rounded-full bg-stroke flex items-center justify-center">
                            <nuxt-img :src="advantage.image" placeholder="/car.png" width="30" height="30" alt="truck fast" />
                        </div>
                        <div>
                            <h3 class="font-medium">{{ advantage.title }}</h3>
                            <div class="text-light text-sm" v-html="advantage.desc"></div>
                        </div>
                    </div>
                </div>

                <NuxtLink v-if="!isAbout" class="mainbtn !w-fit" :to="localePath('/about')">{{ $t("BUTTONS.showMore") }}</NuxtLink>
            </div>

            <div
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
                class="animated wow zoomIn flex items-center col-span-3 lg:col-span-1 order-1 lg:order-2 w-[280px] h-[280px] md:w-[400px] md:h-full mx-auto mb-11 lg:mb-0 relative"
            >
                <button @click="video = true" class="round relative">
                    <span class="absolute top-[40%] end-[40%] w-16 h-16 rounded-full border flex justify-center items-center z-20">
                        <img src="/assets/images/main/next.webp" alt="next" />
                    </span>
                    <NuxtImg width="320px" :src="items.image" placeholder="/video.webp" alt="video2" />
                </button>
            </div>
            <PopupsVideo v-if="video" @close-video="video = false" :item="items?.video" />
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    isAbout: {
        required: false,
    },
    items: {
        required: true,
    },
    advantages: {
        required: true,
    },
});

const video = ref(false);
</script>

<style scoped>
.round::before {
    content: "";
    background-color: #f7f7fc;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 20px;
    inset-inline-start: 20px;
    border-radius: 50%;
    z-index: -1;
}

.round::after {
    content: "";
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid black;
    top: 20px;
    inset-inline-end: 20px;
    border-radius: 50%;
    z-index: -1;
}
</style>
