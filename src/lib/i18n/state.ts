import { writable, type Writable } from "svelte/store";
import { browser } from '$app/environment';

// A wrapper around Sveltle's `writable` to sync with local storage
// Only works in the browser, so with production builds.
export const persistentWritable = <T>(key: string, defaultValue?: T): Writable<T> => {
    if (browser) {
        const storageValue = localStorage.getItem(key);
        const store = writable<T>(storageValue ? JSON.parse(storageValue) as T : defaultValue);
        store.subscribe(newValue => localStorage.setItem(key, newValue ? JSON.stringify(newValue) : ""));
        return store;
    }
    return writable(defaultValue);
};
