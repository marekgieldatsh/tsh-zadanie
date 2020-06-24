import { shallowMount } from "@vue/test-utils";
import Checkbox from "@/components/common/Checkbox.vue";

describe("Checkbox.vue", () => {
  const wrapper = shallowMount(Checkbox, {
    propsData: {
      label: "My_label"
    }
  });

  it("renders a label element", () => {
    const label = wrapper.find("label");
    expect(label.text()).toMatch(/My_label/);
  });

  it("emits an event after a checkbox toggle", async () => {
    const input = wrapper.find("input");
    await input.trigger("click");
    expect(wrapper.emitted().onToggle).toBeTruthy();
  });
});
