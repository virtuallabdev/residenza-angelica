<script lang="ts">
	import { onMount } from 'svelte';
	import { language } from '$lib/../stores/language';
	import { theme } from '$lib/../stores/theme';
	import { t } from '$lib/i18n';
	import Navigation from '$lib/../components/Navigation.svelte';
	import Footer from '$lib/../components/Footer.svelte';
	import '../app.css';

	let currentTheme: 'light' | 'dark' = 'light';
	let currentLanguage: 'it' | 'en' | 'de' = 'it';

	const themeUnsub = theme.subscribe((value) => {
		currentTheme = value;
	});

	const langUnsub = language.subscribe((value) => {
		currentLanguage = value;
	});

	onMount(() => {
		const html = document.documentElement;
		html.setAttribute('data-theme', currentTheme);
		html.lang = currentLanguage;

		return () => {
			themeUnsub();
			langUnsub();
		};
	});
</script>

<div class="min-h-screen flex flex-col bg-base-100 text-base-content">
	<Navigation />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>

<style global>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		transition: background-color 0.3s ease, color 0.3s ease;
	}
</style>
