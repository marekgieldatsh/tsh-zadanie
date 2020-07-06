import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Modal from "@/components/Modal";
import CloseIcon from "@/components/icons/CloseIcon.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Modal.vue", () => {
  let wrapper;

  let state;
  let getters;
  let mutations;
  let store;

  beforeEach(() => {
    state = {
      modal: {
        image: "My_image",
        title: "My_title",
        text: "My_text"
      }
    };

    getters = {
      isModalOpened: () => true
    };

    mutations = {
      setModalOff: jest.fn()
    };

    store = new Vuex.Store({
      state,
      getters,
      mutations
    });

    wrapper = shallowMount(Modal, { store, localVue });
  });

  it("renders a title", () => {
    const title = wrapper.find(".modal__title");
    expect(title.text()).toMatch(/My_title/);
  });

  it("renders a text", () => {
    const text = wrapper.find(".modal__text");
    expect(text.text()).toMatch(/My_text/);
  });

  it("renders close icon component", () => {
    expect(wrapper.findComponent(CloseIcon).exists()).toBe(true);
  });

  it("calls setModalOff mutation", async () => {
    const icon = wrapper.find(".modal__closeIcon");
    icon.trigger("click");
    expect(mutations.setModalOff).toHaveBeenCalled();
  });
});
