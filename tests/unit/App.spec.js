import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App component', () => {
  const mockCurrent = 0;
  const mockData = [
    {
      id: 0,
      colour: 'fisrt-colour',
    },
    {
      id: 1,
      colour: 'second-colour',
    },
    {
      id: 2,
      colour: 'third-colour',
    },
  ];
  const wrapper = shallowMount(
    App,
    {
      data() {
        return {
          current: mockCurrent,
          data: mockData,
        };
      },
    },
  );

  it('should update current value when goTo is called with valid number', () => {
    // GIVEN
    const parameter = 1;
    // WHEN
    wrapper.vm.goTo(parameter);
    // THEN
    expect(wrapper.vm.current).toBe(parameter);
  });

  it('should not update current value when goTo is called with parameter lower than zero', async () => {
    // GIVEN
    const parameter = -1;
    await wrapper.setData({ current: mockCurrent });
    // WHEN
    wrapper.vm.goTo(parameter);
    // THEN
    expect(wrapper.vm.current).toBe(mockCurrent);
  });

  it('should not update current value when goTo is called with parameter greater than data length', async () => {
    // GIVEN
    const parameter = mockData.length + 1;
    await wrapper.setData({ current: mockCurrent });
    // WHEN
    wrapper.vm.goTo(parameter);
    // THEN
    expect(wrapper.vm.current).toBe(mockCurrent);
  });

  it('should increase data current value when direction is right and current value lower than data length', async () => {
    // GIVEN
    const direction = 'right';
    await wrapper.setData({ current: 1 });
    // WHEN
    wrapper.vm.goNext(direction);
    // THEN
    expect(wrapper.vm.current).toBe(2);
  });

  it('should keep the data current value when direction is right but current value greater than data length', async () => {
    // GIVEN
    const direction = 'right';
    await wrapper.setData({ current: 3 });
    // WHEN
    wrapper.vm.goNext(direction);
    // THEN
    expect(wrapper.vm.current).toBe(3);
  });

  it('should decrease data current value when direction is left and current value greater than zero ', async () => {
    // GIVEN
    const direction = 'left';
    await wrapper.setData({ current: 1 });
    // WHEN
    wrapper.vm.goNext(direction);
    // THEN
    expect(wrapper.vm.current).toBe(0);
  });

  it('should keep data current value when direction is left but current value is equal zero ', async () => {
    // GIVEN
    const direction = 'left';
    await wrapper.setData({ current: 0 });
    // WHEN
    wrapper.vm.goNext(direction);
    // THEN
    expect(wrapper.vm.current).toBe(0);
  });
});
