import { shallowMount } from '@vue/test-utils';
import TableData from '@/components/TableData.vue';
import ListTitle from '@/components/ListTitle.vue';
import ListInfo from '@/components/ListInfo.vue';

describe('Table Data component', () => {
  const wrapper = shallowMount(TableData);

  it('should validate component name', () => {
    // THEN
    expect(TableData.name).toBe('TableData');
  });

  it('should validate child components', () => {
    // THEN
    expect(TableData.components).toEqual({
      ListTitle,
      ListInfo,
    });
  });

  it('should validate props value when initialized', async () => {
    // GIVEN
    const infos = {};
    // WHEN
    await wrapper.setProps({ infos });
    // THEN
    expect(wrapper.props().infos).toEqual(infos);
  });
});
