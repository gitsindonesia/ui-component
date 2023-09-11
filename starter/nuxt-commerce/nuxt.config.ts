// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image'],

  typescript: {
    shim: false,
  },

  css: ['~/assets/css/globals.scss'],

  extends: [
    // '@morpheme/nuxt-auth'
  ],

  devtools: {
    enabled: true,
  },

  morpheme: {
    theme: 'morpheme',
    sass: true,
    darkMode: false,
  },
});
