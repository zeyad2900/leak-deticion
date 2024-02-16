<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[999] flex items-center justify-center">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.closeLogin()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">تسجيل دخول</h3>

            <!-- form -->
            <VeeForm :validation-schema="schema" as="div">
                <form @submit.prevent="">
                    <div class="flex flex-col mb-3">
                        <VeeField name="phone" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">رقم الهاتف</label>
                            <div class="flex justify-center items-center">
                                <div class="h-12">
                                    <UIHeadlessButton />
                                </div>
                                <input
                                    v-bind="field"
                                    placeholder="رقم الهاتف"
                                    :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                                    class="py-3 ps-5 text-sm w-full h-12 font-bold border border-stroke rounded-xl"
                                    type="text"
                                />
                            </div>
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="phone" as="span" class="!text-danger" />
                        </VeeField>
                    </div>
                    <div class="flex flex-col mb-2">
                        <VeeField name="password" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">كلمة المرور</label>
                            <input
                                v-bind="field"
                                placeholder="كلمه المرور"
                                :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                                class="py-3 ps-5 text-sm w-full h-12 font-bold border border-stroke rounded-xl"
                                type="password"
                            />
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="password" as="span" class="!text-danger" />
                        </VeeField>
                    </div>

                    <button @click="myShowAndHideStore.openForgetPass()" type="button" class="font-bold block mb-7">نسيت كلمه المرور؟</button>
                    <button type="button" class="mainbtn w-full mb-1">تسجيل الدخول</button>
                </form>
            </VeeForm>
            <div class="flex text-center items-center justify-center">
                <p class="text-sm">ليس لديك حساب ؟</p>
                <button @click="myShowAndHideStore.openSignup()" class="font-bold">انشاء حساب جديد</button>
            </div>
        </UIBaseCard>
    </div>
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
const schema = yup.object().shape({
    phone: yup.string().required().min(9, "Phone min length"),
    password: yup.string().required().min(9, "Password to weak"),
});
const myShowAndHideStore = useMyShowAndHideStore();
</script>

<style></style>
