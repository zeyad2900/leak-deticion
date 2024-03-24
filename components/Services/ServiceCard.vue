<template>
    <NuxtLink :to="localePath(`/services/${item.id}`)" class="mb-6 flex flex-col items-center gap-4">
        <div data-wow-duration="1.3s" data-wow-delay="0s" class="animated wow zoomIn border rounded-2xl flex flex-col gap-2 bg-white w-fit border-[#F5F5FC]">
            <NuxtImg width="150" height="170" class="object-contain mb-2" :src="item.main_image?.media" placeholder="/service2.webp" alt="sevice" />
        </div>
        <p class="text-main font-bold">{{ item.title }}</p>
    </NuxtLink>
</template>

<script setup>
defineProps({
    item: {
        required: true,
    },
});
</script>

