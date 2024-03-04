<template>
    <article id="testimonials" class="bg-dark">
        <div class="container">
            <div class="grid gap-6 pt-14 md:items-center custom-grid text-white">
                <div class="area-1 flex justify-center items-center gap-4">
                    <img width="100" src="/assets/images/main/bluecar.png" alt="" />
                    <div>
                        <h3 class="font-medium text-white mb-2">مهارة وخبرة فريق العمل</h3>
                        <p class="text-white !text-sm">يتمتع فريقنا بسنوات من الخبرة في المجال لضمان تقديم خدمات عالية الجودة.</p>
                    </div>
                </div>

                <div class="area-2 flex justify-center items-center gap-4">
                    <img class="" src="/assets/images/main/bluecar.png" alt="" />
                    <div>
                        <h3 class="font-medium text-white mb-2">رضا العملاء</h3>
                        <p>نحن نسعى جاهدين لتقديم خدمة ممتازة وتجربة إيجابية لكل عميل</p>
                    </div>
                </div>

                <!-- <div class="image"><img src="/assets/images/main/main.webp" alt="" /></div> -->

                <div class="area-3 flex justify-center items-center gap-4">
                    <img class="" src="/assets/images/main/bluecar.png" alt="" />
                    <div>
                        <h3 class="font-medium text-white mb-2">مجموعة واسعة من الخدمات</h3>
                        <p>نحن قادرون على التعامل مع مشاكل متنوعة وتلبية احتياجات العملاء بشكل شامل.</p>
                    </div>
                </div>

                <div class="area-4 flex justify-center items-center gap-4">
                    <img class="" src="/assets/images/main/bluecar.png" alt="" />
                    <div>
                        <h3 class="font-medium text-white mb-2">التكلفة</h3>
                        <p>نحن نعتقد في تقديم خدمات ذات قيمة مقابل المال. ونقدم أسعارًا عادلة وشفافة لعملائنا</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup></script>

<style scoped>
.custom-grid {
    grid-template-areas:
        "one one one one"
        "two two  two two "
        "three three three three"
        "four four four four"
        "image image image image";
    inset-inline-end: 4rem;
}
@media (min-width: 576px) {
    .custom-grid {
        grid-template-areas:
            "one one two two"
            "three three  four four "
            ". image image .";
        inset-inline-end: 4rem;
    }
}

@media (min-width: 992px) {
    .custom-grid {
        grid-template-areas:
            "one image image ."
            "two image  image three "
            ". image image four";
        inset-inline-end: 4rem;
    }
}
.custom-grid .area-1 {
    grid-area: one;
}
.custom-grid .area-2 {
    grid-area: two;
}
.custom-grid .area-3 {
    grid-area: three;
}
.custom-grid .area-4 {
    grid-area: four;
}
.custom-grid .image {
    grid-area: image;
}
</style>
