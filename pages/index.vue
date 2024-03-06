<template>
    <div v-if="pending" class="flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>

    <Main :data="data?.data?.home_slider" />
    <MainServices :data="data?.data?.services" />
    <MainAbout :isAbout="false" :items="data?.data?.home_about" :advantages="data?.data?.advantages" v-if="data.data.home_about && data.data.advantages" />
    <MainServeice :data="data?.data?.home_services[0]" />
    <MainOurExperts :data="data?.data?.home_experts" />
    <MainSlider :data="data?.data?.testimonials" />
    <MainTestimonials :data="data?.data?.what_we_offers" />
    <MainOurMission />
</template>

<script setup>
const { data, pending, error } = await useApi("website/home");
</script>

<style scoped></style>
