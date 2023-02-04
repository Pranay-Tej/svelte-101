import { AUTH_TOKEN } from '$lib/constants/app.constants';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');

		console.log({ username, password });
		event.cookies.set(AUTH_TOKEN, 'secret_token', {
			httpOnly: true
			// maxAge: 30
		});
		throw redirect(303, '/auth/profile');
	}
} satisfies Actions;
