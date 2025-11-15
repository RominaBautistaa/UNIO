import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/servicio\/estrategia-creativa$/, to: '/servicio-estrategia.html' },
        { from: /^\/servicio\/automatizacion-campanas$/, to: '/servicio-automatizacion.html' },
        { from: /^\/servicio\/metricas-inteligentes$/, to: '/servicio-metricas.html' },
      ],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        estrategia: './servicio-estrategia.html',
        automatizacion: './servicio-automatizacion.html',
        metricas: './servicio-metricas.html',
      },
    },
  },
});
