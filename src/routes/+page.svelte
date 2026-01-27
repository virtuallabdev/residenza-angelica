<script lang="ts">
	import { language } from '$stores/language';
	import { t } from '$lib/i18n';
	import { generateMetaTags } from '$utils/seo';

	let meta = generateMetaTags({
		title: 'Residenza Angelica - Luxury Hotel Residence',
		description: 'Experience luxury accommodation at Residenza Angelica with premium services, beautiful rooms, and unforgettable experiences.',
		keywords: ['hotel', 'luxury', 'accommodation', 'residence', 'rooms', 'services'],
		ogTitle: 'Residenza Angelica - Luxury Hotel Residence',
		ogDescription: 'Experience luxury accommodation with premium services',
		ogImage: '/og-image-home.jpg',
		canonical: 'https://residenza-angelica.it/'
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

<div class="hero-section">
	<div class="hero-content text-center">
		<div class="max-w-2xl">
			<h1 class="section-title text-gradient mb-6">
				{t($language, 'home.title')}
			</h1>
			<p class="text-xl md:text-2xl mb-8 text-base-content/80">
				{t($language, 'home.subtitle')}
			</p>
			<p class="mb-8 text-lg opacity-90">
				{t($language, 'home.welcome')}
			</p>
			<div class="flex gap-4 justify-center flex-wrap">
				<a href="/rooms" class="btn-primary-custom">
					{t($language, 'home.cta')} →
				</a>
				<a href="/contacts" class="btn btn-outline btn-primary font-semibold">
					{t($language, 'contact.title')}
				</a>
			</div>
		</div>
	</div>
</div>

<!-- Features Section -->
<section class="py-20 bg-base-200">
	<div class="container mx-auto px-4">
		<h2 class="section-title mb-12">{t($language, 'services.title')}</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="card bg-base-100 shadow-lg card-hover">
				<div class="card-body items-center text-center">
					<div class="text-4xl mb-4">🛏️</div>
					<h3 class="card-title">{t($language, 'rooms.title')}</h3>
					<p>{t($language, 'rooms.subtitle')}</p>
					<a href="/rooms" class="btn btn-sm btn-primary mt-4">
						{t($language, 'rooms.book')}
					</a>
				</div>
			</div>

			<div class="card bg-base-100 shadow-lg card-hover">
				<div class="card-body items-center text-center">
					<div class="text-4xl mb-4">🖼️</div>
					<h3 class="card-title">{t($language, 'gallery.title')}</h3>
					<p>{t($language, 'gallery.subtitle')}</p>
					<a href="/gallery" class="btn btn-sm btn-primary mt-4">
						Explore
					</a>
				</div>
			</div>

			<div class="card bg-base-100 shadow-lg card-hover">
				<div class="card-body items-center text-center">
					<div class="text-4xl mb-4">⭐</div>
					<h3 class="card-title">{t($language, 'services.title')}</h3>
					<p>{t($language, 'services.subtitle')}</p>
					<a href="/services" class="btn btn-sm btn-primary mt-4">
						Learn More
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-primary to-secondary text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-4xl font-bold mb-6">Ready to Book?</h2>
		<p class="text-xl mb-8 opacity-90">Don't miss the opportunity to experience luxury</p>
		<a href="/rooms" class="btn btn-lg btn-outline btn-white">
			{t($language, 'rooms.book')} Now
		</a>
	</div>
</section>
