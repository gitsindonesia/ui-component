import { mount } from '@vue/test-utils';
import VCollapse from './VCollapse.vue';

describe('VCollapse', () => {
  it('renders the component with default props', () => {
    const wrapper = mount(VCollapse);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().duration).toBe(300);
    expect(wrapper.props().transition).toBe('ease-in-out');
    expect(wrapper.props().show).toBe(false);
    expect(wrapper.props().navbar).toBe(false);
    expect(wrapper.emitted().finish).toBeFalsy();
  });

  it('renders the component with custom props', () => {
    const wrapper = mount(VCollapse, {
      props: {
        duration: 500,
        transition: 'linear',
        show: true,
        navbar: true,
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().duration).toBe(500);
    expect(wrapper.props().transition).toBe('linear');
    expect(wrapper.props().show).toBe(true);
    expect(wrapper.props().navbar).toBe(true);
    expect(wrapper.emitted().finish).toBeFalsy();
  });

  it('collapses and expands the component when show prop changes', async () => {
    const wrapper = mount(VCollapse);

    expect(wrapper.vm.visible).toBe(false);
    expect(wrapper.vm.collapsing).toBe(false);

    wrapper.setProps({ show: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.visible).toBe(true);
    expect(wrapper.vm.collapsing).toBeTruthy();

    wrapper.setProps({ show: false });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.visible).toBe(false);
    expect(wrapper.vm.collapsing).toBeTruthy();
  });
});
