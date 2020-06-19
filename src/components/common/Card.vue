<template>
  <section class="card">
    <img class="card__image" :src="image" alt />
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__text">{{ text }}</p>
    <Rating :rating="rating" @onRated="$emit('onRated')" />
    <br />
    <Button @onClick="$emit('onShowDetails')" title="Show details" />
  </section>
</template>

<script>
import Button from "@/components/common/Button.vue";
import Rating from "@/components/common/Rating.vue";

export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    rating: {
      type: Number,
      default: 0
    },
    onShowDetails: {
      type: Event
    }
  },
  components: {
    Button,
    Rating
  }
};
</script>

<style lang="scss" scoped>
.card {
  &__image {
    width: 100%;
  }
  &__title {
    margin-top: rem(16px);
  }
  &__text {
    margin-top: rem(8px);
  }
}
</style>
