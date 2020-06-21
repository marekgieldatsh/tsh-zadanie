<template>
  <section class="card">
    <img class="card__image" :src="image" alt />
    <span class="card__promoBadge" v-if="isPromo">Promo</span>
    <div class="card__content">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__text">{{ text }}</p>
      <Rating :rating="rating" @onRated="$emit('onRated')" />
      <br />
      <Button
        class="card__button"
        @onClick="$emit('onShowDetails')"
        title="Show details"
      />
    </div>
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
    isPromo: {
      type: Boolean,
      default: false
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
  background-color: $white;
  border-radius: 8px;

  &__image {
    width: 100%;
    height: rem(170px);
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &__promoBadge {
    background-color: $active;
    position: relative;
    top: rem(-170px + 16px);
    padding: rem(4px) rem(16px);
    color: $white;

    @media only screen and (max-width: $tabletLandscape) {
      left: rem(16px);
    }
  }

  &__content {
    padding: 0 rem(16px);
  }

  &__title {
    margin-top: rem(16px);
  }

  &__text {
    margin-top: rem(8px);
    margin-bottom: rem(32px);
  }

  &__button {
    margin-top: rem(32px);
    margin-bottom: rem(24px);
    width: 100%;
  }
}
</style>
