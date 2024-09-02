import MorphemeUI from '..';

export default defineNuxtConfig({
  ssr: false,

  modules: [
    MorphemeUI,
    '@nuxtjs/tailwindcss',
    'floating-vue/nuxt',
  ],

  morpheme: {
    darkMode: true,
    sass: false,
    theme: 'morpheme',
    experimentalComponents: true,
  },

  vite: {
    optimizeDeps: {
      include: [
        '@ckeditor/ckeditor5-build-classic',
        '@ckeditor/ckeditor5-vue',
        'consola',
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2024-08-29',
});