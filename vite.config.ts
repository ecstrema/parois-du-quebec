import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { svelteSVG } from "rollup-plugin-svelte-svg";


export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		svelteSVG({
			// pass empty object to enable defaults SVGO options
			svgo: {},
			enforce: "pre",
		}),
	],
});
