<template>
  <button
    :class="{
      button: true,
      'button--outlined': outlined
    }"
    :disabled="disabled"
    v-on:click="$emit('onClick')"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Event
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  @include clickable;
  background-color: $primary;
  color: $white;
  font-size: rem(14px);
  border: none;
  padding: rem(11px) rem(24px);
  border-radius: 4px;
  border: 1px solid $primary;

  &:hover {
    background-color: $darker;
    border-color: $darker;
  }

  &:disabled {
    background-color: $grey4;
    border-color: $grey4;
  }

  &--outlined {
    background-color: white;
    color: $primary;

    &:hover {
      background-color: white;
      color: $darker;
    }

    &:disabled {
      background-color: white;
      color: $grey4;
      border-color: $grey4;
    }
  }
}
</style>
