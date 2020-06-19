<template>
  <div class="productsContainer">
    <Container>
      <header class="productsContainer__header">
        <div class="productsContainer__header__logo">
          <Logo />
        </div>

        <div class="productsContainer__header__searchFilters">
          <TextInput class="productsContainer__header__search" placeholder="Search">
            <SearchIcon />
          </TextInput>

          <div class="productsContainer__header__filters">
            <Checkbox label="Active" @onToggle="onChangeActive()" />
            <Checkbox label="Promo" @onToggle="onChangePromo()" />
          </div>
        </div>

        <div class="productsContainer__header__userStatus">
          <Dropdown text="Logout" @onClick="onClickLogout()">
            <Avatar />
          </Dropdown>
        </div>
      </header>
    </Container>
    <section></section>
  </div>
</template>

<script>
import Logo from "@/components/common/Logo.vue";
import TextInput from "@/components/common/TextInput.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import Checkbox from "@/components/common/Checkbox.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import Avatar from "@/components/common/Avatar.vue";
import Container from "@/components/common/Container.vue";

export default {
  name: "Home",
  components: {
    Logo,
    TextInput,
    SearchIcon,
    Checkbox,
    Dropdown,
    Avatar,
    Container
  },
  methods: {
    onChangeActive() {
      console.log("On change active");
    },
    onChangePromo() {
      console.log("On change active");
    },
    onClickLogout() {
      console.log("On click logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.productsContainer {
  &__header {
    margin-top: rem(52px);
    margin-bottom: rem(32px);
    @media only screen and (min-width: $tabletLandscape) {
      margin-top: rem(48px);
      margin-bottom: rem(48px);
    }
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 50% 50%);

    @media only screen and (min-width: $tabletLandscape) {
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
