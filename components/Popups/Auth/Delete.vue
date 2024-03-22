<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[2000] flex items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-10 max-w-[400px] bg-white w-[350px] min-hight-40 rounded-[40px] p-6">
            <h1 class="font-bold block me-auto">{{ $t("delete") }}</h1>
            <div class="flex gap-1 w-full">
                <button :disabled="loading" @click="$emit('delete')" class="mainbtn w-full">
                    <p v-if="!loading">{{$t("confirm")}}</p>
                    <UIButtonLoader v-else />
                </button>
                <button @click="$emit('close')" class="secondbtn w-full !border-main !text-main">{{$t("cancel")}}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(["close" , "delete"]);
defineProps({
    loading: {
        require: true,
    },
});
</script>

<style></style>
