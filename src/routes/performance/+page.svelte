<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
</script>

<Breadcrumbs links={[{ link: '/', name: 'Home' }]} current="Performance" />

<ul>
	<li>
		<a href="/performance/props">Props</a>
	</li>
	<li>
		<a href="/performance/refs">Refs</a>
	</li>
	<li>
		<a href="/performance/list">List</a>
	</li>
	<li>
		<a href="/performance/debounce">Debounce</a>
	</li>
</ul>
