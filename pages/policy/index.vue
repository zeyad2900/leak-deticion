<template>
     <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>

    <Policy v-else-if="data?.data" :items="data?.data" />
</template>

<script setup>
const { data, pending, error } = await useApi("website/privacy");
</script>

<style></style>
