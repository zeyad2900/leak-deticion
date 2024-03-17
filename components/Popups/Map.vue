<template>
    <div class="fixed top-0 left-0 w-full bg-[#0000009a] flex items-center justify-center h-screen z-[1002]">
        <div class="bg-white rounded-2xl md:w-1/2 w-[90%] p-8">
            <div class="mb-5 flex justify-between items-center">
                <h1 class="font-bold text-2xl">العنوان</h1>

                <button @click="$emit('close')">
                    <Icon class="text-light" name="ep:close-bold"></Icon>
                </button>
            </div>

            <div class="relative">
                <GMapMap
                    v-if="center"
                    :center="center"
                    :zoom="zoom"
                    map-type-id="terrain"
                    :options="{
                        zoomControl: true,
                        mapTypeControl: false,
                        scaleControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        fullscreenControl: true,
                    }"
                    style="width: 100%; height: 500px"
                >
                    <GMapMarker :position="center" :clickable="true" :draggable="true" @dragend="updateMarker" />
                </GMapMap>

                <button type="button" @click="getCurrentLocation" class="absolute bottom-[175px] start-[10px] border text-[#666666] bg-white w-[40px] h-[40px] flex items-center justify-center">
                    <Icon name="iconamoon:location-pin-bold" />
                </button>

                <button class="bg-main text-white py-3 block w-full font-bold mt-5 rounded-lg" @click="addAddress">حفظ</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMyGeneralStore } from "~/stores/general";

const store = useMyGeneralStore();

if (!store.lat || !store.lng) {
    store.getLocation();
}

const zoom = ref(10);
const center = ref({ lat: store.lat, lng: store.lng });
const marker = ref({ lat: store.lat, lng: store.lng });

const updateMarker = (location) => {
    center.value = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
    };
};
const getCurrentLocation = () => {
    center.value = { lat: store.lat, lng: store.lng };
    marker.value = { lat: store.lat, lng: store.lng };
};
const enteredAddress = ref("");

watch(
    store,
    async (value) => {
        if (value.lat && value.lng) {
            await $fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${value?.lat},${value?.lng}&key=AIzaSyDRymdCLWxCwLHFnwv36iieKAMjiwk8sdc`).then((res) => {
                enteredAddress.value = res.results[0].formatted_address;
                zoom.value = 13;
                getCurrentLocation();
            });
        }
    },
    {
        deep: true,
        immediate: true,
    }
);

const addAddress = () => {
    emit("setAddress", {
        location: enteredAddress.value,
        lat: center.value.lat,
        lng: center.value.lng,
    });
    emit("close");
};
const emit = defineEmits(["close", "setAddress"]);
</script>

<style lang="scss" scoped></style>
