<script lang="ts">
	import gsap from 'gsap';

	let headerEl: HTMLElement | null = null;
	let linkEl: HTMLElement | null = null;
	let lastScroll = $state<number>(0);
	let isHidden = $state<boolean>(false);

	let handleScroll = (): void => {
		const current = window.scrollY;

		if (current > lastScroll && current >= 60 && isHidden === false) {
			gsap.to(headerEl, {
				y: -headerEl!.offsetHeight,
				duration: 0.6,
				ease: 'power2.out'
			});
			isHidden = true;
		} else if (current < lastScroll && isHidden === true) {
			gsap.to(headerEl, {
				y: 0,
				duration: 0.6,
				ease: 'power2.out'
			});
			isHidden = false;
		}

		lastScroll = current;
	};

	$effect(() => {
		const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1 } });
		tl.from(headerEl, { opacity: 0 }).from(linkEl, { y: -10, opacity: 0 }, '-=0.4');

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="sticky top-0 z-50 border-b border-b-surface-variant bg-surface px-4"
	bind:this={headerEl}
>
	<nav
		class="flex w-full max-w-6xl items-center justify-between gap-4 place-self-center border-x border-x-surface-variant p-4 md:p-6 2xl:max-w-7xl"
	>
		<a
			bind:this={linkEl}
			href="/"
			class="flex flex-col gap-2 font-cervanttis text-2xl font-bold text-primary **:leading-none"
		>
			<span>deepak</span>
			<span>rawat</span>
		</a>
	</nav>
</header>
