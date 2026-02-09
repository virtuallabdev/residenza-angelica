import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#00A859',
				secondary: '#FFFFFF',
				accent: '#C4956E'
			},
			fontFamily: {
				serif: ['"Playfair Display"', 'serif'],
				sans: ['"Lato"', 'sans-serif']
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		daisyui
	],
	daisyui: {
		styled: true,
		themes: [
			{
				light: {
					'primary': '#00A859',
					'primary-focus': '#008f4c',
					'primary-content': '#ffffff',
					'secondary': '#FFFFFF',
					'secondary-focus': '#f0f0f0',
					'secondary-content': '#1f2937',
					'accent': '#C4956E',
					'accent-focus': '#A47456',
					'accent-content': '#ffffff',
					'neutral': '#333333',
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#f3f4f6',
					'base-content': '#333333',
					'info': '#3b82f6',
					'success': '#00A859',
					'warning': '#f59e0b',
					'error': '#ef4444'
				}
			},
			{
				dark: {
					'primary': '#00A859',
					'primary-focus': '#008f4c',
					'primary-content': '#ffffff',
					'secondary': '#1f1f1f',
					'secondary-focus': '#2a2a2a',
					'secondary-content': '#f5f5f5',
					'accent': '#C4956E',
					'accent-focus': '#D4A574',
					'accent-content': '#0f172a',
					'neutral': '#2a2a2a',
					'base-100': '#1f1f1f',
					'base-200': '#151515',
					'base-300': '#0a0a0a',
					'base-content': '#f5f5f5',
					'info': '#60a5fa',
					'success': '#34d399',
					'warning': '#fbbf24',
					'error': '#f87171'
				}
			}
		],
		base: true,
		utils: true,
		logs: true,
		themeRoot: ':root'
	}
};

export default config;
