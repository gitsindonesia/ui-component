import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Add a dummy directive for SSR to prevent errors
  if (import.meta.client) {
    // SSR: Add dummy directive to prevent getSSRProps errors
    nuxtApp.vueApp.directive('tooltip', {
      getSSRProps: () => ({}),
      mounted: () => {},
      updated: () => {},
      unmounted: () => {}
    });
  } else {
    // Client: Load floating-vue with real directive
    try {
      const { default: FloatingVue } = await import('floating-vue');

      nuxtApp.vueApp.use(FloatingVue, {
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
    } catch (error) {
      console.warn('Failed to load floating-vue:', error);
    }
  }
})
