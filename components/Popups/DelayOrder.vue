<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <div v-if="pending" class="flex items-center justify-center h-full py-12">
                <UILoader />
            </div>
            <div v-else-if="times.data.length" class="h-full">
                <button class="text-2xl block ms-auto" @click="$emit('close')">
                    <Icon class="text-light" name="ep:close-bold"></Icon>
                </button>
                <h1 class="text-2xl block me-auto mb-5 font-bold">اختار الوقت والتاريخ</h1>
                <VeeForm :validation-schema="schema" @submit="onSubmit">
                    <form>
                        <VeeField name="chooseTimeDate" v-slot="{ field }">
                            <div class="mb-2">
                                <div class="flex flex-wrap gap-1">
                                    <div
                                        v-for="(day, i) in times?.data"
                                        :key="day.title"
                                        class="text-center border rounded-lg w-fit flex-wrap"
                                        :class="day.title == chosenDay?.title ? 'border-main' : 'border-light'"
                                    >
                                        <label class="block cursor-pointer relative w-full h-full p-2" :for="`day${i}`">
                                            <div class="font-bold whitespace-nowrap">
                                                {{ day.date }}
                                            </div>
                                            <div class="text-forth whitespace-nowrap">
                                                {{ day.title }}
                                            </div>

                                            <img
                                                src="/assets/images/servicesdetails/mark.png"
                                                alt="checked"
                                                class="absolute -top-3 -start-3 bg-white"
                                                :class="day.title == chosenDay?.title ? 'block' : 'hidden'"
                                            />
                                        </label>
                                        <input v-bind="field" class="hidden" type="radio" name="dayDate" :id="`day${i}`" :value="day" v-model="chosenDay" />
                                    </div>
                                </div>
                                <vee-error-message name="chooseTimeDate" as="span" class="!text-danger" />
                            </div>
                        </VeeField>
                        <VeeField v-if="chosenDay" name="chooseTime" type="chooseTime" v-slot="{ field }">
                            <div class="mb-2">
                                <div class="flex items-center justify-start gap-1 flex-wrap">
                                    <div v-for="(time, i) in chosenTimes" :key="i" class="text-center border rounded-lg" :class="time.value == chosenTime?.value ? 'border-main' : 'border-light'">
                                        <label class="block cursor-pointer relative w-full h-full py-3 px-5 font-bold" :for="`time-${chosenDay?.title}-${time.value}`">
                                            <div class="whitespace-nowrap">
                                                {{ time.value }}
                                            </div>

                                            <img
                                                src="/assets/images/servicesdetails/mark.png"
                                                alt="checked"
                                                class="absolute -top-3 -start-3 bg-white"
                                                :class="time.value == chosenTime?.value ? 'block' : 'hidden'"
                                            />
                                        </label>

                                        <input v-bind="field" class="hidden" type="radio" name="selectedTime" :id="`time-${chosenDay?.title}-${time.value}`" :value="time" v-model="chosenTime" />
                                    </div>
                                </div>

                                <vee-error-message name="chooseTime" as="span" class="!text-danger" />
                            </div>
                        </VeeField>
                    </form>
                    <div class="space-y-2">
                        <button type="submit" :disabled="btnLoading" class="mainbtn w-full">
                            <UIButtonLoader v-if="btnLoading" />
                            <p v-else>تأكيد</p>
                        </button>
                        <button type="button" @click="$emit('close')" class="secondbtn w-full">تخطي</button>
                    </div>
                </VeeForm>
            </div>
            <p v-else class="text-center text-light w-full">لا توجد مواعيد متاحه</p>
        </UIBaseCard>
    </div>
</template>

<script setup>
import * as yup from "yup";
import { configure } from "vee-validate";
import { useToast } from "vue-toastification";
const emits = defineEmits(["refresh"]);
const toast = useToast();
const chosenTimes = ref(null);
const chosenTime = ref(null);
const chosenDay = ref(null);
const config = useRuntimeConfig();
const token = useCookie("leakDetectionToken");
const route = useRoute();
const i18n = useI18n();
const btnLoading = ref(false);

const { data: times, pending } = useApi("website/work-times");

configure({
    validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const schema = yup.object().shape({
    chooseTime: yup.object().required().label(),
    chooseTimeDate: yup.object().required().label(),
});

watch(chosenDay, (newValue) => {
    chosenTimes.value = null;
    chosenTimes.value = times?.value?.data.find((ele) => ele.title == newValue.title)?.times || [];
});

const onSubmit = async (values, actions) => {
    btnLoading.value = true;

    const frmData = new FormData();
    frmData.append("start_date", chosenDay.value.date);
    frmData.append("start_time", chosenTime.value.key);

    $fetch(`${config.public.baseURL}website/orders/${route.params.id}/delay`, {
        method: "POST",
        body: frmData,
        headers: {
            Accept: "application/json",
            "Accept-Language": i18n.locale.value,
            authorization: `Bearer ${token.value}`,
        },
    })
        .then((res) => {
            emits("refresh");

            emits("close");

            chosenDay.value = null;
            chosenTime.value = null;

            actions.resetForm();

            toast.success(res.message);
        })
        .catch((err) => {
            toast.error(err.response._data.message);
        })
        .finally(() => {
            btnLoading.value = false;
        });
};
</script>

<style scoped></style>
