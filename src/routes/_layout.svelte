<script lang="ts">
    import Header from "../components/Header.svelte";
	import S20n from "s20n";
	import type { localeType } from "s20n";

	const locales: localeType[] = [
		{ path: "./locales/fr.json5", name: "fr"},
		{ path: "./locales/en.json5", name: "en"},
	]
</script>

<S20n current="fr" {locales}/>
<Header/>
<div class="centered-layout">
    <main>
        <slot></slot>
    </main>
</div>

<style>
	main {
		padding-left: 30px;
		padding-right: 30px;
	}

	@media only screen and (max-width: 600px) {
		main {
			padding-left: 20px;
			padding-right: 20px;
		}
	}

</style>
