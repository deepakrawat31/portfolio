<script>
	import Project from '../components/Project.svelte';
	import Header from '../components/Header.svelte';
	import Hero from '../components/Hero.svelte';
	import Contact from '../components/Contact.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<svelte:head>
	<title>Deepak | Frontend Developer</title>
</svelte:head>

{#if animate}
	<div
		class="ring-2 ring-black flex flex-col gap-0.5"
		in:fade={{
			duration: 800,
			delay: 100,
			easing: quintInOut
		}}
	>
		<Header />
		<Hero />
		<Project />
		<Contact />
		<Footer />
	</div>
{/if}
