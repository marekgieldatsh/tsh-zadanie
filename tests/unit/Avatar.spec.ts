import { shallowMount } from "@vue/test-utils";
import Avatar from "@/components/common/Avatar.vue";


describe("Avatar.vue", () => {
  const wrapper = shallowMount(Avatar, {
    propsData: {
      image: 'user.png'
    }
  });

  it('renders an image', () => {
    const image = wrapper.find('img');
    expect(image.exists()).toBeTruthy();
  })
})