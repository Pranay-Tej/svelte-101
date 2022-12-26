<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { debouncedStore } from '$lib/utils/stores/debouncedStore';
	import { afterUpdate } from 'svelte';

	interface Product {
		id: number;
		title: string;
		description: string;
	}

	const { value, debouncedValue } = debouncedStore<string>('', 750);

	let productList: Product[] = [];

	const fetchProductList = async () => {
		const res = await fetch(`https://dummyjson.com/products/search?q=${$value}`);
		const data = await res.json();
		productList = data.products as Product[];
	};

	$: {
		if ($debouncedValue) {
			console.log(`Calling api: ${$debouncedValue}`);
			fetchProductList();
		}
	}

	afterUpdate(() => {
		console.log('Debounce rerender');
	});
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/performance', name: 'Performance' }
	]}
	current="Debounce"
/>

<label for="search">Search</label>
<input bind:value={$value} placeholder="ex: Mobile, Laptop" name="search" id="search" />

<p>Value: {$value}</p>
<p>Debounced Value: {$debouncedValue}</p>

{#each productList as product (product.id)}
	<pre>{JSON.stringify(product, null, 2)}</pre>
{/each}
