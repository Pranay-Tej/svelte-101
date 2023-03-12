<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import TextInput from '$lib/components/TextInput.svelte';

	let name = '';
	let inputRef: HTMLInputElement | undefined = undefined;
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/ui', name: 'Custom Components' }
	]}
	current="Text Input"
/>

<div class="m-5 flex items-center gap-2">
	<TextInput label="Name" placeholder="Your full name" bind:value={name} bind:element={inputRef} />

	<p>Value: {name}</p>

	<button
		class="btn"
		on:click={() => {
			console.log(inputRef);
			inputRef && inputRef.focus();
		}}>Focus</button
	>
</div>

<div class="m-5 flex items-center gap-2">
	<TextInput
		label="Name (with autoFocus)"
		placeholder="Your full name"
		bind:value={name}
		autoFocus
	/>

	<p>Value: {name}</p>
</div>

<div class="m-5 flex items-center gap-2">
	<TextInput label="Name" placeholder="Your full name" bind:value={name}>
		<iconify-icon icon="carbon:email" slot="leftIcon" />
	</TextInput>
	<TextInput label="Name" placeholder="Your full name" bind:value={name}>
		<iconify-icon icon="carbon:email" slot="rightIcon" />
	</TextInput>

	<p>Value: {name}</p>
</div>
