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
  ],
  typescript: {
    shim: false,
  },
  // https://gitsindonesia.github.io/ui-component/guide/nuxt.html#options
  gitsUi: {
    // enable dark mode
    darkMode: true,
  },
});
