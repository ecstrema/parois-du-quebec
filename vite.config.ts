import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import svg from '@poppanator/sveltekit-svg'


export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		svg(),
	],
});
