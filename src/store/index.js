import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    isPromo: false,
    isActive: false,
    searchPhrase: "",
    isLoading: true,
    numberOfPages: 1,
    currentPageNumber: 1
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setEmpty(state, value) {
      state.isEmpty = value;
    }
  },
  getters: {
    isEmpty(state) {
      return state.products.length === 0 && !state.isLoading;
    }
  },
  actions: {
    onPhraseSearch({ state, dispatch }, phrase) {
      state.searchPhrase = phrase;
      dispatch("fetchProducts");
    },
    togglePromoFilter({ state, dispatch }) {
      state.isPromo = !state.isPromo;
      dispatch("fetchProducts");
    },
    toggleActiveFilter({ state, dispatch }) {
      state.isActive = !state.isActive;
      dispatch("fetchProducts");
    },
    setCurrentPage({ state, dispatch }, currentPageNumber) {
      state.currentPageNumber = currentPageNumber;
      dispatch("fetchProducts");
    },
    fetchProducts({ state }) {
      state.isLoading = true;
      state.products = [];
      const urlPartActive = state.isActive === true ? "&active=true" : "";
      const urlPartPromo = state.isPromo === true ? "&promo=true" : "";
      const urlPartSearch = state.searchPhrase.length
        ? `&search=${state.searchPhrase}`
        : "";
      const urlPartPage = `&page=${state.currentPageNumber}`;

      axios
        .get(
          `/product?limit=10${urlPartActive}${urlPartPromo}${urlPartSearch}${urlPartPage}`
        )
        .then(result => {
          state.numberOfPages = result.data.pageCount;
          const items = result.data.items;
          const products = items.map(product => ({
            id: product.id,
            image: product.image,
            title: product.name,
            text: product.description,
            rating: product.rating,
            isPromo: product.promo,
            isActive: product.active
          }));

          state.products = products;
        })
        .catch(error => console.error(error.response.data.message))
        .finally(() => (state.isLoading = false));
    }
  }
});
