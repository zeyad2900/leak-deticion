<template>
    <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>

    <div v-if="data">
        <About :data="data?.data?.home_services" />
        <MainAbout :isAbout="true" :items="data?.data?.home_about" :advantages="data?.data?.advantages" v-if="data.data.home_about && data.data.advantages" />
        <MainServeice :data="data?.data?.home_services[0]" />
        <MainTestimonials :data="data?.data?.what_we_offers" />
    </div>
</template>

<script setup>
const { data, pending, error } = await useApi("website/about");
</script>

<style scoped></style>
