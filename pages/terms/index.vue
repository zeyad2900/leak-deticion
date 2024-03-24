<template>
    <div v-if="error">{{ error }}</div>

    <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>

    <Terms v-else-if="data" :items="data?.data" />
</template>

<script setup>
const { data, pending, error } = await useApi("website/terms");
</script>
