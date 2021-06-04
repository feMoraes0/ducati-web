import { shallowMount } from '@vue/test-utils';
import ListInfo from '@/components/ListInfo.vue';

describe('List Info component', () => {
  const wrapper = shallowMount(ListInfo);

  it('should validate component name', () => {
    // THEN
    expect(ListInfo.name).toEqual('ListInfo');
  });

  it('should validate props', async () => {
    // GIVEN
    const text = 'any_text';
    await wrapper.setProps({ text });
    // THEN
    expect(wrapper.props().text).toEqual(text);
  });
});
