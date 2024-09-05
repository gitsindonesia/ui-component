import {shallowMount} from '@vue/test-utils';
import AvatarGroup from './AvatarGroup.vue';

describe('AvatarGroup', () => {
  it('renders with default props', () => {
    const wrapper = shallowMount(AvatarGroup);
    expect(wrapper.classes()).toContain('avatar-group');
    expect(wrapper.classes()).toContain('avatar-group--md');
    expect(wrapper.vm.computedStyles).toEqual({});
  });

  it('renders with custom spacing prop', () => {
    const wrapper = shallowMount(AvatarGroup, {
      props: {
        spacing: 'xl',
      },
    });
    expect(wrapper.classes()).toContain('avatar-group');
    expect(wrapper.classes()).toContain('avatar-group--xl');
    expect(wrapper.vm.computedStyles).toEqual({});
  });

  it('renders with custom numeric spacing prop', () => {
    const wrapper = shallowMount(AvatarGroup, {
      props: {
        spacing: 20,
      },
    });
    expect(wrapper.classes()).toContain('avatar-group');
    expect(wrapper.vm.computedStyles).toEqual({
      '--avatar-group-spacing': '20px',
    });
  });

  it('computes custom styles for non-default spacing', () => {
    const wrapper = shallowMount(AvatarGroup, {
      props: {
        spacing: '2xl',
      },
    });
    expect(wrapper.vm.isCustomSpacing).toBe(true);
    expect(wrapper.vm.computedStyles).toEqual({});
  });
});
