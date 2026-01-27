<script lang="ts">
	import { language } from '$stores/language';
	import { t } from '$lib/i18n';
	import { generateMetaTags } from '$utils/seo';

	let meta = generateMetaTags({
		title: 'Rooms - Residenza Angelica',
		description: 'Explore our comfortable and welcoming rooms at Residenza Angelica. Choose from Standard, Deluxe, and Suite options.',
		keywords: ['rooms', 'hotel rooms', 'accommodation', 'standard', 'deluxe', 'suite'],
		ogTitle: 'Rooms - Residenza Angelica',
		canonical: 'https://residenza-angelica.it/rooms'
	});

	const rooms = [
		{
			id: 1,
			nameKey: 'rooms.standard',
			image: '/rooms/standard.jpg',
			features: ['2 Twin Beds', 'En-suite Bathroom', 'WiFi', 'Air Conditioning'],
			price: '€89/night'
		},
		{
			id: 2,
			nameKey: 'rooms.deluxe',
			image: '/rooms/deluxe.jpg',
			features: ['King Size Bed', 'Bathroom with Bathtub', 'WiFi', 'Mini Bar'],
			price: '€129/night'
		},
		{
			id: 3,
			nameKey: 'rooms.suite',
			image: '/rooms/suite.jpg',
			features: ['Living Room', 'King Size Bed', 'Luxury Bathroom', 'Smart TV'],
			price: '€189/night'
		}
	];
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="canonical" content={meta.canonical} />
</svelte:head>

<div class="hero-section">
	<div class="hero-content text-center">
		<div class="max-w-2xl">
			<h1 class="section-title text-gradient">
				{t($language, 'rooms.title')}
			</h1>
			<p class="section-subtitle">
				{t($language, 'rooms.subtitle')}
			</p>
		</div>
	</div>
</div>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each rooms as room}
				<div class="card bg-base-100 shadow-xl card-hover overflow-hidden">
					<figure class="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
						<div class="text-6xl">🏨</div>
					</figure>
					<div class="card-body">
						<h2 class="card-title text-primary">{t($language, room.nameKey)}</h2>
						<div class="divider my-2" />
						<h4 class="font-semibold mb-2">{t($language, 'rooms.features')}:</h4>
						<ul class="space-y-1 text-sm mb-4">
							{#each room.features as feature}
								<li class="flex items-center gap-2">
									<span class="text-primary">✓</span>
									{feature}
								</li>
							{/each}
						</ul>
						<div class="card-actions justify-between items-center">
							<span class="text-lg font-bold text-primary">{room.price}</span>
							<button class="btn-primary-custom">
								{t($language, 'rooms.book')}
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Booking CTA -->
<section class="py-20 bg-base-200">
	<div class="container mx-auto px-4 text-center">
		<h2 class="section-title mb-8">{t($language, 'rooms.title')}</h2>
		<p class="text-xl mb-8 max-w-2xl mx-auto">
			All our rooms are equipped with modern amenities and are designed for maximum comfort.
		</p>
		<a href="/contacts" class="btn-primary-custom btn-lg">
			{t($language, 'contact.title')} for Special Offers
		</a>
	</div>
</section>
