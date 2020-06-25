import axios from "axios";

export default {
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
  fetchProducts({ state, commit }) {
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
        `/product?limit=12${urlPartActive}${urlPartPromo}${urlPartSearch}${urlPartPage}`
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
      .finally(() => (state.isLoading = false));
  }
};
