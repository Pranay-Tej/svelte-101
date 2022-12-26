<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { afterUpdate } from 'svelte';

	let count: number = 0;

	afterUpdate(() => {
		console.log('Refs rerender');
	});

	const handleIncrease = () => {
		count = count + 1;
		console.log({ count });
	};
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/performance', name: 'Performance' }
	]}
	current="Refs"
/>

<p>
	Component does not rerender until the value is used in template (html). Similar to useRef in
	react. Can be used to store background values like timer Ids
</p>

<button on:click={handleIncrease}>Increase</button>
