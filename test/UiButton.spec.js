import { mount } from '@vue/test-utils'
import UiButton from '~/components/ui/Button.vue'
describe('UiButton should be wrapped in a <button> tag', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(UiButton)
    expect(wrapper.vm).toBeTruthy()
  })

  test('is a <button> tag', () => {
    const wrapper = mount(UiButton)
    expect(wrapper.html()).toContain('<button')
  })
})
