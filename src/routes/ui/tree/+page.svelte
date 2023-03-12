<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import FolderTree from '$lib/components/FolderTree.svelte';
	import type { Folder } from '$lib/models/Folder';

	const tree: Folder = {
		isFolder: true,
		name: 'root',
		folders: [
			{
				isFolder: true,
				name: 'public',
				folders: [
					{
						isFolder: false,
						name: 'index.html'
					}
				]
			},
			{
				isFolder: true,
				name: 'src',
				folders: [
					{
						isFolder: false,
						name: 'App.js'
					},
					{
						isFolder: false,
						name: 'index.js'
					},
					{
						isFolder: true,
						name: 'css',
						folders: [
							{
								isFolder: false,
								name: 'app.css'
							}
						]
					}
				]
			},
			{
				isFolder: false,
				name: 'package.json'
			}
		]
	};
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/ui', name: 'Custom Components' }
	]}
	current="FileTree"
/>

<div class="flex flex-col items-start">
	<FolderTree folderTree={tree} isOpen />
</div>
