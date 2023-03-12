<script lang="ts">
	export let variant: 'filled' | 'outline' | 'text' = 'filled',
		loading: boolean = false,
		type: 'button' | 'reset' | 'submit' | null | undefined = 'button',
		disabled: boolean = false;
</script>

<button
	{type}
	disabled={loading || disabled}
	on:click
	class="inline-flex h-8 items-center rounded-sm py-[3px]  px-5 active:translate-y-[1px]"
	class:filled={variant === 'filled'}
	class:outlined={variant === 'outline'}
	class:disabled={loading || disabled}
>
	{#if loading}
		<span class="mr-1 inline-flex animate-spin items-center">
			<iconify-icon icon="carbon:rotate-180" />
		</span>
	{:else if $$slots.leftIcon}
		<span class="mr-1 inline-flex items-center">
			<slot name="leftIcon" />
		</span>
	{/if}

	<slot />

	{#if $$slots.rightIcon}
		<span class="ml-1 inline-flex items-center">
			<slot name="rightIcon" />
		</span>
	{/if}
</button>

<style lang="postcss">
	button {
		box-sizing: border-box;
		border-width: 2px;
	}
	.filled {
		@apply border-blue-500 bg-blue-500 text-white hover:border-blue-400 hover:bg-blue-400;
	}
	.outlined {
		@apply border-blue-500 text-gray-900 hover:bg-blue-100;
	}
	.disabled[disabled] {
		@apply bg-gray-300 active:translate-y-0;
	}
</style>
