import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    exclude: ['./src/**/**.stories.ts', './src/**/**.stories.tsx'],
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GitsUi',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        '@morpheme/alert',
        '@morpheme/app-bar',
        '@morpheme/autocomplete',
        '@morpheme/avatar',
        '@morpheme/badge',
        '@morpheme/bottom-sheet',
        '@morpheme/breadcrumbs',
        '@morpheme/button',
        '@morpheme/card',
        '@morpheme/collapsible',
        '@morpheme/container',
        '@morpheme/dropdown',
        '@morpheme/editor',
        '@morpheme/forms',
        '@morpheme/icon',
        '@morpheme/list',
        '@morpheme/logo',
        '@morpheme/menu',
        '@morpheme/menus',
        '@morpheme/modal',
        '@morpheme/multi-select',
        '@morpheme/nav-drawer',
        '@morpheme/navbar',
        '@morpheme/pagination',
        '@morpheme/progress-bar',
        '@morpheme/rating',
        '@morpheme/select',
        '@morpheme/shimmer',
        '@morpheme/spinner',
        '@morpheme/stats',
        '@morpheme/stepper',
        '@morpheme/switch',
        '@morpheme/table',
        '@morpheme/tabs',
        '@morpheme/tailwind-components',
        '@morpheme/tailwind-config',
        '@morpheme/textarea',
        '@morpheme/theme',
        '@morpheme/toast',
        '@morpheme/tooltip',
        '@morpheme/utils',
        '@morpheme/text',
        '@morpheme/app-shell',
        '@morpheme/progress-circular',
        '@headlessui/vue',
        '@vue/test-utils',
        'vue',
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
