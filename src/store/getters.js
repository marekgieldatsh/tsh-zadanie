export default {
  isEmpty(state) {
    return state.products.length === 0 && !state.isProductsLoading;
  },
  isModalOpened(state) {
    return state.modal.title && Boolean(state.modal.title.length);
  }
};
