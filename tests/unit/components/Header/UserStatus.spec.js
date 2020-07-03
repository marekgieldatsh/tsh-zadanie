import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Vue from "vue";
import VueRouter from "vue-router";
import UserStatus from "@/components/Header/UserStatus.vue";
import Button from "@/components/common/Button.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import Avatar from "@/components/common/Avatar.vue";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

describe("SearchFilters.vue", () => {
  let wrapper;

  let state;
  let actions;
  let store;

  beforeEach(() => {
    state = {
      isLoginLoading: false
    };

    actions = {
      login: jest.fn(),
      logout: jest.fn(),
      fetchProducts: jest.fn()
    };

    store = new Vuex.Store({
      state,
      actions
    });

    wrapper = shallowMount(UserStatus, {
      store,
      localVue,
      router,
      propsData: {
        text: "My_text"
      }
    });
  });

  it("renders UserStatus component (no user logged in)", () => {
    expect(wrapper.findComponent(Button).exists()).toBe(true);
  });

  it("renders UserStatus component (user logged in)", done => {
    wrapper.setData({ isUserLoggedIn: true });
    Vue.nextTick(() => {
      expect(wrapper.findComponent(Dropdown).exists()).toBe(true);
      expect(wrapper.findComponent(Avatar).exists()).toBe(true);
      done();
    });
  });

  it("redirect to /login", () => {
    wrapper.vm.onClickLogin();
    expect(wrapper.vm.$route.path).toBe("/login");
  });
});
