import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // script: {
      //   propsDestructure: true,
      //   defineModel: true
      // }
    }),
    // Icons({
    //   compiler: 'vue3',
    //   // expiremental
    //   autoInstall: true,
    // }),
  ],
  esbuild: {
    exclude: ['./src/**/**.stories.ts'],
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'GitsUi',
      formats: ['es'],
    },
    rollupOptions: {
      plugins: [
        {
          name: 'remove-collection-handlers',
          transform(code, id) {
            if (
              id.endsWith('reactivity.esm-bundler.js') ||
              id.endsWith('runtime-core.esm-bundler.js')
            ) {
              return code
                .replace(`mutableCollectionHandlers,`, `null,`)
                .replace(`readonlyCollectionHandlers,`, `null,`);
            }
          },
        },
      ],
    },
  },
  optimizeDeps: {
    include: ['yup', 'fast-deep-equal'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // include: ['packages/**/*.{test,spec}.{js,ts}'],
    // exclude: [...configDefaults.exclude, 'dist', 'examples', 'docs', 'starter'],
    // setupFiles: "./test/unit/setup-test.ts",
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html', 'lcov', 'json'],
    },
    reporters: ['html', 'verbose', 'json', 'vitest-sonar-reporter'],
    outputFile: {
      json: 'coverage/test-report.json',
      'vitest-sonar-reporter': 'coverage/test-report.xml',
    },
    threads: false,
  },
});
