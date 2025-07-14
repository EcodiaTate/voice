import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4173,  // Use the PORT environment variable (Render) or fallback to 4173 for local
    host: '0.0.0.0',                 // Expose server to all network interfaces
  }
})
