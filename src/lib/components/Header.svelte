<script lang="ts">
	import IconPlusBold from 'phosphor-icons-svelte/IconPlusBold.svelte';
</script>

<header class="flex items-center justify-between gap-4 border-b border-b-surface-variant p-4">
	<a href="/" class="flex flex-col font-cervanttis text-3xl font-bold">
		<span>deepak</span>
		<span>rawat</span>
	</a>
	<button
		class="cursor-pointer rounded-full bg-surface-container p-3 text-on-surface-container transition-colors hover:bg-primary hover:text-on-primary"
	>
		<IconPlusBold class="size-6" />
	</button>
</header>
