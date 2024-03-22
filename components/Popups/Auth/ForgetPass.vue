<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.forgetPassHandler()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">{{ $t("forgetPassword") }}</h3>
            <p class="text-light text-center mb-7">{{ $t("forgetPasswordLabel") }}</p>

            <!-- form -->
            <VeeForm :validation-schema="schema" @submit="submitHandler" as="div">
                <form>
                    <div class="flex flex-col mb-10">
                        <label class="text-text font-bold mb-1">{{ $t("FORMS.Placeholders.phoneNumber") }}</label>
                        <GlobalPhoneInput />
                    </div>
                    <button :disabled="btnLoading" type="submit" class="mainbtn w-full mb-1">
                        <p v-if="!btnLoading">{{ $t("BUTTONS.submit") }}</p>
                        <UIButtonLoader v-else />
                    </button>
                </form>
            </VeeForm>
        </UIBaseCard>
    </div>
</template>

<script setup>
import { configure } from "vee-validate";
import { useToast } from "vue-toastification";
import * as yup from "yup";

const myShowAndHideStore = useMyShowAndHideStore();
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
const btnLoading = ref(false);

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnModelUpdate: true,
    validateOnInput: true,
});
const schema = yup.object().shape({
    phone: yup
        .string()
        .required(i18n.t("FORMS.Validation.phone"))
        .test("phone", (value, ctx) => {
            if (value.length == ctx.parent.phone_code.phone_number_limit) {
                return true;
            } else {
                return ctx.createError({
                    message: i18n.t("FORMS.Validation.phoneLength", { num: ctx.parent.phone_code.phone_number_limit }),
                    path: "phone",
                });
            }
        }),
    phone_code: yup.mixed(),
});

async function submitHandler(values, actions) {
    btnLoading.value = true;
    await $fetch(`${config.public.baseURL}website/send-code`, {
        method: "POST",
        body: {
            phone_code: values.phone_code.phone_code,
            phone: values.phone,
        },
        headers: {
            "Accept-Language": i18n.locale.value,
        },
    })
        .then((res) => {
            myShowAndHideStore.loginHnadler();
            toast.success(res.message);
            myShowAndHideStore.verfiyHandler("forgetOpen", {
                phone: values.phone,
                phone_code: values.phone_code,
            });
            loginInitialValue.value = null;
        })
        .catch((err) => {
            toast.error(err.response._data.message);
            btnLoading.value = false;
        });
}
</script>

<style></style>
