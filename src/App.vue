<template>
  <div id="app">
    <Header />
    <router-view />
    <Modal />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Header,
    Modal
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
