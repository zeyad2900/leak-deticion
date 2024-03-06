<template>
    <article class="container py-20">
        <div class="w-full">
            <div class="mb-10">
                <UIBage>تقييمنا </UIBage>
                <h1 class="text-2xl md:text-3xl lg:text-5xl max-w-[650px] font-medium mb-2 lg:leading-[3.5rem] text-text leading-[2.5rem]">اراء عملائنا</h1>
            </div>
            <swiper
                :slidesPerView="'auto'"
                :centeredSlides="true"
                :spaceBetween="30"
                :navigation="false"
                :loop="data.length > 5 ? true : false"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <UISliderbtn />
                <swiper-slide v-for="item in data" :key="item.id">
                    <div class="max-w-[600px] bg-stroke p-4 rounded-md">
                        <img src="/assets/images/imgicons/quote.png" alt="" />
                        <div class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6" v-html="item.desc"></div>
                        <div class="flex gap-5 items-center">
                            <NuxtImg class="w-12 h-12" :src="item.image" placeholder="/user.png" alt="user" />
                            <div>
                                <h3 class="text-base font-bold text-text">{{ item.name }}</h3>
                                <p>{{ item.job }}</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </article>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

let modules = [Navigation, Autoplay, EffectCoverflow];

defineProps({
    data: {
        required: true,
    },
});
</script>

<style scoped>
.mySwiper {
    padding-top: 100px;
}
.swiper {
    position: relative;
    width: 100%;
    height: 100%;
}

.swiper-slide {
    width: 100%;
}

@media (min-width: 800px) {
    .swiper-slide {
        width: 50%;
    }
}
</style>
