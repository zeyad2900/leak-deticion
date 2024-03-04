<template>
    <div class="min-h-screen relative pt-32 pb-24">
        <div class="container">
            <div class="grid grid-cols-2">
                <div class="col-span-2 lg:col-span-1 mb-7 lg:mb-0">
                    <h1 class="font-bold text-2xl mb-8">تفاصيل الطلب</h1>

                    <div class="shadow-sm p-6 rounded-[40px] mb-6">
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
                            <button>
                                <img src="/assets/images/profile/chat.png" alt="" />
                            </button>
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
                    </div>

                    <div class="shadow-sm p-6 rounded-[40px]">
                        <div class="flex flex-col items-start gap-4 mb-3">
                            <h3 class="font-bold mb-2 text-light">تفاصيل المشكلة:</h3>
                            <p class="font-bold">لدي مشكلة في انابيب المياه الخاصة بي لا استطيع تحديد المشكلة و لكن هناك تسرب ملحوظ</p>
                        </div>
                    </div>

                    <div class="shadow-sm p-6 rounded-[40px]">
                        <div class="flex flex-col items-start gap-4 mb-3">
                            <h3 class="font-bold mb-2 text-light">طريقه الدفع</h3>
                            <div class="flex gap-1 items-center">
                                <img class="p-2 bg-stroke rounded-full" src="/assets/images/servicesdetails/money.png" alt="" />
                                <p>نقدي</p>
                            </div>
                        </div>
                    </div>

                    <div class="shadow-sm p-6 rounded-[40px]">
                        <div class="flex flex-col items-start gap-4 mb-3">
                            <h3 class="font-bold mb-2 text-light">الموقع</h3>
                            <img class="w-full" src="/assets/images/profile/map.png" alt="" />
                            <p class="font-bold">الممكلة العربية السعودية، جدة</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex items-start justify-center gap-5 col-span-2 lg:col-span-1">
                    <button class="mainbtn">تاجيل الطلب</button>
                    <button class="secondbtn !border-danger !text-danger">الغاء الطلب</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style></style>
