import MorphemeUI from '..';

export default defineNuxtConfig({
  modules: [MorphemeUI, '@nuxtjs/tailwindcss'],

  morpheme: {
    darkMode: true,
    sass: false,
    css: true,
    theme: 'morpheme',
    experimentalComponents: true,
  },

  vite: {
    optimizeDeps: {
      include: [
        '@ckeditor/ckeditor5-build-classic',
        '@ckeditor/ckeditor5-vue',
        'consola',
        'quill',
        'quill-delta'
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2024-08-29',
});
