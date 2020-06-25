export default {
  isEmpty(state) {
    return state.products.length === 0 && !state.isLoading;
  }
};
