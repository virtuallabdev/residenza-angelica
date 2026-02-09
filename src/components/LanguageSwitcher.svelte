<script lang="ts">
	import { language } from '../stores/language';
	import { t } from '../lib/i18n';
	import type { Language } from '../lib/i18n';
	import { createEventDispatcher } from 'svelte';

	export let type: 'dropdown' | 'list' = 'dropdown';
	
	const dispatch = createEventDispatcher();

	const languages: { code: Language; name: string }[] = [
		{ code: 'it', name: 'Italiano' },
		{ code: 'en', name: 'English' },
		{ code: 'de', name: 'Deutsch' }
	];

	function changeLanguage(lang: Language) {
		language.set(lang);
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
