<template>
  <div class="textInputContainer">
    <input
      class="textInputContainer__input"
      type="search"
      :placeholder="placeholder"
      v-model="inputModel"
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
      default: "SearchInput text here"
    },
    value: {
      type: String,
      default: ""
    },
    onChange: {
      type: Event
    }
  },
  computed: {
    inputModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("onChange", value);
      }
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
