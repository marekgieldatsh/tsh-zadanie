import { shallowMount } from "@vue/test-utils";
import ArrowDropUpIcon from "@/components/icons/ArrowDropUpIcon.vue";
import ArrowDropDownIcon from "@/components/icons/ArrowDropDownIcon.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import StarBorderIcon from "@/components/icons/StarBorderIcon.vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import GroupIcon from "@/components/icons/GroupIcon.vue";

const components = [
  ArrowDropUpIcon,
  ArrowDropDownIcon,
  CheckIcon,
  CloseIcon,
  SearchIcon,
  StarBorderIcon,
  StarIcon,
  GroupIcon
];

describe("icons", () => {
  const wrappers = components.map(component => shallowMount(component));

  it("have svg elements", () => {
    wrappers.forEach(wrapper => {
      const svg = wrapper.find("svg");
      expect(svg.exists()).toBe(true);
    });
  });
});
