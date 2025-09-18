import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	// kit: {
	// 	// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
	// 	// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
	// 	// See https://svelte.dev/docs/kit/adapters for more information about adapters.
	// 	adapter: adapter({
	// 		pages: "build",
	// 		assets: "build",
	// 		fallback: undefined,
	// 		precompress: false,
	// 		strict: true
	// 	})
	// }
	kit: {
		adapter: adapter({
			fallback: "404.html"
		}),
		paths: {
			base: process.argv.includes("dev") ? "" : process.env.BASE_PATH
		},
		prerender: {
			handleHttpError: ({ status, path, ref }) => {
				if (status === 500) {
					console.warn(`Prerendering failed for ${path} with status ${status}`);
					return;
				}
				// For other errors, throw as usual
				throw new Error(`${status} error at ${path}`);
			}
		}
	}
};

export default config;
