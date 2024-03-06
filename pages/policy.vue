<template>
    <div v-if="pending" class="flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>
    <Policy :items="data?.data" />
</template>

<script setup>
const { data, pending, error } = await useApi("website/privacy");
</script>

<style></style>
