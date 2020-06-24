import { mount } from "@vue/test-utils";
import SearchInput from "@/components/common/SearchInput.vue";

describe("SearchInput.vue", () => {
  const wrapper = mount(SearchInput, {
    propsData: {
      placeholder: "My_placeholder"
    }
  });

  it("render an input element with a placeholder text", () => {
    const input = wrapper.find("input");
    expect(input.attributes().placeholder).toMatch(/My_placeholder/);
  });

  it("emits an event after a text change", () => {
    const input = wrapper.find("input");
    input.trigger("change");
    expect(wrapper.emitted().onChange).toBeTruthy();
  });
});
