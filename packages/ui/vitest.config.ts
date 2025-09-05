import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/*.stories.ts',
        '**/*.d.ts',
        'src/index.ts',
        'src/plugin.ts',
        'src/component-resolver.ts',
        'src/vue.d.ts',
        'src/colors.ts',
        'src/editor.js',
        'src/quill-editor.js',
        'src/stories/',
        'vite.config.js',
        'vitest.config.ts'
      ],
      thresholds: {
        global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
