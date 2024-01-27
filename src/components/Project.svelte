<script>
	import {
		IconApi,
		IconArrowRight,
		IconBrandReact,
		IconBrandTailwind,
		IconBrandVue,
		IconDatabase
	} from '@tabler/icons-svelte';

	import expenditure from '$lib/assets/expenditure.png';
	import krypto from '$lib/assets/krypto.png';
</script>

<section id="projects" class="ring-2 ring-black flex flex-col gap-0.5">
	<div
		class="flex items-center justify-between p-2 bg-amber-400 ring-2 ring-black text-xl md:text-2xl uppercase font-bold"
	>
		<h2 class="select-none">Projects</h2>
		<div class="flex items-center gap-2">
			{#each { length: 3 } as _}
				<span class="h-2 md:h-3 aspect-square rounded-full bg-slate-300 ring-2 ring-black" />
			{/each}
		</div>
	</div>
	<div class="p-4 md:p-8 bg-purple-400 grid grid-cols-1 lg:grid-cols-2 gap-4">
		<div class="flex flex-col gap-0.5 ring-2 ring-black bg-slate-300">
			<div
				class="flex items-center justify-between p-2 bg-amber-400 ring-2 ring-black text-xl md:text-2xl uppercase font-bold"
			>
				<h2 class="select-none">expenditure</h2>
				<span class="h-2 md:h-3 aspect-square rounded-full bg-slate-300 ring-2 ring-black" />
			</div>
			<div class="p-2">
				<img src={expenditure} alt="expenditure" class="ring-2 ring-black" />
			</div>
			<div class="uppercase text-sm font-semibold p-2">
				<p>expenditure is a place where you can keep track of your expenses/payouts over time.</p>
			</div>
			<div class="p-2 flex items-center justify-between">
				<div class="flex gap-4">
					<span class="p-1 bg-amber-400 ring-2 ring-black"
						><IconBrandVue size={32} stroke={1.5} /></span
					>
					<span class="p-1 bg-amber-400 ring-2 ring-black"
						><IconBrandTailwind size={32} stroke={1.5} /></span
					>
					<span class="p-1 bg-amber-400 ring-2 ring-black"
						><IconDatabase size={32} stroke={1.5} /></span
					>
				</div>
				<div class="p-1 bg-amber-400 ring-2 ring-black">
					<a href="https://expenditure-nine.vercel.app">
						<IconArrowRight size={32} stroke={1.5} />
					</a>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-0.5 ring-2 ring-black bg-slate-300">
			<div
				class="flex items-center justify-between p-2 bg-amber-400 ring-2 ring-black text-xl md:text-2xl uppercase font-bold"
			>
				<h2 class="select-none">krypto</h2>
				<span class="h-2 md:h-3 aspect-square rounded-full bg-slate-300 ring-2 ring-black" />
			</div>
			<div class="p-2">
				<img src={krypto} alt="expenditure" class="ring-2 ring-black" />
			</div>
			<div class="uppercase text-sm font-semibold p-2">
				<p>buying/exchanging crypto with secure and easy way of transaction.</p>
			</div>
			<div class="p-2 flex items-center justify-between">
				<div class="flex gap-4">
					<span class="p-1 bg-amber-400 ring-2 ring-black"
						><IconBrandReact size={32} stroke={1.5} /></span
					>
					<span class="p-1 bg-amber-400 ring-2 ring-black"
						><IconBrandTailwind size={32} stroke={1.5} /></span
					>
					<span class="p-1 bg-amber-400 ring-2 ring-black"><IconApi size={32} stroke={1.5} /></span>
				</div>
				<div class="p-1 bg-amber-400 ring-2 ring-black">
					<a href="https://krypto-delta.vercel.app">
						<IconArrowRight size={32} stroke={1.5} />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
