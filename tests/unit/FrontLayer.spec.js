import { shallowMount } from '@vue/test-utils';
import FrontLayer from '@/components/FrontLayer.vue';

describe('Front Layer Component', () => {
  const hasChanged = true;
  const image = 'any_image';
  const wrapper = shallowMount(FrontLayer, {
    propsData: {
      image,
    },
  });

  it('should validate component name', () => {
    // THEN
    expect(FrontLayer.name).toBe('FrontLayer');
  });

  it('should validate initial data value', () => {
    // THEN
    expect(wrapper.vm.hasChanged).toEqual(hasChanged);
  });

  it('should validate initial props values', () => {
    // THEN
    expect(wrapper.props().image).toEqual(image);
  });

  it('should invert hasChanged value when watch function image is called', () => {
    // GIVEN
    wrapper.setData({ hasChanged });
    // WHEN
    wrapper.vm.$options.watch.image.call(wrapper.vm);
    // THEN
    expect(wrapper.vm.hasChanged).toEqual(!hasChanged);
  });

  it('should invert hasChanged value when afterLeaveControlAnimation function is called', () => {
    // GIVEN
    wrapper.setData({ hasChanged });
    // WHEN
    wrapper.vm.afterLeaveControlAnimation();
    // THEN
    expect(wrapper.vm.hasChanged).toEqual(!hasChanged);
  });

  it('should emit goNext event with a direction when goNext is called', () => {
    // GIVEN
    const direction = 'left';
    // WHEN
    wrapper.vm.goNext(direction);
    // THEN
    expect(wrapper.emitted().goNext).toBeTruthy();
    expect(wrapper.emitted().goNext.length).toEqual(1);
    expect(wrapper.emitted().goNext[0]).toEqual([direction]);
  });
});
