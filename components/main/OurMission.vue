<template>
    <article id="Our-mission" class="container py-12">
        <div class="container grid gap-8 mb-20 grid-cols-2 items-center">
            <div class="flex items-center justify-center lg:justify-start col-span-2 lg:col-span-1 w-full lg:w-[400px]">
                <img data-wow-duration="1.3s" data-wow-delay="0.5s" class="animated wow zoomIn" src="/assets/images/main/phone.webp" alt="" />
            </div>

            <div class="col-span-2 lg:col-span-1 flex flex-col gap-8">
                <h1 data-wow-duration="1.3s" data-wow-delay="0.5s" class="animated wow fadeInUp text-2xl lg:text-4xl max-w-[450px] lg:leading-[2.8rem] text-text font-bold leading-[2.5rem]">
                    {{ $t("TITLES.mission") }}
                </h1>
                <div data-wow-duration="1.3s" data-wow-delay="0.5s" class="animated wow fadeInUp space-y-4">
                    <div>
                        <p class="text-light">{{ $t("TITLES.downloadApp") }}</p>
                        <p class="text-light">{{ $t("TITLES.enjoy") }}</p>
                    </div>
                    <div class="flex gap-4">
                        <img src="/assets/images/imgicons/AppStore.png" alt="" />
                        <img src="/assets/images/imgicons/GooglePlay.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup></script>

<style></style>
