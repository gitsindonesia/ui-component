// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/ui-nuxt', '@nuxtjs/tailwindcss'],
  typescript: {
    shim: false,
  },
});
