<template>
    <Html :lang="locale">
        <Body :dir="locale === 'en' ? 'ltr' : 'rtl'">
            <Header />
            <div class="relative min-h-[100vh]">
                <div class="container pt-40 pb-20">
                    <div class="grid grid-cols-12">
                        <ProfileSidebar />
                        <div class="col-span-12 lg:col-span-7">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
            <Footer :items="data?.data"/>
        </Body>
    </Html>
</template>

<script setup>
const { locale } = useI18n();
const { data } = await useApi("general/settings");
const generalsStore = useMyGeneralStore();

generalsStore.fetchCountries();
</script>

<style scoped></style>
