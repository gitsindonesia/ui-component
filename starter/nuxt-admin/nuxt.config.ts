// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@gits-id/ui-nuxt',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
        ],
      },
    ],
    '@nuxtjs/color-mode',
  ],
  typescript: {
    shim: false,
  },
  // https://gitsindonesia.github.io/ui-component/guide/nuxt.html#options
  gitsUi: {
    // enable dark mode
    darkMode: true,
  },
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },
  extends: [
    '@gits-id/nuxt-auth'
  ],
  vite: {
    optimizeDeps: {
      include: ['yup']
    }
  }
});
