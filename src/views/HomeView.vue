<template>
  <div v-if="error">{{ error }}</div>
  <main class="container">
    <FilterTech :data="tagFilter" @clear="clearFilter" @remove="removeTag" v-if="tagFilter.length > 0" />

    <div class="joblist" v-if="jobs.length">
      <JobCard :jobs="jobs" @filter="filterJobs" />
    </div>
  </main>
</template>

<script>
import { onBeforeMount, reactive } from "vue";

import HeadBanner from "../components/HeadBanner.vue";
import JobCard from "@/components/JobCard.vue";
import useJobs from "@/composables/getJobs.js";
import FilterTech from "@/components/FilterTech.vue";

export default {
  name: "HomeView",
  components: { HeadBanner, JobCard, FilterTech },

  setup() {
    const { jobs, backupJobs, error, getJobs } = useJobs();
    let tagFilter = reactive([])

    onBeforeMount(() => {
      getJobs();
    })

    const filterJobs = (tag) => {
      // FILTER COMPONENT
      if (!tagFilter.includes(tag)) {
        tagFilter.push(tag)
      } else {
        tagFilter.splice(tagFilter.indexOf(tag), 1);
      }

      // FILTER LIST
      jobs.value = backupJobs.value.filter(job => {
        return tagFilter.every(tag => job.languages.includes(tag));
      });
    }

    const removeTag = (index) => {
      tagFilter.splice(tagFilter.indexOf(index), 1);
      // FILTER LIST
      jobs.value = backupJobs.value.filter(job => {
        return tagFilter.every(tag => job.languages.includes(tag));
      });
    }

    const clearFilter = () => {
      jobs.value = backupJobs.value
      tagFilter.length = 0
    }

    return { jobs, backupJobs, error, filterJobs, tagFilter, removeTag, clearFilter }
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 4rem;

  .joblist {
    margin: 3.5rem 0;
  }
}
</style>
