<template>
  <Container>
    <header class="productsPage__header">
      <div class="productsPage__header__logo">
        <Logo />
      </div>
      <SearchFilters />
      <UserStatus />
    </header>
  </Container>
</template>

<script>
import Logo from "@/components/common/Logo.vue";
import Container from "@/components/common/Container.vue";
import SearchFilters from "./SearchFilters.vue";
import UserStatus from "./UserStatus.vue";

export default {
  name: "Header",
  components: {
    Logo,
    Container,
    SearchFilters,
    UserStatus
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
  }
}
</style>
