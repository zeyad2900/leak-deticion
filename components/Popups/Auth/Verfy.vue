<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.verfiyHandler()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">{{ $t("Confirm identity") }}</h3>
            <p class="text-light text-center mb-7">{{ $t("Enter the code sent to you through your phone number") }}</p>
            <button v-if="!verifyLogin" @click="myShowAndHideStore.verfiyHandler('back')" class="text-main font-bold mb-7">{{ locale == "ar" ? "تعديل رقم الهاتف" : "edit phone number" }}</button>

            <!-- form verfiy change -->
            <VeeForm @click.stop @submit="submitHandler" as="div">
                <form>
                    <div class="flex flex-col mb-10">
                        <div class="otp" :class="!validationcode.valid && validationcode.touched ? 'error' : ''">
                            <v-otp-input
                                ref="otpInput"
                                input-classes="otp-input"
                                class="flex items-center justify-center gap-4"
                                separator=" "
                                v-model="verify_code"
                                :num-inputs="4"
                                :should-auto-focus="true"
                                input-type="letter-numeric"
                                @on-change="handleOnChange"
                                @on-complete="handleOnComplete"
                            />
                        </div>
                    </div>

                    <button :disabled="!validationcode.valid || btnLoading" @submit="onVerify" type="submit" class="mainbtn w-full mb-1">
                        <p v-if="!btnLoading">{{ $t("BUTTONS.submit") }}</p>
                        <UIButtonLoader v-else />
                    </button>
                </form>
            </VeeForm>
            <!-- form verfiy login -->
        </UIBaseCard>
    </div>
</template>

<script setup>
import { configure } from "vee-validate";
import VOtpInput from "vue3-otp-input";
import { useToast } from "vue-toastification";
import * as yup from "yup";

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnModelUpdate: true,
    validateOnInput: true,
});
const schema = yup.object().shape({
    code: yup.string().required(),
});

const myShowAndHideStore = useMyShowAndHideStore();
const { verifyLogin, verfiyInitialValue } = storeToRefs(myShowAndHideStore);
const btnLoading = ref(false);
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
const { locale } = useI18n();
const verify_code = ref("");
const validationcode = reactive({
    valid: false,
    touched: false,
});

function handleOnChange() {
    validationcode.touched = true;
    validationcode.valid = false;
}

function handleOnComplete(value) {
    validationcode.touched = false;
    validationcode.valid = true;
    verify_code.value = value;
}

async function submitHandler(values) {
    btnLoading.value = true;
    if (verifyLogin.value == true) {
        await $fetch(`${config.public.baseURL}website/verify`, {
            method: "POST",
            body: {
                phone_code: verfiyInitialValue.value.phone_code.phone_code,
                phone: verfiyInitialValue.value.phone,
                code: verify_code.value,
            },
            headers: {
                "Accept-Language": i18n.locale.value,
            },
        })
            .then((res) => {
                myShowAndHideStore.loginHnadler("open", {
                    phone: verfiyInitialValue.value.phone,
                    phone_code: verfiyInitialValue.value.phone_code,
                });
                verfiyInitialValue.value = null;
                toast.success(i18n.locale.value == "ar" ? "تم التحقق" : "verfiy success");
            })
            .catch((err) => {
                toast.error(err.response._data.message);
            })
            .finally(() => (btnLoading.value = false));
    } else {
        await $fetch(`${config.public.baseURL}website/check-code`, {
            method: "POST",
            body: {
                phone_code: verfiyInitialValue.value.phone_code.phone_code,
                phone: verfiyInitialValue.value.phone,
                code: verify_code.value,
            },
            headers: {
                "Accept-Language": i18n.locale.value,
            },
        })
            .then((res) => {
                myShowAndHideStore.changeHandler("open", {
                    phone: verfiyInitialValue.value.phone,
                    phone_code: verfiyInitialValue.value.phone_code,
                    code: verify_code.value,
                });
                verfiyInitialValue.value = null;
                toast.success(res.message);
            })
            .catch((err) => {
                toast.error(err.response._data.message);
            })
            .finally(() => (btnLoading.value = false));
    }
}
</script>
