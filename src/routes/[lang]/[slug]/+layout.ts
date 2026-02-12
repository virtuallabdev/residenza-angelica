import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import type { Language } from '$lib/i18n';
import { routeSlugs } from '$lib/routes';

export const load: LayoutLoad = async ({ params }) => {
	const validLanguages: Language[] = ['it', 'en', 'de'];
	const lang = params.lang as Language;
	const slug = params.slug;

	// Validate language
	if (!validLanguages.includes(lang)) {
		throw error(404, 'Language not found');
	}

	// Validate slug
	let isValidSlug = false;
	for (const routes of Object.values(routeSlugs)) {
		if (Object.values(routes).includes(slug)) {
			isValidSlug = true;
			break;
		}
	}

	if (!isValidSlug) {
		throw error(404, 'Page not found');
	}

	return {
		lang
	};
};
