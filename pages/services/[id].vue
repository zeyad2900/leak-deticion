<template>
    <article class="mt-40 pb-24">
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="lg:col-span-8 col-span-12">
                    <h1 class="text-4xl font-bold mb-10">كشف التسريبات</h1>

                    <ServicesDetailsSlider />

                    <div class="mb-5">
                        <h1 class="text-2xl font-bold mb-3">تفاصيل الخدمه</h1>
                        <p class="text-light text-lg">خدمة كشف تسريبات المياه فى المنازل والأسطح وتصليحها</p>
                    </div>

                    <ServicesDetailsForm />
                </div>

                <div class="lg:col-span-4 col-span-12">
                    <ServicesDetailsSearch />
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
// import { configure } from "vee-validate";
// import * as yup from "yup";

// configure({
//     validateOnBlur: true,
//     validateOnChange: true,
//     validateOnModelUpdate: true,
//     validateOnInput: true,
// });

// const i18n = useI18n();

// const schema = yup.object().shape({
//     proplem: yup.string().required(),
//     location: yup.string().required(),
// });
</script>

<style scoped></style>
