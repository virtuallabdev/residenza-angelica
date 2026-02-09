<script lang="ts">
	import { theme, toggleTheme } from '../stores/theme';
	import { createEventDispatcher } from 'svelte';

	export let showText = false;
	let className = '';
	export { className as class };

	const dispatch = createEventDispatcher();

	function handleClick(event: MouseEvent) {
		toggleTheme();
		dispatch('click', event);
	}
</script>

<button
	class="{className} btn btn-sm btn-ghost"
	on:click={handleClick}
	title={$theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    {...$$restProps}
>
	{#if $theme === 'light'}
		🌙
		{#if showText}
			<span class="ml-2">Dark Mode</span>
		{/if}
	{:else}
		☀️
		{#if showText}
			<span class="ml-2">Light Mode</span>
		{/if}
	{/if}
</button>
