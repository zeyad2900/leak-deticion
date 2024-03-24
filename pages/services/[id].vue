<template>
    <article class="mt-40 pb-24">
        <div v-if="error">{{ error }}</div>

        <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
            <UILoader />
        </div>

        <div class="container" v-if="data?.data">
            <div class="grid grid-cols-12">
                <!-- details -->
                <div class="lg:col-span-8 col-span-12">
                    <h1 class="text-4xl font-bold mb-10">{{ data?.data.title }}</h1>

                    <!-- swiper -->
                    <div class="grid grid-cols-12 lg:gap-x-5 gap-y-5 md:p-0 py-3 px-0 md:px-3 mb-5">
                        <div class="lg:col-span-10 col-span-12 h-fit">
                            <Swiper
                                v-if="data?.data && data?.data.images.length"
                                :spaceBetween="10"
                                :thumbs="{ swiper: thumbsSwiper }"
                                :modules="modules"
                                class="mySwiper2 lg:rounded-3xl rounded-lg md:h-[500px] h-[400px]"
                            >
                                <Swiper-slide v-for="(slide, i) in data?.data.images" :key="i">
                                    <img :src="slide.media" :alt="`image[${i}]`" class="rounded-lg h-full w-full object-cover" />
                                </Swiper-slide>
                            </Swiper>
                        </div>

                        <div class="lg:col-span-2 lg:block hidden overflow-hidden">
                            <Swiper
                                @swiper="setThumbsSwiper"
                                :spaceBetween="20"
                                :slidesPerView="6"
                                :direction="'vertical'"
                                :freeMode="true"
                                :watchSlidesProgress="true"
                                :modules="modules"
                                v-if="data?.data && data?.data.images.length"
                                class="mySwiper_vertical md:h-[500px] h-[400px]"
                            >
                                <SwiperSlide v-for="(slide, i) in data?.data.images" :key="i" class="!h-fit rounded-lg overflow-hidden space-y-4">
                                    <img :src="slide.media" :alt="`image[${i}]`" class="rounded-lg custom-size" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <!-- titel -->
                    <div class="mb-5">
                        <h3 class="text-2xl font-bold mb-3">{{ $t("TITLES.service_details") }}</h3>
                        <div class="text-light text-lg" v-html="data?.data.desc"></div>
                    </div>
                    <!-- form -->
                    <VeeForm :validation-schema="schema" @submit="submit" as="div">
                        <form class="mb-5">
                            <VeeField name="problem_details" v-slot="{ field }">
                                <div class="mb-5">
                                    <label class="md:text-2xl text-xl mb-3 block">{{ $t("TITLES.problem_details") }}</label>
                                    <div class="maininput">
                                        <textarea name="" id="" cols="30" rows="10" :placeholder="$t('TITLES.problem_details_value')" v-bind="field"></textarea>
                                    </div>
                                    <vee-error-message name="problem_details" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <VeeField name="address_details" v-slot="{ field }">
                                <div class="mb-5">
                                    <label class="md:text-2xl text-xl mb-3 block">{{ $t("TITLES.address_details") }}</label>
                                    <div class="maininput">
                                        <textarea name="" id="" cols="30" rows="10" :placeholder="$t('TITLES.address_details_value')" v-bind="field"></textarea>
                                    </div>
                                    <vee-error-message name="address_details" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <button
                                @click="
                                    showMap = true;
                                    console.log(showMap);
                                "
                                type="button"
                                class="border border-stroke rounded-xl py-4 px-8 flex items-center justify-between w-[95%] mb-10"
                            >
                                <div class="flex items-center justify-between w-full">
                                    <div class="border border-stroke rounded-xl py-2 px-5 flex flex-col lg:flex-row lg:items-center justify-between w-full items-center gap-10 max-w-3/4">
                                        <div class="flex flex-col lg:flex-row gap-10 items-center">
                                            <div>
                                                <img src="/assets/images/servicesdetails/map.png" alt="" />
                                            </div>
                                            <div class="text-center lg:text-start">
                                                <h1 class="font-bold mb-2">{{ $t("FORMS.Placeholders.Adress_Name") }}</h1>
                                                <p class="text-light">{{ location }}</p>
                                            </div>
                                        </div>
                                        <div class="hidden lg:block">
                                            <img src="/assets/images/servicesdetails/location.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <div>
                                <VeeField name="chooseTimeDate" v-slot="{ field }">
                                    <div class="mb-5">
                                        <label class="text-lg font-bold mb-5 block">{{ $t("FORMS.Placeholders.chooseTimeDate") }}</label>
                                        <div class="flex flex-wrap gap-3">
                                            <div
                                                v-for="(day, i) in data?.work_times"
                                                :key="day.title"
                                                class="text-center border rounded-lg w-fit flex-wrap"
                                                :class="day.title == chosenDay?.title ? 'border-main' : 'border-stroke'"
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
                                    <div class="mb-5">
                                        <div class="flex items-center justify-start gap-5 flex-wrap">
                                            <div
                                                v-for="(time, i) in currentTimes"
                                                :key="i"
                                                class="text-center border rounded-lg"
                                                :class="time.value == chosenTime?.value ? 'border-main' : 'border-stroke'"
                                            >
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

                                                <input
                                                    v-bind="field"
                                                    class="hidden"
                                                    type="radio"
                                                    name="selectedTime"
                                                    :id="`time-${chosenDay?.title}-${time.value}`"
                                                    :value="time"
                                                    v-model="chosenTime"
                                                />
                                            </div>
                                        </div>

                                        <vee-error-message name="chooseTime" as="span" class="!text-danger" />
                                    </div>
                                </VeeField>

                                <VeeField name="payment" type="payment" v-slot="{ field }">
                                    <div class="mb-7">
                                        <div class="flex items-center justify-start gap-5">
                                            <div v-for="(payment, i) in payments" :key="i" class="text-center border rounded-lg" :class="payment == chosenPayment ? 'border-main' : 'border-stroke'">
                                                <label class="cursor-pointer relative h-full py-2 px-5 w-fit min-h-[45px] flex items-center justify-center" :for="`payment${i}`">
                                                    <div class="flex items-center gap-3">
                                                        <img :src="payment.img" alt="payment-image" />

                                                        <span>
                                                            {{ payment.name }}
                                                        </span>
                                                    </div>

                                                    <img
                                                        src="/assets/images/servicesdetails/mark.png"
                                                        alt="checked"
                                                        class="absolute -top-3 -start-3 bg-white"
                                                        :class="payment == chosenPayment ? 'block' : 'hidden'"
                                                    />
                                                </label>

                                                <input v-bind="field" class="hidden" type="radio" name="payment" :id="`payment${i}`" :value="payment" v-model="chosenPayment" />
                                            </div>
                                        </div>
                                        <VeeErrorMessage class="text-danger text-sm" name="payment" />
                                    </div>
                                </VeeField>
                                <button :disabled="btnLoading" class="mainbtn w-52 disabled:cursor-not-allowed">{{ $t("BUTTONS.confirm_reservation") }}</button>
                            </div>
                        </form>
                    </VeeForm>
                </div>

                <!-- search -->
                <div class="lg:col-span-4 col-span-12">
                    <div class="bg-stroke mx-auto md:w-[90%] w-full p-4 rounded-3xl">

                        <div class="flex items-center relative mb-10">
                            <label class="absolute ps-3">
                                <img src="/assets/images/servicesdetails/search-normal.png" alt="" />
                            </label>
                            <input
                                :placeholder="$t('FORMS.Placeholders.search_for_company')"
                                type="text"
                                v-model="search"
                                class="py-4 ps-10 w-full rounded-2xl focus:outline-none text-xl placeholder:text-xl placeholder:text-light"
                            />
                        </div>

                        <div>
                            <ServicesDetailsSearchCard
                                v-for="company in filteredCompanies ? filteredCompanies : companies.data"
                                :key="company.id"
                                @click="selectedCompany = company.id"
                                :styles="selectedCompany == company.id && '!border-main'"
                                :company="company"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Teleport to="body">
            <PopupsMap v-if="showMap" @close="showMap = false" @setAddress="getlocation" />
            <PopupsDone v-if="confirm_reservation_done" :content="locale == 'ar' ? 'تم تاكيد الحجز' : 'Done'" />
        </Teleport>
    </article>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();
