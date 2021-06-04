import { shallowMount } from '@vue/test-utils';
import ListTitle from '@/components/ListTitle.vue';

describe('List Title component', () => {
  const wrapper = shallowMount(ListTitle);

  it('should validate component name', () => {
    // THEN
    expect(ListTitle.name).toBe('ListTitle');
  });

  it('should validate props value', async () => {
    // GIVEN
    const text = 'any_text';
    // WHEN
    await wrapper.setProps({ text });
    // THEN
    expect(wrapper.props().text).toBe(text);
  });
});
