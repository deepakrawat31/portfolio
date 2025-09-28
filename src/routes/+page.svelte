<script lang="ts">
	import { mainHeading } from '$lib';
	import Projects from '$lib/components/Projects.svelte';
	import Services from '$lib/components/Services.svelte';
	import IconArrowRightBold from 'phosphor-icons-svelte/IconArrowRightBold.svelte';
</script>

<s-head>
	<title>Deepak Rawat</title>
</s-head>

<main class="relative isolate px-4">
	<span class="absolute inset-0 bottom-0 -z-10 border-b border-surface-variant"></span>
	<div
		class="flex h-[95dvh] w-full max-w-6xl flex-col items-end justify-end gap-4 place-self-center border-x border-x-surface-variant p-4 md:gap-6 md:p-6 2xl:max-w-7xl"
	>
		<span
			class="relative min-h-[30dvh] w-full max-w-xl overflow-hidden bg-gradient-to-b from-transparent to-surface"
		>
			<h2 class="absolute inset-0 -z-10 text-xl leading-relaxed text-pretty md:text-2xl">
				{mainHeading}
			</h2>
		</span>
		<a href={'/'} class="group flex w-full max-w-xl items-center justify-between gap-4">
			<span
				class="text-sm uppercase opacity-40 transition-opacity duration-400 group-hover:opacity-100"
				>[about me]</span
			>
			<span class="relative isolate overflow-hidden rounded-full border border-surface-variant p-3">
				<IconArrowRightBold
					class="size-6 transition-transform duration-400 group-hover:translate-x-20"
				/>
				<IconArrowRightBold
					class="absolute bottom-3 size-6 -translate-x-20 transition-transform duration-400 group-hover:translate-x-0"
				/>
			</span>
		</a>
	</div>
</main>
<Projects />
<Services />
