<script lang="ts">
	import { createEventDispatcher, afterUpdate } from 'svelte';
	export let item: number;
	export let selected: boolean;

	const dispatch = createEventDispatcher();

	afterUpdate(() => {
		console.log(item);
	});
</script>

<button
	class:selected
	on:click={() => {
		dispatch('select', item);
	}}
>
	{item}
</button>

<style>
	button {
		padding: 1em;
		margin: 5px;
	}
	.selected {
		background-color: hsl(234, 50%, 60%);
		color: white;
	}
</style>
