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
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Badge',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
    rollupOptions: {
      external: ['vue', '@gits-id/icon'],
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
