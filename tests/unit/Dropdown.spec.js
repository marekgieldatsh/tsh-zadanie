import { shallowMount } from "@vue/test-utils";
import Dropdown from "@/components/common/Dropdown.vue";

describe("Dropdown.vue", () => {
  const wrapper = shallowMount(Dropdown, {
    propsData: {
      text: "My_text"
    },
    slots: {
      default: `<a class="slot_content">Sample</a>`
    }
  });

  const child = wrapper.find(".slot_content");

  it("renders a slot content", () => {
    expect(child.exists()).toBeTruthy();
  });

  it("triggers a dropdown", async () => {
    await child.trigger("click");
    const dropdown = wrapper.find(".dropdownContainer__link");
    expect(dropdown.text()).toMatch(/My_text/);
  });
});
