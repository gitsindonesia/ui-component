import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  console.lo('loading nuxt plugin', nuxtApp)

  // Only run on client side to avoid SSR issues with floating-vue
  if (typeof window !== 'undefined') {
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
