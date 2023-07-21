<script>
	import {
		IconBrandDiscord,
		IconBrandGithub,
		IconBrandLinkedin,
		IconBrandSupabase,
		IconBrandSvelte,
		IconBrandTailwind,
		IconBrandTwitter,
		IconCopyright
	} from '@tabler/icons-svelte';

	let currYear = new Date().getFullYear();
</script>

<footer class="ring-2 ring-black flex flex-col gap-0.5 bg-amber-400 select-none">
	<div class="grid grid-cols-2 gap-0.5">
		<div
			class="col-span-2 lg:col-span-1 flex flex-col gap-0.5 bg-slate-300 ring-2 ring-black text-sm md:text-base font-semibold uppercase"
		>
			<div class="flex items-center justify-between bg-amber-400 p-2 ring-2 ring-black">
				<p>tech used</p>
				<span class="aspect-square h-2 md:h-3 rounded-full bg-slate-300 ring-2 ring-black" />
			</div>
			<div class="p-4 flex items-center gap-4 ring-2 ring-black bg-slate-300">
				<span class="p-1 bg-amber-400 ring-2 ring-black">
					<IconBrandSvelte size={32} stroke={1.5} />
				</span>
				<span class="p-1 bg-amber-400 ring-2 ring-black">
					<IconBrandTailwind size={32} stroke={1.5} />
				</span>
				<span class="p-1 bg-amber-400 ring-2 ring-black">
					<IconBrandSupabase size={32} stroke={1.5} />
				</span>
			</div>
		</div>
		<div
			class="col-span-2 lg:col-span-1 flex flex-col gap-0.5 ring-2 ring-black text-sm md:text-base font-semibold uppercase"
		>
			<span class="p-2 flex items-center justify-between ring-2 ring-black bg-amber-400">
				<p>more ways to connect</p>
				<span class="h-2 md:h-3 aspect-square rounded-full bg-slate-300 ring-2 ring-black" />
			</span>
			<div class="flex flex-wrap items-center gap-6 ring-2 ring-black bg-slate-300 p-4">
				<a
					href="https://github.com/deepakrawat31"
					class="block p-1 bg-orange-400 ring-2 ring-black shadow-neubrut-4 md:hover:shadow-none transition-all duration-300 ease-in-out"
					><IconBrandGithub size={32} stroke={1.5} /></a
				>
				<a
					href="https://www.linkedin.com/in/deepak-rawat-987968238/"
					class="block p-1 bg-orange-400 ring-2 ring-black shadow-neubrut-4 md:hover:shadow-none transition-all duration-300 ease-in-out"
					><IconBrandLinkedin size={32} stroke={1.5} /></a
				>
				<a
					href="https://twitter.com/yatopotato2"
					class="block p-1 bg-orange-400 ring-2 ring-black shadow-neubrut-4 md:hover:shadow-none transition-all duration-300 ease-in-out"
					><IconBrandTwitter size={32} stroke={1.5} /></a
				>
				<a
					href="https://discordapp.com/users/263590414110425089"
					class="block p-1 bg-orange-400 ring-2 ring-black shadow-neubrut-4 md:hover:shadow-none transition-all duration-300 ease-in-out"
					><IconBrandDiscord size={32} stroke={1.5} /></a
				>
			</div>
		</div>
	</div>
	<div class="col-span-2 flex items-center gap-2 bg-slate-300 ring-2 ring-black">
		<span class="p-1 bg-amber-400 ring-2 ring-black">
			<IconCopyright size={32} stroke={1.5} />
		</span>
		<p class="uppercase text-xs md:text-lg font-semibold flex-1">
			forged with passion by <a href="https://github.com/deepakrawat31" class="text-rose-400">me</a>
		</p>
		<span class="text-lg font-semibold p-1.5 ring-2 ring-black bg-amber-400">{currYear}</span>
	</div>
</footer>
