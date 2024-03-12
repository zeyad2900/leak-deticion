<template>
    <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>

    <div v-if="data" class="container pt-32 pb-20">
        <ContactContacts :items="data?.data" />
        <ContactForm />
    </div>
</template>

<script setup>
const { data, pending, error } = await useApi("general/settings");
</script>

<style></style>
