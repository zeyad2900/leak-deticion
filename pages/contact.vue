<template>
    <div v-if="pending" class="flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>
    <div class="container pt-32 pb-20">
        <Contact :items="data?.data" />
        <ContactForm />
    </div>
</template>

<script setup>
const { data, pending, error } = await useApi("general/settings");
</script>

<style></style>
