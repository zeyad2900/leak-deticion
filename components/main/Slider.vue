<template>
    <article class="container py-20">
        <div class="w-full">
            <div class="mb-10">
                <UIBage>{{ $t("TITLES.rate") }}</UIBage>
                <h2
                    data-wow-duration="1.3s"
                    data-wow-delay="0.5s"
                    class="animated wow fadeInUp text-2xl md:text-3xl lg:text-5xl max-w-[650px] font-medium mb-2 lg:leading-[3.5rem] text-text leading-[2.5rem]"
                >
                    {{ $t("TITLES.usersRate") }}
                </h2>
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
                    <GlobalSliderCard :item="item" />
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
        type: Array,
    },
});
</script>

<style scoped>
.mySwiper {
    @apply pt-[100px]
}
.swiper {
    @apply relative w-full h-full
}

.swiper-slide {
    @apply w-full
}

@media (min-width: 800px) {
    .swiper-slide {
        @apply w-[50%]
    }
}
</style>
