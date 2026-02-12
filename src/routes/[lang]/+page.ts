import type { Language } from '$lib/i18n';

export const prerender = true;

export async function entries() {
	const languages: Language[] = ['it', 'en', 'de'];
	return languages.map(lang => ({
		lang
	}));
}
