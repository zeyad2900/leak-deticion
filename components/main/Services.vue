<template>
    <article id="services" class="container py-24 overflow-hidden">
        <div class="flex justify-between items-center bg-[url('/assets/images/main/servicesbackground.png')] bg-cover h-[550px] p-10 w-full rounded-3xl min-h-[550px] relative">
            <div>
                <UIBage class="mb-10 px-5 py-2 text-md font-medium bg-white rounded-full w-fit text-main">{{ $t("main.ourServices") }}</UIBage>
                <h1 class="mb-16 text-5xl max-w-[640px] font-[25px]">{{ $t("main.chooseTheService") }}</h1>
                <p class="text-light">{{ $t("main.tellUs") }}</p>
            </div>
            <div>
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

<style></style>
