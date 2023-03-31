<script lang="ts">
	import '../app.css';
	import 'iconify-icon';

	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Svelte 101</title>
</svelte:head>

<main>
	<Header />
	<slot />
</main>

<style>
	main {
		margin: 0 2em;
	}
	@media screen and (min-width: 768px) {
		main {
			margin: 0 5em;
		}
	}
</style>
