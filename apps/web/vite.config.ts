import Adonisjs from '@adonisjs/vite/client';
import TailwindCSS from '@tailwindcss/vite';
import Vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [TailwindCSS(), Vue(), Adonisjs({ entryPoints: ['inertia/app.ts'], reload: ['resources/views/**/*.edge'] })],

	resolve: {
		alias: {
			'~/': `${import.meta.dirname}/inertia/`,
			'@generated': `${import.meta.dirname}/.adonisjs/client/`,
		},
	},

	server: {
		watch: {
			ignored: ['**/storage/**', '**/tmp/**'],
		},
	},
});
