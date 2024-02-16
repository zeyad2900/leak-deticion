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
                :navigation="true"
                :loop="true"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="i in 4" :key="i">
                    <div class="max-w-[600px] bg-stroke p-4 rounded-md">
                        <img src="/assets/images/imgicons/quote.png" alt="" />
                        <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                            "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي
                            بشدة بخدماتكم."
                        </p>
                        <div class="flex gap-5">
                            <img src="/assets/images/main/user.png" alt="" />
                            <div>
                                <h3 class="text-base font-bold text-text">احمد عامر</h3>
                                <p>مؤسس شركة CAS</p>
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
