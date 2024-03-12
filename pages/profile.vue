<template>
    <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
        <UILoader />
    </div>

    <div v-if="profile" class="relative min-h-[100vh]">
        <div class="container pt-40 pb-20">
            <div class="grid grid-cols-12">
                <ProfileSidebar :data="profile" />
                <div class="col-span-12 lg:col-span-7">
                    <NuxtPage :data="profile" @updateProfile="refresh" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: "auth",
});
const { data: profile, pending, error, refresh } = await useApi("website/profile");
</script>

<style scoped></style>
