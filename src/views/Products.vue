<template>
  <div class="productsContainer">
    <header>
      <Logo />
    </header>
    <section></section>
  </div>
</template>

<script>
import Logo from "@/components/common/Logo.vue";

export default {
  name: "Home",
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.productsContainer {
}
</style>
