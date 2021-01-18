import { writable } from 'svelte/store';

export const dimentions = writable({
    width: '',
    height: '',
    left: '',
    top: '',
});