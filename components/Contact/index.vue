<template>
    <article class="container pt-32 pb-20">
        <div class="w-full mb-20">
            <div class="mb-16">
                <h1 class="text-2xl lg:text-3xl font-bold mb-7 text-red-500">ابق على تواصل معنا</h1>
            </div>

            <div class="grid grid-cols-3 gap-8">
                <div class="col-span-3 md:col-span-1 flex flex-col items-start gap-4 p-6 rounded-2xl shadow-lg">
                    <img src="/assets/images/contact/phone.png" alt="" />
                    <div>
                        <p class="text-light">رقم الجوال</p>
                        <h3 class="text-lg">+966 1111 22222 3</h3>
                    </div>
                </div>
                <div class="col-span-3 md:col-span-1 flex flex-col items-start gap-4 p-6 rounded-2xl shadow-lg">
                    <img src="/assets/images/contact/mail.png" alt="" />
                    <div>
                        <p class="text-light">البريد الإلكتروني</p>
                        <h3 class="text-lg">emailperson@exaple.com</h3>
                    </div>
                </div>
                <div class="col-span-3 md:col-span-1 flex flex-col items-start gap-4 p-6 rounded-2xl shadow-lg">
                    <img src="/assets/images/contact/location.png" alt="" />
                    <div>
                        <p class="text-light">عنوان</p>
                        <h3 class="text-lg">المملكة العربية السعودية ، جدة</h3>
                    </div>
                </div>
            </div>
        </div>

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
                <img width="400" height="400" src="/assets/images/contact/contantheros.png" alt="" />
            </div>
        </div>
    </article>
</template>

<script setup>
import { configure } from "vee-validate";
import * as yup from "yup";

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

<style scoped></style>
