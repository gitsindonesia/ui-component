// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  typescript: {
    shim: false,
  },

  morpheme: {
    theme: 'morpheme',
    sass: true,
    darkMode: true,
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.scss'],

  colorMode: {
    classSuffix: '',
  },
});
