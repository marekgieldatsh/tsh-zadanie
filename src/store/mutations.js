export default {
  setProducts(state, products) {
    state.products = products;
  },
  setModalOn(state, { image, title, text }) {
    state.modal = {
      image,
      title,
      text
    };
  },
  setModalOff(state) {
    state.modal = {};
  }
};
