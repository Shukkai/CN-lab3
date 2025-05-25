import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.{ts,js}'],
    exclude: ['node_modules', 'dist', 'frontend/**'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage'
    }
  }
})