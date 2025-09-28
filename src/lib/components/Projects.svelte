<script lang="ts">
	import avantStudio from '$lib/assets/img/avantStudio.webp';
	import crossroads from '$lib/assets/img/crossroads.webp';
	import IconArrowRightBold from 'phosphor-icons-svelte/IconArrowRightBold.svelte';
</script>

<section class="relative isolate px-4">
	<span class="absolute inset-0 bottom-0 -z-10 border-b border-surface-variant"></span>
	<div
		class="flex min-h-[80dvh] w-full max-w-6xl flex-wrap items-center gap-4 place-self-center border-x border-x-surface-variant p-4 md:p-6 2xl:max-w-7xl"
	>
		<div class="flex min-h-[80dvh] w-full max-w-sm flex-col gap-4">
			<h4 class="flex items-baseline gap-4">
				<span class="text-base md:text-lg">Avant Studio</span>
				<span class="text-xs uppercase opacity-40">website / 1</span>
			</h4>
			<hr class="text-surface-variant" />
			<a
				href="/"
				class="group relative isolate flex flex-1 items-center justify-center overflow-hidden border border-surface-variant"
			>
				<img
					src={avantStudio}
					alt="Avant Studio"
					class="absolute top-1/2 left-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 scale-60 transition-transform duration-400 group-hover:scale-65"
				/>
				<span
					class="relative isolate scale-0 overflow-hidden rounded-full border border-surface-variant bg-surface p-3 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"
				>
					<IconArrowRightBold
						class="size-6 transition-transform delay-500 duration-400 group-hover:translate-x-20"
					/>
					<IconArrowRightBold
						class="absolute bottom-3 size-6 -translate-x-20 transition-transform delay-500 duration-400 group-hover:translate-x-0"
					/>
				</span>
			</a>
		</div>
		<div class="flex min-h-[80dvh] w-full max-w-sm flex-col gap-4">
			<h4 class="flex items-baseline gap-4">
				<span class="text-base md:text-lg">Crossroads</span>
				<span class="text-xs uppercase opacity-40">website / 2</span>
			</h4>
			<hr class="text-surface-variant" />
			<a
				href="/"
				class="group relative isolate flex flex-1 items-center justify-center overflow-hidden border border-surface-variant"
			>
				<img
					src={crossroads}
					alt="Crossroads"
					class="absolute top-1/2 left-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 scale-60 transition-transform duration-400 group-hover:scale-65"
				/>
				<span
					class="relative isolate scale-0 overflow-hidden rounded-full border border-surface-variant bg-surface p-3 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"
				>
					<IconArrowRightBold
						class="size-6 transition-transform delay-500 duration-400 group-hover:translate-x-20"
					/>
					<IconArrowRightBold
						class="absolute bottom-3 size-6 -translate-x-20 transition-transform delay-500 duration-400 group-hover:translate-x-0"
					/>
				</span>
			</a>
		</div>
	</div>
</section>
