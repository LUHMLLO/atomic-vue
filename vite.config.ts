import path from 'path';
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
			'@': path.resolve(__dirname, './src/'),
			'@api': path.resolve(__dirname, './src/api/'),
			'@interfaces': path.resolve(__dirname, './src/commons/interfaces/'),
			'@stores': path.resolve(__dirname, './src/commons/stores/'),
			'@styles': path.resolve(__dirname, './src/commons/styles/'),
			'@utils': path.resolve(__dirname, './src/commons/utils/'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@layouts': path.resolve(__dirname, './src/layouts/'),
			'@routes': path.resolve(__dirname, './src/routes/'),
		},
	},
});
