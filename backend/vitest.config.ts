import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.spec.ts'],
    exclude: ['node_modules', 'dist', 'frontend/**'],
    coverage: {
      all: true,
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.ts'],
      exclude: ['src/types/**'],
    }
  }
})