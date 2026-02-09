<script lang="ts">
  import { language } from '../stores/language';
  import { t } from '../lib/i18n';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  import LanguageSwitcher from './LanguageSwitcher.svelte';

  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<nav class="navbar bg-base-200 shadow-lg sticky top-0 z-50">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl font-bold text-primary">
      <img
        src="/residenza-angelica-logo.svg"
        alt="Residenza Angelica Logo"
        height="auto"
        class="w-[150px] mr-2 inline-block"
      />
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
    <LanguageSwitcher />

    <!-- Theme Toggle -->
    <ThemeSwitcher />
  </div>

  <!-- Mobile Menu Button -->
  <div class="md:hidden">
    <button class="btn btn-sm btn-ghost" on:click={toggleMobileMenu}> ☰ </button>
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

      <div class="divider my-2"></div>

      <!-- Mobile Language Selector -->
      <LanguageSwitcher type="list" on:change={() => (mobileMenuOpen = false)} />

      <div class="divider my-2"></div>

      <!-- Mobile Theme Toggle -->
      <ThemeSwitcher
        showText={true}
        class="w-full justify-start"
        on:click={() => (mobileMenuOpen = false)}
      />
    </div>
  </div>
{/if}
