<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	import Content from './Content.svelte';
	import Counter from './Counter.svelte';

	let count = 0;
	let content = '';
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/performance', name: 'Performance' }
	]}
	current="Props"
/>

<p>Components are memoized by default in svelte. They don't rerender until their props change</p>

<hr />

<button
	on:click={() => {
		count = count + 1;
	}}>Increase</button
>

<Counter {count} />

<hr />

<input type="text" bind:value={content} />

<Content {content} />
