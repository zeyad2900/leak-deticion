<template>
    <div class="max-w-[600px] bg-stroke p-4 rounded-md">
        <img src="/assets/images/imgicons/quote.png" alt="" />
        <div class="text-text text-sm py-3 min-h-[150px] max-h-[150px] overflow-y-auto leading-6" v-html="item.desc"></div>
        <div class="flex gap-5 items-center">
            <NuxtImg class="w-12 h-12" :src="item.image" placeholder="/user.png" alt="user" />
            <div>
                <h3 class="text-base font-bold text-text">{{ item.name }}</h3>
                <p>{{ item.job }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    item: {
        required: true,
    },
});
</script>

<style></style>
