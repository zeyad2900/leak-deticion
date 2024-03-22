<template>
    <article class="container pt-40 pb-24">
        <div class="flex flex-col justify-center items-start gap-9">
            <div>
                <h1 class="font-bold text-3xl mb-10">{{ $t("TITLES.privacy") }}</h1>
            </div>
            <div v-for="item in items" :key="item.id">
                <h1 class="font-bold text-2xl mb-5">{{ item.title }}</h1>
                <div class="grid gap-10 mb-5" :class="item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'">
                    <div v-if="item.images[0]">
                        <NuxtImg :src="item.images[0]" alt="image" placeholder="/term.webp" class="w-full rounded-lg" />
                    </div>
                    <div v-if="item.images[1]">
                        <NuxtImg :src="item.images[1]" alt="image" placeholder="/term.webp" class="w-full rounded-lg" />
                    </div>
                </div>
                <div class="text-light" v-html="item.desc"></div>
            </div>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    items: {
        required: true,
    },
});
</script>

<style></style>
