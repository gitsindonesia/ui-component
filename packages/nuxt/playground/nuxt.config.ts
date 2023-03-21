import GitsUIModule from '..';

export default defineNuxtConfig({
  modules: [GitsUIModule, '@nuxtjs/tailwindcss'],
  morpheme: {
    darkMode: true,
  },
  vite: {
    optimizeDeps: {
      include: ['@ckeditor/ckeditor5-build-classic', '@ckeditor/ckeditor5-vue'],
    },
  },
});
