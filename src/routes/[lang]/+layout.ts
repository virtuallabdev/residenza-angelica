import type { LayoutLoad } from './$types';
import type { Language } from '$lib/i18n';

export const load: LayoutLoad = async ({ params }) => {
	const validLanguages: Language[] = ['it', 'en', 'de'];
	const lang = params.lang as Language;

	if (!validLanguages.includes(lang)) {
		throw new Error(`Invalid language: ${params.lang}`);
	}

	return {
		lang
	};
};

export const prerender = true;

export async function entries() {
	return [
		{ lang: 'it' },
		{ lang: 'en' },
		{ lang: 'de' }
	];
}

