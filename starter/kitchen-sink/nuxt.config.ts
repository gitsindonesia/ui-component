// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss', '@nuxt/content'],

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

  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
    preload: [
      'json',
      'js',
      'ts',
      'html',
      'css',
      'vue',
      'diff',
      'shell',
      'markdown',
      'yaml',
      'bash',
      'ini',
    ],
  },

  css: ['~/assets/css/global.css'],
});
