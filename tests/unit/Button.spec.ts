import { shallowMount } from "@vue/test-utils";
import Button from "@/components/common/Button.vue";


describe("Button.vue", () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      title: 'My_title'
    }
  });

  it('renders a button element with a text', () => {
    const button = wrapper.find('button');
    expect(button.text()).toMatch(/My_title/)
  })

  it('emits an event after a click', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().onClick).toBeTruthy();
  })
})