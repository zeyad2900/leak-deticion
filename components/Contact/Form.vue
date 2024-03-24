<template>
    <div class="bg-stroke rounded-[3rem] grid grid-cols-2 h-fit">
        <div class="col-span-2 lg:col-span-1 container pt-11 pb-4">
            <h1 class="text-2xl lg:text-3xl font-bold mb-7">{{ $t("TITLES.contactUs") }}</h1>
            <VeeForm :validation-schema="schema" @submit="handleSubmit" as="div">
                <form class="flex flex-col items-start gap-2 mb-7">
                    <vee-field name="name" v-slot="{ field, meta }">
                        <div class="maininput">
                            <input
                                :placeholder="$t('FORMS.Placeholders.fullName')"
                                id="fullName"
                                v-bind="field"
                                type="text"
                                :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                            />
                        </div>
                        <vee-error-message v-if="meta.touched && !meta.valid" name="name" as="span" class="!text-danger" />
                    </vee-field>

                    <vee-field name="email" v-slot="{ field, meta }">
                        <div class="maininput">
                            <input
                                :placeholder="$t('FORMS.Placeholders.yourEmail')"
                                id="fullName"
                                v-bind="field"
                                type="email"
                                :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                            />
                        </div>
                        <vee-error-message v-if="meta.touched && !meta.valid" name="email" as="span" class="!text-danger" />
                    </vee-field>

                    <GlobalPhoneInput />

                    <vee-field name="subject" v-slot="{ field, meta }">
                        <div class="maininput">
                            <input :placeholder="$t('FORMS.Placeholders.subject')" id="fullName" v-bind="field" type="text" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" />
                        </div>
                        <vee-error-message v-if="meta.touched && !meta.valid" name="subject" as="span" class="!text-danger" />
                    </vee-field>

                    <vee-field name="message" v-slot="{ field, meta }">
                        <div class="maininput">
                            <textarea
                                :placeholder="$t('FORMS.Placeholders.TypeYourMessageHere')"
                                id="fullName"
                                v-bind="field"
                                type="text"
                                :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                            />
                        </div>
                        <vee-error-message v-if="meta.touched && !meta.valid" name="message" as="span" class="!text-danger" />
                    </vee-field>

                    <button :disabled="buttonLoading" type="submit" class="mainbtn">
                        <div v-if="!buttonLoading" class="flex gap-2">
                            <img src="/assets/images/contact/send-2.png" alt="" />
                            <p>{{ $t("BUTTONS.sendRequest") }}</p>
                        </div>
                        <UIButtonLoader v-else />
                    </button>
                </form>
            </VeeForm>
        </div>

        <div class="flex items-end justify-center col-span-2 lg:col-span-1">
            <img data-wow-duration="1.3s" data-wow-delay="0.3s" class="animated wow fadeInUp" width="400" height="400" src="/assets/images/contact/contantheros.webp" alt="" />
        </div>
    </div>
</template>

<script setup>
import { configure } from "vee-validate";
import * as yup from "yup";
import { useToast } from "vue-toastification";

// veefalied logic
configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnModelUpdate: true,
    validateOnInput: true,
});

const i18n = useI18n();

const schema = yup.object().shape({
    email: yup
        .string()
        .test("email", i18n.t("FORMS.Validation.validEmail"), (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value))
        .required(i18n.t("FORMS.Validation.email")),
    name: yup.string().required(i18n.t("FORMS.Validation.name")),
    phone: yup
        .string()
        .required(i18n.t("FORMS.Validation.phone"))
        .test("phone", (value, ctx) => {
            if (value.length == ctx.parent.phone_code.phone_number_limit) {
                return true;
            } else {
                return ctx.createError({
                    message: i18n.t("FORMS.Validation.phoneLength", { num: ctx.parent.phone_code.phone_number_limit }),
                    path: "phone",
                });
            }
        }),
    subject: yup.string().required(i18n.t("FORMS.Validation.subject")),
    message: yup.string().required(i18n.t("FORMS.Validation.message")),
    phone_code: yup.mixed(),
});

const toast = useToast();
const buttonLoading = ref(false);
const baseURL = useRuntimeConfig().public.baseURL;

async function handleSubmit(values, actions) {
    buttonLoading.value = true;
    await $fetch(`${baseURL}website/contact-us`, {
        method: "POST",
        body: {
            full_name: values.name,
            email: values.email,
            phone_code: values.phone_code.phone_code,
            phone: values.phone,
            title: values.subject,
            content: values.message,
        },
        headers: {
            "Accept-Language": i18n.locale.value,
        },
    })
        .then((res) => {
            toast.success(res.message);
            actions.resetForm();
            buttonLoading.value = false;
        })
        .catch((err) => {
            toast.error(err.response._data.message);
            buttonLoading.value = false;
        });
}
</script>