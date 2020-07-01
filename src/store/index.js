import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    isProductsLoading: true,
    numberOfPages: 1,
    query: {
      active: null,
      promo: null,
      serach: "",
      page: 1
    },
    modal: {
      image: "",
      title: "",
      text: ""
    },
    isLoginLoading: false
  },
  mutations,
  getters,
  actions
});
