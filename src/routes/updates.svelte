<svelte:head>
	<title>{$t("Mises-a-jour")}</title>
</svelte:head>

<script lang="ts">
    import Title from "../components/Title.svelte";
    import UpdatesEn from "../components/UpdatesEn.svelte.md";
    import UpdatesFr from "../components/UpdatesFr.svelte.md";
    import { t, locale } from "../lib/i18n";
</script>

<Title>{$t("Mises-a-jour")}</Title>
<div style="text-align: center;">
    {#if $locale == "fr"}
    <UpdatesFr />
    {:else}
    <UpdatesEn />
    {/if}
</div>
