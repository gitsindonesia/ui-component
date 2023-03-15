// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  typescript: {
    shim: false,
  },
  css: ['~/assets/css/globals.scss'],
  extends: [
    // '@morpheme/nuxt-auth'
  ],
  // vite: {
  //   optimizeDeps: {
  //     include: ['yup'],
  //   },
  // }
});
