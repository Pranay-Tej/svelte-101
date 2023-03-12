<script lang="ts">
	import { onMount } from 'svelte';

	export let value = '';
	export let label = '';
	export let placeholder = '';
	export let disabled = false;
	export let autoFocus = false;

	let inputRef: HTMLInputElement | undefined = undefined;

	export { inputRef as element };

	onMount(() => {
		autoFocus && inputRef && inputRef.focus();
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={() => {
		inputRef && inputRef.focus();
	}}
>
	<label for="label" class="mb-1 block text-xs font-semibold">{label}</label>
	<div
		class="field flex cursor-text items-center gap-2 rounded-sm border-[1px] border-gray-400 py-1 px-3"
	>
		{#if $$slots.leftIcon}
			<span class="pt-1">
				<slot name="leftIcon" />
			</span>
		{/if}
		<input
			bind:this={inputRef}
			bind:value
			on:change
			type="text"
			class="border-0 p-0 text-gray-900 placeholder:text-sm focus:border-0 focus:outline-none focus:ring-0"
			{placeholder}
			{disabled}
		/>
		{#if $$slots.rightIcon}
			<span class="pt-1">
				<slot name="rightIcon" />
			</span>
		{/if}
	</div>
</div>

<style lang="postcss">
	.field:has(input:focus) {
		@apply border-blue-500;
	}
</style>
