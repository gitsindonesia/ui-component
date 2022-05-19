import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VAppBar from './VAppBar.vue';

describe('VAppBar', () => {
  test('mount component', () => {
    expect(VAppBar).toBeTruthy();

    const wrapper = mount(VAppBar, {
      props: {
        modelValue: true,
        mini: false,
        fixed: false,
        drawer: false,
        dark: false,
        hideToggle: false,
        defaultHidden: false,
      },
    });

    expect(wrapper.html()).toContain('v-app-bar');
    expect(wrapper.vm.modelValue).toBe(true);
    expect(wrapper.vm.mini).toBe(false);
    expect(wrapper.vm.fixed).toBe(false);
    expect(wrapper.vm.drawer).toBe(false);
    expect(wrapper.vm.dark).toBe(false);
    expect(wrapper.vm.hideToggle).toBe(false);
    expect(wrapper.vm.defaultHidden).toBe(false);
  });

  test('mini', () => {
    const wrapper = mount(VAppBar, {
      props: {
        modelValue: true,
        mini: true,
        fixed: false,
        drawer: false,
        dark: false,
        hideToggle: false,
        defaultHidden: false,
      },
    });

    expect(wrapper.html()).toContain('v-app-bar-mini');
    expect(wrapper.vm.mini).toBe(true);
  });

  test('drawer', () => {
    const wrapper = mount(VAppBar, {
      props: {
        modelValue: true,
        mini: false,
        fixed: false,
        drawer: true,
        dark: false,
        hideToggle: false,
        defaultHidden: false,
      },
    });

    expect(wrapper.html()).toContain('v-app-bar-drawer');
    expect(wrapper.vm.drawer).toBe(true);
  });

  test('fixed', () => {
    const wrapper = mount(VAppBar, {
      props: {
        modelValue: true,
        mini: false,
        fixed: true,
        drawer: false,
        dark: false,
        hideToggle: false,
        defaultHidden: false,
      },
    });

    expect(wrapper.html()).toContain('fixed w-full');
    expect(wrapper.vm.fixed).toBe(true);
  });

  test('dark', () => {
    const wrapper = mount(VAppBar, {
      props: {
        modelValue: true,
        mini: false,
        fixed: false,
        drawer: false,
        dark: true,
        hideToggle: false,
        defaultHidden: false,
      },
    });

    expect(wrapper.html()).toContain('bg-gray-900 text-white');
    expect(wrapper.vm.dark).toBe(true);
  });

  test('defaultHidden', () => {
    const wrapper = mount(VAppBar, {
      props: {
        modelValue: true,
        mini: false,
        fixed: false,
        drawer: false,
        dark: false,
        hideToggle: false,
        defaultHidden: true,
      },
    });

    expect(wrapper.html()).toContain('flex sm:hidden');
    expect(wrapper.vm.defaultHidden).toBe(true);
  });

  test('hideToggle', () => {
    const wrapper = mount(VAppBar, {
      props: {
        modelValue: true,
        mini: false,
        fixed: false,
        drawer: false,
        dark: false,
        hideToggle: true,
        defaultHidden: false,
      },
    });

    expect(wrapper.get('[data-hide-toggle]').html()).toBeTruthy();
  });
});
