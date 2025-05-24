import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['src']
    },
    exclude: ['node_modules', 'dist', 'frontend/**']
  }
})