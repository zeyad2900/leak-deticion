<template>
    <Html :lang="locale">
        <Body :dir="locale === 'en' ? 'ltr' : 'rtl'">
            <Header />
            <slot />
            <Footer :items="data?.data" />
        </Body>
    </Html>
</template>

<script setup>
 
const { locale } = useI18n();
const { data } = await useApi("general/settings");
const generalsStore = useMyGeneralStore();
generalsStore.fetchCountries();

if (process.client) {
    const wow = new window.WOW();
    wow.init();
}
</script>

<style scoped></style>
