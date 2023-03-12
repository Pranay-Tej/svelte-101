<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
</script>

<Breadcrumbs links={[{ link: '/', name: 'Home' }]} current="Custom Components" />

<ul>
	<li>
		<a href="/ui/button">Button</a>
	</li>
	<li>
		<a href="/ui/text-input">Text Input</a>
	</li>
</ul>
