import { AUTH_TOKEN } from '$lib/constants/app.constants';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const authtoken: string | undefined = event.cookies.get(AUTH_TOKEN);
	console.log('authToken', authtoken);
	if (authtoken) {
		event.locals.userId = '007';
	} else {
		if (event.route.id?.startsWith('/auth/(private)')) {
			throw redirect(302, '/auth/login');
		}
	}
	return await resolve(event);
};
