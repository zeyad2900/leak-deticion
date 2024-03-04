<template>
    <article id="services" class="container py-24">
        <div class="home_service grid grid-cols-3 py-8">
            <div class="col-span-3 space-y-5 px-5 py-20 lg:px-11 lg:col-span-2">
                <UIBage class="mb-10 px-5 py-2 text-md font-medium bg-white rounded-full w-fit text-main">{{ $t("main.ourServices") }}</UIBage>
                <h2 class="text-2xl md:text-3xl lg:text-5xl max-w-[650px] font-[25px] mb-2 lg:leading-[3.5rem] text-text leading-[2.5rem] animated wow fadeInUp">
                    <template v-if="locale == 'ar'"> إختر <span class="text-main">الخدمة</span> اللتي تناسب طلبك ودع الامر لخبرائنا </template>
                    <template v-else> Choose <span class="text-primary">Service</span> That Suit Your Request And Let It's Up To Our Experts </template>
                </h2>
                <p class="text-light">{{ $t("main.tellUs") }}</p>
            </div>

            <div class="col-span-3 lg:col-span-1 justify-center items-center lg:flex-col flex gap-4">
                <GlobalServiceCard v-for="item in data" :key="item.id" :item="item" />
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    data: {
        required: true,
    },
});

const { locale } = useI18n();
</script>

<style lang="scss" scoped>
.home_service {
    @apply relative;

    &::before {
        content: "";
        @apply absolute top-1/2 -translate-y-1/2 left-0 w-full h-[80%] rounded-[5rem];
        background: url("/assets/images/main/servicesbackground.png");
        background-size: cover !important;
        background-repeat: no-repeat !important;
        z-index: -1;
    }
}
</style>
