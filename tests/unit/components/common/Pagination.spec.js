import { shallowMount } from "@vue/test-utils";
import Pagination from "@/components/common/Pagination.vue";

describe("Pagination.vue", () => {
  const wrapper = shallowMount(Pagination, {
    propsData: {
      currentPage: 2,
      numberOfPages: 100
    }
  });

  it("renders a pagination with items", () => {
    const items = wrapper.findAll(".pagination-container__item");
    expect(items.at(3).text()).toMatch(/3/);
    expect(items.at(5).text()).toMatch(/.../);
  });

  it("higlights a current item", () => {
    const items = wrapper.findAll(".pagination-container__item");
    expect(items.at(2).classes()).toContain(
      "pagination-container__item--current"
    );
  });

  it("emits an event after a click", async () => {
    const item = wrapper.find(".pagination-container__item");
    await item.trigger("click");
    expect(wrapper.emitted().onPageSelected[0][0]).toEqual(1);
  });
});
