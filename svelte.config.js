import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapt from '@sveltejs/adapter-static';
import { markdown } from 'svelte-preprocess-markdown';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		markdown(),
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapt(),
		appDir: 'internal',
	}
};

export default config;
