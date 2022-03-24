import {fileURLToPath, URL} from 'url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: [
      '@ckeditor/ckeditor5-build-classic',
      '@ckeditor/ckeditor5-vue',
      'yup',
    ],
  },
});
