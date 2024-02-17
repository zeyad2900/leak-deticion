<template>
    <Header/>
    <div class="relative min-h-[100vh]">
        <div class="container pt-40 pb-20">
            <div class="grid grid-cols-12">
                <ProfileSidebar />
                <div class="col-span-12 lg:col-span-7">
                    <slot />
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup></script>

<style scoped></style>
