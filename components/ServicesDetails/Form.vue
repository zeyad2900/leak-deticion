<template>
    <VeeForm :validation-schema="schema" as="div">
        <form>
            <VeeField name="proplem" v-slot="{ field, meta }">
                <div class="mb-5">
                    <label class="md:text-2xl text-xl mb-3 block">تفاصيل المشكلة</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="قم بادخال تفاصيل المشكله"
                        v-bind="field"
                        :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                        class="w-full text-xl border border-stroke rounded-lg focus:outline-none p-2 resize-none h-40 placeholder:text-light placeholder:text-xl"
                    ></textarea>
                    <vee-error-message v-if="meta.touched && !meta.valid" name="proplem" as="span" class="!text-danger" />
                </div>
            </VeeField>

            <VeeField name="location" v-slot="{ field, meta }">
                <div class="mb-5">
                    <label class="md:text-2xl text-xl mb-3 block">تفاصيل العنوان</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="قم بادخال تفاصيل العنوان"
                        v-bind="field"
                        :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                        class="w-full text-xl border border-stroke rounded-lg focus:outline-none p-2 resize-none h-40 placeholder:text-light placeholder:text-xl"
                    ></textarea>
                    <vee-error-message v-if="meta.touched && !meta.valid" name="location" as="span" class="!text-danger" />
                </div>
            </VeeField>

            <button type="button" class="border border-stroke rounded-xl py-4 px-8 flex items-center justify-between w-[95%] mb-10">
                <div class="border border-stroke rounded-xl py-2 px-5 flex items-center gap-10 max-w-3/4">
                    <div>
                        <img src="/assets/images/servicesdetails/map.png" alt="" />
                    </div>
                    <div class="text-center">
                        <h1 class="font-bold mb-2">العنوان</h1>
                        <p class="text-light">ادخل عنوانك هنا</p>
                    </div>
                </div>
                <div>
                    <img src="/assets/images/servicesdetails/location.png" alt="" />
                </div>
            </button>

            <div>
                <div class="mb-5">
                    <label class="text-lg font-bold mb-5 block">قم باختيار التاريخ والوقت</label>
                    <div class="flex items-center flex-wrap gap-5">
                        <div class="text-center border-2 rounded-lg w-fit flex-wrap">
                            <label class="block cursor-pointer relative w-full h-full p-2">
                                <div class="font-bold whitespace-nowrap">2024-02-16</div>
                                <div class="text-light whitespace-nowrap">الجمعه</div>
                                <img src="/assets/images/servicesdetails/mark.png" class="absolute -top-3 -start-3 bg-white block" alt="" />
                            </label>
                            <input class="hidden" type="radio" />
                        </div>
                        <div class="text-center border-2 border-stroke rounded-lg w-fit flex-wrap">
                            <label class="block cursor-pointer relative w-full h-full p-2">
                                <div class="font-bold whitespace-nowrap">2024-02-16</div>
                                <div class="text-light whitespace-nowrap">الجمعه</div>
                                <img src="/assets/images/servicesdetails/mark.png" class="hidden absolute -top-3 -start-3 bg-white" alt="" />
                            </label>
                            <input class="hidden" type="radio" />
                        </div>
                        <div class="text-center border-2 border-stroke rounded-lg w-fit flex-wrap">
                            <label class="block cursor-pointer relative w-full h-full p-2">
                                <div class="font-bold whitespace-nowrap">2024-02-16</div>
                                <div class="text-light whitespace-nowrap">الجمعه</div>
                                <img src="/assets/images/servicesdetails/mark.png" class="hidden absolute -top-3 -start-3 bg-white" alt="" />
                            </label>
                            <input class="hidden" type="radio" />
                        </div>
                    </div>
                </div>

                <div class="mb-5">
                    <div class="flex items-center flex-wrap gap-5">
                        <div class="text-center border-2 border-stroke rounded-lg w-fit flex-wrap">
                            <label class="block cursor-pointer relative w-full h-full p-2">
                                <div class="font-bold whitespace-nowrap">08:00 AM</div>
                                <img src="/assets/images/servicesdetails/mark.png" class="hidden absolute -top-3 -start-3 bg-white" alt="" />
                            </label>
                            <input class="hidden" type="radio" />
                        </div>
                        <div class="text-center border-2 border-stroke rounded-lg w-fit flex-wrap">
                            <label class="block cursor-pointer relative w-full h-full p-2">
                                <div class="font-bold whitespace-nowrap">08:00 AM</div>
                                <img src="/assets/images/servicesdetails/mark.png" class="hidden absolute -top-3 -start-3 bg-white" alt="" />
                            </label>
                            <input class="hidden" type="radio" />
                        </div>
                        <div class="text-center border-2 border-stroke rounded-lg w-fit flex-wrap">
                            <label class="block cursor-pointer relative w-full h-full p-2">
                                <div class="font-bold whitespace-nowrap">08:00 AM</div>
                                <img src="/assets/images/servicesdetails/mark.png" class="hidden absolute -top-3 -start-3 bg-white" alt="" />
                            </label>
                            <input class="hidden" type="radio" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-start gap-5 mb-10">
                    <div class="text-center border-2 border-stroke rounded-lg">
                        <label class="cursor-pointer relative h-full py-2 px-5 w-fit min-h-[45px] flex items-center justify-center">
                            <div class="flex items-center gap-3">
                                <img src="/assets/images/servicesdetails/money.png" alt="" />
                                <span>نقدي</span>
                            </div>
                            <img src="/assets/images/servicesdetails/mark.png" class="hidden absolute -top-3 -start-3 bg-white" alt="" />
                        </label>
                        <input type="radio" class="hidden" />
                    </div>
                    <div class="text-center border-2 border-stroke rounded-lg">
                        <label class="cursor-pointer relative h-full py-2 px-5 w-fit min-h-[45px] flex items-center justify-center">
                            <div class="flex items-center gap-3">
                                <img src="/assets/images/servicesdetails/onlinepay.png" alt="" />
                                <span>نقدي</span>
                            </div>
                            <img src="/assets/images/servicesdetails/mark.png" class="hidden absolute -top-3 -start-3 bg-white" alt="" />
                        </label>
                        <input type="radio" class="hidden" />
                    </div>
                </div>
                <button class="mainbtn w-52">تاكيد الحجز</button>
            </div>
        </form>
    </VeeForm>
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

const i18n = useI18n();

const schema = yup.object().shape({
    proplem: yup.string().required(),
    location: yup.string().required(),
});
</script>

<style></style>
