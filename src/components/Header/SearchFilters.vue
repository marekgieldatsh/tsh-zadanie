<template>
  <div class="searchFilters">
    <SearchInput
      class="searchFilters__search"
      placeholder="Search"
      @onChange="onSearchChange"
      type="search"
    >
      <SearchIcon />
    </SearchInput>

    <div class="searchFilters__filters">
      <Checkbox
        label="Active"
        @onToggle="onChangeActive()"
        :checked="$store.state.query.active"
      />
      <Checkbox
        label="Promo"
        @onToggle="onChangePromo()"
        :checked="$store.state.query.promo"
      />
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/common/SearchInput.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import Checkbox from "@/components/common/Checkbox.vue";

export default {
  name: "Header",
  components: {
    SearchInput,
    SearchIcon,
    Checkbox
  },
  methods: {
    onSearchChange(value) {
      this.$store.dispatch("onPhraseSearch", value);
    },
    onChangeActive() {
      this.$store.dispatch("toggleActiveFilter");
    },
    onChangePromo() {
      this.$store.dispatch("togglePromoFilter");
    },
    onClickLogout() {
      console.log("On click logout");
    },
    onClickLogin() {
      this.$router.push("login", () => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.searchFilters {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: $tabletLandscape) {
    order: 3;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &__search {
    width: 100%;
    margin-right: rem(24px);

    @media only screen and (min-width: $tabletLandscape) {
      max-width: rem(392px);
    }

    @media only screen and (max-width: $tabletLandscape) {
      margin-top: rem(24px);
    }
  }

  &__filters {
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: $tabletLandscape) {
      margin-top: rem(24px);
    }

    * {
      margin-right: rem(31px);
    }
  }

  &__userStatus {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: $tabletLandscape) {
      order: 2;
    }
  }
}
</style>
