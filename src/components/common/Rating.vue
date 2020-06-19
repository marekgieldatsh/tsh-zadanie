<template>
  <span class="rating">
    <span
      class="rating__star"
      v-for="item in 5"
      :key="item"
      v-on:click="$emit('onRated', item)"
    >
      <StarIcon v-if="item <= rating" color="#f9a52b" />
      <StarBorderIcon v-if="item > rating" color="#f9a52b" />
    </span>
  </span>
</template>

<script>
import StarIcon from "@/components/icons/StarIcon.vue";
import StarBorderIcon from "@/components/icons/StarBorderIcon.vue";

export default {
  props: {
    rating: {
      type: Number,
      default: 0
    },
    onRated: {
      type: Event
    }
  },
  components: {
    StarIcon,
    StarBorderIcon
  }
};
</script>

<style lang="scss" scoped>
.rating {
  &__star {
    @include clickable;
    margin: 0 rem(11px);

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
