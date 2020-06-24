<template>
  <ul class="pagination-container">
    <li
      :class="{
        'pagination-container__item': true,
        'pagination-container__item--disabled': currentPage === 1
      }"
      v-on:click="$emit('onPageSelected', 1)"
    >
      First
    </li>
    <li
      :class="{
        'pagination-container__item': true,
        'pagination-container__item--current': pageNumber === currentPage,
        'pagination-container__item--hidden': isPaginationItemHidden(
          pageNumber
        ),
        'pagination-container__item--ellipsis': isPaginationItemEllipsis(
          pageNumber
        )
      }"
      v-for="pageNumber in numberOfPages"
      :key="pageNumber"
    >
      <span
        v-if="isPaginationItemVisible(pageNumber)"
        v-on:click="$emit('onPageSelected', pageNumber)"
        >{{ pageNumber }}</span
      >
      <span v-if="!isPaginationItemVisible(pageNumber)">...</span>
    </li>
    <li
      :class="{
        'pagination-container__item': true,
        'pagination-container__item--disabled': currentPage === numberOfPages
      }"
      v-on:click="$emit('onPageSelected', numberOfPages)"
    >
      Last
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    numberOfPages: {
      type: Number,
      default: 1
    },
    onPageSelected: {
      type: Event
    }
  },
  methods: {
    isPaginationItemVisible(pageNumber) {
      return (
        pageNumber === this.currentPage - 2 ||
        pageNumber === this.currentPage - 1 ||
        pageNumber === this.currentPage ||
        pageNumber === this.currentPage + 1 ||
        pageNumber === this.currentPage + 2
      );
    },
    isPaginationItemEllipsis(pageNumber) {
      return (
        pageNumber === this.currentPage - 3 ||
        pageNumber === this.currentPage + 3
      );
    },
    isPaginationItemHidden(pageNumber) {
      return (
        !this.isPaginationItemVisible(pageNumber) &&
        !this.isPaginationItemEllipsis(pageNumber)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination-container {
  display: inline-flex;
  flex-direction: row;
  list-style-type: none;

  &__item {
    @include clickable;
    margin-left: rem(8px);
    margin-right: rem(8px);

    &:first-child {
      margin-left: 0;
      margin-right: rem(24px);
    }

    &:last-child {
      margin-left: rem(24px);
      margin-right: 0;
    }
  }

  &__item--current {
    color: $primary;
  }

  &__item--disabled {
    color: $grey4;
    cursor: not-allowed;
    pointer-events: none;
  }

  &__item--hidden {
    display: none;
  }

  &__item--ellipsis {
    cursor: default;
  }
}
</style>
