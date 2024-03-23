<template>
    <article id="our-experts" class="container pt-24">
        <div class="flex justify-between items-center mb-10">
            <div>
                <UIBage>{{ $t("TITLES.experts") }}</UIBage>
                <h1
                    data-wow-duration="1.3s"
                    data-wow-delay="0.5s"
                    class="animated wow fadeInUp text-2xl md:text-3xl lg:text-5xl max-w-[650px] font-medium mb-2 lg:leading-[3.5rem] text-text leading-[2.5rem]"
                >
                    {{ $t("TITLES.bestExperts") }}
                </h1>
            </div>
            <NuxtLink :to="localePath('/contact')" class="mainbtn !w-fit">{{ $t("BUTTONS.contactUs") }}</NuxtLink>
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
