<script lang="ts">
	let fotterEl: HTMLElement | null = null;
</script>

<footer bind:this={fotterEl} class="px-4">
	<div
		class="flex h-[40dvh] w-full max-w-6xl flex-col justify-between gap-4 place-self-center border-x border-x-surface-variant p-4 md:p-6 2xl:max-w-7xl"
	>
		<div class="flex justify-between gap-4">
			<nav
				class="flex flex-col gap-4 **:opacity-40 **:transition-opacity **:duration-400 **:hover:opacity-100"
			>
				<a href="/">Github</a>
				<a href="/">X / Twitter</a>
			</nav>
			<span class="font-cervanttis text-2xl font-bold text-primary">deepak rawat</span>
		</div>
		<div class="flex items-end justify-between gap-4 uppercase opacity-40">
			<span>frontend developer</span>
			<span>2025</span>
		</div>
	</div>
</footer>