const { data, pending } = await useApi(`website/services/${route.params.id}`);
const { data: companies } = await useApi(`website/services/${route.params.id}/companies`);

import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs } from "swiper/modules";
// import "swiper/css";
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const modules = ref([Thumbs]);

import { configure } from "vee-validate";
import { useToast } from "vue-toastification";
import * as yup from "yup";

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnModelUpdate: true,
    validateOnInput: true,
});

const { t, locale } = useI18n();
const toast = useToast();
const config = useRuntimeConfig();

const schema = yup.object().shape({
    problem_details: yup.string().required(t("ERRORS.problem_details_error")),
    address_details: yup.string().required(t("ERRORS.address_details_error")),
    payment: yup.object().required(t("ERRORS.payment_error")),
    chooseTime: yup.object().required(t("ERRORS.chooseTime_error")),
    chooseTimeDate: yup.object().required(t("ERRORS.chooseTimeDate_error")),
});

const payments = ref([
    {
        id: "cash",
        name: t("TITLES.cash"),
        img: new URL("~/assets/images/servicesdetails/money.png", import.meta.url),
    },
    {
        id: "online",
        name: t("TITLES.online"),
        img: new URL("~/assets/images/servicesdetails/onlinepay.png", import.meta.url),
    },
]);
const chosenTime = ref(null);

