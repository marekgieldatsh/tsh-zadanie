export default {
  isEmpty(state) {
    return state.products.length === 0 && !state.isLoading;
  },
  isModalOpened(state) {
    return state.modal.title && Boolean(state.modal.title.length);
  }
};
