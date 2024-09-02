import MorphemeUI from '..';

export default defineNuxtConfig({
  ssr: true,

  modules: [
    MorphemeUI,
    '@nuxtjs/tailwindcss',
  ],

  morpheme: {
    darkMode: true,
    sass: true,
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