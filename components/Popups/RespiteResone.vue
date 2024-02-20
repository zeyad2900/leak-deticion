<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[999] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h1 class="text-2xl block me-auto mb-5 font-bold">اخبرنا سبب تأجيل الموعد</h1>
            <form>
                <div class="px-20">
                    <div class="space-y-2 mb-5">
                        <div class="flex items-center justify-between p-5 rounded-lg border-stroke border">
                            <h3 for="" class="block font-semibold">ليس هناك اسباب</h3>
                            <label for="check1" class="">
                                <input id="check1" type="checkbox" />
                            </label>
                        </div>
                        <div class="flex items-center justify-between p-5 rounded-lg border-stroke border">
                            <h3 for="" class="block font-semibold">قمت بتغيير رايي</h3>
                            <label for="check2" class="">
                                <input id="check2" type="checkbox" />
                            </label>
                        </div>
                        <div class="flex items-center justify-between p-5 rounded-lg border-stroke border">
                            <h3 for="" class="block font-semibold">لست بالمنزل الان</h3>
                            <label for="check3" class="">
                                <input id="check3" type="checkbox" />
                            </label>
                        </div>
                        <div class="flex items-center justify-between p-5 rounded-lg border-stroke border">
                            <h3 for="" class="block font-semibold">سبب اخر</h3>
                            <label for="check4" class="">
                                <input class="checked:bg-main" id="check4" type="checkbox" />
                            </label>
                        </div>
                    </div>

                    <div>
                        <h1 class="text-xl block me-auto mb-5 font-bold">سبب اخر</h1>
                        <textarea class="p-3 mb-5 border-stroke border w-full" placeholder="قم بكتابة السبب هنا" type="text" />
                    </div>
                </div>

                <button class="mainbtn w-full">تأكيد</button>
            </form>
        </UIBaseCard>
    </div>
</template>

<script setup></script>

<style scoped></style>
