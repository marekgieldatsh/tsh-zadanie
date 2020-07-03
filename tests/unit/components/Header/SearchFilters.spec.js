import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import SearchFilters from "@/components/Header/SearchFilters.vue";
import SearchInput from "@/components/common/SearchInput.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("SearchFilters.vue", () => {
  let wrapper;

  let state;
  let actions;
  let store;

  beforeEach(() => {
    state = {
      query: {
        active: false,
        promo: false,
        search: ""
      }
    };

    actions = {
      onPhraseSearch: jest.fn(),
      toggleActiveFilter: jest.fn(),
      togglePromoFilter: jest.fn()
    };

    store = new Vuex.Store({
      state,
      actions
    });

    wrapper = shallowMount(SearchFilters, { store, localVue });
  });

  it("renders SearchInput component", () => {
    expect(wrapper.findComponent(SearchInput).exists()).toBe(true);
  });

  it("calls onPhraseSearch action", async () => {
    await wrapper.vm.onSearchChange("My_search_phrase");
    expect(actions.onPhraseSearch).toHaveBeenCalled();
  });

  it("calls toggleActiveFilter action", async () => {
    await wrapper.vm.onChangeActive();
    expect(actions.toggleActiveFilter).toHaveBeenCalled();
  });

  it("calls togglePromoFilter action", async () => {
    await wrapper.vm.onChangePromo();
    expect(actions.togglePromoFilter).toHaveBeenCalled();
  });
});