const currentTimes = ref([]);

const chosenDay = ref(null);

const chosenPayment = ref(null);

watch(
    chosenDay,
    (value) => {
        chosenTime.value = null;
        if (value) {
            currentTimes.value = data?.value?.work_times.find((item) => item.title === chosenDay.value?.title)?.times || [];
        }
    },
    {
        deep: true,
    }
);

const selectedCompany = ref(null);
const filteredCompanies = ref("");
const search = ref("");

watch(search, (value) => {
    filteredCompanies.value = companies.value.data?.filter((item) => {
        return item.full_name.toLowerCase().includes(value.toLowerCase());
    });
});

const location = ref(locale.value == "ar" ? "ادخل عنوانك هنا" : "set location here");
const lng = ref(null);
const lat = ref(null);
const getlocation = (value) => {
    location.value = value.location;
    lat.value = value.lat;
    lng.value = value.lng;
};

const token = useCookie("leakDetectionToken");

const showMap = ref(false);
const confirm_reservation_done = ref(false);
const btnLoading = ref(false);

const submit = async (values, actions) => {
    btnLoading.value = true;
    const frmData = new FormData();
    frmData.append("company_id", selectedCompany.value);
    frmData.append("service_id", data?.value?.data.id);
    frmData.append("address", values.address_details);
    frmData.append("location", location.value);
    frmData.append("lat", lat.value);
    frmData.append("lng", lng.value);
    frmData.append("desc", values.problem_details);
    frmData.append("start_date", chosenDay.value.date);
    frmData.append("start_time", chosenTime.value.key);
    frmData.append("payment_type", chosenPayment.value.id);

    await $fetch(`website/orders`, {
        method: "POST",
        baseURL: config.public.baseURL,
        body: frmData,
        headers: {
            Accept: "application/json",
            "Accept-Language": locale.value,
            authorization: `Bearer ${token.value}`,
        },
    })
        .then((data) => {
            confirm_reservation_done.value = true;
            setTimeout(() => {
                confirm_reservation_done.value = false;
                router.push(localePath("/profile/orders"));
            }, 1000);
        })
        .catch((err) => {
            toast.error(err.response._data.message);
        });
    btnLoading.value = true;
    chosenDay.value = null;
    chosenTime.value = null;
    chosenPayment.value = null;
    selectedCompany.value = null;
    actions.resetForm();
};
</script>

<style lang="scss" scoped>
.services {
    .custom-size {
        @media only screen and (min-width: 992px) {
            height: calc(500px / 6);
            width: calc(500px / 6);
            object-fit: cover;
        }

        @media only screen and (max-width: 768px) {
            height: calc(300px / 6);
            width: calc(300px / 6);
            object-fit: cover;
        }

        width: 100%;
        object-fit: cover;
    }
}
</style>
