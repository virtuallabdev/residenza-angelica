import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Language } from '$lib/i18n';
import { routeSlugs, getPrerenderEntries } from '$lib/routes';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	const { lang, slug } = params;
	const validLanguages: Language[] = ['it', 'en', 'de'];
	const currentLang = lang as Language;

	if (!validLanguages.includes(currentLang)) {
		throw error(404, 'Language not found');
	}

	// Check if slug matches any valid page
	let page: string | null = null;
	
	for (const [pageKey, routes] of Object.entries(routeSlugs)) {
		if (routes[currentLang] === slug) {
			page = pageKey;
			break;
		}
	}

	if (!page) {
		throw error(404, 'Page not found');
	}

	return {
		lang: currentLang,
		page,
		slug
	};
};

export async function entries() {
	return getPrerenderEntries();
}
