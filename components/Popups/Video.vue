<template>
    <div class="bg-[#000000c8] h-screen w-screen fixed top-0 left-0 z-[2000] flex flex-col gap-2 items-center justify-center text-white">
        <div class="rounded-xl relative">
            <button @click="$emit('closeVideo')" class="text-2xl absolute top-[-20px] start-[-10px] bg-white flex p-1 rounded-full">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <video ref="video" class="rounded-xl" autoplay>
                <source :src="item" />
            </video>
            <button @click="togglePlayPause()" class="absolute top-[45%] start-[48%] flex items-center p-1 bg-white rounded-full">
                <Icon v-if="isPlaying" class="text-[30px] text-text" name="raphael:arrowright" />
                <Icon v-if="!isPlaying" class="text-[30px] text-text" name="iconamoon:player-pause-fill" />
            </button>
        </div>
    </div>
</template>

<script setup>
const emits = defineEmits(["closeVideo"]);
defineProps({
    item: {
        required: true,
    },
});

const video = ref(null);
const isPlaying = ref(false);

const togglePlayPause = () => {
    if (video.value.paused) {
        video.value.play();
    } else {
        video.value.pause();
    }
    isPlaying.value = !isPlaying.value;
};

const handleVideoEnd = () => {
    isPlaying.value = true;
};

onMounted(() => {
    const videoElement = video.value;
    videoElement.addEventListener("ended", handleVideoEnd);
});
</script>

<style></style>
