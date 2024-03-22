<template>
    <button class="flex justify-start items-center gap-7 hover:bg-stroke w-full p-4 rounded-xl">
        <img width="40" height="100" :src="notify.sender_data.image" alt="" />
        <div>
            <h3 class="font-bold text-start">{{ notify.title }}</h3>
            <p class="text-sm text-light text-start">{{ notify.body }}</p>
        </div>
    </button>
</template>

<script setup>
const props = defineProps({
    notify: {
        required: false,
    },
});
</script>

<style></style>
