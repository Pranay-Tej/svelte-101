<script lang="ts">
	import { fade } from 'svelte/transition';

	export let open = false;
	export let size: 'sm' | 'md' | 'lg' = 'sm';

	let dialogElement: HTMLDialogElement;

	$: {
		console.log({ open });
		if (open) {
			dialogElement && dialogElement.showModal();
		} else {
			dialogElement && dialogElement.close();
		}
	}

	const clickAway = (node: HTMLElement) => {
		const handleOutsideClick = (e: MouseEvent) => {
			console.log(e.target);
			if (node.contains(e.target as Node)) {
				return;
			}
			dialogElement.close();
			// node.dispatchEvent(new CustomEvent('outclick'));
		};
		document.addEventListener('click', handleOutsideClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleOutsideClick, true);
			}
		};
	};
</script>

<dialog
	bind:this={dialogElement}
	on:close
	class="max-h-full w-full overflow-hidden rounded-lg bg-transparent p-0"
>
	{#if open}
		<!--
		on:outclick={() => {
			console.log('outclick');
			dialogElement.close();
		}}
		-->
		<div
			transition:fade={{ duration: 150 }}
			class="mx-auto w-full overflow-hidden rounded-lg bg-white shadow-lg md:w-[80%]"
			class:max-w-[360px]={size === 'sm'}
			class:max-w-[768px]={size === 'md'}
			class:max-w-[980px]={size === 'lg'}
			use:clickAway
		>
			{#if $$slots.dialogTitle}
				<div class="bg-white py-2 px-4">
					<slot name="dialogTitle" />
				</div>
			{/if}

			{#if $$slots.default}
				<div class="max-h-[80vh] overflow-y-auto p-4">
					<slot />
				</div>
			{/if}

			{#if $$slots.dialogActions}
				<div class="bg-white py-2 px-4">
					<slot name="dialogActions" />
				</div>
			{/if}
		</div>
	{/if}
</dialog>

<style lang="postcss">
	dialog::backdrop {
		@apply backdrop-blur-sm;
	}
</style>
