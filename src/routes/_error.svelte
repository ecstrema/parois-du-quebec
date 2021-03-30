<script lang="ts">
    import HiddenLinks from "../components/HiddenLinks.svelte";
    import { t } from "s20n";
    export let status;
</script>

<HiddenLinks/>
<h1>{status}</h1>
<h2>{$t("404.error", "C'est une erreur...")}</h2>
<h2><a href=".">{$t("404.backToHomePage", "Retour à la page d'acceuil")}</a></h2>

<style>
    h1, h2, a {
        text-align: center;
    }

    a {
        text-decoration: none;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 5px;
    }
    a:hover, a:focus {
        box-shadow: 1px 1px 0 0 lightgray;
    }
    a:focus {
        outline: none;
    }
</style>
