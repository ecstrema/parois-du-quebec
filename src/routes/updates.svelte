<script lang="ts">
    import { Title, UpdatesEn, UpdatesFr } from "$components";
    import { t, locale } from "$i18n";

    import SvelteSeo from "svelte-seo";
</script>

<svelte:head>
    <title>{$t("Mises-a-jour")}</title>
</svelte:head>

<SvelteSeo
    title="Mises-à-jour"
    description="Les mises-à-jour du guide des Laurentides."
/>

<Title>{$t("Mises-a-jour")}</Title>
<div style="text-align: center;">
    {#if $locale == "fr"}
        <UpdatesFr />
    {:else}
        <UpdatesEn />
    {/if}
</div>
