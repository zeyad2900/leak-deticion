<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.signupHandler()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">{{ $t("newAccount") }}</h3>

            <!-- form -->
            <VeeForm :validation-schema="schema" @submit="submitHandler" as="div">
                <form>
                    <div class="flex flex-col mb-2">
                        <VeeField name="name" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">{{ $t("FORMS.Placeholders.name") }}</label>
                            <div class="maininput">
                                <input v-bind="field" :placeholder="$t('FORMS.Placeholders.name')" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" type="text" />
                            </div>
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="name" as="span" class="!text-danger" />
                        </VeeField>
                    </div>
                    <div class="flex flex-col mb-3">
                        <label class="text-text font-bold mb-1">{{ $t("FORMS.Placeholders.phoneNumber") }}</label>
                        <GlobalPhoneInput />
                    </div>
                    <div class="flex flex-col mb-2">
                        <VeeField name="password" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">{{ $t("FORMS.Placeholders.password") }}</label>
                            <div class="maininput">
                                <input v-bind="field" :placeholder="$t('FORMS.Placeholders.password')" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" type="password" />
                            </div>
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="password" as="span" class="!text-danger" />
                        </VeeField>
                    </div>
                    <div class="flex flex-col mb-10">
                        <VeeField name="passwordconfirm" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">{{ $t("FORMS.Placeholders.confirmPassword") }}</label>
                            <div class="maininput">
                                <input
                                    v-bind="field"
                                    :placeholder="$t('FORMS.Placeholders.confirmPassword')"
                                    :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                                    type="password"
                                />
                            </div>
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="passwordconfirm" as="span" class="!text-danger" />
                        </VeeField>
                    </div>

                    <button :disabled="btnLoading" type="submit" class="mainbtn w-full mb-1">
                        <p v-if="!btnLoading">{{ $t("newAccount") }}</p>
                        <UIButtonLoader v-else />
                    </button>
                </form>
            </VeeForm>
            <div class="flex gap-1 text-center items-center justify-center">
                <p class="text-sm">{{ $t("haveAccount") }}</p>
                <button @click="myShowAndHideStore.signupHandler('back')" class="font-bold">{{ $t("login") }}</button>
            </div>
        </UIBaseCard>
    </div>
</template>

<script setup>
const myShowAndHideStore = useMyShowAndHideStore();
import { configure } from "vee-validate";
import { useToast } from "vue-toastification";
import * as yup from "yup";

const btnLoading = ref(false);
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();

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
    name: yup.string().required(i18n.t("FORMS.Validation.name")),
    phone_code: yup.mixed(),
    password: yup.string().required(i18n.t("FORMS.Validation.password")),
    passwordconfirm: yup
        .string()
        .required(i18n.t("FORMS.Validation.confirmPassword"))
        .oneOf([yup.ref("password")], i18n.t("FORMS.Validation.notEqualPasswords")),
});

async function submitHandler(values, actions) {
    btnLoading.value = true;

    await $fetch(`${config.public.baseURL}website/register`, {
        method: "POST",
        body: {
            full_name: values.name,
            phone_code: values.phone_code.phone_code,
            phone: values.phone,
            password: values.password,
        },
        headers: {
            "Accept-Language": i18n.locale.value,
        },
    })
        .then((res) => {
            toast.success(res.message);
            myShowAndHideStore.signupHandler("back", {
                phone: values.phone,
                phone_code: values.phone_code,
            });
        })
        .catch((e) => {
            toast.error(e.response._data.message);
        })
        .finally(() => {
            btnLoading.value = false;
        });
}
</script>

<style></style>
