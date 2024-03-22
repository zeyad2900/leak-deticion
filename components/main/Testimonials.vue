<template>
    <article id="testimonials" class="bg-dark">
        <div class="container">
            <div class="grid gap-6 pt-14 md:items-center custom-grid text-white">
                <div
                    data-wow-duration="1.3s"
                    data-wow-delay="150"
                    v-for="(item, index) in data"
                    :key="item.id"
                    :class="`animated wow fadeInUp area-${index}`"
                    class="flex justify-center items-center gap-4"
                >
                    <NuxtImg width="100" :src="item.image" alt="item" placeholder="/bluecar.png" />
                    <div>
                        <h3 class="font-medium text-white mb-2">{{ item.title }}</h3>
                        <div class="text-white !text-sm" v-html="item.desc"></div>
                    </div>
                </div>
                <div class="image"><img data-wow-duration="1.3s" data-wow-delay="0.3s" class="wow fadeInUp" src="/main.webp" alt="what we offer" /></div>
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    data: {
        required: true,
    },
});
</script>

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
.custom-grid .area-0 {
    grid-area: one;
}
.custom-grid .area-1 {
    grid-area: two;
}
.custom-grid .area-2 {
    grid-area: three;
}
.custom-grid .area-3 {
    grid-area: four;
}
.custom-grid .image {
    grid-area: image;
}
</style>
