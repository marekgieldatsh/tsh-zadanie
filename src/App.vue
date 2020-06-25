<template>
  <div id="app">
    <Header />
    <router-view />
    <a target="_blank" href="https://icons8.com/icons/set/image">Avatar icon</a>
    icon by <a target="_blank" href="https://icons8.com">Icons8</a> Icons made
    by
    <a
      href="https://www.flaticon.com/authors/pixel-perfect"
      title="Pixel perfect"
      >Pixel perfect</a
    >
    from
    <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
