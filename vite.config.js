import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/sass/main.scss";'
      }
    }
  },

  server: {
    host: true,
    port: 3003,
    watch: {
      usePolling: true
    },
    hmr: false
  }
});
