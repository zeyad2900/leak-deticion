<template>
    <article id="service" class="container py-20">
        <div class="grid md:grid-cols-2 gap-5">
            <div
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
                class="animated wow zoomIn rounded-lg overflow-hidden flex items-center justify-center lg:justify-start col-span-2 lg:col-span-1 w-full lg:w-[80%] h-[100%] relative"
            >
                <NuxtImg class="w-full h-full" :src="data?.image" placeholder="/main2.webp" alt="" />
            </div>

            <div class="col-span-2 lg:col-span-1 flex flex-col justify-center gap-5 items-start">
                <UIBage>{{ data.title }}</UIBage>
                <h2 data-wow-duration="1.3s" data-wow-delay="0s" class="animated wow fadeInUp text-2xl md:text-3xl max-w-[650px] font-medium mb-2 text-text leading-[2.5rem]">{{ data.sub_title }}</h2>
                <div class="text-light" v-html="data.desc"></div>
                <NuxtLink class="mainbtn !w-fit" :to="localePath('/contact')">{{ $t("BUTTONS.contactUs") }}</NuxtLink>
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    data: {
        required: true,
    },
});
</script>
