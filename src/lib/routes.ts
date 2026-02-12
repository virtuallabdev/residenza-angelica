import type { Language } from './i18n';

export type PageKey = 'home' | 'rooms' | 'gallery' | 'services' | 'contacts';

interface RouteConfig {
	it: string;
	en: string;
	de: string;
}

// Define slugs for each language
export const routeSlugs: Record<PageKey, RouteConfig> = {
	home: {
		it: '',
		en: '',
		de: ''
	},
	rooms: {
		it: 'camere',
		en: 'rooms',
		de: 'zimmer'
	},
	gallery: {
		it: 'galleria',
		en: 'gallery',
		de: 'galerie'
	},
	services: {
		it: 'servizi',
		en: 'services',
		de: 'dienste'
	},
	contacts: {
		it: 'contatti',
		en: 'contacts',
		de: 'kontakte'
	}
};

// Build URL for a specific page and language
export function buildPageUrl(page: PageKey, lang: Language): string {
	const slug = routeSlugs[page][lang];
	
	if (lang === 'it') {
		return slug ? `/${slug}` : '/';
	} else {
		return slug ? `/${lang}/${slug}` : `/${lang}`;
	}
}

// Get all navigation items with their URLs
export function getNavItems(lang: Language) {
	return [
		{ page: 'home' as const, label: 'nav.home', url: buildPageUrl('home', lang) },
		{ page: 'rooms' as const, label: 'nav.rooms', url: buildPageUrl('rooms', lang) },
		{ page: 'gallery' as const, label: 'nav.gallery', url: buildPageUrl('gallery', lang) },
		{ page: 'services' as const, label: 'nav.services', url: buildPageUrl('services', lang) },
		{ page: 'contacts' as const, label: 'nav.contacts', url: buildPageUrl('contacts', lang) }
	];
}

// Get all prerender entries for static generation
export function getPrerenderEntries() {
	const entries: Array<{ lang: Language; slug: string }> = [];
	const languages: Language[] = ['it', 'en', 'de'];
	// Only include pages with slugs (exclude home which has empty slug)
	const pages: PageKey[] = ['rooms', 'gallery', 'services', 'contacts'];
	
	languages.forEach(lang => {
		pages.forEach(page => {
			const slug = routeSlugs[page][lang];
			if (slug) {
				entries.push({ lang, slug });
			}
		});
	});
	
	return entries;
}

// Detect which page we're on based on pathname
export function detectCurrentPage(pathname: string): PageKey | null {
	const languages: Language[] = ['it', 'en', 'de'];
	const pages: PageKey[] = ['home', 'rooms', 'gallery', 'services', 'contacts'];
	
	for (const lang of languages) {
		for (const page of pages) {
			if (buildPageUrl(page, lang) === pathname) {
				return page;
			}
		}
	}
	
	return null;
}
