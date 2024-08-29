// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@morpheme/nuxt',
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
  morpheme: {
    theme: 'morpheme',
    sass: true,
    darkMode: true,
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },

  extends: ['@morpheme/nuxt-auth'],

  vite: {
    optimizeDeps: {
      include: ['yup'],
    },
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-08-29',
});