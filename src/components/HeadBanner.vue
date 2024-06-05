<template>
    <div class="banner"></div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.banner {
    width: 100%;
    background-image: url($banner-desktop-tablet);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: $color-dark-cyan;
    min-height: 200px;
}

@media all and (max-width: 767px) {
    .banner {
        background-image: url($banner-mobile);
    }
}
</style>