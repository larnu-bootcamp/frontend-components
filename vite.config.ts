import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { test } from 'vitest'
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),EnvironmentPlugin('all')],
  test: {
    environment: "jsdom",
    globals: true
  }
})
