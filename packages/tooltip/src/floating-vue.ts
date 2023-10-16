import type { Plugin } from 'vue';
import FloatingVue from 'floating-vue';

export const FloatingVuePlugin: Plugin = {
  install: (app) => {
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