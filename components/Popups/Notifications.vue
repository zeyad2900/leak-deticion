<template>
    <div class="top-24 rtl:left-1 rtl:sm:left-24 ltr:right-1 ltr:sm:right-24 z-[999] fixed sm:w-[400px] text-text">
        <UIBaseCard>
            <div class="flex justify-between items-center mb-4">
                <h1 class="font-black text-xl">{{ $t("notifications") }}</h1>
                <button :disabled="deleteLoading" class="disabled:cursor-not-allowed" v-if="notifications.length" @click="handleDeleteAllNotifications">
                    <img src="/assets/images/imgicons/trash.png" alt="" />
                </button>
            </div>

            <!-- if notifications is no empty -->
            <div v-if="notifications.length" class="flex flex-col items-start justify-center gap-3 max-h-[500px] overflow-y-auto">
                <GlobalNotifictionCard v-for="notify in notifications" :key="notify.id" :notify="notify" />
            </div>

            <div v-else class="flex-col items-center gap-7">
                <div class="w-full flex justify-center items-center">
                    <img src="/assets/images/imgicons/notificationsemoty.png" alt="" />
                </div>
                <div class="space-y-3">
                    <h1 class="font-bold text-center text-xl">{{ $t("MESSAGES.noNotifications") }}</h1>
                </div>
            </div>
        </UIBaseCard>
    </div>
</template>

<script setup>
const props = defineProps({
    notifications: {
        required: true,
    },
});
import { useToast } from "vue-toastification";
const toast = useToast();
const emits = defineEmits(["delete"]);
const config = useRuntimeConfig();
const token = useCookie("leakDetectionToken");
const i18n = useI18n();

const deleteLoading = ref(false);
async function handleDeleteAllNotifications() {
    deleteLoading.value = true;

    await $fetch("website/delete_all_notifications", {
        method: "DELETE",
        baseURL: config.public.baseURL,
        headers: {
            Authorization: `Bearer ${token.value}`,
            Accept: "application/json",
            "Accept-Language": i18n.locale.value,
        },
    })
        .then((res) => {
            emits("delete");
            toast.success(res.message);
        })
        .catch((e) => {
            toast.error(e.response._data.message);
        })
        .finally(() => (deleteLoading.value = false));
}
</script>

<style></style>
