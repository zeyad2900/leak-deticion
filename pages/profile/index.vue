<template>
    <div class="container w-full lg:w-[70%]">
        <VeeForm as="div" @submit="onSubmit" :validation-schema="schema" :initial-values="initialValues">
            <form>
                <VeeField type="file" name="image" v-slot="{ meta }">
                    <div class="flex flex-col items-center justify-cente">
                        <div class="relative">
                            <label
                                :class="!meta.valid && meta.touched ? ' border border-danger' : ''"
                                for="img"
                                class="cursor-pointer rounded-full w-15 h-15 flex items-center justify-center bottom-0 start-5 p-2 bg-main m-0 absolute"
                            >
                                <nuxt-icon class="text-[30px] text-white" name="edit" />
                            </label>
                            <input id="img" class="hidden" type="file" accept=".jpg,.png,.jpeg" @change="handleChangeProfileImage" />
                            <div class="w-60 h-60">
                                <img v-if="profileImageFile" :src="profileImagePreview" class="object-cover w-full rounded-full h-full" alt="user" />
                                <img v-else :src="data?.data.image" class="object-cover w-full rounded-full h-full" alt="user" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-center">
                        <button @click="updatePassword = true" type="button" class="flex gap-2 mt-5 items-center justify-center">
                            <img src="/assets/images/profile/key.png" alt="" />
                            <p class="text-main">{{ $t("Changepassword") }}</p>
                        </button>
                    </div>
                </VeeField>
                <VeeField type="text" name="fullName" v-slot="{ field, meta }">
                    <div class="w-full space-y-1">
                        <label class="text-light"> {{ $t("FORMS.Placeholders.fullName") }}</label>
                        <div class="maininput">
                            <input :placeholder="$t('FORMS.Placeholders.fullName')" v-bind="field" type="text" :class="!meta.valid && meta.touched ? '!border-danger' : ''" />
                        </div>
                        <VeeErrorMessage name="fullName" as="span" class="text-danger" />
                    </div>
                </VeeField>
                <button type="submit" :disabled="btnLoading" class="mainbtn block ms-auto w-36 mt-7 disabled:cursor-not-allowed">{{ $t("BUTTONS.save") }}</button>
            </form>
        </VeeForm>

        <VeeForm :validation-schema="schema1" :initial-values="initialValue" @submit="changePhone" as="div" v-slot="{ values }">
            <form class="mt-5 w-full space-y-1 relative">
                <label for="phone" class="text-light">{{ $t("FORMS.Placeholders.phoneNumber") }}</label>
                <GlobalPhoneInput />
                <button v-if="values.phone != data.data.phone" :disabled="btnLoading1" class="absolute top-9 end-2 text-main flex items-center justify-center" type="submit">
                    {{ $t("BUTTONS.confirm") }}
                </button>
            </form>
        </VeeForm>

        <Teleport to="body">
            <PopupsAuthUpdatePass v-if="updatePassword" @close="updatePassword = false" />
            <PopupsAuthUpdatePhone v-if="verify" @close="verify = false" :data="verifyData" @updateProfile="$emit('updateProfile')" />
        </Teleport>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        required: true,
    },
});
const emits = defineEmits(["updateProfile"]);

import * as yup from "yup";
import { useToast } from "vue-toastification";

const { t, locale } = useI18n();
const toast = useToast();
const btnLoading = ref(false);
const btnLoading1 = ref(false);
const config = useRuntimeConfig();
const token = useCookie("leakDetectionToken");
const profileImageFile = ref(null);
const profileImagePreview = ref("");
const profileImageSrc = ref(null);
const verify = ref(false);
const updatePassword = ref(false);

const initialValues = reactive({
    fullName: "",
    preview: "",
    image: "",
});
const initialValue = reactive({
    phone: "",
    phone_code: "",
});

const schema = yup.object().shape({
    fullName: yup.string().required(t("FORMS.Validation.name")),
    image: yup.mixed(),
});

const schema1 = yup.object().shape({
    phone: yup.string().required(t("FORMS.Validation.phone")),
    phone_code: yup.mixed().required(),
});

async function handleChangeProfileImage(e) {
    profileImageFile.value = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        profileImagePreview.value = reader.result;
    };

    const form = new FormData();
    form.append("attachment_type", "image");
    form.append("file", e.target.files[0]);
    form.append("model", "users");

    await $fetch(`${config.public.baseURL}general/attachments`, {
        method: "POST",
        body: form,
    })
        .then((res) => (profileImageSrc.value = res.data))
        .catch((e) => console.error(e));
}

async function onSubmit(values, actions) {
    btnLoading.value = true;

    const frmData = new FormData();

    frmData.append("_method", "PUT");
    frmData.append("full_name", values.fullName);
    if (profileImageFile.value) {
        frmData.append("image", profileImageSrc.value);
    }

    await $fetch(`${config.public.baseURL}website/profile/update`, {
        method: "POST",
        body: frmData,
        headers: {
            "Accept-Language": locale.value,
            Accept: "application/json",
            Authorization: `Bearer ${token.value}`,
        },
    })
        .then((res) => {
            initialValues.preview = res.data.image;
            initialValues.fullName = res.data.full_name;
            initialValue.phone_code = res.data.phone_code;
            initialValue.phone = res.data.phone;
            btnLoading.value = false;
            toast.success(res.message);

            emits("updateProfile");
        })
        .catch((e) => {
            toast.error(e.response._data.message);

            btnLoading.value = false;
        });
}

async function changePhone(values) {
    btnLoading1.value = true;

    await $fetch(`${config.public.baseURL}website/profile/edit-phone`, {
        method: "POST",
        body: {
            phone_code: values.phone_code.phone_code,
            phone: values.phone,
        },
        headers: {
            "Accept-Language": locale.value,
            Accept: "application/json",
            Authorization: `Bearer ${token.value}`,
        },
    })
        .then((res) => {
            toast.success(res.message);

            initialValue.phone_code = values.phone_code.phone_code;
            initialValue.phone = values.phone;

            verifyData.value.phone = values.phone;
            verifyData.value.phone_code = values.phone_code.phone_code;

            verify.value = true;
        })
        .catch((e) => {
            toast.error(e.response._data.message);
        })
        .finally(() => (btnLoading1.value = false));
}

const verifyData = ref({
    phone_code: null,
    phone: null,
});
</script>

