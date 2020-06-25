<template>
  <section class="card">
    <img
      class="card__image"
      :src="imageError ? require('../../assets/image_placeholder.png') : image"
      alt="Image"
      @error="onErrorImage"
    />
    <span class="card__promoBadge" v-if="isPromo">Promo</span>
    <div
      :class="{
        card__content: true,
        'card__content--withPromo': isPromo
      }"
    >
      <h3 class="card__title">{{ title }}</h3>
      <v-clamp class="card__text" autoresize :max-lines="3">{{ text }}</v-clamp>
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
import VClamp from "vue-clamp";
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
      default: require("../../assets/image_placeholder.png")
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
    VClamp,
    Button,
    Rating
  },
  data() {
    return {
      imageError: false
    };
  },
  methods: {
    onErrorImage() {
      this.imageError = true;
      console.log('error')
    }
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
  }

  &__content {
    padding: 0 rem(16px);
  }

  &__content--withPromo {
    margin-top: rem(-24px);
  }

  &__title {
    font-size: rem(18px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__text {
    margin-top: rem(8px);
    margin-bottom: rem(32px);
    height: rem(64px);
    font-size: rem(14px);
    color: $grey4;
  }

  &__button {
    margin-top: rem(18px);
    margin-bottom: rem(24px);
    width: 100%;
  }
}
</style>
