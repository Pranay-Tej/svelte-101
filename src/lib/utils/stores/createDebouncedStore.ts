import { onDestroy } from 'svelte';
import { get, writable } from 'svelte/store';

export const createDebouncedStore = <T>(initialValue: T | undefined, duration = 250) => {
	const value = writable<T>(initialValue);
	const debouncedValue = writable<T>(initialValue);
	// const timeoutId = writable<NodeJS.Timeout>();
	let timeoutId: NodeJS.Timeout;

	const unsubscribe = value.subscribe((val) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		// const timerId = setTimeout(() => {
		timeoutId = setTimeout(() => {
			debouncedValue.set(val);
		}, duration);
		// timeoutId.set(timerId);
	});

	onDestroy(() => {
		// clearTimeout(get(timeoutId));
		clearTimeout(timeoutId);
		unsubscribe();
		console.log('Clearing debounced value');
	});

	return {
		value,
		debouncedValue: {
			subscribe: debouncedValue.subscribe
		}
	};
};
