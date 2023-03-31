<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let inputValue = '';
	export let suggestions: string[] = [];

	let isSuggestionsVisible = false;
	let selectedSuggestionIndex = -1;
	let inputElement: HTMLInputElement;

	const replaceInput = () => {
		// debugger;
		let startIndex = 0;
		const cursorPositionIndex = inputElement.selectionStart ?? 0;
		for (let i = cursorPositionIndex; i >= 0; i--) {
			if (inputValue.charAt(i) === ' ' && i != cursorPositionIndex) {
				startIndex = i + 1;
				break;
			}
		}
		const left = inputValue.substring(0, startIndex);
		const right = inputValue.substring(cursorPositionIndex);
		inputValue = left + '@' + suggestions[selectedSuggestionIndex] + right;
		// console.log({ left, right });

		inputElement.focus();

		// prevent cursor from moving to the end
		inputElement.setSelectionRange(
			startIndex + suggestions[selectedSuggestionIndex].length,
			startIndex + suggestions[selectedSuggestionIndex].length
		);

		isSuggestionsVisible = false;
		selectedSuggestionIndex = -1;
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (!isSuggestionsVisible) {
			return;
		}

		// backspace
		if (e.key === 'Backspace') {
			isSuggestionsVisible = false;
			selectedSuggestionIndex = -1;
		}

		// up arrow
		if (e.key === 'ArrowUp') {
			selectedSuggestionIndex =
				selectedSuggestionIndex === 0
					? (suggestions?.length ?? 0) - 1
					: selectedSuggestionIndex - 1;
			e.preventDefault();
		}

		// down arrow
		if (e.key === 'ArrowDown') {
			selectedSuggestionIndex = (selectedSuggestionIndex + 1) % (suggestions?.length ?? 0);
			e.preventDefault();
		}

		// enter
		if (e.key === 'Enter') {
			e.preventDefault();
			replaceInput();
		}

		// esc
		if (e.key === 'Escape') {
			isSuggestionsVisible = false;
		}
	};

	const handleInput = (e: Event) => {
		const inputEl = e.target as HTMLInputElement;

		inputValue = inputEl.value;

		let lastWordFromCursor = '';
		const cursorPositionIndex = inputElement.selectionStart ?? 0;

		console.log({ cursorPositionIndex });
		for (let i = cursorPositionIndex; i >= 0; i--) {
			if (i === 0) {
				lastWordFromCursor = inputValue.substring(0, cursorPositionIndex);
			}
			if (inputValue.charAt(i) === ' ' && i !== cursorPositionIndex) {
				console.log({ i: inputValue.charAt(i + 1) });

				lastWordFromCursor = inputValue.substring(i + 1, cursorPositionIndex);
				break;
			}
		}
		console.log({ lastWordFromCursor });

		if (lastWordFromCursor.charAt(0) === '@') {
			isSuggestionsVisible = true;
			dispatch('mention', lastWordFromCursor.substring(1));
		}
	};
</script>

<p class="mb-5">
	Type "@" to see suggestions. up, down arrows to navigate suggestions. Enter to select suggestion
</p>
<p class="mb-5">TODO: prevent cursor from moving to the end</p>

<!-- bind:value -->
<input
	value={inputValue}
	bind:this={inputElement}
	on:input={handleInput}
	on:keydown={handleKeyDown}
	type="text"
	class="w-full p-0 text-gray-900 placeholder:text-sm focus:outline-none focus:ring-0"
/>

{#if isSuggestionsVisible}
	<div class="max-w-sm">
		{#each suggestions as suggestion, index (suggestion)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={`cursor-pointer p-2 ${
					index === selectedSuggestionIndex ? 'bg-gray-200' : ''
				} transition-colors`}
				on:mouseenter={() => {
					selectedSuggestionIndex = index;
				}}
				on:click={() => {
					replaceInput();
				}}
			>
				{suggestion}
			</div>
		{/each}
	</div>
{/if}

{#if isSuggestionsVisible && suggestions && suggestions.length === 0}
	<div>No results found</div>
{/if}
