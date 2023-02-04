<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
</script>

<Breadcrumbs links={[{ link: '/', name: 'Home' }]} current="Authentication (SSR)" />

<main>
	{#if $page.data.userId}
		<form action="/auth/logout" method="POST">
			<button>Logout</button>
		</form>
	{/if}

	<slot />
</main>

<ul class="my-10 grid gap-2">
	<li>Protect routes within (private)</li>
	<li>Store credentials on cookies to enable access from server in hooks.server.ts</li>
	<li>
		Store userId event.locals in hooks.server.ts and then provide access from layout.server.ts as
		page data
	</li>
	<li>Access userId as $page.data.userId from $app/stores</li>
	<li>Redirect to login page if accessing private routes without logged in</li>
	<li>Redirect from login page to profile page if already logged in</li>
	<li>Delete cookie on logout</li>
</ul>

<ul class="mt- 10 grid gap-2 text-orange-700">
	<li class="font-bold">Todo:</li>
	<li>Loading state when logging in</li>
	<li>Error state on login</li>
</ul>
