<template>
  <h2 class="logo">join.tsh.io</h2>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    numberOfPages: {
      type: Number,
      default: 0
    },
    onPageSelected: {
      type: Event
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  color: $grey5;
}
</style>
