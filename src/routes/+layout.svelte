<script lang="ts">
	import '../app.css';
	import 'iconify-icon';

	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Svelte 101</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>
