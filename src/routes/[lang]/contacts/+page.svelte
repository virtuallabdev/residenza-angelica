<script lang="ts">
	import { language } from '$stores/language';
	import { generateMetaTags } from '$utils/seo';

	let meta = generateMetaTags({
		title: 'Contacts - Residenza Angelica',
		description: 'Contact us for reservations and inquiries',
		keywords: ['contacts', 'reservations', 'inquiries', 'hotel'],
		ogTitle: 'Contacts - Residenza Angelica',
		ogDescription: 'Contact us for reservations and inquiries',
		ogImage: '/og-image-contacts.jpg',
		canonical: 'https://residenza-angelica.it/contatti',
	});
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.keywords} />
	<meta name="og:title" content={meta['og:title']} />
	<meta name="og:description" content={meta['og:description']} />
	<meta name="og:image" content={meta['og:image']} />
	<meta name="canonical" content={meta.canonical} />
	<meta name="robots" content={meta.robots} />
</svelte:head>

<div class="hero min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
	<div class="hero-content text-center text-white py-20">
		<div class="max-w-4xl">
			<h1 class="text-5xl md:text-7xl font-serif mb-6">Contact Us</h1>
			<p class="text-xl text-gray-300">Reach out to us for reservations</p>
		</div>
	</div>
</div>

<div class="container mx-auto px-4 py-20">
	<p class="text-center text-gray-600 mb-8">Contact form coming soon...</p>
</div>
