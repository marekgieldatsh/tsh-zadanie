import axios from "axios";
import actions from "@/store/actions.js";

jest.mock("axios");

describe("actions", () => {
  it("onPhraseSearch", () => {
    const dispatch = jest.fn();
    const state = {
      query: { search: "" }
    };
    actions.onPhraseSearch({ state, dispatch }, "My_text");
    expect(state.query.search).toBe("My_text");
    expect(dispatch).toHaveBeenCalledWith("fetchProducts");
  });

  it("togglePromoFilter", () => {
    const dispatch = jest.fn();
    const state = {
      query: { promo: false }
    };
    actions.togglePromoFilter({ state, dispatch });
    expect(state.query.promo).toBe(true);
    expect(dispatch).toHaveBeenCalledWith("fetchProducts");
  });

  it("toggleActiveFilter", () => {
    const dispatch = jest.fn();
    const state = {
      query: { active: false }
    };
    actions.toggleActiveFilter({ state, dispatch });
    expect(state.query.active).toBe(true);
    expect(dispatch).toHaveBeenCalledWith("fetchProducts");
  });

  it("setCurrentPage", () => {
    const dispatch = jest.fn();
    const state = {
      query: { page: 1 }
    };
    actions.setCurrentPage({ state, dispatch }, 100);
    expect(state.query.page).toBe(100);
    expect(dispatch).toHaveBeenCalledWith("fetchProducts");
  });

  it("setFiltersFromQuery", () => {
    const dispatch = jest.fn();
    const state = {
      query: {}
    };
    actions.setFiltersFromQuery({ state, dispatch }, {});
    expect(state.query.page).toBe(1);
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
      query: { search: "", page: 1 },
      products: []
    };

    actions.fetchProducts({ state, commit });

    expect(axios.get).toBeCalledWith(`/product?limit=12&page=1`);
  });

  it("login", () => {
    axios.post.mockImplementation(() =>
      Promise.resolve({ data: { access_token: "123qwe456rty" } })
    );
    axios.post.mockImplementation(() =>
      Promise.reject({ response: { data: { message: "" } } })
    );

    const state = {
      isLoginLoading: false
    };

    actions.login({ state }, { login: "My_username", password: "My_password" });

    expect(axios.post).toBeCalledWith("/auth/login", {
      password: "My_password",
      username: "My_username"
    });
  });

  it("logout", () => {
    localStorage.setItem("token", "123qwe456rty");
    actions.logout();
    expect(localStorage.getItem("token")).toBe(undefined);
  });
});
