<script lang="ts">
    import { Title, UpdatesEn, UpdatesFr } from "$components";
    import { t, locale } from "$i18n";

    import SvelteSeo from "svelte-seo";

    $: pageTitle = `${$t("Mises-a-jour")} • ${$t("Escalade Laurentides")}`;
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<SvelteSeo description="Les mises-à-jour du guide des Laurentides." />

<Title>{$t("Mises-a-jour")}</Title>
<div style="text-align: center;">
    {#if $locale == "fr"}
        <UpdatesFr />
    {:else}
        <UpdatesEn />
    {/if}
</div>
