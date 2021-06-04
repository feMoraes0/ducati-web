import { shallowMount } from '@vue/test-utils';
import ColourSelector from '@/components/ColourSelector.vue';

describe('Colour Selector Component', () => {
  const colours = ['colour_1', 'colour_2', 'colour_3'];
  const activated = 0;
  const wrapper = shallowMount(ColourSelector, {
    propsData: {
      colours,
      activated,
    },
  });

  it('should validate component name', () => {
    // THEN
    expect(ColourSelector.name).toBe('ColourSelector');
  });

  it('should validate initial prop values', () => {
    // THEN
    expect(wrapper.props().activated).toEqual(activated);
    expect(wrapper.props().colours).toEqual(colours);
  });

  it('should validate selectColour function', () => {
    // GIVEN
    const id = 0;
    // WHEN
    wrapper.vm.selectColour(id);
    // THEN
    expect(wrapper.emitted().selectByColour).toBeTruthy();
    expect(wrapper.emitted().selectByColour.length).toEqual(1);
    expect(wrapper.emitted().selectByColour[0]).toEqual([id]);
  });
});
