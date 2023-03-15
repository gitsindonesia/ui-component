// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  typescript: {
    shim: false,
  },
  css: ['~/assets/css/globals.scss'],
  extends: [
    // '@gits-id/nuxt-auth'
  ],
  // vite: {
  //   optimizeDeps: {
  //     include: ['yup'],
  //   },
  // }
});
