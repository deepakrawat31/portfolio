<script lang="ts">
	import { services } from '$lib';

	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	let serviceEl: HTMLElement | null = null;
	let headingEl: HTMLElement | null = null;
	let subEl: HTMLElement | null = null;

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			defaults: {
				ease: 'power1.inOut',
				duration: 0.6
			}
		});
		tl.from(serviceEl, { opacity: 0 })
			.from(headingEl, {
				scrollTrigger: {
					trigger: serviceEl,
					start: 'top 60%'
				},
				y: -10,
				opacity: 0,
				delay: 0.1
			})
			.from(subEl, {
				scrollTrigger: {
					trigger: serviceEl,
					start: 'top 60%'
				},
				y: -10,
				opacity: 0,
				delay: 0.1
			});
	});
</script>

<section class="relative isolate px-4" bind:this={serviceEl}>
	<span class="absolute inset-0 bottom-0 -z-10 border-b border-surface-variant"></span>
	<div
		class="min-h-[80dvh] w-full max-w-6xl items-center justify-between gap-4 place-self-center border-x border-x-surface-variant p-4 md:gap-6 md:p-6 2xl:max-w-7xl"
	>
		<div class="flex flex-col gap-4">
			<h4
				class="w-full max-w-xl text-xl leading-relaxed text-pretty md:text-2xl"
				bind:this={headingEl}
			>
				Deepak - Frontend Developer with hands on experience. I've developed multiple websites,
				freelanced on client projects. Ready to create impactful experiences while growing my
				skills.
			</h4>
			<p class="w-full max-w-xl leading-relaxed text-pretty opacity-40" bind:this={subEl}>
				Eager to grow and refine my skills by taking on new challenges, from small to larger
				projects - I have knowledge in the following categories below.
			</p>
			<ul class="flex flex-col gap-4 md:gap-6">
				{#each services as service}
					<li class="flex w-full max-w-xl flex-col gap-4 md:gap-6">
						<hr class="text-surface-variant" />
						<span class="uppercase">
							{service.title}
						</span>
						<span>[0{service.id + 1}]</span>
						<p class="leading-relaxed text-pretty opacity-40">
							{service.description}
						</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
