<template>
    <div class="relative mt-[45px] flex items-center min-h-[100vh] bg-[url('/assets/images/about/about.webp')] bg-no-repeat bg-cover">
        <div class="container relative z-10">
            <div class="max-w-[600px] space-y-5 absolute top-0 right-0">
                <h1 data-wow-duration="1.3s" data-wow-delay="0" class="animated wow fadeInLeft text-white text-start font-bold text-3xl lg:text-5xl">{{ data[0]?.title }}</h1>
                <div data-wow-duration="1.3s" data-wow-delay="0" class="wow fadeInRight text-start text-white" v-html="data[0]?.desc"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: {
        required: true,
    },
});
</script>

