import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header/Header.vue";
import SearchFilters from "@/components/Header/SearchFilters.vue";
import UserStatus from "@/components/Header/UserStatus.vue";

describe("Header.vue", () => {
  const wrapper = shallowMount(Header);

  it("renders SearchFilters component", () => {
    expect(wrapper.findComponent(SearchFilters).exists()).toBe(true);
  });

  it("renders UserStatus component", () => {
    expect(wrapper.findComponent(UserStatus).exists()).toBe(true);
  });
});
