import axios from "axios";
import actions from "@/store/actions.js";

jest.mock("axios");

describe("actions", () => {
  it("onPhraseSearch", () => {
    const dispatch = jest.fn();
    const state = {
      searchPhrase: ""
    };
    actions.onPhraseSearch({ state, dispatch }, "My_text");
    expect(state.searchPhrase).toBe("My_text");
    expect(dispatch).toHaveBeenCalledWith("fetchProducts");
  });

  it("togglePromoFilter", () => {
    const dispatch = jest.fn();
    const state = {
      isPromo: false
    };
    actions.togglePromoFilter({ state, dispatch });
    expect(state.isPromo).toBe(true);
    expect(dispatch).toHaveBeenCalledWith("fetchProducts");
  });

  it("toggleActiveFilter", () => {
    const dispatch = jest.fn();
    const state = {
      isActive: false
    };
    actions.toggleActiveFilter({ state, dispatch });
    expect(state.isActive).toBe(true);
    expect(dispatch).toHaveBeenCalledWith("fetchProducts");
  });

  it("setCurrentPage", () => {
    const dispatch = jest.fn();
    const state = {
      currentPageNumber: 1
    };
    actions.setCurrentPage({ state, dispatch }, 100);
    expect(state.currentPageNumber).toBe(100);
    expect(dispatch).toHaveBeenCalledWith("fetchProducts");
  });

  it("fetchProducts", () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: { items: [1, 2, 3] } })
    );
    axios.get.mockImplementation(() =>
      Promise.reject({ response: { data: { message: "" } } })
    );

    const commit = jest.fn();
    const state = {
      isLoading: false,
      searchPhrase: "",
      products: [],
      currentPageNumber: 1
    };
    actions.fetchProducts({ state, commit });
    expect(axios.get).toBeCalledWith(`/product?limit=12&page=1`);
  });
});
