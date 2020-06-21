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
      <Container class="productsPage__content__cardsWrapper">
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
        <Card
          class="productsPage__content__card"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZKgVuTZDAyVFfBO-zPtRtIa3n-JRYcLdZ5gZvrVv79H-AbrC_&usqp=CAU"
          title="Nike Running Shoes"
          text="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
          :rating="2"
          isPromo="true"
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

    &__cardsWrapper {
      @media only screen and (min-width: $mobileLandscape) {
        display: grid;
        grid-template-columns: repeat(auto-fill, 50% 50%);
      }

      @media only screen and (min-width: $tabletLandscape) {
        grid-template-columns: repeat(auto-fill, 33% 33% 33%);
      }

      @media only screen and (min-width: $desktop) {
        grid-template-columns: repeat(auto-fill, 25% 25% 25% 25%);
      }
    }

    &__card {
      margin-top: rem(12px);
      margin-bottom: rem(12px);
      // max-width: rem(288px);

      @media only screen and (min-width: $mobileLandscape) and (max-width: $tabletLandscape) {
        margin-top: rem(32px);
        margin-left: rem(12px);
        margin-right: rem(12px);

        &:nth-child(odd) {
          margin-left: 0;
        }

        &:nth-child(even) {
          margin-right: 0;
        }
      }

      @media only screen and (min-width: $tabletLandscape) and (max-width: $desktop) {
        margin-top: rem(32px);
        margin-left: rem(12px);
        margin-right: rem(12px);

        &:nth-child(3n + 1),
        &:first-child {
          margin-left: 0;
        }

        &:nth-child(3n) {
          margin-right: 0;
        }
      }

      @media only screen and (min-width: $desktop) {
        margin-top: rem(32px);
        margin-left: rem(12px);
        margin-right: rem(12px);

        &:nth-child(4n + 1),
        &:first-child {
          margin-left: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
