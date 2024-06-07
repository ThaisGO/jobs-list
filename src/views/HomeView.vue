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
import { onMounted } from "vue";

import HeadBanner from "../components/HeadBanner.vue";
import JobCard from "@/components/JobCard.vue";
import useJobs from "@/composables/getJobs.js";

export default {
  name: "HomeView",
  components: { HeadBanner, JobCard },

  setup() {
    const { jobs, error, getJobs } = useJobs();
    onMounted(() => {
      getJobs();
      console.log('jobs here', jobs)
    });
    return { jobs, error }
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 4rem;
  &>div>JobCard {
    margin-bottom: 2rem;
  }
}
</style>
