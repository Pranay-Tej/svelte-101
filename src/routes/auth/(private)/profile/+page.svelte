<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		if (document) {
			console.log(document.cookie);
		}
	});
</script>

<svelte:head>
	<title>{$page.data.userId}</title>
</svelte:head>

<div>Private Route</div>
<div>UserId: {$page.data.userId}</div>
