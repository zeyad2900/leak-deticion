<template>
    <div v-if="isLoading" class="bg-white z-[500] flex justify-center">
        <UILoader />
    </div>
    <template v-else-if="items.length">
        <div class="w-full">
            <NuxtLink :to="localePath(`/profile/orders/${item.id}`)" v-for="item in items" :key="item.id" class="block shadow-sm p-6 rounded-[40px] mb-4">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center justify-start gap-4">
                        <div class="w-[70px] h-[70px] rounded-[50px] overflow-hidden">
                            <img class="w-full h-full object-cover" :src="item.service.image" alt="" />
                        </div>
                        <div>
                            <h3 class="font-bold mb-2">{{ item.company.full_name }}</h3>
                            <div class="flex items-center gap-1">
                                <span><img src="/assets/images/profile/location.png" alt="" /></span>
                                <p class="text-sm text-light">{{ item.address }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 bg-[#12b3482b] rounded-lg">
                        <h1 class="font-bold text-[#12B347]">{{ item.status_trans }}</h1>
                    </div>
                </div>
                <div class="flex justify-between">
                    <p class="font-bold text-sm">
                        <span class="text-light">{{ $t("TITLES.service") }}:</span> {{ item.service.title }}
                    </p>
                    <div class="flex gap-4">
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/calendar.png" alt="" />
                            <span class="text-light text-xs">{{ item.start_date }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/clock.png" alt="" />
                            <span class="text-light text-xs">{{ item.start_time }}</span>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </template>
    <template v-else>
        <p class="text-center font-bold text-lg text-text mt-5">{{ $t("MESSAGES.noOrders") }}</p>
    </template>
</template>

<script setup>
const localePath = useLocalePath();
const token = useCookie("leakDetectionToken");
const config = useRuntimeConfig();

const { locale } = useI18n();
const router = useRouter();
const route = useRoute();
const items = ref(null);

const isLoading = ref(true);
await useAsyncData("orders", () => {
    isLoading.value = true;

    $fetch(`website/orders?${route.query.status}=1`, {
        method: "GET",
        baseURL: config.public.baseURL,
        query: { [route.query.status]: 1 },
        params: { page: route.query.page || 1 },
        headers: {
            "Accept-Language": locale.value,
            Accept: "application/json",
            Authorization: `Bearer ${token.value}`,
        },
        watch: [route.query.status],
    })
        .then((res) => {
            items.value = res.data;
        })
        .finally(() => (isLoading.value = false));
});

watch(
    () => route.query,
    () => {
        if (!route.query.status && !route.query.page) {
            router.push(localePath("/profile/orders?status=current&page=1"));
        }
        refreshNuxtData("orders");
    },
    {
        immediate: true,
    }
);
</script>

<style lang="scss"></style>
