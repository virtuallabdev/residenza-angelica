import { writable } from 'svelte/store';
import type { Language } from '$lib/i18n';

const initialLanguage = ((): Language => {
	if (typeof window === 'undefined') return 'it';
	const stored = localStorage.getItem('language');
	return (stored as Language) || 'it';
})();

export const language = writable<Language>(initialLanguage);

language.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('language', value);
		document.documentElement.lang = value;
	}
});
