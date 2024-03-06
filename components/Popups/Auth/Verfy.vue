<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.verfiyHandler()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">تاكيد الهوية</h3>
            <p class="text-light text-center mb-7">ادخل الكود المرسل اليك من خلال رقم الهاتف</p>
            <button v-if="!verifyLogin" @click="myShowAndHideStore.verfiyHandler('back')" class="text-main font-bold mb-7">تعديل رقم الهاتف</button>

            <!-- form verfiy change -->
            <VeeForm @click.stop @submit="onVerify" as="div" v-if="verifyLogin">
                <form>
                    <div class="flex flex-col mb-10">
                        <div class="maininput" :class="!validationcode.valid && validationcode.touched ? '!border-danger' : ''">
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
                    <button :disabled="!validationcode.valid || btnLoading" @click="myShowAndHideStore.changeHandler('open')" type="submit" class="mainbtn w-full mb-1">
                        <p v-if="!btnLoading">ارسال</p>
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
const { verifyLogin } = storeToRefs(myShowAndHideStore);
const btnLoading = ref(false);
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
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
</script>

<style scoped></style>
