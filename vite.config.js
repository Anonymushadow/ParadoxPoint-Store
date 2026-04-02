import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      '@components': '/src/components',  /* Cuando vite vean @components, lo va a reemplazar por /src/components */
      '@styles': '/src/styles',
      '@config': '/src/config',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@modules': '/src/modules',
      '@data': '/src/data',
      '@contexts': '/src/contexts',
      '@slices': '/src/slices',
      '@store': '/src/store',
    }
  }
})
