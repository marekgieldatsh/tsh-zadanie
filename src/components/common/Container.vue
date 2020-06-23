<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0 rem(108px);

  @media only screen and (max-width: $tabletLandscape) {
    padding: 0 rem(24px);
  }
}
</style>
