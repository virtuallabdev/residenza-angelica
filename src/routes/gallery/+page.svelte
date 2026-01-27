<script lang="ts">
	import { language } from '$stores/language';
	import { t } from '$lib/i18n';
	import { generateMetaTags } from '$utils/seo';

	let meta = generateMetaTags({
		title: 'Gallery - Residenza Angelica',
		description: 'Discover the beautiful spaces of our luxury residence through our photo gallery.',
		keywords: ['gallery', 'photos', 'residence', 'hotel', 'interior', 'exterior'],
		canonical: 'https://residenza-angelica.it/gallery'
	});

	const gallery = [
		{ category: 'exterior', emoji: '🏢' },
		{ category: 'interior', emoji: '🏛️' },
		{ category: 'rooms', emoji: '🛏️' },
		{ category: 'dining', emoji: '🍽️' },
		{ category: 'exterior', emoji: '🌳' },
		{ category: 'interior', emoji: '✨' }
	];

	let selectedCategory = 'all';

	$: filteredGallery = selectedCategory === 'all' ? gallery : gallery.filter(item => item.category === selectedCategory);
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
				{t($language, 'gallery.title')}
			</h1>
			<p class="section-subtitle">
				{t($language, 'gallery.subtitle')}
			</p>
		</div>
	</div>
</div>

<section class="py-20">
	<div class="container mx-auto px-4">
		<!-- Filter Buttons -->
		<div class="flex flex-wrap gap-4 justify-center mb-12">
			<button
				class="btn {selectedCategory === 'all' ? 'btn-primary' : 'btn-outline'}"
				on:click={() => (selectedCategory = 'all')}
			>
				All
			</button>
			<button
				class="btn {selectedCategory === 'exterior' ? 'btn-primary' : 'btn-outline'}"
				on:click={() => (selectedCategory = 'exterior')}
			>
				{t($language, 'gallery.exterior')}
			</button>
			<button
				class="btn {selectedCategory === 'interior' ? 'btn-primary' : 'btn-outline'}"
				on:click={() => (selectedCategory = 'interior')}
			>
				{t($language, 'gallery.interior')}
			</button>
			<button
				class="btn {selectedCategory === 'rooms' ? 'btn-primary' : 'btn-outline'}"
				on:click={() => (selectedCategory = 'rooms')}
			>
				{t($language, 'gallery.rooms')}
			</button>
			<button
				class="btn {selectedCategory === 'dining' ? 'btn-primary' : 'btn-outline'}"
				on:click={() => (selectedCategory = 'dining')}
			>
				{t($language, 'gallery.dining')}
			</button>
		</div>

		<!-- Gallery Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each filteredGallery as item (item)}
				<div class="card shadow-lg overflow-hidden card-hover bg-base-100">
					<figure class="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
						<div class="text-6xl">{item.emoji}</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title text-primary capitalize">{item.category}</h3>
						<p class="opacity-70">Experience the beauty of our {item.category}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
