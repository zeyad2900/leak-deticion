<template>
    <article id="about" class="container py-20">
        <div class="grid grid-cols-3 gap-9">
            <div class="col-span-3 space-y-5 lg:col-span-2 order-2 lg:order-1">
                <UIBage>من نحن</UIBage>
                <h1 class="text-2xl md:text-3xl lg:text-5xl max-w-[650px] font-medium mb-2 lg:leading-[3.5rem] text-text leading-[2.5rem]">افضل الفنيين الخبراء لخدمتك</h1>
                <div class="grid sm:grid-cols-2 gap-4">
                    <div class="">
                        <div class="flex justify-start items-center gap-6">
                            <img class="p-5 bg-stroke rounded-full" src="/assets/images/main/car.png" alt="" />
                            <div>
                                <h3 class="font-medium">خدمة سريعة</h3>
                                <p class="text-light text-sm">نحرص علي توفير الوصول السريع لخدمتك</p>
                            </div>
                        </div>
                        <div class="flex justify-start items-center gap-6">
                            <img class="p-5 bg-stroke rounded-full" src="/assets/images/main/medal.png" alt="" />
                            <div>
                                <h3 class="font-medium">فريق مؤهل</h3>
                                <p class="text-light text-sm">فريق متدرب و مؤهل</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex justify-start items-center gap-6">
                            <img class="p-5 bg-stroke rounded-full" src="/assets/images/main/offer.png" alt="" />
                            <div>
                                <h3 class="font-medium">عروض حصرية</h3>
                                <p class="text-light text-sm">عروض متوفرة دائما و نحرص علي اقل التكاليف</p>
                            </div>
                        </div>
                        <div class="flex justify-start items-center gap-6">
                            <img class="p-5 bg-stroke rounded-full" src="/assets/images/main/star.png" alt="" />
                            <div>
                                <h3 class="font-medium">تقييمات عالية</h3>
                                <p class="text-light text-sm">تتميز حدماتنا و خبرائنا بأفضل تقييمات رضا العملاء</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="mainbtn">اعرف المزيد</button>
            </div>
            <div class="col-span-3 lg:col-span-1 order-1 lg:order-2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto mb-11 lg:mb-0 relative">
                <button class="round relative">
                    <img width="320px" src="/assets/images/main/video2.webp" alt="" />
                </button>
            </div>
        </div>
    </article>
</template>

<script setup></script>

<style scoped>
.round::before {
    content: "";
    background-color: #f7f7fc;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 30px;
    inset-inline-start: 30px;
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
