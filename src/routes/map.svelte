<script lang="ts">
    import { t } from "$i18n";

    import SvelteSeo from "svelte-seo";
    $: pageTitle = `${$t("Carte")} • ${$t("Escalade Laurentides")}`;
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<SvelteSeo
    description="Carte des sites contenus dans le guide des Laurentides."
/>

<div class="map-flex">
    <iframe
        class="map"
        title={$t("Carte")}
        src="https://www.google.com/maps/d/embed?mid=12rFi5ORnk2MO5N1Y5GMdapjfeEoScThB"
        width="640"
        height="480"
    />
</div>

<div class="map-flex">
    <iframe
        class="map"
        title={$t("Carte")}
        src="https://www.google.com/maps/d/u/0/embed?mid=13HrRBXsaaNbE-dgmgSZDOxWEp_mCkSHn"
        width="640"
        height="480"
    />
</div>

<style>
    .map-flex {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .map {
        width: 100%;
        flex-grow: 1;
    }
</style>
