import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Spending-Tracer-React",
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src2/assets'),
      '@components': path.resolve(__dirname, './src2/components'),
      '@pages': path.resolve(__dirname, './src2/pages'),
      '@features': path.resolve(__dirname, './src2/features'),
      '@contexts': path.resolve(__dirname, './src2/contexts'),
      '@hooks': path.resolve(__dirname, './src2/hooks'),
      '@services': path.resolve(__dirname, './src2/services'),
      '@utils': path.resolve(__dirname, "./src2/utils")
    }
  }
})
