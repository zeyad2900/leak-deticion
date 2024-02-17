<template>
    <article id="services" class="container py-24">
        <div class="grid grid-cols-3 relative services p-4">
            <div class="col-span-3 space-y-5 px-5 py-10 lg:px-11 lg:col-span-2">
                <UIBage class="mb-10 px-5 py-2 text-md font-medium bg-white rounded-full w-fit text-main">{{ $t("main.ourServices") }}</UIBage>
                <h1 class="text-2xl md:text-3xl lg:text-5xl max-w-[650px] font-[25px] mb-2 lg:leading-[3.5rem] text-text leading-[2.5rem]">{{ $t("main.chooseTheService") }}</h1>
                <p class="text-light">{{ $t("main.tellUs") }}</p>
            </div>

            <div class="col-span-3 lg:col-span-1 justify-center items-center lg:flex-col flex gap-4">
                <NuxtLink to="/services/1" class="mb-6 flex flex-col items-center gap-4">
                    <img class="bg-white p-4 flex justify-center items-center rounded-3xl shadow-lg" src="/assets/images/main/service1.png" alt="" />
                    <p class="text-main font-bold">{{ $t("main.leakDetection") }}</p>
                </NuxtLink>
                <NuxtLink to="/services/1" class="mb-6 flex flex-col items-center gap-4">
                    <img class="bg-white p-4 flex justify-center items-center rounded-3xl shadow-lg" src="/assets/images/main/service2.png" alt="" />
                    <p class="text-main font-bold">{{ $t("main.insulationInspection") }}</p>
                </NuxtLink>
            </div>
        </div>
    </article>
</template>

<script setup></script>

<style scoped>
.services:before {
    background-image: url("/assets/images/main/servicesbackground.png");
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 5rem;
    content: "";
    height: 470px;
    left: 0;
    position: absolute;
    top: 30px;
    width: 100%;
    z-index: -1;
}
</style>
