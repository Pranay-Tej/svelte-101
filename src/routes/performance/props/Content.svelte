<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let content: string;

	afterUpdate(() => {
		console.log('Content rerender');
	});
</script>

<p>Content: {content}</p>
