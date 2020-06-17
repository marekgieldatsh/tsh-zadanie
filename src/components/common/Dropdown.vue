<template>
  <div class="dropdownContainer" v-on:click="toggleDropdown()">
    <slot></slot>
    <span class="dropdownContainer__dropdown" v-if="isOpen">dsjhdjshdjsjdsjdjshdjhsdhjsdhjsdhjshdjshdjshdjshdjshdjshdjshdjshdjsdhsjdhsjdhsjdshdj{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
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
    }
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
    min-width: rem(184px - 32px);
    display: inline-flex;
    align-items: center;
  }
}
</style>
