<script>
	import { fly } from 'svelte/transition';
	import { quartIn } from 'svelte/easing';
	const nav = [
		{
			title: 'about',
			to: 'about'
		},
		{
			title: 'projects',
			to: 'projects'
		},
		{
			title: 'contact',
			to: 'contact'
		}
	];

	let scroll;
	let screenWidth;
	let navOpen = false;
</script>

<svelte:window bind:scrollY={scroll} bind:innerWidth={screenWidth} />

<header
	class={`md:flex md:items-center md:justify-between md:gap-2 z-10 px-2 md:px-4 md:py-3 transition-colors duration-500 ring-2 ring-black sticky top-0 ${
		scroll > 20 ? 'bg-orange-400' : 'bg-slate-300'
	}`}
>
	{#if screenWidth > 768}
		<div class="flex items-center gap-2">
			{#each { length: 3 } as _}
				<span
					class={`h-2 md:h-3 aspect-square rounded-full ring-2 ring-black transition-colors duration-500 ${
						scroll > 20 ? 'bg-slate-300' : ' bg-orange-400'
					}`}
				/>
			{/each}
		</div>
		<nav class="flex items-center gap-6">
			{#each nav as item}
				<a href={`#${item.to}`} class="px-2 py-1 text-sm font-medium uppercase">{item.title}</a>
			{/each}
			<a
				href="/files/deepakrawat_cv.pdf"
				download
				class="px-2 py-1 text-sm font-medium uppercase bg-purple-400 ring-2 ring-black shadow-neubrut-4"
				>Resume</a
			>
		</nav>
	{:else}
		<button
			class="flex items-center gap-2 w-full py-3"
			on:click={() => {
				navOpen = !navOpen;
			}}
		>
			{#each { length: 3 } as _}
				<span
					class={`h-2 md:h-3 aspect-square rounded-full ring-2 ring-black transition-colors duration-500 ${
						scroll > 20 ? 'bg-slate-300' : ' bg-orange-400'
					}`}
				/>
			{/each}
		</button>
	{/if}
	{#if navOpen && screenWidth < 768}
		<nav
			class="fixed inset-2 flex flex-col gap-0 ring-2 ring-black bg-slate-300"
			in:fly={{
				y: -8,
				duration: 400,
				easing: quartIn
			}}
			out:fly={{
				y: 8,
				duration: 400,
				easing: quartIn
			}}
		>
			<button
				class="flex items-center gap-2 px-2 py-3 ring-2 ring-black bg-slate-300"
				on:click={() => {
					navOpen = !navOpen;
				}}
			>
				<span class="h-2 md:h-3 aspect-square rounded-full bg-rose-400 ring-2 ring-black" />
			</button>
			{#each nav as item}
				<a
					href={`#${item.to}`}
					class="p-2 text-3xl font-medium uppercase ring-2 ring-black bg-slate-300"
					on:click={() => {
						navOpen = !navOpen;
					}}>{item.title}</a
				>
			{/each}
			<a
				href="/files/deepakrawat_cv.pdf"
				download
				class="p-2 text-3xl font-medium uppercase bg-rose-400 ring-2 ring-black"
				on:click={() => {
					navOpen = !navOpen;
				}}>Resume</a
			>
		</nav>
	{/if}
</header>
