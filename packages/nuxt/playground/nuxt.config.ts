import GitsUIModule from '..';

export default defineNuxtConfig({
  modules: [GitsUIModule, '@nuxtjs/tailwindcss'],
  ssr: false,
  gitsUi: {
    css: true,
    sass: false,
  },
});
