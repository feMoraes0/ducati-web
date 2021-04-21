import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import gsap from 'gsap';

describe('Header component', () => {
  const mockNumber = 1.23;
  const wrapper = shallowMount(Header, {
    propsData: {
      number: mockNumber,
    },
  });

  it('should guarantee that label is a number with no decimals', () => {
    // THEN
    expect(wrapper.vm.labelAsInt).toBe('1');
  });

  it('should validate gasp call on watch function', () => {
    // GIVEN
    const spyGasp = jest.spyOn(gsap, 'to');
    // WHEN
    wrapper.vm.$options.watch.number.call(wrapper.vm);
    // THEN
    expect(spyGasp).toHaveBeenCalledTimes(1);
  });
});
