<template>
    <div class="flex flex-col items-center lg:block">
        <div class="grid grid-cols-4 gap-1 md:gap-2 lg:gap-4 mb-12 links">
            <NuxtLink
                class=" text-sm secondbtn flex items-center justify-center text-center"
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
                >{{ $t("Currentorders") }}</NuxtLink
            >
            <NuxtLink
                class=" text-sm secondbtn flex items-center justify-center text-center"
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
                >{{ $t("Completedorders") }}</NuxtLink
            >
            <NuxtLink
                class=" text-sm secondbtn flex items-center justify-center text-center"
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
                >{{ $t("Delayedorders") }}</NuxtLink
            >
            <NuxtLink
                class=" text-sm secondbtn flex items-center justify-center text-center"
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
                >{{ $t("Canceledorders") }}</NuxtLink
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
            @apply bg-main text-white;
        }
    }
}
</style>
