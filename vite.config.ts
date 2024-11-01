import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  // Add base URL for Amplify
  base: '/',
  // Ensure proper handling of client-side routing
  server: {
    host: true,
    strictPort: true
  }
});