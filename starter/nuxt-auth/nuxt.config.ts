// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@morpheme/nuxt', '@sidebase/nuxt-auth'],
  typescript: {
    shim: false,
  },
  auth: {
    enableGlobalAppMiddleware: true,
  },
  vite: {
    optimizeDeps: {
      include: ['yup'],
    },
  },
  morpheme: {
    theme: 'morpheme',
    sass: true,
    darkMode: false,
  },
});
