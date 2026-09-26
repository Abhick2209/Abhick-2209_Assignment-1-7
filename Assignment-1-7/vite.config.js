import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Each assignment is its own HTML page, so every one must be listed as a
// build entry — otherwise `vite build` only emits the root index.html.
const assignmentPages = Object.fromEntries(
  [1, 2, 3, 4, 5, 6, 7].map((n) => [
    assignment_${n},
    resolve(import.meta.dirname, src/assignment_${n}/index${n}.html),
  ])
)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        ...assignmentPages,
      },
    },
  },
})