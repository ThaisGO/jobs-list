<template>
    <router-view/>
</template>

<script>
import HomeView from './views/HomeView.vue'
export default {
  components: { HomeView }
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
