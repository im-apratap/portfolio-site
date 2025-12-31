import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure public folder files are included in build
    copyPublicDir: true,
    // Optimize build output
    rollupOptions: {
      output: {
        // Better chunking for production
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'emailjs-vendor': ['@emailjs/browser']
        }
      }
    }
  },
  // Public folder is automatically served at root in both dev and production
  publicDir: 'public'
})
