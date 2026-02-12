<script lang="ts">
  import { language } from '../stores/language';
  import { t } from '../lib/i18n';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  import { page } from '$app/stores';

  let mobileMenuOpen = false;

  const navItems = [
    { path: '', label: 'nav.home' },
    { path: 'rooms', label: 'nav.rooms' },
    { path: 'gallery', label: 'nav.gallery' },
    { path: 'services', label: 'nav.services' },
    { path: 'contacts', label: 'nav.contacts' }
  ];

  function buildUrl(path: string): string {
    if ($language === 'it') {
      return path ? `/${path}` : '/';
    } else {
      return path ? `/${$language}/${path}` : `/${$language}`;
    }
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function isActive(path: string): boolean {
    const url = buildUrl(path);
    return $page.url.pathname === url;
  }
</script>

<nav class="navbar h-[70px] bg-primary text-primary-content top-0 z-50">
  <div class="container mx-auto flex items-center">
    <div class="flex-1">
      <a href={buildUrl('')} class="btn btn-link">
        <img src="/residenza-angelica-logo.svg" alt="Residenza Angelica Logo" height="auto" class="w-[200px] mr-2 inline-block" />
      </a>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex flex-none gap-2">
      <div class="form-control">
        {#each navItems as item}
          <a href={buildUrl(item.path)} class="btn btn-sm text-white btn-link {isActive(item.path) ? 'underline' : ''}">
            {t($language, item.label)}
          </a>
        {/each}
      </div>

      <!-- Language Selector -->
      <LanguageSwitcher />

      <!-- Theme Toggle -->
      <ThemeSwitcher />
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden">
      <button class="btn btn-sm btn-ghost" on:click={toggleMobileMenu}> ☰ </button>
    </div>
  </div>
</nav>

<!-- Mobile Navigation -->
{#if mobileMenuOpen}
  <div class="md:hidden bg-base-200 border-t border-base-300">
    <div class="flex flex-col p-4 gap-2">
      {#each navItems as item}
        <a 
          href={buildUrl(item.path)} 
          class="btn btn-ghost btn-sm w-full {isActive(item.path) ? 'btn-active' : ''}" 
          on:click={() => (mobileMenuOpen = false)}
        >
          {t($language, item.label)}
        </a>
      {/each}

      <div class="divider my-2"></div>

      <!-- Mobile Language Selector -->
      <LanguageSwitcher type="list" on:change={() => (mobileMenuOpen = false)} />

      <div class="divider my-2"></div>

      <!-- Mobile Theme Toggle -->
      <ThemeSwitcher
        class="w-full justify-start"
        on:click={() => (mobileMenuOpen = false)}
      />
    </div>
  </div>
{/if}
