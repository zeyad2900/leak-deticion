<template>
    <HeadlessMenu as="div" class="relative">
        <HeadlessMenuButton>
            <div class="px-1 py-3 gap-1 border-light items-center border flex w-full justify-center rounded-md bg-white text-sm font-medium text-text">
                <img src="/assets/images/contact/Saudi Arabia.png" alt="" />
                <p>+966</p>
                <Icon name="flowbite:angle-down-outline" size="20"></Icon>
            </div>
        </HeadlessMenuButton>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <HeadlessMenuItems class="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <HeadlessMenuItem v-slot="{ active }">
                    <button :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md text-sm']">
                        <div class="px-1 py-4 gap-1 items-center flex w-full justify-center rounded-md bg-white text-sm font-medium text-text">
                            <img src="/assets/images/contact/Saudi Arabia.png" alt="" />
                            <p>+966</p>
                        </div>
                    </button>
                </HeadlessMenuItem>
            </HeadlessMenuItems>
        </transition>
                 </HeadlessMenu
    >
</template>

<script setup></script>

<style></style>
