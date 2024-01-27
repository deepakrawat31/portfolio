<script>
	import Icons from './Icons.svelte';

	const intro = [
		"hi, i'm deepak",
		'a frontend developer',
		'ui/ux admirer',
		'and a',
		'sucker for',
		'good web designs',
		'-altho i aint good at it-'
	];
</script>

<main class="grid grid-cols-2 gap-0.5 bg-slate-300" id="about">
	<div class="col-span-2 lg:col-span-1 flex flex-col gap-0.5 ring-2 ring-black select-none">
		{#each intro as item}
			<p
				class="p-2 ring-2 ring-black uppercase font-bold text-xl md:text-2xl md:hover:bg-amber-400 transition-colors duration-300"
			>
				{item}
			</p>
		{/each}
	</div>
	<div class="col-span-2 lg:col-span-1 flex flex-col gap-0.5 ring-2 ring-black bg-slate-300">
		<div
			class="flex items-center justify-between p-2 bg-amber-400 ring-2 ring-black text-xl md:text-2xl uppercase font-bold"
		>
			<h2 class="select-none">I've worked with</h2>
			<div class="flex items-center gap-2">
				{#each { length: 3 } as _}
					<span class="h-2 md:h-3 aspect-square rounded-full bg-slate-300 ring-2 ring-black" />
				{/each}
			</div>
		</div>
		<Icons />
	</div>
</main>
