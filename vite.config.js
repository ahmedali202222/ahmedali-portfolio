import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  base: '/ahmedali-portfolio/', // EXACT repo name with slashes
  plugins: [react()],
})

