<template>
  <span class="checkbox-container">
    <input
      class="checkbox-container__input"
      type="checkbox"
      :id="id"
      v-on:change="onCheckboxToggle"
      :checked="checked"
    />
    <label class="checkbox-container__label" :for="id">{{ label }}</label>
  </span>
</template>

<script>
import { v4 as uuid } from "uuid";

export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    onToggle: {
      type: Event
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: null
    };
  },
  mounted() {
    this.id = uuid();
  },
  methods: {
    onCheckboxToggle(e) {
      this.$emit("onToggle", e.target?.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox-container {
  display: inline-flex;
  align-items: center;

  &__input,
  &__label {
    @include clickable;
  }

  &__input {
    width: rem(24px);
    height: rem(24px);
    border-color: $accent;

    &:checked {
      // TO DO
    }
  }

  &__label {
    padding-left: rem(8px);
    padding-top: rem(1px);
    font-size: rem(14px);
  }
}
</style>
