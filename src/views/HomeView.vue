<template>
  <header class="banner"></header>

  <main class="container">
    <div class="card">
      <div class="flex ">
        <div class="image">
          <img src="../assets/img/companies/photosnap.svg" alt="">
        </div>
        <div class="flex flex-colunm">
          <div class="flex">
            <h3>Photosnap</h3>
            <span>NEW</span>
            <span>FEATURED</span>
          </div>
          <h2>Senior front end developer</h2>
          <div class="flex">
            <span>1 day ago</span>
            <span>full time</span>
            <span>USA only</span>
          </div>
        </div>
      </div>

      <div class="flex tags">
        <span>Front end</span>
        <span>Front end</span>
        <span>Front end</span>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss">
.banner {
  height: 250px;
  background-color: aquamarine;
  width: 100%;
}

.card {
  display: grid;
  grid-template-columns:  1fr 2fr;
  padding: 12px;
  align-items: center;
  background-color: hotpink;
  border-radius: 12px;
}

.image {
  display: flex;
  align-items: center;
  img {
    width: 60px;
    max-height: 100%;
  }
}

.tags {
  justify-self: end;
}
</style>
