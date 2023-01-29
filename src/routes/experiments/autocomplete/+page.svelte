<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { createDebouncedStore } from '$lib/utils/stores/createDebouncedStore';
	import { onDestroy, onMount } from 'svelte';

	interface User {
		id: number;
		name: string;
	}

	let isLoading = false;
	let error: any;
	let suggestions: User[] | undefined;

	const { value: searchTerm, debouncedValue: debouncedSearchTerm } =
		createDebouncedStore<string>('');

	let inputElement: HTMLElement;
	let autoCompleteListElement: HTMLElement;

	let isFocused = false;
	let selectedSuggestionIndex = -1;

	const handleClickOutside = (e: any) => {
		if (autoCompleteListElement.contains(e.target)) {
			return;
		}
		isFocused = false;
	};

	const fetchUserList = async () => {
		try {
			isLoading = true;
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/users?name_like=${$debouncedSearchTerm}`
			);
			suggestions = await res.json();
			if (suggestions && suggestions.length > 0) {
				selectedSuggestionIndex = 0;
			}
		} catch (err) {
			console.error(err);
			error = JSON.stringify(err);
		} finally {
			isLoading = false;
		}
	};

	$: {
		suggestions = undefined;
		error = undefined;
		if ($debouncedSearchTerm?.length > 0) {
			inputElement?.focus();
			selectedSuggestionIndex = -1;

			fetchUserList();
		}
	}

	const handleKeyDown = (e: any) => {
		// up arrow
		if (e.keyCode === 38) {
			selectedSuggestionIndex =
				selectedSuggestionIndex === 0
					? (suggestions?.length ?? 0) - 1
					: selectedSuggestionIndex - 1;
		}

		// down arrow
		if (e.keyCode === 40) {
			selectedSuggestionIndex = (selectedSuggestionIndex + 1) % (suggestions?.length ?? 0);
		}

		// enter
		if (e.keyCode === 13) {
			//   history.push(`/users/${suggestions[selectedSuggestionIndex].id}`);
			$searchTerm = suggestions?.[selectedSuggestionIndex].name ?? '';
		}

		// esc
		if (e.keyCode === 27) {
			isFocused = false;
			inputElement.blur();
		}
	};

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutside);
	});
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/experiments', name: 'Experiments' }
	]}
	current="Auto Complete"
/>

<div
	bind:this={autoCompleteListElement}
	class="mx-auto mt-32 flex max-w-md flex-col items-stretch "
>
	<input
		name="username"
		id="username"
		bind:this={inputElement}
		placeholder="Search for a user..."
		type="text"
		bind:value={$searchTerm}
		on:keydown={handleKeyDown}
		on:focus={() => {
			isFocused = true;
		}}
		autocomplete="off"
	/>

	<div class=" pt-3">
		{#if isFocused && suggestions && suggestions.length > 0}
			{#each suggestions as suggestion, index (suggestion?.id)}
				<div
					class={`cursor-pointer p-2 ${
						index === selectedSuggestionIndex ? 'bg-gray-200' : ''
					} transition-colors`}
					on:mouseenter={() => {
						selectedSuggestionIndex = index;
					}}
					on:click={() => {
						// history.push(`/users/${suggestions[selectedSuggestionIndex].id}`);
						$searchTerm = suggestion?.name;
					}}
					on:keydown={() => {
						$searchTerm = suggestion?.name;
					}}
				>
					{suggestion.name}
				</div>
			{/each}
		{/if}

		{#if isLoading}
			<div>Loading...</div>
		{/if}

		{#if isFocused && suggestions && suggestions.length === 0}
			<div>No results found</div>
		{/if}

		{#if error}
			<div>{error}</div>
		{/if}
	</div>
</div>
