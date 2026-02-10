import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['"Gilda Display"', 'serif'],
				sans: ['"Lato"', 'sans-serif']
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		daisyui
	]
};

export default config;
