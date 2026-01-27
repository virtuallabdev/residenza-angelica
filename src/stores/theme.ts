import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const initialTheme = ((): Theme => {
	if (typeof window === 'undefined') return 'light';
	const stored = localStorage.getItem('theme') as Theme | null;
	if (stored) return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
})();

export const theme = writable<Theme>(initialTheme);

theme.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('theme', value);
		const html = document.documentElement;
		html.setAttribute('data-theme', value);
	}
});

export function toggleTheme() {
	theme.update((current) => (current === 'light' ? 'dark' : 'light'));
}
