import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: 'localhost',
    port: 5173,
    open: true, // Automatically open the browser
    historyApiFallback: true // Ensure SPA routes work correctly
  },
  base: './' // Set to relative path for proper asset loading
});
