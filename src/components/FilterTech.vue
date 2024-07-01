<template>
  <div class="card">
    <div class="filter">
      <div class="item" v-for="tag in tags" :key="tag">
        <span class="item-label">{{ tag }}</span>
        <span class="item-icon" @click="removeTag(tag)">x</span>
      </div>
    </div>

    <div class="clear">
      <span @click="clearTags">Clear</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: ['data'],

  setup(props, { emit }) {
    const tags = ref([...props.data]);

    watch(
      () => props.data, (newData) => {
        tags.value = [...newData];
      }, { immediate: true, deep: true }
    );

    const removeTag = (index) => {
      emit('remove', index);
    };

    const clearTags = () => {
      emit('clear');
    };

    return { tags, removeTag, clearTags };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  border-radius: 4px;
  padding: 24px 32px;

  .filter {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .item {
      // margin-left: 8px;

      &-label {
        padding: 0.5rem 0.75rem;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        background-color: $color-light-grayish-cyan;
        font-size: 1rem;
        font-weight: 700;
        color: $color-dark-cyan;
      }

      &-icon {
        font-size: 1rem;
        font-weight: 700;
        color: white;
        background-color: $color-dark-cyan;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }

  .clear {
    font-size: 1rem;
    font-weight: 700;
    color: $color-dark-cyan;
    transition: 0.5s;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid $color-dark-cyan;
    }
  }
}
</style>