import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ahmedali-portfolio/',  // 👈 this must match the GitHub repo name
  plugins: [react()],
})
