import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: "404.html"
		}),
		pages: 'build',
		assets: 'build',
		fallback: undefined,
		precompress: false,
		strict: true,
		paths: {
			base: process.argv.includes("dev") ? "" : process.env.BASE_PATH
		},
		prerender: {
			handleHttpError: ({ status, path, ref }) => {
				if (status === 500) {
					console.warn(`Prerendering failed for ${path} with status ${status}`);
					return;
				}
				throw new Error(`${status} error at ${path}`);
			}
		}
	}
};

export default config;
