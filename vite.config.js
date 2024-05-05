import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
		},
	},
});
