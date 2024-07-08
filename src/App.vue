<template>
    <HeadBanner />
    <router-view/>
</template>

<script>
import HeadBanner from '@/components/HeadBanner.vue'

export default {
  components: { HeadBanner }
}

</script>

<style lang="scss">
@import './assets/styles/base.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
