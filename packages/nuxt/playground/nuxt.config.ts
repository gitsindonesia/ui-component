import GitsUIModule from '..';

export default defineNuxtConfig({
  modules: [GitsUIModule, '@nuxtjs/tailwindcss'],
  ssr: false,
  gitsUi: {
    darkMode: true,
  },
});
