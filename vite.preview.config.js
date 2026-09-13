import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Throwaway config: single-chunk build so the output can be inlined into one
// preview.html (background dev servers aren't available in this environment).
export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
