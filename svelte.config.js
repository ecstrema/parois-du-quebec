import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapt from '@sveltejs/adapter-static';
import { markdown } from 'svelte-preprocess-markdown';
import { imagePreprocessor } from 'svimg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		markdown(),
		imagePreprocessor({
			inputDir: 'static',
			outputDir: 'static/generated/images',
			webp: true,
			avif: true,
		}),
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapt(),
		appDir: 'internal',
	}
};

export default config;
