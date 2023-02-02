// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss'],
  typescript: {
    shim: false,
  },
  extends: [
    "@gits-id/nuxt-auth",
    "@gits-id/nuxt-admin",
  ],
  vite: {
    optimizeDeps: {
      include: ['yup']
    }
  }
});
