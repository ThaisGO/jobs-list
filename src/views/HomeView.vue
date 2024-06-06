<template>
  <HeadBanner />
  <div v-if="error">{{ error }}</div>
  <main class="container">
    <div v-if="jobs.length">
      <JobCard :jobs="jobs" />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import HeadBanner from '../components/HeadBanner.vue'
import JobCard from '@/components/JobCard.vue'
import getJobs from '@/composables/getJobs.js'
import { setTimeout } from 'core-js';

export default {
  name: "HomeView",
  components: { HeadBanner, JobCard },

  setup() {
    const { jobs, error, load } = getJobs()
    
    setTimeout(() => {
      load()
    }, 2000);
    console.log('jobs here', jobs)

    return { jobs, error }
  }
}
</script>

<style lang="scss" scoped>
main {
  margin-top: 4rem;
}
</style>
