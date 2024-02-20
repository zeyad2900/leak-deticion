<template>
    <div class="container w-full">
        <div class="flex flex-col items-center justify-cente">
            <div class="relative">
                <button class="rounded-full bottom-0 start-5 p-2 bg-main m-0 absolute">
                    <nuxt-icon class="text-[30px] text-white" name="edit" />
                </button>
                <img src="/assets/images/profile/profilebig.png" alt="" />
            </div>
            <button class="flex gap-2 mt-5">
                <img src="/assets/images/profile/key.png" alt="" />
                <p class="text-[#1F2B7B]">تغيير الرقم السري</p>
            </button>
            <form class="mt-5">
                <div class="flex flex-col gap-1 mb-7">
                    <label class="text-light">الاسم</label>
                    <input class="focus:outline-none p-3 text-sm w-full font-bold border-stroke border rounded-xl" type="text" />
                </div>
                <div class="flex flex-col gap-1 mb-7">
                    <label class="text-light">رقم الهاتف</label>
                    <div class="flex items-center justify-center gap-2">
                        <div class="h-12">
                            <UIHeadlessButton />
                        </div>
                        <input class="focus:outline-none p-3 text-sm w-full h-12 font-bold border-stroke border rounded-xl" type="text" />
                        <button class="text-main" type="button">تاكيد</button>
                    </div>
                </div>
                <button class="mainbtn block ms-auto w-36">حفظ</button>
            </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "profile",
});
</script>

<style></style>
