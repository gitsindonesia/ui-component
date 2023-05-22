import MorphemeUI from '..';

export default defineNuxtConfig({
  modules: [MorphemeUI, '@nuxtjs/tailwindcss'],
  morpheme: {
    darkMode: true,
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
});
