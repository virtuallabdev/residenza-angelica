<script lang="ts">
	import { page } from '$app/stores';
	import RoomsPage from '../rooms/+page.svelte';
	import GalleryPage from '../gallery/+page.svelte';
	import ServicesPage from '../services/+page.svelte';
	import ContactsPage from '../contacts/+page.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const pageComponents: Record<string, any> = {
		rooms: RoomsPage,
		gallery: GalleryPage,
		services: ServicesPage,
		contacts: ContactsPage
	};

	$: currentComponent = pageComponents[data.page];
</script>

{#if currentComponent}
	<svelte:component this={currentComponent} />
{:else}
	<div class="text-center py-20">
		<h1>Page not found</h1>
	</div>
{/if}
