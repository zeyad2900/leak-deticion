<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[999] flex items-center justify-center">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.closeForgetPass()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">هل نسيت كلمة المرور؟</h3>
            <p class="text-light text-center mb-7">قم بادخال البريد الإلكتروني او رقم الهاتف الخاص بك لتغيير كلمة المرور</p>

            <!-- form -->
            <VeeForm :validation-schema="schema" as="div">
                <form @submit.prevent="">
                    <div class="flex flex-col mb-10">
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
                    <button @click="myShowAndHideStore.openVerify()" type="button" class="mainbtn w-full mb-1">ارسال</button>
                </form>
            </VeeForm>
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
});
const myShowAndHideStore = useMyShowAndHideStore();
</script>

<style></style>
