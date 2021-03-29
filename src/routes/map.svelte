<script lang="ts">
    import Title from "../components/Title.svelte";
    import { t } from "s20n";
</script>

<!-- <Title>{$t("map.title")}</Title> -->
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
