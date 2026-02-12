<script lang="ts">
	export interface Icon {
		svg: string;
		description: string;
	}

	export let icons: Icon[] = [];
</script>

<ul class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
	{#each icons as icon (icon.description)}
		<li class="flex flex-col items-center text-center gap-3">
			<div class="text-5xl">
				{@html icon.svg}
			</div>
			<span class="text-sm font-medium text-neutral/70">{icon.description}</span>
		</li>
	{/each}
</ul>

<style>
	:global(li svg) {
		width: 3rem;
		height: 3rem;
	}
</style>
