<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let count: number;

	afterUpdate(() => {
		console.log('Counter rerender');
	});
</script>

<p>Count: {count}</p>
