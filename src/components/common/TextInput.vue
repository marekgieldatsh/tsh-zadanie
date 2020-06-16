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
@import "../../styles/variables.scss";
.textInputContainer {
  border-radius: 8px;
  border: solid 1px $accent;
  height: 2.67rem;
  display: inline-flex;
  align-items: center;

  &__input {
    border: none;
    border-radius: inherit;
    height: 98%;
    font-size: 0.875rem;
  }

  &__icon {
    display: inherit;
    padding: 1rem 0.75rem;
  }
}
</style>
