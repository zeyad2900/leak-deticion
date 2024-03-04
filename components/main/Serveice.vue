<template>
    <article id="service" class="container py-20">
        <div class="grid md:grid-cols-2 gap-5">
            <div class="flex items-center justify-center lg:justify-start col-span-2 lg:col-span-1">
                <NuxtImg class="" :src="data.image" placeholder="/main2.webp" alt="" />
            </div>

            <div class="col-span-2 lg:col-span-1 flex flex-col justify-center gap-5 items-start">
                <UIBage>{{ data.title }}</UIBage>
                <h1 class="text-2xl md:text-3xl max-w-[650px] font-medium mb-2 text-text leading-[2.5rem]">{{ data.sub_title }}</h1>
                <p class="text-light" v-html="data.desc"></p>
                <NuxtLink class="mainbtn !w-fit" to="/contact">تواصل معنا</NuxtLink>
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
