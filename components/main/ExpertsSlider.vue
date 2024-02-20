<template>
    <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
            clickable: true,
        }"
        class="mySwiper grid grid-cols-3 gap-16"
    >
        <swiper-slide>
            <div class="flex flex-col items-center gap-8 justify-center">
                <img src="/assets/images/main/member3.webp" alt="" />
                <div class="flex flex-col items-center gap-2">
                    <h3 class="text-text font-medium text-lg">ندي علي</h3>
                    <p class="text-light">خبير تسريب المياه</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex flex-col items-center gap-8 justify-center">
                <img src="/assets/images/main/member2.webp" alt="" />
                <div class="flex flex-col items-center gap-2">
                    <h3 class="text-text font-medium text-lg">ندي علي</h3>
                    <p class="text-light">خبير تسريب المياه</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex flex-col items-center gap-8 justify-center">
                <img src="/assets/images/main/member1.webp" alt="" />
                <div class="flex flex-col items-center gap-2">
                    <h3 class="text-text font-medium text-lg">ندي علي</h3>
                    <p class="text-light">خبير تسريب المياه</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex flex-col items-center gap-8 justify-center">
                <img src="/assets/images/main/member3.webp" alt="" />
                <div class="flex flex-col items-center gap-2">
                    <h3 class="text-text font-medium text-lg">ندي علي</h3>
                    <p class="text-light">خبير تسريب المياه</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
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
    width: 100% !important;
}

@media (min-width: 992px) {
    .swiper-slide {
        width: calc(100% / 2) !important;
    }
}
@media (min-width: 1200px) {
    .swiper-slide {
        width: calc(100% / 3) !important;
    }
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
