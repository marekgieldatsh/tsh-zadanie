<template>
  <div class="textInputContainer">
    <input
      class="textInputContainer__input"
      type="text"
      :placeholder="placeholder"
      v-on:change="$emit('onChange')"
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
    font-size: rem(14px);
    padding-left: rem(16px);
  }

  &__icon {
    display: inherit;
    padding: rem(16px) rem(12px);
  }
}
</style>
