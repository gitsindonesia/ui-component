// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@gits-id/ui-nuxt', '@sidebase/nuxt-auth'],
  typescript: {
    shim: false,
  },
});
