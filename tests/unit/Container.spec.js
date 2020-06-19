import { shallowMount } from "@vue/test-utils";
import Container from "@/components/common/Container.vue";

describe("Dropdown.vue", () => {
  const wrapper = shallowMount(Container, {
    slots: {
      default: `<span class="slot_content">Sample</span>`
    }
  });

  const child = wrapper.find(".slot_content");

  it("renders a slot content", () => {
    expect(child.exists()).toBeTruthy();
  });
});
