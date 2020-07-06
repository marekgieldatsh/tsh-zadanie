import { shallowMount } from "@vue/test-utils";
import InfoCard from "@/components/InfoCard";
import GroupIcon from "@/components/icons/GroupIcon.vue";

describe("InfoCard.vue", () => {
  const wrapper = shallowMount(InfoCard);

  it("renders component", () => {
    const infoCard = wrapper.find(".infoCard");
    expect(infoCard).toBeDefined();
  });

  it("renders group icon component", () => {
    expect(wrapper.findComponent(GroupIcon).exists()).toBe(true);
  });
});
