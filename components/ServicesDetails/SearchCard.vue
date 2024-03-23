<template>
    <div :class="styles" class="bg-white p-5 mb-5 last:mb-0 rounded-2xl block border border-stroke transition-all cursor-pointer">
        <div class="w-fit mx-auto mb-4">
            <img :src="company.image" alt="company" />
        </div>
        <div class="mb-4">
            <h1 class="font-bold text-lg text-center mb-3">{{ company.full_name }}</h1>
            <p class="text-center text-light">
                <span>{{ locale == "ar" ? "رقم السجل التجاري :" : "Commercial Registration Number :" }}</span>
                <span>{{ company.commercial_registration_no }}</span>
            </p>
        </div>
        <div class="bg-[#F5BE0B0F] w-fit mx-auto px-3 py-1 rounded-[20px] flex items-center gap-2">
            <span>
                <img src="/assets/images/servicesdetails/star.png" alt="" />
            </span>
            <span class="text-[#F5BE0B]">{{ company.rate_avg }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    styles: {
        required: true,
    },
    company: {
        required: true,
    },
});
const { locale } = useI18n();
</script>

<style></style>
