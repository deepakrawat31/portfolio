<script></script>

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
	<div class="p-8 bg-purple-400">
		<h1>Welcome to SvelteKit</h1>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</div>
</section>
