<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[999] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button type="" @click="myShowAndHideStore.verfiyHandler()" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h3 class="text-center font-bold mb-7 text-text text-xl">تاكيد الهوية</h3>
            <p class="text-light text-center mb-7">ادخل الكود المرسل اليك من خلال رقم الهاتف</p>
            <button @click="myShowAndHideStore.verfiyHandler('back')" class="text-main font-bold mb-7">تعديل رقم الهاتف</button>

            <!-- form -->
            <VeeForm :validation-schema="schema" as="div">
                <form @submit.prevent="">
                    <div class="flex flex-col mb-10">
                        <VeeField name="phone" v-slot="{ field, meta }">
                            <div class="w-full flex flex-row gap-2.5 items-center justify-center">
                                <input
                                    v-bind="field"
                                    name="code"
                                    maxlength="1"
                                    type="text"
                                    class="bg-[rgb(228,228,228)] w-[60px] h-[60px] text-center caret-[rgb(127,129,255)] text-[rgb(44,44,44)] font-semibold rounded-[7px] border-[none]"
                                />
                                <input
                                    maxlength="1"
                                    type="text"
                                    class="bg-[rgb(228,228,228)] w-[60px] h-[60px] text-center caret-[rgb(127,129,255)] text-[rgb(44,44,44)] font-semibold rounded-[7px] border-[none]"
                                />
                                <input
                                    maxlength="1"
                                    type="text"
                                    class="bg-[rgb(228,228,228)] w-[60px] h-[60px] text-center caret-[rgb(127,129,255)] text-[rgb(44,44,44)] font-semibold rounded-[7px] border-[none]"
                                />
                                <input
                                    maxlength="1"
                                    type="text"
                                    class="bg-[rgb(228,228,228)] w-[60px] h-[60px] text-center caret-[rgb(127,129,255)] text-[rgb(44,44,44)] font-semibold rounded-[7px] border-[none]"
                                />
                            </div>
                            <VeeErrorMessage v-if="meta.touched && !meta.valid" name="phone" as="span" class="!text-danger" />
                        </VeeField>
                    </div>
                    <button @click="myShowAndHideStore.changeHandler('open')" type="button" class="mainbtn w-full mb-1">ارسال</button>
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
    code: yup.string().required(),
});
const myShowAndHideStore = useMyShowAndHideStore();
</script>

<style scoped>
.otp-Form {
    width: 230px;
    height: 300px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
    gap: 20px;
    position: relative;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.082);
    border-radius: 15px;
}

.mainHeading {
    font-size: 1.1em;
    color: rgb(15, 15, 15);
    font-weight: 700;
}

.otpSubheading {
    font-size: 0.7em;
    color: black;
    line-height: 17px;
    text-align: center;
}

.inputContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.otp-input {
    background-color: rgb(228, 228, 228);
    width: 30px;
    height: 30px;
    text-align: center;
    border: none;
    border-radius: 7px;
    caret-color: rgb(127, 129, 255);
    color: rgb(44, 44, 44);
    outline: none;
    font-weight: 600;
}

.otp-input:focus,
.otp-input:valid {
    background-color: rgba(127, 129, 255, 0.199);
    transition-duration: 0.3s;
}

.verifyButton {
    width: 100%;
    height: 30px;
    border: none;
    background-color: rgb(127, 129, 255);
    color: white;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    transition-duration: 0.2s;
}

.verifyButton:hover {
    background-color: rgb(144, 145, 255);
    transition-duration: 0.2s;
}

.exitBtn {
    position: absolute;
    top: 5px;
    right: 5px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.171);
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: none;
    color: black;
    font-size: 1.1em;
    cursor: pointer;
}

.resendNote {
    font-size: 0.7em;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.resendBtn {
    background-color: transparent;
    border: none;
    color: rgb(127, 129, 255);
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 700;
}
</style>
