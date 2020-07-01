import axios from "axios";
import router from "../router";
import queryString from "query-string";

export default {
  onPhraseSearch({ state, dispatch }, phrase) {
    state.query.search = phrase;
    dispatch("fetchProducts");
  },
  togglePromoFilter({ state, dispatch }) {
    state.query.promo = !state.query.promo;
    dispatch("fetchProducts");
  },
  toggleActiveFilter({ state, dispatch }) {
    state.query.active = !state.query.active;
    dispatch("fetchProducts");
  },
  setCurrentPage({ state, dispatch }, currentPageNumber) {
    state.query.page = currentPageNumber;
    dispatch("fetchProducts");
  },
  setFiltersFromQuery({ state, dispatch }, query) {
    query.page = Number(query.page) || 1;
    query.promo = query.promo === "true";
    query.active = query.active === "true";
    state.query = query;
    dispatch("fetchProducts");
  },
  fetchProducts({ state, commit }) {
    state.isProductsLoading = true;
    state.products = [];
    router.push(
      {
        query: {
          active: state.query.active,
          promo: state.query.promo,
          search: state.query.search,
          page: state.query.page
        }
      },
      () => {}
    );

    axios
      .get(
        `/product?limit=12&${queryString.stringify(state.query, {
          skipNull: true,
          skipEmptyString: true
        })}`
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

        commit("setProducts", products);
      })
      .catch(error => console.error(error.response.data.message))
      .finally(() => (state.isProductsLoading = false));
  },
  login({ state }, { login, password }) {
    state.isLoginLoading = true;
    axios
      .post(`/auth/login`, {
        username: login,
        password: password
      })
      .then(result => {
        if (result.data.access_token.length) {
          localStorage.setItem("token", result.data.access_token);
          router.push("/");
        }
      })
      .catch(error => console.error(error))
      .finally(() => (state.isLoginLoading = false));
  },
  logout() {
    localStorage.removeItem("token");
  }
};
