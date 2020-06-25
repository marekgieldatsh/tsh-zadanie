<template>
  <div class="textInputContainer">
    <input
      class="textInputContainer__input"
      type="search"
      :placeholder="placeholder"
      v-model="searchModel"
    />
    <span class="textInputContainer__icon">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Input text here"
    },
    model: {
      type: Event
    }
  },
  computed: {
    searchModel: {
      get() {
        return this.$store.state.phrase;
      },
      set(value) {
        this.$store.dispatch("onPhraseSearch", value);
      }
    }
  },
  methods: {
    onInputEvent(e) {
      this.$emit("onChange", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.textInputContainer {
  border-radius: 8px;
  border: solid 1px $accent;
  height: rem(48px);
  display: inline-flex;
  align-items: center;

  &__input {
    border: none;
    border-radius: inherit;
    height: 95%;
    width: 100%;
    font-size: rem(14px);
    padding-left: rem(16px);
  }

  &__input::-webkit-search-cancel-button {
    position: relative;
    right: 20px;
    height: 20px;
    width: 20px;
  }

  &__icon {
    display: inherit;
    padding: rem(16px) rem(12px);
  }
}
</style>
