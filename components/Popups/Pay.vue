<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[999] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h1 class="text-2xl block me-auto mb-5 font-bold">الدفع</h1>
            <form>
                <div class="px-12">
                    <div class="mb-5">
                        <h3 class="text-light mb-3">طريقه الدفع</h3>
                        <div class="flex gap-2">
                            <img src="/assets/images/imgicons/onlinepay.png" alt="" />
                            <p class="font-bold">online</p>
                        </div>
                    </div>
                    <div>
                        <div class="mb-5">
                            <h3 class="text-light mb-3">نحن ندعم</h3>
                            <div class="flex gap-2">
                                <div class="text-center rounded-lg w-fit flex-wrap">
                                    <label class="block cursor-pointer relative w-full h-full px-4 rounded-lg border-main border">
                                        <img src="/assets/images/imgicons/visa.png" alt="" />
                                    </label>
                                    <input class="hidden" type="radio" />
                                </div>
                                <div class="text-center rounded-lg w-fit flex-wrap">
                                    <label class="block cursor-pointer relative w-full h-full px-4 rounded-lg border-main border">
                                        <img src="/assets/images/imgicons/visa.png" alt="" />
                                    </label>
                                    <input class="hidden" type="radio" />
                                </div>
                                <div class="text-center rounded-lg w-fit flex-wrap">
                                    <label class="block cursor-pointer relative w-full h-full px-4 rounded-lg border-main border">
                                        <img src="/assets/images/imgicons/visa.png" alt="" />
                                    </label>
                                    <input class="hidden" type="radio" />
                                </div>
                                <div class="text-center rounded-lg w-fit flex-wrap">
                                    <label class="block cursor-pointer relative w-full h-full px-4 rounded-lg border-main border">
                                        <img src="/assets/images/imgicons/visa.png" alt="" />
                                    </label>
                                    <input class="hidden" type="radio" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <h3 class="text-light mb-3">برجاء ادخال بينات البطاقه</h3>
                            <input placeholder="الاسم" class="mb-2 p-3 text-sm w-full h-12 font-bold border border-stroke rounded-xl" id="name" type="text" />
                            <div class="flex gap-4 mb-2">
                                <input placeholder="Cvv" class="p-3 text-sm w-full h-12 font-bold border border-stroke rounded-xl" id="name" type="text" />
                                <input placeholder="تاريخ الصلاحيه" class="p-3 text-sm w-full h-12 font-bold border border-stroke rounded-xl" id="name" type="date" />
                            </div>
                            <div class="p-3 text-sm w-full h-12 font-bold border rounded-xl">
                                <label for="file" class=""></label>
                                <input placeholder="التقرير" class="hidden" id="file" type="file" />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="mainbtn w-full">ادفع الان</button>
            </form>
        </UIBaseCard>
    </div>
</template>

<script setup></script>

<style></style>
