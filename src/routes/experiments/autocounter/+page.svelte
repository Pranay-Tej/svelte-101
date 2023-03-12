<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { onDestroy } from 'svelte';

	let intervalId: NodeJS.Timeout;

	let count = 0;

	let isRunning = false;

	const handleStart = () => {
		isRunning = true;
		intervalId = setInterval(() => {
			count = count + 1;
		}, 1000);
	};

	const handlePause = () => {
		isRunning = false;
		clearInterval(intervalId);
	};

	const handleReset = () => {
		isRunning = false;
		count = 0;
		clearInterval(intervalId);
	};

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/experiments', name: 'Experiments' }
	]}
	current="Auto Counter"
/>

<p>{count}</p>

{#if isRunning}
	<button class="btn" on:click={handlePause}>Pause</button>
	<button class="btn" on:click={handleReset}>Reset</button>
{:else if !isRunning && count === 0}
	<button class="btn" on:click={handleStart}>Start</button>
{:else}
	<button class="btn" on:click={handleStart}>Resume</button>
	<button class="btn" on:click={handleReset}>Reset</button>
{/if}
