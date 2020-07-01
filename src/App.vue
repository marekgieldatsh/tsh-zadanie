<template>
  <div id="app">
    <router-view />
    <Modal />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal
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
