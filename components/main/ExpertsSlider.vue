<template>
    <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :breakpoints="{ '30': { slidesPerView: 1, spaceBetween: 20 }, '768': { slidesPerView: 2, spaceBetween: 40 }, '1024': { slidesPerView: 3, spaceBetween: 20 } }"
        :pagination="{
            clickable: true,
        }"
        class="mySwiper grid grid-cols-3 gap-16"
    >
        <swiper-slide v-for="item in items" :key="item.id">
            <div class="flex flex-col items-center gap-8 justify-center">
                <div class="w-[350px]">
                    <NuxtImg class="w-full h-full" :src="item.image" alt="expert" placeholder="/member1.webp" />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="text-text font-medium text-lg">{{ item.name }}</h3>
                    <p class="text-light">{{ item.job }}</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

defineProps({
    items: {
        required: true,
    },
});
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}


.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
