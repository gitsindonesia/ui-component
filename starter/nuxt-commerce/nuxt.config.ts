// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],

  typescript: {
    shim: false,
  },

  css: ['~/assets/css/globals.scss'],

  // vite: {
  //   optimizeDeps: {
  //     include: ['yup'],
  //   },
  // }
  extends: [
    // '@morpheme/nuxt-auth'
  ],

  devtools: {
    enabled: true
  }
});
