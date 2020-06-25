import { shallowMount } from "@vue/test-utils";
import Rating from "@/components/common/Rating.vue";

describe("Rating.vue", () => {
  const wrapper = shallowMount(Rating);

  it("renders stars", () => {
    const stars = wrapper.findAll(".rating__star");
    expect(stars.length).toBe(5);
  });

  it("emits an event after a click", async () => {
    const star = wrapper.find(".rating__star");
    await star.trigger("click");
    expect(wrapper.emitted().onRated[0][0]).toEqual(1);
  });
});
