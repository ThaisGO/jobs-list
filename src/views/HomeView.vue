<template>
  <HeadBanner />
  <div v-if="error">{{ error }}</div>
  <main class="container">
    <div class="filter">
      <div class="item"><span class="item-label">Front-end</span></div><span class="item-icon">x</span>
      <div class="item">CSS</div>
      <div class="item">Javascript</div>
    </div>

    <div v-if="jobs.length">
      <JobCard :jobs="jobs" @filter="filterJobs" />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { onBeforeMount, onMounted } from "vue";

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
  .filter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background: white;
    border-radius: 12px;
    padding: 8px;

    .item {
      margin-left: 8px;
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      background-color: $color-light-grayish-cyan;

      &-label {
        font-size: 1rem;
        font-weight: 700;
        // opacity: 1;
        color: $color-dark-cyan;

      }

      &-icon {
        font-size: 1rem;
        padding: 0.5rem 0.75rem;
            border-radius: 4px;
        color: white;
        background-color: $color-dark-cyan;
      }

    }
  }
}

main {
  margin-top: 4rem;
}
</style>
