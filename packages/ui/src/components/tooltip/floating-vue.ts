import type { Plugin } from 'vue';
import FloatingVue from 'floating-vue';

export const FloatingVuePlugin: Plugin = {
  install: (app) => {
    // Only install on client side to avoid SSR issues
    if (typeof window !== 'undefined') {
      app.use(FloatingVue, {
        themes: {
          'tooltip-black': {
            $extend: 'tooltip',
            $resetCss: true,
            disposeTimeout: 100000,
          },
          'tooltip-white': {
            $extend: 'tooltip',
            $resetCss: true,
            disposeTimeout: 100000,
          },
        }
      })
    }
  }
}