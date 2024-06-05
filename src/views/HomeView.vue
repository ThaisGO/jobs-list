<template>
  <HeadBanner />
  <main class="container">
      <JobCard />
    </main>
</template>

<script>
// @ is an alias to /src
import HeadBanner from '../components/HeadBanner.vue'
import JobCard from '@/components/JobCard.vue'

export default {
  name: "HomeView",
  components: { HeadBanner, JobCard },
};
</script>

<style lang="scss" scoped>
  main {
    margin-top: 4rem;
  }

</style>
