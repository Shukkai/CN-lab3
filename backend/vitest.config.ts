import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.spec.ts'],
    exclude: ['node_modules', 'dist', 'frontend/**'],
    coverage: {
      all: true,
      reporter: ['text', 'json-summary'], // ← 這裡要加 json-summary
      reportsDirectory: './coverage',
      include: ['src/**/*.ts'],
      exclude: ['src/types/**'],
    }
  }
})