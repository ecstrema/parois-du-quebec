<svelte:head>
	<title>{$t("Carte")}</title>
</svelte:head>

<script lang="ts">
    import { t } from "../lib/i18n";
</script>

<div class="map-flex">
    <iframe class="map" title="map" src="https://www.google.com/maps/d/embed?mid=12rFi5ORnk2MO5N1Y5GMdapjfeEoScThB" width="640" height="480"></iframe>
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
