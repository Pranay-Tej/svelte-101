<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import MentionInput from '$lib/components/MentionInput.svelte';

	interface User {
		firstName: string;
		lastName: string;
	}

	let inputValue = '';
	let users: User[] = [];

	$: userNames = users.map((user) => `${user.firstName} ${user.lastName}`);

	const fetchUsers = async (event: CustomEvent<string>) => {
		console.log({ event: event.detail });
		try {
			const res = await fetch(`https://dummyjson.com/users/search?q=${event.detail}`);
			const data = await res.json();
			users = data?.users;
		} catch (error) {
			console.error(error);
		}
	};
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/experiments', name: 'Experiments' }
	]}
	current="Mention Input"
/>

<MentionInput bind:inputValue on:mention={fetchUsers} bind:suggestions={userNames} />
