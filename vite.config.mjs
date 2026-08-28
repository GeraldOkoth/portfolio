import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    ...(process.env.ANALYZE
      ? [
          visualizer({
            filename: './dist/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
  server: {
    watch: {
      usePolling: true, // Forces Vite to check files periodically for changes
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Uses the latest Sass API for reliable HMR
      },
    },
  },
});
