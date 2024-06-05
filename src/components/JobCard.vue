<template>
    <div class="card items-center ">
        <div class="flex items-center">
            <div class="flex image">
                <img src="../assets/img/companies/photosnap.svg" alt="">
            </div>
            <div class="flex flex-colunm">
                <div class="flex card-title">
                    <h2>Photosnap</h2>
                    <span class="new">NEW</span>
                    <span class="feature">FEATURED</span>
                </div>
                <h1>Senior front end developer</h1>
                <div class="flex">
                    <span>1 day ago</span>
                    <span>full time</span>
                    <span>USA only</span>
                </div>
            </div>
        </div>

        <div class="flex card-tags">
            <span>Front end</span>
            <span>Front end</span>
            <span>Front end</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.card {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 1.7rem 1.2rem;
    background-color: $color-white;
    border-left: 5px solid $color-dark-cyan;
    border-radius: 8px;
    box-shadow: 40px 35px 50px -55px $color-dark-cyan;

    .image {
        padding-right: 1.2rem;

        img {
            width: 100px;
            max-height: 100%;
        }
    }

    &-title {
        gap: 0.75rem;

        span {
            font-size: 0.75rem;
            font-weight: 500;
            padding: 0.3rem 0.5rem;
            border-radius: 50px;
            color: $color-white;
            text-transform: uppercase;
            &.new {background-color: $color-dark-cyan;}
            &.feature {background-color: $color-black;}
        }
    }

    &-tags {
        justify-self: end;
    }
}
</style>