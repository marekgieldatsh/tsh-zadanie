import mutations from "@/store/mutations.js";

describe("mutations", () => {
  it("setProducts", () => {
    const state = { products: [] };
    mutations.setProducts(state, [1, 2, 3]);
    expect(state.products).toEqual([1, 2, 3]);
  });

  it("setModalOn", () => {
    const state = { modal: {} };
    mutations.setModalOn(state, {
      image: "My_image",
      title: "My_title",
      text: "My_text"
    });
    expect(state.modal).toEqual({
      image: "My_image",
      title: "My_title",
      text: "My_text"
    });
  });

  it("setModalOff", () => {
    const state = {
      modal: {
        image: "My_image",
        title: "My_title",
        text: "My_text"
      }
    };
    mutations.setModalOff(state, {});
    expect(state.modal).toEqual({});
  });
});
