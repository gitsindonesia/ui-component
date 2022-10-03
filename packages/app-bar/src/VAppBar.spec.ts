import {mount} from '@vue/test-utils';
import {
  defaultColors,
  defaultShadows,
  defaultSizes,
} from '@gits-id/theme/defaultTheme';
import {describe, expect, test} from 'vitest';
import VAppBar from './VAppBar.vue';

describe('VAppBar', () => {
  test('mount component', () => {
    expect(VAppBar).toBeTruthy();

    const wrapper = mount(VAppBar);

    expect(wrapper.html()).toContain('app-bar');
    expect(wrapper.vm.modelValue).toBe(true);
  });

  test('fixed', () => {
    const wrapper = mount(VAppBar, {
      props: {
        fixed: true,
      },
    });

    expect(wrapper.html()).toContain('app-bar--fixed');
    expect(wrapper.vm.fixed).toBe(true);
  });

  test('sticky', () => {
    const wrapper = mount(VAppBar, {
      props: {
        sticky: true,
      },
    });

    expect(wrapper.html()).toContain('app-bar--sticky');
    expect(wrapper.vm.sticky).toBe(true);
  });

  test('bordered', () => {
    const wrapper = mount(VAppBar, {
      props: {
        bordered: true,
      },
    });

    expect(wrapper.html()).toContain('app-bar--bordered');
    expect(wrapper.vm.bordered).toBe(true);
  });

  test('shadow', () => {
    defaultShadows.forEach((shadow) => {
      const wrapper = mount(VAppBar, {
        props: {
          shadow,
        },
      });

      expect(wrapper.html()).toContain('app-bar--shadow');
    });
  });

  test('color', () => {
    defaultColors.forEach((color) => {
      const wrapper = mount(VAppBar, {
        props: {
          color,
        },
      });
      expect(wrapper.html()).toContain(`app-bar-${color}`);
    });
  });

  test('size', () => {
    defaultSizes.forEach((size) => {
      const wrapper = mount(VAppBar, {
        props: {
          size,
        },
      });
      expect(wrapper.html()).toContain(`app-bar--${size}`);
    });
  });

  test('transition', () => {
    const wrapper = mount(VAppBar, {
      props: {
        transition: 'slide-down',
      },
    });
    expect(wrapper).toBeTruthy();
  });
});
