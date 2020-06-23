import { shallowMount } from "@vue/test-utils";
import Logo from "@/components/common/Logo.vue";

describe("Logo.vue", () => {
  const wrapper = shallowMount(Logo);

  it("renders a logo", () => {
    const logo = wrapper.find(".logo");
    expect(logo.text()).toMatch(/join.tsh.io/);
  });
});
