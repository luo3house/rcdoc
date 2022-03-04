import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: false,
  clean: true,
  outDir: 'lib',
  format: ['cjs'],
  watch: process.env.NODE_ENV === 'development'
})