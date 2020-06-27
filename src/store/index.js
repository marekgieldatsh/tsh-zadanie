import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    isPromo: false,
    isActive: false,
    searchPhrase: "",
    isLoading: true,
    numberOfPages: 1,
    currentPageNumber: 1,
    modal: {
      image: "",
      title: "",
      text: ""
    }
  },
  mutations,
  getters,
  actions
});
