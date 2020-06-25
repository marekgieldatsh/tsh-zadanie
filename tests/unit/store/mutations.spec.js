import mutations from "@/store/mutations.js";

const { setProducts } = mutations;

describe("mutations", () => {
  it("setProducts", () => {
    const state = { products: [] };
    setProducts(state, [1, 2, 3]);
    expect(state.products).toEqual([1, 2, 3]);
  });
});
