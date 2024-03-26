<template>
    <div class="w-full mb-20">
        <div class="grid grid-cols-3 gap-8">
            <div class="items-center col-span-3 md:col-span-1 flex flex-col text-center lg:text-start lg:items-start gap-4 p-6 rounded-2xl shadow-md">
                <img src="/assets/images/contact/phone.webp" alt="" />
                <div class="space-y-2">
                    <p class="text-light">{{ $t("TITLES.phone") }}</p>
                    <h3 class="text-sm lg:text-lg">{{ items.phone }}</h3>
                </div>
                
            </div>

            <div class="items-center col-span-3 md:col-span-1 flex flex-col text-center lg:text-start lg:items-start gap-4 p-6 rounded-2xl shadow-md">
                <img src="/assets/images/contact/mail.webp" alt="" />
                <div class="space-y-2">
                    <p class="text-light">{{ $t("TITLES.email") }}</p>
                    <h3 class="text-sm lg:text-lg">{{ items.email }}</h3>
                </div>
            </div>
            
            <div class="items-center col-span-3 md:col-span-1 flex flex-col text-center lg:text-start lg:items-start gap-4 p-6 rounded-2xl shadow-md">
                <img src="/assets/images/contact/location.webp" alt="" />
                <div class="space-y-2">
                    <p class="text-light">{{ $t("TITLES.location") }}</p>
                    <h3 class="text-sm lg:text-lg">{{ items.address }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        required: true,
    },
});
</script>