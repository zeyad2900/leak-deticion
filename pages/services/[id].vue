<template>
    <article class="container mt-40 mb-24">
        <div class="">
            <div class="">
                <ClientOnly>
                    <swiper
                        :style="{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }"
                        :spaceBetween="10"
                        :navigation="false"
                        :thumbs="{ swiper: thumbsSwiper }"
                        :modules="modules"
                        class="mySwiper2"
                    >
                        <swiper-slide v-for="i in 4" :key="i"><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                    </swiper>

                    <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="i in 4" :key="i"><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                    </swiper>
                </ClientOnly>
            </div>

            <div class="col-span-2"></div>

            <UIBaseCard>
                <button class="text-2xl block ms-auto">
                    <Icon name="mi:close"></Icon>
                </button>
                <h3 class="text-center font-bold mb-7 text-text text-xl">تسجيل دخول</h3>

                <form action="">
                    <div class="flex flex-col mb-3">
                        <label class="text-light font-bold mb-1">رقم الهاتف</label>
                        <div class="flex justify-center items-center">
                            <div class="h-12">
                                <UIHeadlessButton />
                            </div>
                            <input placeholder="رقم الهاتف" class="py-3 ps-5 text-sm w-full h-12 font-bold border border-light rounded-xl" type="text" />
                        </div>
                    </div>
                    <div class="flex flex-col mb-2">
                        <label class="text-light font-bold mb-1">كلمة المرور</label>
                        <input placeholder="كلمه المرور" class="py-3 ps-5 text-sm w-full h-12 font-bold border border-light rounded-xl" type="password" />
                    </div>
                </form>
                <button class="font-bold block mb-7">نسيت كلمه المرور؟</button>
                <UIButton class="w-full mb-1">تسجيل الدخول</UIButton>
                <div class="flex text-center items-center justify-center">
                    <p>ليس لديك حساب ؟</p>
                    <button class="font-bold">انشاء حساب جديد</button>
                </div>
            </UIBaseCard>
        </div>
    </article>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
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
    opacity: 0.4;
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
</style>
