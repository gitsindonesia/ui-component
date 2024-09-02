import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    exclude: [
      './src/**/**.stories.ts',
      './src/**/**.stories.tsx'
    ],
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Morpheme',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        '@morpheme/stats',
        '@morpheme/tailwind-components',
        '@morpheme/tailwind-config',
        '@morpheme/utils',
        '@headlessui/vue',
        '@ckeditor/ckeditor5-build-classic',
        '@ckeditor/ckeditor5-vue',
        'vee-validate',
        '@vue/test-utils',
        'vue',
        'floating-vue'
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
