<template>
  <div class="productsPage">
    <Container>
      <header class="productsPage__header">
        <div class="productsPage__header__logo">
          <Logo />
        </div>

        <div class="productsPage__header__searchFilters">
          <TextInput class="productsPage__header__search" placeholder="Search">
            <SearchIcon />
          </TextInput>

          <div class="productsPage__header__filters">
            <Checkbox label="Active" @onToggle="onChangeActive()" />
            <Checkbox label="Promo" @onToggle="onChangePromo()" />
          </div>
        </div>

        <div class="productsPage__header__userStatus">
          <Dropdown text="Logout" @onClick="onClickLogout()">
            <Avatar />
          </Dropdown>
        </div>
      </header>
    </Container>
    <section class="productsPage__content">
      <Container>
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
      </Container>
    </section>
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
import Card from "@/components/common/Card.vue";

export default {
  name: "Home",
  components: {
    Logo,
    TextInput,
    SearchIcon,
    Checkbox,
    Dropdown,
    Avatar,
    Container,
    Card
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
    },
    onClickCard() {
      console.log("On click card");
    },
    onRated() {
      console.log("On rated");
    }
  }
};
</script>

<style lang="scss" scoped>
.productsPage {
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

  &__content {
    background-color: $background;
  }
}
</style>
