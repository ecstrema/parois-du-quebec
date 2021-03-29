<script lang="ts">
    import Header from "../components/Header.svelte";
	import S20n from "s20n";
	import type { localeType } from "s20n";

	const locales: localeType[] = [
		{ path: "/locales/fr.json", name: "fr"},
		{ path: "/locales/en.json", name: "en"},
	]
</script>

<S20n current="fr" {locales}/>
<Header/>
<main>
    <slot></slot>
</main>

<style>
	main {
		padding-left: 30px;
		padding-right: 30px;
	}
</style>
