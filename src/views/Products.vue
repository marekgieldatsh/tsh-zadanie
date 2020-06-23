<template>
  <div class="productsPage">
    <section class="productsPage__content">
      <clip-loader
        class="productsPage__content__loader"
        v-if="isLoading"
        color="#4460f7"
        size="64px"
      ></clip-loader>
      <InfoCard v-if="isEmpty" />
      <Container v-if="!isLoading" class="productsPage__content__cardsWrapper">
        <Card
          v-for="product in products"
          :key="product.id"
          class="productsPage__content__card"
          :image="product.image"
          :title="product.title"
          :text="product.text"
          :rating="product.rating"
          :isPromo="product.isPromo"
          @onShowDetails="onClickCard()"
          @onRated="onRated()"
        />
      </Container>
    </section>
  </div>
</template>

<script>
import Container from "@/components/common/Container.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import InfoCard from "@/components/InfoCard.vue";
import Card from "@/components/common/Card.vue";

export default {
  name: "Home",
  components: {
    Container,
    ClipLoader,
    InfoCard,
    Card
  },
  data() {
    return {
      products: [],
      isEmpty: false
    };
  },
  mounted() {
    this.axios
      .get("/product?limit=10")
      .then(result => {
        console.debug("result", result);
        const items = result.data.items;
        if (items.length === 0) {
          this.isEmpty = true;
        } else {
          this.products = items.map(product => ({
            id: product.id,
            image: product.image,
            title: product.name,
            text: product.description,
            rating: product.rating,
            isPromo: product.promo
          }));
        }
      })
      .catch(error => console.log(error.response.data.message));
  },
  computed: {
    isLoading() {
      return this.products.length === 0;
    }
  },
  methods: {
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
  &__content {
    background-color: $background;
    padding-top: rem(24px);
    min-height: calc(100vh - 202px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &__loader {
      position: fixed;
      top: calc(50vh - 32px);
    }

    @media only screen and (min-width: $mobileLandscape) {
      padding-top: rem(56px);
    }

    &__cardsWrapper {
      display: grid;

      @media only screen and (min-width: $mobileLandscape) {
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
      margin-bottom: rem(24px);
      max-width: rem(288px);
      justify-self: center;

      @media only screen and (min-width: $mobileLandscape) and (max-width: $tabletLandscape) {
        margin-bottom: rem(32px);
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
        margin-bottom: rem(32px);
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
        margin-bottom: rem(32px);
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
