import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    script: {
      defineModel: true,
      propsDestructure: true
    },
    jsx: true,
    appEntrypoint: '/src/pages/_app'
  }), tailwind()]
});