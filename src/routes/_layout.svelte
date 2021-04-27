<script lang="ts">
    import Header from "../components/Header.svelte";
	import { registerLoader, initS20n } from "s20n";
    import JSON5 from "json5";

    registerLoader({
        matcher: ".json5",
        handle: async function handler(path) {
            return fetch(path).then(r => r.text()).then(t => JSON5.parse(t));
        }
    })


	initS20n([
		{ path: "./locales/en.json5", name: "en"},
	], {
		readFromNavigator: false,
		sourceLocale: "fr",
		})
</script>

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
	@media only screen and (max-width: 500px) {
		main {
			padding-left: 12px;
			padding-right: 12px;
		}
	}
	@media only screen and (max-width: 400px) {
		main {
			padding-left: 5px;
			padding-right: 5px;
		}
	}

</style>
