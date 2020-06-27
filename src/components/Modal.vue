<template>
  <div class="modal" v-if="$store.getters.isModalOpened">
    <div class="modal__veil"></div>
    <div class="modal__card">
      <div class="modal__closeIcon" v-on:click="onCloseModal">
        <CloseIcon />
      </div>
      <div>
        <img
          class="modal__image"
          :src="imageError ? require('../assets/image_placeholder.png') : image"
          alt="Image"
          @error="onErrorImage"
        />
      </div>
      <h2 class="modal__title">{{ $store.state.modal.title }}</h2>
      <p class="modal__text">{{ $store.state.modal.text }}</p>
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/components/icons/CloseIcon";

export default {
  components: {
    CloseIcon
  },
  data() {
    return {
      imageError: false
    };
  },
  computed: {
    image() {
      return this.$store.state.modal.image;
    }
  },
  watch: {
    "$store.getters.isModalOpened"(isModalOpened) {
      document
        .getElementsByTagName("body")[0]
        .setAttribute(
          "style",
          `overflow: ${isModalOpened ? "hidden" : "auto"};`
        );
    }
  },
  methods: {
    onErrorImage() {
      console.log("Image error", true);
      this.imageError = true;
    },
    onCloseModal() {
      console.log("clickOutside", true);
      this.$store.commit("setModalOff", {});
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
.modal {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &__veil {
    background-color: $grey5;
    opacity: 0.9;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
  }

  &__card {
    background-color: $white;
    position: fixed;
    z-index: 100;
    border-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100wv;
    height: 100vh;

    @media only screen and (min-width: $tablet) {
      width: rem(600px);
      height: unset;
      border-radius: 8px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  &__closeIcon {
    @include clickable;
    position: absolute;
    top: rem(20px);
    right: rem(20px);
    background-color: $white;
    border-radius: 100px;
    width: rem(24px);
    height: rem(24px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: rem(175px);

    @media only screen and (min-width: $tablet) {
      height: rem(354px);
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  &__title,
  &__text {
    padding: 0 rem(48px);
  }

  &__title {
    margin-top: rem(24px);
    font-size: rem(24px);
    line-height: rem(40pz);
  }

  &__text {
    margin-top: rem(8px);
    margin-bottom: rem(56px);
    font-size: rem(18px);
    color: $grey4;
  }
}
</style>
