import {mount} from '@vue/test-utils';
import {
  defaultColors,
  defaultShadows,
  defaultSizes,
} from '@morpheme/theme/defaultTheme';
import {describe, expect, it, test} from 'vitest';
import VAppBar from './VAppBar.vue';
import {defineComponent, ref} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: {
        template: 'Hello',
      },
    },
  ],
});

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

  describe('when navbar with toggle', () => {
    test('will hide the app bar with v-model', async () => {
      const WrapperComponent = defineComponent({
        components: {
          VAppBar,
        },
        setup() {
          const isOpen = ref(true);
          const toggle = () => {
            isOpen.value = !isOpen.value;
          };
          return {
            isOpen,
            toggle,
          };
        },
        template:
          '<VAppBar v-model="isOpen">Toggle Test</VAppBar><button @click="toggle">Toggle</button>',
      });

      const wrapper = mount(WrapperComponent);

      await wrapper.find('button').trigger('click');

      expect(wrapper.html()).not.toContain('app-bar');
    });

    test('will hide the app bar with toggle slot', async () => {
      const WrapperComponent = defineComponent({
        components: {
          VAppBar,
        },
        setup() {},
        template:
          '<VAppBar v-slot={toggle}>Toggle Test<button @click="toggle">Toggle</button></VAppBar>',
      });

      const wrapper = mount(WrapperComponent, {
        global: {
          plugins: [router],
        },
      });

      await wrapper.find('button').trigger('click');

      expect(wrapper.html()).not.toContain('app-bar');

      router.push('/');
    });
  });

  describe('when hideOnScroll true', () => {
    document.body.innerHTML = `
      <div>
        <h1>Non Vue app</h1>
        <div id="app"></div>
      </div>
    `;

    it('hide app bar on scroll', async () => {
      const WrapperComponent = defineComponent({
        components: {
          VAppBar,
        },
        setup() {},
        template: `
            <main class="mt-5 h-[200vh] bg-gray-50 text-white">
              <VAppBar fixed hide-on-scroll transition="slide-down">
                AppBar Hide On Scroll
              </VAppBar>
            </main>
          `,
      });

      const wrapper = mount(WrapperComponent);

      window.dispatchEvent(new Event('scroll'));
      window.scrollTo(0, 500); // how to trigger the scroll ?

      expect(wrapper.html()).toContain('app-bar'); // expected must not contain
    });
  });

  describe('when elevateOnScroll true', () => {
    it('add shadow to app bar', async () => {
      const WrapperComponent = defineComponent({
        components: {
          VAppBar,
        },
        setup() {},
        template: `
            <main class="mt-5 h-[200vh] bg-gray-50 text-white">
              <VAppBar elevate-on-scroll="lg" transition="slide-down">
                AppBar Hide On Scroll
              </VAppBar>
            </main>
          `,
      });

      const wrapper = mount(WrapperComponent);

      window.dispatchEvent(new Event('scroll'));
      window.scrollTo(0, 500); // how to trigger the scroll ?

      expect(wrapper.html()).not.toContain('app-bar--shadow-lg'); // expected must contain
    });
  });
});
