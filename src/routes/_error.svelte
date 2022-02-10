<script lang="ts">
    import { t } from "$i18n";
    export let status: string;
</script>

<svelte:head>
    <title>{$t("Erreur 404") + " | " + $t("Escalade Laurentides")}</title>
</svelte:head>

<h1>{status}</h1>
<h2>{$t("erreurSEstProduite")}</h2>
<h2><a href="/">{$t("retourAcceuil")}</a></h2>

<style>
    h1,
    h2,
    a {
        text-align: center;
    }

    a {
        text-decoration: none;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 5px;
        box-sizing: border-box;
    }
    a:hover,
    a:focus {
        box-shadow: 1px 1px 0 0 lightgray;
    }
    a:focus {
        outline: none;
    }
</style>
