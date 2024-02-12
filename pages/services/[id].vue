<template>
    <article class="container mt-40 mb-24">
        <div class="grid grid-cols-4">
            <div class="col-span-2">
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
                    <swiper-slide><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                    <swiper-slide><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                    <swiper-slide><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                    <swiper-slide><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                </swiper>
                <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                    <swiper-slide><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                    <swiper-slide><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                    <swiper-slide><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                    <swiper-slide><img class="rounded-xl" src="/assets/images/about/about.png" /></swiper-slide>
                </swiper>
            </div>
            <div class="col-span-2"></div>
        </div>
    </article>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Navigation, Thumbs],
        };
    },
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
