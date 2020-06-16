import { mount } from "@vue/test-utils";
import TextInput from "@/components/common/TextInput.vue";

describe("TextInput.vue", () => {
  const wrapper = mount(TextInput, {
      propsData: {
        placeholder: 'My_placeholder'
      }
    });

  it('render an input element with a placeholder text', () => {
    const input = wrapper.find('input')
    expect(input.attributes().placeholder).toMatch(/My_placeholder/)
  })

  it('emits an event after a text change', () => {
    const input = wrapper.find('input')
    input.trigger('change')
    expect(wrapper.emitted().onChange).toBeTruthy();
  })
})