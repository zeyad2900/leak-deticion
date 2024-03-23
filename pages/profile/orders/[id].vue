<template>
    <div class="min-h-screen relative">
        <div class="container">
            <div class="col-span-2 lg:col-span-1 mb-7 lg:mb-0">
                <div class="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-8">
                    <h1 class="font-bold text-2xl">{{ $t("OrderDetails") }}</h1>
                    <div v-if="order.data.status == 'pending'" class="flex items-start justify-center gap-5">
                        <button class="mainbtn" @click="delay = true">{{ $t("delayOrder") }}</button>
                        <button class="secondbtn !border-danger !text-danger" @click="cansel = true">{{ $t("cancelOrder") }}</button>
                    </div>
                </div>
                <div class="shadow-sm p-6 rounded-[40px] mb-6 w-full">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex items-center justify-center gap-4">
                            <img src="/assets/images/profile/profilesm.png" alt="" />
                            <div>
                                <h3 class="font-bold mb-2">{{ order?.data?.company.full_name }}</h3>
                                <div class="flex items-center gap-1">
                                    <span><img src="/assets/images/profile/location.png" alt="" /></span>
                                    <p class="text-sm text-light">{{ order?.data?.address }}</p>
                                </div>
                            </div>
                        </div>
                        <button
                            @click="chat = true"
                            v-if="
                                order.data.status === 'accept' ||
                                order.data.status === 'in_the_way' ||
                                order.data.status === 'ready_to_pay' ||
                                order.data.status === 'pre_finished' ||
                                order.data.status === 'finished'
                            "
                        >
                            <img src="/assets/images/profile/chat.png" alt="" />
                        </button>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-bold text-sm">
                            <span class="text-light">{{ $t("TITLES.service") }}: </span>{{ order?.data?.service.title }}
                        </p>
                        <div class="flex gap-4">
                            <div class="flex items-center gap-1">
                                <img src="/assets/images/profile/calendar.png" alt="" />
                                <span class="text-light text-sm">{{ order?.data?.start_date }}</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <img src="/assets/images/profile/clock.png" alt="" />
                                <span class="text-light text-sm">{{ order?.data?.start_time }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shadow-sm p-6 rounded-[40px]">
                    <div class="flex flex-col items-start gap-4 mb-3">
                        <h3 class="font-bold mb-2 text-light">{{ $t("ProblemOrderDetails") }}:</h3>
                        <p class="font-bold">{{ order?.data?.desc }}</p>
                    </div>
                </div>

                <div class="shadow-sm p-6 rounded-[40px]">
                    <div class="flex flex-col items-start gap-4 mb-3">
                        <h3 class="font-bold mb-2 text-light">{{ $t("PaymentMethod") }}</h3>
                        <div class="flex gap-1 items-center">
                            <img class="p-2 bg-stroke rounded-full" src="/assets/images/servicesdetails/money.png" alt="" />
                            <p>{{ order?.data?.payment_type }}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <h6 class="font-bold mb-2 text-light">{{ $t("Location") }}</h6>

                    <div>
                        <div class="pb-4" v-if="center">
                            <GMapMap
                                v-if="center"
                                :center="center"
                                :zoom="5"
                                map-type-id="terrain"
                                :options="{
                                    zoomControl: true,
                                    mapTypeControl: false,
                                    scaleControl: false,
                                    streetViewControl: false,
                                    rotateControl: false,
                                    fullscreenControl: true,
                                }"
                                style="width: 100%; height: 180px"
                            >
                                <GMapMarker :position="center" :clickable="true" :draggable="false"> </GMapMarker>
                            </GMapMap>
                        </div>

                        <p>{{ order.data.location }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Teleport to="body">
        <PopupsChat v-if="chat" @close="chat = false" :finished="order.data.status === 'finished'" />
    </Teleport>
    <Teleport to="body">
        <PopupsCanselResone
            v-if="cansel"
            @close="cansel = false"
            @refresh="
                refresh;
                navigateTo(localePath('/profile/orders'));
            "
        />
    </Teleport>
    <Teleport to="body">
        <PopupsDelayOrder
            v-if="delay"
            @close="delay = false"
            @refresh="
                refresh;
                navigateTo(localePath('/profile/orders'));
            "
        />
    </Teleport>
</template>

<script setup>
const cansel = ref(false);
const delay = ref(false);
const chat = ref(false);
const route = useRoute();
const center = ref(null);

const { data: order, refresh } = await useApi(`website/orders/${route.params.id}`);

if (order.value) {
    center.value = {
        lat: order.value.data.lat,
        lng: order.value.data.lng,
    };
}
</script>

<style></style>
