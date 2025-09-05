/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['packages/**/src/**/*.spec.ts'],
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.d.ts',
        '**/*.config.ts',
        '**/*.config.js',
        '**/coverage/**',
        '**/stories/**',
        '**/docs/**',
        '**/starter/**',
        '**/types/**',
        '**/.storybook/**',
        '**/build/**',
        '**/temp/**'
      ]
    }
  }
})
