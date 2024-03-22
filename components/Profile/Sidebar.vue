<template>
    <div class="col-span-12 lg:col-span-5 mb-10 lg:mb-0">
        <div class="bg-[#FFFFFF] p-10 rounded-[40px] lg:w-[80%] shadow-lg">
            <h1 class="font-bold text-2xl mb-8">{{ $t("PersonalAccount") }}</h1>

            <NuxtLink to="/profile" class="flex items-center justify-start gap-4 mb-8">
                <div class="w-20 h-20 rounded-full overflow-hidden">
                    <img class="w-full h-full object-cover" :src="data?.data.image" :alt="data?.data.full_name" />
                </div>
                <div>
                    <h3 class="font-bold text-text">{{ data?.data.full_name }}</h3>
                    <div class="flex gap-3">
                        <span class="text-light">{{ data?.data.phone_complete_form }}</span>
                        <span>
                            <img src="/SaudiArabia.png" alt="" />
                        </span>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/profile/orders" class="flex items-center justify-between mb-8">
                <div class="flex items-center gap-3">
                    <div class="p-3"><Icon name="fa6-solid:box-archive" /></div>
                    <p>{{ $t("orders") }}</p>
                </div>
                <div>
                    <Icon name="ep:arrow-left-bold" class="ltr:scale-[-1]" />
                </div>
            </NuxtLink>

            <div class="flex items-center justify-between mb-8 h-6">
                <div class="flex gap-3">
                    <nuxt-icon class="px-2 text-xl" name="notification" alt="" />
                    <p>{{ $t("notifications") }}</p>
                </div>
                <div class="toggle-switch">
                    <input :disabled="notificationLoading" :value="notifiction" v-model="notifiction" class="toggle-input" id="toggle" type="checkbox" />
                    <label class="toggle-label" for="toggle"></label>
                </div>
            </div>

            <button :disabled="logoutLoading" @click="Logout = true" class="flex mb-8 gap-3 items-center">
                <img class="bg-[#ef233b1f] p-2 rounded-full" src="/assets/images/profile/logout.png" alt="" />
                <p>{{ $t("logOutbtn") }}</p>
            </button>
            <PopupsAuthLogout :loading="logoutLoading" @logout="handleLogout" @close="Logout = false" v-if="Logout" />

            <button @click="Delete = true" class="flex gap-3 mb-8 items-center">
                <img class="bg-[#ef233b1f] p-2 rounded-full" src="/assets/images/imgicons/trash.png" alt="" />
                <p>{{ $t("Deletebtn") }}</p>
            </button>
            <PopupsAuthDelete :loading="logoutLoading" @delete="handleDelete" @close="Delete = false" v-if="Delete" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        required: true,
    },
});

import { useToast } from "vue-toastification";
const Logout = ref(false);
const Delete = ref(false);

const config = useRuntimeConfig();
const toast = useToast();
const i18n = useI18n();
const token = useCookie("leakDetectionToken");
const profileId = useCookie("profileId");
const logoutLoading = ref(false);

async function handleLogout() {
    logoutLoading.value = true;

    await $fetch(`${config.public.baseURL}website/logout`, {
        method: "POST",
        headers: {
            "Accept-Language": i18n.locale.value,
            Authorization: `Bearer ${token.value}`,
        },
    })
        .then((res) => {
            token.value = null;
            profileId.value = null;
            Logout.value = false;
            toast.success(res.message);
            location.reload();
        })
        .catch((err) => {
            toast.error(err.response_data.message);
            Delete.value = false;
            logoutLoading.value = false;
        });
}

async function handleDelete() {
    logoutLoading.value = true;

    await $fetch(`${config.public.baseURL}website/profile`, {
        method: "DELETE",
        headers: {
            "Accept-Language": i18n.locale.value,
            Authorization: `Bearer ${token.value}`,
        },
    })
        .then((res) => {
            token.value = null;
            profileId.value = null;
            Logout.value = false;
            toast.success(res.message);
            location.reload();
        })
        .catch((err) => {
            toast.error(err.response._data.message);
            Logout.value = false;
            logoutLoading.value = false;
        });
}

const notifiction = ref(props.data?.data?.allow_notification || false);
watch(notifiction, () => {
    handleNotifiction();
});

const notificationLoading = ref(false);
async function handleNotifiction() {
    notificationLoading.value = true;

    await $fetch(`${config.public.baseURL}website/profile/toggle-notification`, {
        method: "POST",
        body: {
            _method: "PATCH",
        },
        headers: {
            "Accept-Language": i18n.locale.value,
            Authorization: `Bearer ${token.value}`,
        },
    })
        .then(() => {
            toast.success(notifiction.value ? "تم فتح الاشعارات " : "تم غلق الاشعارات");
        })
        .catch((err) => toast.error(err.response._data.message))
        .finally(() => {
            notificationLoading.value = false;
        });
}
</script>

<style scoped>
.router-link-active {
    color: #3162da;
}

/* Genel stil */
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
}

/* Giriş stil */
.toggle-switch .toggle-input {
    display: none;
}

/* Anahtarın stilinin etrafındaki etiketin stil */
.toggle-switch .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    background-color: #bfb7b7;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.3s;
}

/* Anahtarın yuvarlak kısmının stil */
.toggle-switch .toggle-label::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
}

/* Anahtarın etkin hale gelmesindeki stil değişiklikleri */
.toggle-switch .toggle-input:checked + .toggle-label {
    background-color: #3162da;
}

.toggle-switch .toggle-input:checked + .toggle-label::before {
    transform: translateX(16px);
}

/* Light tema */
.toggle-switch.light .toggle-label {
    background-color: #bebebe;
}

.toggle-switch.light .toggle-input:checked + .toggle-label {
    background-color: #9b9b9b;
}

.toggle-switch.light .toggle-input:checked + .toggle-label::before {
    transform: translateX(6px);
}

/* Dark tema */
.toggle-switch.dark .toggle-label {
    background-color: #4b4b4b;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label {
    background-color: #717171;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label::before {
    transform: translateX(16px);
}
</style>
