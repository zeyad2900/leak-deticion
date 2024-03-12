<template>
    <div v-if="pending" class="flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>
    <Terms v-if="data" :items="data?.data" />
</template>

<script setup>
const { data, pending, error } = await useApi("website/terms");
</script>

<style></style>
