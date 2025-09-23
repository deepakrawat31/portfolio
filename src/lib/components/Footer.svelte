<script lang="ts">
	let fotterEl: HTMLElement | null = null;
</script>

<footer bind:this={fotterEl}>
	<nav
		class="flex h-[40dvh] w-full max-w-6xl items-center justify-between gap-4 place-self-center border-x border-x-surface-variant p-4 md:p-6 2xl:max-w-7xl"
	></nav>
</footer>
