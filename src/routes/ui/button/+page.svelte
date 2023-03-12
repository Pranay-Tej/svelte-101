<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Button from '$lib/components/Button.svelte';

	const handleClick = () => {
		console.log('Click');
	};
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/ui', name: 'Custom Components' }
	]}
	current="Button"
/>

<div class="m-5 flex items-center gap-2">
	<Button on:click={handleClick}>Filled</Button>
	<Button on:click={handleClick} disabled>Disabled</Button>
	<Button on:click={handleClick}>
		<iconify-icon icon="carbon:add-alt" slot="leftIcon" />
		Left Icon
	</Button>
	<Button on:click={handleClick}>
		<iconify-icon icon="carbon:add-alt" slot="rightIcon" />
		Right Icon
	</Button>
	<Button on:click={handleClick} loading>Loading</Button>
</div>
<div class="m-5 flex items-center gap-2">
	<Button on:click={handleClick} variant="outline">Outlined</Button>
	<Button on:click={handleClick} variant="outline" disabled>Disabled</Button>
	<Button on:click={handleClick} variant="outline">
		<iconify-icon icon="carbon:add-alt" slot="leftIcon" />
		Left Icon
	</Button>
	<Button on:click={handleClick} variant="outline">
		<iconify-icon icon="carbon:add-alt" slot="rightIcon" />
		Right Icon
	</Button>
	<Button on:click={handleClick} loading variant="outline">Loading</Button>
</div>
