<template>
    <Html :lang="locale">
        <Body :dir="locale === 'en' ? 'ltr' : 'rtl'">
            <Header />
            <slot />
            <Footer />
        </Body>
    </Html>
</template>

<script setup>
const { locale } = useI18n();
</script>

<style scoped></style>
