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
      '@interfaces': './src/common/interfaces/',
      '@stores': './src/common/stores/',
      '@styles': './src/common/styles/',
      '@utils': './src/common/utils/',
      '@components': './src/components/',
      '@layouts': './src/layouts/',
      '@routes': './src/routes/',
    },
  },
});
