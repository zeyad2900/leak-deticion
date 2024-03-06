<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.forgetPassHandler()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">هل نسيت كلمة المرور؟</h3>
            <p class="text-light text-center mb-7">قم بادخال البريد الإلكتروني او رقم الهاتف الخاص بك لتغيير كلمة المرور</p>

            <!-- form -->
            <VeeForm :validation-schema="schema" as="div">
                <form>
                    <div class="flex flex-col mb-10">
                        <label class="text-text font-bold mb-1">رقم الهاتف</label>
                        <GlobalPhoneInput />
                    </div>
                    <button @click="myShowAndHideStore.verfiyHandler('open')" type="button" class="mainbtn w-full mb-1">ارسال</button>
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
