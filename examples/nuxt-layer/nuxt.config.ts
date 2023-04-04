// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss'],
  typescript: {
    shim: false,
  },
  extends: ['@morpheme/nuxt-auth', '@morpheme/nuxt-admin'],
  vite: {
    optimizeDeps: {
      include: ['vue3-apexcharts'],
    },
  },
});
