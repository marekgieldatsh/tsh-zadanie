<template>
  <Container>
    <header class="productsPage__header">
      <div class="productsPage__header__logo">
        <Logo />
      </div>

      <div class="productsPage__header__searchFilters">
        <SearchInput
          class="productsPage__header__search"
          placeholder="Search"
          @onChange="onSearchChange"
        >
          <SearchIcon />
        </SearchInput>

        <div class="productsPage__header__filters">
          <Checkbox
            label="Active"
            @onToggle="onChangeActive()"
            :checked="$store.state.isActive"
          />
          <Checkbox
            label="Promo"
            @onToggle="onChangePromo()"
            :checked="$store.state.isPromo"
          />
        </div>
      </div>

      <div class="productsPage__header__userStatus">
        <Dropdown text="Logout" @onClick="onClickLogout()">
          <Avatar />
        </Dropdown>
      </div>
    </header>
  </Container>
</template>

<script>
import Logo from "@/components/common/Logo.vue";
import SearchInput from "@/components/common/SearchInput.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import Checkbox from "@/components/common/Checkbox.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import Avatar from "@/components/common/Avatar.vue";
import Container from "@/components/common/Container.vue";

export default {
  name: "Header",
  components: {
    Logo,
    SearchInput,
    SearchIcon,
    Checkbox,
    Dropdown,
    Avatar,
    Container
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
    }
  }
};
</script>

<style lang="scss" scoped>
.productsPage {
  &__header {
    padding-top: rem(52px);
    padding-bottom: rem(32px);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 50% 50%);

    @media only screen and (min-width: $tabletLandscape) {
      padding-top: rem(48px);
      padding-bottom: rem(48px);
      grid-template-columns: repeat(auto-fill, 14% 79% 7%);
    }

    &__logo {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;

      @media only screen and (max-width: $tabletLandscape) {
        order: 1;
      }
    }

    &__searchFilters {
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
}
</style>
