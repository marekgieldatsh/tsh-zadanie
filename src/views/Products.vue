<template>
  <div>
    <Header />
    <div class="productsPage">
      <section class="productsPage__content">
        <ClipLoader
          class="productsPage__content__loader"
          v-if="$store.state.isProductsLoading"
          color="#4460f7"
          size="64px"
        />
        <InfoCard v-if="$store.getters.isEmpty" />
        <Container
          v-if="!$store.getters.isLoading"
          class="productsPage__content__cardsWrapper"
        >
          <Card
            v-for="product in $store.state.products"
            :key="product.id"
            class="productsPage__content__card"
            :image="product.image"
            :title="product.title"
            :text="product.text"
            :rating="product.rating"
            :isPromo="product.isPromo"
            @onShowDetails="
              onClickCard(product.image, product.title, product.text)
            "
            @onRated="onRated()"
          />
        </Container>
        <Pagination
          v-if="!$store.getters.isEmpty"
          class="productsPage__content__pagination"
          :currentPage="$store.state.query.page"
          :numberOfPages="$store.state.numberOfPages"
          @onPageSelected="onClickPagination"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Container from "@/components/common/Container.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import InfoCard from "@/components/InfoCard.vue";
import Card from "@/components/common/Card.vue";
import Pagination from "@/components/common/Pagination";

export default {
  name: "Home",
  components: {
    Header,
    Container,
    ClipLoader,
    InfoCard,
    Card,
    Pagination
  },
  mounted() {
    this.$store.dispatch("setFiltersFromQuery", this.$route.query);
  },
  computed: {
    isLoading() {
      return this.products.length === 0;
    }
  },
  methods: {
    onClickCard(image, title, text) {
      console.log("On click card");
      this.$store.commit("setModalOn", { image, title, text });
    },
    onRated() {
      console.log("On rated");
    },
    onClickPagination(data) {
      console.log(data);
      this.$store.dispatch("setCurrentPage", data);
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
      width: rem(288px);
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

    &__pagination {
      margin-top: rem(24px);
      margin-bottom: rem(56px);
    }
  }
}
</style>
