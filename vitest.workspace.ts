import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './packages/*/vitest.config.ts',
  './packages/ui/vitest.config.ts'
])
