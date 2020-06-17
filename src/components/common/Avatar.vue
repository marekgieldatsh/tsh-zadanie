<template>
  <div class="avatar">
    <img class="avatar__image" :src="require('../../assets/' + image)" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "user.png"
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: rem(48px);
  height: rem(48px);
  &__image {
    width: inherit;
    height: inherit;
    border-radius: 100px;
  }
}
</style>
