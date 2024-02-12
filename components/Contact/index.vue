<template>
    <article class="container py-32">
        <div class="w-full mb-20">
            <div class="mb-16">
                <h1 class="text-2xl lg:text-3xl font-bold mb-7">ابق على تواصل معنا</h1>
            </div>
            <div class="grid grid-cols-3 gap-8">
                <div class="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-lg">
                    <img src="/assets/images/contact/phone.png" alt="" />
                    <div>
                        <p class="text-light">رقم الجوال</p>
                        <h3 class="text-lg">+966 1111 22222 3</h3>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-lg">
                    <img src="/assets/images/contact/mail.png" alt="" />
                    <div>
                        <p class="text-light">البريد الإلكتروني</p>
                        <h3 class="text-lg">emailperson@exaple.com</h3>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-lg">
                    <img src="/assets/images/contact/location.png" alt="" />
                    <div>
                        <p class="text-light">عنوان</p>
                        <h3 class="text-lg">المملكة العربية السعودية ، جدة</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#eff2fc] rounded-[3rem] grid grid-cols-2 h-[600px]">
            <div class="container pt-11 pb-4">
                <h1 class="text-2xl lg:text-3xl font-bold mb-7">تواصل معنا</h1>
                <div class="flex flex-col items-start gap-2 mb-7">
                    <input placeholder="الاسم بالكامل" type="text" class="p-3 text-sm w-full h-14 font-bold border border-light rounded-xl" />
                    <input placeholder="بريدك الاكتروني" type="email" class="p-3 text-sm w-full h-14 font-bold border border-light rounded-xl" />
                    <div class="flex justify-center items-center w-full gap-1">
                        <button class="flex justify-center items-center gap-1 bg-white p-2 rounded-xl border-light border">
                            <img src="/assets/images/contact/Saudi Arabia.png" alt="" />
                            <p>+966</p>
                            <Icon name="flowbite:angle-down-outline" size="35"></Icon>
                        </button>
                        <input placeholder="رقم الهاتف" type="phone" class="p-3 text-sm w-full h-14 font-bold border border-light rounded-xl" />
                    </div>
                    <input placeholder="الموضوع" type="text" class="p-3 text-sm w-full h-14 font-bold border border-light rounded-xl" />
                    <textarea placeholder="ادخل رسالتك هنا" class="p-3 text-sm w-full h-28 font-bold border-light border rounded-xl" />
                </div>
                <UIButton><img src="/assets/images/contact/send-2.png" alt="" /> ارسال </UIButton>
            </div>
            <div class="flex items-end justify-center">
                <img width="400" height="400" src="/assets/images/contact/contantheros.png" alt="" />
            </div>
        </div>
    </article>
</template>

<script setup></script>

<style scoped></style>
