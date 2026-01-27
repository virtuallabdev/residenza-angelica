export interface SeoMeta {
	title: string;
	description: string;
	keywords?: string[];
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;
	ogUrl?: string;
	twitterCard?: 'summary' | 'summary_large_image';
	twitterImage?: string;
	canonical?: string;
	robots?: string;
	author?: string;
}

export function generateMetaTags(meta: SeoMeta): Record<string, string> {
	return {
		title: meta.title,
		description: meta.description,
		keywords: meta.keywords?.join(', ') || '',
		'og:title': meta.ogTitle || meta.title,
		'og:description': meta.ogDescription || meta.description,
		'og:image': meta.ogImage || '/og-image.jpg',
		'og:url': meta.ogUrl || '',
		'twitter:card': meta.twitterCard || 'summary_large_image',
		'twitter:image': meta.twitterImage || meta.ogImage || '/og-image.jpg',
		'twitter:title': meta.ogTitle || meta.title,
		'twitter:description': meta.ogDescription || meta.description,
		canonical: meta.canonical || '',
		robots: meta.robots || 'index, follow',
		author: meta.author || 'Residenza Angelica'
	};
}

export const structuredData = {
	organization: {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Residenza Angelica',
		url: 'https://residenza-angelica.it',
		logo: 'https://residenza-angelica.it/logo.png',
		description: 'Luxury hotel residence with rooms, gallery, and premium services',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Via Example 123',
			addressLocality: 'City',
			addressRegion: 'Region',
			postalCode: '12345',
			addressCountry: 'IT'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'Customer Service',
			telephone: '+39-123-456-7890',
			email: 'info@residenza-angelica.it'
		},
		sameAs: [
			'https://www.facebook.com/residenzaangelica',
			'https://www.instagram.com/residenzaangelica',
			'https://www.twitter.com/residenzaangelica'
		]
	},
	localBusiness: {
		'@context': 'https://schema.org',
		'@type': 'Hotel',
		name: 'Residenza Angelica',
		description: 'Luxury accommodation with premium services',
		url: 'https://residenza-angelica.it',
		telephone: '+39-123-456-7890',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Via Example 123',
			addressLocality: 'City',
			addressRegion: 'Region',
			postalCode: '12345',
			addressCountry: 'IT'
		},
		priceRange: '€€€',
		rating: {
			'@type': 'AggregateRating',
			ratingValue: '4.8',
			ratingCount: '256'
		},
		image: 'https://residenza-angelica.it/hotel-main.jpg'
	}
};
