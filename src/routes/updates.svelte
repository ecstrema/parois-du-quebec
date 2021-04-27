<svelte:head>
	<title>{$t("Mises-à-jour")}</title>
</svelte:head>

<script lang="ts">
    import Title from "../components/Title.svelte";
    import { Tr, t } from "s20n";
</script>

<Title><Tr t="Mises-à-jour"/></Title>
<p class="note"><Tr t="Il n'y a pour l'instant aucune mise-à-jour."/></p>

<style>
    .note {
        text-align: center;
        color: darkgray;
        font-size: 18px;

        margin-top: 40px;
    }
</style>
