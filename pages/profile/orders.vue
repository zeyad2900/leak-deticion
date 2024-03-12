<template>
    <div class="flex flex-col items-center lg:block">
        <div class="grid grid-cols-4 gap-1 md:gap-2 lg:gap-4 mb-12 links">
            <NuxtLink
                class="secondbtn flex items-center justify-center text-center"
                :to="
                    localePath({
                        path: '/profile/orders',
                        query: {
                            status: 'current',
                            page: 1,
                        },
                    })
                "
                :class="{ active: $route.query.status == 'current' }"
                >الطلبات الحاليه</NuxtLink
            >
            <NuxtLink
                class="secondbtn flex items-center justify-center text-center"
                :to="
                    localePath({
                        path: '/profile/orders',
                        query: {
                            status: 'finished',
                            page: 1,
                        },
                    })
                "
                :class="{ active: $route.query.status == 'finished' }"
                >الطلبات المنتهيه</NuxtLink
            >
            <NuxtLink
                class="secondbtn flex items-center justify-center text-center"
                :to="
                    localePath({
                        path: '/profile/orders',
                        query: {
                            status: 'delayed',
                            page: 1,
                        },
                    })
                "
                :class="{ active: $route.query.status == 'delayed' }"
                >الطلبات المؤجله</NuxtLink
            >
            <NuxtLink
                class="secondbtn flex items-center justify-center text-center"
                :to="
                    localePath({
                        path: '/profile/orders',
                        query: {
                            status: 'canceled',
                            page: 1,
                        },
                    })
                "
                :class="{ active: $route.query.status == 'canceled' }"
                >الطلبات الملغيه</NuxtLink
            >
        </div>
        <NuxtPage />
    </div>
</template>

<script setup></script>

<style lang="scss">
.links {
    a {
        @apply uppercase text-light px-4 py-2 rounded-2xl border transition duration-300;
        &.active {
            @apply bg-[#3162da] text-white;
        }
    }
}
</style>
