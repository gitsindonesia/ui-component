import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    exclude: ['./src/**/**.stories.ts'],
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'GitsUi',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        '@heroicons/vue/outline',
        '@heroicons/vue/solid',
        '@headlessui/vue',
        '@gits-id/alert',
        '@gits-id/app-bar',
        '@gits-id/badge',
        '@gits-id/breadcrumbs',
        '@gits-id/button',
        '@gits-id/card',
        '@gits-id/checkbox',
        '@gits-id/collapsible',
        '@gits-id/container',
        '@gits-id/dropdown',
        '@gits-id/editor',
        '@gits-id/file-input',
        '@gits-id/form-group',
        '@gits-id/form-select',
        '@gits-id/input',
        '@gits-id/layouts',
        '@gits-id/logo',
        '@gits-id/menu',
        '@gits-id/menus',
        '@gits-id/modal',
        '@gits-id/multi-select',
        '@gits-id/nav-drawer',
        '@gits-id/navbar',
        '@gits-id/pages',
        '@gits-id/pagination',
        '@gits-id/progress-bar',
        '@gits-id/radio',
        '@gits-id/select',
        '@gits-id/services',
        '@gits-id/spinner',
        '@gits-id/stats',
        '@gits-id/switch',
        '@gits-id/table',
        '@gits-id/tabs',
        '@gits-id/tailwind-components',
        '@gits-id/tailwind-config',
        '@gits-id/textarea',
        '@gits-id/toast',
        '@gits-id/tooltip',
        '@gits-id/types',
        '@gits-id/utils',
        'vee-validate',
        'vue-router',
        'pinia'
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
      resolve: {
        dedupe: 'vue',
      },
    },
  },
});
