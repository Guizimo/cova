import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // 只在生产环境下设置 base
  base: command === 'serve' ? '/' : '/cova/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}));
