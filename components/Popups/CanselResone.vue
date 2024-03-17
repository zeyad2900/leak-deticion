<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button @click="$emit('close')" class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <div v-if="loading" class="flex items-center justify-center h-full py-12">
                <UILoader />
            </div>
            <h1 v-if="!loading" class="text-2xl block me-auto mb-5 font-bold">اخبرنا سبب إلغاء الطلب</h1>
            <VeeForm v-if="!loading" :initial-values="initialValues" :validation-schema="schema" as="div" @submit="onSubmit">
                <form>
                    <div class="px-7">
                        <div class="space-y-2 mb-5">
                            <VeeField type="radio" name="reason" v-for="reason in reasons" :key="reason.id" :value="reason.id" v-slot="{ field }">
                                <label :for="`reason-${reason.id}`" class="flex w-full border border-stroke p-3 rounded-xl justify-between cursor-pointer"
                                    >{{ reason.title }}
                                    <input
                                        name="reason"
                                        type="radio"
                                        :id="`reason-${reason.id}`"
                                        v-model="reasonVal"
                                        :value="reason.id"
                                        v-bind="field"
                                        class="font-light border border-opacity-10 rounded-xl"
                                    />
                                </label>
                            </VeeField>
                            <VeeField type="radio" name="reason" value="other" v-slot="{ field }">
                                <label for="reason-otherReathon" class="flex w-full border border-stroke p-3 rounded-xl justify-between cursor-pointer"
                                    >سبب اخر
                                    <input
                                        name="reason"
                                        type="radio"
                                        id="reason-otherReathon"
                                        v-model="reasonVal"
                                        value="other"
                                        v-bind="field"
                                        class="font-light border border-opacity-10 rounded-xl"
                                    />
                                </label>
                            </VeeField>
                        </div>
                        <div v-if="showOnterReason">
                            <VeeField type="text" v-slot="{ field }" name="otherReason">
                                <div class="maininput">
                                    <textarea name="otherReason" type="text" v-bind="field" placeholder="قم بكتابة السبب هنا" />
                                </div>
                            </VeeField>
                        </div>
                    </div>

                    <button :disabled="btnLoading" class="mainbtn w-full">
                        <UIButtonLoader v-if="btnLoading" />
                        <p v-else>تأكيد</p>
                    </button>
                </form>
            </VeeForm>
        </UIBaseCard>
    </div>
</template>

<script setup>
import * as yup from "yup";
import { useToast } from "vue-toastification";

const fieldValue = useField("reason");
const emits = defineEmits(["close"]);
const route = useRoute();
const config = useRuntimeConfig();
const toast = useToast();
const i18n = useI18n();
const reasonVal = ref(null);
const showOnterReason = ref(false);
const reasons = ref([]);
const loading = ref(false);
const btnLoading = ref(false);
const token = useCookie("leakDetectionToken");

const schema = yup.object().shape({
    reason: yup.mixed(),
    otherReason: yup.string(),
});

const initialValues = reactive({
    reason: null,
    otherReason: "",
});

async function onSubmit(values) {
    btnLoading.value = true;

    const frmData = new FormData();
    if (values.reason != "other") {
        frmData.append("cancel_reason_id", values.reason);
    }
    frmData.append("cancel_reason_note", values.otherReason);

    await $fetch(`${config.public.baseURL}website/orders/${route.params.id}/cancel`, {
        method: "POST",
        body: frmData,
        headers: {
            Accept: "application/json",
            "Accept-Language": i18n.locale.value,
            Authorization: `Bearer ${token.value}`,
        },
    })
        .then((res) => {
            emits("refresh");
            emits("close");
            toast.success(res.message);
        })
        .catch((e) => {
            toast.error(e.response._data.message);

            btnLoading.value = false;
        });
}

function fetchData() {
    loading.value = true;
    $fetch(`${config.public.baseURL}website/cancel-reasons`).then((res) => {
        reasons.value = res.data;
        if (res.data.length) {
            initialValues.reason = res.data[0].id;
            fieldValue.setValue = res.data[0].id;
            reasonVal.value = res.data[0].id;
        } else {
            initialValues.reason = "other";
            fieldValue.setValue = "other";
            reasonVal.value = "other";
        }
        loading.value = false;
    });
}

watch(reasonVal, (newValue) => {
    if (newValue == "other") {
        showOnterReason.value = true;
    } else {
        showOnterReason.value = false;
    }
});

onMounted(() => {
    fetchData();
});
</script>

<style scoped></style>
