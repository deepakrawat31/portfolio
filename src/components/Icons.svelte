<script>
	import {
		IconBrandCss3,
		IconBrandFigma,
		IconBrandFramerMotion,
		IconBrandGithub,
		IconBrandHtml5,
		IconBrandJavascript,
		IconBrandNextjs,
		IconBrandNodejs,
		IconBrandReact,
		IconBrandSupabase,
		IconBrandSvelte,
		IconBrandTailwind,
		IconBrandTypescript,
		IconBrandVisualStudio,
		IconBrandVue
	} from '@tabler/icons-svelte';

	let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="flex flex-col relative isolate overflow-hidden">
	<div class="p-4 md:p-6 flex flex-wrap items-center justify-start gap-4 md:gap-6">
		<span class="p-0.5 bg-emerald-400 ring-2 ring-black relative">
			<IconBrandHtml5 stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-emerald-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in-out"
					>html</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-emerald-400 ring-2 ring-black relative">
			<IconBrandCss3 stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-emerald-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>css</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-emerald-400 ring-2 ring-black relative">
			<IconBrandJavascript stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-emerald-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>javascript</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-emerald-400 ring-2 ring-black relative">
			<IconBrandTypescript stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-emerald-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>typescript</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-emerald-400 ring-2 ring-black relative">
			<IconBrandNodejs stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-emerald-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>Node.js</span
				>
			{/if}
		</span>
	</div>
	<div class="p-4 md:p-6 flex flex-wrap items-center justify-start gap-4 md:gap-6">
		<span class="p-0.5 bg-indigo-400 ring-2 ring-black relative">
			<IconBrandReact stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-indigo-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>react.js</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-indigo-400 ring-2 ring-black relative">
			<IconBrandSvelte stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-indigo-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>svelte</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-indigo-400 ring-2 ring-black relative">
			<IconBrandVue stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-indigo-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>vue</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-indigo-400 ring-2 ring-black relative">
			<IconBrandNextjs stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-indigo-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>next.js</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-indigo-400 ring-2 ring-black relative">
			<IconBrandTailwind stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-indigo-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>tailwind</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-indigo-400 ring-2 ring-black relative">
			<IconBrandFramerMotion stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -bottom-8 -left-0 px-1 py-0.5 block bg-indigo-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in whitespace-nowrap"
					>framer motion</span
				>
			{/if}
		</span>
	</div>
	<div class="p-4 md:p-6 flex flex-wrap items-center justify-start gap-4 md:gap-6">
		<span class="p-0.5 bg-rose-400 ring-2 ring-black relative">
			<IconBrandVisualStudio stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -top-8 -left-0 px-1 py-0.5 block bg-rose-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in whitespace-nowrap"
					>vs code</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-rose-400 ring-2 ring-black relative">
			<IconBrandGithub stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -top-8 -left-0 px-1 py-0.5 block bg-rose-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>github</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-rose-400 ring-2 ring-black relative">
			<IconBrandFigma stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -top-8 -left-0 px-1 py-0.5 block bg-rose-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>figma</span
				>
			{/if}
		</span>
		<span class="p-0.5 bg-rose-400 ring-2 ring-black relative">
			<IconBrandSupabase stroke={1.5} class="h-8 w-8 md:h-10 md:w-10 peer" />
			{#if screenWidth > 768}
				<span
					class="absolute -top-8 -left-0 px-1 py-0.5 block bg-rose-400 text-sm font-medium ring-2 ring-black uppercase scale-0 peer-hover:scale-100 transition-transform duration-300 ease-in"
					>supabase</span
				>
			{/if}
		</span>
	</div>
	<span class="absolute -right-10 md:-right-6 -top-10 md:-top-6 -z-10 transition-all duration-500">
		<svg
			class="aspect-square h-32"
			viewBox="0 0 228 224"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M47.0562 113.732L50.0531 112L47.0562 110.268L2.73195 84.6567L34.678 29.3429L79.0291 54.9108L82.0263 56.6386L82.028 53.1791L82.053 2H145.947L145.972 53.1791L145.974 56.6387L148.971 54.9108L193.322 29.3429L225.268 84.6567L180.943 110.268L177.946 112L180.943 113.732L225.268 139.343L193.322 194.657L148.971 169.089L145.974 167.361L145.972 170.821L145.947 222H82.053L82.028 170.821L82.0263 167.361L79.0291 169.089L34.678 194.657L2.73194 139.343L47.0562 113.732Z"
				fill="#F8B3B8"
				stroke="black"
				stroke-width="4"
			/>
		</svg>
	</span>
</div>
