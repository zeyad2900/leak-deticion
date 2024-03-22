<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.changeHandler()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">{{ $t("Change password") }}</h3>

            <!-- form -->
            <VeeForm :validation-schema="schema" @submit="submitHandler" as="div">
                <form @submit.prevent="">
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
const { changeInitialValue } = storeToRefs(myShowAndHideStore);
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
    password: yup.string().required(i18n.t("FORMS.Validation.password")),
    passwordconfirm: yup
        .string()
        .required(i18n.t("FORMS.Validation.confirmPassword"))
        .oneOf([yup.ref("password")], i18n.t("FORMS.Validation.notEqualPasswords")),
});

async function submitHandler(values) {
    btnLoading.value = true;
    await $fetch(`${config.public.baseURL}website/reset-password`, {
        method: "POST",
        body: {
            _method: "PATCH",
            phone_code: changeInitialValue.value.phone_code.phone_code,
            phone: changeInitialValue.value.phone,
            password: values.password,
            code: changeInitialValue.value.code,
        },
        headers: {
            "Accept-Language": i18n.locale.value,
        },
    })
        .then((res) => {
            toast.success(res.message);
            myShowAndHideStore.changeHandler();
            changeInitialValue.value = null;
        })
        .catch((e) => toast.error(e.response._data.message))
        .finally(() => (btnLoading.value = false));
}
</script>

<style></style>
