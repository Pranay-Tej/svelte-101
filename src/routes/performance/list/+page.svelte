<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ListItem from './ListItem.svelte';

	let items = [1, 2, 3, 5, 6];
	let selected = 1;
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/performance', name: 'Performance' }
	]}
	current="List"
/>

<p>Only list items whose props have changed rerender</p>

<div>
	{#each items as item (item)}
		<ListItem
			{item}
			selected={selected === item}
			on:select={(e) => {
				selected = e.detail;
			}}
		/>
	{/each}
</div>
