<template>
  <HeadBanner />
  <div v-if="error">{{ error }}</div>
  <main class="container">
    <FilterTech />

    <div v-if="jobs.length">
      <JobCard :jobs="jobs" @filter="filterJobs" />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { onBeforeMount } from "vue";

import HeadBanner from "../components/HeadBanner.vue";
import JobCard from "@/components/JobCard.vue";
import useJobs from "@/composables/getJobs.js";

export default {
  name: "HomeView",
  components: { HeadBanner, JobCard },

  setup() {
    const { jobs, backupJobs, error, getJobs } = useJobs();
    let tagFilter = []

    onBeforeMount(() => {
      getJobs();
    })

    const filterJobs = (tag) => {
      // FILTER COMPONENT
      if (!tagFilter.includes(tag)) {
        tagFilter.push(tag)
      } else { tagFilter = tagFilter.filter(item => item !== tag) }

      // FILTER LIST
      jobs.value = backupJobs.value.filter(job => {
        return tagFilter.every(tag => job.languages.includes(tag));
      });

      console.log('Array', tagFilter);
      console.log('filter', jobs.value);
    }

    return { jobs, backupJobs, error, filterJobs, tagFilter }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.container {
  
}

main {
  margin-top: 4rem;
}
</style>
