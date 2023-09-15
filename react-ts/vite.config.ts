import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Routes from 'vite-plugin-router'

export default defineConfig({
  plugins: [react(), Routes()],
})
