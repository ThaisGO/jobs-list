<template>
  <div class="container content">
    <div class="content-job flex" v-if="job">
      <div class="content-job--img">
        <!-- <img src="https://placehold.jp/200x200.png" alt="" /> -->
        <img :src="require(`@/assets/${job.logo}`)" alt="">
      </div>
      <div class="content-job--info">
        <h1>{{ job.company }}</h1>
        <h2>{{ job.position }}</h2>

        <div class="flex wrap items-center">
          <div class="flex items-center">
            <Briefcase color="gray" :size="18"/>
            <span>Role: {{ job.role }} </span>
          </div>
          
          <div class="flex items-center">
            <BarChart color="gray" :size="18" />
            <span>Level: {{ job.level }} </span>
          </div>
          <div class="flex items-center">
            <FileText color="gray" :size="18"/>
            <span>Contract: {{ job.contract }}</span>
          </div>
          <div class="flex items-center">
            <Building color="gray" :size="18"/>
            <span>Location: {{ job.location }}</span>
          </div>
        </div>
        

        <div class="description">
          <h2>Description</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem cupiditate eius eum reiciendis numquam beatae,
            ratione voluptatibus dolor totam? Cumque illum recusandae fuga sed
            eum quidem eos aliquid sequi earum! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptatibus eveniet vero quas ut!
            Dolorum, unde fugit. Esse excepturi, culpa dicta totam reprehenderit
            odit. Doloribus exercitationem inventore quod voluptas suscipit
            similique!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quis
            harum, placeat vero inventore alias sequi perferendis atque esse
            officia eius aspernatur repellendus suscipit? Vitae harum voluptas
            alias debitis tempora.
          </p>
          
        </div>
      </div>
    </div>
    <div v-else="error">Company not found</div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import useJob from "@/composables/getJob.js";

import { BarChart } from 'lucide-vue-next';
import { FileText } from 'lucide-vue-next';
import { Building } from 'lucide-vue-next';
import { Briefcase } from 'lucide-vue-next';

export default {
  props: ["id"],
  components: { BarChart, FileText, Building, Briefcase },
  setup() {
    const route = useRoute();
    const { job, error, getJob } = useJob(route.params.id);
    getJob();

    return { job, error };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.content {
  margin-top: 4rem;

  &-job {
    justify-content: space-between;

    &--img {
      margin-right: 2rem;
    }

    &--info {
      flex-grow: 1;

      .flex {
        margin-right: 12px;
      }

      span {
        font-size: 1.2rem;
        font-weight: 500;
        color: $color-dark-grayish-cyan;
        margin-left: 8px;
      }

      .description {
        margin-top: 1rem;
        h2 {
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1rem;
          color: $color-dark-grayish-cyan;
        }
      }
    }
  }
}

@media all and (min-width: 480px) and (max-width: 768px),
  all and (max-width: 480px) {
  .content-job {
    display: block;
    &--img {
      margin-bottom: 1rem;
    }
  }
}
</style>
