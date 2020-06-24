import Vuex from "vuex";
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import SearchInput from "@/components/common/SearchInput.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("SearchInput.vue", () => {
  let actions;
  let store;

  let wrapper;

  beforeEach(() => {
    actions = {
      onPhraseSearch: jest.fn()
    };

    store = new Vuex.Store({
      state: {
        phrase: ""
      },
      phrase: "",
      actions
    });

    wrapper = shallowMount(SearchInput, {
      store,
      localVue,
      propsData: {
        placeholder: "My_placeholder"
      }
    });
  });

  it("render an input element with a placeholder text", () => {
    const input = wrapper.find("input");
    expect(input.attributes().placeholder).toMatch(/My_placeholder/);
  });
});
