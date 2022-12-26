<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
</script>

<Breadcrumbs links={[{ link: '/', name: 'Home' }]} current="Experiments" />

<ul>
	<li>
		<a href="/experiments/autocounter">Auto Counter</a>
	</li>
</ul>
