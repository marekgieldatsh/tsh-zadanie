<template>
  <div class="dropdownContainer" v-click-outside="closeDropdown">
    <span
      class="dropdownContainer__wrappedElement"
      v-on:click="toggleDropdown()"
    >
      <slot></slot>
    </span>
    <span class="dropdownContainer__dropdown" v-if="isOpen">
      <span class="dropdownContainer__link" v-on:click="onClickLink()">{{
        text
      }}</span>
    </span>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  props: {
    text: {
      type: String,
      default: ""
    },
    onClick: {
      type: Event
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    onClickLink() {
      this.closeDropdown();
      this.$emit("onClick");
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
.dropdownContainer {
  &__dropdown {
    background-color: $white;
    padding: rem(8px) rem(16px);
    height: rem(56px - 16px);
    box-shadow: 0 8px 32px 0 rgba(17, 18, 20, 0.16);
    border-radius: 4px;
    position: absolute;
    margin-top: rem(10px);
    margin-left: -(rem(184px - 48px));
    min-width: rem(184px - 32px);
    display: inline-flex;
    align-items: center;
  }

  &__link {
    @include clickable;
  }
}
</style>
