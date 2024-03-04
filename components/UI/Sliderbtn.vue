<template>
    <div class="flex absolute top-0 end-0 gap-2">
        <button class="mainbtn !p-4 ltr:scale-[-1]" @click="next"><Icon name="mi:chevron-right" /></button>
        <button class="mainbtn !p-4 ltr:scale-[-1]" @click="prev"><Icon name="mi:chevron-left" /></button>
    </div>
</template>

<script setup>
const swiper = useSwiper();
const next = () => {
    swiper.value.slideNext();
};
const prev = () => {
    swiper.value.slidePrev();
};
</script>

<style></style>
