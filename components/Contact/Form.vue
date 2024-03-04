<template>
    <div class="bg-stroke rounded-[3rem] grid grid-cols-2 h-fit">
        <div class="col-span-2 lg:col-span-1 container pt-11 pb-4">
            <h1 class="text-2xl lg:text-3xl font-bold mb-7">تواصل معنا</h1>
            <VeeForm :validation-schema="schema" @submit="handleSubmit" as="div">
                <form class="flex flex-col items-start gap-2 mb-7">
                    <vee-field name="name" v-slot="{ field, meta }">
                        <input
                            placeholder="الاسم بالكامل"
                            class="focus:outline-none p-3 text-sm w-full h-12 font-bold border border-stroke rounded-xl"
                            id="fullName"
                            v-bind="field"
                            type="text"
                            :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                        />
                        <vee-error-message v-if="meta.touched && !meta.valid" name="name" as="span" class="!text-danger" />
                    </vee-field>
                    <vee-field name="email" v-slot="{ field, meta }">
                        <input
                            placeholder="بريدك الاكتروني"
                            class="focus:outline-none p-3 text-sm w-full h-12 font-bold border border-stroke rounded-xl"
                            id="fullName"
                            v-bind="field"
                            type="email"
                            :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                        />
                        <vee-error-message v-if="meta.touched && !meta.valid" name="email" as="span" class="!text-danger" />
                    </vee-field>
                    <vee-field name="phone" v-slot="{ field, meta }">
                        <div class="flex items-center justify-center w-full">
                            <div class="h-12">
                                <UIHeadlessButton />
                            </div>
                            <input
                                placeholder="رقم الهاتف"
                                class="focus:outline-none p-3 text-sm w-full h-12 font-bold border border-stroke rounded-xl"
                                id="fullName"
                                v-bind="field"
                                type="text"
                                :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                            />
                        </div>
                        <vee-error-message v-if="meta.touched && !meta.valid" name="phone" as="span" class="!text-danger" />
                    </vee-field>
                    <vee-field name="subject" v-slot="{ field, meta }">
                        <input
                            placeholder="الموضوع"
                            class="focus:outline-none p-3 text-sm w-full h-12 font-bold border border-stroke rounded-xl"
                            id="fullName"
                            v-bind="field"
                            type="text"
                            :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                        />
                        <vee-error-message v-if="meta.touched && !meta.valid" name="message" as="span" class="!text-danger" />
                    </vee-field>
                    <vee-field name="message" v-slot="{ field, meta }">
                        <textarea
                            placeholder="ادخل رسالتك هنا"
                            class="focus:outline-none p-3 text-sm w-full h-28 font-bold border-stroke border rounded-xl"
                            id="fullName"
                            v-bind="field"
                            type="text"
                            :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                        />
                        <vee-error-message v-if="meta.touched && !meta.valid" name="message" as="span" class="!text-danger" />
                    </vee-field>
                    <button class="mainbtn"><img src="/assets/images/contact/send-2.png" alt="" /> ارسال</button>
                </form>
            </VeeForm>
        </div>

        <div class="flex items-end justify-center col-span-2 lg:col-span-1">
            <img width="400" height="400" src="/assets/images/contact/contantheros.webp" alt="" />
        </div>
    </div>
</template>

<script setup>
import { configure } from "vee-validate";
import * as yup from "yup";

// veefalied logic
configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnModelUpdate: true,
    validateOnInput: true,
});

const i18n = useI18n();

const schema = yup.object().shape({
    email: yup
        .string()
        .test("email", i18n.t("ERRORS.emailInValid"), (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value))
        .required(i18n.t("ERRORS.emailRequired")),
    name: yup.string().required(),
    phone: yup.string().required().min(9, "Phone min length"),
    subject: yup.string().required(),
    message: yup.string().required(),
});
</script>

<style></style>
