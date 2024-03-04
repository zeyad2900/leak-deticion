<template>
    <div class="col-span-12 lg:col-span-5 mb-10 lg:mb-0">
        <div class="bg-[#FFFFFF] p-10 rounded-[40px] lg:w-[80%] shadow-lg">
            <h1 class="font-bold text-2xl mb-8">الحساب الشخصي</h1>

            <NuxtLink to="/profile" class="flex items-center justify-start gap-4 mb-8">
                <img src="/assets/images/profile/profilesm.png" alt="" />
                <div>
                    <h3 class="font-bold text-text">احمد محمود</h3>
                    <div class="flex gap-3">
                        <span class="text-light">+966-105685696</span>
                        <span>
                            <img src="/assets/images/contact/Saudi Arabia.png" alt="" />
                        </span>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/profile/orders" class="flex items-center justify-between mb-8">
                <div class="flex items-center gap-3">
                    <div class="p-3"><Icon name="fa6-solid:box-archive" /></div>
                    <p>طلباتي</p>
                </div>
                <div>
                    <Icon name="ep:arrow-left-bold" />
                </div>
            </NuxtLink>

            <div class="flex items-center justify-between mb-8 h-6">
                <div class="flex gap-3">
                    <nuxt-icon class="px-2 text-xl" name="notification" alt="" />
                    <p>اللاشعارات</p>
                </div>
                <div class="toggle-switch">
                    <input class="toggle-input" id="toggle" type="checkbox" />
                    <label class="toggle-label" for="toggle"></label>
                </div>
            </div>

            <button class="flex mb-8 gap-3 items-center">
                <img class="bg-[#ef233b1f] p-2 rounded-full" src="/assets/images/profile/logout.png" alt="" />
                <p>تسجبل الخروج</p>
            </button>

            <button class="flex gap-3 mb-8 items-center">
                <img class="bg-[#ef233b1f] p-2 rounded-full" src="/assets/images/imgicons/trash.png" alt="" />
                <p>حذف الحساب</p>
            </button>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "profileorders",
});
</script>

<style scoped>
.router-link-active {
    color: #3162da;
}

/* Genel stil */
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
}

/* Giriş stil */
.toggle-switch .toggle-input {
    display: none;
}

/* Anahtarın stilinin etrafındaki etiketin stil */
.toggle-switch .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    background-color: #bfb7b7;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.3s;
}

/* Anahtarın yuvarlak kısmının stil */
.toggle-switch .toggle-label::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
}

/* Anahtarın etkin hale gelmesindeki stil değişiklikleri */
.toggle-switch .toggle-input:checked + .toggle-label {
    background-color: #3162da;
}

.toggle-switch .toggle-input:checked + .toggle-label::before {
    transform: translateX(16px);
}

/* Light tema */
.toggle-switch.light .toggle-label {
    background-color: #bebebe;
}

.toggle-switch.light .toggle-input:checked + .toggle-label {
    background-color: #9b9b9b;
}

.toggle-switch.light .toggle-input:checked + .toggle-label::before {
    transform: translateX(6px);
}

/* Dark tema */
.toggle-switch.dark .toggle-label {
    background-color: #4b4b4b;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label {
    background-color: #717171;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label::before {
    transform: translateX(16px);
}
</style>
