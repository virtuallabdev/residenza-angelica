import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#8B7355',
				secondary: '#D4A574',
				accent: '#C4956E'
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
					'primary': '#8B7355',
					'primary-focus': '#6B5345',
					'primary-content': '#ffffff',
					'secondary': '#D4A574',
					'secondary-focus': '#C49560',
					'secondary-content': '#ffffff',
					'accent': '#C4956E',
					'accent-focus': '#A47456',
					'accent-content': '#ffffff',
					'neutral': '#f5f5f5',
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#f3f4f6',
					'base-content': '#1f2937',
					'info': '#3b82f6',
					'success': '#10b981',
					'warning': '#f59e0b',
					'error': '#ef4444'
				}
			},
			{
				dark: {
					'primary': '#B8956A',
					'primary-focus': '#D4A574',
					'primary-content': '#0f172a',
					'secondary': '#8B7355',
					'secondary-focus': '#A67C52',
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
