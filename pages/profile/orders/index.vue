<template>
    <div class="flex flex-col items-center lg:block">
        <div class="grid grid-cols-4 gap-1 md:gap-2 lg:gap-4 mb-12">
            <button v-for="(button, index) in buttons" :key="index" @click="activeHandel(index)" :class="index === activeIndex ? 'mainbtn' : 'secondbtn'">
                <p class="text-sm">{{ button.title }}</p>
            </button>
        </div>
        <div class="flex flex-col gap-5">
            <NuxtLink to="/profile/orders/1" class="block shadow-sm p-6 rounded-[40px]">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center justify-center gap-4">
                        <img src="/assets/images/profile/profilesm.png" alt="" />
                        <div>
                            <h3 class="font-bold mb-2">احمد محمد</h3>
                            <div class="flex items-center gap-1">
                                <span><img src="/assets/images/profile/location.png" alt="" /></span>
                                <p class="text-sm text-light">الممكلة العربية السعودية</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 bg-[#12b3482b] rounded-lg">
                        <h1 class="font-bold text-[#12B347]">مقبول</h1>
                    </div>
                </div>
                <div class="flex justify-between">
                    <p class="font-bold text-sm"><span class="text-light">الخدمه:</span> كشف تسرب مياه</p>
                    <div class="flex gap-4">
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/calendar.png" alt="" />
                            <span class="text-light text-sm">25 اكتوبر 2023</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/clock.png" alt="" />
                            <span class="text-light text-sm">05:00 مساء</span>
                        </div>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/profile/orders/1" class="block shadow-sm p-6 rounded-[40px]">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center justify-center gap-4">
                        <img src="/assets/images/profile/profilesm.png" alt="" />
                        <div>
                            <h3 class="font-bold mb-2">احمد محمد</h3>
                            <div class="flex items-center gap-1">
                                <span><img src="/assets/images/profile/location.png" alt="" /></span>
                                <p class="text-sm text-light">الممكلة العربية السعودية</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 bg-[#12b3482b] rounded-lg">
                        <h1 class="font-bold text-[#12B347]">مقبول</h1>
                    </div>
                </div>
                <div class="flex justify-between">
                    <p class="font-bold text-sm"><span class="text-light">الخدمه:</span> كشف تسرب مياه</p>
                    <div class="flex gap-4">
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/calendar.png" alt="" />
                            <span class="text-light text-sm">25 اكتوبر 2023</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/clock.png" alt="" />
                            <span class="text-light text-sm">05:00 مساء</span>
                        </div>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/profile/orders/1" class="block shadow-sm p-6 rounded-[40px]">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center justify-center gap-4">
                        <img src="/assets/images/profile/profilesm.png" alt="" />
                        <div>
                            <h3 class="font-bold mb-2">احمد محمد</h3>
                            <div class="flex items-center gap-1">
                                <span><img src="/assets/images/profile/location.png" alt="" /></span>
                                <p class="text-sm text-light">الممكلة العربية السعودية</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 bg-[#12b3482b] rounded-lg">
                        <h1 class="font-bold text-[#12B347]">مقبول</h1>
                    </div>
                </div>
                <div class="flex justify-between">
                    <p class="font-bold text-sm"><span class="text-light">الخدمه:</span> كشف تسرب مياه</p>
                    <div class="flex gap-4">
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/calendar.png" alt="" />
                            <span class="text-light text-sm">25 اكتوبر 2023</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/profile/clock.png" alt="" />
                            <span class="text-light text-sm">05:00 مساء</span>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "profile",
});

const buttons = ref([{ title: "الطلبات الحاليه" }, { title: "طلبات الصيانه" }, { title: "الطلبات المكتمله" }, { title: "الطلبات المؤجله" }]);
const activeIndex = ref(null);

const activeHandel = (index) => {
    activeIndex.value = index;
};
</script>

<style scoped></style>
