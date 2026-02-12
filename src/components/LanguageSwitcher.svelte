<script lang="ts">
	import { language } from '../stores/language';
	import { t } from '../lib/i18n';
	import type { Language } from '../lib/i18n';
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let type: 'dropdown' | 'list' = 'dropdown';
	
	const dispatch = createEventDispatcher();

	const languages: { code: Language; name: string }[] = [
		{ code: 'it', name: 'Italiano' },
		{ code: 'en', name: 'English' },
		{ code: 'de', name: 'Deutsch' }
	];

	function buildLangUrl(lang: Language): string {
		const currentUrl = $page.url.pathname;
		
		// Extract the current path without the language prefix
		let pathWithoutLang = currentUrl;
		if (currentUrl.startsWith('/it/') || currentUrl.startsWith('/en/') || currentUrl.startsWith('/de/')) {
			pathWithoutLang = currentUrl.slice(3);
		} else if (currentUrl === '/it' || currentUrl === '/en' || currentUrl === '/de') {
			pathWithoutLang = '/';
		}

		// Build new URL with language prefix
		if (lang === 'it') {
			return pathWithoutLang;
		} else {
			return `/${lang}${pathWithoutLang}`;
		}
	}

	async function changeLanguage(lang: Language) {
		language.set(lang);
		const newUrl = buildLangUrl(lang);
		await goto(newUrl);
		dispatch('change', lang);
	}
</script>

{#if type === 'dropdown'}
	<!-- Language Selector Dropdown -->
	<div class="dropdown dropdown-end">
		<button class="btn btn-sm btn-ghost">
			{t($language, 'nav.language')} 🌐
		</button>
		<ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
			{#each languages as lang}
				<li>
					<button
						on:click={() => changeLanguage(lang.code)}
						class={$language === lang.code ? 'active' : ''}
					>
						{lang.name}
					</button>
				</li>
			{/each}
		</ul>
	</div>
{:else}
	<!-- Language Selector List -->
	<div class="flex flex-col gap-1">
		<span class="text-sm font-semibold px-2">{t($language, 'nav.language')}</span>
		{#each languages as lang}
			<button
				class="btn btn-sm btn-ghost justify-start {$language === lang.code ? 'btn-primary' : ''}"
				on:click={() => changeLanguage(lang.code)}
			>
				{lang.name}
			</button>
		{/each}
	</div>
{/if}
