<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[999] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.changeHandler()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">تغيير كلمة المرور</h3>

            <!-- form -->
            <VeeForm :validation-schema="schema" as="div">
                <form @submit.prevent="">
                    
                    <div class="flex flex-col mb-2">
                        <VeeField name="password" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">كلمة المرور</label>
                            <input
                                v-bind="field"
                                placeholder="كلمه المرور"
                                :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                                class="py-3 ps-5 text-sm w-full h-12 font-bold border border-stroke rounded-xl focus:border-opacity-10"
                                type="password"
                            />
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="password" as="span" class="!text-danger" />
                        </VeeField>
                    </div>
                    <div class="flex flex-col mb-10">
                        <VeeField name="passwordconfirm" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">تاكيد كلمه المرور</label>
                            <input
                                v-bind="field"
                                placeholder="كلمه المرور"
                                :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                                class="py-3 ps-5 text-sm w-full h-12 font-bold border border-stroke rounded-xl focus:border-opacity-10"
                                type="password"
                            />
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="passwordconfirm" as="span" class="!text-danger" />
                        </VeeField>
                    </div>

                    <button type="button" class="mainbtn w-full mb-1">تاكيد</button>
                </form>
            </VeeForm>
        </UIBaseCard>
    </div>
</template>

<script setup>
const myShowAndHideStore = useMyShowAndHideStore();
import { configure } from "vee-validate";
import * as yup from "yup";

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnModelUpdate: true,
    validateOnInput: true,
});
const schema = yup.object().shape({
    password: yup.string().required().min(9, "Password to weak"),
    passwordconfirm: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "two passwords must be matching"),
});
</script>

<style></style>
