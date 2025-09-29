<script lang="ts">
	import { services } from '$lib';
</script>

<section class="relative isolate px-4">
	<span class="absolute inset-0 bottom-0 -z-10 border-b border-surface-variant"></span>
	<div
		class="min-h-[80dvh] w-full max-w-6xl items-center justify-between gap-4 place-self-center border-x border-x-surface-variant p-4 md:gap-6 md:p-6 2xl:max-w-7xl"
	>
		<div class="flex flex-col gap-4">
			<h4 class="w-full max-w-xl text-xl leading-relaxed text-pretty md:text-2xl">
				Deepak - Frontend Developer with hands on experience. I've built and deployed multiple
				websites, freelanced on client projects. Ready to create impactful experiences while growing
				my skills.
			</h4>
			<p class="w-full max-w-xl leading-relaxed text-pretty opacity-40">
				Eager to grow and refine my skills by taking on new challenges, from small to larger
				projects - I have knowledge in the following categories below.
			</p>
			<ul class="flex flex-col gap-4 md:gap-6">
				{#each services as service}
					<li class="flex flex-col gap-4 text-xl uppercase md:gap-6 md:text-2xl">
						<span class="flex gap-4 md:gap-6">
							<span>{service.id + 1}.</span>
							<h6>{service.title}</h6>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
