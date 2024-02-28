import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

const env = loadEnv('', process.cwd());

const port = parseInt(env.VITE_PORT) || 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port,
  },
  preview: {
    port,
  },
  resolve: {
    alias: {
      '@': './src/',
      '@api': './src/api/',
      '@interfaces': './src/commons/interfaces/',
      '@stores': './src/commons/stores/',
      '@styles': './src/commons/styles/',
      '@utils': './src/commons/utils/',
      '@components': './src/components/',
      '@layouts': './src/layouts/',
      '@routes': './src/routes/',
    },
  },
});
