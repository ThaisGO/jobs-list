<template>
  <div class="filter">
    <div class="item"><span class="item-label">Front-end</span></div>
    <span class="item-icon">x</span>
    <div class="item">CSS</div>
    <div class="item">Javascript</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>