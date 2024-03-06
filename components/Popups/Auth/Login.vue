<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.loginHnadler()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">تسجيل دخول</h3>

            <!-- form -->
            <VeeForm :initial-values="initaialValue" :validation-schema="schema" @submit="submitHandler" as="div">
                <form>
                    <div class="flex flex-col mb-3">
                        <label class="text-text font-bold mb-1">رقم الهاتف</label>
                        <GlobalPhoneInput />
                    </div>
                    <div class="flex flex-col mb-2">
                        <VeeField name="password" v-slot="{ field, meta }">
                            <label class="text-text font-bold mb-1">كلمة المرور</label>
                            <div class="maininput">
                                <input v-bind="field" placeholder="كلمه المرور" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" type="password" />
                            </div>
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="password" as="span" class="!text-danger" />
                        </VeeField>
                    </div>

                    <button @click="myShowAndHideStore.forgetPassHandler('open')" type="button" class="font-bold block mb-7">نسيت كلمه المرور؟</button>
                    <button :disabled="btnLoading" type="submit" class="mainbtn w-full mb-1">
                        <p v-if="!btnLoading">تسجيل الدخول</p>
                        <UIButtonLoader v-else />
                    </button>
                </form>
            </VeeForm>
            <div class="flex text-center items-center justify-center">
                <p class="text-sm">ليس لديك حساب ؟</p>
                <button @click="myShowAndHideStore.signupHandler('open')" class="font-bold">انشاء حساب جديد</button>
            </div>
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
    phone: yup
        .string()
        .required("required")
        .test("phone", (value, ctx) => {
            if (value.length == ctx.parent.phone_code.phone_number_limit) {
                return true;
            } else {
                return ctx.createError({
                    message: ctx.parent.phone_code.phone_number_limit,
                    path: "phone",
                });
            }
        }),
    password: yup.string().required().min(9, "Password to weak"),
    phone_code: yup.mixed(),
});

const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
const myShowAndHideStore = useMyShowAndHideStore();
const { loginInitialValue } = storeToRefs(myShowAndHideStore);
const btnLoading = ref(false);
const leakDetectionToken = useCookie("leakDetectionToken");
const profileId = useCookie("profileId");

async function submitHandler(values, actions) {
    btnLoading.value = true;
    await $fetch(`${config.public.baseURL}website/login`, {
        method: "POST",
        body: {
            phone_code: values.phone_code.phone_code,
            phone: values.phone,
            password: values.password,
        },
        headers: {
            "Accept-Language": i18n.locale.value,
        },
    })
        .then((res) => {
            leakDetectionToken.value = res.data.token;
            profileId.value = JSON.stringify(res.data.id);

            if (res.data.is_verify) {
                location.reload();
            } else {
                myShowAndHideStore.loginHnadler();
                myShowAndHideStore.verfiyHandler("loginOpen", {
                    phone: values.phone,
                    phone_code: values.phone_code,
                });
                toast.success("sucsess");
            }
            btnLoading.value = false;
        })
        .catch((e) => {
            toast.error(e.response._data.message);
            btnLoading.value = false;
        });
}

const initaialValue = loginInitialValue.value;
</script>

<style></style>
