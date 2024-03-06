<template>
    <article id="our-experts" class="container pt-24">
        <div class="flex justify-between items-center mb-10">
            <div>
                <UIBage>خبرائنا</UIBage>
                <h1 class="text-2xl md:text-3xl lg:text-5xl max-w-[650px] font-medium mb-2 lg:leading-[3.5rem] text-text leading-[2.5rem]">افضل خبراء لدينا</h1>
            </div>
            <NuxtLink to="/contact" class="mainbtn !w-fit">تواصل معنا</NuxtLink>
        </div>
        <MainExpertsSlider :items="data" />
    </article>
</template>

<script setup>
const props = defineProps({
    data: {
        required: true,
    },
});
</script>

<style></style>
