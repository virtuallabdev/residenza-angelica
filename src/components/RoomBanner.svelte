<script lang="ts">
	export let photo: string;
	export let title: string;
	export let description: string;
	export let price: number;
	export let link: string;
</script>

<div class="card bg-base-100 shadow-xl rounded-none hover:shadow-2xl transition-shadow group">
	<figure class="relative overflow-hidden h-64">
		<img src={photo} alt={title} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"	/>
		<div class="absolute top-0 right-0 bg-primary text-white px-4 py-2 font-bold text-lg opacity-90">
			€ {price}
		</div>
	</figure>
	<div class="card-body p-8">
		<h3 class="card-title font-serif text-2xl mb-2">{title}</h3>
		<p class="text-neutral/80 mb-6 line-clamp-3">
			{description}
		</p>
		<div class="card-actions">
			<a href={link} class="btn btn-primary text-white rounded-none w-full uppercase text-xs font-bold tracking-widest">
				Scopri Di Più
			</a>
		</div>
	</div>
</div>
