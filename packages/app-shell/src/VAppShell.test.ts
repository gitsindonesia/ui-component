import {shallowMount} from '@vue/test-utils';
import VAppShell from './VAppShell.vue';

describe('VAppShell', () => {
  test('renders properly with default props', () => {
    const wrapper = shallowMount(VAppShell);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes('flex')).toBe(true);
    expect(wrapper.classes('flex-col')).toBe(true);
    expect(wrapper.classes('v-app-shell')).toBe(true);
    expect(wrapper.classes('h-screen')).toBe(true);
  });

  test('renders a fluid main element when the fluid prop is set', () => {
    const wrapper = shallowMount(VAppShell, {
      props: {
        fluid: true,
      },
    });
    expect(
      wrapper.find('.v-app-shell-main').classes('v-app-shell--fluid'),
    ).toBe(true);
  });

  test('renders a padded content element when the paddedContent prop is set', () => {
    const wrapper = shallowMount(VAppShell, {
      props: {
        paddedContent: true,
      },
    });
    expect(wrapper.find('.v-app-shell-content').classes('px-4')).toBe(true);
    expect(wrapper.find('.v-app-shell-content').classes('lg:px-6')).toBe(true);
    expect(wrapper.find('.v-app-shell-content').classes('py-4')).toBe(true);
  });

  test('renders a padded container element when the paddedContainer prop is set', () => {
    const wrapper = shallowMount(VAppShell, {
      props: {
        paddedContainer: true,
      },
    });
    expect(wrapper.find('.v-app-shell-container').classes('px-4')).toBe(true);
    expect(wrapper.find('.v-app-shell-container').classes('py-4')).toBe(true);
  });

  test('renders additional classes on main element when mainClass prop is set', () => {
    const wrapper = shallowMount(VAppShell, {
      props: {
        mainClass: 'my-main-class',
      },
    });
    expect(wrapper.find('.v-app-shell-main').classes('my-main-class')).toBe(
      true,
    );
  });

  test('renders additional classes on content element when contentClass prop is set', () => {
    const wrapper = shallowMount(VAppShell, {
      props: {
        contentClass: 'my-content-class',
      },
    });
    expect(
      wrapper.find('.v-app-shell-content').classes('my-content-class'),
    ).toBe(true);
  });

  test('renders additional classes on container element when containerClass prop is set', () => {
    const wrapper = shallowMount(VAppShell, {
      props: {
        containerClass: 'my-container-class',
      },
    });
    expect(
      wrapper.find('.v-app-shell-container').classes('my-container-class'),
    ).toBe(true);
  });
});
