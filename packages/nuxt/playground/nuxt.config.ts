import { defineNuxtConfig } from "nuxt";
import GitsUIModule from "..";

export default defineNuxtConfig({
  modules: [GitsUIModule, "@nuxtjs/tailwindcss"],
  ssr: false,
  gitsUi: {
    //
  },
});
