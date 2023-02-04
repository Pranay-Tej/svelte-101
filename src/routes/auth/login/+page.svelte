<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let username = '';
	let password = '';

	onMount(() => {
		if ($page.data.userId) {
			goto('/auth/profile');
		}
	});
</script>

<form method="POST" class="grid gap-3 max-w-sm">
	<label for="username"
		>Username

		<input id="username" name="username" bind:value={username} type="text" />
	</label>

	<label for="password"
		>Password

		<input id="password" name="password" bind:value={password} type="password" />
	</label>

	<button>Login</button>
</form>
