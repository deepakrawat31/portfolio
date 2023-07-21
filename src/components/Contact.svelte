<script>
	import { IconAsterisk, IconAt, IconMailbox, IconMessage2, IconUser } from '@tabler/icons-svelte';

	let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section id="contact" class="bg-emerald-400 ring-2 ring-black flex flex-col gap-0.5">
	<div
		class="flex items-center justify-between p-2 bg-amber-400 ring-2 ring-black text-xl md:text-2xl uppercase font-bold"
	>
		<h2 class="select-none">Contact</h2>
		<div class="flex items-center gap-2">
			{#each { length: 3 } as _}
				<span class="h-2 md:h-3 aspect-square rounded-full bg-slate-300 ring-2 ring-black" />
			{/each}
		</div>
	</div>
	<div class="flex items-center justify-center p-4 md:p-12 overflow-hidden">
		<div class="max-w-2xl w-full flex flex-col gap-0.5 relative isolate">
			<div
				class="flex items-center justify-between bg-amber-400 ring-2 ring-black text-lg md:text-xl uppercase font-bold"
			>
				<p class="select-none p-2">drop a text</p>
				<div class="p-2 ring-2 ring-black">
					<IconMailbox size={28} />
				</div>
			</div>
			<div class="bg-slate-300 ring-2 ring-black p-4 md:p-8">
				<form action="" class="flex flex-col gap-12">
					<div class="text-sm bg-emerald-400 relative ring-2 ring-black shadow-neubrut-b-6">
						<span class="absolute left-0 top-0 p-1.5 ring-2 ring-black bg-amber-400"
							><IconUser size={28} /></span
						>
						<input
							type="text"
							id="name"
							placeholder="your name"
							autocomplete="off"
							required
							class="bg-transparent w-full h-10 px-12 focus:outline-none uppercase font-semibold placeholder:uppercase placeholder:text-slate-700 placeholder:font-semibold"
						/>
						<span class="absolute right-0 top-0 p-1.5 ring-2 ring-black bg-amber-400"
							><IconAsterisk size={28} /></span
						>
					</div>
					<div class="text-sm relative ring-2 ring-black shadow-neubrut-b-6">
						<span class="absolute p-1.5 ring-2 ring-black bg-amber-400"><IconAt size={28} /></span>
						<input
							type="email"
							id="email"
							placeholder="your email"
							autocomplete="off"
							class=" valid:bg-emerald-400 invalid:bg-rose-400 transition-colors duration-300 w-full h-10 pl-12 pr-2 focus:outline-none font-semibold placeholder:uppercase placeholder:text-slate-700 placeholder:font-semibold"
						/>
					</div>
					<div class="text-sm bg-emerald-400 relative ring-2 ring-black shadow-neubrut-b-6">
						<span class="absolute p-1.5 ring-2 ring-black bg-amber-400"
							><IconMessage2 size={28} /></span
						>
						<input
							type="text"
							id="message"
							placeholder="any message"
							autocomplete="off"
							class="bg-transparent w-full h-10 pl-12 pr-2 focus:outline-none uppercase font-semibold placeholder:uppercase placeholder:text-slate-700 placeholder:font-semibold"
						/>
					</div>
					<button
						type="submit"
						class="relative bg-violet-400 ring-2 ring-black shadow-neubrut-b-6 h-10 font-bold text-lg uppercase"
					>
						submit
					</button>
				</form>
			</div>
			{#if screenWidth > 768}
				<span class="absolute -z-10 -left-24 -top-10 rotate-6">
					<svg
						viewBox="0 0 220 252"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="aspect-square h-32"
					>
						<path
							d="M2.8808 64.1547L110 2.3094L217.119 64.1547V187.845L110 249.691L2.8808 187.845V64.1547Z"
							fill="#D8EA6B"
							stroke="black"
							stroke-width="4"
						/>
					</svg>
				</span>
				<span class="absolute -z-10 -right-24 top-36 -rotate-12">
					<svg
						viewBox="0 0 268 268"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="aspect-square h-32"
					>
						<path
							d="M132.41 3.41249C132.41 3.41242 132.41 3.41235 132.41 3.41228C132.634 1.52924 135.366 1.52924 135.59 3.41228C135.59 3.41235 135.59 3.41242 135.59 3.41249L139.806 38.9443C145.359 85.7435 182.257 122.641 229.055 128.194L264.587 132.41C266.471 132.634 266.471 135.366 264.587 135.59L229.055 139.806C182.257 145.359 145.359 182.257 139.806 229.055L135.59 264.587C135.366 266.471 132.634 266.471 132.41 264.587L128.194 229.055C122.641 182.257 85.7435 145.359 38.9443 139.806L3.41249 135.59C3.41242 135.59 3.41235 135.59 3.41228 135.59C1.52924 135.366 1.52924 132.634 3.41228 132.41C3.41235 132.41 3.41242 132.41 3.41249 132.41L38.9443 128.194C85.7435 122.641 122.641 85.7435 128.194 38.9443L132.41 3.41249Z"
							fill="#F2994A"
							stroke="black"
							stroke-width="4"
						/>
					</svg>
				</span>
				<span class="absolute -z-10 -left-16 -bottom-12 -rotate-12">
					<svg
						viewBox="0 0 138 207"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="aspect-square h-32"
					>
						<path
							d="M67 138V140H69H136V205H69H2V138V69V2H67V69V138Z"
							fill="#F95371"
							stroke="black"
							stroke-width="4"
						/>
					</svg>
				</span>
			{/if}
		</div>
	</div>
</section>
