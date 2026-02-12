<script lang="ts">
	import { language } from '$stores/language';
	import { t } from '$lib/i18n';
	import { generateMetaTags } from '$utils/seo';

	let meta = generateMetaTags({
		title: 'Services - Residenza Angelica',
		description: 'Discover our premium services: WiFi, breakfast, parking, spa, restaurant and more.',
		keywords: ['services', 'amenities', 'hotel services', 'wifi', 'spa', 'restaurant'],
		canonical: 'https://residenza-angelica.it/services'
	});

	const services = [
		{ icon: '📡', nameKey: 'services.wifi', desc: 'High-speed internet throughout the property' },
		{ icon: '🍳', nameKey: 'services.breakfast', desc: 'Delicious breakfast included with your stay' },
		{ icon: '🅿️', nameKey: 'services.parking', desc: 'Free secure parking available' },
		{ icon: '🛎️', nameKey: 'services.reception', desc: 'Round-the-clock reception service' },
		{ icon: '🎩', nameKey: 'services.concierge', desc: 'Personal concierge service' },
		{ icon: '🧖', nameKey: 'services.spa', desc: 'Relaxation and wellness treatments' },
		{ icon: '🍽️', nameKey: 'services.restaurant', desc: 'Fine dining restaurant on-site' },
		{ icon: '🍸', nameKey: 'services.bar', desc: 'Cocktails and drinks at the bar' }
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
				{t($language, 'services.title')}
			</h1>
			<p class="section-subtitle">
				{t($language, 'services.subtitle')}
			</p>
		</div>
	</div>
</div>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each services as service}
				<div class="card bg-base-100 shadow-lg card-hover">
					<div class="card-body items-center text-center">
						<div class="text-5xl mb-4">{service.icon}</div>
						<h3 class="card-title text-lg">{t($language, service.nameKey)}</h3>
						<p class="text-sm opacity-75">{service.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Additional Info -->
<section class="py-20 bg-base-200">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<div>
				<h2 class="text-3xl font-bold text-primary mb-6">Why Choose Us?</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<span class="text-2xl text-primary">✓</span>
						<div>
							<h4 class="font-bold">Premium Quality</h4>
							<p class="text-sm opacity-75">Only the finest amenities and services</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-2xl text-primary">✓</span>
						<div>
							<h4 class="font-bold">Professional Staff</h4>
							<p class="text-sm opacity-75">Trained and courteous hospitality team</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-2xl text-primary">✓</span>
						<div>
							<h4 class="font-bold">Perfect Location</h4>
							<p class="text-sm opacity-75">Convenient access to attractions</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-2xl text-primary">✓</span>
						<div>
							<h4 class="font-bold">Best Value</h4>
							<p class="text-sm opacity-75">Competitive prices for luxury experience</p>
						</div>
					</li>
				</ul>
			</div>

			<div>
				<h2 class="text-3xl font-bold text-primary mb-6">Special Packages</h2>
				<div class="space-y-4">
					<div class="card bg-base-100 shadow">
						<div class="card-body">
							<h3 class="card-title">Honeymoon Package</h3>
							<p class="text-sm">Romance and luxury for your special moment</p>
							<div class="card-actions">
								<button class="btn btn-sm btn-primary">Learn More</button>
							</div>
						</div>
					</div>
					<div class="card bg-base-100 shadow">
						<div class="card-body">
							<h3 class="card-title">Business Package</h3>
							<p class="text-sm">Perfect for corporate stays and meetings</p>
							<div class="card-actions">
								<button class="btn btn-sm btn-primary">Learn More</button>
							</div>
						</div>
					</div>
					<div class="card bg-base-100 shadow">
						<div class="card-body">
							<h3 class="card-title">Family Package</h3>
							<p class="text-sm">Fun and comfort for the whole family</p>
							<div class="card-actions">
								<button class="btn btn-sm btn-primary">Learn More</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
