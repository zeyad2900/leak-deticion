<template>
    <div v-if="error">{{ error }}</div>

    <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>

    <div v-if="data">
        <Main :data="data?.data?.home_slider" />
        <MainServices :data="data?.data?.services" />
        <MainAbout :isAbout="false" :items="data?.data?.home_about" :advantages="data?.data?.advantages" v-if="data.data.home_about && data.data.advantages" />
        <MainServeice :data="data?.data?.home_services[0]" />
        <MainOurExperts :data="data?.data?.home_experts" />
        <MainSlider :data="data?.data?.testimonials" />
        <MainTestimonials :data="data?.data?.what_we_offers" />
        <MainOurMission />
    </div>
</template>

<script setup>
const { data, pending, error } = await useApi("website/home", {
    server: false,
});
</script>