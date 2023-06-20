import { mount } from '@vue/test-utils';
import VBottomNavigation from './VBottomNavigation.vue';

describe('VBottomNavigation', () => {
  it('renders the component with default props', () => {
    const wrapper = mount(VBottomNavigation);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().modelValue).toBe(true);
    expect(wrapper.props().color).toBe('primary');
    expect(wrapper.props().grow).toBe(false);
    expect(wrapper.props().fixed).toBe(true);
    expect(wrapper.props().defaultActive).toBe(0);
    expect(wrapper.props().transition).toBe('slide-up');
    expect(wrapper.props().hideSlider).toBe(false);
    expect(wrapper.vm.items).toEqual([]);
    expect(wrapper.vm.active).toBe(undefined);
  });

  it('renders the component with custom props', () => {
    const wrapper = mount(VBottomNavigation, {
      props: {
        modelValue: false,
        color: 'secondary',
        grow: true,
        fixed: false,
        defaultActive: 1,
        transition: 'fade',
        hideSlider: true,
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().modelValue).toBe(false);
    expect(wrapper.props().color).toBe('secondary');
    expect(wrapper.props().grow).toBe(true);
    expect(wrapper.props().fixed).toBe(false);
    expect(wrapper.props().defaultActive).toBe(1);
    expect(wrapper.props().transition).toBe('fade');
    expect(wrapper.props().hideSlider).toBe(true);
    expect(wrapper.vm.items).toEqual([]);
    expect(wrapper.vm.active).toBe(undefined);
  });

  it('opens the component when open method is called', async () => {
    const wrapper = mount(VBottomNavigation, {
      props: {
        modelValue: false,
      },
    });

    expect(wrapper.props().modelValue).toBe(false);

    wrapper.vm.open();
  });

  it('closes the component when close method is called', async () => {
    const wrapper = mount(VBottomNavigation, {
      props: {
        modelValue: true,
      },
    });

    expect(wrapper.props().modelValue).toBe(true);

    wrapper.vm.close();
  });
});
