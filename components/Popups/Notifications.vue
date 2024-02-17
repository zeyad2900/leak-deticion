<template>
    <div :class="position" class="z-[999] absolute sm:w-[400px] text-text">
        <UIBaseCard>
            <div class="flex justify-between items-center mb-7">
                <h1 class="font-black text-xl">الاشعارات</h1>
                <button>
                    <img src="/assets/images/imgicons/trash.png" alt="" />
                </button>
            </div>

            <div class="hidden flex-col items-center gap-7">
                <div>
                    <img src="/assets/images/imgicons/notificationsemoty.png" alt="" />
                </div>
                <div class="space-y-3">
                    <h1 class="font-bold text-center text-xl">لا توجد اشعارات لديك</h1>
                    <p class="text-sm text-light text-center">لا توجد اشعارات لديك الأن</p>
                </div>
            </div>
            <!-- hf notifications is no empty -->
            <div class="flex flex-col items-start justify-center gap-3 max-h-[500px] overflow-y-auto">
                <button class="flex justify-center items-center gap-7 hover:bg-stroke p-4 rounded-xl">
                    <img src="/assets/images/imgicons/notficationlogo.png" alt="" />
                    <div>
                        <h3 class="font-bold text-start">لقد تمت الخدمة قم بالدفع الان!</h3>
                        <p class="text-sm text-light text-start">تم تحديد تكلفة الخدمة قم بالدفع</p>
                    </div>
                </button>
                <button class="flex justify-center items-center gap-7 hover:bg-stroke p-4 rounded-xl">
                    <img src="/assets/images/imgicons/notficationlogo.png" alt="" />
                    <div>
                        <h3 class="font-bold text-start">تم الدفع بنجاح قم بتقييم الفني</h3>
                        <p class="text-sm text-light text-start">اخبرناعن رأيك في عمل الفني و هل قام باتمام مهتمته</p>
                    </div>
                </button>
                <button class="flex justify-center items-center gap-7 hover:bg-stroke p-4 rounded-xl">
                    <img src="/assets/images/imgicons/notficationlogo.png" alt="" />
                    <div>
                        <h3 class="font-bold text-start">اخبرنا عن تجربتك مع شركة تسريب المياه</h3>
                        <p class="text-sm text-light text-start">تم الدفع بنجاح و اتمام الخدمة اخبرنا عن رأيك</p>
                    </div>
                </button>
                <button class="flex justify-center items-center gap-7 hover:bg-stroke p-4 rounded-xl">
                    <img src="/assets/images/imgicons/notficationlogo.png" alt="" />
                    <div>
                        <h3 class="font-bold text-start">تمت الموافقة علي تأجيل طلب خدمتكم!</h3>
                        <p class="text-sm text-light text-start">سوف نقوم بارسال فني لحل المشكلة الخاصة بك في الموعد الذي قمت بتحديده</p>
                    </div>
                </button>
            </div>
        </UIBaseCard>
    </div>
</template>

<script setup>
const { locale } = useI18n();

const position = computed(() => {
    return locale.value === "ar" ? "top-24 left-1 sm:left-24" : "top-24 right-1 sm:right-24";
});
</script>

<style></style>
