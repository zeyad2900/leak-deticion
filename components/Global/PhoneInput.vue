<template>
    <div class="phoneinput">
        <vee-field name="phone_code">
            <HeadlessMenu as="div" class="relative h-12">
                <HeadlessMenuButton v-slot="{ open }">
                    <div class="px-1 py-3 gap-1 border-stroke items-center border flex w-full justify-center rounded-md bg-white text-sm font-medium text-text">
                        <NuxtImg :src="country?.image" alt="country" class="w-7 h-5" placeholder="/SaudiArabia.png" />
                        <p>+{{ country?.phone_code }}</p>
                        <Icon :name="`flowbite:angle-${open ? 'up' : 'down'}-outline`" size="20" />
                    </div>
                </HeadlessMenuButton>

                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <HeadlessMenuItems class="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <HeadlessMenuItem v-for="(item, index) in countries" :key="index" v-slot="{ active }">
                            <button @click="changeCountry(item)" type="button" :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md text-sm']">
                                <div class="px-1 py-4 gap-1 items-center flex w-full justify-center rounded-md bg-white text-sm font-medium text-text">
                                    <NuxtImg :src="item?.image" class="w-7 h-5" alt="country" placeholder="/SaudiArabia.png" />
                                    <p>+{{ item?.phone_code }}</p>
                                </div>
                            </button>
                        </HeadlessMenuItem>
                    </HeadlessMenuItems>
                </transition>
                         </HeadlessMenu
            >
        </vee-field>
        <vee-field name="phone" v-slot="{ field, meta }">
            <div class="maininput">
                <input :placeholder="$t('FORMS.Placeholders.yourPhone')" id="phone" v-bind="field" type="text" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" />
                <vee-error-message v-if="meta.touched && !meta.valid" name="phone" as="span" class="!text-danger" />
            </div>
        </vee-field>
    </div>
</template>

<script setup>
const generalsStore = useMyGeneralStore();
const { countries } = storeToRefs(generalsStore);
const country = ref(null);
country.value = countries.value[0];
import { useField } from "vee-validate";
const phoneCodeField = useField("phone_code");
phoneCodeField.setValue(country.value);

function changeCountry(item) {
    country.value = item;
    phoneCodeField.setValue(item);
}
</script>

<style></style>
