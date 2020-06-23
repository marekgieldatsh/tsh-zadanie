import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    isEmpty: false,
    isPromo: false,
    isActive: false
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
    isLoading(state) {
      return state.products.length === 0;
    }
  },
  actions: {
    togglePromoFilter({ state, dispatch }) {
      state.isPromo = !state.isPromo;
      dispatch("fetchProducts");
    },
    toggleActiveFilter({ state, dispatch }) {
      state.isActive = !state.isActive;
      dispatch("fetchProducts");
    },
    fetchProducts({ state }) {
      state.isLoading = true;
      const isActiveUrl = state.isActive === true ? "&active=true" : "";
      const isPromoUrl = state.isPromo === true ? "&promo=true" : "";
      axios
        .get(`/product?limit=10${isActiveUrl}${isPromoUrl}`)
        .then(result => {
          console.debug("result", result);
          const items = result.data.items;
          if (items.length === 0) {
            state.isEmpty = true;
          } else {
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
          }
        })
        .catch(error => console.error(error.response.data.message));
    }
  }
});
