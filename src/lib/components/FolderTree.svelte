<script lang="ts">
	import type { Folder } from '$lib/models/Folder';
	import Button from './Button.svelte';

	export let folderTree: Folder;
	export let isOpen = false;
</script>

{#if !folderTree?.isFolder}
	<span>
		<iconify-icon icon="carbon:document" />
		{folderTree?.name}
	</span>
{:else}
	<Button
		variant="outline"
		on:click={() => {
			isOpen = !isOpen;
		}}
	>
		<iconify-icon icon="carbon:folder" slot="leftIcon" />
		<span>{folderTree.name}</span>
	</Button>
	{#if folderTree?.folders && isOpen}
		{#each folderTree.folders as folder}
			<span class="inline-flex flex-col items-start pl-6">
				<svelte:self folderTree={folder} />
			</span>
		{/each}
	{/if}
{/if}
