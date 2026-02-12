<script lang="ts">
	import { language } from '$stores/language';
	import { generateMetaTags } from '$utils/seo';

	let meta = generateMetaTags({
		title: 'Gallery - Residenza Angelica',
		description: 'Explore our beautiful photo gallery',
		keywords: ['gallery', 'photos', 'images', 'hotel'],
		ogTitle: 'Gallery - Residenza Angelica',
		ogDescription: 'Explore our beautiful photo gallery',
		ogImage: '/og-image-gallery.jpg',
		canonical: 'https://residenza-angelica.it/galleria',
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
			<h1 class="text-5xl md:text-7xl font-serif mb-6">Gallery</h1>
			<p class="text-xl text-gray-300">Explore our beautiful spaces</p>
		</div>
	</div>
</div>

<div class="container mx-auto px-4 py-20">
	<p class="text-center text-gray-600 mb-8">Gallery content coming soon...</p>
</div>
