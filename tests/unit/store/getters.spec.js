import getters from "@/store/getters.js";

describe("getters", () => {
  it("isEmpty", () => {
    const state = { products: [], loading: false };
    const isEmpty = getters.isEmpty(state);
    expect(isEmpty).toBe(true);
  });

  it("isModalOpened", () => {
    const state = { modal: { title: "My_title" } };
    const isModalOpened = getters.isModalOpened(state);
    expect(isModalOpened).toBe(true);
  });
});
