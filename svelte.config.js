import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		alias: {
			$components: 'src/components',
			$lib: 'src/lib',
			$stores: 'src/stores',
			$utils: 'src/utils'
		}
	}
};
