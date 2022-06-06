import { defineNuxtPlugin } from "#app";
import GitsUI from "@gits-id/ui";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("nuxt plugiinnn...");
  nuxtApp.vueApp.use(GitsUI);
});
