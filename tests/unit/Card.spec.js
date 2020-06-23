import { shallowMount } from "@vue/test-utils";
import Card from "@/components/common/Card.vue";

describe("Card.vue", () => {
  const wrapper = shallowMount(Card, {
    propsData: {
      title: "My_title"
    }
  });

  it("renders a title", () => {
    const title = wrapper.find(".card__title");
    expect(title.text()).toMatch(/My_title/);
  });
});
