<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="$emit('close')" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">{{ $t("changePassword") }}</h3>

            <!-- form -->
            <VeeForm :validation-schema="schema" @submit="submitHandler" as="div">
                <form @submit.prevent="">
                    <div class="flex flex-col mb-2">
                        <VeeField name="currntpassword" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">{{ $t("FORMS.Placeholders.currentPasswordLabel") }}</label>
                            <div class="maininput">
                                <input v-bind="field" placeholder="كلمه المرور" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" type="password" />
                            </div>
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="currntpassword" as="span" class="!text-danger" />
                        </VeeField> 
                    </div>
                    <div class="flex flex-col mb-2">
                        <VeeField name="newpassword" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">كلمة المرور الجديده</label>
                            <div class="maininput">
                                <input v-bind="field" placeholder="كلمه المرور" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" type="password" />
                            </div>
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="newpassword" as="span" class="!text-danger" />
                        </VeeField>
                    </div>
                    <div class="flex flex-col mb-10">
                        <VeeField name="passwordconfirm" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">تاكيد كلمه المرور</label>
                            <div class="maininput">
                                <input v-bind="field" placeholder="كلمه المرور" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" type="password" />
                            </div>
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="passwordconfirm" as="span" class="!text-danger" />
                        </VeeField>
                    </div>

                    <button :disabled="btnLoading" type="submit" class="mainbtn w-full mb-1">
                        <p v-if="!btnLoading">تاكيد</p>
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

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnModelUpdate: true,
    validateOnInput: true,
});
const schema = yup.object().shape({
    currntpassword: yup.string().required().min(9),
    newpassword: yup.string().required().min(9, "Password to weak"),
    passwordconfirm: yup
        .string()
        .required()
        .oneOf([yup.ref("newpassword")], "two passwords must be matching"),
});

const btnLoading = ref(false);
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
const emits = defineEmits(["close"]);
const token = useCookie("leakDetectionToken");

async function submitHandler(values) {
    if (values.currntpassword === values.newpassword) {
        toast.error("password match");
    } else {
        btnLoading.value = true;
        await $fetch(`${config.public.baseURL}website/profile/update-password`, {
            method: "POST",
            body: {
                _method: "PATCH",
                current_password: values.currntpassword,
                new_password: values.newpassword,
            },
            headers: {
                "Accept-Language": i18n.locale.value,
                Authorization: `Bearer ${token.value}`,
            },
        })
            .then((res) => {
                toast.success(res.message);
                emits("close");
            })
            .catch((e) => toast.error(e.response._data.message))
            .finally(() => (btnLoading.value = false));
    }
}
</script>

<style></style>
