export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['src']
    },
    exclude: ['node_modules', 'dist', 'frontend/**'] // ✅ 排除 frontend 完整資料夾
  }
})