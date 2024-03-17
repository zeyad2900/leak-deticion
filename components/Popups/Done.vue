<template>
    <div class="h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center bg-[#0000009a]">
        <div class="flex flex-col items-center justify-center gap-10 max-w-[400px] bg-white w-[500px] min-hight-40 rounded-[40px] pb-9 p-6">
            <div class="wrapper">
                <svg class="animated-check" viewBox="0 0 24 24">
                    <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
                </svg>
            </div>
            <h2 class="text-text font-bold text-2xl">{{ content }}</h2>
        </div>
    </div>
</template>

<script setup>
defineProps({
    content: {
        required: true,
    },
});
</script>

<style>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.animated-check {
    height: 100px;
    width: 100px;
}

.animated-check path {
    fill: none;
    stroke: #7ac142;
    stroke-width: 4;
    stroke-dasharray: 23;
    stroke-dashoffset: 23;
    animation: draw 0.5s linear forwards;
    stroke-linecap: round;
    stroke-linejoin: round;
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}
</style>
