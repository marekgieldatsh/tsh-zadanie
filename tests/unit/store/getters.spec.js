import getters from "@/store/getters.js";

describe("getters", () => {
  it("isEmpty", () => {
    const state = { products: [], loading: false };
    const isEmpty = getters.isEmpty(state);
    expect(isEmpty).toBe(true);
  });
});
