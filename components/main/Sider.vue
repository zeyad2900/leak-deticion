<template>
    <article class="container min-h-fit py-24">
        <div class="flex flex-col h-screen">
            <div class="">
                <UIBage>تقييمنا </UIBage>
                <h1 class="text-5xl max-w-[650px] font-medium mb-2 text-text">اراء عملائنا</h1>
            </div>
            <swiper
                :slidesPerView="3"
                :spaceBetween="30"
                :navigation="true"
                :pagination="{
                    dynamicBullets: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide class="">
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/assets/images/icons/quote.png" alt="" />
                    <p class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6">
                        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة
                        بخدماتكم."
                    </p>
                    <div class="flex gap-5">
                        <img src="/assets/images/main/user.png" alt="" />
                        <div>
                            <h3 class="text-base font-bold text-text">احمد عامر</h3>
                            <p>مؤسس شركة CAS</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </article>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
let modules = [Navigation, Pagination];
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    /* Center slide text vertically */
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 15px;
}
</style>
