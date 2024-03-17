<template>
    <div v-if="isLoading" class="bg-white z-[500] flex justify-center">
        <UILoader />
    </div>
    <template v-else-if="items.length">
        <div class="w-full pe-3">
            <NuxtLink :to="localePath(`/profile/orders/${item.id}`)" v-for="item in items" :key="item.id" class="block shadow-sm p-6 rounded-[40px]">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center justify-center gap-4">
                        <div class="w-[150px] h-[100px] rounded-full overflow-hidden">
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
                    <p class="font-bold text-sm"><span class="text-light">الخدمه:</span> {{ item.service.title }}</p>
                    <div class="flex gap-4">
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/calendar.png" alt="" />
                            <span class="text-light text-sm">{{ item.start_date }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/clock.png" alt="" />
                            <span class="text-light text-sm">{{ item.start_time }}</span>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </template>

    <!-- <template v-else-if="items.length">
        <div class="max-h-[500px] w-full overflow-auto pe-3">
            <nuxt-link :to="localePath(`/profile/orders/${item.id}`)" v-for="item in items" :key="item.id" class="order-card py-4 rounded-md px-2">
                <div class="flex justify-between gap-2 items-center">
                    <div class="flex items-center gap-2" v-if="item.status == 'pending'">
                        <div>
                            <h5>{{ "طلب رقم" + item.id }}</h5>
                        </div>
                    </div>
                    <div class="flex items-center gap-2" v-else>
                        <img class="rounded-lg" src="/assets/images/profile/profilesm.png" alt="order-profile" />
                        <div>
                            <h5>{{ item.agent?.full_name }}</h5>
                            <div class="flex items-center gap-1">
                                <img src="/assets/images/profile/location.png" alt="Location" />
                                <h6 class="text-light">{{ item.address }}</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="bg-[#3162da] text-white block p-2 rounded-2xl capitalize" v-if="item.order_id"> طلب صيانة </span>
                        <span :class="item.status" class="bg-white status inline-block p-2 rounded-2xl capitalize">
                            {{ item.status_trans }}
                        </span>
                    </div>
                </div>

                <div class="flex justify-between gap-2">
                    <nuxt-link :to="localePath('/orders/1')" class="text-light text-small"
                        >الخدمة: <span class="text-text text-small font-[400]"> {{ item.service?.title }}</span></nuxt-link
                    >
                    <div class="flex items-center gap-2 text-light text-xs">
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/calendar.png" alt="" />
                            <p>{{ item.start_date }}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/clock.png" alt="" />
                            <p>{{ item.start_time }}</p>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </template> -->
    <template v-else>
        <p class="text-center font-bold text-lg text-text mt-5">لا توجد طلبات</p>
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
