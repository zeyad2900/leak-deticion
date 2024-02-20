<template>
    <div class="bg-[#0000007b] h-screen w-screen fixed top-0 left-0 z-[999] flex items-center justify-center pt-[27px]">
        <UIBaseCard>
            <button class="text-2xl block ms-auto">
                <Icon class="text-light" name="ep:close-bold"></Icon>
            </button>
            <h1 class="text-2xl block me-auto mb-5 font-bold">التقييم</h1>
            <form>
                <div class="px-20">
                    <h3 class="block me-auto mb-5 font-semibold">أخبرنا عن رأيك في اداء الفني الخاص بنا</h3>

                    <div class="rating flex justify-center gap-3 mb-5">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text"
                            ><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="star-solid">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                ></path></svg
                        ></label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text"
                            ><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="star-solid">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                ></path></svg
                        ></label>
                        <input checked="" type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text"
                            ><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="star-solid">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                ></path></svg
                        ></label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text"
                            ><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="star-solid">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                ></path></svg
                        ></label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text"
                            ><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="star-solid">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                ></path></svg
                        ></label>
                    </div>

                    <div class="space-y-2 mb-5">
                        <div class="flex items-center justify-between p-5 rounded-lg border-stroke border">
                            <h3 for="" class="block font-semibold">خدمة سريعة</h3>
                            <label for="check1" class="">
                                <input id="check1" type="checkbox" />
                            </label>
                        </div>
                        <div class="flex items-center justify-between p-5 rounded-lg border-stroke border">
                            <h3 for="" class="block font-semibold">إتقان العمل</h3>
                            <label for="check2" class="">
                                <input id="check2" type="checkbox" />
                            </label>
                        </div>
                        <div class="flex items-center justify-between p-5 rounded-lg border-stroke border">
                            <h3 for="" class="block font-semibold">لم تعجبني الخدمة</h3>
                            <label for="check3" class="">
                                <input id="check3" type="checkbox" />
                            </label>
                        </div>
                        <div class="flex items-center justify-between p-5 rounded-lg border-stroke border">
                            <h3 for="" class="block font-semibold">تعليق اخر</h3>
                            <label for="check4" class="">
                                <input class="checked:bg-main" id="check4" type="checkbox" />
                            </label>
                        </div>
                    </div>

                    <div>
                        <h1 class="text-xl block me-auto mb-5 font-bold">تعليقك</h1>
                        <textarea class="p-3 mb-5 border-stroke border w-full" placeholder="قم بكتابه رائيك هنا" type="text" />
                    </div>
                </div>

                <button class="mainbtn w-full">ارسال</button>
            </form>
        </UIBaseCard>
    </div>
</template>

<script setup></script>

<style scoped>
.rating:not(:checked) > input {
    position: absolute;
    appearance: none;
}

.rating:not(:checked) > label {
    float: right;
    cursor: pointer;
    font-size: 30px;
    fill: #666;
}

.rating:not(:checked) > label > svg {
    fill: #666; /* Set default color for SVG */
    transition: fill 0.3s ease; /* Add a transition effect */
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
    fill: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
    fill: #ff9e0b;
}

.rating > input:checked ~ label > svg {
    fill: #ffa723; /* Set color for selected stars */
}
</style>
