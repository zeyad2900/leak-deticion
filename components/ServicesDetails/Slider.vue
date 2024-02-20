<template>
    <div class="flex w-full gap-5 mb-5">
        <swiper :spaceBetween="10" :navigation="false" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2 basis-8/12">
            <swiper-slide><img src="/assets/images/servicesdetails/main.webp" /></swiper-slide>
            <swiper-slide><img src="/assets/images/servicesdetails/main.webp" /></swiper-slide>
        </swiper>
        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper basis-4/12">
            <swiper-slide><img src="/assets/images/servicesdetails/main.webp" /></swiper-slide>
            <swiper-slide><img src="/assets/images/servicesdetails/main.webp" /></swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
let modules = [FreeMode, Navigation, Thumbs];
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
    border-radius: 20px;
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

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 80%;
    width: 100%;
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 1;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.wrap {
    display: flex !important;
    flex-direction: column !important;
}
</style>
