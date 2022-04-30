import preprocess from 'svelte-preprocess';
import adapt from '@sveltejs/adapter-static';
import { markdown } from 'svelte-preprocess-markdown';
import path from 'path';
import { imagePreprocessor } from 'svimg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		markdown(),
		imagePreprocessor({
			inputDir: 'static',
			outputDir: 'static/generated/images',
			webp: true,
			avif: true
		}),
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapt(),
		appDir: 'internal',
		prerender: {
			default: true
		},

		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$i18n: path.resolve('./src/lib/i18n'),
				}
			}
		}
	}
};

export default config;
