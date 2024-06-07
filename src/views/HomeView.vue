<template>
  <HeadBanner />
  <div v-if="error">{{ error }}</div>
  <main class="container">
    <div v-if="jobs.length">
      <JobCard :jobs="jobs" @filter="filterJobs" />
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
    let tagFilter = []
    const backupValue = jobs.value

    onMounted(() => {
      getJobs();
    });

    const filterJobs = (tag) => {
      let filtro = jobs.value

      // FILTER COMPONENT
      if (!tagFilter.includes(tag)) {
        tagFilter.push(tag)
      } else { tagFilter = tagFilter.filter(item => item !== tag) }

      // FILTER LIST
      // jobs.value = filtro.filter(job => {
      //   return tagFilter.every(tag => job.languages.includes(tag));
      // });

      // console.log('Array', tagFilter);
      // console.log('filter', jobs.value);
    }

    return { jobs, error, filterJobs, tagFilter }
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
