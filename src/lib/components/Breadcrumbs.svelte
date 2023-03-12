<script lang="ts">
	export let links: { link: string; name: string }[] = [];
	export let current: string;
</script>

<ul>
	{#each links as link, i}
		<li>
			<a href={link.link}>{link.name}</a>
			&sol;
		</li>
	{/each}
	<li>
		{#if current}
			{current}
		{/if}
	</li>
</ul>

<style>
	ul {
		list-style: none;
		display: flex;
		gap: 0.5em;
	}
	* {
		margin-bottom: 1.5em;
	}
</style>
