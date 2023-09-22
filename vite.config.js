import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.jsx', 
    },
  },
  plugins: [react()],
  base: '/react-timer-app/', 
  server: {
    open: true, 
    port: 5173,
  },
});

