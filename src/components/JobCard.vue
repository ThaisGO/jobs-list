<template>
    <div class="card items-center" v-for="job in jobs" :key="job.id">
        <div class="flex items-center">
            <div class="flex image">
                <img src="../assets/images/companies/photosnap.svg" alt="">
                <!-- <img :src="require(job.logo)" alt=""> -->
            </div>
            <div class="flex flex-colunm">
                <div class="flex card-title">
                    <h2>{{ job.company }}</h2>
                    <span class="new" v-if="job.new">NEW</span>
                    <span class="feature" v-if="job.featured">FEATURED</span>
                </div>
                <h1>{{ job.position }}</h1>
                <div class="flex card-spec">
                    <span>{{ job.postedAt }}</span>
                    <span>{{ job.contract }}</span>
                    <span>{{ job.location }}</span>
                </div>
            </div>
        </div>

        <div class="flex card-tags">
            <div class="card-tags-item" v-for="lang in job.languages" :key="lang" @click="handleFilter(lang)">
                {{ lang }}
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['jobs'],

    setup(props, { emit }) {
        const handleFilter = (lang) => {
            emit('filter', lang);
        };

        return { handleFilter };
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.card {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 1.75rem;
    padding: 1.7rem 1.2rem;
    background-color: $color-white;
    border-left: 5px solid $color-dark-cyan;
    border-radius: 8px;
    box-shadow: 40px 35px 50px -55px $color-dark-cyan;

    h1 {
        margin: 0.5rem 0;
    }

    .image {
        padding-right: 1.2rem;

        img {
            width: 100px;
            max-height: 100%;
        }
    }

    &-title {
        gap: 0.5rem;

        span {
            font-size: 0.75rem;
            font-weight: 500;
            padding: 0.3rem 0.5rem;
            border-radius: 50px;
            color: $color-white;
            text-transform: uppercase;

            &.new {
                background-color: $color-dark-cyan;
            }

            &.feature {
                background-color: $color-black;
            }
        }
    }

    &-spec {
        gap: 2.5rem;

        span {
            font-size: 0.75;
            font-weight: 500;
            color: $color-dark-grayish-cyan;
        }
    }

    &-tags {

        justify-content: end;
        gap: 0.5rem;

        &-item {
            font-size: 1rem;
            font-weight: 700;
            color: $color-dark-cyan;
            background-color: $color-light-grayish-cyan;
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            cursor: pointer;
            transition: 0.5s;

            &:hover {
                color: $color-white;
                background-color: $color-dark-cyan;
            }
        }
    }
}

@media all and (min-width: 768px) and (max-width: 1024px) {
    .card {
        &-tags {
            flex-wrap: wrap;
        }
    }
}

@media all and (min-width: 480px) and (max-width: 768px),
all and (max-width: 480px) {
    .card {
        display: flex;
        flex-direction: column;
        align-items: normal;

        .image {
            display: block;

            img {
                width: 60px;
            }
        }

        &-tags::before {
            content: '';
            width: 100%;
            margin: 1rem auto;
            background-color: $color-dark-grayish-cyan;
            height: 1px;
            opacity: 0.8;
        }

        &-tags {
            flex-wrap: wrap;
            justify-content: start
        }
    }
}

@media all and (max-width: 480px) {
    .card {
        &-spec {
            gap: 1rem;
        }

        h1 {
            color: $color-black;
        }
    }
}
</style>