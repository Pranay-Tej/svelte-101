import { AUTH_TOKEN } from '$lib/constants/app.constants';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (event) => {
	event.cookies.delete(AUTH_TOKEN);
	throw redirect(303, '/auth/login');
};
