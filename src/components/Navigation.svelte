<script lang="ts">
	import { language } from '../stores/language';
	import { theme, toggleTheme } from '../stores/theme';
	import { t } from '../lib/i18n';
	import type { Language } from '../lib/i18n';

	let mobileMenuOpen = false;

	const languages: { code: Language; name: string }[] = [
		{ code: 'it', name: 'Italiano' },
		{ code: 'en', name: 'English' },
		{ code: 'de', name: 'Deutsch' }
	];

	function changeLanguage(lang: Language) {
		language.set(lang);
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="navbar bg-base-200 shadow-lg sticky top-0 z-50">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl font-bold text-primary">
			🏩 Residenza Angelica
		</a>
	</div>

	<!-- Desktop Navigation -->
	<div class="hidden md:flex flex-none gap-2">
		<div class="form-control">
			<a href="/" class="btn btn-sm btn-ghost">
				{t($language, 'nav.home')}
			</a>
			<a href="/rooms" class="btn btn-sm btn-ghost">
				{t($language, 'nav.rooms')}
			</a>
			<a href="/gallery" class="btn btn-sm btn-ghost">
				{t($language, 'nav.gallery')}
			</a>
			<a href="/services" class="btn btn-sm btn-ghost">
				{t($language, 'nav.services')}
			</a>
			<a href="/contacts" class="btn btn-sm btn-ghost">
				{t($language, 'nav.contacts')}
			</a>
		</div>

		<!-- Language Selector -->
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

		<!-- Theme Toggle -->
		<button
			class="btn btn-sm btn-ghost"
			on:click={toggleTheme}
			title={$theme === 'light' ? 'Dark Mode' : 'Light Mode'}
		>
			{#if $theme === 'light'}
				🌙
			{:else}
				☀️
			{/if}
		</button>
	</div>

	<!-- Mobile Menu Button -->
	<div class="md:hidden">
		<button class="btn btn-sm btn-ghost" on:click={toggleMobileMenu}>
			☰
		</button>
	</div>
</nav>

<!-- Mobile Navigation -->
{#if mobileMenuOpen}
	<div class="md:hidden bg-base-200 border-t border-base-300">
		<div class="flex flex-col p-4 gap-2">
			<a href="/" class="btn btn-ghost btn-sm w-full" on:click={() => (mobileMenuOpen = false)}>
				{t($language, 'nav.home')}
			</a>
			<a
				href="/rooms"
				class="btn btn-ghost btn-sm w-full"
				on:click={() => (mobileMenuOpen = false)}
			>
				{t($language, 'nav.rooms')}
			</a>
			<a
				href="/gallery"
				class="btn btn-ghost btn-sm w-full"
				on:click={() => (mobileMenuOpen = false)}
			>
				{t($language, 'nav.gallery')}
			</a>
			<a
				href="/services"
				class="btn btn-ghost btn-sm w-full"
				on:click={() => (mobileMenuOpen = false)}
			>
				{t($language, 'nav.services')}
			</a>
			<a
				href="/contacts"
				class="btn btn-ghost btn-sm w-full"
				on:click={() => (mobileMenuOpen = false)}
			>
				{t($language, 'nav.contacts')}
			</a>

			<div class="divider my-2" />

			<!-- Mobile Language Selector -->
			<div class="flex flex-col gap-1">
				<span class="text-sm font-semibold px-2">{t($language, 'nav.language')}</span>
				{#each languages as lang}
					<button
						class="btn btn-sm btn-ghost justify-start {$language === lang.code ? 'btn-primary' : ''}"
						on:click={() => {
							changeLanguage(lang.code);
							mobileMenuOpen = false;
						}}
					>
						{lang.name}
					</button>
				{/each}
			</div>

			<div class="divider my-2" />

			<!-- Mobile Theme Toggle -->
			<button
				class="btn btn-sm btn-ghost w-full justify-start"
				on:click={() => {
					toggleTheme();
					mobileMenuOpen = false;
				}}
			>
				{#if $theme === 'light'}
					🌙 Dark Mode
				{:else}
					☀️ Light Mode
				{/if}
			</button>
		</div>
	</div>
{/if}
