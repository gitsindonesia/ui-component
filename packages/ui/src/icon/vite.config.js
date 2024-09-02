import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    exclude: ['./src/**/**.stories.ts'],
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VIcon',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
    rollupOptions: {
      external: [
        'vue',
        '@iconify/vue',
        '@iconify/vue/dist/offline',
        '@morphemeicons/vue',
        '@morphemeicons/vue/untitled/esm/index',
        '@morphemeicons/vue/remix/esm/index',
        '@morphemeicons/vue/iconsax/outline/esm/index',
        '@morphemeicons/vue/iconsax/bulk/esm/index',
        '@morphemeicons/vue/iconsax/broken/esm/index',
        '@morphemeicons/vue/iconsax/solid/esm/index',
        '@morphemeicons/vue/iconsax/twotone/esm/index',
        '@morphemeicons/vue/iconsax/linear/esm/index',
      ],
      output: {
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
